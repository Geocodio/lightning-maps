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

/***/ "./node_modules/d3-array/src/array.js":
/*!********************************************!*\
  !*** ./node_modules/d3-array/src/array.js ***!
  \********************************************/
/*! exports provided: slice, map */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slice", function() { return slice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
var array = Array.prototype;

var slice = array.slice;
var map = array.map;


/***/ }),

/***/ "./node_modules/d3-array/src/ascending.js":
/*!************************************************!*\
  !*** ./node_modules/d3-array/src/ascending.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
});


/***/ }),

/***/ "./node_modules/d3-array/src/bisect.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-array/src/bisect.js ***!
  \*********************************************/
/*! exports provided: bisectRight, bisectLeft, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bisectRight", function() { return bisectRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bisectLeft", function() { return bisectLeft; });
/* harmony import */ var _ascending__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ascending */ "./node_modules/d3-array/src/ascending.js");
/* harmony import */ var _bisector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bisector */ "./node_modules/d3-array/src/bisector.js");



var ascendingBisect = Object(_bisector__WEBPACK_IMPORTED_MODULE_1__["default"])(_ascending__WEBPACK_IMPORTED_MODULE_0__["default"]);
var bisectRight = ascendingBisect.right;
var bisectLeft = ascendingBisect.left;
/* harmony default export */ __webpack_exports__["default"] = (bisectRight);


/***/ }),

/***/ "./node_modules/d3-array/src/bisector.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-array/src/bisector.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ascending__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ascending */ "./node_modules/d3-array/src/ascending.js");


/* harmony default export */ __webpack_exports__["default"] = (function(compare) {
  if (compare.length === 1) compare = ascendingComparator(compare);
  return {
    left: function(a, x, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;
      while (lo < hi) {
        var mid = lo + hi >>> 1;
        if (compare(a[mid], x) < 0) lo = mid + 1;
        else hi = mid;
      }
      return lo;
    },
    right: function(a, x, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;
      while (lo < hi) {
        var mid = lo + hi >>> 1;
        if (compare(a[mid], x) > 0) hi = mid;
        else lo = mid + 1;
      }
      return lo;
    }
  };
});

function ascendingComparator(f) {
  return function(d, x) {
    return Object(_ascending__WEBPACK_IMPORTED_MODULE_0__["default"])(f(d), x);
  };
}


/***/ }),

/***/ "./node_modules/d3-array/src/constant.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-array/src/constant.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),

/***/ "./node_modules/d3-array/src/cross.js":
/*!********************************************!*\
  !*** ./node_modules/d3-array/src/cross.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pairs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pairs */ "./node_modules/d3-array/src/pairs.js");


/* harmony default export */ __webpack_exports__["default"] = (function(values0, values1, reduce) {
  var n0 = values0.length,
      n1 = values1.length,
      values = new Array(n0 * n1),
      i0,
      i1,
      i,
      value0;

  if (reduce == null) reduce = _pairs__WEBPACK_IMPORTED_MODULE_0__["pair"];

  for (i0 = i = 0; i0 < n0; ++i0) {
    for (value0 = values0[i0], i1 = 0; i1 < n1; ++i1, ++i) {
      values[i] = reduce(value0, values1[i1]);
    }
  }

  return values;
});


/***/ }),

/***/ "./node_modules/d3-array/src/descending.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-array/src/descending.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
});


/***/ }),

/***/ "./node_modules/d3-array/src/deviation.js":
/*!************************************************!*\
  !*** ./node_modules/d3-array/src/deviation.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _variance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variance */ "./node_modules/d3-array/src/variance.js");


/* harmony default export */ __webpack_exports__["default"] = (function(array, f) {
  var v = Object(_variance__WEBPACK_IMPORTED_MODULE_0__["default"])(array, f);
  return v ? Math.sqrt(v) : v;
});


/***/ }),

/***/ "./node_modules/d3-array/src/extent.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-array/src/extent.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      min,
      max;

  if (valueof == null) {
    while (++i < n) { // Find the first comparable value.
      if ((value = values[i]) != null && value >= value) {
        min = max = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = values[i]) != null) {
            if (min > value) min = value;
            if (max < value) max = value;
          }
        }
      }
    }
  }

  else {
    while (++i < n) { // Find the first comparable value.
      if ((value = valueof(values[i], i, values)) != null && value >= value) {
        min = max = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = valueof(values[i], i, values)) != null) {
            if (min > value) min = value;
            if (max < value) max = value;
          }
        }
      }
    }
  }

  return [min, max];
});


/***/ }),

/***/ "./node_modules/d3-array/src/histogram.js":
/*!************************************************!*\
  !*** ./node_modules/d3-array/src/histogram.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array */ "./node_modules/d3-array/src/array.js");
/* harmony import */ var _bisect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bisect */ "./node_modules/d3-array/src/bisect.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constant */ "./node_modules/d3-array/src/constant.js");
/* harmony import */ var _extent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./extent */ "./node_modules/d3-array/src/extent.js");
/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./identity */ "./node_modules/d3-array/src/identity.js");
/* harmony import */ var _range__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./range */ "./node_modules/d3-array/src/range.js");
/* harmony import */ var _ticks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ticks */ "./node_modules/d3-array/src/ticks.js");
/* harmony import */ var _threshold_sturges__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./threshold/sturges */ "./node_modules/d3-array/src/threshold/sturges.js");









/* harmony default export */ __webpack_exports__["default"] = (function() {
  var value = _identity__WEBPACK_IMPORTED_MODULE_4__["default"],
      domain = _extent__WEBPACK_IMPORTED_MODULE_3__["default"],
      threshold = _threshold_sturges__WEBPACK_IMPORTED_MODULE_7__["default"];

  function histogram(data) {
    var i,
        n = data.length,
        x,
        values = new Array(n);

    for (i = 0; i < n; ++i) {
      values[i] = value(data[i], i, data);
    }

    var xz = domain(values),
        x0 = xz[0],
        x1 = xz[1],
        tz = threshold(values, x0, x1);

    // Convert number of thresholds into uniform thresholds.
    if (!Array.isArray(tz)) {
      tz = Object(_ticks__WEBPACK_IMPORTED_MODULE_6__["tickStep"])(x0, x1, tz);
      tz = Object(_range__WEBPACK_IMPORTED_MODULE_5__["default"])(Math.ceil(x0 / tz) * tz, x1, tz); // exclusive
    }

    // Remove any thresholds outside the domain.
    var m = tz.length;
    while (tz[0] <= x0) tz.shift(), --m;
    while (tz[m - 1] > x1) tz.pop(), --m;

    var bins = new Array(m + 1),
        bin;

    // Initialize bins.
    for (i = 0; i <= m; ++i) {
      bin = bins[i] = [];
      bin.x0 = i > 0 ? tz[i - 1] : x0;
      bin.x1 = i < m ? tz[i] : x1;
    }

    // Assign data to bins by value, ignoring any outside the domain.
    for (i = 0; i < n; ++i) {
      x = values[i];
      if (x0 <= x && x <= x1) {
        bins[Object(_bisect__WEBPACK_IMPORTED_MODULE_1__["default"])(tz, x, 0, m)].push(data[i]);
      }
    }

    return bins;
  }

  histogram.value = function(_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_2__["default"])(_), histogram) : value;
  };

  histogram.domain = function(_) {
    return arguments.length ? (domain = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_2__["default"])([_[0], _[1]]), histogram) : domain;
  };

  histogram.thresholds = function(_) {
    return arguments.length ? (threshold = typeof _ === "function" ? _ : Array.isArray(_) ? Object(_constant__WEBPACK_IMPORTED_MODULE_2__["default"])(_array__WEBPACK_IMPORTED_MODULE_0__["slice"].call(_)) : Object(_constant__WEBPACK_IMPORTED_MODULE_2__["default"])(_), histogram) : threshold;
  };

  return histogram;
});


/***/ }),

/***/ "./node_modules/d3-array/src/identity.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-array/src/identity.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return x;
});


/***/ }),

/***/ "./node_modules/d3-array/src/index.js":
/*!********************************************!*\
  !*** ./node_modules/d3-array/src/index.js ***!
  \********************************************/
/*! exports provided: bisect, bisectRight, bisectLeft, ascending, bisector, cross, descending, deviation, extent, histogram, thresholdFreedmanDiaconis, thresholdScott, thresholdSturges, max, mean, median, merge, min, pairs, permute, quantile, range, scan, shuffle, sum, ticks, tickIncrement, tickStep, transpose, variance, zip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bisect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bisect */ "./node_modules/d3-array/src/bisect.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bisect", function() { return _bisect__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bisectRight", function() { return _bisect__WEBPACK_IMPORTED_MODULE_0__["bisectRight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bisectLeft", function() { return _bisect__WEBPACK_IMPORTED_MODULE_0__["bisectLeft"]; });

/* harmony import */ var _ascending__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ascending */ "./node_modules/d3-array/src/ascending.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ascending", function() { return _ascending__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _bisector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bisector */ "./node_modules/d3-array/src/bisector.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bisector", function() { return _bisector__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _cross__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cross */ "./node_modules/d3-array/src/cross.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cross", function() { return _cross__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _descending__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./descending */ "./node_modules/d3-array/src/descending.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "descending", function() { return _descending__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _deviation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./deviation */ "./node_modules/d3-array/src/deviation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deviation", function() { return _deviation__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _extent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./extent */ "./node_modules/d3-array/src/extent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extent", function() { return _extent__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _histogram__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./histogram */ "./node_modules/d3-array/src/histogram.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "histogram", function() { return _histogram__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _threshold_freedmanDiaconis__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./threshold/freedmanDiaconis */ "./node_modules/d3-array/src/threshold/freedmanDiaconis.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "thresholdFreedmanDiaconis", function() { return _threshold_freedmanDiaconis__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _threshold_scott__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./threshold/scott */ "./node_modules/d3-array/src/threshold/scott.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "thresholdScott", function() { return _threshold_scott__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _threshold_sturges__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./threshold/sturges */ "./node_modules/d3-array/src/threshold/sturges.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "thresholdSturges", function() { return _threshold_sturges__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _max__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./max */ "./node_modules/d3-array/src/max.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "max", function() { return _max__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _mean__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./mean */ "./node_modules/d3-array/src/mean.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mean", function() { return _mean__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _median__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./median */ "./node_modules/d3-array/src/median.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "median", function() { return _median__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _merge__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./merge */ "./node_modules/d3-array/src/merge.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return _merge__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _min__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./min */ "./node_modules/d3-array/src/min.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "min", function() { return _min__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _pairs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pairs */ "./node_modules/d3-array/src/pairs.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pairs", function() { return _pairs__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _permute__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./permute */ "./node_modules/d3-array/src/permute.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "permute", function() { return _permute__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _quantile__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./quantile */ "./node_modules/d3-array/src/quantile.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "quantile", function() { return _quantile__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _range__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./range */ "./node_modules/d3-array/src/range.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "range", function() { return _range__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony import */ var _scan__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./scan */ "./node_modules/d3-array/src/scan.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scan", function() { return _scan__WEBPACK_IMPORTED_MODULE_20__["default"]; });

/* harmony import */ var _shuffle__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./shuffle */ "./node_modules/d3-array/src/shuffle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shuffle", function() { return _shuffle__WEBPACK_IMPORTED_MODULE_21__["default"]; });

/* harmony import */ var _sum__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./sum */ "./node_modules/d3-array/src/sum.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sum", function() { return _sum__WEBPACK_IMPORTED_MODULE_22__["default"]; });

/* harmony import */ var _ticks__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./ticks */ "./node_modules/d3-array/src/ticks.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ticks", function() { return _ticks__WEBPACK_IMPORTED_MODULE_23__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tickIncrement", function() { return _ticks__WEBPACK_IMPORTED_MODULE_23__["tickIncrement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tickStep", function() { return _ticks__WEBPACK_IMPORTED_MODULE_23__["tickStep"]; });

/* harmony import */ var _transpose__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./transpose */ "./node_modules/d3-array/src/transpose.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transpose", function() { return _transpose__WEBPACK_IMPORTED_MODULE_24__["default"]; });

/* harmony import */ var _variance__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./variance */ "./node_modules/d3-array/src/variance.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "variance", function() { return _variance__WEBPACK_IMPORTED_MODULE_25__["default"]; });

/* harmony import */ var _zip__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./zip */ "./node_modules/d3-array/src/zip.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zip", function() { return _zip__WEBPACK_IMPORTED_MODULE_26__["default"]; });






























/***/ }),

/***/ "./node_modules/d3-array/src/max.js":
/*!******************************************!*\
  !*** ./node_modules/d3-array/src/max.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      max;

  if (valueof == null) {
    while (++i < n) { // Find the first comparable value.
      if ((value = values[i]) != null && value >= value) {
        max = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = values[i]) != null && value > max) {
            max = value;
          }
        }
      }
    }
  }

  else {
    while (++i < n) { // Find the first comparable value.
      if ((value = valueof(values[i], i, values)) != null && value >= value) {
        max = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = valueof(values[i], i, values)) != null && value > max) {
            max = value;
          }
        }
      }
    }
  }

  return max;
});


/***/ }),

/***/ "./node_modules/d3-array/src/mean.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-array/src/mean.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./number */ "./node_modules/d3-array/src/number.js");


/* harmony default export */ __webpack_exports__["default"] = (function(values, valueof) {
  var n = values.length,
      m = n,
      i = -1,
      value,
      sum = 0;

  if (valueof == null) {
    while (++i < n) {
      if (!isNaN(value = Object(_number__WEBPACK_IMPORTED_MODULE_0__["default"])(values[i]))) sum += value;
      else --m;
    }
  }

  else {
    while (++i < n) {
      if (!isNaN(value = Object(_number__WEBPACK_IMPORTED_MODULE_0__["default"])(valueof(values[i], i, values)))) sum += value;
      else --m;
    }
  }

  if (m) return sum / m;
});


/***/ }),

/***/ "./node_modules/d3-array/src/median.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-array/src/median.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ascending__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ascending */ "./node_modules/d3-array/src/ascending.js");
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./number */ "./node_modules/d3-array/src/number.js");
/* harmony import */ var _quantile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quantile */ "./node_modules/d3-array/src/quantile.js");




/* harmony default export */ __webpack_exports__["default"] = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      numbers = [];

  if (valueof == null) {
    while (++i < n) {
      if (!isNaN(value = Object(_number__WEBPACK_IMPORTED_MODULE_1__["default"])(values[i]))) {
        numbers.push(value);
      }
    }
  }

  else {
    while (++i < n) {
      if (!isNaN(value = Object(_number__WEBPACK_IMPORTED_MODULE_1__["default"])(valueof(values[i], i, values)))) {
        numbers.push(value);
      }
    }
  }

  return Object(_quantile__WEBPACK_IMPORTED_MODULE_2__["default"])(numbers.sort(_ascending__WEBPACK_IMPORTED_MODULE_0__["default"]), 0.5);
});


/***/ }),

/***/ "./node_modules/d3-array/src/merge.js":
/*!********************************************!*\
  !*** ./node_modules/d3-array/src/merge.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(arrays) {
  var n = arrays.length,
      m,
      i = -1,
      j = 0,
      merged,
      array;

  while (++i < n) j += arrays[i].length;
  merged = new Array(j);

  while (--n >= 0) {
    array = arrays[n];
    m = array.length;
    while (--m >= 0) {
      merged[--j] = array[m];
    }
  }

  return merged;
});


/***/ }),

/***/ "./node_modules/d3-array/src/min.js":
/*!******************************************!*\
  !*** ./node_modules/d3-array/src/min.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      min;

  if (valueof == null) {
    while (++i < n) { // Find the first comparable value.
      if ((value = values[i]) != null && value >= value) {
        min = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = values[i]) != null && min > value) {
            min = value;
          }
        }
      }
    }
  }

  else {
    while (++i < n) { // Find the first comparable value.
      if ((value = valueof(values[i], i, values)) != null && value >= value) {
        min = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = valueof(values[i], i, values)) != null && min > value) {
            min = value;
          }
        }
      }
    }
  }

  return min;
});


/***/ }),

/***/ "./node_modules/d3-array/src/number.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-array/src/number.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return x === null ? NaN : +x;
});


/***/ }),

/***/ "./node_modules/d3-array/src/pairs.js":
/*!********************************************!*\
  !*** ./node_modules/d3-array/src/pairs.js ***!
  \********************************************/
/*! exports provided: default, pair */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pair", function() { return pair; });
/* harmony default export */ __webpack_exports__["default"] = (function(array, f) {
  if (f == null) f = pair;
  var i = 0, n = array.length - 1, p = array[0], pairs = new Array(n < 0 ? 0 : n);
  while (i < n) pairs[i] = f(p, p = array[++i]);
  return pairs;
});

function pair(a, b) {
  return [a, b];
}


/***/ }),

/***/ "./node_modules/d3-array/src/permute.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-array/src/permute.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(array, indexes) {
  var i = indexes.length, permutes = new Array(i);
  while (i--) permutes[i] = array[indexes[i]];
  return permutes;
});


/***/ }),

/***/ "./node_modules/d3-array/src/quantile.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-array/src/quantile.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./number */ "./node_modules/d3-array/src/number.js");


/* harmony default export */ __webpack_exports__["default"] = (function(values, p, valueof) {
  if (valueof == null) valueof = _number__WEBPACK_IMPORTED_MODULE_0__["default"];
  if (!(n = values.length)) return;
  if ((p = +p) <= 0 || n < 2) return +valueof(values[0], 0, values);
  if (p >= 1) return +valueof(values[n - 1], n - 1, values);
  var n,
      i = (n - 1) * p,
      i0 = Math.floor(i),
      value0 = +valueof(values[i0], i0, values),
      value1 = +valueof(values[i0 + 1], i0 + 1, values);
  return value0 + (value1 - value0) * (i - i0);
});


/***/ }),

/***/ "./node_modules/d3-array/src/range.js":
/*!********************************************!*\
  !*** ./node_modules/d3-array/src/range.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(start, stop, step) {
  start = +start, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;

  var i = -1,
      n = Math.max(0, Math.ceil((stop - start) / step)) | 0,
      range = new Array(n);

  while (++i < n) {
    range[i] = start + i * step;
  }

  return range;
});


/***/ }),

/***/ "./node_modules/d3-array/src/scan.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-array/src/scan.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ascending__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ascending */ "./node_modules/d3-array/src/ascending.js");


/* harmony default export */ __webpack_exports__["default"] = (function(values, compare) {
  if (!(n = values.length)) return;
  var n,
      i = 0,
      j = 0,
      xi,
      xj = values[j];

  if (compare == null) compare = _ascending__WEBPACK_IMPORTED_MODULE_0__["default"];

  while (++i < n) {
    if (compare(xi = values[i], xj) < 0 || compare(xj, xj) !== 0) {
      xj = xi, j = i;
    }
  }

  if (compare(xj, xj) === 0) return j;
});


/***/ }),

/***/ "./node_modules/d3-array/src/shuffle.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-array/src/shuffle.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(array, i0, i1) {
  var m = (i1 == null ? array.length : i1) - (i0 = i0 == null ? 0 : +i0),
      t,
      i;

  while (m) {
    i = Math.random() * m-- | 0;
    t = array[m + i0];
    array[m + i0] = array[i + i0];
    array[i + i0] = t;
  }

  return array;
});


/***/ }),

/***/ "./node_modules/d3-array/src/sum.js":
/*!******************************************!*\
  !*** ./node_modules/d3-array/src/sum.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      sum = 0;

  if (valueof == null) {
    while (++i < n) {
      if (value = +values[i]) sum += value; // Note: zero and null are equivalent.
    }
  }

  else {
    while (++i < n) {
      if (value = +valueof(values[i], i, values)) sum += value;
    }
  }

  return sum;
});


/***/ }),

/***/ "./node_modules/d3-array/src/threshold/freedmanDiaconis.js":
/*!*****************************************************************!*\
  !*** ./node_modules/d3-array/src/threshold/freedmanDiaconis.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../array */ "./node_modules/d3-array/src/array.js");
/* harmony import */ var _ascending__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ascending */ "./node_modules/d3-array/src/ascending.js");
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../number */ "./node_modules/d3-array/src/number.js");
/* harmony import */ var _quantile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../quantile */ "./node_modules/d3-array/src/quantile.js");





/* harmony default export */ __webpack_exports__["default"] = (function(values, min, max) {
  values = _array__WEBPACK_IMPORTED_MODULE_0__["map"].call(values, _number__WEBPACK_IMPORTED_MODULE_2__["default"]).sort(_ascending__WEBPACK_IMPORTED_MODULE_1__["default"]);
  return Math.ceil((max - min) / (2 * (Object(_quantile__WEBPACK_IMPORTED_MODULE_3__["default"])(values, 0.75) - Object(_quantile__WEBPACK_IMPORTED_MODULE_3__["default"])(values, 0.25)) * Math.pow(values.length, -1 / 3)));
});


/***/ }),

/***/ "./node_modules/d3-array/src/threshold/scott.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-array/src/threshold/scott.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _deviation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../deviation */ "./node_modules/d3-array/src/deviation.js");


/* harmony default export */ __webpack_exports__["default"] = (function(values, min, max) {
  return Math.ceil((max - min) / (3.5 * Object(_deviation__WEBPACK_IMPORTED_MODULE_0__["default"])(values) * Math.pow(values.length, -1 / 3)));
});


/***/ }),

/***/ "./node_modules/d3-array/src/threshold/sturges.js":
/*!********************************************************!*\
  !*** ./node_modules/d3-array/src/threshold/sturges.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(values) {
  return Math.ceil(Math.log(values.length) / Math.LN2) + 1;
});


/***/ }),

/***/ "./node_modules/d3-array/src/ticks.js":
/*!********************************************!*\
  !*** ./node_modules/d3-array/src/ticks.js ***!
  \********************************************/
/*! exports provided: default, tickIncrement, tickStep */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tickIncrement", function() { return tickIncrement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tickStep", function() { return tickStep; });
var e10 = Math.sqrt(50),
    e5 = Math.sqrt(10),
    e2 = Math.sqrt(2);

/* harmony default export */ __webpack_exports__["default"] = (function(start, stop, count) {
  var reverse,
      i = -1,
      n,
      ticks,
      step;

  stop = +stop, start = +start, count = +count;
  if (start === stop && count > 0) return [start];
  if (reverse = stop < start) n = start, start = stop, stop = n;
  if ((step = tickIncrement(start, stop, count)) === 0 || !isFinite(step)) return [];

  if (step > 0) {
    start = Math.ceil(start / step);
    stop = Math.floor(stop / step);
    ticks = new Array(n = Math.ceil(stop - start + 1));
    while (++i < n) ticks[i] = (start + i) * step;
  } else {
    start = Math.floor(start * step);
    stop = Math.ceil(stop * step);
    ticks = new Array(n = Math.ceil(start - stop + 1));
    while (++i < n) ticks[i] = (start - i) / step;
  }

  if (reverse) ticks.reverse();

  return ticks;
});

function tickIncrement(start, stop, count) {
  var step = (stop - start) / Math.max(0, count),
      power = Math.floor(Math.log(step) / Math.LN10),
      error = step / Math.pow(10, power);
  return power >= 0
      ? (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1) * Math.pow(10, power)
      : -Math.pow(10, -power) / (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1);
}

function tickStep(start, stop, count) {
  var step0 = Math.abs(stop - start) / Math.max(0, count),
      step1 = Math.pow(10, Math.floor(Math.log(step0) / Math.LN10)),
      error = step0 / step1;
  if (error >= e10) step1 *= 10;
  else if (error >= e5) step1 *= 5;
  else if (error >= e2) step1 *= 2;
  return stop < start ? -step1 : step1;
}


/***/ }),

/***/ "./node_modules/d3-array/src/transpose.js":
/*!************************************************!*\
  !*** ./node_modules/d3-array/src/transpose.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./min */ "./node_modules/d3-array/src/min.js");


/* harmony default export */ __webpack_exports__["default"] = (function(matrix) {
  if (!(n = matrix.length)) return [];
  for (var i = -1, m = Object(_min__WEBPACK_IMPORTED_MODULE_0__["default"])(matrix, length), transpose = new Array(m); ++i < m;) {
    for (var j = -1, n, row = transpose[i] = new Array(n); ++j < n;) {
      row[j] = matrix[j][i];
    }
  }
  return transpose;
});

function length(d) {
  return d.length;
}


/***/ }),

/***/ "./node_modules/d3-array/src/variance.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-array/src/variance.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./number */ "./node_modules/d3-array/src/number.js");


/* harmony default export */ __webpack_exports__["default"] = (function(values, valueof) {
  var n = values.length,
      m = 0,
      i = -1,
      mean = 0,
      value,
      delta,
      sum = 0;

  if (valueof == null) {
    while (++i < n) {
      if (!isNaN(value = Object(_number__WEBPACK_IMPORTED_MODULE_0__["default"])(values[i]))) {
        delta = value - mean;
        mean += delta / ++m;
        sum += delta * (value - mean);
      }
    }
  }

  else {
    while (++i < n) {
      if (!isNaN(value = Object(_number__WEBPACK_IMPORTED_MODULE_0__["default"])(valueof(values[i], i, values)))) {
        delta = value - mean;
        mean += delta / ++m;
        sum += delta * (value - mean);
      }
    }
  }

  if (m > 1) return sum / (m - 1);
});


/***/ }),

/***/ "./node_modules/d3-array/src/zip.js":
/*!******************************************!*\
  !*** ./node_modules/d3-array/src/zip.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _transpose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transpose */ "./node_modules/d3-array/src/transpose.js");


/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(_transpose__WEBPACK_IMPORTED_MODULE_0__["default"])(arguments);
});


/***/ }),

/***/ "./node_modules/d3-geo/src/adder.js":
/*!******************************************!*\
  !*** ./node_modules/d3-geo/src/adder.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Adds floating point numbers with twice the normal precision.
// Reference: J. R. Shewchuk, Adaptive Precision Floating-Point Arithmetic and
// Fast Robust Geometric Predicates, Discrete & Computational Geometry 18(3)
// 305–363 (1997).
// Code adapted from GeographicLib by Charles F. F. Karney,
// http://geographiclib.sourceforge.net/

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return new Adder;
});

function Adder() {
  this.reset();
}

Adder.prototype = {
  constructor: Adder,
  reset: function() {
    this.s = // rounded value
    this.t = 0; // exact error
  },
  add: function(y) {
    add(temp, y, this.t);
    add(this, temp.s, this.s);
    if (this.s) this.t += temp.t;
    else this.s = temp.t;
  },
  valueOf: function() {
    return this.s;
  }
};

var temp = new Adder;

function add(adder, a, b) {
  var x = adder.s = a + b,
      bv = x - a,
      av = x - bv;
  adder.t = (a - av) + (b - bv);
}


/***/ }),

/***/ "./node_modules/d3-geo/src/area.js":
/*!*****************************************!*\
  !*** ./node_modules/d3-geo/src/area.js ***!
  \*****************************************/
/*! exports provided: areaRingSum, areaStream, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "areaRingSum", function() { return areaRingSum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "areaStream", function() { return areaStream; });
/* harmony import */ var _adder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adder */ "./node_modules/d3-geo/src/adder.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math */ "./node_modules/d3-geo/src/math.js");
/* harmony import */ var _noop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./noop */ "./node_modules/d3-geo/src/noop.js");
/* harmony import */ var _stream__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stream */ "./node_modules/d3-geo/src/stream.js");





