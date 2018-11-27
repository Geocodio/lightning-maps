(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("LightningMaps", [], factory);
	else if(typeof exports === 'object')
		exports["LightningMaps"] = factory();
	else
		root["LightningMaps"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Map.js":
/*!********************!*\
  !*** ./src/Map.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _TileConversion = _interopRequireDefault(__webpack_require__(/*! ./TileConversion */ "./src/TileConversion.js"));

var _TileLayer = _interopRequireDefault(__webpack_require__(/*! ./TileLayer */ "./src/TileLayer.js"));

var _defaultOptions = __webpack_require__(/*! ./defaultOptions */ "./src/defaultOptions.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Map =
/*#__PURE__*/
function () {
  function Map(canvas, options) {
    _classCallCheck(this, Map);

    if (!canvas || !canvas.getContext) {
      throw new Error('Could not get canvas context');
    }

    this.canvas = canvas;
    this.context = this.canvas.getContext('2d');
    this.options = Object.assign({}, _defaultOptions.defaultMapOptions, options);
    this.initializeState();
    this.attachEvents();
    this.applyStyles();
    this.lastDrawState = null;
    this.draw = this.draw.bind(this);
    window.requestAnimationFrame(this.draw);
  }

  _createClass(Map, [{
    key: "initializeState",
    value: function initializeState() {
      this.state = {
        canvasDimensions: [this.canvas.width, this.canvas.height],
        tiles: {},
        moveOffset: [0, 0],
        targetMoveOffset: [0, 0],
        targetMoveOffsetIsCoord: false,
        moveAnimationStart: null,
        dragStartPosition: null,
        lastEventActionTime: null,
        startZoom: this.options.zoom,
        targetZoom: this.options.zoom,
        zoomAnimationStart: null,
        scale: 1,
        lastMouseMoveEvent: null,
        mouseVelocities: [],
        markers: [],
        tileLayers: [new _TileLayer.default(this)]
      };
    }
  }, {
    key: "getZoom",
    value: function getZoom() {
      return this.options.zoom;
    }
  }, {
    key: "setZoom",
    value: function setZoom(zoom) {
      if (this.zoomValueIsValid(zoom)) {
        this.state.tileLayers.push(new _TileLayer.default(this, zoom)); // this.state.tileLayers[0].tilesZoomLevel = this.options.zoom;

        this.state.lastEventActionTime = window.performance.now();
        this.state.zoomAnimationStart = window.performance.now();
        this.state.targetZoom = zoom;
        this.state.startZoom = this.options.zoom;
      }
    }
  }, {
    key: "setCenter",
    value: function setCenter(coord) {
      if (!Array.isArray(coord) || coord.length !== 2) {
        throw new Error('Please provide a valid array with a lat/lon');
      }

      coord = coord.map(function (coord) {
        return parseFloat(coord);
      });
      this.state.moveAnimationStart = window.performance.now();
      this.state.targetMoveOffset = coord;
      this.state.targetMoveOffsetIsCoord = true;
    }
  }, {
    key: "setTargetMoveOffset",
    value: function setTargetMoveOffset(x, y) {
      var animated = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      if (animated) {
        this.state.moveAnimationStart = window.performance.now();
        this.state.targetMoveOffset = _TileConversion.default.pixelToLatLon([x, y], this.options.center, this.options.zoom, this.options.tileSize);
        this.state.targetMoveOffsetIsCoord = true;
      } else {
        this.state.targetMoveOffset = [x, y];
        this.state.targetMoveOffsetIsCoord = false;
        this.state.moveOffset = this.state.targetMoveOffset;
      }
    }
  }, {
    key: "zoomValueIsValid",
    value: function zoomValueIsValid(zoom) {
      return zoom >= 1 && zoom <= 18;
    }
  }, {
    key: "isReadyForEvent",
    value: function isReadyForEvent() {
      if (!this.state.lastEventActionTime) {
        return true;
      }

      var now = window.performance.now();
      var milliSecondsSinceLastEvent = now - this.state.lastEventActionTime;
      return milliSecondsSinceLastEvent > this.options.debounceIntervalMs;
    }
  }, {
    key: "calculateVelocity",
    value: function calculateVelocity(position1, position2, time1, time2) {
      return (position1 - position2) / (time1 - time2) * 1000;
    }
  }, {
    key: "attachEvents",
    value: function attachEvents() {
      var _this = this;

      this.canvas.addEventListener('wheel', function (event) {
        event.preventDefault();

        if (_this.isReadyForEvent()) {
          if (event.deltaY > 5) {
            _this.setZoom(_this.options.zoom - 1);
          } else if (event.deltaY < -5) {
            _this.setZoom(_this.options.zoom + 1);
          }
        }
      });
      this.canvas.addEventListener('dblclick', function (event) {
        event.preventDefault();
        var centerX = _this.state.canvasDimensions[0] / 2;
        var centerY = _this.state.canvasDimensions[1] / 2;

        _this.setTargetMoveOffset(-(event.clientX - centerX), -(event.clientY - centerY));

        _this.setZoom(_this.options.zoom + 1);
      });
      this.canvas.addEventListener('mousedown', function (event) {
        event.preventDefault();
        _this.state.mouseVelocities = [];
        _this.state.dragStartPosition = [event.clientX - _this.state.moveOffset[0], event.clientY - _this.state.moveOffset[1]];
      });
      this.canvas.addEventListener('mouseup', function (event) {
        event.preventDefault();
        var x = -(_this.state.dragStartPosition[0] - event.clientX);
        var y = -(_this.state.dragStartPosition[1] - event.clientY);

        if (_this.state.moveOffset[0] !== 0 || _this.state.moveOffset[1] !== 0) {
          var now = window.performance.now();
          var timingThreshold = now - _this.options.throwTimingThresholdMs;

          var thresholdsToConsider = _this.state.mouseVelocities.filter(function (threshold) {
            return threshold[0] > timingThreshold;
          }).map(function (threshold) {
            return threshold[1];
          });

          var velocitySum = thresholdsToConsider.reduce(function (accumulator, velocity) {
            return accumulator + velocity;
          }, 0);
          var averageVelocity = velocitySum / thresholdsToConsider.length;

          if (averageVelocity >= _this.options.throwVelocityThreshold) {
            var multiplier = averageVelocity / _this.options.throwVelocityThreshold * _this.options.panAccelerationMultiplier;
            multiplier = Math.min(multiplier, _this.options.maxPanAcceleration);

            _this.setTargetMoveOffset(x * multiplier, y * multiplier);
          } else {
            _this.updateCenter();
          }
        }

        _this.state.dragStartPosition = null;
      });
      this.canvas.addEventListener('mousemove', function (event) {
        event.preventDefault();

        if (_this.state.dragStartPosition) {
          var x = -(_this.state.dragStartPosition[0] - event.clientX);
          var y = -(_this.state.dragStartPosition[1] - event.clientY);
          var now = window.performance.now();

          var vx = _this.calculateVelocity(_this.state.moveOffset[0], x, now, _this.state.lastMouseMoveEvent);

          var vy = _this.calculateVelocity(_this.state.moveOffset[1], y, now, _this.state.lastMouseMoveEvent);

          var velocity = Math.round(Math.sqrt(vx * vx + vy * vy));

          _this.state.mouseVelocities.push([now, velocity]);

          _this.setTargetMoveOffset(x, y, false);

          _this.state.lastMouseMoveEvent = window.performance.now();
        }

        return false;
      });
    }
  }, {
    key: "applyStyles",
    value: function applyStyles() {
      this.canvas.style.cursor = 'grab';
    }
  }, {
    key: "easeOutQuad",
    value: function easeOutQuad(time) {
      return time * (2 - time);
    }
  }, {
    key: "updateMoveOffset",
    value: function updateMoveOffset() {
      var targetMoveOffsetChanged = this.state.moveOffset !== this.state.targetMoveOffset;

      if (targetMoveOffsetChanged) {
        var timestamp = window.performance.now();
        var progress = Math.max(timestamp - this.state.moveAnimationStart, 0);
        var percentage = this.easeOutQuad(progress / this.options.animationDurationMs);
        var targetMoveOffset = this.state.targetMoveOffset;

        if (this.state.targetMoveOffsetIsCoord) {
          targetMoveOffset = _TileConversion.default.latLonToPixel(this.state.targetMoveOffset, this.options.center, this.options.zoom, this.options.tileSize, this.state.canvasDimensions);
        }

        if (percentage >= 0.99) {
          this.state.moveOffset = targetMoveOffset;
        } else {
          this.state.moveOffset = [this.state.moveOffset[0] + (targetMoveOffset[0] - this.state.moveOffset[0]) * percentage, this.state.moveOffset[1] + (targetMoveOffset[1] - this.state.moveOffset[1]) * percentage];
        }

        var targetHasBeenReached = this.state.moveOffset === targetMoveOffset;

        if (targetHasBeenReached) {
          this.updateCenter();
        }
      }
    }
  }, {
    key: "updateCenter",
    value: function updateCenter() {
      var latLon = _TileConversion.default.pixelToLatLon(this.state.moveOffset, this.options.center, this.options.zoom, this.options.tileSize);

      this.setTargetMoveOffset(0, 0, false);
      this.options.center = latLon;
    }
  }, {
    key: "updateZoom",
    value: function updateZoom() {
      if (this.options.zoom !== this.state.targetZoom) {
        var progress = Math.max(window.performance.now() - this.state.zoomAnimationStart, 0);
        var percentage = this.easeOutQuad(progress / this.options.animationDurationMs);
        var differenceFromTarget = Math.abs(this.state.targetZoom - this.state.startZoom);

        if (this.state.targetZoom <= this.state.startZoom) {
          differenceFromTarget *= -1;
        }

        var newZoomDiff = differenceFromTarget * percentage;
        var remainingTime = this.options.animationDurationMs - progress;
        this.options.zoom = remainingTime <= 5 ? this.state.targetZoom : this.state.startZoom + newZoomDiff;
        var roundedZoom = Math.round(this.options.zoom);
        var diff = this.options.zoom - roundedZoom;
        this.state.scale = Math.pow(2, diff);

        if (this.options.zoom === this.state.targetZoom) {
          // Mark old tile layer for deletion
          this.state.tileLayers.shift();
          this.state.tileLayers[0].tilesZoomLevel = null; // this.state.tileLayers[this.state.tileLayers.length - 1].shouldBeDeleted = true;
        }
      } else {
        this.state.scale = 1;
      }
    }
  }, {
    key: "garbageCollect",
    value: function garbageCollect() {
      var _this2 = this;

      var allTiles = Object.values(this.state.tiles);

      if (allTiles.length > this.maxTilesToKeep()) {
        var tileExpirationCutOff = new Date().getTime() - 5000;
        var tilesToConsider = allTiles.filter(function (tile) {
          return tile.lastRequested < tileExpirationCutOff;
        }).sort(function (a, b) {
          return ~~(a.lastRequested < b.lastRequested);
        });
        var tilesToDeleteCount = this.maxTilesToKeep() - (allTiles.length - tilesToConsider.length);
        tilesToConsider.splice(tilesToConsider.length - tilesToDeleteCount).forEach(function (tile) {
          tile.src = '';
          delete _this2.state.tiles[tile.tileId];
        });
      }
    }
  }, {
    key: "maxTilesToKeep",
    value: function maxTilesToKeep() {
      return 1000;
    }
  }, {
    key: "shouldRedraw",
    value: function shouldRedraw() {
      var drawState = JSON.stringify([this.state, this.options]);

      if (this.lastDrawState !== drawState) {
        this.lastDrawState = drawState;
        return true;
      }

      return false;
    }
  }, {
    key: "draw",
    value: function draw() {
      this.updateMoveOffset();
      this.updateZoom();
      this.state.tileLayers.forEach(function (tileLayer) {
        return tileLayer.calculateGrid();
      });
      this.garbageCollect();

      if (this.shouldRedraw()) {
        // Delete tile layers that are ready for deletion and mostly loaded

        /*
        this.state.tileLayers = this.state.tileLayers
          .filter(tileLayer => !(tileLayer.shouldBeDeleted && tileLayer.loadedPercentage() >= 0.9));
         console.log(this.state.tileLayers.length);
        */
        if (this.state.tileLayers.length > 0) {
          // Only draw the top layer
          this.state.tileLayers[0].drawTiles(this.state.scale);
        }

        this.drawMarkers();
        this.drawAttribution();
      }

      window.requestAnimationFrame(this.draw);
    }
  }, {
    key: "getMapBounds",
    value: function getMapBounds() {
      var nw = _TileConversion.default.pixelToLatLon([this.state.canvasDimensions[0] / 2, this.state.canvasDimensions[1] / 2], this.options.center, this.options.zoom, this.options.tileSize);

      var se = _TileConversion.default.pixelToLatLon([-this.state.canvasDimensions[0] / 2, -(this.state.canvasDimensions[1] / 2)], this.options.center, this.options.zoom, this.options.tileSize);

      return {
        nw: nw,
        se: se
      };
    }
  }, {
    key: "drawMarkers",
    value: function drawMarkers() {
      var _this3 = this;

      var bounds = this.getMapBounds();
      var visibleMarkers = this.state.markers.filter(function (marker) {
        return marker.coords[0] <= bounds.nw[0] && marker.coords[0] >= bounds.se[0] && marker.coords[1] >= bounds.nw[1] && marker.coords[1] <= bounds.se[1];
      });
      var center = [this.state.canvasDimensions[0] / 2, this.state.canvasDimensions[1] / 2];
      visibleMarkers.map(function (marker) {
        var position = _TileConversion.default.latLonToPixel(marker.coords, _this3.options.center, _this3.options.zoom, _this3.options.tileSize, _this3.state.canvasDimensions);

        marker.render(_this3.context, [center[0] - position[0] + _this3.state.moveOffset[0], center[1] - position[1] + _this3.state.moveOffset[1]]);
      });
    }
  }, {
    key: "drawAttribution",
    value: function drawAttribution() {
      var margin = 4;
      this.context.font = 'bold 12px sans-serif';
      var textBounds = this.context.measureText(this.options.attribution);
      var x = this.state.canvasDimensions[0] - textBounds.width - margin;
      var y = this.state.canvasDimensions[1] - 2 - margin;
      this.context.fillStyle = 'rgba(255, 255, 255, 0.7)';
      this.roundedRectangle(x - margin, y - 15, textBounds.width + 80, 80);
      this.context.fillStyle = 'rgba(0, 0, 0, 0.7)';
      this.context.fillText(this.options.attribution, x, y);
    }
  }, {
    key: "roundedRectangle",
    value: function roundedRectangle(x, y, width, height) {
      var radius = 5;
      this.context.beginPath();
      this.context.moveTo(x + radius, y);
      this.context.lineTo(x + width - radius, y);
      this.context.quadraticCurveTo(x + width, y, x + width, y + radius);
      this.context.lineTo(x + width, y + height - radius);
      this.context.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
      this.context.lineTo(x + radius, y + height);
      this.context.quadraticCurveTo(x, y + height, x, y + height - radius);
      this.context.lineTo(x, y + radius);
      this.context.quadraticCurveTo(x, y, x + radius, y);
      this.context.closePath();
      this.context.fill();
    }
  }, {
    key: "addMarker",
    value: function addMarker(marker) {
      this.state.markers.push(marker);
    }
  }, {
    key: "addMarkers",
    value: function addMarkers(markers) {
      var _this4 = this;

      markers.map(function (marker) {
        return _this4.addMarker(marker);
      });
    }
  }]);

  return Map;
}();

exports.default = Map;
module.exports = exports["default"];

/***/ }),

