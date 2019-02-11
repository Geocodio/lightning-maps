import { defaultPolygonOptions } from './defaultOptions';
import TileConversion from './TileConversion';
import { feature } from 'topojson-client';

export default class Polygon {
  constructor(json, objectName, options = {}) {
    this._options = Object.assign({}, defaultPolygonOptions, options);

    this.geometry = feature(json, json.objects[objectName]);
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

  createOffscreenCanvas() {
    this.offscreenCanvas = document.createElement('canvas');
    this.offscreenCanvas.width = this.polygonDimensions[0];
    this.offscreenCanvas.height = this.polygonDimensions[1];

    this.offscreenCanvas.getContext('2d').fillStyle = 'rgba(0, 0, 0, 0.5)';
    this.offscreenCanvas.getContext('2d').fillRect(0, 0, this.polygonDimensions[0], this.polygonDimensions[1]);

    return this.offscreenCanvas.getContext('2d');
  }

  calculatePolygonExtends(maxSize) {
    let minX, maxX, minY, maxY = null;

    this.mapGeometry(position => {
      if (!maxX || position[0] > maxX) {
        maxX = position[0];
      }

      if (!minX || position[0] < minX) {
        minX = position[0];
      }

      if (!maxY || position[1] > maxY) {
        maxY = position[1];
      }

      if (!minY || position[1] < minY) {
        minY = position[1];
      }
    });

    this.polygonDimensions = [
      Math.ceil(maxX - minX),
      Math.ceil(maxY - minY)
    ];

    this.polygonExtends = {
      minX, maxX,
      minY, maxY
    };
  }

  renderOffscreenCanvas(mapState) {
    this.projectedGeometryState = this.buildState(mapState);
    this.projectedGeometry = this.geometry.features.map(feature => {
      return {
        ...feature,
        geometry: this.projectGeometry(feature.geometry, mapState)
      };
    });

    const maxSize = [
      mapState.canvasDimensions[0] * 2,
      mapState.canvasDimensions[1]
    ];

    this.calculatePolygonExtends(maxSize);
    const offscreenContext = this.createOffscreenCanvas();

    offscreenContext.fillStyle = this.options.color;
    offscreenContext.strokeStyle = this.options.color;
    offscreenContext.beginPath();

    this.mapGeometry((position, index) => {
      position = [
        position[0] - this.polygonExtends.minX,
        position[1] - this.polygonExtends.minY
      ];

      if (index === 0) {
        offscreenContext.moveTo(position[0], position[1]);
      } else {
        offscreenContext.lineTo(position[0], position[1]);
      }
    });

    offscreenContext.fill();
    offscreenContext.stroke();
  }

  mapGeometry(pointCallback) {
    this.projectedGeometry.map((item) =>
      item.geometry.map((list) =>
        list.map(pointCallback)
      )
    );
  }

  render(context, mapState) {
    if (!this.geometry) {
      return;
    }

    let scale = 1,
      zoomDiff = 0,
      originZoom = null;

    if (mapState.targetZoom > mapState.zoom) { // Zoming in
      originZoom = Math.floor(mapState.zoom);
    } else if (mapState.targetZoom < mapState.zoom) { // Zooming out
      originZoom = Math.ceil(mapState.zoom);
    }

    zoomDiff = originZoom ? mapState.zoom - originZoom : 0;

    // Do we need to reproject the geometry?
    if (zoomDiff !== 0) {
      scale = Math.pow(2, zoomDiff);
    } else if (this.buildState(mapState) !== this.projectedGeometryState) {
      this.projectedGeometry = null;
    }

    if (!this.projectedGeometry) {
      this.renderOffscreenCanvas(mapState);
    }

    const offset = [
      this.polygonExtends.minX
        - (TileConversion.lon2tile(mapState.center[1], originZoom || mapState.zoom, false) * mapState.tileSize),
      this.polygonExtends.minY
        - (TileConversion.lat2tile(mapState.center[0], originZoom || mapState.zoom, false) * mapState.tileSize)
    ];

    const scaledWidth = this.polygonDimensions[0] * scale,
      scaledHeight = this.polygonDimensions[1] * scale;

    const center = [
      mapState.canvasDimensions[0] / 2,
      mapState.canvasDimensions[1] / 2
    ];

    const x = center[0] + mapState.moveOffset[0] + (offset[0] * scale),
      y = center[1] + mapState.moveOffset[1] + (offset[1] * scale);

    context.drawImage(
      this.offscreenCanvas,
      x, y,
      scaledWidth,
      scaledHeight
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
    const position = TileConversion.latLonToPixel(
      [y, x],
      null,
      mapState.zoom,
      mapState.tileSize
    );

    return [-position[0], -position[1]];
  }

  buildState(mapState) {
    return JSON.stringify([
      mapState.zoom,
      mapState.tileSize
    ]);
  }
}
