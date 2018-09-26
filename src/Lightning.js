import TileConversion from './TileConversion';
import Tile from './Tile';

export default class Lightning {
  constructor(canvas) {
    if (!canvas || !canvas.getContext) {
      throw new Error('Could not get canvas context');
    }

    this.draw = this.draw.bind(this);

    this.context = canvas.getContext('2d');
    this.canvasDimensions = [canvas.width, canvas.height];
    this.tiles = {};
    this.tileDimensions = [256, 256];

    this.debug = false;

    window.requestAnimationFrame(this.draw);
  }

  setZoom(zoom) {
    this.zoom = zoom;
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

  getHorizontalTiles() {
    let horizontalTiles = Math.ceil(this.canvasDimensions[0] / this.tileDimensions[0]);
    if (horizontalTiles % 2 === 0) {
      horizontalTiles++;
    }

    return horizontalTiles;
  }

  getVerticalTiles() {
    let verticalTiles = Math.ceil(this.canvasDimensions[1] / this.tileDimensions[1]);
    if (verticalTiles % 2 === 0) {
      verticalTiles++;
    }

    return verticalTiles;
  }

  calculateGrid() {
    const horizontalTiles = this.getHorizontalTiles();
    const verticalTiles = this.getVerticalTiles();

    const centerY = TileConversion.lat2tile(this.center[0], this.zoom);
    const centerX = TileConversion.lon2tile(this.center[1], this.zoom);

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
    //this.context.fillStyle = '#eeeeee';
    //this.context.fillRect(0, 0, this.canvasDimensions[0], this.canvasDimensions[1]);

    const horizontalTiles = this.getHorizontalTiles();
    const verticalTiles = this.getVerticalTiles();

    const horizontalOverflow = (horizontalTiles * this.tileDimensions[0]) - this.canvasDimensions[0];
    const verticalOverflow = (verticalTiles * this.tileDimensions[1]) - this.canvasDimensions[1];

    for (let y = 0; y < verticalTiles; y++) {
      for (let x = 0; x < horizontalTiles; x++) {
        const tile = this.grid[x][y];

        if (!(tile.id in this.tiles)) {
          this.tiles[tile.id] = new Image();
          this.tiles[tile.id].src = this.source(tile.x, tile.y, tile.zoom);
        }

        this.context.drawImage(
          this.tiles[tile.id],
          x * this.tileDimensions[0] - horizontalOverflow / 2,
          y * this.tileDimensions[1] - verticalOverflow / 2,
          this.tileDimensions[0],
          this.tileDimensions[1]
        );

        if (this.debug) {
          this.context.strokeRect(
            x * this.tileDimensions[0] - horizontalOverflow / 2,
            y * this.tileDimensions[1] - verticalOverflow / 2,
            this.tileDimensions[0],
            this.tileDimensions[1]
          );
        }
      }
    }

    /*
    this.context.fillStyle = 'rgba(0, 0, 0, 0.4)';
    this.context.strokeStyle = 'rgba(0, 153, 255, 0.4)';
    this.context.save();
    this.context.translate(150, 150);

    // Earth
    const time = new Date();

    this.context.rotate(((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds());
    this.context.translate(105, 0);
    this.context.fillRect(0, -12, 50, 24); // Shadow
    this.context.drawImage(this.earth, -12, -12);

    // Moon
    this.context.save();
    this.context.rotate(((2 * Math.PI) / 6) * time.getSeconds() + ((2 * Math.PI) / 6000) * time.getMilliseconds());
    this.context.translate(0, 28.5);
    this.context.drawImage(this.moon, -3.5, -3.5);
    this.context.restore();

    this.context.restore();

    this.context.beginPath();
    this.context.arc(150, 150, 105, 0, Math.PI * 2, false); // Earth orbit
    this.context.stroke();

    this.context.drawImage(this.sun, 0, 0, 300, 300);
    */

    window.requestAnimationFrame(this.draw);
  }

}
