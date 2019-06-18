import TileConversion from './TileConversion';
import TileLayer from './TileLayer';
import MapState from './MapState';
import MarkerRenderer from './MarkerRenderer';
import { defaultMapOptions } from './defaultOptions';

export default class Map {

  constructor(canvas, options) {
    if (!canvas || !canvas.getContext) {
      throw new Error('Could not get canvas context');
    }

    this.canvas = canvas;
    this.context = this.canvas.getContext('2d');

    this.options = Object.assign({}, defaultMapOptions, options);

    this.initializeState();
    this.attachEvents();

    this.lastDrawState = null;

    /**
     * Events
     */
    this.onMarkerClicked = null;
    this.onMarkerHover = null;
    this.onPolygonClicked = null;
    this.onPolygonHover = null;
    this.onMapCenterChanged = null;
    this.onMapZoomChanged = null;
    this.onMapPanned = null;

    this.draw = this.draw.bind(this);
    window.requestAnimationFrame(this.draw);
  }

  initializeState() {
    this.state = {
      canvasDimensions: [this.canvas.width, this.canvas.height],
      tiles: {},
      moveOffset: [0, 0],
      targetMoveOffset: [0, 0],
      targetMoveOffsetIsCoord: false,
      moveAnimationStart: null,
      dragStartPosition: null,
      lastZoomEventActionTime: null,
      startZoom: this.options.zoom,
      targetZoom: this.options.zoom,
      zoomAnimationStart: null,
      scale: 1,
      lastMouseMoveEvent: null,
      mouseVelocities: [],
      markerRenderer: new MarkerRenderer(this.options.markerRenderMode),
      polygons: [],
      tileLayers: [
        new TileLayer(this)
      ],
      mousePosition: { x: 0, y: 0},
      forceRedraw: false,
      forceRerenderMarkers: false
    };
  }

  getZoom() {
    return this.options.zoom;
  }

  setZoom(zoom) {
    if (this.zoomValueIsValid(zoom) && this.isReadyForZoomEvent()) {
      zoom = Math.round(zoom);

      this.state.tileLayers.push(new TileLayer(this, zoom));

      this.state.lastZoomEventActionTime = window.performance.now();
      this.state.zoomAnimationStart = window.performance.now();
      this.state.targetZoom = zoom;
      this.state.startZoom = this.options.zoom;
    }
  }

  setCenter(coord) {
    if (!Array.isArray(coord) || coord.length !== 2) {
      throw new Error('Please provide a valid array with a lat/lon');
    }

    coord = coord.map(coord => parseFloat(coord));

    this.state.moveAnimationStart = window.performance.now();
    this.state.targetMoveOffset = coord;
    this.state.targetMoveOffsetIsCoord = true;
  }

  setTargetMoveOffset(x, y, animated = true) {
    this.onMapPanned && this.onMapPanned([x, y]);

    if (animated) {
      this.state.moveAnimationStart = window.performance.now();

      this.state.targetMoveOffset = TileConversion.pixelToLatLon(
        [x, y],
        this.options.center,
        this.options.zoom,
        this.options.tileSize
      );

      this.state.targetMoveOffsetIsCoord = true;
    } else {
      this.state.targetMoveOffset = [x, y];
      this.state.targetMoveOffsetIsCoord = false;

      this.state.moveOffset = this.state.targetMoveOffset;
    }
  }

  zoomValueIsValid(zoom) {
    return zoom >= 1 && zoom <= 18;
  }

  isReadyForZoomEvent() {
    if (!this.state.lastZoomEventActionTime) {
      return true;
    }

    const now = window.performance.now();
    const milliSecondsSinceLastEvent = now - this.state.lastZoomEventActionTime;

    return milliSecondsSinceLastEvent > this.options.debounceIntervalMs;
  }

  calculateVelocity(position1, position2, time1, time2) {
    return ((position1 - position2) / (time1 - time2)) * 1000;
  }

