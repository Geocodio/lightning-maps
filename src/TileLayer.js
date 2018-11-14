import TileConversion from './TileConversion';
import Tile from './Tile';

export default class TileLayer {

  constructor(map) {
    this.map = map;
    this.context = map.context;

    this.state = {
      grid: [],
      gridHash: null,
      relativeTileOffset: [0, 0]
    };
  }

  toJSON() {
    return this.state;
  }

  getTilesCount(canvasSize) {
    let tilesCount = Math.ceil(canvasSize / this.map.options.tileSize) * this.map.options.tileAreaMultiplier;

    if (tilesCount % 2 === 0) {
      tilesCount++;
    }

    return tilesCount;
  }

  calculateGrid() {
    const { center, zoom } = this.map.options;

    const centerY = TileConversion.lat2tile(center[0], Math.round(zoom), false);
    const centerX = TileConversion.lon2tile(center[1], Math.round(zoom), false);
    const gridHash = [centerY, centerX].join(',');

    const gridNeedsToBeUpdated = this.state.gridHash !== gridHash;

    if (!gridNeedsToBeUpdated) {
      return;
    }

    const horizontalTiles = this.getTilesCount(this.map.state.canvasDimensions[0]);
    const verticalTiles = this.getTilesCount(this.map.state.canvasDimensions[1]);

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
          const tile = new Tile(tileX, tileY, Math.round(zoom));

          this.ensureTileAsset(tile);

          grid[x][y] = tile;
        }
      }
    }

    this.state.grid = grid;
    this.state.gridHash = gridHash;
  }

  ensureTileAsset(tile) {
    if (!(tile.id in this.map.state.tiles)) {
      const tileUrl = this.map.options.source(Math.floor(tile.x), Math.floor(tile.y), tile.zoom);

      this.map.state.tiles[tile.id] = new Image();
      this.map.state.tiles[tile.id].tileId = tile.id;
      this.map.state.tiles[tile.id].src = tileUrl;
      this.map.state.tiles[tile.id].loaded = false;
      this.map.state.tiles[tile.id].onload = () => {
        this.map.state.tiles[tile.id].loaded = true;
      };
    }

    this.map.state.tiles[tile.id].lastRequested = new Date().getTime();
  }

  drawTiles(scale) {
    const canvasWidth = this.map.state.canvasDimensions[0];
    const canvasHeight = this.map.state.canvasDimensions[1];

    const tileSize = this.map.options.tileSize * scale;

    const centerOffset = [
      tileSize / 2 - (this.state.relativeTileOffset[0] * tileSize),
      tileSize / 2 - (this.state.relativeTileOffset[1] * tileSize)
    ];

    this.context.fillStyle = '#EEE';
    this.context.fillRect(0, 0, canvasWidth, canvasHeight);

    const horizontalTiles = this.getTilesCount(canvasWidth);
    const verticalTiles = this.getTilesCount(canvasHeight);

    const horizontalOverflow = (horizontalTiles * tileSize) - canvasWidth;
    const verticalOverflow = (verticalTiles * tileSize) - canvasHeight;

    for (let y = 0; y < verticalTiles; y++) {
      for (let x = 0; x < horizontalTiles; x++) {
        const tile = this.state.grid[x][y];

        if (tile) {
          const tileX = this.map.state.moveOffset[0] + centerOffset[0]
            + (x * tileSize - horizontalOverflow / 2);

          const tileY = this.map.state.moveOffset[1] + centerOffset[1]
            + (y * tileSize - verticalOverflow / 2);

          try {
            if (this.map.state.tiles[tile.id].loaded) {
              this.context.drawImage(this.map.state.tiles[tile.id], tileX, tileY, tileSize, tileSize);
            } else {
              this.drawGenericBackground(tileX, tileY, tileSize);
            }
          } catch (err) {
            this.drawGenericBackground(tileX, tileY, tileSize);
          }

          if (this.map.options.debug) {
            this.context.strokeStyle = 'green';
            this.context.strokeRect(tileX, tileY, tileSize, tileSize);
          }
        }
      }
    }

    if (this.map.options.debug) {
      this.context.fillStyle = 'rgba(200, 0, 0, 0.7)';
      this.context.beginPath();
      this.context.arc(canvasWidth / 2, canvasHeight / 2, 5, 0, 2 * Math.PI);
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
}
