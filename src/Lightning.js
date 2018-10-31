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

    this.draw = this.draw.bind(this);
    window.requestAnimationFrame(this.draw);
  }

  initializeState() {
    this.state = {
      canvasDimensions: [this.canvas.width, this.canvas.height],
      tiles: {},
      centerOffset: [0, 0],
      moveOffset: [0, 0],
      targetMoveOffset: [0, 0],
      moveAnimationStart: null,
      dragStartPosition: null,
      lastEventActionTime: null,
      targetZoom: this.options.zoom,
      zoomAnimationStart: null
    };
  }

  setZoom(zoom) {
    if (zoom >= 1 && zoom <= 18) {
      this.state.lastEventActionTime = new Date().getTime();
      this.state.zoomAnimationStart = window.performance.now();
      this.state.targetZoom = zoom;
    }
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
          this.setZoom(this.options.zoom - 2);
        } else if (event.deltaY < -5) {
          this.setZoom(this.options.zoom + 2);
        }
      }
    });

    this.canvas.addEventListener('mousedown', event => {
      event.preventDefault();
      this.state.dragStartPosition = [event.clientX, event.clientY];
    });

    this.canvas.addEventListener('mouseup', event => {
      event.preventDefault();
      this.state.dragStartPosition = null;
    });

    this.canvas.addEventListener('mousemove', event => {
      event.preventDefault();

      if (this.state.dragStartPosition) {
        this.state.lastEventActionTime = new Date().getTime();
        const x = this.state.dragStartPosition[0] - event.clientX;
        const y = this.state.dragStartPosition[1] - event.clientY;

        this.state.targetMoveOffset = [
          -x * this.options.panAccelerationMultiplier,
          -y * this.options.panAccelerationMultiplier
        ];

        this.state.moveAnimationStart = window.performance.now();
      }

      return false;
    });
  }

  applyStyles() {
    this.canvas.style.cursor = 'grab';
  }

  getTilesCount(canvasSize) {
    let tilesCount = Math.ceil(canvasSize / this.options.tileSize) * 2;

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
        const latLon = TileConversion.pixelToLatLon(
          this.state.moveOffset,
          this.options.center,
          this.options.zoom,
          this.options.canvasDimensions,
          this.options.tileSize
        );

        this.state.moveOffset = [0, 0];
        this.state.targetMoveOffset = [0, 0];
        this.options.center = latLon;
      }
    }
  }

  updateZoom() {
    if (this.options.zoom !== this.state.targetZoom) {
      const timestamp = performance.now();

      const length = 10000;
      const progress = Math.max(timestamp - this.state.zoomAnimationStart, 0);
      const percentage = this.easeOutQuad(progress / length);

      const newZoom = this.options.zoom + (this.state.targetZoom - this.options.zoom) * percentage;

      this.options.zoom = this.state.targetZoom > this.options.zoom ? Math.ceil(newZoom) : Math.floor(newZoom);

      let scale = this.options.zoom - newZoom;

      if (this.state.targetZoom > this.options.zoom) {
        scale += 1;
      }

      return scale;
    }

    return 1;
  }

  calculateGrid() {
    const horizontalTiles = this.getTilesCount(this.state.canvasDimensions[0]);
    const verticalTiles = this.getTilesCount(this.state.canvasDimensions[1]);

    const centerY = TileConversion.lat2tile(this.options.center[0], this.options.zoom, false);
    const centerX = TileConversion.lon2tile(this.options.center[1], this.options.zoom, false);

    // noinspection JSSuspiciousNameCombination
    const centerYRounded = Math.floor(centerY);
    const centerXRounded = Math.floor(centerX);

    const relativeTileOffset = [
      Math.abs(centerX - centerXRounded),
      Math.abs(centerY - centerYRounded)
    ];

    this.state.centerOffset = [
      this.options.tileSize / 2 - (relativeTileOffset[0] * this.options.tileSize),
      this.options.tileSize / 2 - (relativeTileOffset[1] * this.options.tileSize)
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
          grid[x][y] = new Tile(tileX, tileY, this.options.zoom);
        }
      }
    }

    this.grid = grid;
  }

  draw() {
    this.context.setTransform(1, 0, 0, 1, 0, 0);

    this.updateMoveOffset();
    const scale = this.updateZoom();

    if (scale !== 1) {
      this.context.scale(scale, scale);
    }

    this.calculateGrid();

    this.context.fillStyle = '#eee';
    this.context.fillRect(0, 0, this.state.canvasDimensions[0], this.state.canvasDimensions[1]);

    const horizontalTiles = this.getTilesCount(this.state.canvasDimensions[0]);
    const verticalTiles = this.getTilesCount(this.state.canvasDimensions[1]);

    const horizontalOverflow = (horizontalTiles * this.options.tileSize) - this.state.canvasDimensions[0];
    const verticalOverflow = (verticalTiles * this.options.tileSize) - this.state.canvasDimensions[1];

    this.context.fillStyle = '#C5DFF6';
    this.context.strokeStyle = 'green';

    for (let y = 0; y < verticalTiles; y++) {
      for (let x = 0; x < horizontalTiles; x++) {
        const tile = this.grid[x][y];

        if (tile) {
          if (!(tile.id in this.state.tiles)) {
            this.state.tiles[tile.id] = new Image();
            this.state.tiles[tile.id].src = this.options.source(Math.floor(tile.x), Math.floor(tile.y), tile.zoom);
          }

          const tileX = this.state.moveOffset[0] + this.state.centerOffset[0]
            + (x * this.options.tileSize - horizontalOverflow / 2);

          const tileY = this.state.moveOffset[1] + this.state.centerOffset[1]
            + (y * this.options.tileSize - verticalOverflow / 2);

          try {
            this.context.drawImage(
              this.state.tiles[tile.id],
              tileX, tileY,
              this.options.tileSize, this.options.tileSize
            );
          } catch (err) {
            this.context.fillRect(tileX, tileY, this.options.tileSize, this.options.tileSize);
          }

          if (this.options.debug) {
            this.context.strokeRect(tileX, tileY, this.options.tileSize, this.options.tileSize);
          }
        }
      }
    }

    /*
    this.context.fillStyle = 'rgba(200, 0, 0, 0.7)';
    this.context.beginPath();
    this.context.arc(this.state.canvasDimensions[0] / 2, this.state.canvasDimensions[1] / 2, 10, 0, 2 * Math.PI);
    this.context.fill();
    */

    window.requestAnimationFrame(this.draw);
  }

}
