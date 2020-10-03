require('source-map-support/register');
module.exports =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa */ "koa");
/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _koa_cors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @koa/cors */ "@koa/cors");
/* harmony import */ var _koa_cors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_koa_cors__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router */ "./router.js");
/* harmony import */ var koa_bodyparser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! koa-bodyparser */ "koa-bodyparser");
/* harmony import */ var koa_bodyparser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(koa_bodyparser__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_4__);





mongoose__WEBPACK_IMPORTED_MODULE_4___default.a.Promise = Promise;
mongoose__WEBPACK_IMPORTED_MODULE_4___default.a.set("debug", true); // Mongoose.connect("mongodb://localhost/monumentum");

mongoose__WEBPACK_IMPORTED_MODULE_4___default.a.connect("mongodb+srv://test123:AzwdwmdboxMxLC1Z@cluster0.pay1o.mongodb.net/MONUMENTUM?retryWrites=true&w=majority");
const app = new koa__WEBPACK_IMPORTED_MODULE_0___default.a();
app.use(_koa_cors__WEBPACK_IMPORTED_MODULE_1___default()());
app.use(koa_bodyparser__WEBPACK_IMPORTED_MODULE_3___default()());
const router = new _router__WEBPACK_IMPORTED_MODULE_2__["default"](app);
app.listen(9000);

/***/ }),

/***/ "./models/items.js":
/*!*************************!*\
  !*** ./models/items.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Items; });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

class Items {
  constructor() {
    const scheme = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({
      desc: String,
      date: Date,
      time: {
        hours: {
          type: Number,
          default: 0
        },
        minuts: {
          type: Number,
          default: 0
        }
      },
      status: {
        type: Number,
        default: 0
      }
    }, {
      timestamps: true
    });
    this.model = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model("Items", scheme);
  }

  async getItems() {
    const response = await this.model.find({}, {
      desc: true,
      date: true,
      time: true,
      status: true
    });
    return response;
  }

  async getItem(ctx) {
    const response = await this.model.find({
      _id: ctx.params._id
    });
    return response;
  }

  async addItem(ctx) {
    const response = await this.model.create(ctx.request.body);
    return response;
  }

  async updateItem(ctx) {
    const response = await this.model.updateOne({
      _id: ctx.params.id
    }, ctx.request.body);
    return response;
  }

  async removeItem(ctx) {
    const response = await this.model.deleteOne({
      _id: ctx.params.id
    });
    return response;
  }

}

/***/ }),

/***/ "./router.js":
/*!*******************!*\
  !*** ./router.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Router; });
/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa-router */ "koa-router");
/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_items__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/items */ "./models/items.js");


class Router {
  constructor(app) {
    this.app = app;
    this.router = new koa_router__WEBPACK_IMPORTED_MODULE_0___default.a();
    this.init();
    this.routes();
  }

  init() {
    this.app.use(this.router.routes());
  }

  routes() {
    const items = new _models_items__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this.router.get("/api/items", async (ctx, next) => {
      ctx.body = await items.getItems();
    });
    this.router.get("/api/items/:id", async (ctx, next) => {
      ctx.body = await items.getItem(ctx);
    });
    this.router.post("/api/items", async (ctx, next) => {
      ctx.body = await items.addItem(ctx);
    });
    this.router.put("/api/items/:id", async (ctx, next) => {
      ctx.body = await items.updateItem(ctx);
    });
    this.router.delete("/api/items/:id", async (ctx, next) => {
      console.log("ctx.params", ctx.params);
      ctx.body = await items.removeItem(ctx);
    });
    this.router.post("/api/test", async (ctx, next) => {
      ctx.body = "Hello";
    });
  }

}

/***/ }),

/***/ "@koa/cors":
/*!****************************!*\
  !*** external "@koa/cors" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@koa/cors");

/***/ }),

/***/ "koa":
/*!**********************!*\
  !*** external "koa" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("koa");

/***/ }),

/***/ "koa-bodyparser":
/*!*********************************!*\
  !*** external "koa-bodyparser" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("koa-bodyparser");

/***/ }),

/***/ "koa-router":
/*!*****************************!*\
  !*** external "koa-router" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("koa-router");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ })

/******/ });
//# sourceMappingURL=main.map