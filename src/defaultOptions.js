export const defaultMapOptions = {
  /**
   * Common options
   */
  source: (x, y, z) => `https://maps.geocod.io/tiles/base/${z}/${x}/${y}.png`,
  zoom: 12,
  center: [38.841779, -77.088312],
  attribution: '© OpenStreetMap contributors',

  /**
   * Enable to make map controls visible only when mouse is hovered over the canvas
   */
  hideControlsUntilActive: true,

  /**
   * Define how markers should be rendered:
   * standard: Render markers individually at all zoom levels
   * cluster: Group markers into clusters at lower zoom levels
   */
  markerRenderMode: 'standard',

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
  debug: false,

  /**
   * Whether debug logs should be enabled. Should only be used in conjuction with development
   * of the library
   */
  log: false
};

export const defaultMarkerOptions = {
  /**
   * What color should the marker be?
   * Supports hex, rgb and rgba values
   */
  color: 'rgba(0, 0, 200, 0.7)',

  /**
   * Valid values: marker, circle, donut, image
   */
  type: 'marker',

  /**
   * Image object for the rendered icon
   * Note: Only used for markers with the "image" type
   */
  image: null,

  /**
   * Horizontal and vertical offset.
   * When the offset is set to [0,0], the image is centered horizontally and vertically.
   * You might for example want add a vertical offset to teardrop-shaped marker icons
   * Note: Only used for markers with the "image" type
   */
  offset: [0, 0],

  /**
   * Whether the marker should have small circular shadow, marking the location
   * Only applicable when type is marker or image
   */
  enableShadow: true,

  /**
   * Whether the marker should have a stroked line
   * Only applicable when type is circle
   */
  enableStroke: false,

  /**
   * What color should the border be?
   * Supports hex, rgb and rgba values
   * Only applicable when enableStroke is true and type is circle
   */
  strokeStyle: 'rgba(100, 100, 100, 0.9)',

  /**
   * Specify the thickness of marker border
   * Only applicable when enableStroke is true and type is circle
   */
  lineWidth: 2.5
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
  fillStyle: 'rgba(0, 0, 0, 0.2)',

  /**
   * When a polygon is set to be non-interactive it will not have a hover state or emit hover events
   */
  interactive: true
};

export const defaultPolygonHoverOptions = {
  strokeStyle: 'red',
  lineWidth: 0.5
};

