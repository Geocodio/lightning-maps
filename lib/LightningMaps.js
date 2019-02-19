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

/***/ "./node_modules/robust-orientation/orientation.js":
/*!********************************************************!*\
  !*** ./node_modules/robust-orientation/orientation.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var twoProduct = __webpack_require__(/*! two-product */ "./node_modules/two-product/two-product.js")
var robustSum = __webpack_require__(/*! robust-sum */ "./node_modules/robust-sum/robust-sum.js")
var robustScale = __webpack_require__(/*! robust-scale */ "./node_modules/robust-scale/robust-scale.js")
var robustSubtract = __webpack_require__(/*! robust-subtract */ "./node_modules/robust-subtract/robust-diff.js")

var NUM_EXPAND = 5

var EPSILON     = 1.1102230246251565e-16
var ERRBOUND3   = (3.0 + 16.0 * EPSILON) * EPSILON
var ERRBOUND4   = (7.0 + 56.0 * EPSILON) * EPSILON

function cofactor(m, c) {
  var result = new Array(m.length-1)
  for(var i=1; i<m.length; ++i) {
    var r = result[i-1] = new Array(m.length-1)
    for(var j=0,k=0; j<m.length; ++j) {
      if(j === c) {
        continue
      }
      r[k++] = m[i][j]
    }
  }
  return result
}

function matrix(n) {
  var result = new Array(n)
  for(var i=0; i<n; ++i) {
    result[i] = new Array(n)
    for(var j=0; j<n; ++j) {
      result[i][j] = ["m", j, "[", (n-i-1), "]"].join("")
    }
  }
  return result
}

function sign(n) {
  if(n & 1) {
    return "-"
  }
  return ""
}

function generateSum(expr) {
  if(expr.length === 1) {
    return expr[0]
  } else if(expr.length === 2) {
    return ["sum(", expr[0], ",", expr[1], ")"].join("")
  } else {
    var m = expr.length>>1
    return ["sum(", generateSum(expr.slice(0, m)), ",", generateSum(expr.slice(m)), ")"].join("")
  }
}

function determinant(m) {
  if(m.length === 2) {
    return [["sum(prod(", m[0][0], ",", m[1][1], "),prod(-", m[0][1], ",", m[1][0], "))"].join("")]
  } else {
    var expr = []
    for(var i=0; i<m.length; ++i) {
      expr.push(["scale(", generateSum(determinant(cofactor(m, i))), ",", sign(i), m[0][i], ")"].join(""))
    }
    return expr
  }
}

function orientation(n) {
  var pos = []
  var neg = []
  var m = matrix(n)
  var args = []
  for(var i=0; i<n; ++i) {
    if((i&1)===0) {
      pos.push.apply(pos, determinant(cofactor(m, i)))
    } else {
      neg.push.apply(neg, determinant(cofactor(m, i)))
    }
    args.push("m" + i)
  }
  var posExpr = generateSum(pos)
  var negExpr = generateSum(neg)
  var funcName = "orientation" + n + "Exact"
  var code = ["function ", funcName, "(", args.join(), "){var p=", posExpr, ",n=", negExpr, ",d=sub(p,n);\
return d[d.length-1];};return ", funcName].join("")
  var proc = new Function("sum", "prod", "scale", "sub", code)
  return proc(robustSum, twoProduct, robustScale, robustSubtract)
}

var orientation3Exact = orientation(3)
var orientation4Exact = orientation(4)

var CACHED = [
  function orientation0() { return 0 },
  function orientation1() { return 0 },
  function orientation2(a, b) { 
    return b[0] - a[0]
  },
  function orientation3(a, b, c) {
    var l = (a[1] - c[1]) * (b[0] - c[0])
    var r = (a[0] - c[0]) * (b[1] - c[1])
    var det = l - r
    var s
    if(l > 0) {
      if(r <= 0) {
        return det
      } else {
        s = l + r
      }
    } else if(l < 0) {
      if(r >= 0) {
        return det
      } else {
        s = -(l + r)
      }
    } else {
      return det
    }
    var tol = ERRBOUND3 * s
    if(det >= tol || det <= -tol) {
      return det
    }
    return orientation3Exact(a, b, c)
  },
  function orientation4(a,b,c,d) {
    var adx = a[0] - d[0]
    var bdx = b[0] - d[0]
    var cdx = c[0] - d[0]
    var ady = a[1] - d[1]
    var bdy = b[1] - d[1]
    var cdy = c[1] - d[1]
    var adz = a[2] - d[2]
    var bdz = b[2] - d[2]
    var cdz = c[2] - d[2]
    var bdxcdy = bdx * cdy
    var cdxbdy = cdx * bdy
    var cdxady = cdx * ady
    var adxcdy = adx * cdy
    var adxbdy = adx * bdy
    var bdxady = bdx * ady
    var det = adz * (bdxcdy - cdxbdy) 
            + bdz * (cdxady - adxcdy)
            + cdz * (adxbdy - bdxady)
    var permanent = (Math.abs(bdxcdy) + Math.abs(cdxbdy)) * Math.abs(adz)
                  + (Math.abs(cdxady) + Math.abs(adxcdy)) * Math.abs(bdz)
                  + (Math.abs(adxbdy) + Math.abs(bdxady)) * Math.abs(cdz)
    var tol = ERRBOUND4 * permanent
    if ((det > tol) || (-det > tol)) {
      return det
    }
    return orientation4Exact(a,b,c,d)
  }
]

function slowOrient(args) {
  var proc = CACHED[args.length]
  if(!proc) {
    proc = CACHED[args.length] = orientation(args.length)
  }
  return proc.apply(undefined, args)
}

function generateOrientationProc() {
  while(CACHED.length <= NUM_EXPAND) {
    CACHED.push(orientation(CACHED.length))
  }
  var args = []
  var procArgs = ["slow"]
  for(var i=0; i<=NUM_EXPAND; ++i) {
    args.push("a" + i)
    procArgs.push("o" + i)
  }
  var code = [
    "function getOrientation(", args.join(), "){switch(arguments.length){case 0:case 1:return 0;"
  ]
  for(var i=2; i<=NUM_EXPAND; ++i) {
    code.push("case ", i, ":return o", i, "(", args.slice(0, i).join(), ");")
  }
  code.push("}var s=new Array(arguments.length);for(var i=0;i<arguments.length;++i){s[i]=arguments[i]};return slow(s);}return getOrientation")
  procArgs.push(code.join(""))

  var proc = Function.apply(undefined, procArgs)
  module.exports = proc.apply(undefined, [slowOrient].concat(CACHED))
  for(var i=0; i<=NUM_EXPAND; ++i) {
    module.exports[i] = CACHED[i]
  }
}