var areaRingSum = Object(_adder__WEBPACK_IMPORTED_MODULE_0__["default"])();

var areaSum = Object(_adder__WEBPACK_IMPORTED_MODULE_0__["default"])(),
    lambda00,
    phi00,
    lambda0,
    cosPhi0,
    sinPhi0;

var areaStream = {
  point: _noop__WEBPACK_IMPORTED_MODULE_2__["default"],
  lineStart: _noop__WEBPACK_IMPORTED_MODULE_2__["default"],
  lineEnd: _noop__WEBPACK_IMPORTED_MODULE_2__["default"],
  polygonStart: function() {
    areaRingSum.reset();
    areaStream.lineStart = areaRingStart;
    areaStream.lineEnd = areaRingEnd;
  },
  polygonEnd: function() {
    var areaRing = +areaRingSum;
    areaSum.add(areaRing < 0 ? _math__WEBPACK_IMPORTED_MODULE_1__["tau"] + areaRing : areaRing);
    this.lineStart = this.lineEnd = this.point = _noop__WEBPACK_IMPORTED_MODULE_2__["default"];
  },
  sphere: function() {
    areaSum.add(_math__WEBPACK_IMPORTED_MODULE_1__["tau"]);
  }
};

function areaRingStart() {
  areaStream.point = areaPointFirst;
}

function areaRingEnd() {
  areaPoint(lambda00, phi00);
}

function areaPointFirst(lambda, phi) {
  areaStream.point = areaPoint;
  lambda00 = lambda, phi00 = phi;
  lambda *= _math__WEBPACK_IMPORTED_MODULE_1__["radians"], phi *= _math__WEBPACK_IMPORTED_MODULE_1__["radians"];
  lambda0 = lambda, cosPhi0 = Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(phi = phi / 2 + _math__WEBPACK_IMPORTED_MODULE_1__["quarterPi"]), sinPhi0 = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(phi);
}

function areaPoint(lambda, phi) {
  lambda *= _math__WEBPACK_IMPORTED_MODULE_1__["radians"], phi *= _math__WEBPACK_IMPORTED_MODULE_1__["radians"];
  phi = phi / 2 + _math__WEBPACK_IMPORTED_MODULE_1__["quarterPi"]; // half the angular distance from south pole

  // Spherical excess E for a spherical triangle with vertices: south pole,
  // previous point, current point.  Uses a formula derived from Cagnoli’s
  // theorem.  See Todhunter, Spherical Trig. (1871), Sec. 103, Eq. (2).
  var dLambda = lambda - lambda0,
      sdLambda = dLambda >= 0 ? 1 : -1,
      adLambda = sdLambda * dLambda,
      cosPhi = Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(phi),
      sinPhi = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(phi),
      k = sinPhi0 * sinPhi,
      u = cosPhi0 * cosPhi + k * Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(adLambda),
      v = k * sdLambda * Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(adLambda);
  areaRingSum.add(Object(_math__WEBPACK_IMPORTED_MODULE_1__["atan2"])(v, u));

  // Advance the previous points.
  lambda0 = lambda, cosPhi0 = cosPhi, sinPhi0 = sinPhi;
}

/* harmony default export */ __webpack_exports__["default"] = (function(object) {
  areaSum.reset();
  Object(_stream__WEBPACK_IMPORTED_MODULE_3__["default"])(object, areaStream);
  return areaSum * 2;
});


/***/ }),

/***/ "./node_modules/d3-geo/src/bounds.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-geo/src/bounds.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _adder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adder */ "./node_modules/d3-geo/src/adder.js");
/* harmony import */ var _area__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./area */ "./node_modules/d3-geo/src/area.js");
/* harmony import */ var _cartesian__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cartesian */ "./node_modules/d3-geo/src/cartesian.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./math */ "./node_modules/d3-geo/src/math.js");
/* harmony import */ var _stream__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stream */ "./node_modules/d3-geo/src/stream.js");






var lambda0, phi0, lambda1, phi1, // bounds
    lambda2, // previous lambda-coordinate
    lambda00, phi00, // first point
    p0, // previous 3D point
    deltaSum = Object(_adder__WEBPACK_IMPORTED_MODULE_0__["default"])(),
    ranges,
    range;

var boundsStream = {
  point: boundsPoint,
  lineStart: boundsLineStart,
  lineEnd: boundsLineEnd,
  polygonStart: function() {
    boundsStream.point = boundsRingPoint;
    boundsStream.lineStart = boundsRingStart;
    boundsStream.lineEnd = boundsRingEnd;
    deltaSum.reset();
    _area__WEBPACK_IMPORTED_MODULE_1__["areaStream"].polygonStart();
  },
  polygonEnd: function() {
    _area__WEBPACK_IMPORTED_MODULE_1__["areaStream"].polygonEnd();
    boundsStream.point = boundsPoint;
    boundsStream.lineStart = boundsLineStart;
    boundsStream.lineEnd = boundsLineEnd;
    if (_area__WEBPACK_IMPORTED_MODULE_1__["areaRingSum"] < 0) lambda0 = -(lambda1 = 180), phi0 = -(phi1 = 90);
    else if (deltaSum > _math__WEBPACK_IMPORTED_MODULE_3__["epsilon"]) phi1 = 90;
    else if (deltaSum < -_math__WEBPACK_IMPORTED_MODULE_3__["epsilon"]) phi0 = -90;
    range[0] = lambda0, range[1] = lambda1;
  }
};

function boundsPoint(lambda, phi) {
  ranges.push(range = [lambda0 = lambda, lambda1 = lambda]);
  if (phi < phi0) phi0 = phi;
  if (phi > phi1) phi1 = phi;
}

function linePoint(lambda, phi) {
  var p = Object(_cartesian__WEBPACK_IMPORTED_MODULE_2__["cartesian"])([lambda * _math__WEBPACK_IMPORTED_MODULE_3__["radians"], phi * _math__WEBPACK_IMPORTED_MODULE_3__["radians"]]);
  if (p0) {
    var normal = Object(_cartesian__WEBPACK_IMPORTED_MODULE_2__["cartesianCross"])(p0, p),
        equatorial = [normal[1], -normal[0], 0],
        inflection = Object(_cartesian__WEBPACK_IMPORTED_MODULE_2__["cartesianCross"])(equatorial, normal);
    Object(_cartesian__WEBPACK_IMPORTED_MODULE_2__["cartesianNormalizeInPlace"])(inflection);
    inflection = Object(_cartesian__WEBPACK_IMPORTED_MODULE_2__["spherical"])(inflection);
    var delta = lambda - lambda2,
        sign = delta > 0 ? 1 : -1,
        lambdai = inflection[0] * _math__WEBPACK_IMPORTED_MODULE_3__["degrees"] * sign,
        phii,
        antimeridian = Object(_math__WEBPACK_IMPORTED_MODULE_3__["abs"])(delta) > 180;
    if (antimeridian ^ (sign * lambda2 < lambdai && lambdai < sign * lambda)) {
      phii = inflection[1] * _math__WEBPACK_IMPORTED_MODULE_3__["degrees"];
      if (phii > phi1) phi1 = phii;
    } else if (lambdai = (lambdai + 360) % 360 - 180, antimeridian ^ (sign * lambda2 < lambdai && lambdai < sign * lambda)) {
      phii = -inflection[1] * _math__WEBPACK_IMPORTED_MODULE_3__["degrees"];
      if (phii < phi0) phi0 = phii;
    } else {
      if (phi < phi0) phi0 = phi;
      if (phi > phi1) phi1 = phi;
    }
    if (antimeridian) {
      if (lambda < lambda2) {
        if (angle(lambda0, lambda) > angle(lambda0, lambda1)) lambda1 = lambda;
      } else {
        if (angle(lambda, lambda1) > angle(lambda0, lambda1)) lambda0 = lambda;
      }
    } else {
      if (lambda1 >= lambda0) {
        if (lambda < lambda0) lambda0 = lambda;
        if (lambda > lambda1) lambda1 = lambda;
      } else {
        if (lambda > lambda2) {
          if (angle(lambda0, lambda) > angle(lambda0, lambda1)) lambda1 = lambda;
        } else {
          if (angle(lambda, lambda1) > angle(lambda0, lambda1)) lambda0 = lambda;
        }
      }
    }
  } else {
    ranges.push(range = [lambda0 = lambda, lambda1 = lambda]);
  }
  if (phi < phi0) phi0 = phi;
  if (phi > phi1) phi1 = phi;
  p0 = p, lambda2 = lambda;
}

function boundsLineStart() {
  boundsStream.point = linePoint;
}

function boundsLineEnd() {
  range[0] = lambda0, range[1] = lambda1;
  boundsStream.point = boundsPoint;
  p0 = null;
}

function boundsRingPoint(lambda, phi) {
  if (p0) {
    var delta = lambda - lambda2;
    deltaSum.add(Object(_math__WEBPACK_IMPORTED_MODULE_3__["abs"])(delta) > 180 ? delta + (delta > 0 ? 360 : -360) : delta);
  } else {
    lambda00 = lambda, phi00 = phi;
  }
  _area__WEBPACK_IMPORTED_MODULE_1__["areaStream"].point(lambda, phi);
  linePoint(lambda, phi);
}

function boundsRingStart() {
  _area__WEBPACK_IMPORTED_MODULE_1__["areaStream"].lineStart();
}

function boundsRingEnd() {
  boundsRingPoint(lambda00, phi00);
  _area__WEBPACK_IMPORTED_MODULE_1__["areaStream"].lineEnd();
  if (Object(_math__WEBPACK_IMPORTED_MODULE_3__["abs"])(deltaSum) > _math__WEBPACK_IMPORTED_MODULE_3__["epsilon"]) lambda0 = -(lambda1 = 180);
  range[0] = lambda0, range[1] = lambda1;
  p0 = null;
}

// Finds the left-right distance between two longitudes.
// This is almost the same as (lambda1 - lambda0 + 360°) % 360°, except that we want
// the distance between ±180° to be 360°.
function angle(lambda0, lambda1) {
  return (lambda1 -= lambda0) < 0 ? lambda1 + 360 : lambda1;
}

function rangeCompare(a, b) {
  return a[0] - b[0];
}

function rangeContains(range, x) {
  return range[0] <= range[1] ? range[0] <= x && x <= range[1] : x < range[0] || range[1] < x;
}

/* harmony default export */ __webpack_exports__["default"] = (function(feature) {
  var i, n, a, b, merged, deltaMax, delta;

  phi1 = lambda1 = -(lambda0 = phi0 = Infinity);
  ranges = [];
  Object(_stream__WEBPACK_IMPORTED_MODULE_4__["default"])(feature, boundsStream);

  // First, sort ranges by their minimum longitudes.
  if (n = ranges.length) {
    ranges.sort(rangeCompare);

    // Then, merge any ranges that overlap.
    for (i = 1, a = ranges[0], merged = [a]; i < n; ++i) {
      b = ranges[i];
      if (rangeContains(a, b[0]) || rangeContains(a, b[1])) {
        if (angle(a[0], b[1]) > angle(a[0], a[1])) a[1] = b[1];
        if (angle(b[0], a[1]) > angle(a[0], a[1])) a[0] = b[0];
      } else {
        merged.push(a = b);
      }
    }

    // Finally, find the largest gap between the merged ranges.
    // The final bounding box will be the inverse of this gap.
    for (deltaMax = -Infinity, n = merged.length - 1, i = 0, a = merged[n]; i <= n; a = b, ++i) {
      b = merged[i];
      if ((delta = angle(a[1], b[0])) > deltaMax) deltaMax = delta, lambda0 = b[0], lambda1 = a[1];
    }
  }

  ranges = range = null;

  return lambda0 === Infinity || phi0 === Infinity
      ? [[NaN, NaN], [NaN, NaN]]
      : [[lambda0, phi0], [lambda1, phi1]];
});


/***/ }),

/***/ "./node_modules/d3-geo/src/cartesian.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-geo/src/cartesian.js ***!
  \**********************************************/
/*! exports provided: spherical, cartesian, cartesianDot, cartesianCross, cartesianAddInPlace, cartesianScale, cartesianNormalizeInPlace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spherical", function() { return spherical; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cartesian", function() { return cartesian; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cartesianDot", function() { return cartesianDot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cartesianCross", function() { return cartesianCross; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cartesianAddInPlace", function() { return cartesianAddInPlace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cartesianScale", function() { return cartesianScale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cartesianNormalizeInPlace", function() { return cartesianNormalizeInPlace; });
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math */ "./node_modules/d3-geo/src/math.js");


function spherical(cartesian) {
  return [Object(_math__WEBPACK_IMPORTED_MODULE_0__["atan2"])(cartesian[1], cartesian[0]), Object(_math__WEBPACK_IMPORTED_MODULE_0__["asin"])(cartesian[2])];
}

function cartesian(spherical) {
  var lambda = spherical[0], phi = spherical[1], cosPhi = Object(_math__WEBPACK_IMPORTED_MODULE_0__["cos"])(phi);
  return [cosPhi * Object(_math__WEBPACK_IMPORTED_MODULE_0__["cos"])(lambda), cosPhi * Object(_math__WEBPACK_IMPORTED_MODULE_0__["sin"])(lambda), Object(_math__WEBPACK_IMPORTED_MODULE_0__["sin"])(phi)];
}

function cartesianDot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}

function cartesianCross(a, b) {
  return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
}

// TODO return a
function cartesianAddInPlace(a, b) {
  a[0] += b[0], a[1] += b[1], a[2] += b[2];
}

function cartesianScale(vector, k) {
  return [vector[0] * k, vector[1] * k, vector[2] * k];
}

// TODO return d
function cartesianNormalizeInPlace(d) {
  var l = Object(_math__WEBPACK_IMPORTED_MODULE_0__["sqrt"])(d[0] * d[0] + d[1] * d[1] + d[2] * d[2]);
  d[0] /= l, d[1] /= l, d[2] /= l;
}


/***/ }),

/***/ "./node_modules/d3-geo/src/centroid.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-geo/src/centroid.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math */ "./node_modules/d3-geo/src/math.js");
/* harmony import */ var _noop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./noop */ "./node_modules/d3-geo/src/noop.js");
/* harmony import */ var _stream__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stream */ "./node_modules/d3-geo/src/stream.js");




var W0, W1,
    X0, Y0, Z0,
    X1, Y1, Z1,
    X2, Y2, Z2,
    lambda00, phi00, // first point
    x0, y0, z0; // previous point

var centroidStream = {
  sphere: _noop__WEBPACK_IMPORTED_MODULE_1__["default"],
  point: centroidPoint,
  lineStart: centroidLineStart,
  lineEnd: centroidLineEnd,
  polygonStart: function() {
    centroidStream.lineStart = centroidRingStart;
    centroidStream.lineEnd = centroidRingEnd;
  },
  polygonEnd: function() {
    centroidStream.lineStart = centroidLineStart;
    centroidStream.lineEnd = centroidLineEnd;
  }
};

// Arithmetic mean of Cartesian vectors.
function centroidPoint(lambda, phi) {
  lambda *= _math__WEBPACK_IMPORTED_MODULE_0__["radians"], phi *= _math__WEBPACK_IMPORTED_MODULE_0__["radians"];
  var cosPhi = Object(_math__WEBPACK_IMPORTED_MODULE_0__["cos"])(phi);
  centroidPointCartesian(cosPhi * Object(_math__WEBPACK_IMPORTED_MODULE_0__["cos"])(lambda), cosPhi * Object(_math__WEBPACK_IMPORTED_MODULE_0__["sin"])(lambda), Object(_math__WEBPACK_IMPORTED_MODULE_0__["sin"])(phi));
}

function centroidPointCartesian(x, y, z) {
  ++W0;
  X0 += (x - X0) / W0;
  Y0 += (y - Y0) / W0;
  Z0 += (z - Z0) / W0;
}

function centroidLineStart() {
  centroidStream.point = centroidLinePointFirst;
}

function centroidLinePointFirst(lambda, phi) {
  lambda *= _math__WEBPACK_IMPORTED_MODULE_0__["radians"], phi *= _math__WEBPACK_IMPORTED_MODULE_0__["radians"];
  var cosPhi = Object(_math__WEBPACK_IMPORTED_MODULE_0__["cos"])(phi);
  x0 = cosPhi * Object(_math__WEBPACK_IMPORTED_MODULE_0__["cos"])(lambda);
  y0 = cosPhi * Object(_math__WEBPACK_IMPORTED_MODULE_0__["sin"])(lambda);
  z0 = Object(_math__WEBPACK_IMPORTED_MODULE_0__["sin"])(phi);
  centroidStream.point = centroidLinePoint;
  centroidPointCartesian(x0, y0, z0);
}

function centroidLinePoint(lambda, phi) {
  lambda *= _math__WEBPACK_IMPORTED_MODULE_0__["radians"], phi *= _math__WEBPACK_IMPORTED_MODULE_0__["radians"];
  var cosPhi = Object(_math__WEBPACK_IMPORTED_MODULE_0__["cos"])(phi),
      x = cosPhi * Object(_math__WEBPACK_IMPORTED_MODULE_0__["cos"])(lambda),
      y = cosPhi * Object(_math__WEBPACK_IMPORTED_MODULE_0__["sin"])(lambda),
      z = Object(_math__WEBPACK_IMPORTED_MODULE_0__["sin"])(phi),
      w = Object(_math__WEBPACK_IMPORTED_MODULE_0__["atan2"])(Object(_math__WEBPACK_IMPORTED_MODULE_0__["sqrt"])((w = y0 * z - z0 * y) * w + (w = z0 * x - x0 * z) * w + (w = x0 * y - y0 * x) * w), x0 * x + y0 * y + z0 * z);
  W1 += w;
  X1 += w * (x0 + (x0 = x));
  Y1 += w * (y0 + (y0 = y));
  Z1 += w * (z0 + (z0 = z));
  centroidPointCartesian(x0, y0, z0);
}

function centroidLineEnd() {
  centroidStream.point = centroidPoint;
}

// See J. E. Brock, The Inertia Tensor for a Spherical Triangle,
// J. Applied Mechanics 42, 239 (1975).
function centroidRingStart() {
  centroidStream.point = centroidRingPointFirst;
}

function centroidRingEnd() {
  centroidRingPoint(lambda00, phi00);
  centroidStream.point = centroidPoint;
}

function centroidRingPointFirst(lambda, phi) {
  lambda00 = lambda, phi00 = phi;
  lambda *= _math__WEBPACK_IMPORTED_MODULE_0__["radians"], phi *= _math__WEBPACK_IMPORTED_MODULE_0__["radians"];
  centroidStream.point = centroidRingPoint;
  var cosPhi = Object(_math__WEBPACK_IMPORTED_MODULE_0__["cos"])(phi);
  x0 = cosPhi * Object(_math__WEBPACK_IMPORTED_MODULE_0__["cos"])(lambda);
  y0 = cosPhi * Object(_math__WEBPACK_IMPORTED_MODULE_0__["sin"])(lambda);
  z0 = Object(_math__WEBPACK_IMPORTED_MODULE_0__["sin"])(phi);
  centroidPointCartesian(x0, y0, z0);
}

function centroidRingPoint(lambda, phi) {
  lambda *= _math__WEBPACK_IMPORTED_MODULE_0__["radians"], phi *= _math__WEBPACK_IMPORTED_MODULE_0__["radians"];
  var cosPhi = Object(_math__WEBPACK_IMPORTED_MODULE_0__["cos"])(phi),
      x = cosPhi * Object(_math__WEBPACK_IMPORTED_MODULE_0__["cos"])(lambda),
      y = cosPhi * Object(_math__WEBPACK_IMPORTED_MODULE_0__["sin"])(lambda),
      z = Object(_math__WEBPACK_IMPORTED_MODULE_0__["sin"])(phi),
      cx = y0 * z - z0 * y,
      cy = z0 * x - x0 * z,
      cz = x0 * y - y0 * x,
      m = Object(_math__WEBPACK_IMPORTED_MODULE_0__["sqrt"])(cx * cx + cy * cy + cz * cz),
      w = Object(_math__WEBPACK_IMPORTED_MODULE_0__["asin"])(m), // line weight = angle
      v = m && -w / m; // area weight multiplier
  X2 += v * cx;
  Y2 += v * cy;
  Z2 += v * cz;
  W1 += w;
  X1 += w * (x0 + (x0 = x));
  Y1 += w * (y0 + (y0 = y));
  Z1 += w * (z0 + (z0 = z));
  centroidPointCartesian(x0, y0, z0);
}

/* harmony default export */ __webpack_exports__["default"] = (function(object) {
  W0 = W1 =
  X0 = Y0 = Z0 =
  X1 = Y1 = Z1 =
  X2 = Y2 = Z2 = 0;
  Object(_stream__WEBPACK_IMPORTED_MODULE_2__["default"])(object, centroidStream);

  var x = X2,
      y = Y2,
      z = Z2,
      m = x * x + y * y + z * z;

  // If the area-weighted ccentroid is undefined, fall back to length-weighted ccentroid.
  if (m < _math__WEBPACK_IMPORTED_MODULE_0__["epsilon2"]) {
    x = X1, y = Y1, z = Z1;
    // If the feature has zero length, fall back to arithmetic mean of point vectors.
    if (W1 < _math__WEBPACK_IMPORTED_MODULE_0__["epsilon"]) x = X0, y = Y0, z = Z0;
    m = x * x + y * y + z * z;
    // If the feature still has an undefined ccentroid, then return.
    if (m < _math__WEBPACK_IMPORTED_MODULE_0__["epsilon2"]) return [NaN, NaN];
  }

  return [Object(_math__WEBPACK_IMPORTED_MODULE_0__["atan2"])(y, x) * _math__WEBPACK_IMPORTED_MODULE_0__["degrees"], Object(_math__WEBPACK_IMPORTED_MODULE_0__["asin"])(z / Object(_math__WEBPACK_IMPORTED_MODULE_0__["sqrt"])(m)) * _math__WEBPACK_IMPORTED_MODULE_0__["degrees"]];
});


/***/ }),

/***/ "./node_modules/d3-geo/src/circle.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-geo/src/circle.js ***!
  \*******************************************/
/*! exports provided: circleStream, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "circleStream", function() { return circleStream; });
/* harmony import */ var _cartesian__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cartesian */ "./node_modules/d3-geo/src/cartesian.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constant */ "./node_modules/d3-geo/src/constant.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./math */ "./node_modules/d3-geo/src/math.js");
/* harmony import */ var _rotation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rotation */ "./node_modules/d3-geo/src/rotation.js");





// Generates a circle centered at [0°, 0°], with a given radius and precision.
function circleStream(stream, radius, delta, direction, t0, t1) {
  if (!delta) return;
  var cosRadius = Object(_math__WEBPACK_IMPORTED_MODULE_2__["cos"])(radius),
      sinRadius = Object(_math__WEBPACK_IMPORTED_MODULE_2__["sin"])(radius),
      step = direction * delta;
  if (t0 == null) {
    t0 = radius + direction * _math__WEBPACK_IMPORTED_MODULE_2__["tau"];
    t1 = radius - step / 2;
  } else {
    t0 = circleRadius(cosRadius, t0);
    t1 = circleRadius(cosRadius, t1);
    if (direction > 0 ? t0 < t1 : t0 > t1) t0 += direction * _math__WEBPACK_IMPORTED_MODULE_2__["tau"];
  }
  for (var point, t = t0; direction > 0 ? t > t1 : t < t1; t -= step) {
    point = Object(_cartesian__WEBPACK_IMPORTED_MODULE_0__["spherical"])([cosRadius, -sinRadius * Object(_math__WEBPACK_IMPORTED_MODULE_2__["cos"])(t), -sinRadius * Object(_math__WEBPACK_IMPORTED_MODULE_2__["sin"])(t)]);
    stream.point(point[0], point[1]);
  }
}

// Returns the signed angle of a cartesian point relative to [cosRadius, 0, 0].
function circleRadius(cosRadius, point) {
  point = Object(_cartesian__WEBPACK_IMPORTED_MODULE_0__["cartesian"])(point), point[0] -= cosRadius;
  Object(_cartesian__WEBPACK_IMPORTED_MODULE_0__["cartesianNormalizeInPlace"])(point);
  var radius = Object(_math__WEBPACK_IMPORTED_MODULE_2__["acos"])(-point[1]);
  return ((-point[2] < 0 ? -radius : radius) + _math__WEBPACK_IMPORTED_MODULE_2__["tau"] - _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) % _math__WEBPACK_IMPORTED_MODULE_2__["tau"];
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  var center = Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])([0, 0]),
      radius = Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(90),
      precision = Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(6),
      ring,
      rotate,
      stream = {point: point};

  function point(x, y) {
    ring.push(x = rotate(x, y));
    x[0] *= _math__WEBPACK_IMPORTED_MODULE_2__["degrees"], x[1] *= _math__WEBPACK_IMPORTED_MODULE_2__["degrees"];
  }

  function circle() {
    var c = center.apply(this, arguments),
        r = radius.apply(this, arguments) * _math__WEBPACK_IMPORTED_MODULE_2__["radians"],
        p = precision.apply(this, arguments) * _math__WEBPACK_IMPORTED_MODULE_2__["radians"];
    ring = [];
    rotate = Object(_rotation__WEBPACK_IMPORTED_MODULE_3__["rotateRadians"])(-c[0] * _math__WEBPACK_IMPORTED_MODULE_2__["radians"], -c[1] * _math__WEBPACK_IMPORTED_MODULE_2__["radians"], 0).invert;
    circleStream(stream, r, p, 1);
    c = {type: "Polygon", coordinates: [ring]};
    ring = rotate = null;
    return c;
  }

  circle.center = function(_) {
    return arguments.length ? (center = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])([+_[0], +_[1]]), circle) : center;
  };

  circle.radius = function(_) {
    return arguments.length ? (radius = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), circle) : radius;
  };

  circle.precision = function(_) {
    return arguments.length ? (precision = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), circle) : precision;
  };

  return circle;
});


/***/ }),

/***/ "./node_modules/d3-geo/src/clip/antimeridian.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-geo/src/clip/antimeridian.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./node_modules/d3-geo/src/clip/index.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math */ "./node_modules/d3-geo/src/math.js");



/* harmony default export */ __webpack_exports__["default"] = (Object(_index__WEBPACK_IMPORTED_MODULE_0__["default"])(
  function() { return true; },
  clipAntimeridianLine,
  clipAntimeridianInterpolate,
  [-_math__WEBPACK_IMPORTED_MODULE_1__["pi"], -_math__WEBPACK_IMPORTED_MODULE_1__["halfPi"]]
));

