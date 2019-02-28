import TileConversion from './TileConversion';

export default class MarkerRenderer {
  constructor() {
    this._markers = [];
  }

  get markers() {
    return this._markers;
  }

  set markers(markers) {
    this._markers = markers;
  }

  render(context, mapState, mapBounds) {
    const visibleMarkers = this.getVisibleMarkers(mapBounds);

    visibleMarkers.map(marker => {
      const position = TileConversion.latLonToPixel(
        marker.coords,
        mapState.center,
        mapState.zoom,
        mapState.tileSize
      );

      marker.render(context, [
        mapState.canvasCenter[0] - position[0] + mapState.moveOffset[0],
        mapState.canvasCenter[1] - position[1] + mapState.moveOffset[1]
      ]);
    });
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
