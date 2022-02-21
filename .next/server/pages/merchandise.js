module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "0py2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./components/StyleBase.js
var StyleBase = __webpack_require__("12V9");

// EXTERNAL MODULE: ./public/sticker.svg
var sticker = __webpack_require__("11Qv");
var sticker_default = /*#__PURE__*/__webpack_require__.n(sticker);

// EXTERNAL MODULE: ./public/shirt1.svg
var shirt1 = __webpack_require__("AE7E");
var shirt1_default = /*#__PURE__*/__webpack_require__.n(shirt1);

// EXTERNAL MODULE: ./public/albums/changes-on-the-way/album-front.png
var album_front = __webpack_require__("0yw6t");
var album_front_default = /*#__PURE__*/__webpack_require__.n(album_front);

// CONCATENATED MODULE: ./public/merchInfo.js



const merchInfo_merchItems = [{
  name: "T-shirt",
  price: '20',
  availableAt: 'Performances.',
  imgSrc: shirt1_default.a
}, {
  name: "Sticker",
  price: '0',
  availableAt: 'Performances.',
  imgSrc: sticker_default.a
}, {
  name: "Album (Changes On The Way)",
  price: '10',
  availableAt: 'Performances and online.',
  imgSrc: album_front_default.a
}];
/* harmony default export */ var merchInfo = (merchInfo_merchItems);
// CONCATENATED MODULE: ./pages/merchandise.js


var __jsx = external_react_default.a.createElement;




const Merch = () => {
  const merchItems = merchInfo;
  console.log(merchItems);
  return __jsx(StyleBase["a" /* default */], null, __jsx(head_default.a, null, __jsx("title", {
    className: "jsx-770515978"
  }, "Merchandise")), __jsx("section", {
    className: "jsx-770515978"
  }, __jsx("h2", {
    className: "jsx-770515978"
  }, "ITEMS"), __jsx("div", {
    className: "jsx-770515978" + " " + "merchContainer"
  }, merchItems.map((item, i) => {
    return __jsx("div", {
      key: i,
      className: "jsx-770515978" + " " + "merchItem"
    }, __jsx("div", {
      className: "jsx-770515978" + " " + "description"
    }, __jsx("p", {
      className: "jsx-770515978"
    }, "Item: ", item.name), __jsx("p", {
      className: "jsx-770515978"
    }, "Price: $", item.price), __jsx("p", {
      className: "jsx-770515978"
    }, "Get at: ", item.availableAt), __jsx("div", {
      className: "jsx-770515978" + " " + "imgContainer"
    }, __jsx("img", {
      src: item.imgSrc,
      className: "jsx-770515978"
    }))));
  })), __jsx("h2", {
    className: "jsx-770515978"
  }, "PURCHASING"), __jsx("p", {
    className: "jsx-770515978"
  }, "These items are only available at shows at the moment. We currently accept ", __jsx("span", {
    className: "jsx-770515978"
  }, "Credit Cards"), ", ", __jsx("span", {
    className: "jsx-770515978"
  }, "Venmo"), ", and ", __jsx("span", {
    className: "jsx-770515978"
  }, "Paypal"), ". Contact us below if you have any questions about stock or payment details.")), __jsx(style_default.a, {
    id: "770515978"
  }, [".payment-types.jsx-770515978{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", "span.jsx-770515978{color:#f69d1a;}", ".merchContainer.jsx-770515978{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}", ".merchItem.jsx-770515978{border:2px solid #f69d1a;padding:2rem;margin:2rem 0;}", ".merchItem.jsx-770515978 .imgContainer.jsx-770515978{height:auto;}", ".merchItem.jsx-770515978 .imgContainer.jsx-770515978 img.jsx-770515978{width:70%;object-fit:contain;}", ".description.jsx-770515978 p.jsx-770515978{text-align:left;}"]));
};

/* harmony default export */ var merchandise = __webpack_exports__["default"] = (Merch);

/***/ }),

/***/ "0yw6t":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/album-front-dab2ee8d5c21fd780f9dc4c224740275.png";

/***/ }),

/***/ "11Qv":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/sticker-638cf3c17ad51761cbc5bd914e2648c9.svg";

/***/ }),

/***/ "12V9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HJQg");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const StyleBase = props => {
  return __jsx("div", {
    className: "jsx-941705676" + " " + "page-layout"
  }, props.children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "941705676"
  }, ["@import url('https://fonts.googleapis.com/css?family=Noto+Serif+TC:300|BenchNine:300&display=swap');", "html,body{margin:0;padding:0;text-align:center;background:#333;}", "body{margin-top:50px;}", "h1,h2,h3,h4,h5,h6{font-family:'BenchNine',sans-serif;font-weight:300;color:#fff;font-size:2.4rem;text-align:center;}", "a,p,li,button,ul,ol,div,label{font-family:'Open Sans',sans-serif;font-size:1.2rem;line-height:2rem;color:#fff;}", "input,textarea{font-family:'Open Sans',sans-serif;font-size:1.2rem;line-height:2rem;color:#222;}", "ul,ol{list-style-type:none;margin:0;padding:0;line-height:2rem;}", "a{-webkit-text-decoration:none;text-decoration:none;-webkit-transition:all .5s;transition:all .5s;}", "section{padding:1rem;box-sizing:border-box;}", "@media only screen and (min-width:500px){section{padding:1rem 6rem;}}"]));
};

/* harmony default export */ __webpack_exports__["a"] = (StyleBase);

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("0py2");


/***/ }),

/***/ "AE7E":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/shirt1-1e1273c4f6688f715ffbd3c989892b72.svg";

/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });