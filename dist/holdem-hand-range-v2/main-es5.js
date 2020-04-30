function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1>{{title}}</h1>\n<app-hand-range-toolset></app-hand-range-toolset>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/hand-range-toolset/hand-range-toolset.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/hand-range-toolset/hand-range-toolset.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHandRangeToolsetHandRangeToolsetComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h2>Hand Range</h2>\n<mat-form-field>\n  <input matInput type=\"text\" name=\"textHandRange\" [(ngModel)]=\"handRangeText\">\n</mat-form-field>\n<p>Range Percentage: {{rangePercentage | number: '.2-2'}}%</p>\n<button mat-raised-button color=\"primary\" (click)=\"resetHandRange();\">Reset Range</button>\n<mat-grid-list cols=\"13\">\n  <mat-grid-tile\n    *ngFor=\"let handRangePiece of handRange\"\n    (mousedown)=\"enableInRange(handRangePiece)\"\n    (mouseenter)=\"dragEnableInRange(handRangePiece)\"\n    (mouseup)=\"toggleInRange(handRangePiece)\"\n  >\n    <mat-card\n      handRangePieceDirective\n      [class.piece-in-range]=\"handRangePiece.isInRange === true\"\n      class=\"no-select\"\n    >\n      {{ displayRank(handRangePiece.rankOne)\n      }}{{ displayRank(handRangePiece.rankTwo)\n      }}{{ !handRangePiece.isPair ? (handRangePiece.isSuited ? \"s\" : \"o\") : \"\" }}\n    </mat-card>\n  </mat-grid-tile>\n</mat-grid-list>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-enums.model.ts":
  /*!************************************!*\
    !*** ./src/app/app-enums.model.ts ***!
    \************************************/

  /*! exports provided: Rank */

  /***/
  function srcAppAppEnumsModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Rank", function () {
      return Rank;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Rank;

    (function (Rank) {
      Rank[Rank["Two"] = 2] = "Two";
      Rank[Rank["Three"] = 3] = "Three";
      Rank[Rank["Four"] = 4] = "Four";
      Rank[Rank["Five"] = 5] = "Five";
      Rank[Rank["Six"] = 6] = "Six";
      Rank[Rank["Seven"] = 7] = "Seven";
      Rank[Rank["Eight"] = 8] = "Eight";
      Rank[Rank["Nine"] = 9] = "Nine";
      Rank[Rank["Ten"] = 10] = "Ten";
      Rank[Rank["Jack"] = 11] = "Jack";
      Rank[Rank["Queen"] = 12] = "Queen";
      Rank[Rank["King"] = 13] = "King";
      Rank[Rank["Ace"] = 14] = "Ace";
    })(Rank || (Rank = {}));
    /***/

  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'Hold\'em Poker Toolset';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/esm2015/card.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/esm2015/grid-list.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _hand_range_toolset_hand_range_toolset_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./hand-range-toolset/hand-range-toolset.component */
    "./src/app/hand-range-toolset/hand-range-toolset.component.ts");
    /* harmony import */


    var _hand_range_piece_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./hand-range-piece.directive */
    "./src/app/hand-range-piece.directive.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _hand_range_toolset_hand_range_toolset_component__WEBPACK_IMPORTED_MODULE_9__["HandRangeToolsetComponent"], _hand_range_piece_directive__WEBPACK_IMPORTED_MODULE_10__["HandRangePiece"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/default-hand-range.ts":
  /*!***************************************!*\
    !*** ./src/app/default-hand-range.ts ***!
    \***************************************/

  /*! exports provided: DEFAULT_HAND_RANGE */

  /***/
  function srcAppDefaultHandRangeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DEFAULT_HAND_RANGE", function () {
      return DEFAULT_HAND_RANGE;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var DEFAULT_HAND_RANGE = getDefaultRange();

    function getDefaultRange() {
      var output = [];

      for (var i = 14; i > 1; i--) {
        for (var j = 14; j > 1; j--) {
          var rankOne = void 0;
          var rankTwo = void 0;
          var isSuited = void 0;
          var isPair = void 0;
          var isInRange = false;
          var rangeWeight = void 0; // places higher rank first

          if (i > j) {
            rankOne = i;
            rankTwo = j;
            isSuited = true;
            isPair = false;
            rangeWeight = 4;
          } else if (i == j) {
            rankOne = i;
            rankTwo = j;
            isSuited = false;
            isPair = true;
            rangeWeight = 6;
          } else {
            rankOne = j;
            rankTwo = i;
            isSuited = false;
            isPair = false;
            rangeWeight = 12;
          }

          var currentHandRangePiece = {
            rankOne: rankOne,
            rankTwo: rankTwo,
            isSuited: isSuited,
            isPair: isPair,
            isInRange: isInRange,
            rangeWeight: rangeWeight
          };
          output.push(currentHandRangePiece);
        }
      }

      return output;
    }
    /***/

  },

  /***/
  "./src/app/hand-range-piece.directive.ts":
  /*!***********************************************!*\
    !*** ./src/app/hand-range-piece.directive.ts ***!
    \***********************************************/

  /*! exports provided: HandRangePiece */

  /***/
  function srcAppHandRangePieceDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HandRangePiece", function () {
      return HandRangePiece;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HandRangePiece = /*#__PURE__*/function () {
      function HandRangePiece() {
        _classCallCheck(this, HandRangePiece);
      }

      _createClass(HandRangePiece, [{
        key: "onMouseEnter",
        value: function onMouseEnter() {}
      }]);

      return HandRangePiece;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseenter')], HandRangePiece.prototype, "onMouseEnter", null);
    HandRangePiece = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[handRangePieceDirective]'
    })], HandRangePiece);
    /***/
  },

  /***/
  "./src/app/hand-range-toolset/hand-range-toolset.component.css":
  /*!*********************************************************************!*\
    !*** ./src/app/hand-range-toolset/hand-range-toolset.component.css ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHandRangeToolsetHandRangeToolsetComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".no-select {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\nmat-card {\n  display: inline-block;\n  background-color: #eee;\n  cursor: pointer;\n}\n\n.mat-raised-button {\n  margin: 0 0 20px 0;\n}\n\n.piece-in-range {\n  background-color: teal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGFuZC1yYW5nZS10b29sc2V0L2hhbmQtcmFuZ2UtdG9vbHNldC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQWlCO0tBQWpCLHNCQUFpQjtNQUFqQixxQkFBaUI7VUFBakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvaGFuZC1yYW5nZS10b29sc2V0L2hhbmQtcmFuZ2UtdG9vbHNldC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vLXNlbGVjdCB7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG5tYXQtY2FyZCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubWF0LXJhaXNlZC1idXR0b24ge1xuICBtYXJnaW46IDAgMCAyMHB4IDA7XG59XG5cbi5waWVjZS1pbi1yYW5nZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRlYWw7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/hand-range-toolset/hand-range-toolset.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/hand-range-toolset/hand-range-toolset.component.ts ***!
    \********************************************************************/

  /*! exports provided: HandRangeToolsetComponent */

  /***/
  function srcAppHandRangeToolsetHandRangeToolsetComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HandRangeToolsetComponent", function () {
      return HandRangeToolsetComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_enums_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../app-enums.model */
    "./src/app/app-enums.model.ts");
    /* harmony import */


    var _default_hand_range__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../default-hand-range */
    "./src/app/default-hand-range.ts");

    var HandRangeToolsetComponent = /*#__PURE__*/function () {
      function HandRangeToolsetComponent() {
        _classCallCheck(this, HandRangeToolsetComponent);

        this.handRange = _default_hand_range__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_HAND_RANGE"];
        this.handRangeText = '';
        this.rangePercentage = 0;
        this.mouseDown = false;
        this.handRangeGroups = this.seperateHandRangeToGroups(this.handRange);
      }

      _createClass(HandRangeToolsetComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "displayRank",
        value: function displayRank(n) {
          var displayRanks = {
            2: '2',
            3: '3',
            4: '4',
            5: '5',
            6: '6',
            7: '7',
            8: '8',
            9: '9',
            10: 'T',
            11: 'J',
            12: 'Q',
            13: 'K',
            14: 'A'
          };
          return displayRanks[n];
        }
      }, {
        key: "calcRangePercentage",
        value: function calcRangePercentage(handRange) {
          var output = 0;

          var _iterator = _createForOfIteratorHelper(handRange),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var piece = _step.value;

              if (piece.isInRange) {
                output += piece.rangeWeight;
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          output /= 1326;
          output *= 100;
          return output;
        }
      }, {
        key: "resetHandRange",
        value: function resetHandRange() {
          var _iterator2 = _createForOfIteratorHelper(this.handRange),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var piece = _step2.value;
              piece.isInRange = false;
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }

          this.handRangeText = '';
          this.rangePercentage = this.calcRangePercentage(this.handRange);
        }
      }, {
        key: "seperateHandRangeToGroups",
        value: function seperateHandRangeToGroups(handRange) {
          var outputHandRangeGroups = {
            pairs: [],
            suitedConnectors: []
          };

          var _iterator3 = _createForOfIteratorHelper(handRange),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var handRangePiece = _step3.value;

              if (handRangePiece.isInRange) {
                if (handRangePiece.isPair) {
                  outputHandRangeGroups.pairs.push(handRangePiece);
                }

                if (handRangePiece.isSuited && handRangePiece.rankOne - handRangePiece.rankTwo == 1) {
                  outputHandRangeGroups.suitedConnectors.push(handRangePiece);
                }
              }
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }

          return outputHandRangeGroups;
        }
      }, {
        key: "convertPairsToText",
        value: function convertPairsToText(handRangeGroups) {
          var output = '';
          var pairSegmentList = [];
          var previousPair;
          var pairSegmentStart;
          var pairSegmentEnd;

          var _iterator4 = _createForOfIteratorHelper(handRangeGroups.pairs),
              _step4;

          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var pair = _step4.value;

              // set start of segment if not already set
              if (!pairSegmentStart) {
                pairSegmentStart = pair;
              }

              if (previousPair && previousPair.rankOne - pair.rankOne > 1) {
                pairSegmentEnd = previousPair;
                var _pairSegment2 = [pairSegmentStart, pairSegmentEnd];
                pairSegmentList.push(_pairSegment2);
                pairSegmentStart = pair;
              } // roll previous pair forward


              previousPair = pair;
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }

          if (pairSegmentStart) {
            var pairSegment = [pairSegmentStart, previousPair];
            pairSegmentList.push(pairSegment);
          }

          for (var _i = 0, _pairSegmentList = pairSegmentList; _i < _pairSegmentList.length; _i++) {
            var _pairSegment = _pairSegmentList[_i];

            if (output) {
              output += ', ';
            }

            if (_pairSegment[0].rankOne == _app_enums_model__WEBPACK_IMPORTED_MODULE_2__["Rank"].Ace) {
              output += this.displayRank(_pairSegment[1].rankOne);
              output += this.displayRank(_pairSegment[1].rankTwo);

              if (_pairSegment[1].rankOne != _app_enums_model__WEBPACK_IMPORTED_MODULE_2__["Rank"].Ace) {
                output += '+';
              }
            } else if (_pairSegment[0].rankOne != _pairSegment[1].rankOne) {
              output += this.displayRank(_pairSegment[0].rankOne);
              output += this.displayRank(_pairSegment[0].rankTwo);
              output += '-';
              output += this.displayRank(_pairSegment[1].rankOne);
              output += this.displayRank(_pairSegment[1].rankTwo);
            } else {
              output += this.displayRank(_pairSegment[0].rankOne);
              output += this.displayRank(_pairSegment[0].rankTwo);
            }
          }

          return output;
        }
      }, {
        key: "convertSuitedConnectorsToText",
        value: function convertSuitedConnectorsToText(handRangeGroups) {
          var output = '';
          var segmentList = [];
          var previousPiece;
          var segmentStart;
          var segmentEnd;

          var _iterator5 = _createForOfIteratorHelper(handRangeGroups.suitedConnectors),
              _step5;

          try {
            for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
              var piece = _step5.value;

              // set start of segment if not already set
              if (!segmentStart) {
                segmentStart = piece;
              }

              if (previousPiece && previousPiece.rankOne - piece.rankOne > 1) {
                segmentEnd = previousPiece;
                var _segment2 = [segmentStart, segmentEnd];
                segmentList.push(_segment2);
                segmentStart = piece;
              } // roll previous piece forward


              previousPiece = piece;
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }

          if (segmentStart) {
            var segment = [segmentStart, previousPiece];
            segmentList.push(segment);
          }

          for (var _i2 = 0, _segmentList = segmentList; _i2 < _segmentList.length; _i2++) {
            var _segment = _segmentList[_i2];

            if (output) {
              output += ', ';
            }

            if (_segment[0].rankOne == _app_enums_model__WEBPACK_IMPORTED_MODULE_2__["Rank"].Ace) {
              output += this.displayRank(_segment[1].rankOne);
              output += this.displayRank(_segment[1].rankTwo);
              output += 's';

              if (_segment[1].rankOne != _app_enums_model__WEBPACK_IMPORTED_MODULE_2__["Rank"].Ace) {
                output += '+';
              }
            } else if (_segment[0].rankOne != _segment[1].rankOne) {
              output += this.displayRank(_segment[0].rankOne);
              output += this.displayRank(_segment[0].rankTwo);
              output += 's';
              output += '-';
              output += this.displayRank(_segment[1].rankOne);
              output += this.displayRank(_segment[1].rankTwo);
              output += 's';
            } else {
              output += this.displayRank(_segment[0].rankOne);
              output += this.displayRank(_segment[0].rankTwo);
              output += 's';
            }
          }

          return output;
        }
      }, {
        key: "onMouseDown",
        value: function onMouseDown() {
          this.mouseDown = true;
        }
      }, {
        key: "onMouseUp",
        value: function onMouseUp() {
          this.mouseDown = false;
        }
      }, {
        key: "enableInRange",
        value: function enableInRange(handRangePiece) {
          this.inRangeStartState = handRangePiece.isInRange;
          handRangePiece.isInRange = true;
          this.startMouseDrag = handRangePiece;
          this.rangePercentage = this.calcRangePercentage(this.handRange);
          this.handRangeGroups = this.seperateHandRangeToGroups(this.handRange);
          this.handRangeText = this.convertPairsToText(this.handRangeGroups);
          this.handRangeText += this.convertSuitedConnectorsToText(this.handRangeGroups);
        }
      }, {
        key: "dragEnableInRange",
        value: function dragEnableInRange(handRangePiece) {
          if (this.mouseDown) {
            handRangePiece.isInRange = true;
            this.rangePercentage = this.calcRangePercentage(this.handRange);
            this.handRangeGroups = this.seperateHandRangeToGroups(this.handRange);
            this.handRangeText = this.convertPairsToText(this.handRangeGroups);
            this.handRangeText += this.convertSuitedConnectorsToText(this.handRangeGroups);
          }
        }
      }, {
        key: "toggleInRange",
        value: function toggleInRange(handRangePiece) {
          if (this.startMouseDrag == handRangePiece) {
            handRangePiece.isInRange = !this.inRangeStartState;
          }

          this.startMouseDrag = null;
          this.rangePercentage = this.calcRangePercentage(this.handRange);
          this.handRangeGroups = this.seperateHandRangeToGroups(this.handRange);
          this.handRangeText = this.convertPairsToText(this.handRangeGroups);
          this.handRangeText += this.convertSuitedConnectorsToText(this.handRangeGroups);
        }
      }]);

      return HandRangeToolsetComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mousedown')], HandRangeToolsetComponent.prototype, "onMouseDown", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseup')], HandRangeToolsetComponent.prototype, "onMouseUp", null);
    HandRangeToolsetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-hand-range-toolset',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./hand-range-toolset.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/hand-range-toolset/hand-range-toolset.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./hand-range-toolset.component.css */
      "./src/app/hand-range-toolset/hand-range-toolset.component.css"))["default"]]
    })], HandRangeToolsetComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/kyle/web_dev/holdem_hand_range_tool/holdem-hand-range-v2/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map