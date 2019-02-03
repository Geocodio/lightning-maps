import { defaultPolygonOptions } from './defaultOptions';
import TileConversion from './TileConversion';
import { geoPath, geoTransform } from 'd3-geo';
import * as topojson from 'topojson-client';

const POLYGON_CACHE = {};

export default class Polygon {
  constructor(sourceUrl, options = {}) {
    this._sourceUrl = sourceUrl;
    this._options = Object.assign({}, defaultPolygonOptions, options);
    this._geometry = null;

    fetch(this._sourceUrl)
      .then(response => response.json())
      .then(json => {
        this._geometry = json;
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

    this.mapState = mapState;

    const center = [
      this.mapState.canvasDimensions[0] / 2,
      this.mapState.canvasDimensions[1] / 2
    ];

    const transform = geoTransform({point: this.projectPoint, mapState, center });
    const path = geoPath(transform).context(context);

    context.beginPath();
    path(topojson.mesh(this._geometry));
    context.stroke();
  }

  projectPoint(x, y) {
    const cachedPosition = (x, y, mapState) => {
      const cacheKey = JSON.stringify([
        [y, x], this.mapState.center, this.mapState.zoom,
        this.mapState.tileSize, this.mapState.canvasDimensions
      ]);

      if (cacheKey in POLYGON_CACHE) {
        return POLYGON_CACHE[cacheKey];
      }

      const position = TileConversion.latLonToPixel(
        [y, x],
        this.mapState.center,
        this.mapState.zoom,
        this.mapState.tileSize,
        this.mapState.canvasDimensions
      );

      POLYGON_CACHE[cacheKey] = position;

      return position;
    };

    const position = cachedPosition(x, y, this.mapState);

    this.stream.point(
      this.center[0] - position[0] + this.mapState.moveOffset[0],
      this.center[1] - position[1] + this.mapState.moveOffset[1]
    );
  }
}
