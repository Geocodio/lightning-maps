import TileConversion from './TileConversion';
import TileLayer from './TileLayer';
import MapState from './MapState';
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
      markers: [],
      polygons: [],
      tileLayers: [
        new TileLayer(this)
      ],
      mousePosition: { x: 0, y: 0}
    };
  }

  getZoom() {
    return this.options.zoom;
  }

  setZoom(zoom) {
    if (this.zoomValueIsValid(zoom) && this.isReadyForZoomEvent()) {
      zoom = Math.round(zoom);

      this.state.tileLayers.push(new TileLayer(this, zoom));
      // this.state.tileLayers[0].tilesZoomLevel = this.options.zoom;

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

      const centerX = this.state.canvasDimensions[0] / 2;
      const centerY = this.state.canvasDimensions[1] / 2;

      this.setTargetMoveOffset(
        -(event.clientX - centerX),
        -(event.clientY - centerY)
      );

      this.setZoom(this.options.zoom + 1);
    });

    this.canvas.addEventListener('mousedown', event => {
      event.preventDefault();

      if (!this.handleControlsMouseEvent(event, 'mousedown')) {
        this.state.mouseVelocities = [];

        this.state.dragStartPosition = [
          event.clientX - this.state.moveOffset[0],
          event.clientY - this.state.moveOffset[1]
        ];
      }
    });

    this.canvas.addEventListener('mouseup', event => {
      event.preventDefault();

      if (!this.state.dragStartPosition) {
        this.handleControlsMouseEvent(event, 'mouseup');
      } else {
        const x = -(this.state.dragStartPosition[0] - event.clientX);
        const y = -(this.state.dragStartPosition[1] - event.clientY);

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

        this.state.dragStartPosition = null;
      }
    });

    this.canvas.addEventListener('mousemove', event => {
      event.preventDefault();

      if (this.state.dragStartPosition) {
        const x = -(this.state.dragStartPosition[0] - event.clientX);
        const y = -(this.state.dragStartPosition[1] - event.clientY);

        const now = window.performance.now();

        const vx = this.calculateVelocity(this.state.moveOffset[0], x, now, this.state.lastMouseMoveEvent);
        const vy = this.calculateVelocity(this.state.moveOffset[1], y, now, this.state.lastMouseMoveEvent);

        const velocity = Math.round(Math.sqrt((vx * vx) + (vy * vy)));

        this.state.mouseVelocities.push([now, velocity]);

        this.setTargetMoveOffset(x, y, false);
        this.state.lastMouseMoveEvent = window.performance.now();
      } else {
        this.handleControlsMouseEvent(event, 'mousemove');
      }

      return false;
    });
  }

  easeOutQuad(time) {
    return time * (2 - time);
  }

  updateMoveOffset() {
    const targetMoveOffsetChanged = this.state.moveOffset !== this.state.targetMoveOffset;

    if (targetMoveOffsetChanged) {
      const timestamp = window.performance.now();

      const progress = Math.max(timestamp - this.state.moveAnimationStart, 0);
      const percentage = this.easeOutQuad(progress / this.options.animationDurationMs);

      let targetMoveOffset = this.state.targetMoveOffset;

      if (this.state.targetMoveOffsetIsCoord) {
        targetMoveOffset = TileConversion.latLonToPixel(
          this.state.targetMoveOffset,
          this.options.center,
          this.options.zoom,
          this.options.tileSize
        );
      }

      if (percentage >= 0.99) {
        this.state.moveOffset = targetMoveOffset;
      } else {
        this.state.moveOffset = [
          this.state.moveOffset[0] + (targetMoveOffset[0] - this.state.moveOffset[0]) * percentage,
          this.state.moveOffset[1] + (targetMoveOffset[1] - this.state.moveOffset[1]) * percentage
        ];
      }

      const targetHasBeenReached = this.state.moveOffset === targetMoveOffset;

      if (targetHasBeenReached) {
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

        // this.state.tileLayers[this.state.tileLayers.length - 1].shouldBeDeleted = true;
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

  maxTilesToKeep() {
    return 1000;
  }

  shouldRedraw() {
    const drawState = JSON.stringify([this.state, this.options]);

    if (this.lastDrawState !== drawState) {
      this.lastDrawState = drawState;

      return true;
    }

    return false;
  }

  draw() {
    this.updateMoveOffset();
    this.updateZoom();
    this.state.tileLayers.forEach(tileLayer => tileLayer.calculateGrid());
    this.garbageCollect();

    if (this.shouldRedraw()) {
      // Delete tile layers that are ready for deletion and mostly loaded
      /*
      this.state.tileLayers = this.state.tileLayers
        .filter(tileLayer => !(tileLayer.shouldBeDeleted && tileLayer.loadedPercentage() >= 0.9));

      console.log(this.state.tileLayers.length);
      */

      if (this.state.tileLayers.length > 0) {
        // Only draw the top layer
        this.state.tileLayers[0].drawTiles(this.state.scale);
      }

      this.renderPolygons();
      this.renderMarkers();
      this.renderControls();
      this.renderAttribution();
    }

    window.requestAnimationFrame(this.draw);
  }

  getMapBounds() {
    const nw = TileConversion.pixelToLatLon(
      [this.state.canvasDimensions[0] / 2, (this.state.canvasDimensions[1] / 2)],
      this.options.center,
      this.options.zoom,
      this.options.tileSize
    );

    const se = TileConversion.pixelToLatLon(
      [-this.state.canvasDimensions[0] / 2, -(this.state.canvasDimensions[1] / 2)],
      this.options.center,
      this.options.zoom,
      this.options.tileSize
    );

    return {
      nw, se
    };
  }

  renderMarkers() {
    const bounds = this.getMapBounds();

    const visibleMarkers = this.state.markers.filter(marker => {
      return marker.coords[0] <= bounds.nw[0] && marker.coords[0] >= bounds.se[0]
        && marker.coords[1] >= bounds.nw[1] && marker.coords[1] <= bounds.se[1];
    });

    const center = [
      this.state.canvasDimensions[0] / 2,
      this.state.canvasDimensions[1] / 2
    ];

    visibleMarkers.map(marker => {
      const position = TileConversion.latLonToPixel(
        marker.coords,
        this.options.center,
        this.options.zoom,
        this.options.tileSize
      );

      marker.render(this.context, [
        center[0] - position[0] + this.state.moveOffset[0],
        center[1] - position[1] + this.state.moveOffset[1]
      ]);
    });
  }

  renderPolygons() {
    const mapState = new MapState(
      this.options.center,
      this.options.zoom,
      this.state.targetZoom,
      this.options.tileSize,
      this.state.canvasDimensions,
      this.state.moveOffset
    );

    this.state.polygons.map(polygon => {
      polygon.render(this.context, mapState);
    });
  }

  handleControlsMouseEvent(event, name) {
    this.state.mousePosition = {
      x: event.clientX,
      y: event.clientY
    };

    const bounds = this.getControlsBounds();

    const zoomInHover = this.isMouseOverObject(bounds.zoomIn);
    const zoomOutHover = this.isMouseOverObject(bounds.zoomOut);

    if (name === 'mouseup') {
      if (zoomInHover) {
        this.setZoom(this.options.zoom + 1);
      } else if (zoomOutHover) {
        this.setZoom(this.options.zoom - 1);
      }
    }

    const anyControlIsHover = zoomInHover || zoomOutHover;

    this.canvas.style.cursor = anyControlIsHover ? 'pointer' : 'grab';

    return anyControlIsHover;
  }

  getControlsBounds() {
    const margin = 4;
    const size = 30;

    return {
      zoomIn: {
        x: margin,
        y: margin,
        width: size,
        height: size
      },
      zoomOut: {
        x: margin,
        y: margin + size + margin,
        width: size,
        height: size
      }
    };
  }

  renderControls() {
    const bounds = this.getControlsBounds();

    this.renderControl(bounds.zoomIn, '+');
    this.renderControl(bounds.zoomOut, '-');
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
    this.context.fillStyle = 'rgba(255, 255, 255)';

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

  addMarker(marker) {
    this.state.markers.push(marker);
  }

  addMarkers(markers) {
    markers.map(marker => this.addMarker(marker));
  }

  setMarkers(markers) {
    this.state.markers = markers;
  }

  addPolygon(polygon) {
    this.state.polygons.push(polygon);
  }

  setPolygons(polygons) {
    this.state.polygons = polygons;
  }

}