// Takes a line and cuts into visible segments. Return values: 0 - there were
// intersections or the line was empty; 1 - no intersections; 2 - there were
// intersections, and the first and last segments should be rejoined.
function clipAntimeridianLine(stream) {
  var lambda0 = NaN,
      phi0 = NaN,
      sign0 = NaN,
      clean; // no intersections

  return {
    lineStart: function() {
      stream.lineStart();
      clean = 1;
    },
    point: function(lambda1, phi1) {
      var sign1 = lambda1 > 0 ? _math__WEBPACK_IMPORTED_MODULE_1__["pi"] : -_math__WEBPACK_IMPORTED_MODULE_1__["pi"],
          delta = Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(lambda1 - lambda0);
      if (Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(delta - _math__WEBPACK_IMPORTED_MODULE_1__["pi"]) < _math__WEBPACK_IMPORTED_MODULE_1__["epsilon"]) { // line crosses a pole
        stream.point(lambda0, phi0 = (phi0 + phi1) / 2 > 0 ? _math__WEBPACK_IMPORTED_MODULE_1__["halfPi"] : -_math__WEBPACK_IMPORTED_MODULE_1__["halfPi"]);
        stream.point(sign0, phi0);
        stream.lineEnd();
        stream.lineStart();
        stream.point(sign1, phi0);
        stream.point(lambda1, phi0);
        clean = 0;
      } else if (sign0 !== sign1 && delta >= _math__WEBPACK_IMPORTED_MODULE_1__["pi"]) { // line crosses antimeridian
        if (Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(lambda0 - sign0) < _math__WEBPACK_IMPORTED_MODULE_1__["epsilon"]) lambda0 -= sign0 * _math__WEBPACK_IMPORTED_MODULE_1__["epsilon"]; // handle degeneracies
        if (Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(lambda1 - sign1) < _math__WEBPACK_IMPORTED_MODULE_1__["epsilon"]) lambda1 -= sign1 * _math__WEBPACK_IMPORTED_MODULE_1__["epsilon"];
        phi0 = clipAntimeridianIntersect(lambda0, phi0, lambda1, phi1);
        stream.point(sign0, phi0);
        stream.lineEnd();
        stream.lineStart();
        stream.point(sign1, phi0);
        clean = 0;
      }
      stream.point(lambda0 = lambda1, phi0 = phi1);
      sign0 = sign1;
    },
    lineEnd: function() {
      stream.lineEnd();
      lambda0 = phi0 = NaN;
    },
    clean: function() {
      return 2 - clean; // if intersections, rejoin first and last segments
    }
  };
}

function clipAntimeridianIntersect(lambda0, phi0, lambda1, phi1) {
  var cosPhi0,
      cosPhi1,
      sinLambda0Lambda1 = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(lambda0 - lambda1);
  return Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(sinLambda0Lambda1) > _math__WEBPACK_IMPORTED_MODULE_1__["epsilon"]
      ? Object(_math__WEBPACK_IMPORTED_MODULE_1__["atan"])((Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(phi0) * (cosPhi1 = Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(phi1)) * Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(lambda1)
          - Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(phi1) * (cosPhi0 = Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(phi0)) * Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(lambda0))
          / (cosPhi0 * cosPhi1 * sinLambda0Lambda1))
      : (phi0 + phi1) / 2;
}

function clipAntimeridianInterpolate(from, to, direction, stream) {
  var phi;
  if (from == null) {
    phi = direction * _math__WEBPACK_IMPORTED_MODULE_1__["halfPi"];
    stream.point(-_math__WEBPACK_IMPORTED_MODULE_1__["pi"], phi);
    stream.point(0, phi);
    stream.point(_math__WEBPACK_IMPORTED_MODULE_1__["pi"], phi);
    stream.point(_math__WEBPACK_IMPORTED_MODULE_1__["pi"], 0);
    stream.point(_math__WEBPACK_IMPORTED_MODULE_1__["pi"], -phi);
    stream.point(0, -phi);
    stream.point(-_math__WEBPACK_IMPORTED_MODULE_1__["pi"], -phi);
    stream.point(-_math__WEBPACK_IMPORTED_MODULE_1__["pi"], 0);
    stream.point(-_math__WEBPACK_IMPORTED_MODULE_1__["pi"], phi);
  } else if (Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(from[0] - to[0]) > _math__WEBPACK_IMPORTED_MODULE_1__["epsilon"]) {
    var lambda = from[0] < to[0] ? _math__WEBPACK_IMPORTED_MODULE_1__["pi"] : -_math__WEBPACK_IMPORTED_MODULE_1__["pi"];
    phi = direction * lambda / 2;
    stream.point(-lambda, phi);
    stream.point(0, phi);
    stream.point(lambda, phi);
  } else {
    stream.point(to[0], to[1]);
  }
}


/***/ }),

/***/ "./node_modules/d3-geo/src/clip/buffer.js":
/*!************************************************!*\
  !*** ./node_modules/d3-geo/src/clip/buffer.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _noop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../noop */ "./node_modules/d3-geo/src/noop.js");


/* harmony default export */ __webpack_exports__["default"] = (function() {
  var lines = [],
      line;
  return {
    point: function(x, y) {
      line.push([x, y]);
    },
    lineStart: function() {
      lines.push(line = []);
    },
    lineEnd: _noop__WEBPACK_IMPORTED_MODULE_0__["default"],
    rejoin: function() {
      if (lines.length > 1) lines.push(lines.pop().concat(lines.shift()));
    },
    result: function() {
      var result = lines;
      lines = [];
      line = null;
      return result;
    }
  };
});


/***/ }),

/***/ "./node_modules/d3-geo/src/clip/circle.js":
/*!************************************************!*\
  !*** ./node_modules/d3-geo/src/clip/circle.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cartesian__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cartesian */ "./node_modules/d3-geo/src/cartesian.js");
/* harmony import */ var _circle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../circle */ "./node_modules/d3-geo/src/circle.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../math */ "./node_modules/d3-geo/src/math.js");
/* harmony import */ var _pointEqual__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pointEqual */ "./node_modules/d3-geo/src/pointEqual.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index */ "./node_modules/d3-geo/src/clip/index.js");






/* harmony default export */ __webpack_exports__["default"] = (function(radius) {
  var cr = Object(_math__WEBPACK_IMPORTED_MODULE_2__["cos"])(radius),
      delta = 6 * _math__WEBPACK_IMPORTED_MODULE_2__["radians"],
      smallRadius = cr > 0,
      notHemisphere = Object(_math__WEBPACK_IMPORTED_MODULE_2__["abs"])(cr) > _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"]; // TODO optimise for this common case

  function interpolate(from, to, direction, stream) {
    Object(_circle__WEBPACK_IMPORTED_MODULE_1__["circleStream"])(stream, radius, delta, direction, from, to);
  }

  function visible(lambda, phi) {
    return Object(_math__WEBPACK_IMPORTED_MODULE_2__["cos"])(lambda) * Object(_math__WEBPACK_IMPORTED_MODULE_2__["cos"])(phi) > cr;
  }

  // Takes a line and cuts into visible segments. Return values used for polygon
  // clipping: 0 - there were intersections or the line was empty; 1 - no
  // intersections 2 - there were intersections, and the first and last segments
  // should be rejoined.
  function clipLine(stream) {
    var point0, // previous point
        c0, // code for previous point
        v0, // visibility of previous point
        v00, // visibility of first point
        clean; // no intersections
    return {
      lineStart: function() {
        v00 = v0 = false;
        clean = 1;
      },
      point: function(lambda, phi) {
        var point1 = [lambda, phi],
            point2,
            v = visible(lambda, phi),
            c = smallRadius
              ? v ? 0 : code(lambda, phi)
              : v ? code(lambda + (lambda < 0 ? _math__WEBPACK_IMPORTED_MODULE_2__["pi"] : -_math__WEBPACK_IMPORTED_MODULE_2__["pi"]), phi) : 0;
        if (!point0 && (v00 = v0 = v)) stream.lineStart();
        // Handle degeneracies.
        // TODO ignore if not clipping polygons.
        if (v !== v0) {
          point2 = intersect(point0, point1);
          if (!point2 || Object(_pointEqual__WEBPACK_IMPORTED_MODULE_3__["default"])(point0, point2) || Object(_pointEqual__WEBPACK_IMPORTED_MODULE_3__["default"])(point1, point2)) {
            point1[0] += _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"];
            point1[1] += _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"];
            v = visible(point1[0], point1[1]);
          }
        }
        if (v !== v0) {
          clean = 0;
          if (v) {
            // outside going in
            stream.lineStart();
            point2 = intersect(point1, point0);
            stream.point(point2[0], point2[1]);
          } else {
            // inside going out
            point2 = intersect(point0, point1);
            stream.point(point2[0], point2[1]);
            stream.lineEnd();
          }
          point0 = point2;
        } else if (notHemisphere && point0 && smallRadius ^ v) {
          var t;
          // If the codes for two points are different, or are both zero,
          // and there this segment intersects with the small circle.
          if (!(c & c0) && (t = intersect(point1, point0, true))) {
            clean = 0;
            if (smallRadius) {
              stream.lineStart();
              stream.point(t[0][0], t[0][1]);
              stream.point(t[1][0], t[1][1]);
              stream.lineEnd();
            } else {
              stream.point(t[1][0], t[1][1]);
              stream.lineEnd();
              stream.lineStart();
              stream.point(t[0][0], t[0][1]);
            }
          }
        }
        if (v && (!point0 || !Object(_pointEqual__WEBPACK_IMPORTED_MODULE_3__["default"])(point0, point1))) {
          stream.point(point1[0], point1[1]);
        }
        point0 = point1, v0 = v, c0 = c;
      },
      lineEnd: function() {
        if (v0) stream.lineEnd();
        point0 = null;
      },
      // Rejoin first and last segments if there were intersections and the first
      // and last points were visible.
      clean: function() {
        return clean | ((v00 && v0) << 1);
      }
    };
  }

  // Intersects the great circle between a and b with the clip circle.
  function intersect(a, b, two) {
    var pa = Object(_cartesian__WEBPACK_IMPORTED_MODULE_0__["cartesian"])(a),
        pb = Object(_cartesian__WEBPACK_IMPORTED_MODULE_0__["cartesian"])(b);

    // We have two planes, n1.p = d1 and n2.p = d2.
    // Find intersection line p(t) = c1 n1 + c2 n2 + t (n1 ⨯ n2).
    var n1 = [1, 0, 0], // normal
        n2 = Object(_cartesian__WEBPACK_IMPORTED_MODULE_0__["cartesianCross"])(pa, pb),
        n2n2 = Object(_cartesian__WEBPACK_IMPORTED_MODULE_0__["cartesianDot"])(n2, n2),
        n1n2 = n2[0], // cartesianDot(n1, n2),
        determinant = n2n2 - n1n2 * n1n2;

    // Two polar points.
    if (!determinant) return !two && a;

    var c1 =  cr * n2n2 / determinant,
        c2 = -cr * n1n2 / determinant,
        n1xn2 = Object(_cartesian__WEBPACK_IMPORTED_MODULE_0__["cartesianCross"])(n1, n2),
        A = Object(_cartesian__WEBPACK_IMPORTED_MODULE_0__["cartesianScale"])(n1, c1),
        B = Object(_cartesian__WEBPACK_IMPORTED_MODULE_0__["cartesianScale"])(n2, c2);
    Object(_cartesian__WEBPACK_IMPORTED_MODULE_0__["cartesianAddInPlace"])(A, B);

    // Solve |p(t)|^2 = 1.
    var u = n1xn2,
        w = Object(_cartesian__WEBPACK_IMPORTED_MODULE_0__["cartesianDot"])(A, u),
        uu = Object(_cartesian__WEBPACK_IMPORTED_MODULE_0__["cartesianDot"])(u, u),
        t2 = w * w - uu * (Object(_cartesian__WEBPACK_IMPORTED_MODULE_0__["cartesianDot"])(A, A) - 1);

    if (t2 < 0) return;

    var t = Object(_math__WEBPACK_IMPORTED_MODULE_2__["sqrt"])(t2),
        q = Object(_cartesian__WEBPACK_IMPORTED_MODULE_0__["cartesianScale"])(u, (-w - t) / uu);
    Object(_cartesian__WEBPACK_IMPORTED_MODULE_0__["cartesianAddInPlace"])(q, A);
    q = Object(_cartesian__WEBPACK_IMPORTED_MODULE_0__["spherical"])(q);

    if (!two) return q;

    // Two intersection points.
    var lambda0 = a[0],
        lambda1 = b[0],
        phi0 = a[1],
        phi1 = b[1],
        z;

    if (lambda1 < lambda0) z = lambda0, lambda0 = lambda1, lambda1 = z;

    var delta = lambda1 - lambda0,
        polar = Object(_math__WEBPACK_IMPORTED_MODULE_2__["abs"])(delta - _math__WEBPACK_IMPORTED_MODULE_2__["pi"]) < _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"],
        meridian = polar || delta < _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"];

    if (!polar && phi1 < phi0) z = phi0, phi0 = phi1, phi1 = z;

    // Check that the first point is between a and b.
    if (meridian
        ? polar
          ? phi0 + phi1 > 0 ^ q[1] < (Object(_math__WEBPACK_IMPORTED_MODULE_2__["abs"])(q[0] - lambda0) < _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"] ? phi0 : phi1)
          : phi0 <= q[1] && q[1] <= phi1
        : delta > _math__WEBPACK_IMPORTED_MODULE_2__["pi"] ^ (lambda0 <= q[0] && q[0] <= lambda1)) {
      var q1 = Object(_cartesian__WEBPACK_IMPORTED_MODULE_0__["cartesianScale"])(u, (-w + t) / uu);
      Object(_cartesian__WEBPACK_IMPORTED_MODULE_0__["cartesianAddInPlace"])(q1, A);
      return [q, Object(_cartesian__WEBPACK_IMPORTED_MODULE_0__["spherical"])(q1)];
    }
  }

  // Generates a 4-bit vector representing the location of a point relative to
  // the small circle's bounding box.
  function code(lambda, phi) {
    var r = smallRadius ? radius : _math__WEBPACK_IMPORTED_MODULE_2__["pi"] - radius,
        code = 0;
    if (lambda < -r) code |= 1; // left
    else if (lambda > r) code |= 2; // right
    if (phi < -r) code |= 4; // below
    else if (phi > r) code |= 8; // above
    return code;
  }

  return Object(_index__WEBPACK_IMPORTED_MODULE_4__["default"])(visible, clipLine, interpolate, smallRadius ? [0, -radius] : [-_math__WEBPACK_IMPORTED_MODULE_2__["pi"], radius - _math__WEBPACK_IMPORTED_MODULE_2__["pi"]]);
});


/***/ }),

/***/ "./node_modules/d3-geo/src/clip/extent.js":
/*!************************************************!*\
  !*** ./node_modules/d3-geo/src/clip/extent.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rectangle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rectangle */ "./node_modules/d3-geo/src/clip/rectangle.js");


/* harmony default export */ __webpack_exports__["default"] = (function() {
  var x0 = 0,
      y0 = 0,
      x1 = 960,
      y1 = 500,
      cache,
      cacheStream,
      clip;

  return clip = {
    stream: function(stream) {
      return cache && cacheStream === stream ? cache : cache = Object(_rectangle__WEBPACK_IMPORTED_MODULE_0__["default"])(x0, y0, x1, y1)(cacheStream = stream);
    },
    extent: function(_) {
      return arguments.length ? (x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1], cache = cacheStream = null, clip) : [[x0, y0], [x1, y1]];
    }
  };
});


/***/ }),

/***/ "./node_modules/d3-geo/src/clip/index.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-geo/src/clip/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _buffer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buffer */ "./node_modules/d3-geo/src/clip/buffer.js");
/* harmony import */ var _rejoin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rejoin */ "./node_modules/d3-geo/src/clip/rejoin.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../math */ "./node_modules/d3-geo/src/math.js");
/* harmony import */ var _polygonContains__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../polygonContains */ "./node_modules/d3-geo/src/polygonContains.js");
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");






/* harmony default export */ __webpack_exports__["default"] = (function(pointVisible, clipLine, interpolate, start) {
  return function(sink) {
    var line = clipLine(sink),
        ringBuffer = Object(_buffer__WEBPACK_IMPORTED_MODULE_0__["default"])(),
        ringSink = clipLine(ringBuffer),
        polygonStarted = false,
        polygon,
        segments,
        ring;

    var clip = {
      point: point,
      lineStart: lineStart,
      lineEnd: lineEnd,
      polygonStart: function() {
        clip.point = pointRing;
        clip.lineStart = ringStart;
        clip.lineEnd = ringEnd;
        segments = [];
        polygon = [];
      },
      polygonEnd: function() {
        clip.point = point;
        clip.lineStart = lineStart;
        clip.lineEnd = lineEnd;
        segments = Object(d3_array__WEBPACK_IMPORTED_MODULE_4__["merge"])(segments);
        var startInside = Object(_polygonContains__WEBPACK_IMPORTED_MODULE_3__["default"])(polygon, start);
        if (segments.length) {
          if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
          Object(_rejoin__WEBPACK_IMPORTED_MODULE_1__["default"])(segments, compareIntersection, startInside, interpolate, sink);
        } else if (startInside) {
          if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
          sink.lineStart();
          interpolate(null, null, 1, sink);
          sink.lineEnd();
        }
        if (polygonStarted) sink.polygonEnd(), polygonStarted = false;
        segments = polygon = null;
      },
      sphere: function() {
        sink.polygonStart();
        sink.lineStart();
        interpolate(null, null, 1, sink);
        sink.lineEnd();
        sink.polygonEnd();
      }
    };

    function point(lambda, phi) {
      if (pointVisible(lambda, phi)) sink.point(lambda, phi);
    }

    function pointLine(lambda, phi) {
      line.point(lambda, phi);
    }

    function lineStart() {
      clip.point = pointLine;
      line.lineStart();
    }

    function lineEnd() {
      clip.point = point;
      line.lineEnd();
    }

    function pointRing(lambda, phi) {
      ring.push([lambda, phi]);
      ringSink.point(lambda, phi);
    }

    function ringStart() {
      ringSink.lineStart();
      ring = [];
    }

    function ringEnd() {
      pointRing(ring[0][0], ring[0][1]);
      ringSink.lineEnd();

      var clean = ringSink.clean(),
          ringSegments = ringBuffer.result(),
          i, n = ringSegments.length, m,
          segment,
          point;

      ring.pop();
      polygon.push(ring);
      ring = null;

      if (!n) return;

      // No intersections.
      if (clean & 1) {
        segment = ringSegments[0];
        if ((m = segment.length - 1) > 0) {
          if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
          sink.lineStart();
          for (i = 0; i < m; ++i) sink.point((point = segment[i])[0], point[1]);
          sink.lineEnd();
        }
        return;
      }

      // Rejoin connected segments.
      // TODO reuse ringBuffer.rejoin()?
      if (n > 1 && clean & 2) ringSegments.push(ringSegments.pop().concat(ringSegments.shift()));

      segments.push(ringSegments.filter(validSegment));
    }

    return clip;
  };
});

function validSegment(segment) {
  return segment.length > 1;
}

// Intersections are sorted along the clip edge. For both antimeridian cutting
// and circle clipping, the same comparison is used.
function compareIntersection(a, b) {
  return ((a = a.x)[0] < 0 ? a[1] - _math__WEBPACK_IMPORTED_MODULE_2__["halfPi"] - _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"] : _math__WEBPACK_IMPORTED_MODULE_2__["halfPi"] - a[1])
       - ((b = b.x)[0] < 0 ? b[1] - _math__WEBPACK_IMPORTED_MODULE_2__["halfPi"] - _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"] : _math__WEBPACK_IMPORTED_MODULE_2__["halfPi"] - b[1]);
}


/***/ }),

/***/ "./node_modules/d3-geo/src/clip/line.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-geo/src/clip/line.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(a, b, x0, y0, x1, y1) {
  var ax = a[0],
      ay = a[1],
      bx = b[0],
      by = b[1],
      t0 = 0,
      t1 = 1,
      dx = bx - ax,
      dy = by - ay,
      r;

  r = x0 - ax;
  if (!dx && r > 0) return;
  r /= dx;
  if (dx < 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  } else if (dx > 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  }

  r = x1 - ax;
  if (!dx && r < 0) return;
  r /= dx;
  if (dx < 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  } else if (dx > 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  }

  r = y0 - ay;
  if (!dy && r > 0) return;
  r /= dy;
  if (dy < 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  } else if (dy > 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  }

  r = y1 - ay;
  if (!dy && r < 0) return;
  r /= dy;
  if (dy < 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  } else if (dy > 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  }

  if (t0 > 0) a[0] = ax + t0 * dx, a[1] = ay + t0 * dy;
  if (t1 < 1) b[0] = ax + t1 * dx, b[1] = ay + t1 * dy;
  return true;
});


/***/ }),

/***/ "./node_modules/d3-geo/src/clip/rectangle.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-geo/src/clip/rectangle.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return clipRectangle; });
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math */ "./node_modules/d3-geo/src/math.js");
/* harmony import */ var _buffer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buffer */ "./node_modules/d3-geo/src/clip/buffer.js");
/* harmony import */ var _line__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./line */ "./node_modules/d3-geo/src/clip/line.js");
/* harmony import */ var _rejoin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rejoin */ "./node_modules/d3-geo/src/clip/rejoin.js");
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");






var clipMax = 1e9, clipMin = -clipMax;

// TODO Use d3-polygon’s polygonContains here for the ring check?
// TODO Eliminate duplicate buffering in clipBuffer and polygon.push?

function clipRectangle(x0, y0, x1, y1) {

  function visible(x, y) {
    return x0 <= x && x <= x1 && y0 <= y && y <= y1;
  }

  function interpolate(from, to, direction, stream) {
    var a = 0, a1 = 0;
    if (from == null
        || (a = corner(from, direction)) !== (a1 = corner(to, direction))
        || comparePoint(from, to) < 0 ^ direction > 0) {
      do stream.point(a === 0 || a === 3 ? x0 : x1, a > 1 ? y1 : y0);
      while ((a = (a + direction + 4) % 4) !== a1);
    } else {
      stream.point(to[0], to[1]);
    }
  }

  function corner(p, direction) {
    return Object(_math__WEBPACK_IMPORTED_MODULE_0__["abs"])(p[0] - x0) < _math__WEBPACK_IMPORTED_MODULE_0__["epsilon"] ? direction > 0 ? 0 : 3
        : Object(_math__WEBPACK_IMPORTED_MODULE_0__["abs"])(p[0] - x1) < _math__WEBPACK_IMPORTED_MODULE_0__["epsilon"] ? direction > 0 ? 2 : 1
        : Object(_math__WEBPACK_IMPORTED_MODULE_0__["abs"])(p[1] - y0) < _math__WEBPACK_IMPORTED_MODULE_0__["epsilon"] ? direction > 0 ? 1 : 0
        : direction > 0 ? 3 : 2; // abs(p[1] - y1) < epsilon
  }

  function compareIntersection(a, b) {
    return comparePoint(a.x, b.x);
  }

  function comparePoint(a, b) {
    var ca = corner(a, 1),
        cb = corner(b, 1);
    return ca !== cb ? ca - cb
        : ca === 0 ? b[1] - a[1]
        : ca === 1 ? a[0] - b[0]
        : ca === 2 ? a[1] - b[1]
        : b[0] - a[0];
  }

  return function(stream) {
    var activeStream = stream,
        bufferStream = Object(_buffer__WEBPACK_IMPORTED_MODULE_1__["default"])(),
        segments,
        polygon,
        ring,
        x__, y__, v__, // first point
        x_, y_, v_, // previous point
        first,
        clean;

    var clipStream = {
      point: point,
      lineStart: lineStart,
      lineEnd: lineEnd,
      polygonStart: polygonStart,
      polygonEnd: polygonEnd
    };

    function point(x, y) {
      if (visible(x, y)) activeStream.point(x, y);
    }

    function polygonInside() {
      var winding = 0;

      for (var i = 0, n = polygon.length; i < n; ++i) {
        for (var ring = polygon[i], j = 1, m = ring.length, point = ring[0], a0, a1, b0 = point[0], b1 = point[1]; j < m; ++j) {
          a0 = b0, a1 = b1, point = ring[j], b0 = point[0], b1 = point[1];
          if (a1 <= y1) { if (b1 > y1 && (b0 - a0) * (y1 - a1) > (b1 - a1) * (x0 - a0)) ++winding; }
          else { if (b1 <= y1 && (b0 - a0) * (y1 - a1) < (b1 - a1) * (x0 - a0)) --winding; }
        }
      }

      return winding;
    }

    // Buffer geometry within a polygon and then clip it en masse.
    function polygonStart() {
      activeStream = bufferStream, segments = [], polygon = [], clean = true;
    }

    function polygonEnd() {
      var startInside = polygonInside(),
          cleanInside = clean && startInside,
          visible = (segments = Object(d3_array__WEBPACK_IMPORTED_MODULE_4__["merge"])(segments)).length;
      if (cleanInside || visible) {
        stream.polygonStart();
        if (cleanInside) {
          stream.lineStart();
          interpolate(null, null, 1, stream);
          stream.lineEnd();
        }
        if (visible) {
          Object(_rejoin__WEBPACK_IMPORTED_MODULE_3__["default"])(segments, compareIntersection, startInside, interpolate, stream);
        }
        stream.polygonEnd();
      }
      activeStream = stream, segments = polygon = ring = null;
    }

    function lineStart() {
      clipStream.point = linePoint;
      if (polygon) polygon.push(ring = []);
      first = true;
      v_ = false;
      x_ = y_ = NaN;
    }

    // TODO rather than special-case polygons, simply handle them separately.
    // Ideally, coincident intersection points should be jittered to avoid
    // clipping issues.
    function lineEnd() {
      if (segments) {
        linePoint(x__, y__);
        if (v__ && v_) bufferStream.rejoin();
        segments.push(bufferStream.result());
      }
      clipStream.point = point;
      if (v_) activeStream.lineEnd();
    }

    function linePoint(x, y) {
      var v = visible(x, y);
      if (polygon) ring.push([x, y]);
      if (first) {
        x__ = x, y__ = y, v__ = v;
        first = false;
        if (v) {
          activeStream.lineStart();
          activeStream.point(x, y);
        }
      } else {
        if (v && v_) activeStream.point(x, y);
        else {
          var a = [x_ = Math.max(clipMin, Math.min(clipMax, x_)), y_ = Math.max(clipMin, Math.min(clipMax, y_))],
              b = [x = Math.max(clipMin, Math.min(clipMax, x)), y = Math.max(clipMin, Math.min(clipMax, y))];
          if (Object(_line__WEBPACK_IMPORTED_MODULE_2__["default"])(a, b, x0, y0, x1, y1)) {
            if (!v_) {
              activeStream.lineStart();
              activeStream.point(a[0], a[1]);
            }
            activeStream.point(b[0], b[1]);
            if (!v) activeStream.lineEnd();
            clean = false;
          } else if (v) {
            activeStream.lineStart();
            activeStream.point(x, y);
            clean = false;
          }
        }
      }
      x_ = x, y_ = y, v_ = v;
    }

    return clipStream;
  };
}


/***/ }),

/***/ "./node_modules/d3-geo/src/clip/rejoin.js":
/*!************************************************!*\
  !*** ./node_modules/d3-geo/src/clip/rejoin.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pointEqual__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pointEqual */ "./node_modules/d3-geo/src/pointEqual.js");


function Intersection(point, points, other, entry) {
  this.x = point;
  this.z = points;
  this.o = other; // another intersection
  this.e = entry; // is an entry?
  this.v = false; // visited
  this.n = this.p = null; // next & previous
}

