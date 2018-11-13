import { defaultMarkerOptions } from './defaultOptions';

export default class Marker {
  constructor(coords, options = {}) {
    this._coords = coords;
    this._options = Object.assign({}, defaultMarkerOptions, options);
  }

  get coords() {
    return this._coords;
  }

  get options() {
    return this._options;
  }

  render(context, position) {
    let renderFunction = null;

    switch (this.options.type) {
      case 'marker':
        renderFunction = this.renderMarker;
        break;

      case 'circle':
        renderFunction = this.renderCircle;
        break;

      case 'donut':
        renderFunction = this.renderDonut;
        break;
    }

    if (!renderFunction) {
      throw new Error(`Unsupported marker type: "${this.options.type}"`);
    } else {
      context.fillStyle = this.options.color;
      context.strokeStyle = this.options.color;

      renderFunction = renderFunction.bind(this);
      renderFunction(context, position);
    }
  }

  renderCircle(context, position) {
    context.save();
    context.beginPath();
    context.arc(position[0], position[1], 5, 0, 2 * Math.PI);
    context.fill();
    context.restore();
  }

  renderDonut(context, position) {
    context.save();
    context.beginPath();
    context.lineWidth = 5;
    context.arc(position[0], position[1], 7, 0, 2 * Math.PI);
    context.stroke();
    context.restore();
  }

  renderMarker(context, position) {
    const markerWidth = 17.698069;
    const markerHeight = 24.786272;

    const x = position[0] - markerWidth / 2;
    const y = position[1] - markerHeight;

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
  }
}
