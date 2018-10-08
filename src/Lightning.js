import TileConversion from './TileConversion';
import Tile from './Tile';

const DEBOUNCE_INTERVAL_MS = 200;

export default class Lightning {
  constructor(canvas) {
    if (!canvas || !canvas.getContext) {
      throw new Error('Could not get canvas context');
    }

    this.draw = this.draw.bind(this);

    this.canvas = canvas;
    this.context = this.canvas.getContext('2d');
    this.canvasDimensions = [canvas.width, canvas.height];
    this.tiles = {};
    this.tileSize = 256;
    this.deltaPosition = [0, 0];
    this.tempDeltaPosition = [0, 0];

    this.debug = false;
    this.dragStartPosition = null;

    this.attachEvents();
    this.applyStyles();

    window.requestAnimationFrame(this.draw);
  }

  setZoom(zoom) {
    if (zoom >= 1 && zoom <= 18) {
      this.zoom = zoom;
    }

    return this;
  }

  setCenter(coord) {
    this.center = coord;
    return this;
  }

  setSource(source) {
    this.source = source;
    return this;
  }

  isReadyForEvent() {
    if (!this.lastEventActionTime) {
      return true;
    }

    const now = new Date().getTime();

    return now - this.lastEventActionTime > DEBOUNCE_INTERVAL_MS;
  }

  attachEvents() {
    this.canvas.addEventListener('wheel', event => {
      if (this.isReadyForEvent()) {
        if (event.deltaY > 5) {
          this.lastEventActionTime = new Date().getTime();
          this.setZoom(this.zoom - 2);
        } else if (event.deltaY < -5) {
          this.lastEventActionTime = new Date().getTime();
          this.setZoom(this.zoom + 2);
        }
      }

      event.preventDefault();
    });

    this.canvas.addEventListener('mousedown', event => {
      this.dragStartPosition = [event.clientX, event.clientY];
    });

    this.canvas.addEventListener('mouseup', event => {
      const latLon = TileConversion.pixelToLatLon(
        this.tempDeltaPosition,
        this.center,
        this.zoom,
        this.canvasDimensions,
        this.tileSize
      );

      this.tempDeltaPosition = [0, 0];
      this.center = latLon;

      this.dragStartPosition = null;
    });

    this.canvas.addEventListener('mousemove', event => {
      if (this.dragStartPosition) {
        this.lastEventActionTime = new Date().getTime();
        const x = this.dragStartPosition[0] - event.clientX;
        const y = this.dragStartPosition[1] - event.clientY;

        this.tempDeltaPosition = [-x, -y];
      }

      return false;
    });
  }

  applyStyles() {
    this.canvas.style.cursor = 'grab';
  }

  getHorizontalTiles() {
    let horizontalTiles = Math.ceil(this.canvasDimensions[0] / this.tileSize) * 2;

    if (horizontalTiles % 2 === 0) {
      horizontalTiles++;
    }

    return horizontalTiles;
  }

  getVerticalTiles() {
    let verticalTiles = Math.ceil(this.canvasDimensions[1] / this.tileSize) * 2;

    if (verticalTiles % 2 === 0) {
      verticalTiles++;
    }

    return verticalTiles;
  }

  calculateGrid() {
    const horizontalTiles = this.getHorizontalTiles();
    const verticalTiles = this.getVerticalTiles();

    const centerY = TileConversion.lat2tile(this.center[0], this.zoom, false);
    const centerX = TileConversion.lon2tile(this.center[1], this.zoom, false);

    const centerYRounded = Math.floor(centerY);
    const centerXRounded = Math.floor(centerX);

    const relativeTileOffset = [
      Math.abs(centerX - centerXRounded),
      Math.abs(centerY - centerYRounded)
    ];

    this.deltaPosition = [
      this.tileSize / 2 - (relativeTileOffset[0] * this.tileSize),
      this.tileSize / 2 - (relativeTileOffset[1] * this.tileSize)
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
          grid[x][y] = new Tile(tileX, tileY, this.zoom);
        }
      }
    }

    this.grid = grid;
  }

  draw() {
    this.calculateGrid();

    this.context.fillStyle = '#eee';
    this.context.fillRect(0, 0, this.canvasDimensions[0], this.canvasDimensions[1]);

    const horizontalTiles = this.getHorizontalTiles();
    const verticalTiles = this.getVerticalTiles();

    const horizontalOverflow = (horizontalTiles * this.tileSize) - this.canvasDimensions[0];
    const verticalOverflow = (verticalTiles * this.tileSize) - this.canvasDimensions[1];

    this.context.fillStyle = '#C5DFF6';
    this.context.strokeStyle = 'green';

    for (let y = 0; y < verticalTiles; y++) {
      for (let x = 0; x < horizontalTiles; x++) {
        const tile = this.grid[x][y];

        if (tile) {
          if (!(tile.id in this.tiles)) {
            this.tiles[tile.id] = new Image();
            this.tiles[tile.id].src = this.source(Math.floor(tile.x), Math.floor(tile.y), tile.zoom);
          }

          const tileX = this.tempDeltaPosition[0] + this.deltaPosition[0] + (x * this.tileSize - horizontalOverflow / 2);
          const tileY = this.tempDeltaPosition[1] + this.deltaPosition[1] + (y * this.tileSize - verticalOverflow / 2)

          try {
            this.context.drawImage(this.tiles[tile.id], tileX, tileY, this.tileSize, this.tileSize);
          } catch (err) {
            this.context.fillRect(this.tiles[tile.id], tileX, tileY, this.tileSize, this.tileSize);
          }

          if (this.debug) {
            this.context.strokeRect(tileX, tileY, this.tileSize, this.tileSize);
          }
        }
      }
    }

    /*
    this.context.fillStyle = 'rgba(200, 0, 0, 0.7)';
    this.context.beginPath();
    this.context.arc(this.canvasDimensions[0] / 2, this.canvasDimensions[1] / 2, 10, 0, 2 * Math.PI);
    this.context.fill();
    */

    window.requestAnimationFrame(this.draw);
  }

}