// A generalized polygon clipping algorithm: given a polygon that has been cut
// into its visible line segments, and rejoins the segments by interpolating
// along the clip edge.
/* harmony default export */ __webpack_exports__["default"] = (function(segments, compareIntersection, startInside, interpolate, stream) {
  var subject = [],
      clip = [],
      i,
      n;

  segments.forEach(function(segment) {
    if ((n = segment.length - 1) <= 0) return;
    var n, p0 = segment[0], p1 = segment[n], x;

    // If the first and last points of a segment are coincident, then treat as a
    // closed ring. TODO if all rings are closed, then the winding order of the
    // exterior ring should be checked.
    if (Object(_pointEqual__WEBPACK_IMPORTED_MODULE_0__["default"])(p0, p1)) {
      stream.lineStart();
      for (i = 0; i < n; ++i) stream.point((p0 = segment[i])[0], p0[1]);
      stream.lineEnd();
      return;
    }

    subject.push(x = new Intersection(p0, segment, null, true));
    clip.push(x.o = new Intersection(p0, null, x, false));
    subject.push(x = new Intersection(p1, segment, null, false));
    clip.push(x.o = new Intersection(p1, null, x, true));
  });

  if (!subject.length) return;

  clip.sort(compareIntersection);
  link(subject);
  link(clip);

  for (i = 0, n = clip.length; i < n; ++i) {
    clip[i].e = startInside = !startInside;
  }

  var start = subject[0],
      points,
      point;

  while (1) {
    // Find first unvisited intersection.
    var current = start,
        isSubject = true;
    while (current.v) if ((current = current.n) === start) return;
    points = current.z;
    stream.lineStart();
    do {
      current.v = current.o.v = true;
      if (current.e) {
        if (isSubject) {
          for (i = 0, n = points.length; i < n; ++i) stream.point((point = points[i])[0], point[1]);
        } else {
          interpolate(current.x, current.n.x, 1, stream);
        }
        current = current.n;
      } else {
        if (isSubject) {
          points = current.p.z;
          for (i = points.length - 1; i >= 0; --i) stream.point((point = points[i])[0], point[1]);
        } else {
          interpolate(current.x, current.p.x, -1, stream);
        }
        current = current.p;
      }
      current = current.o;
      points = current.z;
      isSubject = !isSubject;
    } while (!current.v);
    stream.lineEnd();
  }
});

function link(array) {
  if (!(n = array.length)) return;
  var n,
      i = 0,
      a = array[0],
      b;
  while (++i < n) {
    a.n = b = array[i];
    b.p = a;
    a = b;
  }
  a.n = b = array[0];
  b.p = a;
}


/***/ }),

/***/ "./node_modules/d3-geo/src/compose.js":
/*!********************************************!*\
  !*** ./node_modules/d3-geo/src/compose.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {

  function compose(x, y) {
    return x = a(x, y), b(x[0], x[1]);
  }

  if (a.invert && b.invert) compose.invert = function(x, y) {
    return x = b.invert(x, y), x && a.invert(x[0], x[1]);
  };

  return compose;
});


/***/ }),

/***/ "./node_modules/d3-geo/src/constant.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-geo/src/constant.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),

/***/ "./node_modules/d3-geo/src/contains.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-geo/src/contains.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polygonContains__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polygonContains */ "./node_modules/d3-geo/src/polygonContains.js");
/* harmony import */ var _distance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./distance */ "./node_modules/d3-geo/src/distance.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./math */ "./node_modules/d3-geo/src/math.js");




var containsObjectType = {
  Feature: function(object, point) {
    return containsGeometry(object.geometry, point);
  },
  FeatureCollection: function(object, point) {
    var features = object.features, i = -1, n = features.length;
    while (++i < n) if (containsGeometry(features[i].geometry, point)) return true;
    return false;
  }
};

var containsGeometryType = {
  Sphere: function() {
    return true;
  },
  Point: function(object, point) {
    return containsPoint(object.coordinates, point);
  },
  MultiPoint: function(object, point) {
    var coordinates = object.coordinates, i = -1, n = coordinates.length;
    while (++i < n) if (containsPoint(coordinates[i], point)) return true;
    return false;
  },
  LineString: function(object, point) {
    return containsLine(object.coordinates, point);
  },
  MultiLineString: function(object, point) {
    var coordinates = object.coordinates, i = -1, n = coordinates.length;
    while (++i < n) if (containsLine(coordinates[i], point)) return true;
    return false;
  },
  Polygon: function(object, point) {
    return containsPolygon(object.coordinates, point);
  },
  MultiPolygon: function(object, point) {
    var coordinates = object.coordinates, i = -1, n = coordinates.length;
    while (++i < n) if (containsPolygon(coordinates[i], point)) return true;
    return false;
  },
  GeometryCollection: function(object, point) {
    var geometries = object.geometries, i = -1, n = geometries.length;
    while (++i < n) if (containsGeometry(geometries[i], point)) return true;
    return false;
  }
};

function containsGeometry(geometry, point) {
  return geometry && containsGeometryType.hasOwnProperty(geometry.type)
      ? containsGeometryType[geometry.type](geometry, point)
      : false;
}

function containsPoint(coordinates, point) {
  return Object(_distance__WEBPACK_IMPORTED_MODULE_1__["default"])(coordinates, point) === 0;
}

function containsLine(coordinates, point) {
  var ab = Object(_distance__WEBPACK_IMPORTED_MODULE_1__["default"])(coordinates[0], coordinates[1]),
      ao = Object(_distance__WEBPACK_IMPORTED_MODULE_1__["default"])(coordinates[0], point),
      ob = Object(_distance__WEBPACK_IMPORTED_MODULE_1__["default"])(point, coordinates[1]);
  return ao + ob <= ab + _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"];
}

function containsPolygon(coordinates, point) {
  return !!Object(_polygonContains__WEBPACK_IMPORTED_MODULE_0__["default"])(coordinates.map(ringRadians), pointRadians(point));
}

function ringRadians(ring) {
  return ring = ring.map(pointRadians), ring.pop(), ring;
}

function pointRadians(point) {
  return [point[0] * _math__WEBPACK_IMPORTED_MODULE_2__["radians"], point[1] * _math__WEBPACK_IMPORTED_MODULE_2__["radians"]];
}

/* harmony default export */ __webpack_exports__["default"] = (function(object, point) {
  return (object && containsObjectType.hasOwnProperty(object.type)
      ? containsObjectType[object.type]
      : containsGeometry)(object, point);
});


/***/ }),

/***/ "./node_modules/d3-geo/src/distance.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-geo/src/distance.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _length__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./length */ "./node_modules/d3-geo/src/length.js");


var coordinates = [null, null],
    object = {type: "LineString", coordinates: coordinates};

/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  coordinates[0] = a;
  coordinates[1] = b;
  return Object(_length__WEBPACK_IMPORTED_MODULE_0__["default"])(object);
});


/***/ }),

/***/ "./node_modules/d3-geo/src/graticule.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-geo/src/graticule.js ***!
  \**********************************************/
/*! exports provided: default, graticule10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return graticule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "graticule10", function() { return graticule10; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math */ "./node_modules/d3-geo/src/math.js");



function graticuleX(y0, y1, dy) {
  var y = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["range"])(y0, y1 - _math__WEBPACK_IMPORTED_MODULE_1__["epsilon"], dy).concat(y1);
  return function(x) { return y.map(function(y) { return [x, y]; }); };
}

function graticuleY(x0, x1, dx) {
  var x = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["range"])(x0, x1 - _math__WEBPACK_IMPORTED_MODULE_1__["epsilon"], dx).concat(x1);
  return function(y) { return x.map(function(x) { return [x, y]; }); };
}

function graticule() {
  var x1, x0, X1, X0,
      y1, y0, Y1, Y0,
      dx = 10, dy = dx, DX = 90, DY = 360,
      x, y, X, Y,
      precision = 2.5;

  function graticule() {
    return {type: "MultiLineString", coordinates: lines()};
  }

  function lines() {
    return Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["range"])(Object(_math__WEBPACK_IMPORTED_MODULE_1__["ceil"])(X0 / DX) * DX, X1, DX).map(X)
        .concat(Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["range"])(Object(_math__WEBPACK_IMPORTED_MODULE_1__["ceil"])(Y0 / DY) * DY, Y1, DY).map(Y))
        .concat(Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["range"])(Object(_math__WEBPACK_IMPORTED_MODULE_1__["ceil"])(x0 / dx) * dx, x1, dx).filter(function(x) { return Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(x % DX) > _math__WEBPACK_IMPORTED_MODULE_1__["epsilon"]; }).map(x))
        .concat(Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["range"])(Object(_math__WEBPACK_IMPORTED_MODULE_1__["ceil"])(y0 / dy) * dy, y1, dy).filter(function(y) { return Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(y % DY) > _math__WEBPACK_IMPORTED_MODULE_1__["epsilon"]; }).map(y));
  }

  graticule.lines = function() {
    return lines().map(function(coordinates) { return {type: "LineString", coordinates: coordinates}; });
  };

  graticule.outline = function() {
    return {
      type: "Polygon",
      coordinates: [
        X(X0).concat(
        Y(Y1).slice(1),
        X(X1).reverse().slice(1),
        Y(Y0).reverse().slice(1))
      ]
    };
  };

  graticule.extent = function(_) {
    if (!arguments.length) return graticule.extentMinor();
    return graticule.extentMajor(_).extentMinor(_);
  };

  graticule.extentMajor = function(_) {
    if (!arguments.length) return [[X0, Y0], [X1, Y1]];
    X0 = +_[0][0], X1 = +_[1][0];
    Y0 = +_[0][1], Y1 = +_[1][1];
    if (X0 > X1) _ = X0, X0 = X1, X1 = _;
    if (Y0 > Y1) _ = Y0, Y0 = Y1, Y1 = _;
    return graticule.precision(precision);
  };

  graticule.extentMinor = function(_) {
    if (!arguments.length) return [[x0, y0], [x1, y1]];
    x0 = +_[0][0], x1 = +_[1][0];
    y0 = +_[0][1], y1 = +_[1][1];
    if (x0 > x1) _ = x0, x0 = x1, x1 = _;
    if (y0 > y1) _ = y0, y0 = y1, y1 = _;
    return graticule.precision(precision);
  };

  graticule.step = function(_) {
    if (!arguments.length) return graticule.stepMinor();
    return graticule.stepMajor(_).stepMinor(_);
  };

  graticule.stepMajor = function(_) {
    if (!arguments.length) return [DX, DY];
    DX = +_[0], DY = +_[1];
    return graticule;
  };

  graticule.stepMinor = function(_) {
    if (!arguments.length) return [dx, dy];
    dx = +_[0], dy = +_[1];
    return graticule;
  };

  graticule.precision = function(_) {
    if (!arguments.length) return precision;
    precision = +_;
    x = graticuleX(y0, y1, 90);
    y = graticuleY(x0, x1, precision);
    X = graticuleX(Y0, Y1, 90);
    Y = graticuleY(X0, X1, precision);
    return graticule;
  };

  return graticule
      .extentMajor([[-180, -90 + _math__WEBPACK_IMPORTED_MODULE_1__["epsilon"]], [180, 90 - _math__WEBPACK_IMPORTED_MODULE_1__["epsilon"]]])
      .extentMinor([[-180, -80 - _math__WEBPACK_IMPORTED_MODULE_1__["epsilon"]], [180, 80 + _math__WEBPACK_IMPORTED_MODULE_1__["epsilon"]]]);
}

function graticule10() {
  return graticule()();
}


/***/ }),

/***/ "./node_modules/d3-geo/src/identity.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-geo/src/identity.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return x;
});


/***/ }),

/***/ "./node_modules/d3-geo/src/index.js":
/*!******************************************!*\
  !*** ./node_modules/d3-geo/src/index.js ***!
  \******************************************/
/*! exports provided: geoArea, geoBounds, geoCentroid, geoCircle, geoClipAntimeridian, geoClipCircle, geoClipExtent, geoClipRectangle, geoContains, geoDistance, geoGraticule, geoGraticule10, geoInterpolate, geoLength, geoPath, geoAlbers, geoAlbersUsa, geoAzimuthalEqualArea, geoAzimuthalEqualAreaRaw, geoAzimuthalEquidistant, geoAzimuthalEquidistantRaw, geoConicConformal, geoConicConformalRaw, geoConicEqualArea, geoConicEqualAreaRaw, geoConicEquidistant, geoConicEquidistantRaw, geoEqualEarth, geoEqualEarthRaw, geoEquirectangular, geoEquirectangularRaw, geoGnomonic, geoGnomonicRaw, geoIdentity, geoProjection, geoProjectionMutator, geoMercator, geoMercatorRaw, geoNaturalEarth1, geoNaturalEarth1Raw, geoOrthographic, geoOrthographicRaw, geoStereographic, geoStereographicRaw, geoTransverseMercator, geoTransverseMercatorRaw, geoRotation, geoStream, geoTransform */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _area__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./area */ "./node_modules/d3-geo/src/area.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoArea", function() { return _area__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _bounds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bounds */ "./node_modules/d3-geo/src/bounds.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoBounds", function() { return _bounds__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _centroid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./centroid */ "./node_modules/d3-geo/src/centroid.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoCentroid", function() { return _centroid__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _circle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./circle */ "./node_modules/d3-geo/src/circle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoCircle", function() { return _circle__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _clip_antimeridian__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./clip/antimeridian */ "./node_modules/d3-geo/src/clip/antimeridian.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoClipAntimeridian", function() { return _clip_antimeridian__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _clip_circle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./clip/circle */ "./node_modules/d3-geo/src/clip/circle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoClipCircle", function() { return _clip_circle__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _clip_extent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./clip/extent */ "./node_modules/d3-geo/src/clip/extent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoClipExtent", function() { return _clip_extent__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _clip_rectangle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./clip/rectangle */ "./node_modules/d3-geo/src/clip/rectangle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoClipRectangle", function() { return _clip_rectangle__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _contains__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contains */ "./node_modules/d3-geo/src/contains.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoContains", function() { return _contains__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _distance__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./distance */ "./node_modules/d3-geo/src/distance.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoDistance", function() { return _distance__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _graticule__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./graticule */ "./node_modules/d3-geo/src/graticule.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoGraticule", function() { return _graticule__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoGraticule10", function() { return _graticule__WEBPACK_IMPORTED_MODULE_10__["graticule10"]; });

/* harmony import */ var _interpolate__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./interpolate */ "./node_modules/d3-geo/src/interpolate.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoInterpolate", function() { return _interpolate__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _length__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./length */ "./node_modules/d3-geo/src/length.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoLength", function() { return _length__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _path_index__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./path/index */ "./node_modules/d3-geo/src/path/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoPath", function() { return _path_index__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _projection_albers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./projection/albers */ "./node_modules/d3-geo/src/projection/albers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoAlbers", function() { return _projection_albers__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _projection_albersUsa__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./projection/albersUsa */ "./node_modules/d3-geo/src/projection/albersUsa.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoAlbersUsa", function() { return _projection_albersUsa__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _projection_azimuthalEqualArea__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./projection/azimuthalEqualArea */ "./node_modules/d3-geo/src/projection/azimuthalEqualArea.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoAzimuthalEqualArea", function() { return _projection_azimuthalEqualArea__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoAzimuthalEqualAreaRaw", function() { return _projection_azimuthalEqualArea__WEBPACK_IMPORTED_MODULE_16__["azimuthalEqualAreaRaw"]; });

/* harmony import */ var _projection_azimuthalEquidistant__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./projection/azimuthalEquidistant */ "./node_modules/d3-geo/src/projection/azimuthalEquidistant.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoAzimuthalEquidistant", function() { return _projection_azimuthalEquidistant__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoAzimuthalEquidistantRaw", function() { return _projection_azimuthalEquidistant__WEBPACK_IMPORTED_MODULE_17__["azimuthalEquidistantRaw"]; });

/* harmony import */ var _projection_conicConformal__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./projection/conicConformal */ "./node_modules/d3-geo/src/projection/conicConformal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoConicConformal", function() { return _projection_conicConformal__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoConicConformalRaw", function() { return _projection_conicConformal__WEBPACK_IMPORTED_MODULE_18__["conicConformalRaw"]; });

/* harmony import */ var _projection_conicEqualArea__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./projection/conicEqualArea */ "./node_modules/d3-geo/src/projection/conicEqualArea.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoConicEqualArea", function() { return _projection_conicEqualArea__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoConicEqualAreaRaw", function() { return _projection_conicEqualArea__WEBPACK_IMPORTED_MODULE_19__["conicEqualAreaRaw"]; });

/* harmony import */ var _projection_conicEquidistant__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./projection/conicEquidistant */ "./node_modules/d3-geo/src/projection/conicEquidistant.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoConicEquidistant", function() { return _projection_conicEquidistant__WEBPACK_IMPORTED_MODULE_20__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoConicEquidistantRaw", function() { return _projection_conicEquidistant__WEBPACK_IMPORTED_MODULE_20__["conicEquidistantRaw"]; });

/* harmony import */ var _projection_equalEarth__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./projection/equalEarth */ "./node_modules/d3-geo/src/projection/equalEarth.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoEqualEarth", function() { return _projection_equalEarth__WEBPACK_IMPORTED_MODULE_21__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoEqualEarthRaw", function() { return _projection_equalEarth__WEBPACK_IMPORTED_MODULE_21__["equalEarthRaw"]; });

/* harmony import */ var _projection_equirectangular__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./projection/equirectangular */ "./node_modules/d3-geo/src/projection/equirectangular.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoEquirectangular", function() { return _projection_equirectangular__WEBPACK_IMPORTED_MODULE_22__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoEquirectangularRaw", function() { return _projection_equirectangular__WEBPACK_IMPORTED_MODULE_22__["equirectangularRaw"]; });

/* harmony import */ var _projection_gnomonic__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./projection/gnomonic */ "./node_modules/d3-geo/src/projection/gnomonic.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoGnomonic", function() { return _projection_gnomonic__WEBPACK_IMPORTED_MODULE_23__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoGnomonicRaw", function() { return _projection_gnomonic__WEBPACK_IMPORTED_MODULE_23__["gnomonicRaw"]; });

/* harmony import */ var _projection_identity__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./projection/identity */ "./node_modules/d3-geo/src/projection/identity.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoIdentity", function() { return _projection_identity__WEBPACK_IMPORTED_MODULE_24__["default"]; });

/* harmony import */ var _projection_index__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./projection/index */ "./node_modules/d3-geo/src/projection/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoProjection", function() { return _projection_index__WEBPACK_IMPORTED_MODULE_25__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoProjectionMutator", function() { return _projection_index__WEBPACK_IMPORTED_MODULE_25__["projectionMutator"]; });

/* harmony import */ var _projection_mercator__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./projection/mercator */ "./node_modules/d3-geo/src/projection/mercator.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoMercator", function() { return _projection_mercator__WEBPACK_IMPORTED_MODULE_26__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoMercatorRaw", function() { return _projection_mercator__WEBPACK_IMPORTED_MODULE_26__["mercatorRaw"]; });

/* harmony import */ var _projection_naturalEarth1__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./projection/naturalEarth1 */ "./node_modules/d3-geo/src/projection/naturalEarth1.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoNaturalEarth1", function() { return _projection_naturalEarth1__WEBPACK_IMPORTED_MODULE_27__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoNaturalEarth1Raw", function() { return _projection_naturalEarth1__WEBPACK_IMPORTED_MODULE_27__["naturalEarth1Raw"]; });

/* harmony import */ var _projection_orthographic__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./projection/orthographic */ "./node_modules/d3-geo/src/projection/orthographic.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoOrthographic", function() { return _projection_orthographic__WEBPACK_IMPORTED_MODULE_28__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoOrthographicRaw", function() { return _projection_orthographic__WEBPACK_IMPORTED_MODULE_28__["orthographicRaw"]; });

/* harmony import */ var _projection_stereographic__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./projection/stereographic */ "./node_modules/d3-geo/src/projection/stereographic.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoStereographic", function() { return _projection_stereographic__WEBPACK_IMPORTED_MODULE_29__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoStereographicRaw", function() { return _projection_stereographic__WEBPACK_IMPORTED_MODULE_29__["stereographicRaw"]; });

/* harmony import */ var _projection_transverseMercator__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./projection/transverseMercator */ "./node_modules/d3-geo/src/projection/transverseMercator.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoTransverseMercator", function() { return _projection_transverseMercator__WEBPACK_IMPORTED_MODULE_30__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoTransverseMercatorRaw", function() { return _projection_transverseMercator__WEBPACK_IMPORTED_MODULE_30__["transverseMercatorRaw"]; });

/* harmony import */ var _rotation__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./rotation */ "./node_modules/d3-geo/src/rotation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoRotation", function() { return _rotation__WEBPACK_IMPORTED_MODULE_31__["default"]; });

/* harmony import */ var _stream__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./stream */ "./node_modules/d3-geo/src/stream.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoStream", function() { return _stream__WEBPACK_IMPORTED_MODULE_32__["default"]; });

/* harmony import */ var _transform__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./transform */ "./node_modules/d3-geo/src/transform.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "geoTransform", function() { return _transform__WEBPACK_IMPORTED_MODULE_33__["default"]; });







 // DEPRECATED! Use d3.geoIdentity().clipExtent(…).





























/***/ }),

/***/ "./node_modules/d3-geo/src/interpolate.js":
/*!************************************************!*\
  !*** ./node_modules/d3-geo/src/interpolate.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math */ "./node_modules/d3-geo/src/math.js");


/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  var x0 = a[0] * _math__WEBPACK_IMPORTED_MODULE_0__["radians"],
      y0 = a[1] * _math__WEBPACK_IMPORTED_MODULE_0__["radians"],
      x1 = b[0] * _math__WEBPACK_IMPORTED_MODULE_0__["radians"],
      y1 = b[1] * _math__WEBPACK_IMPORTED_MODULE_0__["radians"],
      cy0 = Object(_math__WEBPACK_IMPORTED_MODULE_0__["cos"])(y0),
      sy0 = Object(_math__WEBPACK_IMPORTED_MODULE_0__["sin"])(y0),
      cy1 = Object(_math__WEBPACK_IMPORTED_MODULE_0__["cos"])(y1),
      sy1 = Object(_math__WEBPACK_IMPORTED_MODULE_0__["sin"])(y1),
      kx0 = cy0 * Object(_math__WEBPACK_IMPORTED_MODULE_0__["cos"])(x0),
      ky0 = cy0 * Object(_math__WEBPACK_IMPORTED_MODULE_0__["sin"])(x0),
      kx1 = cy1 * Object(_math__WEBPACK_IMPORTED_MODULE_0__["cos"])(x1),
      ky1 = cy1 * Object(_math__WEBPACK_IMPORTED_MODULE_0__["sin"])(x1),
      d = 2 * Object(_math__WEBPACK_IMPORTED_MODULE_0__["asin"])(Object(_math__WEBPACK_IMPORTED_MODULE_0__["sqrt"])(Object(_math__WEBPACK_IMPORTED_MODULE_0__["haversin"])(y1 - y0) + cy0 * cy1 * Object(_math__WEBPACK_IMPORTED_MODULE_0__["haversin"])(x1 - x0))),
      k = Object(_math__WEBPACK_IMPORTED_MODULE_0__["sin"])(d);

  var interpolate = d ? function(t) {
    var B = Object(_math__WEBPACK_IMPORTED_MODULE_0__["sin"])(t *= d) / k,
        A = Object(_math__WEBPACK_IMPORTED_MODULE_0__["sin"])(d - t) / k,
        x = A * kx0 + B * kx1,
        y = A * ky0 + B * ky1,
        z = A * sy0 + B * sy1;
    return [
      Object(_math__WEBPACK_IMPORTED_MODULE_0__["atan2"])(y, x) * _math__WEBPACK_IMPORTED_MODULE_0__["degrees"],
      Object(_math__WEBPACK_IMPORTED_MODULE_0__["atan2"])(z, Object(_math__WEBPACK_IMPORTED_MODULE_0__["sqrt"])(x * x + y * y)) * _math__WEBPACK_IMPORTED_MODULE_0__["degrees"]
    ];
  } : function() {
    return [x0 * _math__WEBPACK_IMPORTED_MODULE_0__["degrees"], y0 * _math__WEBPACK_IMPORTED_MODULE_0__["degrees"]];
  };

  interpolate.distance = d;

  return interpolate;
});


/***/ }),

/***/ "./node_modules/d3-geo/src/length.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-geo/src/length.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _adder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adder */ "./node_modules/d3-geo/src/adder.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math */ "./node_modules/d3-geo/src/math.js");
/* harmony import */ var _noop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./noop */ "./node_modules/d3-geo/src/noop.js");
/* harmony import */ var _stream__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stream */ "./node_modules/d3-geo/src/stream.js");





var lengthSum = Object(_adder__WEBPACK_IMPORTED_MODULE_0__["default"])(),
    lambda0,
    sinPhi0,
    cosPhi0;

var lengthStream = {
  sphere: _noop__WEBPACK_IMPORTED_MODULE_2__["default"],
  point: _noop__WEBPACK_IMPORTED_MODULE_2__["default"],
  lineStart: lengthLineStart,
  lineEnd: _noop__WEBPACK_IMPORTED_MODULE_2__["default"],
  polygonStart: _noop__WEBPACK_IMPORTED_MODULE_2__["default"],
  polygonEnd: _noop__WEBPACK_IMPORTED_MODULE_2__["default"]
};

function lengthLineStart() {
  lengthStream.point = lengthPointFirst;
  lengthStream.lineEnd = lengthLineEnd;
}

function lengthLineEnd() {
  lengthStream.point = lengthStream.lineEnd = _noop__WEBPACK_IMPORTED_MODULE_2__["default"];
}

function lengthPointFirst(lambda, phi) {
  lambda *= _math__WEBPACK_IMPORTED_MODULE_1__["radians"], phi *= _math__WEBPACK_IMPORTED_MODULE_1__["radians"];
  lambda0 = lambda, sinPhi0 = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(phi), cosPhi0 = Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(phi);
  lengthStream.point = lengthPoint;
}

function lengthPoint(lambda, phi) {
  lambda *= _math__WEBPACK_IMPORTED_MODULE_1__["radians"], phi *= _math__WEBPACK_IMPORTED_MODULE_1__["radians"];
  var sinPhi = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(phi),
      cosPhi = Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(phi),
      delta = Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(lambda - lambda0),
      cosDelta = Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(delta),
      sinDelta = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(delta),
      x = cosPhi * sinDelta,
      y = cosPhi0 * sinPhi - sinPhi0 * cosPhi * cosDelta,
      z = sinPhi0 * sinPhi + cosPhi0 * cosPhi * cosDelta;
  lengthSum.add(Object(_math__WEBPACK_IMPORTED_MODULE_1__["atan2"])(Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(x * x + y * y), z));
  lambda0 = lambda, sinPhi0 = sinPhi, cosPhi0 = cosPhi;
}

/* harmony default export */ __webpack_exports__["default"] = (function(object) {
  lengthSum.reset();
  Object(_stream__WEBPACK_IMPORTED_MODULE_3__["default"])(object, lengthStream);
  return +lengthSum;
});


/***/ }),

/***/ "./node_modules/d3-geo/src/math.js":
/*!*****************************************!*\
  !*** ./node_modules/d3-geo/src/math.js ***!
  \*****************************************/
/*! exports provided: epsilon, epsilon2, pi, halfPi, quarterPi, tau, degrees, radians, abs, atan, atan2, cos, ceil, exp, floor, log, pow, sin, sign, sqrt, tan, acos, asin, haversin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "epsilon", function() { return epsilon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "epsilon2", function() { return epsilon2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pi", function() { return pi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "halfPi", function() { return halfPi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quarterPi", function() { return quarterPi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tau", function() { return tau; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "degrees", function() { return degrees; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "radians", function() { return radians; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "abs", function() { return abs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "atan", function() { return atan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "atan2", function() { return atan2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cos", function() { return cos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ceil", function() { return ceil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exp", function() { return exp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "floor", function() { return floor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pow", function() { return pow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sin", function() { return sin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sign", function() { return sign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrt", function() { return sqrt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tan", function() { return tan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "acos", function() { return acos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asin", function() { return asin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "haversin", function() { return haversin; });
var epsilon = 1e-6;
var epsilon2 = 1e-12;
var pi = Math.PI;
var halfPi = pi / 2;
var quarterPi = pi / 4;
var tau = pi * 2;

var degrees = 180 / pi;
var radians = pi / 180;

var abs = Math.abs;
var atan = Math.atan;
var atan2 = Math.atan2;
var cos = Math.cos;
var ceil = Math.ceil;
var exp = Math.exp;
var floor = Math.floor;
var log = Math.log;
var pow = Math.pow;
var sin = Math.sin;
var sign = Math.sign || function(x) { return x > 0 ? 1 : x < 0 ? -1 : 0; };
var sqrt = Math.sqrt;
var tan = Math.tan;

function acos(x) {
  return x > 1 ? 0 : x < -1 ? pi : Math.acos(x);
}

function asin(x) {
  return x > 1 ? halfPi : x < -1 ? -halfPi : Math.asin(x);
}

function haversin(x) {
  return (x = sin(x / 2)) * x;
}


/***/ }),

/***/ "./node_modules/d3-geo/src/noop.js":
/*!*****************************************!*\
  !*** ./node_modules/d3-geo/src/noop.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return noop; });
function noop() {}


/***/ }),

/***/ "./node_modules/d3-geo/src/path/area.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-geo/src/path/area.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _adder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../adder */ "./node_modules/d3-geo/src/adder.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math */ "./node_modules/d3-geo/src/math.js");
/* harmony import */ var _noop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../noop */ "./node_modules/d3-geo/src/noop.js");




var areaSum = Object(_adder__WEBPACK_IMPORTED_MODULE_0__["default"])(),
    areaRingSum = Object(_adder__WEBPACK_IMPORTED_MODULE_0__["default"])(),
    x00,
    y00,
    x0,
    y0;

var areaStream = {
  point: _noop__WEBPACK_IMPORTED_MODULE_2__["default"],
  lineStart: _noop__WEBPACK_IMPORTED_MODULE_2__["default"],
  lineEnd: _noop__WEBPACK_IMPORTED_MODULE_2__["default"],
  polygonStart: function() {
    areaStream.lineStart = areaRingStart;
    areaStream.lineEnd = areaRingEnd;
  },
  polygonEnd: function() {
    areaStream.lineStart = areaStream.lineEnd = areaStream.point = _noop__WEBPACK_IMPORTED_MODULE_2__["default"];
    areaSum.add(Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(areaRingSum));
    areaRingSum.reset();
  },
  result: function() {
    var area = areaSum / 2;
    areaSum.reset();
    return area;
  }
};

function areaRingStart() {
  areaStream.point = areaPointFirst;
}

function areaPointFirst(x, y) {
  areaStream.point = areaPoint;
  x00 = x0 = x, y00 = y0 = y;
}

function areaPoint(x, y) {
  areaRingSum.add(y0 * x - x0 * y);
  x0 = x, y0 = y;
}

function areaRingEnd() {
  areaPoint(x00, y00);
}

/* harmony default export */ __webpack_exports__["default"] = (areaStream);


/***/ }),

/***/ "./node_modules/d3-geo/src/path/bounds.js":
/*!************************************************!*\
  !*** ./node_modules/d3-geo/src/path/bounds.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _noop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../noop */ "./node_modules/d3-geo/src/noop.js");


var x0 = Infinity,
    y0 = x0,
    x1 = -x0,
    y1 = x1;

var boundsStream = {
  point: boundsPoint,
  lineStart: _noop__WEBPACK_IMPORTED_MODULE_0__["default"],
  lineEnd: _noop__WEBPACK_IMPORTED_MODULE_0__["default"],
  polygonStart: _noop__WEBPACK_IMPORTED_MODULE_0__["default"],
  polygonEnd: _noop__WEBPACK_IMPORTED_MODULE_0__["default"],
  result: function() {
    var bounds = [[x0, y0], [x1, y1]];
    x1 = y1 = -(y0 = x0 = Infinity);
    return bounds;
  }
};

function boundsPoint(x, y) {
  if (x < x0) x0 = x;
  if (x > x1) x1 = x;
  if (y < y0) y0 = y;
  if (y > y1) y1 = y;
}

/* harmony default export */ __webpack_exports__["default"] = (boundsStream);


/***/ }),

/***/ "./node_modules/d3-geo/src/path/centroid.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-geo/src/path/centroid.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math */ "./node_modules/d3-geo/src/math.js");


// TODO Enforce positive area for exterior, negative area for interior?

var X0 = 0,
    Y0 = 0,
    Z0 = 0,
    X1 = 0,
    Y1 = 0,
    Z1 = 0,
    X2 = 0,
    Y2 = 0,
    Z2 = 0,
    x00,
    y00,
    x0,
    y0;

var centroidStream = {
  point: centroidPoint,
  lineStart: centroidLineStart,
  lineEnd: centroidLineEnd,
  polygonStart: function() {
    centroidStream.lineStart = centroidRingStart;
    centroidStream.lineEnd = centroidRingEnd;
  },
  polygonEnd: function() {
    centroidStream.point = centroidPoint;
    centroidStream.lineStart = centroidLineStart;
    centroidStream.lineEnd = centroidLineEnd;
  },
  result: function() {
    var centroid = Z2 ? [X2 / Z2, Y2 / Z2]
        : Z1 ? [X1 / Z1, Y1 / Z1]
        : Z0 ? [X0 / Z0, Y0 / Z0]
        : [NaN, NaN];
    X0 = Y0 = Z0 =
    X1 = Y1 = Z1 =
    X2 = Y2 = Z2 = 0;
    return centroid;
  }
};

function centroidPoint(x, y) {
  X0 += x;
  Y0 += y;
  ++Z0;
}

function centroidLineStart() {
  centroidStream.point = centroidPointFirstLine;
}

function centroidPointFirstLine(x, y) {
  centroidStream.point = centroidPointLine;
  centroidPoint(x0 = x, y0 = y);
}

function centroidPointLine(x, y) {
  var dx = x - x0, dy = y - y0, z = Object(_math__WEBPACK_IMPORTED_MODULE_0__["sqrt"])(dx * dx + dy * dy);
  X1 += z * (x0 + x) / 2;
  Y1 += z * (y0 + y) / 2;
  Z1 += z;
  centroidPoint(x0 = x, y0 = y);
}

function centroidLineEnd() {
  centroidStream.point = centroidPoint;
}

function centroidRingStart() {
  centroidStream.point = centroidPointFirstRing;
}

function centroidRingEnd() {
  centroidPointRing(x00, y00);
}

function centroidPointFirstRing(x, y) {
  centroidStream.point = centroidPointRing;
  centroidPoint(x00 = x0 = x, y00 = y0 = y);
}

function centroidPointRing(x, y) {
  var dx = x - x0,
      dy = y - y0,
      z = Object(_math__WEBPACK_IMPORTED_MODULE_0__["sqrt"])(dx * dx + dy * dy);

  X1 += z * (x0 + x) / 2;
  Y1 += z * (y0 + y) / 2;
  Z1 += z;

  z = y0 * x - x0 * y;
  X2 += z * (x0 + x);
  Y2 += z * (y0 + y);
  Z2 += z * 3;
  centroidPoint(x0 = x, y0 = y);
}

/* harmony default export */ __webpack_exports__["default"] = (centroidStream);


/***/ }),

/***/ "./node_modules/d3-geo/src/path/context.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-geo/src/path/context.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PathContext; });
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math */ "./node_modules/d3-geo/src/math.js");
/* harmony import */ var _noop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../noop */ "./node_modules/d3-geo/src/noop.js");



