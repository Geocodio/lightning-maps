import TileConversion from './TileConversion';

export default class MarkerRenderer {
  constructor(renderMode) {
    this._markers = [];
    this.offscreenCanvas = null;
    this.renderedMapCenter = null;
    this.renderedZoomLevel = null;
  }

  get markers() {
    return this._markers;
  }

  set markers(markers) {
    this._markers = markers;
  }

  determineOriginZoom(mapState) {
    let originZoom = mapState.zoom;

    if (mapState.targetZoom > mapState.zoom) { // Zoming in
      originZoom = Math.floor(mapState.zoom);
    } else if (mapState.targetZoom < mapState.zoom) { // Zooming out
      originZoom = Math.ceil(mapState.zoom);
    }

    return originZoom;
  }

  render(context, mapState, mapBounds, forceRerender = false) {
    const originZoom = this.determineOriginZoom(mapState);

    const zoomDiff = originZoom
      ? mapState.zoom - originZoom
      : 0;

    const scale = zoomDiff !== 0
      ? Math.pow(2, zoomDiff)
      : 1.0;

    if (forceRerender || this.shouldReRender(mapState, zoomDiff)) {
      this.renderOffScreenCanvas(mapState, mapBounds);
    }

    if (scale < 1.5 || scale > 0.5) {
      const canvasDrawPosition = [
        mapState.moveOffset[0] - (mapState.canvasCenter[0] * (scale - 1)),
        mapState.moveOffset[1] - (mapState.canvasCenter[1] * (scale - 1))
      ];

      const canvasDrawDimensions = [
        mapState.canvasDimensions[0] * scale,
        mapState.canvasDimensions[1] * scale
      ];

      context.drawImage(
        this.offscreenCanvas,
        canvasDrawPosition[0], canvasDrawPosition[1],
        canvasDrawDimensions[0], canvasDrawDimensions[1],
      );
    }
  }

  shouldReRender(mapState, zoomDiff) {
    const mapCenterChanged = this.renderedMapCenter !== mapState.center,
      mapZoomChanged = (zoomDiff === 0 && this.renderedZoomLevel !== mapState.zoom);

    return this.offscreenCanvas === null || mapCenterChanged || mapZoomChanged;
  }

  renderOffScreenCanvas(mapState, mapBounds) {
    this.renderedZoomLevel = mapState.zoom;
    this.renderedMapCenter = mapState.center;

    const context = this.createOffscreenCanvas(mapState.canvasDimensions);
    const visibleMarkers = this.getVisibleMarkers(mapBounds);

    visibleMarkers.forEach(marker => {
      const position = TileConversion.latLonToPixel(
        marker.coords,
        mapState.center,
        mapState.zoom,
        mapState.tileSize
      );

      marker.render(context, [
        mapState.canvasCenter[0] - position[0],
        mapState.canvasCenter[1] - position[1]
      ], mapState.zoom);
    });
  }

  createOffscreenCanvas(canvasDimensions) {
    this.offscreenCanvas = document.createElement('canvas');
    this.offscreenCanvas.width = canvasDimensions[0];
    this.offscreenCanvas.height = canvasDimensions[1];

    return this.offscreenCanvas.getContext('2d');
  }

  getVisibleMarkers(bounds) {
    return this.markers.filter(marker => {
      return marker.coords[0] <= bounds.nw[0] && marker.coords[0] >= bounds.se[0]
        && marker.coords[1] >= bounds.nw[1] && marker.coords[1] <= bounds.se[1];
    });
  }

  getMarkersBounds(mapState, mapBounds) {
    return this.getVisibleMarkers(mapBounds).map(marker => {
      const position = TileConversion.latLonToPixel(
        marker.coords,
        mapState.center,
        mapState.zoom,
        mapState.tileSize
      );

      const markerSize = marker.size;
      const markerOffset = marker.offset;

      return {
        bounds: {
          x: mapState.canvasCenter[0] - position[0] + mapState.moveOffset[0] - (markerSize[0] / 2) + markerOffset[0],
          y: mapState.canvasCenter[1] - position[1] + mapState.moveOffset[1] - (markerSize[1] / 2) + markerOffset[1],
          width: markerSize[0],
          height: markerSize[1]
        },
        marker
      };
    });
  }
}
