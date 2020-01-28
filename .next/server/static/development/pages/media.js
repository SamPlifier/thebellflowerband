module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/StyleBase.js":
/*!*********************************!*\
  !*** ./components/StyleBase.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/sam.davis-castro/Desktop/bellflower-site-nextjs/components/StyleBase.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const StyleBase = props => {
  return __jsx("div", {
    className: "jsx-2195012102" + " " + "page-layout",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: undefined
  }, props.children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2195012102",
    __self: undefined
  }, "@import url('https://fonts.googleapis.com/css?family=Noto+Serif+TC:300|BenchNine:300&display=swap');html,body{margin:0;padding:0;text-align:center;background:#333;}body{margin-top:50px;}h1,h2,h3,h4,h5,h6{font-family:'BenchNine',sans-serif;font-weight:300;color:#fff;font-size:2.4rem;text-align:center;}a,p,li,button,ul,ol,div,label{font-family:'Open Sans',sans-serif;font-size:1.2rem;line-height:2rem;color:#fff;}input,textarea{font-family:'Open Sans',sans-serif;font-size:1.2rem;line-height:2rem;color:#222;}ul,ol{list-style-type:none;margin:0;padding:0;line-height:2rem;}a{-webkit-text-decoration:none;text-decoration:none;}section{padding:1rem;box-sizing:border-box;}@media only screen and (min-width:500px){section{padding:1rem 6rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW0uZGF2aXMtY2FzdHJvL0Rlc2t0b3AvYmVsbGZsb3dlci1zaXRlLW5leHRqcy9jb21wb25lbnRzL1N0eWxlQmFzZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJK0IsQUFFb0gsQUFFdEYsQUFNTyxBQUdvQixBQVNBLEFBTUEsQUFNZixBQU1BLEFBSVIsQUFNUyxBQU0zQixTQW5EZSxJQXdDWSxHQWxDMUIsRUF3Q0ksQ0E3Q2tCLEVBNkJULFNBQ0MsS0F0Qk0sQUFTQyxBQU1BLEFBaUJyQixFQXZDb0IsR0E4QkMsVUFJckIsQ0ExQmUsQ0FTTSxBQU1BLENBdEJyQixJQThCQSxLQXRCcUIsT0FTTixBQU1BLFVBZE8sQ0FTdEIsQUFNRSxpQkFkRiIsImZpbGUiOiIvVXNlcnMvc2FtLmRhdmlzLWNhc3Ryby9EZXNrdG9wL2JlbGxmbG93ZXItc2l0ZS1uZXh0anMvY29tcG9uZW50cy9TdHlsZUJhc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBTdHlsZUJhc2UgPSAocHJvcHMpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtbGF5b3V0XCI+XG4gICAgICAgICAgICB7IHByb3BzLmNoaWxkcmVuIH1cbiAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgICAgICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Ob3RvK1NlcmlmK1RDOjMwMHxCZW5jaE5pbmU6MzAwJmRpc3BsYXk9c3dhcCcpO1xuICAgICAgICAgICAgICAgIGh0bWwsIGJvZHkge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzMzMztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0JlbmNoTmluZScsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIuNHJlbTtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGEsIHAsIGxpLCBidXR0b24sIHVsLCBvbCwgZGl2LCBsYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW5wdXQsIHRleHRhcmVhIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDJyZW07XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMjIyO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHVsLCBvbCB7XG4gICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMnJlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzZWN0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NTAwcHgpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VjdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxcmVtIDZyZW07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAubWFwIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3R5bGVCYXNlOyJdfQ== */\n/*@ sourceURL=/Users/sam.davis-castro/Desktop/bellflower-site-nextjs/components/StyleBase.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (StyleBase);

/***/ }),

/***/ "./pages/media.js":
/*!************************!*\
  !*** ./pages/media.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_StyleBase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/StyleBase */ "./components/StyleBase.js");
