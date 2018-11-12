// Based on https://wiki.openstreetmap.org/wiki/Slippy_map_tilenames#ECMAScript_.28JavaScript.2FActionScript.2C_etc..29
export default class TileConversion {
  static lon2tile(lon, zoom, rounded = true) {
    const tile = (lon + 180) / 360 * Math.pow(2, zoom);

    return rounded
      ? Math.floor(tile)
      : tile;
  }

  static lat2tile(lat, zoom, rounded = true) {
    const tile = (1 - Math.log(Math.tan(lat * Math.PI / 180) + 1 / Math.cos(lat * Math.PI / 180))
      / Math.PI) / 2 * Math.pow(2, zoom);

    return rounded
      ? Math.floor(tile)
      : tile;
  }

  static tile2lon(x, z) {
    return x / Math.pow(2, z) * 360 - 180;
  }

  static tile2lat(y, z) {
    const n = Math.PI - 2 * Math.PI * y / Math.pow(2, z);

    return 180 / Math.PI * Math.atan(0.5 * (Math.exp(n) - Math.exp(-n)));
  }

  static tile2boundingBox(x, y, zoom) {
    return {
      ne: [
        TileConversion.tile2lat(y, zoom),
        TileConversion.tile2lon(x + 1, zoom)
      ],

      sw: [
        TileConversion.tile2lat(y + 1, zoom),
        TileConversion.tile2lon(x, zoom)
      ]
    };
  }

  static pixelToLatLon(pixel, center, zoom, tileSize) {
    const pointDiff = [
      pixel[0] / tileSize,
      pixel[1] / tileSize
    ];

    const tileX = TileConversion.lon2tile(center[1], zoom, false) - pointDiff[0];
    const tileY = TileConversion.lat2tile(center[0], zoom, false) - pointDiff[1];

    return [
      TileConversion.tile2lat(tileY, zoom),
      TileConversion.tile2lon(tileX, zoom)
    ];
  }

  static latLonToPixel(coord, center, zoom, tileSize, mapDimensions) {
    const tileX = TileConversion.lon2tile(coord[1], zoom, false);
    const tileY = TileConversion.lat2tile(coord[0], zoom, false);

    const tileCenterX = TileConversion.lon2tile(center[1], zoom, false);
    const tileCenterY = TileConversion.lat2tile(center[0], zoom, false);

    return [
      -(tileX - tileCenterX) * tileSize,
      -(tileY - tileCenterY) * tileSize
    ];
  }
}