generateOrientationProc()

/***/ }),

/***/ "./node_modules/robust-point-in-polygon/robust-pnp.js":
/*!************************************************************!*\
  !*** ./node_modules/robust-point-in-polygon/robust-pnp.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = robustPointInPolygon

var orient = __webpack_require__(/*! robust-orientation */ "./node_modules/robust-orientation/orientation.js")

function robustPointInPolygon(vs, point) {
  var x = point[0]
  var y = point[1]
  var n = vs.length
  var inside = 1
  var lim = n
  for(var i = 0, j = n-1; i<lim; j=i++) {
    var a = vs[i]
    var b = vs[j]
    var yi = a[1]
    var yj = b[1]
    if(yj < yi) {
      if(yj < y && y < yi) {
        var s = orient(a, b, point)
        if(s === 0) {
          return 0
        } else {
          inside ^= (0 < s)|0
        }
      } else if(y === yi) {
        var c = vs[(i+1)%n]
        var yk = c[1]
        if(yi < yk) {
          var s = orient(a, b, point)
          if(s === 0) {
            return 0
          } else {
            inside ^= (0 < s)|0
          }
        }
      }
    } else if(yi < yj) {
      if(yi < y && y < yj) {
        var s = orient(a, b, point)
        if(s === 0) {
          return 0
        } else {
          inside ^= (s < 0)|0
        }
      } else if(y === yi) {
        var c = vs[(i+1)%n]
        var yk = c[1]
        if(yk < yi) {
          var s = orient(a, b, point)
          if(s === 0) {
            return 0
          } else {
            inside ^= (s < 0)|0
          }
        }
      }
    } else if(y === yi) {
      var x0 = Math.min(a[0], b[0])
      var x1 = Math.max(a[0], b[0])
      if(i === 0) {
        while(j>0) {
          var k = (j+n-1)%n
          var p = vs[k]
          if(p[1] !== y) {
            break
          }
          var px = p[0]
          x0 = Math.min(x0, px)
          x1 = Math.max(x1, px)
          j = k
        }
        if(j === 0) {
          if(x0 <= x && x <= x1) {
            return 0
          }
          return 1 
        }
        lim = j+1
      }
      var y0 = vs[(j+n-1)%n][1]
      while(i+1<lim) {
        var p = vs[i+1]
        if(p[1] !== y) {
          break
        }
        var px = p[0]
        x0 = Math.min(x0, px)
        x1 = Math.max(x1, px)
        i += 1
      }
      if(x0 <= x && x <= x1) {
        return 0
      }
      var y1 = vs[(i+1)%n][1]
      if(x < x0 && (y0 < y !== y1 < y)) {
        inside ^= 1
      }
    }
  }
  return 2 * inside - 1
}

/***/ }),

/***/ "./node_modules/robust-scale/robust-scale.js":
/*!***************************************************!*\
  !*** ./node_modules/robust-scale/robust-scale.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var twoProduct = __webpack_require__(/*! two-product */ "./node_modules/two-product/two-product.js")
var twoSum = __webpack_require__(/*! two-sum */ "./node_modules/two-sum/two-sum.js")

module.exports = scaleLinearExpansion

function scaleLinearExpansion(e, scale) {
  var n = e.length
  if(n === 1) {
    var ts = twoProduct(e[0], scale)
    if(ts[0]) {
      return ts
    }
    return [ ts[1] ]
  }
  var g = new Array(2 * n)
  var q = [0.1, 0.1]
  var t = [0.1, 0.1]
  var count = 0
  twoProduct(e[0], scale, q)
  if(q[0]) {
    g[count++] = q[0]
  }
  for(var i=1; i<n; ++i) {
    twoProduct(e[i], scale, t)
    var pq = q[1]
    twoSum(pq, t[0], q)
    if(q[0]) {
      g[count++] = q[0]
    }
    var a = t[1]
    var b = q[1]
    var x = a + b
    var bv = x - a
    var y = b - bv
    q[1] = x
    if(y) {
      g[count++] = y
    }
  }
  if(q[1]) {
    g[count++] = q[1]
  }
  if(count === 0) {
    g[count++] = 0.0
  }
  g.length = count
  return g
}

/***/ }),

/***/ "./node_modules/robust-subtract/robust-diff.js":
/*!*****************************************************!*\
  !*** ./node_modules/robust-subtract/robust-diff.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = robustSubtract

//Easy case: Add two scalars
function scalarScalar(a, b) {
  var x = a + b
  var bv = x - a
  var av = x - bv
  var br = b - bv
  var ar = a - av
  var y = ar + br
  if(y) {
    return [y, x]
  }
  return [x]
}

function robustSubtract(e, f) {
  var ne = e.length|0
  var nf = f.length|0
  if(ne === 1 && nf === 1) {
    return scalarScalar(e[0], -f[0])
  }
  var n = ne + nf
  var g = new Array(n)
  var count = 0
  var eptr = 0
  var fptr = 0
  var abs = Math.abs
  var ei = e[eptr]
  var ea = abs(ei)
  var fi = -f[fptr]
  var fa = abs(fi)
  var a, b
  if(ea < fa) {
    b = ei
    eptr += 1
    if(eptr < ne) {
      ei = e[eptr]
      ea = abs(ei)
    }
  } else {
    b = fi
    fptr += 1
    if(fptr < nf) {
      fi = -f[fptr]
      fa = abs(fi)
    }
  }
  if((eptr < ne && ea < fa) || (fptr >= nf)) {
    a = ei
    eptr += 1
    if(eptr < ne) {
      ei = e[eptr]
      ea = abs(ei)
    }
  } else {
    a = fi
    fptr += 1
    if(fptr < nf) {
      fi = -f[fptr]
      fa = abs(fi)
    }
  }
  var x = a + b
  var bv = x - a
  var y = b - bv
  var q0 = y
  var q1 = x
  var _x, _bv, _av, _br, _ar
  while(eptr < ne && fptr < nf) {
    if(ea < fa) {
      a = ei
      eptr += 1
      if(eptr < ne) {
        ei = e[eptr]
        ea = abs(ei)
      }
    } else {
      a = fi
      fptr += 1
      if(fptr < nf) {
        fi = -f[fptr]
        fa = abs(fi)
      }
    }
    b = q0
    x = a + b
    bv = x - a
    y = b - bv
    if(y) {
      g[count++] = y
    }
    _x = q1 + x
    _bv = _x - q1
    _av = _x - _bv
    _br = x - _bv
    _ar = q1 - _av
    q0 = _ar + _br
    q1 = _x
  }
  while(eptr < ne) {
    a = ei
    b = q0
    x = a + b
    bv = x - a
    y = b - bv
    if(y) {
      g[count++] = y
    }
    _x = q1 + x
    _bv = _x - q1
    _av = _x - _bv
    _br = x - _bv
    _ar = q1 - _av
    q0 = _ar + _br
    q1 = _x
    eptr += 1
    if(eptr < ne) {
      ei = e[eptr]
    }
  }
  while(fptr < nf) {
    a = fi
    b = q0
    x = a + b
    bv = x - a
    y = b - bv
    if(y) {
      g[count++] = y
    } 
    _x = q1 + x
    _bv = _x - q1
    _av = _x - _bv
    _br = x - _bv
    _ar = q1 - _av
    q0 = _ar + _br
    q1 = _x
    fptr += 1
    if(fptr < nf) {
      fi = -f[fptr]
    }
  }
  if(q0) {
    g[count++] = q0
  }
  if(q1) {
    g[count++] = q1
  }
  if(!count) {
    g[count++] = 0.0  
  }
  g.length = count
  return g
}

/***/ }),

