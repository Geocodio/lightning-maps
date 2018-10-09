const defaultOptions = {
  source: (x, y, z) => `https://maps.geocod.io/tiles/base/${z}/${x}/${y}.png`,
  zoom: 12,
  center: [38.841779, -77.088312],
  tileSize: 256
};

export default defaultOptions;
