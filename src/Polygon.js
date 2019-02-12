import { defaultPolygonOptions, defaultPolygonHoverOptions } from './defaultOptions';
import TileConversion from './TileConversion';
import { feature } from 'topojson-client';
import classifyPoint from 'robust-point-in-polygon';

export default class Polygon {
  constructor(json, objectName, options = {}, hoverOptions = null) {
    this._options = Object.assign({}, defaultPolygonOptions, options);
    this._hoverOptions = Object.assign({}, defaultPolygonOptions, defaultPolygonHoverOptions, hoverOptions);

    this.geometry = feature(json, json.objects[objectName]);
  }

  get options() {
    return this._options;
  }

  get hoverOptions() {
    return this._hoverOptions;
  }

  get geometry() {
    return window._geometry;
  }

  set geometry(geometry) {
    window._geometry = geometry;
  }

  get projectedGeometry() {
    return window._projectedGeometry;
  }

  set projectedGeometry(projectedGeometry) {
    window._projectedGeometry = projectedGeometry;
  }

  get projectedGeometryState() {
    return this._projectedGeometryState;
  }

  set projectedGeometryState(projectedGeometryState) {
    this._projectedGeometryState = projectedGeometryState;
  }

  handleMouseOver(context, mapState, mousePosition) {
    const currentlyZooming = Math.round(mapState.zoom) !== mapState.zoom;

    if (!this.geometry || !this.projectedGeometry || currentlyZooming) {
      return [];
    }

    const canvasCenter = [
      mapState.canvasDimensions[0] / 2,
      mapState.canvasDimensions[1] / 2
    ];

    const originZoom = this.determineOriginZoom(mapState);
    const centerOffset = this.calculateCenterOffset(mapState, originZoom);
    const point = [
      mousePosition.x - centerOffset[0] - canvasCenter[0],
      mousePosition.y - centerOffset[1] - canvasCenter[1]
    ];

    return this.projectedGeometry.filter(item => {
      const isHover = item.geometry.filter(list => classifyPoint(list, point) === -1).length > 0;

      if (isHover) {
        context.beginPath();

        item.geometry.map((list) => {
          list.map((position, index) => {
            position = [
              position[0] + centerOffset[0] + canvasCenter[0],
              position[1] + centerOffset[1] + canvasCenter[1]
            ];

            if (index === 0) {
              context.moveTo(position[0], position[1]);
            } else {
              context.lineTo(position[0], position[1]);
            }
          });
        });

        this.applyContextStyles(context, this.hoverOptions, mapState.zoom);

        if (this.options.enableStroke) context.fill();
        if (this.options.enableFill) context.stroke();
      }

      return isHover;
    });
  }

  calculateCenterOffset(mapState, originZoom) {
    return [
      -(TileConversion.lon2tile(mapState.center[1], originZoom, false) * mapState.tileSize),
      -(TileConversion.lat2tile(mapState.center[0], originZoom, false) * mapState.tileSize)
    ];
  }

  render(context, mapState) {
    if (!this.geometry) {
      return;
    }

    const originZoom = this.determineOriginZoom(mapState);

    const zoomDiff = originZoom
      ? mapState.zoom - originZoom
      : 0;

    const scale = zoomDiff !== 0
      ? Math.pow(2, zoomDiff)
      : 1;

    const mapCenterChanged = this.renderedMapCenter !== mapState.center,
      mapZoomChanged = (zoomDiff === 0 && this.renderedZoomLevel !== mapState.zoom);

    const shouldReRender = mapCenterChanged || mapZoomChanged;

    let centerOffset = null;

    if (shouldReRender) {
      this.renderedZoomLevel = mapState.zoom;
      this.renderedMapCenter = mapState.center;

      this.projectedGeometry = this.geometry.features.map(feature => {
        return {
          ...feature,
          geometry: this.projectGeometry(feature.geometry, mapState)
        };
      });

      centerOffset = this.calculateCenterOffset(mapState, originZoom);

      this.calculatePolygonExtends(centerOffset);
    }

    const canvasCenter = [
      mapState.canvasDimensions[0] / 2,
      mapState.canvasDimensions[1] / 2
    ];

    const imagePosition = [
      canvasCenter[0] + mapState.moveOffset[0] + (this.polygonExtends.minX * scale),
      canvasCenter[1] + mapState.moveOffset[1] + (this.polygonExtends.minY * scale)
    ];

    const imageRect = {
      left: Math.floor(imagePosition[0] * -1),
      right: Math.ceil(Math.abs(imagePosition[0]) + mapState.canvasDimensions[0]),
      top: Math.floor(imagePosition[1] * -1),
      bottom: Math.ceil(Math.abs(imagePosition[1]) + mapState.canvasDimensions[1])
    };

    if (shouldReRender) {
      this.renderOffscreenCanvas(mapState, centerOffset, imageRect);
    }

    const imageDrawPosition = [
      mapState.moveOffset[0] - (canvasCenter[0] * (scale - 1)),
      mapState.moveOffset[1] - (canvasCenter[1] * (scale - 1))
    ];

    const scaledWidth = this.polygonDimensions[0] * scale,
      scaledHeight = this.polygonDimensions[1] * scale;

    context.drawImage(
      this.offscreenCanvas,
      imageDrawPosition[0], imageDrawPosition[1],
      scaledWidth, scaledHeight
    );
  }

