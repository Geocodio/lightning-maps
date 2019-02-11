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

  get geometry() {
    return window._geometry;
  }

  set geometry(geometry) {
    window._geometry = geometry;
  }

  get projectedGeometry() {
    return window._projectedGeometry;
  }

  set projectedGeometry(projectedGeometry) {
    window._projectedGeometry = projectedGeometry;
  }

  get projectedGeometryState() {
    return this._projectedGeometryState;
  }

  set projectedGeometryState(projectedGeometryState) {
    this._projectedGeometryState = projectedGeometryState;
  }

  createOffscreenCanvas(size) {
    const canvas = document.createElement('canvas');

    canvas.width = 10000;
    canvas.height = 10000;

    this.offscreenCanvas = canvas;
  }

  render(context, mapState) {
    if (!this.geometry) {
      return;
    }

    // Do we need to reproject the geometry?
    if (this.buildState(mapState) !== this.projectedGeometryState) {
      this.projectedGeometry = null;
    }

    if (!this.projectedGeometry) {
      this.createOffscreenCanvas(mapState.canvasDimensions);

      this.projectedGeometry = this.geometry.features.map(feature => {
        return {
          ...feature,
          geometry: this.projectGeometry(feature.geometry, mapState)
        };
      });

      this.projectedGeometryState = this.buildState(mapState);

      const offscreenContext = this.offscreenCanvas.getContext('2d');

      offscreenContext.fillStyle = this.options.color;
      offscreenContext.strokeStyle = this.options.color;

      offscreenContext.beginPath();
      this.projectedGeometry.map(item => {
        item.geometry.map(list => {
          list.map((position, index) => {
            position = [-position[0] + 5000, -position[1] + 5000];

            if (index === 0) {
              offscreenContext.moveTo(position[0], position[1]);
            } else {
              offscreenContext.lineTo(position[0], position[1]);
            }
          });
        });
      });

      offscreenContext.fill();
      offscreenContext.stroke();
    }

    const center = [
      mapState.canvasDimensions[0] / 2,
      mapState.canvasDimensions[1] / 2
    ];

    context.drawImage(
      this.offscreenCanvas,
      center[0] + mapState.moveOffset[0] - 5000,
      center[1] + mapState.moveOffset[1] - 5000
    );
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