function PathContext(context) {
  this._context = context;
}

PathContext.prototype = {
  _radius: 4.5,
  pointRadius: function(_) {
    return this._radius = _, this;
  },
  polygonStart: function() {
    this._line = 0;
  },
  polygonEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line === 0) this._context.closePath();
    this._point = NaN;
  },
  point: function(x, y) {
    switch (this._point) {
      case 0: {
        this._context.moveTo(x, y);
        this._point = 1;
        break;
      }
      case 1: {
        this._context.lineTo(x, y);
        break;
      }
      default: {
        this._context.moveTo(x + this._radius, y);
        this._context.arc(x, y, this._radius, 0, _math__WEBPACK_IMPORTED_MODULE_0__["tau"]);
        break;
      }
    }
  },
  result: _noop__WEBPACK_IMPORTED_MODULE_1__["default"]
};


/***/ }),

/***/ "./node_modules/d3-geo/src/path/index.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-geo/src/path/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../identity */ "./node_modules/d3-geo/src/identity.js");
/* harmony import */ var _stream__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../stream */ "./node_modules/d3-geo/src/stream.js");
/* harmony import */ var _area__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./area */ "./node_modules/d3-geo/src/path/area.js");
/* harmony import */ var _bounds__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bounds */ "./node_modules/d3-geo/src/path/bounds.js");
/* harmony import */ var _centroid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./centroid */ "./node_modules/d3-geo/src/path/centroid.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./context */ "./node_modules/d3-geo/src/path/context.js");
/* harmony import */ var _measure__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./measure */ "./node_modules/d3-geo/src/path/measure.js");
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./string */ "./node_modules/d3-geo/src/path/string.js");









/* harmony default export */ __webpack_exports__["default"] = (function(projection, context) {
  var pointRadius = 4.5,
      projectionStream,
      contextStream;

  function path(object) {
    if (object) {
      if (typeof pointRadius === "function") contextStream.pointRadius(+pointRadius.apply(this, arguments));
      Object(_stream__WEBPACK_IMPORTED_MODULE_1__["default"])(object, projectionStream(contextStream));
    }
    return contextStream.result();
  }

  path.area = function(object) {
    Object(_stream__WEBPACK_IMPORTED_MODULE_1__["default"])(object, projectionStream(_area__WEBPACK_IMPORTED_MODULE_2__["default"]));
    return _area__WEBPACK_IMPORTED_MODULE_2__["default"].result();
  };

  path.measure = function(object) {
    Object(_stream__WEBPACK_IMPORTED_MODULE_1__["default"])(object, projectionStream(_measure__WEBPACK_IMPORTED_MODULE_6__["default"]));
    return _measure__WEBPACK_IMPORTED_MODULE_6__["default"].result();
  };

  path.bounds = function(object) {
    Object(_stream__WEBPACK_IMPORTED_MODULE_1__["default"])(object, projectionStream(_bounds__WEBPACK_IMPORTED_MODULE_3__["default"]));
    return _bounds__WEBPACK_IMPORTED_MODULE_3__["default"].result();
  };

  path.centroid = function(object) {
    Object(_stream__WEBPACK_IMPORTED_MODULE_1__["default"])(object, projectionStream(_centroid__WEBPACK_IMPORTED_MODULE_4__["default"]));
    return _centroid__WEBPACK_IMPORTED_MODULE_4__["default"].result();
  };

  path.projection = function(_) {
    return arguments.length ? (projectionStream = _ == null ? (projection = null, _identity__WEBPACK_IMPORTED_MODULE_0__["default"]) : (projection = _).stream, path) : projection;
  };

  path.context = function(_) {
    if (!arguments.length) return context;
    contextStream = _ == null ? (context = null, new _string__WEBPACK_IMPORTED_MODULE_7__["default"]) : new _context__WEBPACK_IMPORTED_MODULE_5__["default"](context = _);
    if (typeof pointRadius !== "function") contextStream.pointRadius(pointRadius);
    return path;
  };

  path.pointRadius = function(_) {
    if (!arguments.length) return pointRadius;
    pointRadius = typeof _ === "function" ? _ : (contextStream.pointRadius(+_), +_);
    return path;
  };

  return path.projection(projection).context(context);
});


/***/ }),

/***/ "./node_modules/d3-geo/src/path/measure.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-geo/src/path/measure.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _adder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../adder */ "./node_modules/d3-geo/src/adder.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math */ "./node_modules/d3-geo/src/math.js");
/* harmony import */ var _noop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../noop */ "./node_modules/d3-geo/src/noop.js");




var lengthSum = Object(_adder__WEBPACK_IMPORTED_MODULE_0__["default"])(),
    lengthRing,
    x00,
    y00,
    x0,
    y0;

var lengthStream = {
  point: _noop__WEBPACK_IMPORTED_MODULE_2__["default"],
  lineStart: function() {
    lengthStream.point = lengthPointFirst;
  },
  lineEnd: function() {
    if (lengthRing) lengthPoint(x00, y00);
    lengthStream.point = _noop__WEBPACK_IMPORTED_MODULE_2__["default"];
  },
  polygonStart: function() {
    lengthRing = true;
  },
  polygonEnd: function() {
    lengthRing = null;
  },
  result: function() {
    var length = +lengthSum;
    lengthSum.reset();
    return length;
  }
};

function lengthPointFirst(x, y) {
  lengthStream.point = lengthPoint;
  x00 = x0 = x, y00 = y0 = y;
}

function lengthPoint(x, y) {
  x0 -= x, y0 -= y;
  lengthSum.add(Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(x0 * x0 + y0 * y0));
  x0 = x, y0 = y;
}

/* harmony default export */ __webpack_exports__["default"] = (lengthStream);


/***/ }),

/***/ "./node_modules/d3-geo/src/path/string.js":
/*!************************************************!*\
  !*** ./node_modules/d3-geo/src/path/string.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PathString; });
function PathString() {
  this._string = [];
}

PathString.prototype = {
  _radius: 4.5,
  _circle: circle(4.5),
  pointRadius: function(_) {
    if ((_ = +_) !== this._radius) this._radius = _, this._circle = null;
    return this;
  },
  polygonStart: function() {
    this._line = 0;
  },
  polygonEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line === 0) this._string.push("Z");
    this._point = NaN;
  },
  point: function(x, y) {
    switch (this._point) {
      case 0: {
        this._string.push("M", x, ",", y);
        this._point = 1;
        break;
      }
      case 1: {
        this._string.push("L", x, ",", y);
        break;
      }
      default: {
        if (this._circle == null) this._circle = circle(this._radius);
        this._string.push("M", x, ",", y, this._circle);
        break;
      }
    }
  },
  result: function() {
    if (this._string.length) {
      var result = this._string.join("");
      this._string = [];
      return result;
    } else {
      return null;
    }
  }
};

function circle(radius) {
  return "m0," + radius
      + "a" + radius + "," + radius + " 0 1,1 0," + -2 * radius
      + "a" + radius + "," + radius + " 0 1,1 0," + 2 * radius
      + "z";
}


/***/ }),

/***/ "./node_modules/d3-geo/src/pointEqual.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-geo/src/pointEqual.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math */ "./node_modules/d3-geo/src/math.js");


/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  return Object(_math__WEBPACK_IMPORTED_MODULE_0__["abs"])(a[0] - b[0]) < _math__WEBPACK_IMPORTED_MODULE_0__["epsilon"] && Object(_math__WEBPACK_IMPORTED_MODULE_0__["abs"])(a[1] - b[1]) < _math__WEBPACK_IMPORTED_MODULE_0__["epsilon"];
});


/***/ }),

/***/ "./node_modules/d3-geo/src/polygonContains.js":
/*!****************************************************!*\
  !*** ./node_modules/d3-geo/src/polygonContains.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _adder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adder */ "./node_modules/d3-geo/src/adder.js");
/* harmony import */ var _cartesian__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cartesian */ "./node_modules/d3-geo/src/cartesian.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./math */ "./node_modules/d3-geo/src/math.js");




var sum = Object(_adder__WEBPACK_IMPORTED_MODULE_0__["default"])();

/* harmony default export */ __webpack_exports__["default"] = (function(polygon, point) {
  var lambda = point[0],
      phi = point[1],
      sinPhi = Object(_math__WEBPACK_IMPORTED_MODULE_2__["sin"])(phi),
      normal = [Object(_math__WEBPACK_IMPORTED_MODULE_2__["sin"])(lambda), -Object(_math__WEBPACK_IMPORTED_MODULE_2__["cos"])(lambda), 0],
      angle = 0,
      winding = 0;

  sum.reset();

  if (sinPhi === 1) phi = _math__WEBPACK_IMPORTED_MODULE_2__["halfPi"] + _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"];
  else if (sinPhi === -1) phi = -_math__WEBPACK_IMPORTED_MODULE_2__["halfPi"] - _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"];

  for (var i = 0, n = polygon.length; i < n; ++i) {
    if (!(m = (ring = polygon[i]).length)) continue;
    var ring,
        m,
        point0 = ring[m - 1],
        lambda0 = point0[0],
        phi0 = point0[1] / 2 + _math__WEBPACK_IMPORTED_MODULE_2__["quarterPi"],
        sinPhi0 = Object(_math__WEBPACK_IMPORTED_MODULE_2__["sin"])(phi0),
        cosPhi0 = Object(_math__WEBPACK_IMPORTED_MODULE_2__["cos"])(phi0);

    for (var j = 0; j < m; ++j, lambda0 = lambda1, sinPhi0 = sinPhi1, cosPhi0 = cosPhi1, point0 = point1) {
      var point1 = ring[j],
          lambda1 = point1[0],
          phi1 = point1[1] / 2 + _math__WEBPACK_IMPORTED_MODULE_2__["quarterPi"],
          sinPhi1 = Object(_math__WEBPACK_IMPORTED_MODULE_2__["sin"])(phi1),
          cosPhi1 = Object(_math__WEBPACK_IMPORTED_MODULE_2__["cos"])(phi1),
          delta = lambda1 - lambda0,
          sign = delta >= 0 ? 1 : -1,
          absDelta = sign * delta,
          antimeridian = absDelta > _math__WEBPACK_IMPORTED_MODULE_2__["pi"],
          k = sinPhi0 * sinPhi1;

      sum.add(Object(_math__WEBPACK_IMPORTED_MODULE_2__["atan2"])(k * sign * Object(_math__WEBPACK_IMPORTED_MODULE_2__["sin"])(absDelta), cosPhi0 * cosPhi1 + k * Object(_math__WEBPACK_IMPORTED_MODULE_2__["cos"])(absDelta)));
      angle += antimeridian ? delta + sign * _math__WEBPACK_IMPORTED_MODULE_2__["tau"] : delta;

      // Are the longitudes either side of the point’s meridian (lambda),
      // and are the latitudes smaller than the parallel (phi)?
      if (antimeridian ^ lambda0 >= lambda ^ lambda1 >= lambda) {
        var arc = Object(_cartesian__WEBPACK_IMPORTED_MODULE_1__["cartesianCross"])(Object(_cartesian__WEBPACK_IMPORTED_MODULE_1__["cartesian"])(point0), Object(_cartesian__WEBPACK_IMPORTED_MODULE_1__["cartesian"])(point1));
        Object(_cartesian__WEBPACK_IMPORTED_MODULE_1__["cartesianNormalizeInPlace"])(arc);
        var intersection = Object(_cartesian__WEBPACK_IMPORTED_MODULE_1__["cartesianCross"])(normal, arc);
        Object(_cartesian__WEBPACK_IMPORTED_MODULE_1__["cartesianNormalizeInPlace"])(intersection);
        var phiArc = (antimeridian ^ delta >= 0 ? -1 : 1) * Object(_math__WEBPACK_IMPORTED_MODULE_2__["asin"])(intersection[2]);
        if (phi > phiArc || phi === phiArc && (arc[0] || arc[1])) {
          winding += antimeridian ^ delta >= 0 ? 1 : -1;
        }
      }
    }
  }

  // First, determine whether the South pole is inside or outside:
  //
  // It is inside if:
  // * the polygon winds around it in a clockwise direction.
  // * the polygon does not (cumulatively) wind around it, but has a negative
  //   (counter-clockwise) area.
  //
  // Second, count the (signed) number of times a segment crosses a lambda
  // from the point to the South pole.  If it is zero, then the point is the
  // same side as the South pole.

  return (angle < -_math__WEBPACK_IMPORTED_MODULE_2__["epsilon"] || angle < _math__WEBPACK_IMPORTED_MODULE_2__["epsilon"] && sum < -_math__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) ^ (winding & 1);
});


/***/ }),

/***/ "./node_modules/d3-geo/src/projection/albers.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-geo/src/projection/albers.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _conicEqualArea__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./conicEqualArea */ "./node_modules/d3-geo/src/projection/conicEqualArea.js");


/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(_conicEqualArea__WEBPACK_IMPORTED_MODULE_0__["default"])()
      .parallels([29.5, 45.5])
      .scale(1070)
      .translate([480, 250])
      .rotate([96, 0])
      .center([-0.6, 38.7]);
});


/***/ }),

/***/ "./node_modules/d3-geo/src/projection/albersUsa.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-geo/src/projection/albersUsa.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math */ "./node_modules/d3-geo/src/math.js");
/* harmony import */ var _albers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./albers */ "./node_modules/d3-geo/src/projection/albers.js");
/* harmony import */ var _conicEqualArea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./conicEqualArea */ "./node_modules/d3-geo/src/projection/conicEqualArea.js");
/* harmony import */ var _fit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fit */ "./node_modules/d3-geo/src/projection/fit.js");





// The projections must have mutually exclusive clip regions on the sphere,
// as this will avoid emitting interleaving lines and polygons.
function multiplex(streams) {
  var n = streams.length;
  return {
    point: function(x, y) { var i = -1; while (++i < n) streams[i].point(x, y); },
    sphere: function() { var i = -1; while (++i < n) streams[i].sphere(); },
    lineStart: function() { var i = -1; while (++i < n) streams[i].lineStart(); },
    lineEnd: function() { var i = -1; while (++i < n) streams[i].lineEnd(); },
    polygonStart: function() { var i = -1; while (++i < n) streams[i].polygonStart(); },
    polygonEnd: function() { var i = -1; while (++i < n) streams[i].polygonEnd(); }
  };
}

// A composite projection for the United States, configured by default for
// 960×500. The projection also works quite well at 960×600 if you change the
// scale to 1285 and adjust the translate accordingly. The set of standard
// parallels for each region comes from USGS, which is published here:
// http://egsc.usgs.gov/isb/pubs/MapProjections/projections.html#albers
/* harmony default export */ __webpack_exports__["default"] = (function() {
  var cache,
      cacheStream,
      lower48 = Object(_albers__WEBPACK_IMPORTED_MODULE_1__["default"])(), lower48Point,
      alaska = Object(_conicEqualArea__WEBPACK_IMPORTED_MODULE_2__["default"])().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]), alaskaPoint, // EPSG:3338
      hawaii = Object(_conicEqualArea__WEBPACK_IMPORTED_MODULE_2__["default"])().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]), hawaiiPoint, // ESRI:102007
      point, pointStream = {point: function(x, y) { point = [x, y]; }};

  function albersUsa(coordinates) {
    var x = coordinates[0], y = coordinates[1];
    return point = null,
        (lower48Point.point(x, y), point)
        || (alaskaPoint.point(x, y), point)
        || (hawaiiPoint.point(x, y), point);
  }

  albersUsa.invert = function(coordinates) {
    var k = lower48.scale(),
        t = lower48.translate(),
        x = (coordinates[0] - t[0]) / k,
        y = (coordinates[1] - t[1]) / k;
    return (y >= 0.120 && y < 0.234 && x >= -0.425 && x < -0.214 ? alaska
        : y >= 0.166 && y < 0.234 && x >= -0.214 && x < -0.115 ? hawaii
        : lower48).invert(coordinates);
  };

  albersUsa.stream = function(stream) {
    return cache && cacheStream === stream ? cache : cache = multiplex([lower48.stream(cacheStream = stream), alaska.stream(stream), hawaii.stream(stream)]);
  };

  albersUsa.precision = function(_) {
    if (!arguments.length) return lower48.precision();
    lower48.precision(_), alaska.precision(_), hawaii.precision(_);
    return reset();
  };

  albersUsa.scale = function(_) {
    if (!arguments.length) return lower48.scale();
    lower48.scale(_), alaska.scale(_ * 0.35), hawaii.scale(_);
    return albersUsa.translate(lower48.translate());
  };

  albersUsa.translate = function(_) {
    if (!arguments.length) return lower48.translate();
    var k = lower48.scale(), x = +_[0], y = +_[1];

    lower48Point = lower48
        .translate(_)
        .clipExtent([[x - 0.455 * k, y - 0.238 * k], [x + 0.455 * k, y + 0.238 * k]])
        .stream(pointStream);

    alaskaPoint = alaska
        .translate([x - 0.307 * k, y + 0.201 * k])
        .clipExtent([[x - 0.425 * k + _math__WEBPACK_IMPORTED_MODULE_0__["epsilon"], y + 0.120 * k + _math__WEBPACK_IMPORTED_MODULE_0__["epsilon"]], [x - 0.214 * k - _math__WEBPACK_IMPORTED_MODULE_0__["epsilon"], y + 0.234 * k - _math__WEBPACK_IMPORTED_MODULE_0__["epsilon"]]])
        .stream(pointStream);

    hawaiiPoint = hawaii
        .translate([x - 0.205 * k, y + 0.212 * k])
        .clipExtent([[x - 0.214 * k + _math__WEBPACK_IMPORTED_MODULE_0__["epsilon"], y + 0.166 * k + _math__WEBPACK_IMPORTED_MODULE_0__["epsilon"]], [x - 0.115 * k - _math__WEBPACK_IMPORTED_MODULE_0__["epsilon"], y + 0.234 * k - _math__WEBPACK_IMPORTED_MODULE_0__["epsilon"]]])
        .stream(pointStream);

    return reset();
  };

  albersUsa.fitExtent = function(extent, object) {
    return Object(_fit__WEBPACK_IMPORTED_MODULE_3__["fitExtent"])(albersUsa, extent, object);
  };

  albersUsa.fitSize = function(size, object) {
    return Object(_fit__WEBPACK_IMPORTED_MODULE_3__["fitSize"])(albersUsa, size, object);
  };

  albersUsa.fitWidth = function(width, object) {
    return Object(_fit__WEBPACK_IMPORTED_MODULE_3__["fitWidth"])(albersUsa, width, object);
  };

  albersUsa.fitHeight = function(height, object) {
    return Object(_fit__WEBPACK_IMPORTED_MODULE_3__["fitHeight"])(albersUsa, height, object);
  };

  function reset() {
    cache = cacheStream = null;
    return albersUsa;
  }

  return albersUsa.scale(1070);
});


/***/ }),

/***/ "./node_modules/d3-geo/src/projection/azimuthal.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-geo/src/projection/azimuthal.js ***!
  \*********************************************************/
/*! exports provided: azimuthalRaw, azimuthalInvert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "azimuthalRaw", function() { return azimuthalRaw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "azimuthalInvert", function() { return azimuthalInvert; });
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math */ "./node_modules/d3-geo/src/math.js");


function azimuthalRaw(scale) {
  return function(x, y) {
    var cx = Object(_math__WEBPACK_IMPORTED_MODULE_0__["cos"])(x),
        cy = Object(_math__WEBPACK_IMPORTED_MODULE_0__["cos"])(y),
        k = scale(cx * cy);
    return [
      k * cy * Object(_math__WEBPACK_IMPORTED_MODULE_0__["sin"])(x),
      k * Object(_math__WEBPACK_IMPORTED_MODULE_0__["sin"])(y)
    ];
  }
}