  determineOriginZoom(mapState) {
    let originZoom = mapState.zoom;

    if (mapState.targetZoom > mapState.zoom) { // Zoming in
      originZoom = Math.floor(mapState.zoom);
    } else if (mapState.targetZoom < mapState.zoom) { // Zooming out
      originZoom = Math.ceil(mapState.zoom);
    }

    return originZoom;
  }

  createOffscreenCanvas(clipRect) {
    this.polygonDimensions = [
      clipRect.right - clipRect.left,
      clipRect.bottom - clipRect.top
    ];

    this.offscreenCanvas = document.createElement('canvas');
    this.offscreenCanvas.width = this.polygonDimensions[0];
    this.offscreenCanvas.height = this.polygonDimensions[1];

    return this.offscreenCanvas.getContext('2d');
  }

  calculatePolygonExtends(centerOffset) {
    let minX, maxX, minY, maxY = null;

    this.mapGeometry(position => {
      position = [
        position[0] + centerOffset[0],
        position[1] + centerOffset[1]
      ];

      if (!maxX || position[0] > maxX) {
        maxX = position[0];
      }

      if (!minX || position[0] < minX) {
        minX = position[0];
      }

      if (!maxY || position[1] > maxY) {
        maxY = position[1];
      }

      if (!minY || position[1] < minY) {
        minY = position[1];
      }
    });

    this.polygonDimensions = [
      Math.ceil(maxX - minX),
      Math.ceil(maxY - minY)
    ];

    this.polygonExtends = {
      minX, maxX,
      minY, maxY
    };
  }

  renderOffscreenCanvas(mapState, centerOffset, clipRect) {
    const offscreenContext = this.createOffscreenCanvas(clipRect);

    offscreenContext.beginPath();
    offscreenContext.font = 'bold 8px helvetica';

    this.projectedGeometry.map((item) =>
      item.geometry.map((list) => {
        const pointsInClipRect = list.filter(position => {
          position = [
            position[0] - this.polygonExtends.minX + centerOffset[0],
            position[1] - this.polygonExtends.minY + centerOffset[1]
          ];

          return position[0] >= clipRect.left && position[0] <= clipRect.right
           && position[1] >= clipRect.top && position[1] <= clipRect.bottom;
        });

        if (pointsInClipRect.length > 0) {
          list.map((position, index) => {
            position = [
              position[0] - this.polygonExtends.minX + centerOffset[0] - clipRect.left,
              position[1] - this.polygonExtends.minY + centerOffset[1] - clipRect.top
            ];

            if (index === 0) {
              // offscreenContext.fillText(item.properties.NAME, position[0], position[1]);

              offscreenContext.moveTo(position[0], position[1]);
            } else {
              offscreenContext.lineTo(position[0], position[1]);
            }
          });
        }
      })
    );

    this.applyContextStyles(offscreenContext, this.options, mapState.zoom);

    if (this.options.enableStroke) offscreenContext.fill();
    if (this.options.enableFill) offscreenContext.stroke();
  }

  applyContextStyles(context, options, zoom) {
    context.fillStyle = options.fillStyle;
    context.strokeStyle = options.strokeStyle;
    context.lineWidth = options.lineWidth * zoom;
    context.setLineDash(options.lineDash);
    context.lineJoin = 'round';
  }

  mapGeometry(pointCallback) {
    return this.projectedGeometry.map((item) =>
      item.geometry.map((list) =>
        list.map(pointCallback)
      )
    );
  }

  projectGeometry(geometry, mapState) {
    switch (geometry.type) {
      case 'Polygon':
        return [geometry.coordinates[0].map(item => this.projectPoint(mapState, item[0], item[1]))];

      case 'MultiPolygon':
        return geometry.coordinates.map(coordinates =>
          coordinates[0].map(item => this.projectPoint(mapState, item[0], item[1]))
        );
    }

    return [];
  }

  projectPoint(mapState, x, y) {
    const position = TileConversion.latLonToPixel(
      [y, x],
      null,
      mapState.zoom,
      mapState.tileSize
    );

    return [-position[0], -position[1]];
  }
}