/***/ "./src/Marker.js":
/*!***********************!*\
  !*** ./src/Marker.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defaultOptions = __webpack_require__(/*! ./defaultOptions */ "./src/defaultOptions.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Marker =
/*#__PURE__*/
function () {
  function Marker(coords) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Marker);

    this._coords = coords;
    this._options = Object.assign({}, _defaultOptions.defaultMarkerOptions, options);
  }

  _createClass(Marker, [{
    key: "render",
    value: function render(context, position) {
      var renderFunction = null;

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
        throw new Error("Unsupported marker type: \"".concat(this.options.type, "\""));
      } else {
        context.fillStyle = this.options.color;
        context.strokeStyle = this.options.color;
        renderFunction = renderFunction.bind(this);
        renderFunction(context, position);
      }
    }
  }, {
    key: "renderCircle",
    value: function renderCircle(context, position) {
      context.save();
      context.beginPath();
      context.arc(position[0], position[1], 5, 0, 2 * Math.PI);
      context.fill();
      context.restore();
    }
  }, {
    key: "renderDonut",
    value: function renderDonut(context, position) {
      context.save();
      context.beginPath();
      context.lineWidth = 5;
      context.arc(position[0], position[1], 7, 0, 2 * Math.PI);
      context.stroke();
      context.restore();
    }
  }, {
    key: "renderMarker",
    value: function renderMarker(context, position) {
      var markerWidth = 17.698069;
      var markerHeight = 24.786272;
      var x = position[0] - markerWidth / 2;
      var y = position[1] - markerHeight;
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
  }, {
    key: "coords",
    get: function get() {
      return this._coords;
    }
  }, {
    key: "options",
    get: function get() {
      return this._options;
    }
  }]);

  return Marker;
}();

