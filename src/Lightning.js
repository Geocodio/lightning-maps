export default class Lightning {
  constructor(canvas) {
    this._canvas = canvas;
  }

  setZoom(zoom) {
    this._zoom = zoom;
  }

  setCenter(coord) {
    this._center = coord;
  }
}
