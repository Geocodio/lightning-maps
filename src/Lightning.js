import TileConversion from './TileConversion';
import Tile from './Tile';

const DEBOUNCE_INTERVAL_MS = 500;

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

    this.debug = true;
    this.dragStartPosition = null;

    this.attachEvents();

    window.requestAnimationFrame(this.draw);
  }

  setZoom(zoom) {
    if (zoom >= 0 && zoom <= 18) {
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

      return false;
    });

    this.canvas.addEventListener('mousedown', event => {
      this.dragStartPosition = [event.clientX, event.clientY];
    });
    this.canvas.addEventListener('mouseup', event => {
      this.dragStartPosition = null;
    });

    this.canvas.addEventListener('mousemove', event => {
      if (this.dragStartPosition && this.isReadyForEvent()) {
        this.deltaPosition = [
          this.deltaPosition[0] + this.dragStartPosition[0] - event.clientX,
          this.deltaPosition[1] + this.dragStartPosition[1] - event.clientY
        ];
      }

      return false;
    });
  }

  getHorizontalTiles() {
    let horizontalTiles = Math.ceil(this.canvasDimensions[0] / this.tileSize);

    if (horizontalTiles % 2 === 0) {
      horizontalTiles++;
    }

    return horizontalTiles;
  }

  getVerticalTiles() {
    let verticalTiles = Math.ceil(this.canvasDimensions[1] / this.tileSize);

    if (verticalTiles % 2 === 0) {
      verticalTiles++;
    }

    return verticalTiles;
  }

  latLngToPixel(latLng, center, zoom) {
    const tileCenterX = TileConversion.lon2tile(this.center[1], zoom);
    const tileCenterY = TileConversion.lat2tile(this.center[0], zoom);

    const tileX = TileConversion.lon2tile(latLng[1], zoom);
    const tileY = TileConversion.lat2tile(latLng[0], zoom);

    return [
      (tileX - tileCenterX) * this.tileSize + this.canvasDimensions[0] / 2 + this.deltaPosition[0],
      (tileY - tileCenterY) * this.tileSize + this.canvasDimensions[1] / 2 + this.deltaPosition[1]
    ];
  }

  calculateGrid() {
    const horizontalTiles = this.getHorizontalTiles();
    const verticalTiles = this.getVerticalTiles();

    const centerY = TileConversion.lat2tile(this.center[0], this.zoom);
    const centerX = TileConversion.lon2tile(this.center[1], this.zoom);

    const centerBounds = TileConversion.tile2boundingBox(centerX, centerY, this.zoom);

    const relativeTileOffset = [
      (centerBounds.ne[0] - this.center[0]) / (centerBounds.ne[0] - centerBounds.sw[0]),
      (centerBounds.sw[1] - this.center[1]) / (centerBounds.sw[1] - centerBounds.ne[1]),
    ];

    /*
    const relativeTileOffset = [
      (this.center[0] - centerBounds.sw[0]) / (centerBounds.ne[0] - centerBounds.sw[0]),
      (this.center[1] - centerBounds.sw[1]) / (centerBounds.ne[1] - centerBounds.sw[1])
    ];
    */

    console.log(relativeTileOffset);

    this.deltaPosition = [
      this.tileSize / 2 - (relativeTileOffset[0] * this.tileSize),
      this.tileSize / 2 - (relativeTileOffset[1] * this.tileSize),
    ];

    //console.log(this.deltaPosition);

    //const verticalDiff = centerBounds.north - centerBounds.south;
    //const horizontalDiff = centerBounds.east - centerBounds.west;

    //console.log(centerBounds.east - this.center[0], centerBounds.north - this.center[1]);

    const startX = centerX - Math.floor(horizontalTiles / 2);
    const startY = centerY - Math.floor(verticalTiles / 2);

    let grid = [];

    for (let y = 0; y < verticalTiles; y++) {
      for (let x = 0; x < horizontalTiles; x++) {
        if (!grid[x]) {
          grid[x] = [];
        }

        grid[x][y] = new Tile(startX + x, startY + y, this.zoom);
      }
    }

    this.grid = grid;
  }

  draw() {
    this.calculateGrid();

    this.context.globalCompositeOperation = 'destination-over';
    this.context.clearRect(0, 0, this.canvasDimensions[0], this.canvasDimensions[1]);
    this.context.strokeStyle = 'green';

    this.context.fillStyle = 'rgb(200, 0, 0)';
    this.context.fillRect(this.canvasDimensions[0] / 2 - 10 / 2, this.canvasDimensions[1] / 2 - 10 / 2, 10, 10);

    const horizontalTiles = this.getHorizontalTiles();
    const verticalTiles = this.getVerticalTiles();

    const horizontalOverflow = (horizontalTiles * this.tileSize) - this.canvasDimensions[0];
    const verticalOverflow = (verticalTiles * this.tileSize) - this.canvasDimensions[1];

    for (let y = 0; y < verticalTiles; y++) {
      for (let x = 0; x < horizontalTiles; x++) {
        const tile = this.grid[x][y];

        if (!(tile.id in this.tiles)) {
          this.tiles[tile.id] = new Image();
          this.tiles[tile.id].src = this.source(tile.x, tile.y, tile.zoom);
        }

        this.context.drawImage(
          this.tiles[tile.id],
          this.deltaPosition[0] + (x * this.tileSize - horizontalOverflow / 2),
          this.deltaPosition[1] + (y * this.tileSize - verticalOverflow / 2),
          this.tileSize,
          this.tileSize
        );

        if (this.debug) {
          this.context.strokeRect(
            this.deltaPosition[0] + (x * this.tileSize - horizontalOverflow / 2),
            this.deltaPosition[1] + (y * this.tileSize - verticalOverflow / 2),
            this.tileSize,
            this.tileSize
          );
        }
      }
    }

    window.requestAnimationFrame(this.draw);
  }

}