/***/ "./node_modules/robust-sum/robust-sum.js":
/*!***********************************************!*\
  !*** ./node_modules/robust-sum/robust-sum.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = linearExpansionSum

//Easy case: Add two scalars
function scalarScalar(a, b) {
  var x = a + b
  var bv = x - a
  var av = x - bv
  var br = b - bv
  var ar = a - av
  var y = ar + br
  if(y) {
    return [y, x]
  }
  return [x]
}

function linearExpansionSum(e, f) {
  var ne = e.length|0
  var nf = f.length|0
  if(ne === 1 && nf === 1) {
    return scalarScalar(e[0], f[0])
  }
  var n = ne + nf
  var g = new Array(n)
  var count = 0
  var eptr = 0
  var fptr = 0
  var abs = Math.abs
  var ei = e[eptr]
  var ea = abs(ei)
  var fi = f[fptr]
  var fa = abs(fi)
  var a, b
  if(ea < fa) {
    b = ei
    eptr += 1
    if(eptr < ne) {
      ei = e[eptr]
      ea = abs(ei)
    }
  } else {
    b = fi
    fptr += 1
    if(fptr < nf) {
      fi = f[fptr]
      fa = abs(fi)
    }
  }
  if((eptr < ne && ea < fa) || (fptr >= nf)) {
    a = ei
    eptr += 1
    if(eptr < ne) {
      ei = e[eptr]
      ea = abs(ei)
    }
  } else {
    a = fi
    fptr += 1
    if(fptr < nf) {
      fi = f[fptr]
      fa = abs(fi)
    }
  }
  var x = a + b
  var bv = x - a
  var y = b - bv
  var q0 = y
  var q1 = x
  var _x, _bv, _av, _br, _ar
  while(eptr < ne && fptr < nf) {
    if(ea < fa) {
      a = ei
      eptr += 1
      if(eptr < ne) {
        ei = e[eptr]
        ea = abs(ei)
      }
    } else {
      a = fi
      fptr += 1
      if(fptr < nf) {
        fi = f[fptr]
        fa = abs(fi)
      }
    }
    b = q0
    x = a + b
    bv = x - a
    y = b - bv
    if(y) {
      g[count++] = y
    }
    _x = q1 + x
    _bv = _x - q1
    _av = _x - _bv
    _br = x - _bv
    _ar = q1 - _av
    q0 = _ar + _br
    q1 = _x
  }
  while(eptr < ne) {
    a = ei
    b = q0
    x = a + b
    bv = x - a
    y = b - bv
    if(y) {
      g[count++] = y
    }
    _x = q1 + x
    _bv = _x - q1
    _av = _x - _bv
    _br = x - _bv
    _ar = q1 - _av
    q0 = _ar + _br
    q1 = _x
    eptr += 1
    if(eptr < ne) {
      ei = e[eptr]
    }
  }
  while(fptr < nf) {
    a = fi
    b = q0
    x = a + b
    bv = x - a
    y = b - bv
    if(y) {
      g[count++] = y
    } 
    _x = q1 + x
    _bv = _x - q1
    _av = _x - _bv
    _br = x - _bv
    _ar = q1 - _av
    q0 = _ar + _br
    q1 = _x
    fptr += 1
    if(fptr < nf) {
      fi = f[fptr]
    }
  }
  if(q0) {
    g[count++] = q0
  }
  if(q1) {
    g[count++] = q1
  }
  if(!count) {
    g[count++] = 0.0  
  }
  g.length = count
  return g
}

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

/***/ "./node_modules/two-product/two-product.js":
/*!*************************************************!*\
  !*** ./node_modules/two-product/two-product.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = twoProduct

var SPLITTER = +(Math.pow(2, 27) + 1.0)

function twoProduct(a, b, result) {
  var x = a * b

  var c = SPLITTER * a
  var abig = c - a
  var ahi = c - abig
  var alo = a - ahi

  var d = SPLITTER * b
  var bbig = d - b
  var bhi = d - bbig
  var blo = b - bhi

  var err1 = x - (ahi * bhi)
  var err2 = err1 - (alo * bhi)
  var err3 = err2 - (ahi * blo)

  var y = alo * blo - err3

  if(result) {
    result[0] = y
    result[1] = x
    return result
  }

  return [ y, x ]
}

/***/ }),

/***/ "./node_modules/two-sum/two-sum.js":
/*!*****************************************!*\
  !*** ./node_modules/two-sum/two-sum.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = fastTwoSum

function fastTwoSum(a, b, result) {
	var x = a + b
	var bv = x - a
	var av = x - bv
	var br = b - bv
	var ar = a - av
	if(result) {
		result[0] = ar + br
		result[1] = x
		return result
	}
	return [ar+br, x]
}

/***/ }),