function azimuthalInvert(angle) {
  return function(x, y) {
    var z = Object(_math__WEBPACK_IMPORTED_MODULE_0__["sqrt"])(x * x + y * y),
        c = angle(z),
        sc = Object(_math__WEBPACK_IMPORTED_MODULE_0__["sin"])(c),
        cc = Object(_math__WEBPACK_IMPORTED_MODULE_0__["cos"])(c);
    return [
      Object(_math__WEBPACK_IMPORTED_MODULE_0__["atan2"])(x * sc, z * cc),
      Object(_math__WEBPACK_IMPORTED_MODULE_0__["asin"])(z && y * sc / z)
    ];
  }
}


/***/ }),

/***/ "./node_modules/d3-geo/src/projection/azimuthalEqualArea.js":
/*!******************************************************************!*\
  !*** ./node_modules/d3-geo/src/projection/azimuthalEqualArea.js ***!
  \******************************************************************/
/*! exports provided: azimuthalEqualAreaRaw, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "azimuthalEqualAreaRaw", function() { return azimuthalEqualAreaRaw; });
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math */ "./node_modules/d3-geo/src/math.js");
/* harmony import */ var _azimuthal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./azimuthal */ "./node_modules/d3-geo/src/projection/azimuthal.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "./node_modules/d3-geo/src/projection/index.js");




var azimuthalEqualAreaRaw = Object(_azimuthal__WEBPACK_IMPORTED_MODULE_1__["azimuthalRaw"])(function(cxcy) {
  return Object(_math__WEBPACK_IMPORTED_MODULE_0__["sqrt"])(2 / (1 + cxcy));
});

azimuthalEqualAreaRaw.invert = Object(_azimuthal__WEBPACK_IMPORTED_MODULE_1__["azimuthalInvert"])(function(z) {
  return 2 * Object(_math__WEBPACK_IMPORTED_MODULE_0__["asin"])(z / 2);
});

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(_index__WEBPACK_IMPORTED_MODULE_2__["default"])(azimuthalEqualAreaRaw)
      .scale(124.75)
      .clipAngle(180 - 1e-3);
});


/***/ }),

/***/ "./node_modules/d3-geo/src/projection/azimuthalEquidistant.js":
/*!********************************************************************!*\
  !*** ./node_modules/d3-geo/src/projection/azimuthalEquidistant.js ***!
  \********************************************************************/
/*! exports provided: azimuthalEquidistantRaw, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "azimuthalEquidistantRaw", function() { return azimuthalEquidistantRaw; });
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math */ "./node_modules/d3-geo/src/math.js");
/* harmony import */ var _azimuthal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./azimuthal */ "./node_modules/d3-geo/src/projection/azimuthal.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "./node_modules/d3-geo/src/projection/index.js");




var azimuthalEquidistantRaw = Object(_azimuthal__WEBPACK_IMPORTED_MODULE_1__["azimuthalRaw"])(function(c) {
  return (c = Object(_math__WEBPACK_IMPORTED_MODULE_0__["acos"])(c)) && c / Object(_math__WEBPACK_IMPORTED_MODULE_0__["sin"])(c);
});

azimuthalEquidistantRaw.invert = Object(_azimuthal__WEBPACK_IMPORTED_MODULE_1__["azimuthalInvert"])(function(z) {
  return z;
});

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(_index__WEBPACK_IMPORTED_MODULE_2__["default"])(azimuthalEquidistantRaw)
      .scale(79.4188)
      .clipAngle(180 - 1e-3);
});


/***/ }),

/***/ "./node_modules/d3-geo/src/projection/conic.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-geo/src/projection/conic.js ***!
  \*****************************************************/
/*! exports provided: conicProjection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "conicProjection", function() { return conicProjection; });
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math */ "./node_modules/d3-geo/src/math.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/d3-geo/src/projection/index.js");



function conicProjection(projectAt) {
  var phi0 = 0,
      phi1 = _math__WEBPACK_IMPORTED_MODULE_0__["pi"] / 3,
      m = Object(_index__WEBPACK_IMPORTED_MODULE_1__["projectionMutator"])(projectAt),
      p = m(phi0, phi1);

  p.parallels = function(_) {
    return arguments.length ? m(phi0 = _[0] * _math__WEBPACK_IMPORTED_MODULE_0__["radians"], phi1 = _[1] * _math__WEBPACK_IMPORTED_MODULE_0__["radians"]) : [phi0 * _math__WEBPACK_IMPORTED_MODULE_0__["degrees"], phi1 * _math__WEBPACK_IMPORTED_MODULE_0__["degrees"]];
  };

  return p;
}


/***/ }),

/***/ "./node_modules/d3-geo/src/projection/conicConformal.js":
/*!**************************************************************!*\
  !*** ./node_modules/d3-geo/src/projection/conicConformal.js ***!
  \**************************************************************/
/*! exports provided: conicConformalRaw, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "conicConformalRaw", function() { return conicConformalRaw; });
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math */ "./node_modules/d3-geo/src/math.js");
/* harmony import */ var _conic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./conic */ "./node_modules/d3-geo/src/projection/conic.js");
/* harmony import */ var _mercator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mercator */ "./node_modules/d3-geo/src/projection/mercator.js");




function tany(y) {
  return Object(_math__WEBPACK_IMPORTED_MODULE_0__["tan"])((_math__WEBPACK_IMPORTED_MODULE_0__["halfPi"] + y) / 2);
}

function conicConformalRaw(y0, y1) {
  var cy0 = Object(_math__WEBPACK_IMPORTED_MODULE_0__["cos"])(y0),
      n = y0 === y1 ? Object(_math__WEBPACK_IMPORTED_MODULE_0__["sin"])(y0) : Object(_math__WEBPACK_IMPORTED_MODULE_0__["log"])(cy0 / Object(_math__WEBPACK_IMPORTED_MODULE_0__["cos"])(y1)) / Object(_math__WEBPACK_IMPORTED_MODULE_0__["log"])(tany(y1) / tany(y0)),
      f = cy0 * Object(_math__WEBPACK_IMPORTED_MODULE_0__["pow"])(tany(y0), n) / n;

  if (!n) return _mercator__WEBPACK_IMPORTED_MODULE_2__["mercatorRaw"];

  function project(x, y) {
    if (f > 0) { if (y < -_math__WEBPACK_IMPORTED_MODULE_0__["halfPi"] + _math__WEBPACK_IMPORTED_MODULE_0__["epsilon"]) y = -_math__WEBPACK_IMPORTED_MODULE_0__["halfPi"] + _math__WEBPACK_IMPORTED_MODULE_0__["epsilon"]; }
    else { if (y > _math__WEBPACK_IMPORTED_MODULE_0__["halfPi"] - _math__WEBPACK_IMPORTED_MODULE_0__["epsilon"]) y = _math__WEBPACK_IMPORTED_MODULE_0__["halfPi"] - _math__WEBPACK_IMPORTED_MODULE_0__["epsilon"]; }
    var r = f / Object(_math__WEBPACK_IMPORTED_MODULE_0__["pow"])(tany(y), n);
    return [r * Object(_math__WEBPACK_IMPORTED_MODULE_0__["sin"])(n * x), f - r * Object(_math__WEBPACK_IMPORTED_MODULE_0__["cos"])(n * x)];
  }

  project.invert = function(x, y) {
    var fy = f - y, r = Object(_math__WEBPACK_IMPORTED_MODULE_0__["sign"])(n) * Object(_math__WEBPACK_IMPORTED_MODULE_0__["sqrt"])(x * x + fy * fy);
    return [Object(_math__WEBPACK_IMPORTED_MODULE_0__["atan2"])(x, Object(_math__WEBPACK_IMPORTED_MODULE_0__["abs"])(fy)) / n * Object(_math__WEBPACK_IMPORTED_MODULE_0__["sign"])(fy), 2 * Object(_math__WEBPACK_IMPORTED_MODULE_0__["atan"])(Object(_math__WEBPACK_IMPORTED_MODULE_0__["pow"])(f / r, 1 / n)) - _math__WEBPACK_IMPORTED_MODULE_0__["halfPi"]];
  };

  return project;
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(_conic__WEBPACK_IMPORTED_MODULE_1__["conicProjection"])(conicConformalRaw)
      .scale(109.5)
      .parallels([30, 30]);
});


/***/ }),

/***/ "./node_modules/d3-geo/src/projection/conicEqualArea.js":
/*!**************************************************************!*\
  !*** ./node_modules/d3-geo/src/projection/conicEqualArea.js ***!
  \**************************************************************/
/*! exports provided: conicEqualAreaRaw, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "conicEqualAreaRaw", function() { return conicEqualAreaRaw; });
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math */ "./node_modules/d3-geo/src/math.js");
/* harmony import */ var _conic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./conic */ "./node_modules/d3-geo/src/projection/conic.js");
/* harmony import */ var _cylindricalEqualArea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cylindricalEqualArea */ "./node_modules/d3-geo/src/projection/cylindricalEqualArea.js");




function conicEqualAreaRaw(y0, y1) {
  var sy0 = Object(_math__WEBPACK_IMPORTED_MODULE_0__["sin"])(y0), n = (sy0 + Object(_math__WEBPACK_IMPORTED_MODULE_0__["sin"])(y1)) / 2;

  // Are the parallels symmetrical around the Equator?
  if (Object(_math__WEBPACK_IMPORTED_MODULE_0__["abs"])(n) < _math__WEBPACK_IMPORTED_MODULE_0__["epsilon"]) return Object(_cylindricalEqualArea__WEBPACK_IMPORTED_MODULE_2__["cylindricalEqualAreaRaw"])(y0);

  var c = 1 + sy0 * (2 * n - sy0), r0 = Object(_math__WEBPACK_IMPORTED_MODULE_0__["sqrt"])(c) / n;

  function project(x, y) {
    var r = Object(_math__WEBPACK_IMPORTED_MODULE_0__["sqrt"])(c - 2 * n * Object(_math__WEBPACK_IMPORTED_MODULE_0__["sin"])(y)) / n;
    return [r * Object(_math__WEBPACK_IMPORTED_MODULE_0__["sin"])(x *= n), r0 - r * Object(_math__WEBPACK_IMPORTED_MODULE_0__["cos"])(x)];
  }

  project.invert = function(x, y) {
    var r0y = r0 - y;
    return [Object(_math__WEBPACK_IMPORTED_MODULE_0__["atan2"])(x, Object(_math__WEBPACK_IMPORTED_MODULE_0__["abs"])(r0y)) / n * Object(_math__WEBPACK_IMPORTED_MODULE_0__["sign"])(r0y), Object(_math__WEBPACK_IMPORTED_MODULE_0__["asin"])((c - (x * x + r0y * r0y) * n * n) / (2 * n))];
  };

  return project;
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(_conic__WEBPACK_IMPORTED_MODULE_1__["conicProjection"])(conicEqualAreaRaw)
      .scale(155.424)
      .center([0, 33.6442]);
});


/***/ }),

/***/ "./node_modules/d3-geo/src/projection/conicEquidistant.js":
/*!****************************************************************!*\
  !*** ./node_modules/d3-geo/src/projection/conicEquidistant.js ***!
  \****************************************************************/
/*! exports provided: conicEquidistantRaw, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "conicEquidistantRaw", function() { return conicEquidistantRaw; });
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math */ "./node_modules/d3-geo/src/math.js");
/* harmony import */ var _conic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./conic */ "./node_modules/d3-geo/src/projection/conic.js");
/* harmony import */ var _equirectangular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./equirectangular */ "./node_modules/d3-geo/src/projection/equirectangular.js");




function conicEquidistantRaw(y0, y1) {
  var cy0 = Object(_math__WEBPACK_IMPORTED_MODULE_0__["cos"])(y0),
      n = y0 === y1 ? Object(_math__WEBPACK_IMPORTED_MODULE_0__["sin"])(y0) : (cy0 - Object(_math__WEBPACK_IMPORTED_MODULE_0__["cos"])(y1)) / (y1 - y0),
      g = cy0 / n + y0;

  if (Object(_math__WEBPACK_IMPORTED_MODULE_0__["abs"])(n) < _math__WEBPACK_IMPORTED_MODULE_0__["epsilon"]) return _equirectangular__WEBPACK_IMPORTED_MODULE_2__["equirectangularRaw"];

  function project(x, y) {
    var gy = g - y, nx = n * x;
    return [gy * Object(_math__WEBPACK_IMPORTED_MODULE_0__["sin"])(nx), g - gy * Object(_math__WEBPACK_IMPORTED_MODULE_0__["cos"])(nx)];
  }

  project.invert = function(x, y) {
    var gy = g - y;
    return [Object(_math__WEBPACK_IMPORTED_MODULE_0__["atan2"])(x, Object(_math__WEBPACK_IMPORTED_MODULE_0__["abs"])(gy)) / n * Object(_math__WEBPACK_IMPORTED_MODULE_0__["sign"])(gy), g - Object(_math__WEBPACK_IMPORTED_MODULE_0__["sign"])(n) * Object(_math__WEBPACK_IMPORTED_MODULE_0__["sqrt"])(x * x + gy * gy)];
  };

  return project;
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(_conic__WEBPACK_IMPORTED_MODULE_1__["conicProjection"])(conicEquidistantRaw)
      .scale(131.154)
      .center([0, 13.9389]);
});


/***/ }),

/***/ "./node_modules/d3-geo/src/projection/cylindricalEqualArea.js":
/*!********************************************************************!*\
  !*** ./node_modules/d3-geo/src/projection/cylindricalEqualArea.js ***!
  \********************************************************************/
/*! exports provided: cylindricalEqualAreaRaw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cylindricalEqualAreaRaw", function() { return cylindricalEqualAreaRaw; });
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math */ "./node_modules/d3-geo/src/math.js");


function cylindricalEqualAreaRaw(phi0) {
  var cosPhi0 = Object(_math__WEBPACK_IMPORTED_MODULE_0__["cos"])(phi0);

  function forward(lambda, phi) {
    return [lambda * cosPhi0, Object(_math__WEBPACK_IMPORTED_MODULE_0__["sin"])(phi) / cosPhi0];
  }

  forward.invert = function(x, y) {
    return [x / cosPhi0, Object(_math__WEBPACK_IMPORTED_MODULE_0__["asin"])(y * cosPhi0)];
  };

  return forward;
}


/***/ }),

/***/ "./node_modules/d3-geo/src/projection/equalEarth.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-geo/src/projection/equalEarth.js ***!
  \**********************************************************/
/*! exports provided: equalEarthRaw, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equalEarthRaw", function() { return equalEarthRaw; });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/d3-geo/src/projection/index.js");
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math.js */ "./node_modules/d3-geo/src/math.js");



var A1 = 1.340264,
    A2 = -0.081106,
    A3 = 0.000893,
    A4 = 0.003796,
    M = Object(_math_js__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(3) / 2,
    iterations = 12;

function equalEarthRaw(lambda, phi) {
  var l = Object(_math_js__WEBPACK_IMPORTED_MODULE_1__["asin"])(M * Object(_math_js__WEBPACK_IMPORTED_MODULE_1__["sin"])(phi)), l2 = l * l, l6 = l2 * l2 * l2;
  return [
    lambda * Object(_math_js__WEBPACK_IMPORTED_MODULE_1__["cos"])(l) / (M * (A1 + 3 * A2 * l2 + l6 * (7 * A3 + 9 * A4 * l2))),
    l * (A1 + A2 * l2 + l6 * (A3 + A4 * l2))
  ];
}

equalEarthRaw.invert = function(x, y) {
  var l = y, l2 = l * l, l6 = l2 * l2 * l2;
  for (var i = 0, delta, fy, fpy; i < iterations; ++i) {
    fy = l * (A1 + A2 * l2 + l6 * (A3 + A4 * l2)) - y;
    fpy = A1 + 3 * A2 * l2 + l6 * (7 * A3 + 9 * A4 * l2);
    l -= delta = fy / fpy, l2 = l * l, l6 = l2 * l2 * l2;
    if (Object(_math_js__WEBPACK_IMPORTED_MODULE_1__["abs"])(delta) < _math_js__WEBPACK_IMPORTED_MODULE_1__["epsilon2"]) break;
  }
  return [
    M * x * (A1 + 3 * A2 * l2 + l6 * (7 * A3 + 9 * A4 * l2)) / Object(_math_js__WEBPACK_IMPORTED_MODULE_1__["cos"])(l),
    Object(_math_js__WEBPACK_IMPORTED_MODULE_1__["asin"])(Object(_math_js__WEBPACK_IMPORTED_MODULE_1__["sin"])(l) / M)
  ];
};

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(equalEarthRaw)
      .scale(177.158);
});


/***/ }),

/***/ "./node_modules/d3-geo/src/projection/equirectangular.js":
/*!***************************************************************!*\
  !*** ./node_modules/d3-geo/src/projection/equirectangular.js ***!
  \***************************************************************/
/*! exports provided: equirectangularRaw, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equirectangularRaw", function() { return equirectangularRaw; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./node_modules/d3-geo/src/projection/index.js");


function equirectangularRaw(lambda, phi) {
  return [lambda, phi];
}

equirectangularRaw.invert = equirectangularRaw;

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(_index__WEBPACK_IMPORTED_MODULE_0__["default"])(equirectangularRaw)
      .scale(152.63);
});


/***/ }),

/***/ "./node_modules/d3-geo/src/projection/fit.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-geo/src/projection/fit.js ***!
  \***************************************************/
/*! exports provided: fitExtent, fitSize, fitWidth, fitHeight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fitExtent", function() { return fitExtent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fitSize", function() { return fitSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fitWidth", function() { return fitWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fitHeight", function() { return fitHeight; });
/* harmony import */ var _stream__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../stream */ "./node_modules/d3-geo/src/stream.js");
/* harmony import */ var _path_bounds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../path/bounds */ "./node_modules/d3-geo/src/path/bounds.js");



function fit(projection, fitBounds, object) {
  var clip = projection.clipExtent && projection.clipExtent();
  projection.scale(150).translate([0, 0]);
  if (clip != null) projection.clipExtent(null);
  Object(_stream__WEBPACK_IMPORTED_MODULE_0__["default"])(object, projection.stream(_path_bounds__WEBPACK_IMPORTED_MODULE_1__["default"]));
  fitBounds(_path_bounds__WEBPACK_IMPORTED_MODULE_1__["default"].result());
  if (clip != null) projection.clipExtent(clip);
  return projection;
}

function fitExtent(projection, extent, object) {
  return fit(projection, function(b) {
    var w = extent[1][0] - extent[0][0],
        h = extent[1][1] - extent[0][1],
        k = Math.min(w / (b[1][0] - b[0][0]), h / (b[1][1] - b[0][1])),
        x = +extent[0][0] + (w - k * (b[1][0] + b[0][0])) / 2,
        y = +extent[0][1] + (h - k * (b[1][1] + b[0][1])) / 2;
    projection.scale(150 * k).translate([x, y]);
  }, object);
}

function fitSize(projection, size, object) {
  return fitExtent(projection, [[0, 0], size], object);
}

function fitWidth(projection, width, object) {
  return fit(projection, function(b) {
    var w = +width,
        k = w / (b[1][0] - b[0][0]),
        x = (w - k * (b[1][0] + b[0][0])) / 2,
        y = -k * b[0][1];
    projection.scale(150 * k).translate([x, y]);
  }, object);
}

function fitHeight(projection, height, object) {
  return fit(projection, function(b) {
    var h = +height,
        k = h / (b[1][1] - b[0][1]),
        x = -k * b[0][0],
        y = (h - k * (b[1][1] + b[0][1])) / 2;
    projection.scale(150 * k).translate([x, y]);
  }, object);
}


/***/ }),

/***/ "./node_modules/d3-geo/src/projection/gnomonic.js":
/*!********************************************************!*\
  !*** ./node_modules/d3-geo/src/projection/gnomonic.js ***!
  \********************************************************/
/*! exports provided: gnomonicRaw, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gnomonicRaw", function() { return gnomonicRaw; });
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math */ "./node_modules/d3-geo/src/math.js");
/* harmony import */ var _azimuthal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./azimuthal */ "./node_modules/d3-geo/src/projection/azimuthal.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "./node_modules/d3-geo/src/projection/index.js");




function gnomonicRaw(x, y) {
  var cy = Object(_math__WEBPACK_IMPORTED_MODULE_0__["cos"])(y), k = Object(_math__WEBPACK_IMPORTED_MODULE_0__["cos"])(x) * cy;
  return [cy * Object(_math__WEBPACK_IMPORTED_MODULE_0__["sin"])(x) / k, Object(_math__WEBPACK_IMPORTED_MODULE_0__["sin"])(y) / k];
}

gnomonicRaw.invert = Object(_azimuthal__WEBPACK_IMPORTED_MODULE_1__["azimuthalInvert"])(_math__WEBPACK_IMPORTED_MODULE_0__["atan"]);

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(_index__WEBPACK_IMPORTED_MODULE_2__["default"])(gnomonicRaw)
      .scale(144.049)
      .clipAngle(60);
});


/***/ }),

/***/ "./node_modules/d3-geo/src/projection/identity.js":
/*!********************************************************!*\
  !*** ./node_modules/d3-geo/src/projection/identity.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _clip_rectangle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../clip/rectangle */ "./node_modules/d3-geo/src/clip/rectangle.js");
/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../identity */ "./node_modules/d3-geo/src/identity.js");
/* harmony import */ var _transform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../transform */ "./node_modules/d3-geo/src/transform.js");
/* harmony import */ var _fit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fit */ "./node_modules/d3-geo/src/projection/fit.js");





function scaleTranslate(kx, ky, tx, ty) {
  return kx === 1 && ky === 1 && tx === 0 && ty === 0 ? _identity__WEBPACK_IMPORTED_MODULE_1__["default"] : Object(_transform__WEBPACK_IMPORTED_MODULE_2__["transformer"])({
    point: function(x, y) {
      this.stream.point(x * kx + tx, y * ky + ty);
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  var k = 1, tx = 0, ty = 0, sx = 1, sy = 1, transform = _identity__WEBPACK_IMPORTED_MODULE_1__["default"], // scale, translate and reflect
      x0 = null, y0, x1, y1, // clip extent
      postclip = _identity__WEBPACK_IMPORTED_MODULE_1__["default"],
      cache,
      cacheStream,
      projection;

  function reset() {
    cache = cacheStream = null;
    return projection;
  }

  return projection = {
    stream: function(stream) {
      return cache && cacheStream === stream ? cache : cache = transform(postclip(cacheStream = stream));
    },
    postclip: function(_) {
      return arguments.length ? (postclip = _, x0 = y0 = x1 = y1 = null, reset()) : postclip;
    },
    clipExtent: function(_) {
      return arguments.length ? (postclip = _ == null ? (x0 = y0 = x1 = y1 = null, _identity__WEBPACK_IMPORTED_MODULE_1__["default"]) : Object(_clip_rectangle__WEBPACK_IMPORTED_MODULE_0__["default"])(x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1]), reset()) : x0 == null ? null : [[x0, y0], [x1, y1]];
    },
    scale: function(_) {
      return arguments.length ? (transform = scaleTranslate((k = +_) * sx, k * sy, tx, ty), reset()) : k;
    },
    translate: function(_) {
      return arguments.length ? (transform = scaleTranslate(k * sx, k * sy, tx = +_[0], ty = +_[1]), reset()) : [tx, ty];
    },
    reflectX: function(_) {
      return arguments.length ? (transform = scaleTranslate(k * (sx = _ ? -1 : 1), k * sy, tx, ty), reset()) : sx < 0;
    },
    reflectY: function(_) {
      return arguments.length ? (transform = scaleTranslate(k * sx, k * (sy = _ ? -1 : 1), tx, ty), reset()) : sy < 0;
    },
    fitExtent: function(extent, object) {
      return Object(_fit__WEBPACK_IMPORTED_MODULE_3__["fitExtent"])(projection, extent, object);
    },
    fitSize: function(size, object) {
      return Object(_fit__WEBPACK_IMPORTED_MODULE_3__["fitSize"])(projection, size, object);
    },
    fitWidth: function(width, object) {
      return Object(_fit__WEBPACK_IMPORTED_MODULE_3__["fitWidth"])(projection, width, object);
    },
    fitHeight: function(height, object) {
      return Object(_fit__WEBPACK_IMPORTED_MODULE_3__["fitHeight"])(projection, height, object);
    }
  };
});


/***/ }),

/***/ "./node_modules/d3-geo/src/projection/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-geo/src/projection/index.js ***!
  \*****************************************************/
/*! exports provided: default, projectionMutator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return projection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectionMutator", function() { return projectionMutator; });
/* harmony import */ var _clip_antimeridian__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../clip/antimeridian */ "./node_modules/d3-geo/src/clip/antimeridian.js");
/* harmony import */ var _clip_circle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../clip/circle */ "./node_modules/d3-geo/src/clip/circle.js");
/* harmony import */ var _clip_rectangle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../clip/rectangle */ "./node_modules/d3-geo/src/clip/rectangle.js");
/* harmony import */ var _compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../compose */ "./node_modules/d3-geo/src/compose.js");
/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../identity */ "./node_modules/d3-geo/src/identity.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../math */ "./node_modules/d3-geo/src/math.js");
/* harmony import */ var _rotation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../rotation */ "./node_modules/d3-geo/src/rotation.js");
/* harmony import */ var _transform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../transform */ "./node_modules/d3-geo/src/transform.js");
/* harmony import */ var _fit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fit */ "./node_modules/d3-geo/src/projection/fit.js");
/* harmony import */ var _resample__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./resample */ "./node_modules/d3-geo/src/projection/resample.js");











var transformRadians = Object(_transform__WEBPACK_IMPORTED_MODULE_7__["transformer"])({
  point: function(x, y) {
    this.stream.point(x * _math__WEBPACK_IMPORTED_MODULE_5__["radians"], y * _math__WEBPACK_IMPORTED_MODULE_5__["radians"]);
  }
});

function transformRotate(rotate) {
  return Object(_transform__WEBPACK_IMPORTED_MODULE_7__["transformer"])({
    point: function(x, y) {
      var r = rotate(x, y);
      return this.stream.point(r[0], r[1]);
    }
  });
}

function scaleTranslate(k, dx, dy) {
  function transform(x, y) {
    return [dx + k * x, dy - k * y];
  }
  transform.invert = function(x, y) {
    return [(x - dx) / k, (dy - y) / k];
  };
  return transform;
}

function scaleTranslateRotate(k, dx, dy, alpha) {
  var cosAlpha = Object(_math__WEBPACK_IMPORTED_MODULE_5__["cos"])(alpha),
      sinAlpha = Object(_math__WEBPACK_IMPORTED_MODULE_5__["sin"])(alpha),
      a = cosAlpha * k,
      b = sinAlpha * k,
      ai = cosAlpha / k,
      bi = sinAlpha / k,
      ci = (sinAlpha * dy - cosAlpha * dx) / k,
      fi = (sinAlpha * dx + cosAlpha * dy) / k;
  function transform(x, y) {
    return [a * x - b * y + dx, dy - b * x - a * y];
  }
  transform.invert = function(x, y) {
    return [ai * x - bi * y + ci, fi - bi * x - ai * y];
  };
  return transform;
}

function projection(project) {
  return projectionMutator(function() { return project; })();
}