var _jsxFileName = "/Users/sam.davis-castro/Desktop/bellflower-site-nextjs/pages/media.js";


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

  return __jsx(_components_StyleBase__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, "Media")), __jsx("section", {
    className: "jsx-811392099",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, __jsx("h2", {
    className: "jsx-811392099",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, "AUDIO"), __jsx("div", {
    className: "jsx-811392099" + " " + "audioContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx("p", {
    className: "jsx-811392099",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, "Changes On The Way"), __jsx("div", {
    className: "jsx-811392099" + " " + "audio",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, __jsx("audio", {
    src: '/audio/ChangesOnTheWay.mp3',
    controls: true,
    className: "jsx-811392099",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }))), __jsx("div", {
    className: "jsx-811392099" + " " + "audioContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, __jsx("p", {
    className: "jsx-811392099",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, "What Is Love"), __jsx("div", {
    className: "jsx-811392099" + " " + "audio",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, __jsx("audio", {
    src: '/audio/WhatIsLove.mp3',
    controls: true,
    className: "jsx-811392099",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }))), __jsx("div", {
    className: "jsx-811392099" + " " + "audioContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, __jsx("p", {
    className: "jsx-811392099",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, "Blowing The Wind"), __jsx("div", {
    className: "jsx-811392099" + " " + "audio",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, __jsx("audio", {
    src: '/audio/BlowingTheWind.mp3',
    controls: true,
    className: "jsx-811392099",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }))), __jsx("div", {
    className: "jsx-811392099" + " " + "audioContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, __jsx("p", {
    className: "jsx-811392099",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, "Looking For The One"), __jsx("div", {
    className: "jsx-811392099" + " " + "audio",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, __jsx("audio", {
    src: '/audio/LookingForTheOne.mp3',
    controls: true,
    className: "jsx-811392099",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }))), __jsx("h2", {
    className: "jsx-811392099",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, "VIDEO"), __jsx("p", {
    className: "jsx-811392099",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, "SPARKcon Music Festival"), __jsx("div", {
    className: "jsx-811392099" + " " + "videoContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-811392099" + " " + "loading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, "Loading"), __jsx("div", {
    className: "jsx-811392099",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, __jsx("iframe", {
    src: "https://www.youtube.com/embed/Ofv5mz3Jvak",
    frameBorder: "0",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    allowFullScreen: true,
    className: "jsx-811392099",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }))), __jsx("p", {
    className: "jsx-811392099",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, "Carrboro Music Festival"), __jsx("div", {
    className: "jsx-811392099" + " " + "videoContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-811392099" + " " + "loading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, "Loading"), __jsx("iframe", {
    src: "https://www.youtube.com/embed/M_JR38PYAgs",
    frameBorder: "0",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    allowFullScreen: true,
    className: "jsx-811392099",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  })), __jsx("p", {
    className: "jsx-811392099",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, "WHUP Radio"), __jsx("div", {
    className: "jsx-811392099" + " " + "videoContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-811392099" + " " + "loading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }, "Loading"), __jsx("iframe", {
    src: "https://www.youtube.com/embed/Ojt7JEuhWyM",
    frameBorder: "0",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    allowFullScreen: true,
    className: "jsx-811392099",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  })), __jsx("h2", {
    className: "jsx-811392099",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, "POSTERS"), __jsx("img", {
    onClick: () => {
      posterCycle(posterNum);
    },
    src: __webpack_require__("./public sync recursive ^\\.\\/bellflowerPoster.*\\.jpg$")(`./bellflowerPoster${posterNum}.jpg`),
    className: "jsx-811392099" + " " + "poster",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "811392099",
    __self: undefined
  }, ".container.jsx-811392099{z-index:2;}iframe.jsx-811392099{width:calc(100vw - 2.1rem);height:calc(56.25vw - 2.1rem);border-bottom:2px solid #f69d1a;display:-webkit-box;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:absolute;top:0;left:0;z-index:2;}.videoContainer.jsx-811392099{display:-webkit-box;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:2rem 0;position:relative;width:calc(100vw - 2rem);height:calc(56.25vw - 2rem);}.loading.jsx-811392099{display:-webkit-box;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:calc(100vw - 2rem);height:calc(56.25vw - 2rem);position:absolute;background:#f69d1a;color:#222;z-index:1;}.audioContainer.jsx-811392099{border-bottom:2px solid #f89e00;margin-bottom:2rem;}.audio.jsx-811392099{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;background:#f1f3f4;-webkit-filter:invert(100%);filter:invert(100%);opacity:.7;}audio.jsx-811392099{width:100%;}.poster.jsx-811392099{width:100%;}@media only screen and (min-width:500px){iframe.jsx-811392099,.loading.jsx-811392099{width:calc(100vw - 12rem);height:calc(56.25vw - 6rem);}.loading.jsx-811392099{left:0;top:0;}.videoContainer.jsx-811392099{width:calc(100vw - 6rem);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW0uZGF2aXMtY2FzdHJvL0Rlc2t0b3AvYmVsbGZsb3dlci1zaXRlLW5leHRqcy9wYWdlcy9tZWRpYS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRTRCLEFBS3VDLEFBR2lCLEFBZVAsQUFtQkEsQUFpQlksQUFJbkIsQUFPRixBQUdBLEFBSW1CLEFBSW5CLEFBSWtCLE9BSG5CLEdBNUVkLENBaUVBLEFBR0EsRUFTSSxPQTNEb0IsQUFtQkEsS0EyQ3BCLENBUmdDLENBckVGLEtBbURYLFFBbkNOLEFBbUJBLFdBaUJqQixHQWtCSSxHQXJFZ0MsaUJBc0RULGVBckRILG9CQUNBLEtBY1EsQUFtQkosZUFoQ1gsU0FpQ1ksSUFuQkksaUJBb0JFLFlBbkJELEVBcUNYLG1CQUNDLEtBckNVLE1BZk4sd0JBQ0MsYUFvRGQsUUFuRG9CLEdBb0RuQyxPQXBCNkIsaUJBbEJELFFBbUJFLGdCQWxCRCxNQW1CRSxlQWxCSSwyQkFmYixrQkFDWixNQUNDLE9BQ0csVUFDZCxVQThCNkIscUJBbEJBLElBbUJHLHFCQWxCRixPQW1CUixlQWxCUyxHQW1CUixtQkFDUixXQUNELFVBQ2Qsa0RBckJrQixjQUNJLGtCQUNPLHlCQUNHLDRCQUNoQyIsImZpbGUiOiIvVXNlcnMvc2FtLmRhdmlzLWNhc3Ryby9EZXNrdG9wL2JlbGxmbG93ZXItc2l0ZS1uZXh0anMvcGFnZXMvbWVkaWEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IFN0eWxlQmFzZSBmcm9tICcuLi9jb21wb25lbnRzL1N0eWxlQmFzZSc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgTWVkaWEgPSAoKSA9PiB7XG4gICAgY29uc3QgW3Bvc3Rlck51bSwgc2V0UG9zdGVyTnVtXSA9IHVzZVN0YXRlKDEpO1xuICAgIGNvbnN0IHBvc3RlckN5Y2xlID0gKG51bSkgPT4ge1xuICAgICAgICBpZiAobnVtID09PSAzKSB7XG4gICAgICAgICAgICBzZXRQb3N0ZXJOdW0oMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRQb3N0ZXJOdW0ocG9zdGVyTnVtICsgMSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFN0eWxlQmFzZT5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDx0aXRsZT5NZWRpYTwvdGl0bGU+XG4gICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8aDI+QVVESU88L2gyPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXVkaW9Db250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHA+Q2hhbmdlcyBPbiBUaGUgV2F5PC9wPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF1ZGlvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YXVkaW8gc3JjPXsnL2F1ZGlvL0NoYW5nZXNPblRoZVdheS5tcDMnfSBjb250cm9scz48L2F1ZGlvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF1ZGlvQ29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwPldoYXQgSXMgTG92ZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdWRpb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGF1ZGlvIHNyYz17Jy9hdWRpby9XaGF0SXNMb3ZlLm1wMyd9IGNvbnRyb2xzPjwvYXVkaW8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXVkaW9Db250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHA+Qmxvd2luZyBUaGUgV2luZDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdWRpb1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGF1ZGlvIHNyYz17Jy9hdWRpby9CbG93aW5nVGhlV2luZC5tcDMnfSBjb250cm9scz48L2F1ZGlvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF1ZGlvQ29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwPkxvb2tpbmcgRm9yIFRoZSBPbmU8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXVkaW9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhdWRpbyBzcmM9eycvYXVkaW8vTG9va2luZ0ZvclRoZU9uZS5tcDMnfSBjb250cm9scz48L2F1ZGlvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxoMj5WSURFTzwvaDI+XG4gICAgICAgICAgICAgICAgPHA+U1BBUktjb24gTXVzaWMgRmVzdGl2YWw8L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlb0NvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmdcIj5Mb2FkaW5nPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+PGlmcmFtZSBzcmM9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9PZnY1bXozSnZha1wiIGZyYW1lQm9yZGVyPVwiMFwiIGFsbG93PVwiYWNjZWxlcm9tZXRlcjsgYXV0b3BsYXk7IGVuY3J5cHRlZC1tZWRpYTsgZ3lyb3Njb3BlOyBwaWN0dXJlLWluLXBpY3R1cmVcIiBhbGxvd0Z1bGxTY3JlZW4+PC9pZnJhbWU+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHA+Q2FycmJvcm8gTXVzaWMgRmVzdGl2YWw8L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlb0NvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmdcIj5Mb2FkaW5nPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxpZnJhbWUgc3JjPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvTV9KUjM4UFlBZ3NcIiBmcmFtZUJvcmRlcj1cIjBcIiBhbGxvdz1cImFjY2VsZXJvbWV0ZXI7IGF1dG9wbGF5OyBlbmNyeXB0ZWQtbWVkaWE7IGd5cm9zY29wZTsgcGljdHVyZS1pbi1waWN0dXJlXCIgYWxsb3dGdWxsU2NyZWVuPjwvaWZyYW1lPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxwPldIVVAgUmFkaW88L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlb0NvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmdcIj5Mb2FkaW5nPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxpZnJhbWUgc3JjPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvT2p0N0pFdWhXeU1cIiBmcmFtZUJvcmRlcj1cIjBcIiBhbGxvdz1cImFjY2VsZXJvbWV0ZXI7IGF1dG9wbGF5OyBlbmNyeXB0ZWQtbWVkaWE7IGd5cm9zY29wZTsgcGljdHVyZS1pbi1waWN0dXJlXCIgYWxsb3dGdWxsU2NyZWVuPjwvaWZyYW1lPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxoMj5QT1NURVJTPC9oMj5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInBvc3RlclwiIG9uQ2xpY2s9eygpID0+IHtwb3N0ZXJDeWNsZShwb3N0ZXJOdW0pfX0gc3JjPXtyZXF1aXJlKGAuLi9wdWJsaWMvYmVsbGZsb3dlclBvc3RlciR7cG9zdGVyTnVtfS5qcGdgKX0gLz5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgIC8qIHByZWZpeGVkIGJ5IGh0dHBzOi8vYXV0b3ByZWZpeGVyLmdpdGh1Yi5pbyAoUG9zdENTUzogdjcuMC4yMywgYXV0b3ByZWZpeGVyOiB2OS43LjMpICovXG5cbiAgICAgICAgICAgICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmcmFtZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwdncgLSAyLjFyZW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogY2FsYyg1Ni4yNXZ3IC0gMi4xcmVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2Y2OWQxYTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAudmlkZW9Db250YWluZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAycmVtIDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gMnJlbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDU2LjI1dncgLSAycmVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5sb2FkaW5nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwdncgLSAycmVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGNhbGMoNTYuMjV2dyAtIDJyZW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjY5ZDFhO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMjIyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuYXVkaW9Db250YWluZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZjg5ZTAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuYXVkaW8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2YxZjNmNDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IGludmVydCgxMDAlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAuNztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGF1ZGlvIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5wb3N0ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjUwMHB4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWZyYW1lLCAubG9hZGluZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gMTJyZW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGNhbGMoNTYuMjV2dyAtIDZyZW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubG9hZGluZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnZpZGVvQ29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwdncgLSA2cmVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPC9TdHlsZUJhc2U+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNZWRpYTsiXX0= */\n/*@ sourceURL=/Users/sam.davis-castro/Desktop/bellflower-site-nextjs/pages/media.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Media);

/***/ }),

/***/ "./public sync recursive ^\\.\\/bellflowerPoster.*\\.jpg$":
/*!***************************************************!*\
  !*** ./public sync ^\.\/bellflowerPoster.*\.jpg$ ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./bellflowerPoster1.jpg": "./public/bellflowerPoster1.jpg",
	"./bellflowerPoster2.jpg": "./public/bellflowerPoster2.jpg",
	"./bellflowerPoster3.jpg": "./public/bellflowerPoster3.jpg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./public sync recursive ^\\.\\/bellflowerPoster.*\\.jpg$";

/***/ }),

/***/ "./public/bellflowerPoster1.jpg":
/*!**************************************!*\
  !*** ./public/bellflowerPoster1.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/bellflowerPoster1-0a6ecfd42ffbce11a7ff5f618833c0d5.jpg";

/***/ }),

/***/ "./public/bellflowerPoster2.jpg":
/*!**************************************!*\
  !*** ./public/bellflowerPoster2.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/bellflowerPoster2-41f12b7c92665ba449f633d04ac37ff1.jpg";

/***/ }),

/***/ "./public/bellflowerPoster3.jpg":
/*!**************************************!*\
  !*** ./public/bellflowerPoster3.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/bellflowerPoster3-749bebbbedeaf1e24fe2437999adc3a4.jpg";

/***/ }),

/***/ 5:
/*!******************************!*\
  !*** multi ./pages/media.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/sam.davis-castro/Desktop/bellflower-site-nextjs/pages/media.js */"./pages/media.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=media.js.map