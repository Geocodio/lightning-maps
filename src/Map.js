import TileConversion from './TileConversion';
import Tile from './Tile';
import { defaultMapOptions } from './defaultOptions';

const DEBOUNCE_INTERVAL_MS = 200;

export default class Lightning {

  constructor(canvas, options) {
    if (!canvas || !canvas.getContext) {
      throw new Error('Could not get canvas context');
    }

    this.canvas = canvas;
    this.context = this.canvas.getContext('2d');

    this.options = Object.assign({}, defaultMapOptions, options);

    this.initializeState();
    this.attachEvents();
    this.applyStyles();

    this.lastDrawState = null;

    this.draw = this.draw.bind(this);
    window.requestAnimationFrame(this.draw);
  }

  initializeState() {
    this.state = {
      canvasDimensions: [this.canvas.width, this.canvas.height],
      tiles: {},
      grid: [],
      gridHash: null,
      relativeTileOffset: [0, 0],
      moveOffset: [0, 0],
      targetMoveOffset: [0, 0],
      targetMoveOffsetIsCoord: false,
      moveAnimationStart: null,
      dragStartPosition: null,
      lastEventActionTime: null,
      startZoom: this.options.zoom,
      targetZoom: this.options.zoom,
      zoomAnimationStart: null,
      scale: 1,
      lastMouseMoveEvent: null,
      mouseVelocities: [],
      markers: []
    };
  }

  setZoom(zoom) {
    if (this.zoomValueIsValid(zoom)) {
      this.state.lastEventActionTime = window.performance.now();
      this.state.zoomAnimationStart = window.performance.now();
      this.state.targetZoom = zoom;
      this.state.startZoom = this.options.zoom;
    }
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

  isReadyForEvent() {
    if (!this.state.lastEventActionTime) {
      return true;
    }

    const now = window.performance.now();
    const milliSecondsSinceLastEvent = now - this.state.lastEventActionTime;

    return milliSecondsSinceLastEvent > DEBOUNCE_INTERVAL_MS;
  }

  calculateVelocity(position1, position2, time1, time2) {
    return ((position1 - position2) / (time1 - time2)) * 1000;
  }

  attachEvents() {
    this.canvas.addEventListener('wheel', event => {
      event.preventDefault();

      if (this.isReadyForEvent()) {
        if (event.deltaY > 5) {
          this.setZoom(this.options.zoom - 1);
        } else if (event.deltaY < -5) {
          this.setZoom(this.options.zoom + 1);
        }
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

      this.state.mouseVelocities = [];

      this.state.dragStartPosition = [
        event.clientX - this.state.moveOffset[0],
        event.clientY - this.state.moveOffset[1]
      ];
    });

    this.canvas.addEventListener('mouseup', event => {
      event.preventDefault();

      const x = -(this.state.dragStartPosition[0] - event.clientX);
      const y = -(this.state.dragStartPosition[1] - event.clientY);

      if (this.state.moveOffset[0] !== 0 || this.state.moveOffset[1] !== 0) {
        const now = window.performance.now();
        const timingThreshold = now - this.options.throwTimingThresholdMs;

        const thresholdsToConsider = this.state.mouseVelocities
          .filter(threshold => threshold[0] > timingThreshold)
          .map(threshold => threshold[1]);

        const averageVelocity = thresholdsToConsider.reduce((accumulator, velocity) => accumulator + velocity, 0) / thresholdsToConsider.length;

        if (averageVelocity >= this.options.throwVelocityThreshold) {
          const multiplier = averageVelocity / this.options.throwVelocityThreshold * this.options.panAccelerationMultiplier;

          this.setTargetMoveOffset(
            x * multiplier,
            y * multiplier
          );
        } else {
          this.updateCenter();
        }
      }

      this.state.dragStartPosition = null;
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
      }

      return false;
    });
  }

  applyStyles() {
    this.canvas.style.cursor = 'grab';
  }

  getTilesCount(canvasSize) {
    let tilesCount = Math.ceil(canvasSize / this.options.tileSize) * this.options.tileAreaMultiplier;

    if (tilesCount % 2 === 0) {
      tilesCount++;
    }

    return tilesCount;
  }

  easeOutQuad(time) {
    return time * (2 - time);
  }

  updateMoveOffset() {
    const targetMoveOffsetChanged = Object.values(this.state.moveOffset).join(',')
      !== Object.values(this.state.targetMoveOffset).join(',');

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
          this.options.tileSize,
          this.state.canvasDimensions
        );
      }

      if (percentage >= 0.9) {
        this.state.moveOffset = targetMoveOffset;
      } else {
        this.state.moveOffset = [
          this.state.moveOffset[0] + (targetMoveOffset[0] - this.state.moveOffset[0]) * percentage,
          this.state.moveOffset[1] + (targetMoveOffset[1] - this.state.moveOffset[1]) * percentage
        ];
      }

      const targetHasBeenReached = Object.values(this.state.moveOffset).join(',')
        === Object.values(targetMoveOffset).join(',');

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
      const timestamp = window.performance.now();

      const progress = Math.max(timestamp - this.state.zoomAnimationStart, 0);
      const percentage = this.easeOutQuad(progress / this.options.animationDurationMs);

      const zoomDiff = Math.abs(this.state.targetZoom - this.state.startZoom);
      let newZoomDiff = zoomDiff * percentage;
      const isZoomInOperation = this.state.targetZoom > this.state.startZoom;

      let newZoom = isZoomInOperation
        ? this.state.startZoom + newZoomDiff
        : this.state.startZoom - newZoomDiff;

      if (percentage >= 0.9) {
        newZoom = this.state.targetZoom;
      }

      this.options.zoom = newZoom;