/***/ "./src/Map.js":
/*!********************!*\
  !*** ./src/Map.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Map; });
/* harmony import */ var _TileConversion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TileConversion */ "./src/TileConversion.js");
/* harmony import */ var _TileLayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TileLayer */ "./src/TileLayer.js");
/* harmony import */ var _MapState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MapState */ "./src/MapState.js");
/* harmony import */ var _defaultOptions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defaultOptions */ "./src/defaultOptions.js");
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
    this.options = Object.assign({}, _defaultOptions__WEBPACK_IMPORTED_MODULE_3__["defaultMapOptions"], options);
    this.initializeState();
    this.attachEvents();
    this.lastDrawState = null;
    /**
     * Events
     */

    this.onMarkerClicked = null;
    this.onMarkerHover = null;
    this.onPolygonHover = null;
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
        lastZoomEventActionTime: null,
        startZoom: this.options.zoom,
        targetZoom: this.options.zoom,
        zoomAnimationStart: null,
        scale: 1,
        lastMouseMoveEvent: null,
        mouseVelocities: [],
        markers: [],
        polygons: [],
        tileLayers: [new _TileLayer__WEBPACK_IMPORTED_MODULE_1__["default"](this)],
        mousePosition: {
          x: 0,
          y: 0
        },
        forceRedraw: false
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
      if (this.zoomValueIsValid(zoom) && this.isReadyForZoomEvent()) {
        zoom = Math.round(zoom);
        this.state.tileLayers.push(new _TileLayer__WEBPACK_IMPORTED_MODULE_1__["default"](this, zoom)); // this.state.tileLayers[0].tilesZoomLevel = this.options.zoom;

        this.state.lastZoomEventActionTime = window.performance.now();
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
        this.state.targetMoveOffset = _TileConversion__WEBPACK_IMPORTED_MODULE_0__["default"].pixelToLatLon([x, y], this.options.center, this.options.zoom, this.options.tileSize);
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
    key: "isReadyForZoomEvent",
    value: function isReadyForZoomEvent() {
      if (!this.state.lastZoomEventActionTime) {
        return true;
      }

      var now = window.performance.now();
      var milliSecondsSinceLastEvent = now - this.state.lastZoomEventActionTime;
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

        if (event.deltaY > 5) {
          _this.setZoom(_this.options.zoom - 1);
        } else if (event.deltaY < -5) {
          _this.setZoom(_this.options.zoom + 1);
        }
      });
      this.canvas.addEventListener('dblclick', function (event) {
        event.preventDefault();

        _this.updateMousePosition(event);

        var canvasCenter = _this.getCanvasCenter();

        _this.setTargetMoveOffset(-(_this.state.mousePosition.x - canvasCenter[0]), -(_this.state.mousePosition.y - canvasCenter[1]));

        _this.setZoom(_this.options.zoom + 1);
      });
      this.canvas.addEventListener('mousedown', function (event) {
        event.preventDefault();

        _this.updateMousePosition(event);

        if (!_this.handleMouseEventInteraction(event, 'mousedown')) {
          _this.state.mouseVelocities = [];
          _this.state.dragStartPosition = [_this.state.mousePosition.x - _this.state.moveOffset[0], _this.state.mousePosition.y - _this.state.moveOffset[1]];
        }
      });
      this.canvas.addEventListener('mouseup', function (event) {
        event.preventDefault();

        _this.updateMousePosition(event);

        if (!_this.state.dragStartPosition) {
          _this.handleMouseEventInteraction(event, 'mouseup');
        } else {
          var x = -(_this.state.dragStartPosition[0] - _this.state.mousePosition.x);
          var y = -(_this.state.dragStartPosition[1] - _this.state.mousePosition.y);

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
        }
      });
      this.canvas.addEventListener('mousemove', function (event) {
        event.preventDefault();

        _this.updateMousePosition(event);

        if (_this.state.dragStartPosition) {
          var x = -(_this.state.dragStartPosition[0] - _this.state.mousePosition.x);
          var y = -(_this.state.dragStartPosition[1] - _this.state.mousePosition.y);
          var now = window.performance.now();

          var vx = _this.calculateVelocity(_this.state.moveOffset[0], x, now, _this.state.lastMouseMoveEvent);

          var vy = _this.calculateVelocity(_this.state.moveOffset[1], y, now, _this.state.lastMouseMoveEvent);

          var velocity = Math.round(Math.sqrt(vx * vx + vy * vy));

          _this.state.mouseVelocities.push([now, velocity]);

          _this.setTargetMoveOffset(x, y, false);

          _this.state.lastMouseMoveEvent = window.performance.now();
        } else {
          _this.handleMouseEventInteraction(event, 'mousemove');
        }

        return false;
      });
    }
  }, {
    key: "isCurrentlyDraggingMap",
    value: function isCurrentlyDraggingMap() {
      return this.state.dragStartPosition !== null;
    }
  }, {
    key: "updateMousePosition",
    value: function updateMousePosition(event) {
      var rect = this.canvas.getBoundingClientRect();
      this.state.mousePosition = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
      };
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
          targetMoveOffset = _TileConversion__WEBPACK_IMPORTED_MODULE_0__["default"].latLonToPixel(this.state.targetMoveOffset, this.options.center, this.options.zoom, this.options.tileSize);
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
      var latLon = _TileConversion__WEBPACK_IMPORTED_MODULE_0__["default"].pixelToLatLon(this.state.moveOffset, this.options.center, this.options.zoom, this.options.tileSize);
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
      if (this.state.forceRedraw) {
        this.state.forceRedraw = false;
        return true;
      }

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

        this.renderPolygons();
        this.renderMarkers();
        this.renderControls();
        this.renderAttribution();
      }

      window.requestAnimationFrame(this.draw);
    }
  }, {
    key: "getMapBounds",
    value: function getMapBounds() {
      var canvasCenter = this.getCanvasCenter();
      var nw = _TileConversion__WEBPACK_IMPORTED_MODULE_0__["default"].pixelToLatLon([canvasCenter[0], canvasCenter[1]], this.options.center, this.options.zoom, this.options.tileSize);
      var se = _TileConversion__WEBPACK_IMPORTED_MODULE_0__["default"].pixelToLatLon([-canvasCenter[0], -canvasCenter[1]], this.options.center, this.options.zoom, this.options.tileSize);
      return {
        nw: nw,
        se: se
      };
    }
  }, {
    key: "getVisibleMarkers",
    value: function getVisibleMarkers() {
      var bounds = this.getMapBounds();
      return this.state.markers.filter(function (marker) {
        return marker.coords[0] <= bounds.nw[0] && marker.coords[0] >= bounds.se[0] && marker.coords[1] >= bounds.nw[1] && marker.coords[1] <= bounds.se[1];
      });
    }
  }, {
    key: "getCanvasCenter",
    value: function getCanvasCenter() {
      return [this.state.canvasDimensions[0] / 2, this.state.canvasDimensions[1] / 2];
    }
  }, {
    key: "renderMarkers",
    value: function renderMarkers() {
      var _this3 = this;

      var visibleMarkers = this.getVisibleMarkers();
      var canvasCenter = this.getCanvasCenter();
      visibleMarkers.map(function (marker) {
        var position = _TileConversion__WEBPACK_IMPORTED_MODULE_0__["default"].latLonToPixel(marker.coords, _this3.options.center, _this3.options.zoom, _this3.options.tileSize);
        marker.render(_this3.context, [canvasCenter[0] - position[0] + _this3.state.moveOffset[0], canvasCenter[1] - position[1] + _this3.state.moveOffset[1]]);
      });
    }
  }, {
    key: "renderPolygons",
    value: function renderPolygons() {
      var _this4 = this;

      var mapState = new _MapState__WEBPACK_IMPORTED_MODULE_2__["default"](this.options.center, this.options.zoom, this.state.targetZoom, this.options.tileSize, this.state.canvasDimensions, this.state.moveOffset);
      this.state.polygons.map(function (polygon) {
        polygon.render(_this4.context, mapState);

        if (!_this4.isCurrentlyDraggingMap() && _this4.onPolygonHover) {
          polygon.handleMouseOver(_this4.context, mapState, _this4.state.mousePosition);
        }
      });
    }
  }, {
    key: "handleMouseEventInteraction",
    value: function handleMouseEventInteraction(event, name) {
      var _this5 = this;

      var controlObjects = this.getControlObjects().filter(function (item) {
        return _this5.isMouseOverObject(item.bounds);
      });
      var markers = controlObjects.length <= 0 && (this.onMarkerClicked || this.onMarkerHover) ? this.getMarkersBounds().filter(function (item) {
        return _this5.isMouseOverObject(item.bounds);
      }) : [];

      if (name === 'mouseup') {
        if (controlObjects.length > 0) {
          var controlObject = controlObjects[0];
          this.setZoom(controlObject.label === '+' ? this.options.zoom + 1 : this.options.zoom - 1);
        }

        if (this.onMarkerClicked) {
          markers.map(function (item) {
            return _this5.onMarkerClicked(item.marker);
          });
        }
      } else {
        if (this.onMarkerHover) {
          markers.map(function (item) {
            return _this5.onMarkerHover(item.marker);
          });
        }
      }

      var controlsOrMarkersIsHover = controlObjects.length > 0 || markers.length > 0;
      var polygonIsHover = false;

      if (this.onPolygonHover) {
        var polygons = [];

        if (!controlsOrMarkersIsHover && !this.isCurrentlyDraggingMap()) {
          var mapState = new _MapState__WEBPACK_IMPORTED_MODULE_2__["default"](this.options.center, this.options.zoom, this.state.targetZoom, this.options.tileSize, this.state.canvasDimensions, this.state.moveOffset);
          polygons = this.state.polygons.map(function (polygon) {
            return polygon.handleMouseOver(null, mapState, _this5.state.mousePosition);
          }).filter(function (polygon) {
            return polygon.length > 0;
          });
        }

        polygonIsHover = polygons.length > 0;

        if (polygonIsHover) {
          polygons.map(function (polygon) {
            return polygon.map(function (item) {
              return _this5.onPolygonHover(item);
            });
          });
        }
      }

      this.canvas.style.cursor = controlsOrMarkersIsHover || polygonIsHover ? 'pointer' : 'grab'; // Let caller know if controls or markers were interacted with. This will prevent further
      // mouse interactions from being triggered

      return controlsOrMarkersIsHover;
    }
  }, {
    key: "getControlObjects",
    value: function getControlObjects() {
      var margin = 4;
      var size = 30;
      return [{
        bounds: {
          x: margin,
          y: margin,
          width: size,
          height: size
        },
        label: '+'
      }, {
        bounds: {
          x: margin,
          y: margin + size + margin,
          width: size,
          height: size
        },
        label: '-'
      }];
    }
  }, {
    key: "getMarkersBounds",
    value: function getMarkersBounds() {
      var _this6 = this;

      var visibleMarkers = this.getVisibleMarkers();
      var canvasCenter = this.getCanvasCenter();
      return visibleMarkers.map(function (marker) {
        var position = _TileConversion__WEBPACK_IMPORTED_MODULE_0__["default"].latLonToPixel(marker.coords, _this6.options.center, _this6.options.zoom, _this6.options.tileSize);
        var markerSize = marker.size;
        var markerOffset = marker.offset;
        return {
          bounds: {
            x: canvasCenter[0] - position[0] + _this6.state.moveOffset[0] - markerSize[0] / 2 + markerOffset[0],
            y: canvasCenter[1] - position[1] + _this6.state.moveOffset[1] - markerSize[1] / 2 + markerOffset[1],
            width: markerSize[0],
            height: markerSize[1]
          },
          marker: marker
        };
      });
    }
  }, {
    key: "renderControls",
    value: function renderControls() {
      var _this7 = this;

      this.getControlObjects().map(function (item) {
        return _this7.renderControl(item.bounds, item.label);
      });
    }
  }, {
    key: "renderControl",
    value: function renderControl(bounds, label) {
      var radius = 10; // Background

      this.context.fillStyle = this.isMouseOverObject(bounds) ? 'rgba(100, 100, 100, 0.7)' : 'rgba(0, 0, 0, 0.7)';
      this.roundedRectangle(bounds.x, bounds.y, bounds.width, bounds.height, radius); // Text

      this.context.font = 'bold 25px courier';
      this.context.textAlign = 'center';
      this.context.textBaseline = 'middle';
      this.context.fillStyle = 'rgba(255, 255, 255)';
      this.context.fillText(label, bounds.x + bounds.width / 2, bounds.y + bounds.height / 2);
    }
  }, {
    key: "isMouseOverObject",
    value: function isMouseOverObject(bounds) {
      return this.state.mousePosition.x >= bounds.x && this.state.mousePosition.x <= bounds.x + bounds.width && this.state.mousePosition.y >= bounds.y && this.state.mousePosition.y <= bounds.y + bounds.height;
    }
  }, {
    key: "renderAttribution",
    value: function renderAttribution() {
      var margin = 4;
      this.context.font = 'bold 12px sans-serif';
      this.context.textAlign = 'left';
      this.context.textBaseline = 'alphabetic';
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
      var radius = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 5;
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
      var _this8 = this;

      markers.map(function (marker) {
        return _this8.addMarker(marker);
      });
    }
  }, {
    key: "setMarkers",
    value: function setMarkers(markers) {
      this.state.markers = markers;
      this.state.forceRedraw = true;
    }
  }, {
    key: "addPolygon",
    value: function addPolygon(polygon) {
      this.state.polygons.push(polygon);
    }
  }, {
    key: "setPolygons",
    value: function setPolygons(polygons) {
      this.state.polygons = polygons;
    }
  }]);

  return Map;
}();