function projectionMutator(projectAt) {
  var project,
      k = 150, // scale
      x = 480, y = 250, // translate
      lambda = 0, phi = 0, // center
      deltaLambda = 0, deltaPhi = 0, deltaGamma = 0, rotate, // pre-rotate
      alpha = 0, // post-rotate
      theta = null, preclip = _clip_antimeridian__WEBPACK_IMPORTED_MODULE_0__["default"], // pre-clip angle
      x0 = null, y0, x1, y1, postclip = _identity__WEBPACK_IMPORTED_MODULE_4__["default"], // post-clip extent
      delta2 = 0.5, // precision
      projectResample,
      projectTransform,
      projectRotateTransform,
      cache,
      cacheStream;

  function projection(point) {
    return projectRotateTransform(point[0] * _math__WEBPACK_IMPORTED_MODULE_5__["radians"], point[1] * _math__WEBPACK_IMPORTED_MODULE_5__["radians"]);
  }

  function invert(point) {
    point = projectRotateTransform.invert(point[0], point[1]);
    return point && [point[0] * _math__WEBPACK_IMPORTED_MODULE_5__["degrees"], point[1] * _math__WEBPACK_IMPORTED_MODULE_5__["degrees"]];
  }

  projection.stream = function(stream) {
    return cache && cacheStream === stream ? cache : cache = transformRadians(transformRotate(rotate)(preclip(projectResample(postclip(cacheStream = stream)))));
  };

  projection.preclip = function(_) {
    return arguments.length ? (preclip = _, theta = undefined, reset()) : preclip;
  };

  projection.postclip = function(_) {
    return arguments.length ? (postclip = _, x0 = y0 = x1 = y1 = null, reset()) : postclip;
  };

  projection.clipAngle = function(_) {
    return arguments.length ? (preclip = +_ ? Object(_clip_circle__WEBPACK_IMPORTED_MODULE_1__["default"])(theta = _ * _math__WEBPACK_IMPORTED_MODULE_5__["radians"]) : (theta = null, _clip_antimeridian__WEBPACK_IMPORTED_MODULE_0__["default"]), reset()) : theta * _math__WEBPACK_IMPORTED_MODULE_5__["degrees"];
  };

  projection.clipExtent = function(_) {
    return arguments.length ? (postclip = _ == null ? (x0 = y0 = x1 = y1 = null, _identity__WEBPACK_IMPORTED_MODULE_4__["default"]) : Object(_clip_rectangle__WEBPACK_IMPORTED_MODULE_2__["default"])(x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1]), reset()) : x0 == null ? null : [[x0, y0], [x1, y1]];
  };

  projection.scale = function(_) {
    return arguments.length ? (k = +_, recenter()) : k;
  };

  projection.translate = function(_) {
    return arguments.length ? (x = +_[0], y = +_[1], recenter()) : [x, y];
  };

  projection.center = function(_) {
    return arguments.length ? (lambda = _[0] % 360 * _math__WEBPACK_IMPORTED_MODULE_5__["radians"], phi = _[1] % 360 * _math__WEBPACK_IMPORTED_MODULE_5__["radians"], recenter()) : [lambda * _math__WEBPACK_IMPORTED_MODULE_5__["degrees"], phi * _math__WEBPACK_IMPORTED_MODULE_5__["degrees"]];
  };

  projection.rotate = function(_) {
    return arguments.length ? (deltaLambda = _[0] % 360 * _math__WEBPACK_IMPORTED_MODULE_5__["radians"], deltaPhi = _[1] % 360 * _math__WEBPACK_IMPORTED_MODULE_5__["radians"], deltaGamma = _.length > 2 ? _[2] % 360 * _math__WEBPACK_IMPORTED_MODULE_5__["radians"] : 0, recenter()) : [deltaLambda * _math__WEBPACK_IMPORTED_MODULE_5__["degrees"], deltaPhi * _math__WEBPACK_IMPORTED_MODULE_5__["degrees"], deltaGamma * _math__WEBPACK_IMPORTED_MODULE_5__["degrees"]];
  };

  projection.angle = function(_) {
    return arguments.length ? (alpha = _ % 360 * _math__WEBPACK_IMPORTED_MODULE_5__["radians"], recenter()) : alpha * _math__WEBPACK_IMPORTED_MODULE_5__["degrees"];
  };

  projection.precision = function(_) {
    return arguments.length ? (projectResample = Object(_resample__WEBPACK_IMPORTED_MODULE_9__["default"])(projectTransform, delta2 = _ * _), reset()) : Object(_math__WEBPACK_IMPORTED_MODULE_5__["sqrt"])(delta2);
  };

  projection.fitExtent = function(extent, object) {
    return Object(_fit__WEBPACK_IMPORTED_MODULE_8__["fitExtent"])(projection, extent, object);
  };

  projection.fitSize = function(size, object) {
    return Object(_fit__WEBPACK_IMPORTED_MODULE_8__["fitSize"])(projection, size, object);
  };

  projection.fitWidth = function(width, object) {
    return Object(_fit__WEBPACK_IMPORTED_MODULE_8__["fitWidth"])(projection, width, object);
  };

  projection.fitHeight = function(height, object) {
    return Object(_fit__WEBPACK_IMPORTED_MODULE_8__["fitHeight"])(projection, height, object);
  };

  function recenter() {
    var center = scaleTranslateRotate(k, 0, 0, alpha).apply(null, project(lambda, phi)),
        transform = (alpha ? scaleTranslateRotate : scaleTranslate)(k, x - center[0], y - center[1], alpha);
    rotate = Object(_rotation__WEBPACK_IMPORTED_MODULE_6__["rotateRadians"])(deltaLambda, deltaPhi, deltaGamma);
    projectTransform = Object(_compose__WEBPACK_IMPORTED_MODULE_3__["default"])(project, transform);
    projectRotateTransform = Object(_compose__WEBPACK_IMPORTED_MODULE_3__["default"])(rotate, projectTransform);
    projectResample = Object(_resample__WEBPACK_IMPORTED_MODULE_9__["default"])(projectTransform, delta2);
    return reset();
  }

  function reset() {
    cache = cacheStream = null;
    return projection;
  }

  return function() {
    project = projectAt.apply(this, arguments);
    projection.invert = project.invert && invert;
    return recenter();
  };
}


/***/ }),

/***/ "./node_modules/d3-geo/src/projection/mercator.js":
/*!********************************************************!*\
  !*** ./node_modules/d3-geo/src/projection/mercator.js ***!
  \********************************************************/
/*! exports provided: mercatorRaw, default, mercatorProjection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mercatorRaw", function() { return mercatorRaw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mercatorProjection", function() { return mercatorProjection; });
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math */ "./node_modules/d3-geo/src/math.js");
/* harmony import */ var _rotation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rotation */ "./node_modules/d3-geo/src/rotation.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "./node_modules/d3-geo/src/projection/index.js");




function mercatorRaw(lambda, phi) {
  return [lambda, Object(_math__WEBPACK_IMPORTED_MODULE_0__["log"])(Object(_math__WEBPACK_IMPORTED_MODULE_0__["tan"])((_math__WEBPACK_IMPORTED_MODULE_0__["halfPi"] + phi) / 2))];
}

mercatorRaw.invert = function(x, y) {
  return [x, 2 * Object(_math__WEBPACK_IMPORTED_MODULE_0__["atan"])(Object(_math__WEBPACK_IMPORTED_MODULE_0__["exp"])(y)) - _math__WEBPACK_IMPORTED_MODULE_0__["halfPi"]];
};

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return mercatorProjection(mercatorRaw)
      .scale(961 / _math__WEBPACK_IMPORTED_MODULE_0__["tau"]);
});

function mercatorProjection(project) {
  var m = Object(_index__WEBPACK_IMPORTED_MODULE_2__["default"])(project),
      center = m.center,
      scale = m.scale,
      translate = m.translate,
      clipExtent = m.clipExtent,
      x0 = null, y0, x1, y1; // clip extent

  m.scale = function(_) {
    return arguments.length ? (scale(_), reclip()) : scale();
  };

  m.translate = function(_) {
    return arguments.length ? (translate(_), reclip()) : translate();
  };

  m.center = function(_) {
    return arguments.length ? (center(_), reclip()) : center();
  };

  m.clipExtent = function(_) {
    return arguments.length ? ((_ == null ? x0 = y0 = x1 = y1 = null : (x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1])), reclip()) : x0 == null ? null : [[x0, y0], [x1, y1]];
  };

  function reclip() {
    var k = _math__WEBPACK_IMPORTED_MODULE_0__["pi"] * scale(),
        t = m(Object(_rotation__WEBPACK_IMPORTED_MODULE_1__["default"])(m.rotate()).invert([0, 0]));
    return clipExtent(x0 == null
        ? [[t[0] - k, t[1] - k], [t[0] + k, t[1] + k]] : project === mercatorRaw
        ? [[Math.max(t[0] - k, x0), y0], [Math.min(t[0] + k, x1), y1]]
        : [[x0, Math.max(t[1] - k, y0)], [x1, Math.min(t[1] + k, y1)]]);
  }

  return reclip();
}


/***/ }),

/***/ "./node_modules/d3-geo/src/projection/naturalEarth1.js":
/*!*************************************************************!*\
  !*** ./node_modules/d3-geo/src/projection/naturalEarth1.js ***!
  \*************************************************************/
/*! exports provided: naturalEarth1Raw, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "naturalEarth1Raw", function() { return naturalEarth1Raw; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./node_modules/d3-geo/src/projection/index.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math */ "./node_modules/d3-geo/src/math.js");



function naturalEarth1Raw(lambda, phi) {
  var phi2 = phi * phi, phi4 = phi2 * phi2;
  return [
    lambda * (0.8707 - 0.131979 * phi2 + phi4 * (-0.013791 + phi4 * (0.003971 * phi2 - 0.001529 * phi4))),
    phi * (1.007226 + phi2 * (0.015085 + phi4 * (-0.044475 + 0.028874 * phi2 - 0.005916 * phi4)))
  ];
}

naturalEarth1Raw.invert = function(x, y) {
  var phi = y, i = 25, delta;
  do {
    var phi2 = phi * phi, phi4 = phi2 * phi2;
    phi -= delta = (phi * (1.007226 + phi2 * (0.015085 + phi4 * (-0.044475 + 0.028874 * phi2 - 0.005916 * phi4))) - y) /
        (1.007226 + phi2 * (0.015085 * 3 + phi4 * (-0.044475 * 7 + 0.028874 * 9 * phi2 - 0.005916 * 11 * phi4)));
  } while (Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(delta) > _math__WEBPACK_IMPORTED_MODULE_1__["epsilon"] && --i > 0);
  return [
    x / (0.8707 + (phi2 = phi * phi) * (-0.131979 + phi2 * (-0.013791 + phi2 * phi2 * phi2 * (0.003971 - 0.001529 * phi2)))),
    phi
  ];
};

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(_index__WEBPACK_IMPORTED_MODULE_0__["default"])(naturalEarth1Raw)
      .scale(175.295);
});


/***/ }),

/***/ "./node_modules/d3-geo/src/projection/orthographic.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-geo/src/projection/orthographic.js ***!
  \************************************************************/
/*! exports provided: orthographicRaw, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orthographicRaw", function() { return orthographicRaw; });
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math */ "./node_modules/d3-geo/src/math.js");
/* harmony import */ var _azimuthal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./azimuthal */ "./node_modules/d3-geo/src/projection/azimuthal.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "./node_modules/d3-geo/src/projection/index.js");




function orthographicRaw(x, y) {
  return [Object(_math__WEBPACK_IMPORTED_MODULE_0__["cos"])(y) * Object(_math__WEBPACK_IMPORTED_MODULE_0__["sin"])(x), Object(_math__WEBPACK_IMPORTED_MODULE_0__["sin"])(y)];
}

orthographicRaw.invert = Object(_azimuthal__WEBPACK_IMPORTED_MODULE_1__["azimuthalInvert"])(_math__WEBPACK_IMPORTED_MODULE_0__["asin"]);

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(_index__WEBPACK_IMPORTED_MODULE_2__["default"])(orthographicRaw)
      .scale(249.5)
      .clipAngle(90 + _math__WEBPACK_IMPORTED_MODULE_0__["epsilon"]);
});


/***/ }),

/***/ "./node_modules/d3-geo/src/projection/resample.js":
/*!********************************************************!*\
  !*** ./node_modules/d3-geo/src/projection/resample.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cartesian__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cartesian */ "./node_modules/d3-geo/src/cartesian.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math */ "./node_modules/d3-geo/src/math.js");
/* harmony import */ var _transform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../transform */ "./node_modules/d3-geo/src/transform.js");




var maxDepth = 16, // maximum depth of subdivision
    cosMinDistance = Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(30 * _math__WEBPACK_IMPORTED_MODULE_1__["radians"]); // cos(minimum angular distance)

/* harmony default export */ __webpack_exports__["default"] = (function(project, delta2) {
  return +delta2 ? resample(project, delta2) : resampleNone(project);
});

function resampleNone(project) {
  return Object(_transform__WEBPACK_IMPORTED_MODULE_2__["transformer"])({
    point: function(x, y) {
      x = project(x, y);
      this.stream.point(x[0], x[1]);
    }
  });
}

function resample(project, delta2) {

  function resampleLineTo(x0, y0, lambda0, a0, b0, c0, x1, y1, lambda1, a1, b1, c1, depth, stream) {
    var dx = x1 - x0,
        dy = y1 - y0,
        d2 = dx * dx + dy * dy;
    if (d2 > 4 * delta2 && depth--) {
      var a = a0 + a1,
          b = b0 + b1,
          c = c0 + c1,
          m = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sqrt"])(a * a + b * b + c * c),
          phi2 = Object(_math__WEBPACK_IMPORTED_MODULE_1__["asin"])(c /= m),
          lambda2 = Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(c) - 1) < _math__WEBPACK_IMPORTED_MODULE_1__["epsilon"] || Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(lambda0 - lambda1) < _math__WEBPACK_IMPORTED_MODULE_1__["epsilon"] ? (lambda0 + lambda1) / 2 : Object(_math__WEBPACK_IMPORTED_MODULE_1__["atan2"])(b, a),
          p = project(lambda2, phi2),
          x2 = p[0],
          y2 = p[1],
          dx2 = x2 - x0,
          dy2 = y2 - y0,
          dz = dy * dx2 - dx * dy2;
      if (dz * dz / d2 > delta2 // perpendicular projected distance
          || Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])((dx * dx2 + dy * dy2) / d2 - 0.5) > 0.3 // midpoint close to an end
          || a0 * a1 + b0 * b1 + c0 * c1 < cosMinDistance) { // angular distance
        resampleLineTo(x0, y0, lambda0, a0, b0, c0, x2, y2, lambda2, a /= m, b /= m, c, depth, stream);
        stream.point(x2, y2);
        resampleLineTo(x2, y2, lambda2, a, b, c, x1, y1, lambda1, a1, b1, c1, depth, stream);
      }
    }
  }
  return function(stream) {
    var lambda00, x00, y00, a00, b00, c00, // first point
        lambda0, x0, y0, a0, b0, c0; // previous point

    var resampleStream = {
      point: point,
      lineStart: lineStart,
      lineEnd: lineEnd,
      polygonStart: function() { stream.polygonStart(); resampleStream.lineStart = ringStart; },
      polygonEnd: function() { stream.polygonEnd(); resampleStream.lineStart = lineStart; }
    };

    function point(x, y) {
      x = project(x, y);
      stream.point(x[0], x[1]);
    }

    function lineStart() {
      x0 = NaN;
      resampleStream.point = linePoint;
      stream.lineStart();
    }

    function linePoint(lambda, phi) {
      var c = Object(_cartesian__WEBPACK_IMPORTED_MODULE_0__["cartesian"])([lambda, phi]), p = project(lambda, phi);
      resampleLineTo(x0, y0, lambda0, a0, b0, c0, x0 = p[0], y0 = p[1], lambda0 = lambda, a0 = c[0], b0 = c[1], c0 = c[2], maxDepth, stream);
      stream.point(x0, y0);
    }

    function lineEnd() {
      resampleStream.point = point;
      stream.lineEnd();
    }

    function ringStart() {
      lineStart();
      resampleStream.point = ringPoint;
      resampleStream.lineEnd = ringEnd;
    }

    function ringPoint(lambda, phi) {
      linePoint(lambda00 = lambda, phi), x00 = x0, y00 = y0, a00 = a0, b00 = b0, c00 = c0;
      resampleStream.point = linePoint;
    }

    function ringEnd() {
      resampleLineTo(x0, y0, lambda0, a0, b0, c0, x00, y00, lambda00, a00, b00, c00, maxDepth, stream);
      resampleStream.lineEnd = lineEnd;
      lineEnd();
    }

    return resampleStream;
  };
}


/***/ }),

/***/ "./node_modules/d3-geo/src/projection/stereographic.js":
/*!*************************************************************!*\
  !*** ./node_modules/d3-geo/src/projection/stereographic.js ***!
  \*************************************************************/
/*! exports provided: stereographicRaw, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stereographicRaw", function() { return stereographicRaw; });
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math */ "./node_modules/d3-geo/src/math.js");
/* harmony import */ var _azimuthal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./azimuthal */ "./node_modules/d3-geo/src/projection/azimuthal.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "./node_modules/d3-geo/src/projection/index.js");




function stereographicRaw(x, y) {
  var cy = Object(_math__WEBPACK_IMPORTED_MODULE_0__["cos"])(y), k = 1 + Object(_math__WEBPACK_IMPORTED_MODULE_0__["cos"])(x) * cy;
  return [cy * Object(_math__WEBPACK_IMPORTED_MODULE_0__["sin"])(x) / k, Object(_math__WEBPACK_IMPORTED_MODULE_0__["sin"])(y) / k];
}

stereographicRaw.invert = Object(_azimuthal__WEBPACK_IMPORTED_MODULE_1__["azimuthalInvert"])(function(z) {
  return 2 * Object(_math__WEBPACK_IMPORTED_MODULE_0__["atan"])(z);
});

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(_index__WEBPACK_IMPORTED_MODULE_2__["default"])(stereographicRaw)
      .scale(250)
      .clipAngle(142);
});


/***/ }),

/***/ "./node_modules/d3-geo/src/projection/transverseMercator.js":
/*!******************************************************************!*\
  !*** ./node_modules/d3-geo/src/projection/transverseMercator.js ***!
  \******************************************************************/
/*! exports provided: transverseMercatorRaw, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transverseMercatorRaw", function() { return transverseMercatorRaw; });
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math */ "./node_modules/d3-geo/src/math.js");
/* harmony import */ var _mercator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mercator */ "./node_modules/d3-geo/src/projection/mercator.js");



function transverseMercatorRaw(lambda, phi) {
  return [Object(_math__WEBPACK_IMPORTED_MODULE_0__["log"])(Object(_math__WEBPACK_IMPORTED_MODULE_0__["tan"])((_math__WEBPACK_IMPORTED_MODULE_0__["halfPi"] + phi) / 2)), -lambda];
}

transverseMercatorRaw.invert = function(x, y) {
  return [-y, 2 * Object(_math__WEBPACK_IMPORTED_MODULE_0__["atan"])(Object(_math__WEBPACK_IMPORTED_MODULE_0__["exp"])(x)) - _math__WEBPACK_IMPORTED_MODULE_0__["halfPi"]];
};

/* harmony default export */ __webpack_exports__["default"] = (function() {
  var m = Object(_mercator__WEBPACK_IMPORTED_MODULE_1__["mercatorProjection"])(transverseMercatorRaw),
      center = m.center,
      rotate = m.rotate;

  m.center = function(_) {
    return arguments.length ? center([-_[1], _[0]]) : (_ = center(), [_[1], -_[0]]);
  };

  m.rotate = function(_) {
    return arguments.length ? rotate([_[0], _[1], _.length > 2 ? _[2] + 90 : 90]) : (_ = rotate(), [_[0], _[1], _[2] - 90]);
  };

  return rotate([0, 0, 90])
      .scale(159.155);
});


/***/ }),

/***/ "./node_modules/d3-geo/src/rotation.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-geo/src/rotation.js ***!
  \*********************************************/
/*! exports provided: rotateRadians, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateRadians", function() { return rotateRadians; });
/* harmony import */ var _compose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compose */ "./node_modules/d3-geo/src/compose.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math */ "./node_modules/d3-geo/src/math.js");



function rotationIdentity(lambda, phi) {
  return [Object(_math__WEBPACK_IMPORTED_MODULE_1__["abs"])(lambda) > _math__WEBPACK_IMPORTED_MODULE_1__["pi"] ? lambda + Math.round(-lambda / _math__WEBPACK_IMPORTED_MODULE_1__["tau"]) * _math__WEBPACK_IMPORTED_MODULE_1__["tau"] : lambda, phi];
}

rotationIdentity.invert = rotationIdentity;

function rotateRadians(deltaLambda, deltaPhi, deltaGamma) {
  return (deltaLambda %= _math__WEBPACK_IMPORTED_MODULE_1__["tau"]) ? (deltaPhi || deltaGamma ? Object(_compose__WEBPACK_IMPORTED_MODULE_0__["default"])(rotationLambda(deltaLambda), rotationPhiGamma(deltaPhi, deltaGamma))
    : rotationLambda(deltaLambda))
    : (deltaPhi || deltaGamma ? rotationPhiGamma(deltaPhi, deltaGamma)
    : rotationIdentity);
}

function forwardRotationLambda(deltaLambda) {
  return function(lambda, phi) {
    return lambda += deltaLambda, [lambda > _math__WEBPACK_IMPORTED_MODULE_1__["pi"] ? lambda - _math__WEBPACK_IMPORTED_MODULE_1__["tau"] : lambda < -_math__WEBPACK_IMPORTED_MODULE_1__["pi"] ? lambda + _math__WEBPACK_IMPORTED_MODULE_1__["tau"] : lambda, phi];
  };
}

function rotationLambda(deltaLambda) {
  var rotation = forwardRotationLambda(deltaLambda);
  rotation.invert = forwardRotationLambda(-deltaLambda);
  return rotation;
}

function rotationPhiGamma(deltaPhi, deltaGamma) {
  var cosDeltaPhi = Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(deltaPhi),
      sinDeltaPhi = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(deltaPhi),
      cosDeltaGamma = Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(deltaGamma),
      sinDeltaGamma = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(deltaGamma);

  function rotation(lambda, phi) {
    var cosPhi = Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(phi),
        x = Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(lambda) * cosPhi,
        y = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(lambda) * cosPhi,
        z = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(phi),
        k = z * cosDeltaPhi + x * sinDeltaPhi;
    return [
      Object(_math__WEBPACK_IMPORTED_MODULE_1__["atan2"])(y * cosDeltaGamma - k * sinDeltaGamma, x * cosDeltaPhi - z * sinDeltaPhi),
      Object(_math__WEBPACK_IMPORTED_MODULE_1__["asin"])(k * cosDeltaGamma + y * sinDeltaGamma)
    ];
  }

  rotation.invert = function(lambda, phi) {
    var cosPhi = Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(phi),
        x = Object(_math__WEBPACK_IMPORTED_MODULE_1__["cos"])(lambda) * cosPhi,
        y = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(lambda) * cosPhi,
        z = Object(_math__WEBPACK_IMPORTED_MODULE_1__["sin"])(phi),
        k = z * cosDeltaGamma - y * sinDeltaGamma;
    return [
      Object(_math__WEBPACK_IMPORTED_MODULE_1__["atan2"])(y * cosDeltaGamma + z * sinDeltaGamma, x * cosDeltaPhi + k * sinDeltaPhi),
      Object(_math__WEBPACK_IMPORTED_MODULE_1__["asin"])(k * cosDeltaPhi - x * sinDeltaPhi)
    ];
  };

  return rotation;
}

/* harmony default export */ __webpack_exports__["default"] = (function(rotate) {
  rotate = rotateRadians(rotate[0] * _math__WEBPACK_IMPORTED_MODULE_1__["radians"], rotate[1] * _math__WEBPACK_IMPORTED_MODULE_1__["radians"], rotate.length > 2 ? rotate[2] * _math__WEBPACK_IMPORTED_MODULE_1__["radians"] : 0);

  function forward(coordinates) {
    coordinates = rotate(coordinates[0] * _math__WEBPACK_IMPORTED_MODULE_1__["radians"], coordinates[1] * _math__WEBPACK_IMPORTED_MODULE_1__["radians"]);
    return coordinates[0] *= _math__WEBPACK_IMPORTED_MODULE_1__["degrees"], coordinates[1] *= _math__WEBPACK_IMPORTED_MODULE_1__["degrees"], coordinates;
  }

  forward.invert = function(coordinates) {
    coordinates = rotate.invert(coordinates[0] * _math__WEBPACK_IMPORTED_MODULE_1__["radians"], coordinates[1] * _math__WEBPACK_IMPORTED_MODULE_1__["radians"]);
    return coordinates[0] *= _math__WEBPACK_IMPORTED_MODULE_1__["degrees"], coordinates[1] *= _math__WEBPACK_IMPORTED_MODULE_1__["degrees"], coordinates;
  };

  return forward;
});


/***/ }),

/***/ "./node_modules/d3-geo/src/stream.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-geo/src/stream.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function streamGeometry(geometry, stream) {
  if (geometry && streamGeometryType.hasOwnProperty(geometry.type)) {
    streamGeometryType[geometry.type](geometry, stream);
  }
}

var streamObjectType = {
  Feature: function(object, stream) {
    streamGeometry(object.geometry, stream);
  },
  FeatureCollection: function(object, stream) {
    var features = object.features, i = -1, n = features.length;
    while (++i < n) streamGeometry(features[i].geometry, stream);
  }
};

var streamGeometryType = {
  Sphere: function(object, stream) {
    stream.sphere();
  },
  Point: function(object, stream) {
    object = object.coordinates;
    stream.point(object[0], object[1], object[2]);
  },
  MultiPoint: function(object, stream) {
    var coordinates = object.coordinates, i = -1, n = coordinates.length;
    while (++i < n) object = coordinates[i], stream.point(object[0], object[1], object[2]);
  },
  LineString: function(object, stream) {
    streamLine(object.coordinates, stream, 0);
  },
  MultiLineString: function(object, stream) {
    var coordinates = object.coordinates, i = -1, n = coordinates.length;
    while (++i < n) streamLine(coordinates[i], stream, 0);
  },
  Polygon: function(object, stream) {
    streamPolygon(object.coordinates, stream);
  },
  MultiPolygon: function(object, stream) {
    var coordinates = object.coordinates, i = -1, n = coordinates.length;
    while (++i < n) streamPolygon(coordinates[i], stream);
  },
  GeometryCollection: function(object, stream) {
    var geometries = object.geometries, i = -1, n = geometries.length;
    while (++i < n) streamGeometry(geometries[i], stream);
  }
};

function streamLine(coordinates, stream, closed) {
  var i = -1, n = coordinates.length - closed, coordinate;
  stream.lineStart();
  while (++i < n) coordinate = coordinates[i], stream.point(coordinate[0], coordinate[1], coordinate[2]);
  stream.lineEnd();
}

function streamPolygon(coordinates, stream) {
  var i = -1, n = coordinates.length;
  stream.polygonStart();
  while (++i < n) streamLine(coordinates[i], stream, 1);
  stream.polygonEnd();
}

/* harmony default export */ __webpack_exports__["default"] = (function(object, stream) {
  if (object && streamObjectType.hasOwnProperty(object.type)) {
    streamObjectType[object.type](object, stream);
  } else {
    streamGeometry(object, stream);
  }
});


/***/ }),

/***/ "./node_modules/d3-geo/src/transform.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-geo/src/transform.js ***!
  \**********************************************/
/*! exports provided: default, transformer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformer", function() { return transformer; });
/* harmony default export */ __webpack_exports__["default"] = (function(methods) {
  return {
    stream: transformer(methods)
  };
});

function transformer(methods) {
  return function(stream) {
    var s = new TransformStream;
    for (var key in methods) s[key] = methods[key];
    s.stream = stream;
    return s;
  };
}