  attachEvents() {
    this.canvas.addEventListener('wheel', event => {
      event.preventDefault();

      if (event.deltaY > 5) {
        this.setZoom(this.options.zoom - 1);
      } else if (event.deltaY < -5) {
        this.setZoom(this.options.zoom + 1);
      }
    });

    this.canvas.addEventListener('dblclick', event => {
      event.preventDefault();
      this.updateMousePosition(event);

      if (!this.handleMouseEventInteraction(event, 'dblclick')) {
        const canvasCenter = this.getCanvasCenter();

        this.setTargetMoveOffset(
          -(this.state.mousePosition.x - canvasCenter[0]),
          -(this.state.mousePosition.y - canvasCenter[1])
        );

        this.setZoom(this.options.zoom + 1);
      }
    });

    this.canvas.addEventListener('mousedown', event => {
      event.preventDefault();
      this.updateMousePosition(event);

      if (!this.handleMouseEventInteraction(event, 'mousedown')) {
        this.state.mouseVelocities = [];

        this.state.dragStartPosition = [
          this.state.mousePosition.x - this.state.moveOffset[0],
          this.state.mousePosition.y - this.state.moveOffset[1]
        ];
      }
    });

    this.canvas.addEventListener('mouseup', event => {
      event.preventDefault();
      this.updateMousePosition(event);

      if (!this.state.dragStartPosition) {
        this.handleMouseEventInteraction(event, 'mouseup');
      } else {
        const x = -(this.state.dragStartPosition[0] - this.state.mousePosition.x);
        const y = -(this.state.dragStartPosition[1] - this.state.mousePosition.y);

        this.state.dragStartPosition = null;

        const dragDistanceBelowThreshold = Math.abs(x) <= 5 && Math.abs(y) <= 5;

        if (dragDistanceBelowThreshold) {
          this.handleMouseEventInteraction(event, 'mouseup');
        } else {
          if (this.state.moveOffset[0] !== 0 || this.state.moveOffset[1] !== 0) {
            const now = window.performance.now();
            const timingThreshold = now - this.options.throwTimingThresholdMs;

            const thresholdsToConsider = this.state.mouseVelocities
              .filter(threshold => threshold[0] > timingThreshold)
              .map(threshold => threshold[1]);

            const velocitySum = thresholdsToConsider.reduce(
              (accumulator, velocity) => accumulator + velocity,
              0
            );

            const averageVelocity = velocitySum / thresholdsToConsider.length;

            if (averageVelocity >= this.options.throwVelocityThreshold) {
              let multiplier = averageVelocity / this.options.throwVelocityThreshold
                * this.options.panAccelerationMultiplier;

              multiplier = Math.min(multiplier, this.options.maxPanAcceleration);

              this.setTargetMoveOffset(
                x * multiplier,
                y * multiplier
              );
            } else {
              this.updateCenter();
            }
          }
        }
      }
    });

    this.canvas.addEventListener('mousemove', event => {
      event.preventDefault();
      this.updateMousePosition(event);

      if (this.state.dragStartPosition) {
        const x = -(this.state.dragStartPosition[0] - this.state.mousePosition.x);
        const y = -(this.state.dragStartPosition[1] - this.state.mousePosition.y);

        const now = window.performance.now();

        const vx = this.calculateVelocity(this.state.moveOffset[0], x, now, this.state.lastMouseMoveEvent);
        const vy = this.calculateVelocity(this.state.moveOffset[1], y, now, this.state.lastMouseMoveEvent);

        const velocity = Math.round(Math.sqrt((vx * vx) + (vy * vy)));

        this.state.mouseVelocities.push([now, velocity]);

        this.setTargetMoveOffset(x, y, false);

        this.state.lastMouseMoveEvent = window.performance.now();
      } else {
        this.handleMouseEventInteraction(event, 'mousemove');
      }

      return false;
    });

    this.canvas.addEventListener('mouseleave', event => {
      if (this.options.hideControlsUntilActive) {
        this.state.showControls = false;
      }
    });

    this.canvas.addEventListener('mouseenter', event => {
      if (this.options.hideControlsUntilActive) {
        this.state.showControls = true;
      }
    });
  }

  isCurrentlyDraggingMap() {
    return this.state.dragStartPosition !== null;
  }