/***/ }),

/***/ "./src/MapState.js":
/*!*************************!*\
  !*** ./src/MapState.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MapState; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MapState =
/*#__PURE__*/
function () {
  function MapState(center, zoom, targetZoom, tileSize, canvasDimensions, moveOffset) {
    _classCallCheck(this, MapState);

    this._center = center;
    this._zoom = zoom;
    this._targetZoom = targetZoom;
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
    key: "targetZoom",
    get: function get() {
      return this._targetZoom;
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



/***/ }),

/***/ "./src/Marker.js":
/*!***********************!*\
  !*** ./src/Marker.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Marker; });
/* harmony import */ var _defaultOptions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaultOptions */ "./src/defaultOptions.js");
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
    this._options = Object.assign({}, _defaultOptions__WEBPACK_IMPORTED_MODULE_0__["defaultMarkerOptions"], options);
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

        case 'image':
          renderFunction = this.renderImage;
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
      context.arc(position[0], position[1], this.size[0] / 2, 0, 2 * Math.PI);
      context.fill();
      context.restore();
    }
  }, {
    key: "renderDonut",
    value: function renderDonut(context, position) {
      context.save();
      context.beginPath();
      context.lineWidth = 5;
      context.arc(position[0], position[1], this.size[0] / 2, 0, 2 * Math.PI);
      context.stroke();
      context.restore();
    }
  }, {
    key: "renderMarker",
    value: function renderMarker(context, position) {
      var size = this.size;
      var x = position[0] - size[0] / 2;
      var y = position[1] - size[1];
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
    key: "renderImage",
    value: function renderImage(context, position) {
      if (this.options.image) {
        var size = this.size;
        var x = position[0] - size[0] / 2 + this.offset[0];
        var y = position[1] - size[1] / 2 + this.offset[1];
        context.drawImage(this.options.image, x, y, size[0], size[1]);
      }
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
  }, {
    key: "size",
    get: function get() {
      switch (this.options.type) {
        case 'marker':
          return [17.698069, 24.786272];

        case 'circle':
          return [10, 10];

        case 'donut':
          return [14, 14];

        case 'image':
          return this.options.image ? [this.options.image.width, this.options.image.height] : null;

        default:
          return null;
      }
    }
  }, {
    key: "offset",
    get: function get() {
      switch (this.options.type) {
        case 'marker':
          return [0, -(this.size[1] / 2)];

        case 'image':
          return this.options.offset;

        default:
          return [0, 0];
      }
    }
  }]);

  return Marker;
}();



