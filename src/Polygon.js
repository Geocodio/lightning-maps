import { defaultPolygonOptions } from './defaultOptions';

export default class Polygon {
  constructor(sourceUrl, options = {}) {
    this._sourceUrl = sourceUrl;
    this._options = Object.assign({}, defaultPolygonOptions, options);
  }

  get sourceUrl() {
    return this._sourceUrl;
  }

  get options() {
    return this._options;
  }

  render(context, mapState) {
    context.fillStyle = this.options.color;
    context.strokeStyle = this.options.color;

    this.renderPolygon(context);
  }

  renderPolygon(context) {
    /*
    const markerWidth = 17.698069;
    const markerHeight = 24.786272;

    const x = data[0] - markerWidth / 2;
    const y = data[1] - markerHeight;

    context.save();
    context.transform(0.184386, 0.000000, 0.000000, 0.184386, 0.551658 + x, 4.095760 + y);
    context.beginPath();
    context.lineWidth = 1.667195;
    context.moveTo(45.000000, -22.212949);
    context.bezierCurveTo(18.494941, -22.212949, -2.991863, -0.726145, -2.991863, 25.778914);
    context.bezierCurveTo(-2.991863, 52.282306, 45.000000, 112.212950, 45.000000, 112.212950);
    context.bezierCurveTo(45.000000, 112.212950, 92.991863, 52.282306, 92.991863, 25.777247);
    context.bezierCurveTo(92.991863, -0.726145, 71.505059, -22.212949, 45.000000, -22.212949);
    context.moveTo(45.000000, 43.827962);
    context.bezierCurveTo(33.553042, 43.827962, 24.273437, 34.550024, 24.273437, 23.103067);
    context.bezierCurveTo(24.273437, 11.656109, 33.553042, 2.376504, 45.000000, 2.376504);
    context.bezierCurveTo(56.446958, 2.376504, 65.726563, 11.654442, 65.726563, 23.101399);
    context.bezierCurveTo(65.726563, 34.548357, 56.446958, 43.827962, 45.000000, 43.827962);
    context.fill();
    context.restore();
    */
  }
}
