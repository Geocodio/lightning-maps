import TileConversion from './TileConversion';
import Tile from './Tile';
import defaultOptions from './defaultOptions';

const DEBOUNCE_INTERVAL_MS = 200;

export default class Lightning {

  constructor(canvas, options) {
    if (!canvas || !canvas.getContext) {
      throw new Error('Could not get canvas context');
    }

    this.canvas = canvas;
    this.context = this.canvas.getContext('2d');

    this.options = Object.assign({}, defaultOptions, options);

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
      moveAnimationStart: null,
      dragStartPosition: null,
      lastEventActionTime: null,
      targetZoom: this.options.zoom,
      zoomAnimationStart: null,
      scale: 1
    };
  }

  setZoom(zoom) {
    if (this.zoomValueIsValid(zoom)) {
      this.state.lastEventActionTime = new Date().getTime();
      this.state.zoomAnimationStart = window.performance.now();
      this.state.targetZoom = zoom;
    }
  }

  setTargetMoveOffset(x, y, animated = true) {
    this.state.targetMoveOffset = [x, y];

    if (animated) {
      this.state.moveAnimationStart = window.performance.now();
    } else {
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

    const now = new Date().getTime();
    const milliSecondsSinceLastEvent = now - this.state.lastEventActionTime;

    return milliSecondsSinceLastEvent > DEBOUNCE_INTERVAL_MS;
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

      // TODO: This is a hack
      setTimeout(() => this.setZoom(this.options.zoom + 1), 1000);
    });

    this.canvas.addEventListener('mousedown', event => {
      event.preventDefault();
      this.state.dragStartPosition = [
        event.clientX - this.state.moveOffset[0],
        event.clientY - this.state.moveOffset[1]
      ];
    });

    this.canvas.addEventListener('mouseup', event => {
      event.preventDefault();

      const x = this.state.dragStartPosition[0] - event.clientX;
      const y = this.state.dragStartPosition[1] - event.clientY;

      if (this.state.moveOffset[0] >= 0 && this.state.moveOffset[1] >= 0) {
        const velocity = Math.max(Math.abs(x - this.state.moveOffset[0]), Math.abs(y - this.state.moveOffset[1]));

        if (velocity > 800) {
          this.setTargetMoveOffset(
            -x * this.options.panAccelerationMultiplier,
            -y * this.options.panAccelerationMultiplier
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
        const x = this.state.dragStartPosition[0] - event.clientX;
        const y = this.state.dragStartPosition[1] - event.clientY;

        this.setTargetMoveOffset(-x, -y, false);
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
      const timestamp = performance.now();

      const length = 1500;
      const progress = Math.max(timestamp - this.state.moveAnimationStart, 0);
      const percentage = this.easeOutQuad(progress / length);

      this.state.moveOffset = [
        this.state.moveOffset[0] + (this.state.targetMoveOffset[0] - this.state.moveOffset[0]) * percentage,
        this.state.moveOffset[1] + (this.state.targetMoveOffset[1] - this.state.moveOffset[1]) * percentage
      ];

      const targetHasBeenReached = Object.values(this.state.moveOffset).join(',')
        === Object.values(this.state.targetMoveOffset).join(',');

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
      this.state.canvasDimensions,
      this.options.tileSize
    );

    this.setTargetMoveOffset(0, 0, false);
    this.options.center = latLon;
  }

  updateZoom() {
    if (this.options.zoom !== this.state.targetZoom) {
      const timestamp = performance.now();

      const length = 1000;
      const progress = Math.max(timestamp - this.state.zoomAnimationStart, 0);
      const percentage = progress / length; // this.easeOutQuad(progress / length);

      const newZoom = this.options.zoom + (this.state.targetZoom - this.options.zoom) * percentage;

      this.options.zoom = Math.round(newZoom * 100) / 100;

      const scale = 1 - (this.state.targetZoom - this.options.zoom);

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
  }

  ensureTileAsset(tile, expandTilesOnLoad = true) {
    if (!(tile.id in this.state.tiles)) {
      this.state.tiles[tile.id] = new Image();
      this.state.tiles[tile.id].loaded = false;
      this.state.tiles[tile.id].src = this.options.source(Math.floor(tile.x), Math.floor(tile.y), tile.zoom);
      this.state.tiles[tile.id].onload = () => {
        this.state.tiles[tile.id].loaded = true;
      };
    }
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
    this.context.setTransform(1, 0, 0, 1, 0, 0);

    this.updateMoveOffset();
    this.updateZoom();
    this.calculateGrid();

    if (this.shouldRedraw()) {
      this.drawTiles();
    }

    window.requestAnimationFrame(this.draw);
  }

  drawTiles() {
    const tileSize = this.options.tileSize * this.state.scale;

    const centerOffset = [
      tileSize / 2 - (this.state.relativeTileOffset[0] * tileSize),
      tileSize / 2 - (this.state.relativeTileOffset[1] * tileSize)
    ];

    this.context.fillStyle = '#eee';
    this.context.fillRect(0, 0, this.state.canvasDimensions[0], this.state.canvasDimensions[1]);

    const horizontalTiles = this.getTilesCount(this.state.canvasDimensions[0]);
    const verticalTiles = this.getTilesCount(this.state.canvasDimensions[1]);

    const horizontalOverflow = (horizontalTiles * tileSize) - this.state.canvasDimensions[0];
    const verticalOverflow = (verticalTiles * tileSize) - this.state.canvasDimensions[1];

    this.context.fillStyle = '#C5DFF6';
    this.context.strokeStyle = 'green';

    for (let y = 0; y < verticalTiles; y++) {
      for (let x = 0; x < horizontalTiles; x++) {
        const tile = this.state.grid[x][y];

        if (tile) {
          const tileX = this.state.moveOffset[0] + centerOffset[0]
            + (x * tileSize - horizontalOverflow / 2);

          const tileY = this.state.moveOffset[1] + centerOffset[1]
            + (y * tileSize - verticalOverflow / 2);

          try {
            this.context.drawImage(
              this.state.tiles[tile.id],
              tileX, tileY,
              tileSize, tileSize
            );
          } catch (err) {
            this.context.fillRect(tileX, tileY, tileSize, tileSize);
          }

          if (this.options.debug) {
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

}
