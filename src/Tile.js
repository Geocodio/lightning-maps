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

  isValid() {
    const max = (1 << this.zoom);

    if (this.x >= max || this.x < 0 || this.y >= max || this.y < 0) {
        return false;
    }

    return true;
  }
}
