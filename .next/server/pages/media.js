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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

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

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("CaRH");


/***/ }),

/***/ "CaRH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HJQg");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_StyleBase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("12V9");


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const Media = () => {
  const {
    0: posterNum,
    1: setPosterNum
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1);

  const posterCycle = num => {
    if (num === 3) {
      setPosterNum(1);
    } else {
      setPosterNum(posterNum + 1);
    }
  };

  return __jsx(_components_StyleBase__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, __jsx("title", null, "Media")), __jsx("section", {
    className: "jsx-806512802"
  }, __jsx("h2", {
    className: "jsx-806512802"
  }, "AUDIO"), __jsx("div", {
    className: "jsx-806512802" + " " + "audioContainer"
  }, __jsx("p", {
    className: "jsx-806512802"
  }, "Changes On The Way"), __jsx("div", {
    className: "jsx-806512802" + " " + "audio"
  }, __jsx("audio", {
    src: '/audio/ChangesOnTheWay.mp3',
    controls: true,
    className: "jsx-806512802"
  }))), __jsx("div", {
    className: "jsx-806512802" + " " + "audioContainer"
  }, __jsx("p", {
    className: "jsx-806512802"
  }, "What Is Love"), __jsx("div", {
    className: "jsx-806512802" + " " + "audio"
  }, __jsx("audio", {
    src: '/audio/WhatIsLove.mp3',
    controls: true,
    className: "jsx-806512802"
  }))), __jsx("div", {
    className: "jsx-806512802" + " " + "audioContainer"
  }, __jsx("p", {
    className: "jsx-806512802"
  }, "Blowing The Wind"), __jsx("div", {
    className: "jsx-806512802" + " " + "audio"
  }, __jsx("audio", {
    src: '/audio/BlowingTheWind.mp3',
    controls: true,
    className: "jsx-806512802"
  }))), __jsx("div", {
    className: "jsx-806512802" + " " + "audioContainer"
  }, __jsx("p", {
    className: "jsx-806512802"
  }, "Looking For The One"), __jsx("div", {
    className: "jsx-806512802" + " " + "audio"
  }, __jsx("audio", {
    src: '/audio/LookingForTheOne.mp3',
    controls: true,
    className: "jsx-806512802"
  }))), __jsx("h2", {
    className: "jsx-806512802"
  }, "VIDEO"), __jsx("p", {
    className: "jsx-806512802"
  }, "I'll Show Up Tonight"), __jsx("div", {
    className: "jsx-806512802" + " " + "videoContainer"
  }, __jsx("div", {
    className: "jsx-806512802" + " " + "loading"
  }, "Loading"), __jsx("div", {
    className: "jsx-806512802"
  }, __jsx("iframe", {
    src: "https://www.youtube.com/embed/K9ap2fFgkvs",
    title: "YouTube video player",
    frameborder: "0",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    allowfullscreen: true,
    className: "jsx-806512802"
  }))), __jsx("p", {
    className: "jsx-806512802"
  }, "SPARKcon Music Festival"), __jsx("div", {
    className: "jsx-806512802" + " " + "videoContainer"
  }, __jsx("div", {
    className: "jsx-806512802" + " " + "loading"
  }, "Loading"), __jsx("div", {
    className: "jsx-806512802"
  }, __jsx("iframe", {
    src: "https://www.youtube.com/embed/Ofv5mz3Jvak",
    title: "YouTube video player",
    frameBorder: "0",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    allowFullScreen: true,
    className: "jsx-806512802"
  }))), __jsx("p", {
    className: "jsx-806512802"
  }, "Carrboro Music Festival"), __jsx("div", {
    className: "jsx-806512802" + " " + "videoContainer"
  }, __jsx("div", {
    className: "jsx-806512802" + " " + "loading"
  }, "Loading"), __jsx("iframe", {
    src: "https://www.youtube.com/embed/M_JR38PYAgs",
    title: "YouTube video player",
    frameBorder: "0",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    allowFullScreen: true,
    className: "jsx-806512802"
  })), __jsx("p", {
    className: "jsx-806512802"
  }, "WHUP Radio"), __jsx("div", {
    className: "jsx-806512802" + " " + "videoContainer"
  }, __jsx("div", {
    className: "jsx-806512802" + " " + "loading"
  }, "Loading"), __jsx("iframe", {
    src: "https://www.youtube.com/embed/Ojt7JEuhWyM",
    title: "YouTube video player",
    frameBorder: "0",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    allowFullScreen: true,
    className: "jsx-806512802"
  })), __jsx("h2", {
    className: "jsx-806512802"
  }, "POSTERS"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "806512802"
  }, [".container.jsx-806512802{z-index:2;}", "iframe.jsx-806512802{width:calc(100vw - 2.1rem);height:calc(56.25vw - 2.1rem);border-bottom:2px solid #f69d1a;display:-webkit-box;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:absolute;top:0;left:0;z-index:2;}", ".videoContainer.jsx-806512802{display:-webkit-box;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:2rem 0;position:relative;width:calc(100vw - 2rem);height:calc(56.25vw - 2rem);}", ".loading.jsx-806512802{display:-webkit-box;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:calc(100vw - 2.2rem);height:calc(56.25vw - 2rem);position:absolute;background:#f69d1a;color:#222;z-index:1;}", ".audioContainer.jsx-806512802{border-bottom:2px solid #f89e00;margin-bottom:2rem;}", ".audio.jsx-806512802{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;background:#f1f3f4;-webkit-filter:invert(100%);filter:invert(100%);opacity:.7;}", "audio.jsx-806512802{width:100%;}", ".poster.jsx-806512802{width:100%;}", "@media only screen and (min-width:500px){iframe.jsx-806512802,.loading.jsx-806512802{width:calc(100vw - 12rem);height:calc(56.25vw - 6rem);}.loading.jsx-806512802{left:0;top:0;}.videoContainer.jsx-806512802{width:calc(100vw - 6rem);}}"])));
};

/* harmony default export */ __webpack_exports__["default"] = (Media);

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