  enablePolygonInteractivity() {
    return this.onPolygonHover || this.onPolygonClicked;
  }

  updateMousePosition(event) {
    const rect = this.canvas.getBoundingClientRect();

    this.state.mousePosition = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    };
  }

  easeOutQuad(time) {
    return time * (2 - time);
  }

  updateMoveOffset() {
    const targetMoveOffset = this.state.targetMoveOffsetIsCoord
      ? TileConversion.latLonToPixel(
        this.state.targetMoveOffset,
        this.options.center,
        this.options.zoom,
        this.options.tileSize
      )
      : this.state.targetMoveOffset;

    const moveOffsetNeedsToBeUpdated = this.state.moveOffset.join(',') !== targetMoveOffset.join(',');

    if (moveOffsetNeedsToBeUpdated) {
      const timestamp = window.performance.now();

      const progress = Math.max(timestamp - this.state.moveAnimationStart, 0);
      const percentage = this.easeOutQuad(progress / this.options.animationDurationMs);

      if (percentage >= 0.99 || percentage < 0) {
        this.state.moveOffset = targetMoveOffset;
      } else {
        this.state.moveOffset = [
          this.state.moveOffset[0] + (targetMoveOffset[0] - this.state.moveOffset[0]) * percentage,
          this.state.moveOffset[1] + (targetMoveOffset[1] - this.state.moveOffset[1]) * percentage
        ];
      }

      const targetHasBeenReached = this.state.moveOffset.join(',') === targetMoveOffset.join(',');

      if (targetHasBeenReached) {
        this.state.targetMoveOffsetIsCoord = false;

        this.updateCenter();
      }
    }
  }

  updateCenter() {
    const latLon = TileConversion.pixelToLatLon(
      this.state.moveOffset,
      this.options.center,
      this.options.zoom,
      this.options.tileSize
    );

    this.setTargetMoveOffset(0, 0, false);
    this.options.center = latLon;

    this.onMapCenterChanged && this.onMapCenterChanged(this.options.zoom, this.options.center);
  }

  updateZoom() {
    if (this.options.zoom !== this.state.targetZoom) {
      const progress = Math.max(window.performance.now() - this.state.zoomAnimationStart, 0);
      const percentage = this.easeOutQuad(progress / this.options.animationDurationMs);

      let differenceFromTarget = Math.abs(this.state.targetZoom - this.state.startZoom);

      if (this.state.targetZoom <= this.state.startZoom) {
        differenceFromTarget *= -1;
      }

      const newZoomDiff = differenceFromTarget * percentage;
      const remainingTime = this.options.animationDurationMs - progress;

      this.options.zoom = remainingTime <= 5
        ? this.state.targetZoom
        : (this.state.startZoom + newZoomDiff);

      const roundedZoom = Math.round(this.options.zoom);
      const diff = this.options.zoom - roundedZoom;

      this.state.scale = Math.pow(2, diff);

      if (this.options.zoom === this.state.targetZoom) {
        // Mark old tile layer for deletion
        this.state.tileLayers.shift();
        this.state.tileLayers[0].tilesZoomLevel = null;

        this.onMapZoomChanged && this.onMapZoomChanged(this.options.zoom, this.options.center);
      }
    } else {
      this.state.scale = 1;
    }
  }

  garbageCollect() {
    const allTiles = Object.values(this.state.tiles);

    if (allTiles.length > this.maxTilesToKeep()) {
      const tileExpirationCutOff = new Date().getTime() - 5000;

      const tilesToConsider = allTiles
        .filter(tile => tile.lastRequested < tileExpirationCutOff)
        .sort((a, b) => ~~(a.lastRequested < b.lastRequested));

      const tilesToDeleteCount = this.maxTilesToKeep() - (allTiles.length - tilesToConsider.length);

      tilesToConsider
        .splice(tilesToConsider.length - tilesToDeleteCount)
        .forEach(tile => {
          tile.src = '';
          delete this.state.tiles[tile.tileId];
        });
    }
  }

  snapshotMapState() {
    return new MapState(
      this.options.center,
      this.options.zoom,
      this.state.targetZoom,
      this.options.tileSize,
      this.state.canvasDimensions,
      this.getCanvasCenter(),
      this.state.moveOffset
    );
  }

  maxTilesToKeep() {
    return 1000;
  }

  shouldRedraw() {
    if (this.state.forceRedraw) {
      this.state.forceRedraw = false;

      return true;
    }

    const drawState = JSON.stringify([this.state, this.options]);

    if (this.lastDrawState !== drawState) {
      this.lastDrawState = drawState;

      return true;
    }

    return false;
  }

  draw() {
    this.options.log && console.log(this.snapshotMapState());

    this.updateMoveOffset();
    this.updateZoom();
    this.state.tileLayers.forEach(tileLayer => tileLayer.calculateGrid());
    this.garbageCollect();

    if (this.shouldRedraw()) {
      if (this.state.tileLayers.length > 0) {
        // Only draw the top layer
        this.state.tileLayers[0].drawTiles(this.state.scale);
      }

      const mapState = this.snapshotMapState();

      this.renderPolygons(mapState);
      this.renderMarkers(mapState);
      this.renderControls();
      this.renderAttribution();
    }

    window.requestAnimationFrame(this.draw);
  }

  getMapBounds() {
    const canvasCenter = this.getCanvasCenter();

    const nw = TileConversion.pixelToLatLon(
      [canvasCenter[0], canvasCenter[1]],
      this.options.center,
      this.options.zoom,
      this.options.tileSize
    );

    const se = TileConversion.pixelToLatLon(
      [-canvasCenter[0], -canvasCenter[1]],
      this.options.center,
      this.options.zoom,
      this.options.tileSize
    );

    return {
      nw, se
    };
  }

  getCanvasCenter() {
    return [
      this.state.canvasDimensions[0] / 2,
      this.state.canvasDimensions[1] / 2
    ];
  }

  renderMarkers(mapState) {
    this.state.markerRenderer.render(this.context, mapState, this.getMapBounds(), this.state.forceRerenderMarkers);
    this.state.forceRerenderMarkers = false;
  }

  renderPolygons(mapState) {
    this.state.polygons.map(polygon => {
      polygon.render(this.context, mapState);

      if (this.enablePolygonInteractivity() && !this.isCurrentlyDraggingMap()) {
        polygon.handleMouseOver(this.context, mapState, this.state.mousePosition);
      }
    });
  }

  handleMouseEventInteraction(event, name) {
    const controlObjects = this.getControlObjects().filter(item => this.isMouseOverObject(item.bounds));
    const shouldEmitMarkerEvents = controlObjects.length <= 0 && (this.onMarkerClicked || this.onMarkerHover);

    const markers = shouldEmitMarkerEvents
      ? this.state.markerRenderer.getMarkersBounds(this.snapshotMapState(), this.getMapBounds())
        .filter(item => this.isMouseOverObject(item.bounds))
      : [];

    const firstMarker = markers[0] || null;

    if (name === 'mouseup') {
      if (controlObjects.length > 0) {
        const controlObject = controlObjects[0];

        this.setZoom(controlObject.label === '+'
          ? this.options.zoom + 1
          : this.options.zoom - 1);
      }

      if (this.onMarkerClicked && firstMarker) {
        this.onMarkerClicked(firstMarker.marker);
      }
    } else {
      if (this.onMarkerHover && firstMarker) {
        this.onMarkerHover(firstMarker.marker);
      }
    }

    let controlsOrMarkersIsHover = controlObjects.length > 0 || firstMarker;

    let polygonIsHover = false;

    if (this.enablePolygonInteractivity() && !this.isCurrentlyDraggingMap() && !controlsOrMarkersIsHover) {
      let polygons = [];

      const mapState = this.snapshotMapState();

      polygons = this.state.polygons.map(polygon => {
        return {
          polygon,
          activatedAreas: polygon.handleMouseOver(null, mapState, this.state.mousePosition)
        };
      }).filter(polygon => polygon.activatedAreas.length > 0);

      polygonIsHover = polygons.length > 0;

      if (polygonIsHover) {
        const eventHandler = (name === 'mouseup')
          ? this.onPolygonClicked
          : this.onPolygonHover;

        if (eventHandler) {
          polygons.map(polygon => polygon.activatedAreas.map(item => eventHandler(item, polygon.polygon.meta)));
        }
      }
    }

    this.canvas.style.cursor = controlsOrMarkersIsHover || polygonIsHover
      ? 'pointer'
      : 'grab';

    // Let caller know if controls or markers were interacted with. This will prevent further
    // mouse interactions from being triggered
    return controlsOrMarkersIsHover;
  }

  getControlObjects() {
    const margin = 4;
    const size = 30;

    return [
      {
        bounds: {
          x: margin,
          y: margin,
          width: size,
          height: size
        },
        label: '+'
      },
      {
        bounds: {
          x: margin,
          y: margin + size + margin,
          width: size,
          height: size
        },
        label: '-'
      }
    ];
  }

  renderControls() {
    if (this.state.showControls) {
      this.getControlObjects().map(item => this.renderControl(item.bounds, item.label));
    }
  }

  renderControl(bounds, label) {
    const radius = 10;

    // Background
    this.context.fillStyle = this.isMouseOverObject(bounds)
      ? 'rgba(100, 100, 100, 0.7)'
      : 'rgba(0, 0, 0, 0.7)';

    this.roundedRectangle(bounds.x, bounds.y, bounds.width, bounds.height, radius);

    // Text
    this.context.font = 'bold 25px courier';
    this.context.textAlign = 'center';
    this.context.textBaseline = 'middle';
    this.context.fillStyle = '#fff';

    this.context.fillText(
      label,
      bounds.x + (bounds.width / 2),
      bounds.y + (bounds.height / 2)
    );
  }

  isMouseOverObject(bounds) {
    return this.state.mousePosition.x >= bounds.x
      && this.state.mousePosition.x <= bounds.x + bounds.width
      && this.state.mousePosition.y >= bounds.y
      && this.state.mousePosition.y <= bounds.y + bounds.height;
  }

  renderAttribution() {
    const margin = 4;

    this.context.font = 'bold 12px sans-serif';
    this.context.textAlign = 'left';
    this.context.textBaseline = 'alphabetic';

    const textBounds = this.context.measureText(this.options.attribution);

    const x = this.state.canvasDimensions[0] - textBounds.width - margin;
    const y = this.state.canvasDimensions[1] - 2 - margin;

    this.context.fillStyle = 'rgba(255, 255, 255, 0.7)';
    this.roundedRectangle(x - margin, y - 15, textBounds.width + 80, 80);

    this.context.fillStyle = 'rgba(0, 0, 0, 0.7)';
    this.context.fillText(this.options.attribution, x, y);
  }

  roundedRectangle(x, y, width, height, radius = 5) {
    this.context.beginPath();
    this.context.moveTo(x + radius, y);
    this.context.lineTo(x + width - radius, y);
    this.context.quadraticCurveTo(x + width, y, x + width, y + radius);
    this.context.lineTo(x + width, y + height - radius);
    this.context.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    this.context.lineTo(x + radius, y + height);
    this.context.quadraticCurveTo(x, y + height, x, y + height - radius);
    this.context.lineTo(x, y + radius);
    this.context.quadraticCurveTo(x, y, x + radius, y);
    this.context.closePath();

    this.context.fill();
  }

  addMarkers(markers) {
    markers.map(marker => this.addMarker(marker));
  }

  addMarker(marker) {
    this.state.markerRenderer.markers.push(marker);
    this.state.forceRedraw = true;
    this.state.forceRerenderMarkers = true;
  }

  setMarkers(markers) {
    this.state.markerRenderer.markers = markers;
    this.state.forceRedraw = true;
    this.state.forceRerenderMarkers = true;
  }

  addPolygon(polygon) {
    this.state.polygons.push(polygon);
  }

  setPolygons(polygons) {
    this.state.polygons = polygons;
  }

}