function TransformStream() {}

TransformStream.prototype = {
  constructor: TransformStream,
  point: function(x, y) { this.stream.point(x, y); },
  sphere: function() { this.stream.sphere(); },
  lineStart: function() { this.stream.lineStart(); },
  lineEnd: function() { this.stream.lineEnd(); },
  polygonStart: function() { this.stream.polygonStart(); },
  polygonEnd: function() { this.stream.polygonEnd(); }
};


/***/ }),

/***/ "./node_modules/topojson-client/index.js":
/*!***********************************************!*\
  !*** ./node_modules/topojson-client/index.js ***!
  \***********************************************/
/*! exports provided: bbox, feature, mesh, meshArcs, merge, mergeArcs, neighbors, quantize, transform, untransform */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_bbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/bbox */ "./node_modules/topojson-client/src/bbox.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bbox", function() { return _src_bbox__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _src_feature__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/feature */ "./node_modules/topojson-client/src/feature.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "feature", function() { return _src_feature__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _src_mesh__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/mesh */ "./node_modules/topojson-client/src/mesh.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mesh", function() { return _src_mesh__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "meshArcs", function() { return _src_mesh__WEBPACK_IMPORTED_MODULE_2__["meshArcs"]; });

/* harmony import */ var _src_merge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/merge */ "./node_modules/topojson-client/src/merge.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return _src_merge__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeArcs", function() { return _src_merge__WEBPACK_IMPORTED_MODULE_3__["mergeArcs"]; });

/* harmony import */ var _src_neighbors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/neighbors */ "./node_modules/topojson-client/src/neighbors.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "neighbors", function() { return _src_neighbors__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _src_quantize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/quantize */ "./node_modules/topojson-client/src/quantize.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "quantize", function() { return _src_quantize__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _src_transform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/transform */ "./node_modules/topojson-client/src/transform.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transform", function() { return _src_transform__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _src_untransform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/untransform */ "./node_modules/topojson-client/src/untransform.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "untransform", function() { return _src_untransform__WEBPACK_IMPORTED_MODULE_7__["default"]; });











/***/ }),

/***/ "./node_modules/topojson-client/src/bbox.js":
/*!**************************************************!*\
  !*** ./node_modules/topojson-client/src/bbox.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _transform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transform */ "./node_modules/topojson-client/src/transform.js");


/* harmony default export */ __webpack_exports__["default"] = (function(topology) {
  var t = Object(_transform__WEBPACK_IMPORTED_MODULE_0__["default"])(topology.transform), key,
      x0 = Infinity, y0 = x0, x1 = -x0, y1 = -x0;

  function bboxPoint(p) {
    p = t(p);
    if (p[0] < x0) x0 = p[0];
    if (p[0] > x1) x1 = p[0];
    if (p[1] < y0) y0 = p[1];
    if (p[1] > y1) y1 = p[1];
  }

  function bboxGeometry(o) {
    switch (o.type) {
      case "GeometryCollection": o.geometries.forEach(bboxGeometry); break;
      case "Point": bboxPoint(o.coordinates); break;
      case "MultiPoint": o.coordinates.forEach(bboxPoint); break;
    }
  }

  topology.arcs.forEach(function(arc) {
    var i = -1, n = arc.length, p;
    while (++i < n) {
      p = t(arc[i], i);
      if (p[0] < x0) x0 = p[0];
      if (p[0] > x1) x1 = p[0];
      if (p[1] < y0) y0 = p[1];
      if (p[1] > y1) y1 = p[1];
    }
  });

  for (key in topology.objects) {
    bboxGeometry(topology.objects[key]);
  }

  return [x0, y0, x1, y1];
});


/***/ }),

/***/ "./node_modules/topojson-client/src/bisect.js":
/*!****************************************************!*\
  !*** ./node_modules/topojson-client/src/bisect.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(a, x) {
  var lo = 0, hi = a.length;
  while (lo < hi) {
    var mid = lo + hi >>> 1;
    if (a[mid] < x) lo = mid + 1;
    else hi = mid;
  }
  return lo;
});


/***/ }),

/***/ "./node_modules/topojson-client/src/feature.js":
/*!*****************************************************!*\
  !*** ./node_modules/topojson-client/src/feature.js ***!
  \*****************************************************/
/*! exports provided: default, feature, object */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "feature", function() { return feature; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "object", function() { return object; });
/* harmony import */ var _reverse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reverse */ "./node_modules/topojson-client/src/reverse.js");
/* harmony import */ var _transform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transform */ "./node_modules/topojson-client/src/transform.js");



/* harmony default export */ __webpack_exports__["default"] = (function(topology, o) {
  return o.type === "GeometryCollection"
      ? {type: "FeatureCollection", features: o.geometries.map(function(o) { return feature(topology, o); })}
      : feature(topology, o);
});

function feature(topology, o) {
  var id = o.id,
      bbox = o.bbox,
      properties = o.properties == null ? {} : o.properties,
      geometry = object(topology, o);
  return id == null && bbox == null ? {type: "Feature", properties: properties, geometry: geometry}
      : bbox == null ? {type: "Feature", id: id, properties: properties, geometry: geometry}
      : {type: "Feature", id: id, bbox: bbox, properties: properties, geometry: geometry};
}

function object(topology, o) {
  var transformPoint = Object(_transform__WEBPACK_IMPORTED_MODULE_1__["default"])(topology.transform),
      arcs = topology.arcs;

  function arc(i, points) {
    if (points.length) points.pop();
    for (var a = arcs[i < 0 ? ~i : i], k = 0, n = a.length; k < n; ++k) {
      points.push(transformPoint(a[k], k));
    }
    if (i < 0) Object(_reverse__WEBPACK_IMPORTED_MODULE_0__["default"])(points, n);
  }

  function point(p) {
    return transformPoint(p);
  }

  function line(arcs) {
    var points = [];
    for (var i = 0, n = arcs.length; i < n; ++i) arc(arcs[i], points);
    if (points.length < 2) points.push(points[0]); // This should never happen per the specification.
    return points;
  }

  function ring(arcs) {
    var points = line(arcs);
    while (points.length < 4) points.push(points[0]); // This may happen if an arc has only two points.
    return points;
  }

  function polygon(arcs) {
    return arcs.map(ring);
  }

  function geometry(o) {
    var type = o.type, coordinates;
    switch (type) {
      case "GeometryCollection": return {type: type, geometries: o.geometries.map(geometry)};
      case "Point": coordinates = point(o.coordinates); break;
      case "MultiPoint": coordinates = o.coordinates.map(point); break;
      case "LineString": coordinates = line(o.arcs); break;
      case "MultiLineString": coordinates = o.arcs.map(line); break;
      case "Polygon": coordinates = polygon(o.arcs); break;
      case "MultiPolygon": coordinates = o.arcs.map(polygon); break;
      default: return null;
    }
    return {type: type, coordinates: coordinates};
  }

  return geometry(o);
}


/***/ }),

/***/ "./node_modules/topojson-client/src/identity.js":
/*!******************************************************!*\
  !*** ./node_modules/topojson-client/src/identity.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return x;
});


/***/ }),

/***/ "./node_modules/topojson-client/src/merge.js":
/*!***************************************************!*\
  !*** ./node_modules/topojson-client/src/merge.js ***!
  \***************************************************/
/*! exports provided: default, mergeArcs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeArcs", function() { return mergeArcs; });
/* harmony import */ var _feature__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feature */ "./node_modules/topojson-client/src/feature.js");
/* harmony import */ var _stitch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stitch */ "./node_modules/topojson-client/src/stitch.js");



function planarRingArea(ring) {
  var i = -1, n = ring.length, a, b = ring[n - 1], area = 0;
  while (++i < n) a = b, b = ring[i], area += a[0] * b[1] - a[1] * b[0];
  return Math.abs(area); // Note: doubled area!
}

/* harmony default export */ __webpack_exports__["default"] = (function(topology) {
  return Object(_feature__WEBPACK_IMPORTED_MODULE_0__["object"])(topology, mergeArcs.apply(this, arguments));
});

function mergeArcs(topology, objects) {
  var polygonsByArc = {},
      polygons = [],
      groups = [];

  objects.forEach(geometry);

  function geometry(o) {
    switch (o.type) {
      case "GeometryCollection": o.geometries.forEach(geometry); break;
      case "Polygon": extract(o.arcs); break;
      case "MultiPolygon": o.arcs.forEach(extract); break;
    }
  }

  function extract(polygon) {
    polygon.forEach(function(ring) {
      ring.forEach(function(arc) {
        (polygonsByArc[arc = arc < 0 ? ~arc : arc] || (polygonsByArc[arc] = [])).push(polygon);
      });
    });
    polygons.push(polygon);
  }

  function area(ring) {
    return planarRingArea(Object(_feature__WEBPACK_IMPORTED_MODULE_0__["object"])(topology, {type: "Polygon", arcs: [ring]}).coordinates[0]);
  }

  polygons.forEach(function(polygon) {
    if (!polygon._) {
      var group = [],
          neighbors = [polygon];
      polygon._ = 1;
      groups.push(group);
      while (polygon = neighbors.pop()) {
        group.push(polygon);
        polygon.forEach(function(ring) {
          ring.forEach(function(arc) {
            polygonsByArc[arc < 0 ? ~arc : arc].forEach(function(polygon) {
              if (!polygon._) {
                polygon._ = 1;
                neighbors.push(polygon);
              }
            });
          });
        });
      }
    }
  });

  polygons.forEach(function(polygon) {
    delete polygon._;
  });

  return {
    type: "MultiPolygon",
    arcs: groups.map(function(polygons) {
      var arcs = [], n;

      // Extract the exterior (unique) arcs.
      polygons.forEach(function(polygon) {
        polygon.forEach(function(ring) {
          ring.forEach(function(arc) {
            if (polygonsByArc[arc < 0 ? ~arc : arc].length < 2) {
              arcs.push(arc);
            }
          });
        });
      });

      // Stitch the arcs into one or more rings.
      arcs = Object(_stitch__WEBPACK_IMPORTED_MODULE_1__["default"])(topology, arcs);

      // If more than one ring is returned,
      // at most one of these rings can be the exterior;
      // choose the one with the greatest absolute area.
      if ((n = arcs.length) > 1) {
        for (var i = 1, k = area(arcs[0]), ki, t; i < n; ++i) {
          if ((ki = area(arcs[i])) > k) {
            t = arcs[0], arcs[0] = arcs[i], arcs[i] = t, k = ki;
          }
        }
      }

      return arcs;
    })
  };
}


/***/ }),

/***/ "./node_modules/topojson-client/src/mesh.js":
/*!**************************************************!*\
  !*** ./node_modules/topojson-client/src/mesh.js ***!
  \**************************************************/
/*! exports provided: default, meshArcs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "meshArcs", function() { return meshArcs; });
/* harmony import */ var _feature__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feature */ "./node_modules/topojson-client/src/feature.js");
/* harmony import */ var _stitch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stitch */ "./node_modules/topojson-client/src/stitch.js");



/* harmony default export */ __webpack_exports__["default"] = (function(topology) {
  return Object(_feature__WEBPACK_IMPORTED_MODULE_0__["object"])(topology, meshArcs.apply(this, arguments));
});

function meshArcs(topology, object, filter) {
  var arcs, i, n;
  if (arguments.length > 1) arcs = extractArcs(topology, object, filter);
  else for (i = 0, arcs = new Array(n = topology.arcs.length); i < n; ++i) arcs[i] = i;
  return {type: "MultiLineString", arcs: Object(_stitch__WEBPACK_IMPORTED_MODULE_1__["default"])(topology, arcs)};
}

function extractArcs(topology, object, filter) {
  var arcs = [],
      geomsByArc = [],
      geom;

  function extract0(i) {
    var j = i < 0 ? ~i : i;
    (geomsByArc[j] || (geomsByArc[j] = [])).push({i: i, g: geom});
  }

  function extract1(arcs) {
    arcs.forEach(extract0);
  }

  function extract2(arcs) {
    arcs.forEach(extract1);
  }

  function extract3(arcs) {
    arcs.forEach(extract2);
  }

  function geometry(o) {
    switch (geom = o, o.type) {
      case "GeometryCollection": o.geometries.forEach(geometry); break;
      case "LineString": extract1(o.arcs); break;
      case "MultiLineString": case "Polygon": extract2(o.arcs); break;
      case "MultiPolygon": extract3(o.arcs); break;
    }
  }

  geometry(object);

  geomsByArc.forEach(filter == null
      ? function(geoms) { arcs.push(geoms[0].i); }
      : function(geoms) { if (filter(geoms[0].g, geoms[geoms.length - 1].g)) arcs.push(geoms[0].i); });

  return arcs;
}


/***/ }),

/***/ "./node_modules/topojson-client/src/neighbors.js":
/*!*******************************************************!*\
  !*** ./node_modules/topojson-client/src/neighbors.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bisect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bisect */ "./node_modules/topojson-client/src/bisect.js");


/* harmony default export */ __webpack_exports__["default"] = (function(objects) {
  var indexesByArc = {}, // arc index -> array of object indexes
      neighbors = objects.map(function() { return []; });

  function line(arcs, i) {
    arcs.forEach(function(a) {
      if (a < 0) a = ~a;
      var o = indexesByArc[a];
      if (o) o.push(i);
      else indexesByArc[a] = [i];
    });
  }

  function polygon(arcs, i) {
    arcs.forEach(function(arc) { line(arc, i); });
  }

  function geometry(o, i) {
    if (o.type === "GeometryCollection") o.geometries.forEach(function(o) { geometry(o, i); });
    else if (o.type in geometryType) geometryType[o.type](o.arcs, i);
  }

  var geometryType = {
    LineString: line,
    MultiLineString: polygon,
    Polygon: polygon,
    MultiPolygon: function(arcs, i) { arcs.forEach(function(arc) { polygon(arc, i); }); }
  };

  objects.forEach(geometry);

  for (var i in indexesByArc) {
    for (var indexes = indexesByArc[i], m = indexes.length, j = 0; j < m; ++j) {
      for (var k = j + 1; k < m; ++k) {
        var ij = indexes[j], ik = indexes[k], n;
        if ((n = neighbors[ij])[i = Object(_bisect__WEBPACK_IMPORTED_MODULE_0__["default"])(n, ik)] !== ik) n.splice(i, 0, ik);
        if ((n = neighbors[ik])[i = Object(_bisect__WEBPACK_IMPORTED_MODULE_0__["default"])(n, ij)] !== ij) n.splice(i, 0, ij);
      }
    }
  }

  return neighbors;
});


/***/ }),

/***/ "./node_modules/topojson-client/src/quantize.js":
/*!******************************************************!*\
  !*** ./node_modules/topojson-client/src/quantize.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bbox */ "./node_modules/topojson-client/src/bbox.js");
/* harmony import */ var _untransform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./untransform */ "./node_modules/topojson-client/src/untransform.js");



/* harmony default export */ __webpack_exports__["default"] = (function(topology, transform) {
  if (topology.transform) throw new Error("already quantized");

  if (!transform || !transform.scale) {
    if (!((n = Math.floor(transform)) >= 2)) throw new Error("n must be ≥2");
    box = topology.bbox || Object(_bbox__WEBPACK_IMPORTED_MODULE_0__["default"])(topology);
    var x0 = box[0], y0 = box[1], x1 = box[2], y1 = box[3], n;
    transform = {scale: [x1 - x0 ? (x1 - x0) / (n - 1) : 1, y1 - y0 ? (y1 - y0) / (n - 1) : 1], translate: [x0, y0]};
  } else {
    box = topology.bbox;
  }

  var t = Object(_untransform__WEBPACK_IMPORTED_MODULE_1__["default"])(transform), box, key, inputs = topology.objects, outputs = {};

  function quantizePoint(point) {
    return t(point);
  }

  function quantizeGeometry(input) {
    var output;
    switch (input.type) {
      case "GeometryCollection": output = {type: "GeometryCollection", geometries: input.geometries.map(quantizeGeometry)}; break;
      case "Point": output = {type: "Point", coordinates: quantizePoint(input.coordinates)}; break;
      case "MultiPoint": output = {type: "MultiPoint", coordinates: input.coordinates.map(quantizePoint)}; break;
      default: return input;
    }
    if (input.id != null) output.id = input.id;
    if (input.bbox != null) output.bbox = input.bbox;
    if (input.properties != null) output.properties = input.properties;
    return output;
  }

  function quantizeArc(input) {
    var i = 0, j = 1, n = input.length, p, output = new Array(n); // pessimistic
    output[0] = t(input[0], 0);
    while (++i < n) if ((p = t(input[i], i))[0] || p[1]) output[j++] = p; // non-coincident points
    if (j === 1) output[j++] = [0, 0]; // an arc must have at least two points
    output.length = j;
    return output;
  }

  for (key in inputs) outputs[key] = quantizeGeometry(inputs[key]);

  return {
    type: "Topology",
    bbox: box,
    transform: transform,
    objects: outputs,
    arcs: topology.arcs.map(quantizeArc)
  };
});


/***/ }),

/***/ "./node_modules/topojson-client/src/reverse.js":
/*!*****************************************************!*\
  !*** ./node_modules/topojson-client/src/reverse.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(array, n) {
  var t, j = array.length, i = j - n;
  while (i < --j) t = array[i], array[i++] = array[j], array[j] = t;
});


/***/ }),

/***/ "./node_modules/topojson-client/src/stitch.js":
/*!****************************************************!*\
  !*** ./node_modules/topojson-client/src/stitch.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(topology, arcs) {
  var stitchedArcs = {},
      fragmentByStart = {},
      fragmentByEnd = {},
      fragments = [],
      emptyIndex = -1;

  // Stitch empty arcs first, since they may be subsumed by other arcs.
  arcs.forEach(function(i, j) {
    var arc = topology.arcs[i < 0 ? ~i : i], t;
    if (arc.length < 3 && !arc[1][0] && !arc[1][1]) {
      t = arcs[++emptyIndex], arcs[emptyIndex] = i, arcs[j] = t;
    }
  });

  arcs.forEach(function(i) {
    var e = ends(i),
        start = e[0],
        end = e[1],
        f, g;

    if (f = fragmentByEnd[start]) {
      delete fragmentByEnd[f.end];
      f.push(i);
      f.end = end;
      if (g = fragmentByStart[end]) {
        delete fragmentByStart[g.start];
        var fg = g === f ? f : f.concat(g);
        fragmentByStart[fg.start = f.start] = fragmentByEnd[fg.end = g.end] = fg;
      } else {
        fragmentByStart[f.start] = fragmentByEnd[f.end] = f;
      }
    } else if (f = fragmentByStart[end]) {
      delete fragmentByStart[f.start];
      f.unshift(i);
      f.start = start;
      if (g = fragmentByEnd[start]) {
        delete fragmentByEnd[g.end];
        var gf = g === f ? f : g.concat(f);
        fragmentByStart[gf.start = g.start] = fragmentByEnd[gf.end = f.end] = gf;
      } else {
        fragmentByStart[f.start] = fragmentByEnd[f.end] = f;
      }
    } else {
      f = [i];
      fragmentByStart[f.start = start] = fragmentByEnd[f.end = end] = f;
    }
  });

  function ends(i) {
    var arc = topology.arcs[i < 0 ? ~i : i], p0 = arc[0], p1;
    if (topology.transform) p1 = [0, 0], arc.forEach(function(dp) { p1[0] += dp[0], p1[1] += dp[1]; });
    else p1 = arc[arc.length - 1];
    return i < 0 ? [p1, p0] : [p0, p1];
  }

  function flush(fragmentByEnd, fragmentByStart) {
    for (var k in fragmentByEnd) {
      var f = fragmentByEnd[k];
      delete fragmentByStart[f.start];
      delete f.start;
      delete f.end;
      f.forEach(function(i) { stitchedArcs[i < 0 ? ~i : i] = 1; });
      fragments.push(f);
    }
  }

  flush(fragmentByEnd, fragmentByStart);
  flush(fragmentByStart, fragmentByEnd);
  arcs.forEach(function(i) { if (!stitchedArcs[i < 0 ? ~i : i]) fragments.push([i]); });

  return fragments;
});


/***/ }),

/***/ "./node_modules/topojson-client/src/transform.js":
/*!*******************************************************!*\
  !*** ./node_modules/topojson-client/src/transform.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./identity */ "./node_modules/topojson-client/src/identity.js");


/* harmony default export */ __webpack_exports__["default"] = (function(transform) {
  if (transform == null) return _identity__WEBPACK_IMPORTED_MODULE_0__["default"];
  var x0,
      y0,
      kx = transform.scale[0],
      ky = transform.scale[1],
      dx = transform.translate[0],
      dy = transform.translate[1];
  return function(input, i) {
    if (!i) x0 = y0 = 0;
    var j = 2, n = input.length, output = new Array(n);
    output[0] = (x0 += input[0]) * kx + dx;
    output[1] = (y0 += input[1]) * ky + dy;
    while (j < n) output[j] = input[j], ++j;
    return output;
  };
});


/***/ }),

/***/ "./node_modules/topojson-client/src/untransform.js":
/*!*********************************************************!*\
  !*** ./node_modules/topojson-client/src/untransform.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./identity */ "./node_modules/topojson-client/src/identity.js");


/* harmony default export */ __webpack_exports__["default"] = (function(transform) {
  if (transform == null) return _identity__WEBPACK_IMPORTED_MODULE_0__["default"];
  var x0,
      y0,
      kx = transform.scale[0],
      ky = transform.scale[1],
      dx = transform.translate[0],
      dy = transform.translate[1];
  return function(input, i) {
    if (!i) x0 = y0 = 0;
    var j = 2,
        n = input.length,
        output = new Array(n),
        x1 = Math.round((input[0] - dx) / kx),
        y1 = Math.round((input[1] - dy) / ky);
    output[0] = x1 - x0, x0 = x1;
    output[1] = y1 - y0, y0 = y1;
    while (j < n) output[j] = input[j], ++j;
    return output;
  };
});


/***/ }),

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

var _MapState = _interopRequireDefault(__webpack_require__(/*! ./MapState */ "./src/MapState.js"));

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
        polygons: [],
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
        this.drawPolygons();
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
    key: "drawPolygons",
    value: function drawPolygons() {
      var _this4 = this;

      var mapState = new _MapState.default(this.options.center, this.options.zoom, this.options.tileSize, this.state.canvasDimensions, this.state.moveOffset);
      this.state.polygons.map(function (polygon) {
        polygon.render(_this4.context, mapState);
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
      var _this5 = this;

      markers.map(function (marker) {
        return _this5.addMarker(marker);
      });
    }
  }, {
    key: "addPolygon",
    value: function addPolygon(polygon) {
      this.state.polygons.push(polygon);
    }
  }]);

  return Map;
}();

exports.default = Map;
module.exports = exports["default"];

/***/ }),

/***/ "./src/MapState.js":
/*!*************************!*\
  !*** ./src/MapState.js ***!
  \*************************/
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

var MapState =
/*#__PURE__*/
function () {
  function MapState(center, zoom, tileSize, canvasDimensions, moveOffset) {
    _classCallCheck(this, MapState);

    this._center = center;
    this._zoom = zoom;
    this._tileSize = tileSize;
    this._canvasDimensions = canvasDimensions;
    this._moveOffset = moveOffset;
  }

  _createClass(MapState, [{
    key: "center",
    get: function get() {
      return this._center;
    }
  }, {
    key: "zoom",
    get: function get() {
      return this._zoom;
    }
  }, {
    key: "tileSize",
    get: function get() {
      return this._tileSize;
    }
  }, {
    key: "canvasDimensions",
    get: function get() {
      return this._canvasDimensions;
    }
  }, {
    key: "moveOffset",
    get: function get() {
      return this._moveOffset;
    }
  }]);

  return MapState;
}();

exports.default = MapState;
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

/***/ "./src/Polygon.js":
/*!************************!*\
  !*** ./src/Polygon.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defaultOptions = __webpack_require__(/*! ./defaultOptions */ "./src/defaultOptions.js");

var _TileConversion = _interopRequireDefault(__webpack_require__(/*! ./TileConversion */ "./src/TileConversion.js"));

var _d3Geo = __webpack_require__(/*! d3-geo */ "./node_modules/d3-geo/src/index.js");

var _topojsonClient = __webpack_require__(/*! topojson-client */ "./node_modules/topojson-client/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var POLYGON_CACHE = {};

var Polygon =
/*#__PURE__*/
function () {
  function Polygon(sourceUrl) {
    var _this = this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Polygon);

    this._sourceUrl = sourceUrl;
    this._options = Object.assign({}, _defaultOptions.defaultPolygonOptions, options);
    this._geometry = null;
    fetch(this._sourceUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      _this._geometry = json;
    }).catch(function (err) {
      return console.log("Could not load ".concat(_this._sourceUrl, ": ").concat(err.message || err));
    });
  }

  _createClass(Polygon, [{
    key: "render",
    value: function render(context, mapState) {
      if (!this._geometry) {
        return;
      }

      context.fillStyle = this.options.color;
      context.strokeStyle = this.options.color;
      this.mapState = mapState;
      var center = [this.mapState.canvasDimensions[0] / 2, this.mapState.canvasDimensions[1] / 2];
      var transform = (0, _d3Geo.geoTransform)({
        point: this.projectPoint,
        mapState: mapState,
        center: center
      });
      var path = (0, _d3Geo.geoPath)(transform).context(context);
      context.beginPath();
      path((0, _topojsonClient.mesh)(this._geometry));
      context.stroke();
    }
  }, {
    key: "projectPoint",
    value: function projectPoint(x, y) {
      var _this2 = this;

      var cachedPosition = function cachedPosition(x, y, mapState) {
        var cacheKey = JSON.stringify([[y, x], _this2.mapState.center, _this2.mapState.zoom, _this2.mapState.tileSize, _this2.mapState.canvasDimensions]);

        if (cacheKey in POLYGON_CACHE) {
          return POLYGON_CACHE[cacheKey];
        }

        var position = _TileConversion.default.latLonToPixel([y, x], _this2.mapState.center, _this2.mapState.zoom, _this2.mapState.tileSize, _this2.mapState.canvasDimensions);

        POLYGON_CACHE[cacheKey] = position;
        return position;
      };

      var position = cachedPosition(x, y, this.mapState);
      var projectedX = this.center[0] - position[0] + this.mapState.moveOffset[0];
      var projectedY = this.center[1] - position[1] + this.mapState.moveOffset[1];
      this.stream.point(projectedX, projectedY);
    }
  }, {
    key: "sourceUrl",
    get: function get() {
      return this._sourceUrl;
    }
  }, {
    key: "options",
    get: function get() {
      return this._options;
    }
  }]);

  return Polygon;
}();

exports.default = Polygon;
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
exports.defaultPolygonOptions = exports.defaultMarkerOptions = exports.defaultMapOptions = void 0;
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
var defaultPolygonOptions = {
  /**
   * What color should the polygon be?
   * Supports hex, rgb and rgba values
   */
  color: 'rgba(0, 0, 200, 0.7)'
};
exports.defaultPolygonOptions = defaultPolygonOptions;

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

var _Polygon = _interopRequireDefault(__webpack_require__(/*! ./Polygon */ "./src/Polygon.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  Map: _Map.default,
  Marker: _Marker.default,
  Polygon: _Polygon.default
};
exports.default = _default;
module.exports = exports["default"];

/***/ })

/******/ });
});
//# sourceMappingURL=LightningMaps.js.map