/***/ }),

/***/ "./src/Polygon.js":
/*!************************!*\
  !*** ./src/Polygon.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Polygon; });
/* harmony import */ var _defaultOptions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaultOptions */ "./src/defaultOptions.js");
/* harmony import */ var _TileConversion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TileConversion */ "./src/TileConversion.js");
/* harmony import */ var topojson_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! topojson-client */ "./node_modules/topojson-client/index.js");
/* harmony import */ var robust_point_in_polygon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! robust-point-in-polygon */ "./node_modules/robust-point-in-polygon/robust-pnp.js");
/* harmony import */ var robust_point_in_polygon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(robust_point_in_polygon__WEBPACK_IMPORTED_MODULE_3__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var Polygon =
/*#__PURE__*/
function () {
  function Polygon(json, objectName) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var hoverOptions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

    _classCallCheck(this, Polygon);

    this._options = Object.assign({}, _defaultOptions__WEBPACK_IMPORTED_MODULE_0__["defaultPolygonOptions"], options);
    this._hoverOptions = Object.assign({}, _defaultOptions__WEBPACK_IMPORTED_MODULE_0__["defaultPolygonOptions"], _defaultOptions__WEBPACK_IMPORTED_MODULE_0__["defaultPolygonHoverOptions"], hoverOptions);
    this.globalIndex = this.prepareGlobalDataObject();

    if (!objectName) {
      objectName = Object.keys(json.objects)[0];
    }

    if (!(objectName in json.objects)) {
      throw new Error("Invalid object name, valid options are: ".concat(Object.keys(json.objects).join(', ')));
    }

    this.geometry = Object(topojson_client__WEBPACK_IMPORTED_MODULE_2__["feature"])(json, json.objects[objectName]);
  }

  _createClass(Polygon, [{
    key: "prepareGlobalDataObject",
    value: function prepareGlobalDataObject() {
      if (!('lightningMapsPolygons' in window)) {
        window.lightningMapsPolygons = [];
      }

      var index = window.lightningMapsPolygons.length;
      window.lightningMapsPolygons[index] = {
        geometry: null,
        projectedGeometry: null
      };
      return index;
    }
  }, {
    key: "handleMouseOver",
    value: function handleMouseOver(context, mapState, mousePosition) {
      var _this = this;

      var currentlyZooming = Math.round(mapState.zoom) !== mapState.zoom;

      if (!this.geometry || !this.projectedGeometry || currentlyZooming) {
        return [];
      }

      var canvasCenter = [mapState.canvasDimensions[0] / 2, mapState.canvasDimensions[1] / 2];
      var originZoom = this.determineOriginZoom(mapState);
      var centerOffset = this.calculateCenterOffset(mapState, originZoom);
      var point = [mousePosition.x - centerOffset[0] - canvasCenter[0], mousePosition.y - centerOffset[1] - canvasCenter[1]];
      return this.projectedGeometry.filter(function (item) {
        var isHover = item.geometry.filter(function (list) {
          return robust_point_in_polygon__WEBPACK_IMPORTED_MODULE_3___default()(list, point) === -1;
        }).length > 0;

        if (isHover && context) {
          context.beginPath();
          item.geometry.map(function (list) {
            list.map(function (position, index) {
              position = [position[0] + centerOffset[0] + canvasCenter[0], position[1] + centerOffset[1] + canvasCenter[1]];

              if (index === 0) {
                context.moveTo(position[0], position[1]);
              } else {
                context.lineTo(position[0], position[1]);
              }
            });
          });

          _this.applyContextStyles(context, _this.hoverOptions, mapState.zoom);

          if (_this.options.enableStroke) context.fill();
          if (_this.options.enableFill) context.stroke();
        }

        return isHover;
      });
    }
  }, {
    key: "calculateCenterOffset",
    value: function calculateCenterOffset(mapState, originZoom) {
      return [-(_TileConversion__WEBPACK_IMPORTED_MODULE_1__["default"].lon2tile(mapState.center[1], originZoom, false) * mapState.tileSize), -(_TileConversion__WEBPACK_IMPORTED_MODULE_1__["default"].lat2tile(mapState.center[0], originZoom, false) * mapState.tileSize)];
    }
  }, {
    key: "render",
    value: function render(context, mapState) {
      var _this2 = this;

      if (!this.geometry) {
        return;
      }

      var originZoom = this.determineOriginZoom(mapState);
      var zoomDiff = originZoom ? mapState.zoom - originZoom : 0;
      var scale = zoomDiff !== 0 ? Math.pow(2, zoomDiff) : 1;
      var mapCenterChanged = this.renderedMapCenter !== mapState.center,
          mapZoomChanged = zoomDiff === 0 && this.renderedZoomLevel !== mapState.zoom;
      var shouldReRender = mapCenterChanged || mapZoomChanged;
      var centerOffset = null;

      if (shouldReRender) {
        this.renderedZoomLevel = mapState.zoom;
        this.renderedMapCenter = mapState.center;
        this.projectedGeometry = this.geometry.features.map(function (feature) {
          return _objectSpread({}, feature, {
            geometry: _this2.projectGeometry(feature.geometry, mapState)
          });
        });
        centerOffset = this.calculateCenterOffset(mapState, originZoom);
        this.calculatePolygonExtends(centerOffset);
      }

      var canvasCenter = [mapState.canvasDimensions[0] / 2, mapState.canvasDimensions[1] / 2];
      var imagePosition = [canvasCenter[0] + mapState.moveOffset[0] + this.polygonExtends.minX * scale, canvasCenter[1] + mapState.moveOffset[1] + this.polygonExtends.minY * scale];
      var imageRect = {
        left: Math.floor(imagePosition[0] * -1),
        right: Math.ceil(Math.abs(imagePosition[0]) + mapState.canvasDimensions[0]),
        top: Math.floor(imagePosition[1] * -1),
        bottom: Math.ceil(Math.abs(imagePosition[1]) + mapState.canvasDimensions[1])
      };

      if (shouldReRender) {
        this.renderOffscreenCanvas(mapState, centerOffset, imageRect);
      }

      var imageDrawPosition = [mapState.moveOffset[0] - canvasCenter[0] * (scale - 1), mapState.moveOffset[1] - canvasCenter[1] * (scale - 1)];
      var scaledWidth = this.polygonDimensions[0] * scale,
          scaledHeight = this.polygonDimensions[1] * scale;
      context.drawImage(this.offscreenCanvas, imageDrawPosition[0], imageDrawPosition[1], scaledWidth, scaledHeight);
    }
  }, {
    key: "determineOriginZoom",
    value: function determineOriginZoom(mapState) {
      var originZoom = mapState.zoom;

      if (mapState.targetZoom > mapState.zoom) {
        // Zoming in
        originZoom = Math.floor(mapState.zoom);
      } else if (mapState.targetZoom < mapState.zoom) {
        // Zooming out
        originZoom = Math.ceil(mapState.zoom);
      }

      return originZoom;
    }
  }, {
    key: "createOffscreenCanvas",
    value: function createOffscreenCanvas(clipRect) {
      this.polygonDimensions = [clipRect.right - clipRect.left, clipRect.bottom - clipRect.top];
      this.offscreenCanvas = document.createElement('canvas');
      this.offscreenCanvas.width = this.polygonDimensions[0];
      this.offscreenCanvas.height = this.polygonDimensions[1];
      return this.offscreenCanvas.getContext('2d');
    }
  }, {
    key: "calculatePolygonExtends",
    value: function calculatePolygonExtends(centerOffset) {
      var minX,
          maxX,
          minY,
          maxY = null;
      this.mapGeometry(function (position) {
        position = [position[0] + centerOffset[0], position[1] + centerOffset[1]];

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
      this.polygonDimensions = [Math.ceil(maxX - minX), Math.ceil(maxY - minY)];
      this.polygonExtends = {
        minX: minX,
        maxX: maxX,
        minY: minY,
        maxY: maxY
      };
    }
  }, {
    key: "renderOffscreenCanvas",
    value: function renderOffscreenCanvas(mapState, centerOffset, clipRect) {
      var _this3 = this;

      var offscreenContext = this.createOffscreenCanvas(clipRect);
      offscreenContext.beginPath();
      offscreenContext.font = 'bold 8px helvetica';
      this.projectedGeometry.map(function (item) {
        return item.geometry.map(function (list) {
          var pointsInClipRect = list.filter(function (position) {
            position = [position[0] - _this3.polygonExtends.minX + centerOffset[0], position[1] - _this3.polygonExtends.minY + centerOffset[1]];
            return position[0] >= clipRect.left && position[0] <= clipRect.right && position[1] >= clipRect.top && position[1] <= clipRect.bottom;
          });

          if (pointsInClipRect.length > 0) {
            list.map(function (position, index) {
              position = [position[0] - _this3.polygonExtends.minX + centerOffset[0] - clipRect.left, position[1] - _this3.polygonExtends.minY + centerOffset[1] - clipRect.top];

              if (index === 0) {
                // offscreenContext.fillText(item.properties.NAME, position[0], position[1]);
                offscreenContext.moveTo(position[0], position[1]);
              } else {
                offscreenContext.lineTo(position[0], position[1]);
              }
            });
          }
        });
      });
      this.applyContextStyles(offscreenContext, this.options, mapState.zoom);
      if (this.options.enableStroke) offscreenContext.fill();
      if (this.options.enableFill) offscreenContext.stroke();
    }
  }, {
    key: "applyContextStyles",
    value: function applyContextStyles(context, options, zoom) {
      context.fillStyle = options.fillStyle;
      context.strokeStyle = options.strokeStyle;
      context.lineWidth = options.lineWidth * zoom;
      context.setLineDash(options.lineDash);
      context.lineJoin = 'round';
    }
  }, {
    key: "mapGeometry",
    value: function mapGeometry(pointCallback) {
      return this.projectedGeometry.map(function (item) {
        return item.geometry.map(function (list) {
          return list.map(pointCallback);
        });
      });
    }
  }, {
    key: "projectGeometry",
    value: function projectGeometry(geometry, mapState) {
      var _this4 = this;

      if (geometry) {
        switch (geometry.type) {
          case 'Polygon':
            return [geometry.coordinates[0].map(function (item) {
              return _this4.projectPoint(mapState, item[0], item[1]);
            })];

          case 'MultiPolygon':
            return geometry.coordinates.map(function (coordinates) {
              return coordinates[0].map(function (item) {
                return _this4.projectPoint(mapState, item[0], item[1]);
              });
            });
        }
      }

      return [];
    }
  }, {
    key: "projectPoint",
    value: function projectPoint(mapState, x, y) {
      var position = _TileConversion__WEBPACK_IMPORTED_MODULE_1__["default"].latLonToPixel([y, x], null, mapState.zoom, mapState.tileSize);
      return [-position[0], -position[1]];
    }
  }, {
    key: "options",
    get: function get() {
      return this._options;
    }
  }, {
    key: "hoverOptions",
    get: function get() {
      return this._hoverOptions;
    }
  }, {
    key: "geometry",
    get: function get() {
      return window.lightningMapsPolygons[this.globalIndex].geometry;
    },
    set: function set(geometry) {
      window.lightningMapsPolygons[this.globalIndex].geometry = geometry;
    }
  }, {
    key: "projectedGeometry",
    get: function get() {
      return window.lightningMapsPolygons[this.globalIndex].projectedGeometry;
    },
    set: function set(projectedGeometry) {
      window.lightningMapsPolygons[this.globalIndex].projectedGeometry = projectedGeometry;
    }
  }]);

  return Polygon;
}();



/***/ }),

