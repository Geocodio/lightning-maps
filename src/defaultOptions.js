export const defaultMapOptions = {
  /**
   * Common options
   */
  source: (x, y, z) => `https://maps.geocod.io/tiles/base/${z}/${x}/${y}.png`,
  zoom: 12,
  center: [38.841779, -77.088312],
  attribution: '© OpenStreetMap contributors',

  /**
   * Width and height in pixels for each tile, you most likely do not want to change this.
   */
  tileSize: 256,

  /**
   * Determines the distance travelled when panning the map, the higher the value the further the
   * distance
   */
  panAccelerationMultiplier: 2,

  /**
   * The maximum acceleration constant for when the map is thrown. This is in place to avoid
   * super-sonic acceleration speeds :)
   */
  maxPanAcceleration: 3.5,

  /**
   * Only consider high velocity mouse movements that has been performed within this timing
   * threshold (in milliseconds)
   */
  throwTimingThresholdMs: 100,

  /**
   * If the mouse panning velocity is above this threshold, it is considering a throw rather than
   * a regular pan. We use this to pan further when the mouse is moved quickly
   */
  throwVelocityThreshold: 3000,

  /**
   * How quickly panning and zooming animations are executed (in milliseconds)
   */
  animationDurationMs: 300,

  /*
   * Used for debouncing events such as scrolling
   * Note: Needs to be greater than the animationDurationMs value
   */
  debounceIntervalMs: 350,

  /**
   * Determines how many additional tiles that should be loaded, to decrease map load times when
   * panning the map around

   * Minimum value: 1.25
   */
  tileAreaMultiplier: 2,

  /**
   * When debug mode is enabled, additional rendering artifacts are drawn. Should only be used in
   * conjuction with development of the library
   */
  debug: false
};

export const defaultMarkerOptions = {
  /**
   * What color should the marker be?
   * Supports hex, rgb and rgba values
   */
  color: 'rgba(0, 0, 200, 0.7)',

  /**
   * Valid values: marker, circle, donut
   */
  type: 'marker'
};

export const defaultPolygonOptions = {
  /**
   * Whether the polygon should have a stroked line
   */
  enableStroke: true,

  /**
   * What color should the polygon lines be?
   * Supports hex, rgb and rgba values
   */
  strokeStyle: 'rgba(50, 25, 50, 1.0)',

  /**
   * Specify distances to alternately draw a line and a gap to form
   * a dashed or dotted line. Line will be solid if array is empty
   */
  lineDash: [],

  /**
   * Specify the thickness of polygon lines. The width scales with the zoom level, so the actual
   * width in pixels is: lineWidth * zoom
   */
  lineWidth: 0.25,

  /**
   * Whether the polygon should be filled with a color
   */
  enableFill: true,

  /**
   * What color should the polygon be filled with?
   * Supports hex, rgb and rgba values
   */
  fillStyle: 'rgba(0, 0, 0, 0.2)'
};
