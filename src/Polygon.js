import { defaultPolygonOptions } from './defaultOptions';
import TileConversion from './TileConversion';
import { feature } from 'topojson-client';

export default class Polygon {
  constructor(json, objectName, options = {}) {
    this._options = Object.assign({}, defaultPolygonOptions, options);

    window._geometry = feature(json, json.objects[objectName]);
  }

  get options() {
    return this._options;
  }

  getGeometry() {
    return window._geometry;
  }

  getProjectedGeometry() {
    return window._projectedGeometry;
  }

  render(context, mapState) {
    if (!this.getGeometry()) {
      return;
    }

    context.fillStyle = this.options.color;
    context.strokeStyle = this.options.color;

    // Do we need to reproject the geometry?
    if (this.buildState(mapState) !== window._projectedGeometryState) {
      window._projectedGeometry = null;
    }

    if (!this.getProjectedGeometry()) {
      window._projectedGeometry = this.getGeometry().features.map(feature => {
        return {
          ...feature,
          geometry: this.projectGeometry(feature.geometry, mapState)
        };
      });

      window._projectedGeometryState = this.buildState(mapState);
    }

    const center = [
      mapState.canvasDimensions[0] / 2,
      mapState.canvasDimensions[1] / 2
    ];

    context.beginPath();
    this.getProjectedGeometry().map(item => {
      item.geometry.map(list => {
        const coordinatesInsideViewPort = list.filter(position => {
          const coordinate = this.offsetCoordinate(position, center, mapState.moveOffset);

          return (coordinate[0] > 0 && coordinate[1] > 0
            && coordinate[0] <= mapState.canvasDimensions[0] && coordinate[1] <= mapState.canvasDimensions[1]);
        });

        if (coordinatesInsideViewPort.length > 0) {
          list.map((position, index) => {
            const coordinate = this.offsetCoordinate(position, center, mapState.moveOffset, mapState.canvasDimensions);

            if (index === 0) {
              context.moveTo(coordinate[0], coordinate[1]);
            } else {
              context.lineTo(coordinate[0], coordinate[1]);
            }
          });
        }
      });
    });

    context.fill();
    context.stroke();
  }

  offsetCoordinate(position, center, moveOffset, canvasDimensions = null) {
    let x = center[0] - position[0] + moveOffset[0],
      y = center[1] - position[1] + moveOffset[1];

    if (canvasDimensions) {
      if (x < 0) {
        x = 0;
      } else if (x > canvasDimensions[0]) {
        x = canvasDimensions[0];
      }

      if (y < 0) {
        y = 0;
      } else if (y > canvasDimensions[1]) {
        y = canvasDimensions[1];
      }
    }

    return [x, y];
  }

  projectGeometry(geometry, mapState) {
    switch (geometry.type) {
      case 'Polygon':
        return [geometry.coordinates[0].map(item => this.projectPoint(mapState, item[0], item[1]))];

      case 'MultiPolygon':
        return geometry.coordinates.map(coordinates =>
          coordinates[0].map(item => this.projectPoint(mapState, item[0], item[1]))
        );
    }

    return [];
  }

  projectPoint(mapState, x, y) {
    return TileConversion.latLonToPixel(
      [y, x],
      mapState.center,
      mapState.zoom,
      mapState.tileSize,
      mapState.canvasDimensions
    );
  }

  buildState(mapState) {
    return JSON.stringify([
      mapState.center,
      mapState.zoom,
      mapState.tileSize,
      mapState.canvasDimensions
    ]);
  }
}
