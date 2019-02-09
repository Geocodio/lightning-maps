import { defaultPolygonOptions } from './defaultOptions';
import TileConversion from './TileConversion';
import { geoPath, geoTransform } from 'd3-geo';
import { feature } from 'topojson-client';

export default class Polygon {
  constructor(sourceUrl, objectName, options = {}) {
    this._sourceUrl = sourceUrl;
    this._objectName = objectName;
    this._options = Object.assign({}, defaultPolygonOptions, options);
    this._geometry = null;

    fetch(this._sourceUrl)
      .then(response => response.json())
      .then(json => {
        this._geometry = feature(json, json.objects[this._objectName]);
      })
      .catch(err => console.log(`Could not load ${this._sourceUrl}: ${err.message || err}`));
  }

  get sourceUrl() {
    return this._sourceUrl;
  }

  get options() {
    return this._options;
  }

  render(context, mapState) {
    if (!this._geometry) {
      return;
    }

    context.fillStyle = this.options.color;
    context.strokeStyle = this.options.color;

    if (!this._projectedGeometry) {
      this._projectedGeometry = this._geometry.features.map(feature => {
        return {
          ...feature,
          geometry: this.projectGeometry(feature.geometry)
        };
      })
    }

    /*
    if (!this.path) {
      this.mapState = mapState;

      const center = [
        this.mapState.canvasDimensions[0] / 2,
        this.mapState.canvasDimensions[1] / 2
      ];

      const transform = geoTransform({point: this.projectPoint, mapState, center });

      this.path = geoPath(transform).context(context);
    }

    context.beginPath();
    this.path(this._geometry);
    context.fill();
    context.stroke();
    */
  }

  projectGeometry(geometry) {
    console.log(geometry);
  }

  projectPoint(mapState, center, x, y) {
    const position = TileConversion.latLonToPixel(
      [y, x],
      mapState.center,
      mapState.zoom,
      mapState.tileSize,
      mapState.canvasDimensions
    );

    const projectedX = center[0] - position[0] + mapState.moveOffset[0];
    const projectedY = center[1] - position[1] + mapState.moveOffset[1];

    return [projectedY, projectedY];
  }
}
