(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("LightningMap", [], factory);
	else if(typeof exports === 'object')
		exports["LightningMap"] = factory();
	else
		root["LightningMap"] = factory();
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

/***/ "./src/Lightning.js":
/*!**************************!*\
  !*** ./src/Lightning.js ***!
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

var _defaultOptions = _interopRequireDefault(__webpack_require__(/*! ./defaultOptions */ "./src/defaultOptions.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DEBOUNCE_INTERVAL_MS = 200;

var Lightning =
/*#__PURE__*/
function () {
  function Lightning(canvas, options) {
    _classCallCheck(this, Lightning);

    if (!canvas || !canvas.getContext) {
      throw new Error('Could not get canvas context');
    }

    this.canvas = canvas;
    this.context = this.canvas.getContext('2d');
    this.options = Object.assign({}, _defaultOptions.default, options);
    this.initializeState();
    this.attachEvents();
    this.applyStyles();
    this.draw = this.draw.bind(this);
    window.requestAnimationFrame(this.draw);
  }

  _createClass(Lightning, [{
    key: "initializeState",
    value: function initializeState() {
      this.state = {
        canvasDimensions: [this.canvas.width, this.canvas.height],
        tiles: {},
        centerOffset: [0, 0],
        moveOffset: [0, 0],
        targetMoveOffset: [0, 0],
        moveAnimationStart: null,
        dragStartPosition: null,
        lastEventActionTime: null,
        targetZoom: this.options.zoom,
        zoomAnimationStart: null
      };
    }
  }, {
    key: "setZoom",
    value: function setZoom(zoom) {
      if (zoom >= 1 && zoom <= 18) {
        this.state.lastEventActionTime = new Date().getTime();
        this.state.zoomAnimationStart = window.performance.now();
        this.state.targetZoom = zoom;
      }
    }
  }, {
    key: "isReadyForEvent",
    value: function isReadyForEvent() {
      if (!this.state.lastEventActionTime) {
        return true;
      }

      var now = new Date().getTime();
      var milliSecondsSinceLastEvent = now - this.state.lastEventActionTime;
      return milliSecondsSinceLastEvent > DEBOUNCE_INTERVAL_MS;
    }
  }, {
    key: "attachEvents",
    value: function attachEvents() {
      var _this = this;

      this.canvas.addEventListener('wheel', function (event) {
        event.preventDefault();

        if (_this.isReadyForEvent()) {
          if (event.deltaY > 5) {
            _this.setZoom(_this.options.zoom - 2);
          } else if (event.deltaY < -5) {
            _this.setZoom(_this.options.zoom + 2);
          }
        }
      });
      this.canvas.addEventListener('mousedown', function (event) {
        event.preventDefault();
        _this.state.dragStartPosition = [event.clientX, event.clientY];
      });
      this.canvas.addEventListener('mouseup', function (event) {
        event.preventDefault();
        _this.state.dragStartPosition = null;
      });
      this.canvas.addEventListener('mousemove', function (event) {
        event.preventDefault();

        if (_this.state.dragStartPosition) {
          _this.state.lastEventActionTime = new Date().getTime();
          var x = _this.state.dragStartPosition[0] - event.clientX;
          var y = _this.state.dragStartPosition[1] - event.clientY;
          _this.state.targetMoveOffset = [-x * _this.options.panAccelerationMultiplier, -y * _this.options.panAccelerationMultiplier];
          _this.state.moveAnimationStart = window.performance.now();
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
    key: "getTilesCount",
    value: function getTilesCount(canvasSize) {
      var tilesCount = Math.ceil(canvasSize / this.options.tileSize) * 2;

      if (tilesCount % 2 === 0) {
        tilesCount++;
      }

      return tilesCount;
    }
  }, {
    key: "easeOutQuad",
    value: function easeOutQuad(time) {
      return time * (2 - time);
    }
  }, {
    key: "updateMoveOffset",
    value: function updateMoveOffset() {
      var targetMoveOffsetChanged = Object.values(this.state.moveOffset).join(',') !== Object.values(this.state.targetMoveOffset).join(',');

      if (targetMoveOffsetChanged) {
        var timestamp = performance.now();
        var length = 1500;
        var progress = Math.max(timestamp - this.state.moveAnimationStart, 0);
        var percentage = this.easeOutQuad(progress / length);
        this.state.moveOffset = [this.state.moveOffset[0] + (this.state.targetMoveOffset[0] - this.state.moveOffset[0]) * percentage, this.state.moveOffset[1] + (this.state.targetMoveOffset[1] - this.state.moveOffset[1]) * percentage];
        var targetHasBeenReached = Object.values(this.state.moveOffset).join(',') === Object.values(this.state.targetMoveOffset).join(',');

        if (targetHasBeenReached) {
          var latLon = _TileConversion.default.pixelToLatLon(this.state.moveOffset, this.options.center, this.options.zoom, this.options.canvasDimensions, this.options.tileSize);

          this.state.moveOffset = [0, 0];
          this.state.targetMoveOffset = [0, 0];
          this.options.center = latLon;
        }
      }
    }
  }, {
    key: "updateZoom",
    value: function updateZoom() {
      if (this.options.zoom !== this.state.targetZoom) {
        var timestamp = performance.now();
        var length = 10000;
        var progress = Math.max(timestamp - this.state.zoomAnimationStart, 0);
        var percentage = this.easeOutQuad(progress / length);
        var newZoom = this.options.zoom + (this.state.targetZoom - this.options.zoom) * percentage;
        this.options.zoom = this.state.targetZoom > this.options.zoom ? Math.ceil(newZoom) : Math.floor(newZoom);
        var scale = this.options.zoom - newZoom;

        if (this.state.targetZoom > this.options.zoom) {
          scale += 1;
        }

        return scale;
      }

      return 1;
    }
  }, {
    key: "calculateGrid",
    value: function calculateGrid() {
      var horizontalTiles = this.getTilesCount(this.state.canvasDimensions[0]);
      var verticalTiles = this.getTilesCount(this.state.canvasDimensions[1]);

      var centerY = _TileConversion.default.lat2tile(this.options.center[0], this.options.zoom, false);

      var centerX = _TileConversion.default.lon2tile(this.options.center[1], this.options.zoom, false); // noinspection JSSuspiciousNameCombination


      var centerYRounded = Math.floor(centerY);
      var centerXRounded = Math.floor(centerX);
      var relativeTileOffset = [Math.abs(centerX - centerXRounded), Math.abs(centerY - centerYRounded)];
      this.state.centerOffset = [this.options.tileSize / 2 - relativeTileOffset[0] * this.options.tileSize, this.options.tileSize / 2 - relativeTileOffset[1] * this.options.tileSize];
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
            grid[x][y] = new _Tile.default(tileX, tileY, this.options.zoom);
          }
        }
      }

      this.grid = grid;
    }
  }, {
    key: "draw",
    value: function draw() {
      this.context.setTransform(1, 0, 0, 1, 0, 0);
      this.updateMoveOffset();
      var scale = this.updateZoom();

      if (scale !== 1) {
        this.context.scale(scale, scale);
      }

      this.calculateGrid();
      this.context.fillStyle = '#eee';
      this.context.fillRect(0, 0, this.state.canvasDimensions[0], this.state.canvasDimensions[1]);
      var horizontalTiles = this.getTilesCount(this.state.canvasDimensions[0]);
      var verticalTiles = this.getTilesCount(this.state.canvasDimensions[1]);
      var horizontalOverflow = horizontalTiles * this.options.tileSize - this.state.canvasDimensions[0];
      var verticalOverflow = verticalTiles * this.options.tileSize - this.state.canvasDimensions[1];
      this.context.fillStyle = '#C5DFF6';
      this.context.strokeStyle = 'green';

      for (var y = 0; y < verticalTiles; y++) {
        for (var x = 0; x < horizontalTiles; x++) {
          var tile = this.grid[x][y];

          if (tile) {
            if (!(tile.id in this.state.tiles)) {
              this.state.tiles[tile.id] = new Image();
              this.state.tiles[tile.id].src = this.options.source(Math.floor(tile.x), Math.floor(tile.y), tile.zoom);
            }

            var tileX = this.state.moveOffset[0] + this.state.centerOffset[0] + (x * this.options.tileSize - horizontalOverflow / 2);
            var tileY = this.state.moveOffset[1] + this.state.centerOffset[1] + (y * this.options.tileSize - verticalOverflow / 2);

            try {
              this.context.drawImage(this.state.tiles[tile.id], tileX, tileY, this.options.tileSize, this.options.tileSize);
            } catch (err) {
              this.context.fillRect(tileX, tileY, this.options.tileSize, this.options.tileSize);
            }

            if (this.options.debug) {
              this.context.strokeRect(tileX, tileY, this.options.tileSize, this.options.tileSize);
            }
          }
        }
      }
      /*
      this.context.fillStyle = 'rgba(200, 0, 0, 0.7)';
      this.context.beginPath();
      this.context.arc(this.state.canvasDimensions[0] / 2, this.state.canvasDimensions[1] / 2, 10, 0, 2 * Math.PI);
      this.context.fill();
      */


      window.requestAnimationFrame(this.draw);
    }
  }]);

  return Lightning;
}();

exports.default = Lightning;
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
    value: function pixelToLatLon(pixel, center, zoom, mapDimensions, tileSize) {
      var pointDiff = [pixel[0] / tileSize, pixel[1] / tileSize];
      var tileX = TileConversion.lon2tile(center[1], zoom, false) - pointDiff[0];
      var tileY = TileConversion.lat2tile(center[0], zoom, false) - pointDiff[1];
      return [TileConversion.tile2lat(tileY, zoom), TileConversion.tile2lon(tileX, zoom)];
    }
  }]);

  return TileConversion;
}();

exports.default = TileConversion;
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
exports.default = void 0;
var defaultOptions = {
  source: function source(x, y, z) {
    return "https://maps.geocod.io/tiles/base/".concat(z, "/").concat(x, "/").concat(y, ".png");
  },
  zoom: 12,
  center: [38.841779, -77.088312],
  tileSize: 256,
  panAccelerationMultiplier: 3
};
var _default = defaultOptions;
exports.default = _default;
module.exports = exports["default"];

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

var _Lightning = _interopRequireDefault(__webpack_require__(/*! ./Lightning */ "./src/Lightning.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function init(canvas) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return new _Lightning.default(canvas, options);
}

var _default = init;
exports.default = _default;
module.exports = exports["default"];

/***/ })

/******/ });
});
//# sourceMappingURL=LightningMap.js.map