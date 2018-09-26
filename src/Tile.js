export default class Tile {
  constructor(x, y, zoom) {
    this._x = x;
    this._y = y;
    this._zoom = zoom;
  }

  get x() {
    return this._x;
  }

  get y() {
    return this._y;
  }

  get zoom() {
    return this._zoom;
  }

  get id() {
    return [this.x, this.y, this.zoom].join('|');
  }
}