/***/ "./src/Tile.js":
/*!*********************!*\
  !*** ./src/Tile.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Tile; });
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
    key: "isValid",
    value: function isValid() {
      var max = 1 << this.zoom;

      if (this.x >= max || this.x < 0 || this.y >= max || this.y < 0) {
        return false;
      }

      return true;
    }
  }, {
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



/***/ }),

/***/ "./src/TileConversion.js":
/*!*******************************!*\
  !*** ./src/TileConversion.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TileConversion; });
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
    value: function latLonToPixel(coord, center, zoom, tileSize) {
      var tileX = TileConversion.lon2tile(coord[1], zoom, false);
      var tileY = TileConversion.lat2tile(coord[0], zoom, false);
      var tileCenterX = 0,
          tileCenterY = 0;

      if (center) {
        tileCenterX = TileConversion.lon2tile(center[1], zoom, false);
        tileCenterY = TileConversion.lat2tile(center[0], zoom, false);
      }

      return [-(tileX - tileCenterX) * tileSize, -(tileY - tileCenterY) * tileSize];
    }
  }]);

  return TileConversion;
}();



/***/ }),

/***/ "./src/TileLayer.js":
/*!**************************!*\
  !*** ./src/TileLayer.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TileLayer; });
/* harmony import */ var _TileConversion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TileConversion */ "./src/TileConversion.js");
/* harmony import */ var _Tile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tile */ "./src/Tile.js");
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
      var centerY = _TileConversion__WEBPACK_IMPORTED_MODULE_0__["default"].lat2tile(options.center[0], Math.round(this.tilesZoomLevel || options.zoom), false);
      var centerX = _TileConversion__WEBPACK_IMPORTED_MODULE_0__["default"].lon2tile(options.center[1], Math.round(this.tilesZoomLevel || options.zoom), false);
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
          var tile = new _Tile__WEBPACK_IMPORTED_MODULE_1__["default"](tileX, tileY, Math.round(this.tilesZoomLevel || options.zoom));

          if (tile.isValid()) {
            this.ensureTileAsset(tile);
            grid[x][y] = tile;
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
      var totalTiles = 0,
          loadedTiles = 0;

      for (var y = 0; y < verticalTiles; y++) {
        for (var x = 0; x < horizontalTiles; x++) {
          var tile = this.state.grid[x][y];

          if (tile) {
            totalTiles++;
          }

          var cachedTile = tile && this.map.state.tiles[tile.id];

          if (cachedTile && cachedTile.loaded) {
            loadedTiles++;
          }
        }
      }

      return loadedTiles / totalTiles;
    }
  }]);

  return TileLayer;
}();



/***/ }),

/***/ "./src/defaultOptions.js":
/*!*******************************!*\
  !*** ./src/defaultOptions.js ***!
  \*******************************/
/*! exports provided: defaultMapOptions, defaultMarkerOptions, defaultPolygonOptions, defaultPolygonHoverOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultMapOptions", function() { return defaultMapOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultMarkerOptions", function() { return defaultMarkerOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultPolygonOptions", function() { return defaultPolygonOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultPolygonHoverOptions", function() { return defaultPolygonHoverOptions; });
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
  debug: false
};
var defaultMarkerOptions = {
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
  offset: [0, 0]
};
var defaultPolygonOptions = {
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
  fillStyle: 'rgba(0, 0, 0, 0.2)'
};
var defaultPolygonHoverOptions = {
  strokeStyle: 'red',
  lineWidth: 0.5
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: Map, Marker, Polygon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Map */ "./src/Map.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Map", function() { return _Map__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Marker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Marker */ "./src/Marker.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Marker", function() { return _Marker__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Polygon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Polygon */ "./src/Polygon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Polygon", function() { return _Polygon__WEBPACK_IMPORTED_MODULE_2__["default"]; });






/***/ })

/******/ });
});
//# sourceMappingURL=LightningMaps.js.map