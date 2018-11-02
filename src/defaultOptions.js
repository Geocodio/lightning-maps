const defaultOptions = {
  /**
   * Common options
   */
  source: (x, y, z) => `https://maps.geocod.io/tiles/base/${z}/${x}/${y}.png`,
  zoom: 12,
  center: [38.841779, -77.088312],

  /**
   * Width and height in pixels for each tile, you most likely do not want to change this.
   */
  tileSize: 256,

  /**
   * Determines the distance travelled when panning the map, the higher the value the further the
   * distance
   */
  panAccelerationMultiplier: 3,

  /**
   * Determines how many additional tiles that should be loaded, to decrease map load times when
   * panning the map around

   * Minimum value: 1.25
   */
  tileAreaMultiplier: 2,
  tileZoomMultiplier: 4,

  /**
   * When debug mode is enabled, additional rendering artifacts are drawn. Should only be used in
   * conjuction with development of the library
   */
  debug: false
};

export default defaultOptions;
