(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("lightningmaps", [], factory);
	else if(typeof exports === 'object')
		exports["lightningmaps"] = factory();
	else
		root["lightningmaps"] = factory();
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DEBOUNCE_INTERVAL_MS = 500;

var Lightning =
/*#__PURE__*/
function () {
  function Lightning(canvas) {
    _classCallCheck(this, Lightning);

    if (!canvas || !canvas.getContext) {
      throw new Error('Could not get canvas context');
    }

    this.draw = this.draw.bind(this);
    this.canvas = canvas;
    this.context = this.canvas.getContext('2d');
    this.canvasDimensions = [canvas.width, canvas.height];
    this.tiles = {};
    this.tileSize = 256;
    this.deltaPosition = [0, 0];
    this.debug = true;
    this.dragStartPosition = null;
    this.attachEvents();
    window.requestAnimationFrame(this.draw);
  }

  _createClass(Lightning, [{
    key: "setZoom",
    value: function setZoom(zoom) {
      if (zoom >= 0 && zoom <= 18) {
        this.zoom = zoom;
      }

      return this;
    }
  }, {
    key: "setCenter",
    value: function setCenter(coord) {
      this.center = coord;
      return this;
    }
  }, {
    key: "setSource",
    value: function setSource(source) {
      this.source = source;
      return this;
    }
  }, {
    key: "isReadyForEvent",
    value: function isReadyForEvent() {
      if (!this.lastEventActionTime) {
        return true;
      }

      var now = new Date().getTime();
      return now - this.lastEventActionTime > DEBOUNCE_INTERVAL_MS;
    }
  }, {
    key: "attachEvents",
    value: function attachEvents() {
      var _this = this;

      this.canvas.addEventListener('wheel', function (event) {
        if (_this.isReadyForEvent()) {
          if (event.deltaY > 5) {
            _this.lastEventActionTime = new Date().getTime();

            _this.setZoom(_this.zoom - 2);
          } else if (event.deltaY < -5) {
            _this.lastEventActionTime = new Date().getTime();

            _this.setZoom(_this.zoom + 2);
          }
        }

        return false;
      });
      this.canvas.addEventListener('mousedown', function (event) {
        _this.dragStartPosition = [event.clientX, event.clientY];
      });
      this.canvas.addEventListener('mouseup', function (event) {
        _this.dragStartPosition = null;
      });
      this.canvas.addEventListener('mousemove', function (event) {
        if (_this.dragStartPosition && _this.isReadyForEvent()) {
          _this.deltaPosition = [_this.deltaPosition[0] + _this.dragStartPosition[0] - event.clientX, _this.deltaPosition[1] + _this.dragStartPosition[1] - event.clientY];
        }

        return false;
      });
    }
  }, {
    key: "getHorizontalTiles",
    value: function getHorizontalTiles() {
      var horizontalTiles = Math.ceil(this.canvasDimensions[0] / this.tileSize);

      if (horizontalTiles % 2 === 0) {
        horizontalTiles++;
      }

      return horizontalTiles;
    }
  }, {
    key: "getVerticalTiles",
    value: function getVerticalTiles() {
      var verticalTiles = Math.ceil(this.canvasDimensions[1] / this.tileSize);

      if (verticalTiles % 2 === 0) {
        verticalTiles++;
      }

      return verticalTiles;
    }
  }, {
    key: "latLngToPixel",
    value: function latLngToPixel(latLng, center, zoom) {
      var tileCenterX = _TileConversion.default.lon2tile(this.center[1], zoom);

      var tileCenterY = _TileConversion.default.lat2tile(this.center[0], zoom);

      var tileX = _TileConversion.default.lon2tile(latLng[1], zoom);

      var tileY = _TileConversion.default.lat2tile(latLng[0], zoom);

      return [(tileX - tileCenterX) * this.tileSize + this.canvasDimensions[0] / 2 + this.deltaPosition[0], (tileY - tileCenterY) * this.tileSize + this.canvasDimensions[1] / 2 + this.deltaPosition[1]];
    }
  }, {
    key: "calculateGrid",
    value: function calculateGrid() {
      var horizontalTiles = this.getHorizontalTiles();
      var verticalTiles = this.getVerticalTiles();

      var centerY = _TileConversion.default.lat2tile(this.center[0], this.zoom);

      var centerX = _TileConversion.default.lon2tile(this.center[1], this.zoom);

      var centerBounds = _TileConversion.default.tile2boundingBox(centerX, centerY, this.zoom);

      var relativeTileOffset = [(centerBounds.ne[0] - this.center[0]) / (centerBounds.ne[0] - centerBounds.sw[0]), (centerBounds.sw[1] - this.center[1]) / (centerBounds.sw[1] - centerBounds.ne[1])];
      /*
      const relativeTileOffset = [
        (this.center[0] - centerBounds.sw[0]) / (centerBounds.ne[0] - centerBounds.sw[0]),
        (this.center[1] - centerBounds.sw[1]) / (centerBounds.ne[1] - centerBounds.sw[1])
      ];
      */

      console.log(relativeTileOffset);
      this.deltaPosition = [this.tileSize / 2 - relativeTileOffset[0] * this.tileSize, this.tileSize / 2 - relativeTileOffset[1] * this.tileSize]; //console.log(this.deltaPosition);
      //const verticalDiff = centerBounds.north - centerBounds.south;
      //const horizontalDiff = centerBounds.east - centerBounds.west;
      //console.log(centerBounds.east - this.center[0], centerBounds.north - this.center[1]);

      var startX = centerX - Math.floor(horizontalTiles / 2);
      var startY = centerY - Math.floor(verticalTiles / 2);
      var grid = [];

      for (var y = 0; y < verticalTiles; y++) {
        for (var x = 0; x < horizontalTiles; x++) {
          if (!grid[x]) {
            grid[x] = [];
          }

          grid[x][y] = new _Tile.default(startX + x, startY + y, this.zoom);
        }
      }

      this.grid = grid;
    }
  }, {
    key: "draw",
    value: function draw() {
      this.calculateGrid();
      this.context.globalCompositeOperation = 'destination-over';
      this.context.clearRect(0, 0, this.canvasDimensions[0], this.canvasDimensions[1]);
      this.context.strokeStyle = 'green';
      this.context.fillStyle = 'rgb(200, 0, 0)';
      this.context.fillRect(this.canvasDimensions[0] / 2 - 10 / 2, this.canvasDimensions[1] / 2 - 10 / 2, 10, 10);
      var horizontalTiles = this.getHorizontalTiles();
      var verticalTiles = this.getVerticalTiles();
      var horizontalOverflow = horizontalTiles * this.tileSize - this.canvasDimensions[0];
      var verticalOverflow = verticalTiles * this.tileSize - this.canvasDimensions[1];

      for (var y = 0; y < verticalTiles; y++) {
        for (var x = 0; x < horizontalTiles; x++) {
          var tile = this.grid[x][y];

          if (!(tile.id in this.tiles)) {
            this.tiles[tile.id] = new Image();
            this.tiles[tile.id].src = this.source(tile.x, tile.y, tile.zoom);
          }

          this.context.drawImage(this.tiles[tile.id], this.deltaPosition[0] + (x * this.tileSize - horizontalOverflow / 2), this.deltaPosition[1] + (y * this.tileSize - verticalOverflow / 2), this.tileSize, this.tileSize);

          if (this.debug) {
            this.context.strokeRect(this.deltaPosition[0] + (x * this.tileSize - horizontalOverflow / 2), this.deltaPosition[1] + (y * this.tileSize - verticalOverflow / 2), this.tileSize, this.tileSize);
          }
        }
      }

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
      return Math.floor((lon + 180) / 360 * Math.pow(2, zoom));
    }
  }, {
    key: "lat2tile",
    value: function lat2tile(lat, zoom) {
      return Math.floor((1 - Math.log(Math.tan(lat * Math.PI / 180) + 1 / Math.cos(lat * Math.PI / 180)) / Math.PI) / 2 * Math.pow(2, zoom));
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
  }]);

  return TileConversion;
}();

exports.default = TileConversion;
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
Object.defineProperty(exports, "Lightning", {
  enumerable: true,
  get: function get() {
    return _Lightning.default;
  }
});

var _Lightning = _interopRequireDefault(__webpack_require__(/*! ./Lightning */ "./src/Lightning.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ })

/******/ });
});
//# sourceMappingURL=lightningmaps.js.map