exports.default = Marker;
module.exports = exports["default"];

/***/ }),

/***/ "./src/Tile.js":
/*!*********************!*\
  !*** ./src/Tile.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Tile =
/*#__PURE__*/
function () {
  function Tile(x, y, zoom) {
    _classCallCheck(this, Tile);

    this._x = x;
    this._y = y;
    this._zoom = zoom;
  }

  _createClass(Tile, [{
    key: "x",
    get: function get() {
      return this._x;
    }
  }, {
    key: "y",
    get: function get() {
      return this._y;
    }
  }, {
    key: "zoom",
    get: function get() {
      return this._zoom;
    }
  }, {
    key: "id",
    get: function get() {
      return [this.x, this.y, this.zoom].join('|');
    }
  }]);

  return Tile;
}();

exports.default = Tile;
module.exports = exports["default"];

/***/ }),

/***/ "./src/TileConversion.js":
/*!*******************************!*\
  !*** ./src/TileConversion.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Based on https://wiki.openstreetmap.org/wiki/Slippy_map_tilenames#ECMAScript_.28JavaScript.2FActionScript.2C_etc..29
var TileConversion =
/*#__PURE__*/
function () {
  function TileConversion() {
    _classCallCheck(this, TileConversion);
  }

  _createClass(TileConversion, null, [{
    key: "lon2tile",
    value: function lon2tile(lon, zoom) {
      var rounded = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var tile = (lon + 180) / 360 * Math.pow(2, zoom);
      return rounded ? Math.floor(tile) : tile;
    }
  }, {
    key: "lat2tile",
    value: function lat2tile(lat, zoom) {
      var rounded = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var tile = (1 - Math.log(Math.tan(lat * Math.PI / 180) + 1 / Math.cos(lat * Math.PI / 180)) / Math.PI) / 2 * Math.pow(2, zoom);
      return rounded ? Math.floor(tile) : tile;
    }
  }, {
    key: "tile2lon",
    value: function tile2lon(x, z) {
      return x / Math.pow(2, z) * 360 - 180;
    }
  }, {
    key: "tile2lat",
    value: function tile2lat(y, z) {
      var n = Math.PI - 2 * Math.PI * y / Math.pow(2, z);
      return 180 / Math.PI * Math.atan(0.5 * (Math.exp(n) - Math.exp(-n)));
    }
  }, {
    key: "tile2boundingBox",
    value: function tile2boundingBox(x, y, zoom) {
      return {
        ne: [TileConversion.tile2lat(y, zoom), TileConversion.tile2lon(x + 1, zoom)],
        sw: [TileConversion.tile2lat(y + 1, zoom), TileConversion.tile2lon(x, zoom)]
      };
    }
  }, {
    key: "pixelToLatLon",
    value: function pixelToLatLon(pixel, center, zoom, tileSize) {
      var pointDiff = [pixel[0] / tileSize, pixel[1] / tileSize];
      var tileX = TileConversion.lon2tile(center[1], zoom, false) - pointDiff[0];
      var tileY = TileConversion.lat2tile(center[0], zoom, false) - pointDiff[1];
      return [TileConversion.tile2lat(tileY, zoom), TileConversion.tile2lon(tileX, zoom)];
    }
  }, {
    key: "latLonToPixel",
    value: function latLonToPixel(coord, center, zoom, tileSize, mapDimensions) {
      var tileX = TileConversion.lon2tile(coord[1], zoom, false);
      var tileY = TileConversion.lat2tile(coord[0], zoom, false);
      var tileCenterX = TileConversion.lon2tile(center[1], zoom, false);
      var tileCenterY = TileConversion.lat2tile(center[0], zoom, false);
      return [-(tileX - tileCenterX) * tileSize, -(tileY - tileCenterY) * tileSize];
    }
  }]);

  return TileConversion;
}();