      let nominator = isZoomInOperation ? 1 : -1;
      const scale = nominator - (this.state.targetZoom - this.options.zoom);

      this.state.scale = Math.pow(2, scale);
    } else {
      this.state.scale = 1;
    }
  }

  calculateGrid() {
    const centerY = TileConversion.lat2tile(this.options.center[0], Math.floor(this.options.zoom), false);
    const centerX = TileConversion.lon2tile(this.options.center[1], Math.floor(this.options.zoom), false);
    const gridHash = [centerY, centerX].join(',');

    const gridNeedsToBeUpdated = this.state.gridHash !== gridHash;

    if (!gridNeedsToBeUpdated) {
      return;
    }

    const horizontalTiles = this.getTilesCount(this.state.canvasDimensions[0]);
    const verticalTiles = this.getTilesCount(this.state.canvasDimensions[1]);

    // noinspection JSSuspiciousNameCombination
    const centerYRounded = Math.floor(centerY);
    const centerXRounded = Math.floor(centerX);

    this.state.relativeTileOffset = [
      Math.abs(centerX - centerXRounded),
      Math.abs(centerY - centerYRounded)
    ];

    const startX = centerXRounded - Math.floor(horizontalTiles / 2);
    const startY = centerYRounded - Math.floor(verticalTiles / 2);

    let grid = [];

    for (let y = 0; y < verticalTiles; y++) {
      for (let x = 0; x < horizontalTiles; x++) {
        if (!grid[x]) {
          grid[x] = [];
        }

        const tileX = startX + x;
        const tileY = startY + y;

        if (tileX >= 0 && tileY >= 0) {
          const tile = new Tile(tileX, tileY, Math.floor(this.options.zoom));

          this.ensureTileAsset(tile);

          grid[x][y] = tile;
        }
      }
    }

    this.state.grid = grid;
    this.state.gridHash = gridHash;

    this.garbageCollect();
  }

  ensureTileAsset(tile, expandTilesOnLoad = true) {
    if (!(tile.id in this.state.tiles)) {
      this.state.tiles[tile.id] = new Image();
      this.state.tiles[tile.id].tileId = tile.id;
      this.state.tiles[tile.id].src = this.options.source(Math.floor(tile.x), Math.floor(tile.y), tile.zoom);
      this.state.tiles[tile.id].loaded = false;
      this.state.tiles[tile.id].onload = () => {
        this.state.tiles[tile.id].loaded = true;
      };
    }

    this.state.tiles[tile.id].lastRequested = new Date().getTime();
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
    this.calculateGrid();

    if (this.shouldRedraw()) {
      this.drawTiles();
      this.drawMarkers();
    }

    window.requestAnimationFrame(this.draw);
  }

  drawTiles() {
    const tileSize = this.options.tileSize * this.state.scale;

    const centerOffset = [
      tileSize / 2 - (this.state.relativeTileOffset[0] * tileSize),
      tileSize / 2 - (this.state.relativeTileOffset[1] * tileSize)
    ];

    this.context.fillStyle = '#EEE';
    this.context.fillRect(0, 0, this.state.canvasDimensions[0], this.state.canvasDimensions[1]);

    const horizontalTiles = this.getTilesCount(this.state.canvasDimensions[0]);
    const verticalTiles = this.getTilesCount(this.state.canvasDimensions[1]);

    const horizontalOverflow = (horizontalTiles * tileSize) - this.state.canvasDimensions[0];
    const verticalOverflow = (verticalTiles * tileSize) - this.state.canvasDimensions[1];

    for (let y = 0; y < verticalTiles; y++) {
      for (let x = 0; x < horizontalTiles; x++) {
        const tile = this.state.grid[x][y];

        if (tile) {
          const tileX = this.state.moveOffset[0] + centerOffset[0]
            + (x * tileSize - horizontalOverflow / 2);

          const tileY = this.state.moveOffset[1] + centerOffset[1]
            + (y * tileSize - verticalOverflow / 2);

          try {
            if (this.state.tiles[tile.id].loaded) {
              this.context.drawImage(this.state.tiles[tile.id], tileX, tileY, tileSize, tileSize);
            } else {
              this.drawGenericBackground(tileX, tileY, tileSize);
            }
          } catch (err) {
            this.drawGenericBackground(tileX, tileY, tileSize);
          }

          if (this.options.debug) {
            this.context.strokeStyle = 'green';
            this.context.strokeRect(tileX, tileY, tileSize, tileSize);
          }
        }
      }
    }

    if (this.options.debug) {
      this.context.fillStyle = 'rgba(200, 0, 0, 0.7)';
      this.context.beginPath();
      this.context.arc(this.state.canvasDimensions[0] / 2, this.state.canvasDimensions[1] / 2, 5, 0, 2 * Math.PI);
      this.context.fill();
    }
  }

  drawGenericBackground(x, y, size) {
    const increment = size / 8;

    this.context.beginPath();
    for (let lineX = increment; lineX < size; lineX += increment) {
      for (let lineY = increment; lineY < size; lineY += increment) {
        this.context.moveTo(x, y + lineY);
        this.context.lineTo(x + size, y + lineY);

        this.context.moveTo(x + lineX, y);
        this.context.lineTo(x + lineX, y + size);
      }
    }
    this.context.strokeStyle = '#DDD';
    this.context.stroke();

    this.context.strokeStyle = '#CCC';
    this.context.strokeRect(x, y, size, size);
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

  drawMarkers() {
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
        this.options.tileSize,
        this.state.canvasDimensions
      );

      marker.render(this.context, [
        center[0] - position[0] + this.state.moveOffset[0],
        center[1] - position[1] + this.state.moveOffset[1]
      ]);
    });
  }

  addMarker(marker) {
    this.state.markers.push(marker);
  }

}
