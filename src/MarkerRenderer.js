import TileConversion from './TileConversion';

export default class MarkerRenderer {
  constructor() {
    this._markers = [];
    this.offscreenCanvas = null;
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

  render(context, mapState, mapBounds) {
    const originZoom = this.determineOriginZoom(mapState);

    const zoomDiff = originZoom
      ? mapState.zoom - originZoom
      : 0;

    const scale = zoomDiff !== 0
      ? Math.pow(2, zoomDiff)
      : 1.0;

    if (this.shouldReRender(mapState, zoomDiff)) {
      this.renderOffScreenCanvas(mapState, mapBounds);
    }

    const scaledWidth = this.markerCanvasDimensions[0] * scale,
      scaledHeight = this.markerCanvasDimensions[1] * scale;

    console.log(mapState.canvasCenter);

    const imageDrawPosition = [
      (mapState.canvasCenter[0] * scale) + (this.markerExtends.minX + mapState.moveOffset[0]),
      (mapState.canvasCenter[1] * scale) + (this.markerExtends.minY + mapState.moveOffset[1])
    ];

    const centerZoomOffset = [
      this.markerCanvasDimensions[0] / 2 - scaledWidth / 2,
      this.markerCanvasDimensions[1] / 2 - scaledHeight / 2
    ];

    context.lineWidth = 15;
    context.strokeStyle = 'red';
    context.strokeRect(imageDrawPosition[0], imageDrawPosition[1],
      this.markerCanvasDimensions[0], this.markerCanvasDimensions[1]);

    context.drawImage(
      this.offscreenCanvas,
      imageDrawPosition[0] + centerZoomOffset[0], imageDrawPosition[1] + centerZoomOffset[1],
      scaledWidth, scaledHeight
    );
  }

  shouldReRender(mapState, zoomDiff) {
    const mapCenterChanged = this.renderedMapCenter !== mapState.center,
      mapZoomChanged = (zoomDiff === 0 && this.renderedZoomLevel !== mapState.zoom);

    return this.offscreenCanvas === null || mapCenterChanged || mapZoomChanged;
  }

  renderOffScreenCanvas(mapState, mapBounds) {
    this.renderedZoomLevel = mapState.zoom;
    this.renderedMapCenter = mapState.center;

    const visibleMarkers = this.getVisibleMarkers(mapBounds);

    const renderableMarkers = visibleMarkers.map(marker => {
      const position = TileConversion.latLonToPixel(
        marker.coords,
        mapState.center,
        mapState.zoom,
        mapState.tileSize
      );

      return {
        marker,
        x: position[0],
        y: position[1]
      };
    });

    this.calculateMarkerExtends(renderableMarkers);
    const context = this.createOffscreenCanvas();

    renderableMarkers.forEach(item => item.marker.render(context, [
      item.x - this.markerExtends.minX,
      item.y - this.markerExtends.minY
    ]));
  }

  calculateMarkerExtends(markers) {
    console.log('calculateMarkerExtends');

    let minX, maxX, minY, maxY = null;

    markers.forEach(marker => {
      if (!maxX || marker.x > maxX) {
        maxX = marker.x;
      }

      if (!minX || marker.x < minX) {
        minX = marker.x;
      }

      if (!maxY || marker.y > maxY) {
        maxY = marker.y;
      }

      if (!minY || marker.y < minY) {
        minY = marker.y;
      }
    });

    this.markerCanvasDimensions = [
      Math.ceil(maxX - minX),
      Math.ceil(maxY - minY)
    ];

    this.markerExtends = {
      minX, maxX,
      minY, maxY
    };
  }

  createOffscreenCanvas() {
    this.offscreenCanvas = document.createElement('canvas');
    this.offscreenCanvas.width = this.markerCanvasDimensions[0];
    this.offscreenCanvas.height = this.markerCanvasDimensions[1];

    return this.offscreenCanvas.getContext('2d');
  }

  getVisibleMarkers(bounds) {
    return this.markers.filter(marker => {
      return marker.coords[0] <= bounds.nw[0] && marker.coords[0] >= bounds.se[0]
        && marker.coords[1] >= bounds.nw[1] && marker.coords[1] <= bounds.se[1];
    });
  }

  getMarkersBounds(mapState) {
    return this.getVisibleMarkers().map(marker => {
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
