/* global describe, it, before */

import chai from 'chai';
import TileConversion from '../src/TileConversion';

chai.expect();

const expect = chai.expect;

let pixelToTest, coordToTest, centerCoordinate, zoomLevel, canvasDimensions, tileSize;

describe('Test conversion between pixels and lat/lon', () => {
  before(() => {
    pixelToTest = [220, 180];
    coordToTest = [38.908104740924955, -77.27553100585938];

    centerCoordinate = [38.86, -77.20];
    zoomLevel = 12;
    canvasDimensions = [1280, 1008];
    tileSize = 256;
  });

  describe('when I convert a pixel to a lat/lon coordinate', () => {
    it('should return the correct coordinate', () => {
      const coord = TileConversion.pixelToLatLon(
        pixelToTest,
        centerCoordinate,
        zoomLevel,
        tileSize
      );

      expect(coord[0]).to.be.equal(coordToTest[0]);
      expect(coord[1]).to.be.equal(coordToTest[1]);
    });
  });

  describe('when I convert a lat/lon coordinate to pixel', () => {
    it('should match result from previous test case', () => {
      const pixel = TileConversion.latLonToPixel(
        coordToTest,
        centerCoordinate,
        zoomLevel,
        tileSize,
        canvasDimensions
      );

      expect(pixel[0]).to.be.equal(pixelToTest[0]);
      expect(pixel[1]).to.be.equal(pixelToTest[1]);
    });
  });
});
