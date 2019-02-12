export default class MapState {
  constructor(center, zoom, targetZoom, tileSize, canvasDimensions, moveOffset) {
    this._center = center;
    this._zoom = zoom;
    this._targetZoom = targetZoom;
    this._tileSize = tileSize;
    this._canvasDimensions = canvasDimensions;
    this._moveOffset = moveOffset;
  }

  get center() {
    return this._center;
  }

  get zoom() {
    return this._zoom;
  }

  get targetZoom() {
    return this._targetZoom;
  }

  get tileSize() {
    return this._tileSize;
  }

  get canvasDimensions() {
    return this._canvasDimensions;
  }

  get moveOffset() {
    return this._moveOffset;
  }
}