exports.default = TileConversion;
module.exports = exports["default"];

/***/ }),

/***/ "./src/TileLayer.js":
/*!**************************!*\
  !*** ./src/TileLayer.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _TileConversion = _interopRequireDefault(__webpack_require__(/*! ./TileConversion */ "./src/TileConversion.js"));

var _Tile = _interopRequireDefault(__webpack_require__(/*! ./Tile */ "./src/Tile.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TileLayer =
/*#__PURE__*/
function () {
  function TileLayer(map) {
    var tilesZoomLevel = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    _classCallCheck(this, TileLayer);

    this.map = map;
    this.tilesZoomLevel = tilesZoomLevel;
    this.shouldBeDeleted = false;
    this.context = map.context;
    this.state = {
      grid: [],
      gridHash: null,
      relativeTileOffset: [0, 0]
    };
  }

  _createClass(TileLayer, [{
    key: "toJSON",
    value: function toJSON() {
      return [this.state, this.loadedPercentage() // We want a change in loaded tiles to possibly trigger a redraw
      ];
    }
  }, {
    key: "getTilesCount",
    value: function getTilesCount(canvasSize) {
      var tilesCount = Math.ceil(canvasSize / this.map.options.tileSize) * this.map.options.tileAreaMultiplier;

      if (tilesCount % 2 === 0) {
        tilesCount++;
      }

      return tilesCount;
    }
  }, {
    key: "calculateGrid",
    value: function calculateGrid() {
      var _this$map = this.map,
          state = _this$map.state,
          options = _this$map.options;

      var centerY = _TileConversion.default.lat2tile(options.center[0], Math.round(this.tilesZoomLevel || options.zoom), false);

      var centerX = _TileConversion.default.lon2tile(options.center[1], Math.round(this.tilesZoomLevel || options.zoom), false);

      var gridHash = [centerY, centerX].join(',');
      var gridNeedsToBeUpdated = this.state.gridHash !== gridHash;

      if (!gridNeedsToBeUpdated) {
        return;
      }

      var horizontalTiles = this.getTilesCount(state.canvasDimensions[0]);
      var verticalTiles = this.getTilesCount(state.canvasDimensions[1]); // noinspection JSSuspiciousNameCombination

      var centerYRounded = Math.floor(centerY);
      var centerXRounded = Math.floor(centerX);
      this.state.relativeTileOffset = [Math.abs(centerX - centerXRounded), Math.abs(centerY - centerYRounded)];
      var startX = centerXRounded - Math.floor(horizontalTiles / 2);
      var startY = centerYRounded - Math.floor(verticalTiles / 2);
      var grid = [];

      for (var y = 0; y < verticalTiles; y++) {
        for (var x = 0; x < horizontalTiles; x++) {
          if (!grid[x]) {
            grid[x] = [];
          }

          var tileX = startX + x;
          var tileY = startY + y;

          if (tileX >= 0 && tileY >= 0) {
            grid[x][y] = new _Tile.default(tileX, tileY, Math.round(this.tilesZoomLevel || options.zoom));
            this.ensureTileAsset(grid[x][y]);
          }
        }
      }

      this.state.grid = grid;
      this.state.gridHash = gridHash;
    }
  }, {
    key: "ensureTileAsset",
    value: function ensureTileAsset(tile) {
      var _this = this;

      if (!(tile.id in this.map.state.tiles)) {
        var tileUrl = this.map.options.source(Math.floor(tile.x), Math.floor(tile.y), tile.zoom);
        this.map.state.tiles[tile.id] = new Image();
        this.map.state.tiles[tile.id].tileId = tile.id;
        this.map.state.tiles[tile.id].src = tileUrl;
        this.map.state.tiles[tile.id].loaded = false;

        this.map.state.tiles[tile.id].onload = function () {
          _this.map.state.tiles[tile.id].loaded = true;
        };
      }

      this.map.state.tiles[tile.id].lastRequested = new Date().getTime();
    }
  }, {
    key: "drawTiles",
    value: function drawTiles(scale) {
      var canvasWidth = this.map.state.canvasDimensions[0];
      var canvasHeight = this.map.state.canvasDimensions[1];
      var tileSize = this.map.options.tileSize * scale;
      var centerOffset = [tileSize / 2 - this.state.relativeTileOffset[0] * tileSize, tileSize / 2 - this.state.relativeTileOffset[1] * tileSize];
      this.context.fillStyle = '#EEE';
      this.context.fillRect(0, 0, canvasWidth, canvasHeight);
      var horizontalTiles = this.getTilesCount(canvasWidth);
      var verticalTiles = this.getTilesCount(canvasHeight);
      var horizontalOverflow = horizontalTiles * tileSize - canvasWidth;
      var verticalOverflow = verticalTiles * tileSize - canvasHeight;

      for (var y = 0; y < verticalTiles; y++) {
        for (var x = 0; x < horizontalTiles; x++) {
          var tile = this.state.grid[x][y];

          if (tile) {
            var tileX = this.map.state.moveOffset[0] + centerOffset[0] + (x * tileSize - horizontalOverflow / 2);
            var tileY = this.map.state.moveOffset[1] + centerOffset[1] + (y * tileSize - verticalOverflow / 2);

            try {
              if (this.map.state.tiles[tile.id].loaded) {
                this.context.drawImage(this.map.state.tiles[tile.id], tileX, tileY, tileSize, tileSize);
              } else {
                this.drawGenericBackground(tileX, tileY, tileSize);
              }
            } catch (err) {
              this.drawGenericBackground(tileX, tileY, tileSize);
            }

            if (this.map.options.debug) {
              this.context.strokeStyle = 'green';
              this.context.strokeRect(tileX, tileY, tileSize, tileSize);
            }
          }
        }
      }

      if (this.map.options.debug) {
        this.context.fillStyle = 'rgba(200, 0, 0, 0.7)';
        this.context.beginPath();
        this.context.arc(canvasWidth / 2, canvasHeight / 2, 5, 0, 2 * Math.PI);
        this.context.fill();
      }
    }
  }, {
    key: "drawGenericBackground",
    value: function drawGenericBackground(x, y, size) {
      var increment = size / 8;
      this.context.beginPath();

      for (var lineX = increment; lineX < size; lineX += increment) {
        for (var lineY = increment; lineY < size; lineY += increment) {
          this.context.moveTo(x, y + lineY);
          this.context.lineTo(x + size, y + lineY);
          this.context.moveTo(x + lineX, y);
          this.context.lineTo(x + lineX, y + size);
        }
      }

      this.context.strokeStyle = '#DDD';
      this.context.stroke();
      this.context.strokeStyle = '#CCC';
      this.context.strokeRect(x, y, size, size);
    }
  }, {
    key: "loadedPercentage",
    value: function loadedPercentage() {
      var horizontalTiles = this.getTilesCount(this.map.state.canvasDimensions[0]);
      var verticalTiles = this.getTilesCount(this.map.state.canvasDimensions[1]);
      var totalTiles = horizontalTiles * verticalTiles;
      var loadedTiles = 0;

      for (var y = 0; y < verticalTiles; y++) {
        for (var x = 0; x < horizontalTiles; x++) {
          var tile = this.state.grid[x][y];

          if (this.map.state.tiles[tile.id].loaded) {
            loadedTiles++;
          }
        }
      }

      return loadedTiles / totalTiles;
    }
  }]);

  return TileLayer;
}();

exports.default = TileLayer;
module.exports = exports["default"];

/***/ }),

/***/ "./src/defaultOptions.js":
/*!*******************************!*\
  !*** ./src/defaultOptions.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultMarkerOptions = exports.defaultMapOptions = void 0;
var defaultMapOptions = {
  /**
   * Common options
   */
  source: function source(x, y, z) {
    return "https://maps.geocod.io/tiles/base/".concat(z, "/").concat(x, "/").concat(y, ".png");
  },
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
   */
  debounceIntervalMs: 200,

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
exports.defaultMapOptions = defaultMapOptions;
var defaultMarkerOptions = {
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
exports.defaultMarkerOptions = defaultMarkerOptions;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Map = _interopRequireDefault(__webpack_require__(/*! ./Map */ "./src/Map.js"));

var _Marker = _interopRequireDefault(__webpack_require__(/*! ./Marker */ "./src/Marker.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  Map: _Map.default,
  Marker: _Marker.default
};
exports.default = _default;
module.exports = exports["default"];

/***/ })

/******/ });
});
//# sourceMappingURL=LightningMaps.js.map