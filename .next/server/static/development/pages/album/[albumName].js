module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/AlbumVendors.js":
/*!************************************!*\
  !*** ./components/AlbumVendors.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/sam.davis-castro/Desktop/bellflower-site-nextjs/components/AlbumVendors.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const AlbumVendors = props => {
  console.log(props.vendor);
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, "PURCHASE ON"), __jsx("div", {
    className: "jsx-1242560693" + " " + "vendors",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, props.vendor.map(vendor => {
    return __jsx("a", {
      key: vendor.vendorName,
      href: vendor.vendorLink,
      className: "jsx-1242560693" + " " + "vendor",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: undefined
    }, vendor.vendorName);
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4267077026",
    __self: undefined
  }, ".vendors.jsx-1242560693{width:100%;display:grid;grid-template-areas:\"topLeft topRight\" \"bottomLeft bottomRight\";grid-template-rows:auto;grid-template-columns:1fr 1fr;grid-row-gap:2rem;grid-column-gap:2rem;margin:2rem 0;}.vendor.jsx-1242560693{border:2px solid #f69d1a;padding:1rem;text-align:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:2rem;background:#f69d1a;color:#222;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW0uZGF2aXMtY2FzdHJvL0Rlc2t0b3AvYmVsbGZsb3dlci1zaXRlLW5leHRqcy9jb21wb25lbnRzL0FsYnVtVmVuZG9ycy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZb0IsQUFHd0IsQUFXYyxXQVZaLGFBRXdCLENBU3hCLGFBQ0ssa0JBQ0wsZ0NBVlcsd0JBQ00sa0JBVVAsWUFUTCxrQkFDRyxxQkFDUCxjQUNsQixrQ0FPdUIsNkZBQ1AsWUFDTyxtQkFDUixXQUNmIiwiZmlsZSI6Ii9Vc2Vycy9zYW0uZGF2aXMtY2FzdHJvL0Rlc2t0b3AvYmVsbGZsb3dlci1zaXRlLW5leHRqcy9jb21wb25lbnRzL0FsYnVtVmVuZG9ycy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEFsYnVtVmVuZG9ycyA9IChwcm9wcykgPT4ge1xuICAgIGNvbnNvbGUubG9nKHByb3BzLnZlbmRvcik7XG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgPGgyPlBVUkNIQVNFIE9OPC9oMj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2ZW5kb3JzXCI+XG4gICAgICAgICAgICB7cHJvcHMudmVuZG9yLm1hcCh2ZW5kb3IgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGEga2V5PXt2ZW5kb3IudmVuZG9yTmFtZX0gY2xhc3NOYW1lPVwidmVuZG9yXCIgaHJlZj17dmVuZG9yLnZlbmRvckxpbmt9Pnt2ZW5kb3IudmVuZG9yTmFtZX08L2E+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSl9XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnZlbmRvcnMge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJ0b3BMZWZ0IHRvcFJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBcImJvdHRvbUxlZnQgYm90dG9tUmlnaHRcIjtcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICAgICAgICAgIGdyaWQtcm93LWdhcDogMnJlbTtcbiAgICAgICAgICAgIGdyaWQtY29sdW1uLWdhcDogMnJlbTtcbiAgICAgICAgICAgIG1hcmdpbjogMnJlbSAwO1xuICAgICAgICB9XG4gICAgICAgIC52ZW5kb3Ige1xuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2Y2OWQxYTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgaGVpZ2h0OiAycmVtO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2Y2OWQxYTtcbiAgICAgICAgICAgIGNvbG9yOiAjMjIyO1xuICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAgIC52ZW5kb3JBdmFpbCB7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFsYnVtVmVuZG9yczsiXX0= */\n/*@ sourceURL=/Users/sam.davis-castro/Desktop/bellflower-site-nextjs/components/AlbumVendors.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3725597374",
    __self: undefined
  }, ".vendorAvail{text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW0uZGF2aXMtY2FzdHJvL0Rlc2t0b3AvYmVsbGZsb3dlci1zaXRlLW5leHRqcy9jb21wb25lbnRzL0FsYnVtVmVuZG9ycy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQzJCLEFBR21DLGtCQUN0QiIsImZpbGUiOiIvVXNlcnMvc2FtLmRhdmlzLWNhc3Ryby9EZXNrdG9wL2JlbGxmbG93ZXItc2l0ZS1uZXh0anMvY29tcG9uZW50cy9BbGJ1bVZlbmRvcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBBbGJ1bVZlbmRvcnMgPSAocHJvcHMpID0+IHtcbiAgICBjb25zb2xlLmxvZyhwcm9wcy52ZW5kb3IpO1xuICAgIFxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgIDxoMj5QVVJDSEFTRSBPTjwvaDI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmVuZG9yc1wiPlxuICAgICAgICAgICAge3Byb3BzLnZlbmRvci5tYXAodmVuZG9yID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxhIGtleT17dmVuZG9yLnZlbmRvck5hbWV9IGNsYXNzTmFtZT1cInZlbmRvclwiIGhyZWY9e3ZlbmRvci52ZW5kb3JMaW5rfT57dmVuZG9yLnZlbmRvck5hbWV9PC9hPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pfVxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC52ZW5kb3JzIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwidG9wTGVmdCB0b3BSaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgXCJib3R0b21MZWZ0IGJvdHRvbVJpZ2h0XCI7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgICAgICAgICBncmlkLXJvdy1nYXA6IDJyZW07XG4gICAgICAgICAgICBncmlkLWNvbHVtbi1nYXA6IDJyZW07XG4gICAgICAgICAgICBtYXJnaW46IDJyZW0gMDtcbiAgICAgICAgfVxuICAgICAgICAudmVuZG9yIHtcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmNjlkMWE7XG4gICAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGhlaWdodDogMnJlbTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmNjlkMWE7XG4gICAgICAgICAgICBjb2xvcjogIzIyMjtcbiAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgICAudmVuZG9yQXZhaWwge1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBbGJ1bVZlbmRvcnM7Il19 */\n/*@ sourceURL=/Users/sam.davis-castro/Desktop/bellflower-site-nextjs/components/AlbumVendors.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (AlbumVendors);

/***/ }),

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
    className: "jsx-2549139207" + " " + "page-layout",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: undefined
  }, props.children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2549139207",
    __self: undefined
  }, "@import url('https://fonts.googleapis.com/css?family=Noto+Serif+TC:300|BenchNine:300&display=swap');html,body{margin:0;padding:0;text-align:center;background:#333;}h1,h2,h3,h4,h5,h6{font-family:'BenchNine',sans-serif;font-weight:300;color:#fff;font-size:2.4rem;text-align:center;}a,p,li,button,ul,ol,div,label{font-family:'Open Sans',sans-serif;font-size:1.2rem;color:#fff;}input,textarea{font-family:'Open Sans',sans-serif;font-size:1.2rem;color:#222;}ul,ol{list-style-type:none;margin:0;padding:0;}a{-webkit-text-decoration:none;text-decoration:none;}section{padding:1rem;box-sizing:border-box;}.page-layout{margin-top:50px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW0uZGF2aXMtY2FzdHJvL0Rlc2t0b3AvYmVsbGZsb3dlci1zaXRlLW5leHRqcy9jb21wb25lbnRzL1N0eWxlQmFzZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJK0IsQUFFb0gsQUFFdEYsQUFNMkIsQUFPQSxBQUtBLEFBS2YsQUFLQSxBQUdSLEFBSUcsQUFJckIsU0F0Q2UsSUErQlksR0FJMUIsR0FsQ3NCLEVBc0JULFNBQ0MsS0FsQk0sQUFPQyxBQUtBLEFBY3JCLEVBOUJvQixHQXVCcEIsVUFHQSxDQXJCZSxDQU9BLEFBS0EsQ0FoQmYsU0FLcUIsQ0FPckIsQUFLRSxnQkFYb0Isa0JBQ3RCIiwiZmlsZSI6Ii9Vc2Vycy9zYW0uZGF2aXMtY2FzdHJvL0Rlc2t0b3AvYmVsbGZsb3dlci1zaXRlLW5leHRqcy9jb21wb25lbnRzL1N0eWxlQmFzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFN0eWxlQmFzZSA9IChwcm9wcykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1sYXlvdXRcIj5cbiAgICAgICAgICAgIHsgcHJvcHMuY2hpbGRyZW4gfVxuICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAgICAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU5vdG8rU2VyaWYrVEM6MzAwfEJlbmNoTmluZTozMDAmZGlzcGxheT1zd2FwJyk7XG4gICAgICAgICAgICAgICAgaHRtbCwgYm9keSB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzMzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdCZW5jaE5pbmUnLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyLjRyZW07XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYSwgcCwgbGksIGJ1dHRvbiwgdWwsIG9sLCBkaXYsIGxhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlucHV0LCB0ZXh0YXJlYSB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMjIyO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHVsLCBvbCB7XG4gICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzZWN0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnBhZ2UtbGF5b3V0IHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm1hcCB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IFxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0eWxlQmFzZTsiXX0= */\n/*@ sourceURL=/Users/sam.davis-castro/Desktop/bellflower-site-nextjs/components/StyleBase.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (StyleBase);

/***/ }),

/***/ "./components/ViewAlbumSides.js":
/*!**************************************!*\
  !*** ./components/ViewAlbumSides.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_StyleBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/StyleBase */ "./components/StyleBase.js");
var _jsxFileName = "/Users/sam.davis-castro/Desktop/bellflower-site-nextjs/components/ViewAlbumSides.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const ViewAlbumSides = props => {
  let album = props.album;
  const {
    0: inView,
    1: setInView
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('front');

  const updateInView = view => {
    setInView(view);
    document.getElementsByClassName(view)[0].classList.add('active');
  };

  return __jsx(_components_StyleBase__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx("section", {
    className: "jsx-381182823",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-381182823" + " " + "album-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx("img", {
    src: "",
    className: "jsx-381182823",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }), __jsx("img", {
    src: __webpack_require__("./public/albums sync recursive ^\\.\\/.*\\/album\\-.*\\.png$")(`./${album}/album-${inView}.png`),
    className: "jsx-381182823" + " " + "icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-381182823" + " " + "album-controls",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, __jsx("button", {
    onClick: () => {
      updateInView('front');
    },
    className: "jsx-381182823" + " " + `front ${inView === 'front' ? 'active' : ''}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, "Front", __jsx("br", {
    className: "jsx-381182823",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }), "Cover"), __jsx("button", {
    onClick: () => {
      updateInView('back');
    },
    className: "jsx-381182823" + " " + `back ${inView === 'back' ? 'active' : ''}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, "Back", __jsx("br", {
    className: "jsx-381182823",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }), "Cover"), __jsx("button", {
    onClick: () => {
      updateInView('left');
    },
    className: "jsx-381182823" + " " + `left ${inView === 'left' ? 'active' : ''}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, "Inside", __jsx("br", {
    className: "jsx-381182823",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }), "Left"), __jsx("button", {
    onClick: () => {
      updateInView('right');
    },
    className: "jsx-381182823" + " " + `right ${inView === 'right' ? 'active' : ''}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, "Inside", __jsx("br", {
    className: "jsx-381182823",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }), "Right")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "381182823",
    __self: undefined
  }, ".album-controls.jsx-381182823{display:grid;grid-template-areas:\"front back\" \"left right\";grid-template-rows:\"3rem 3rem\";grid-template-columns:\"50% 50%\";grid-row-gap:2rem;grid-column-gap:2rem;margin:2rem 0;}.album-controls.jsx-381182823 button.jsx-381182823{background:transparent;border:none;}.active.jsx-381182823{color:#f69d1a;}.front.jsx-381182823{grid-area:front;}.back.jsx-381182823{grid-area:back;}.left.jsx-381182823{grid-area:left;}.right.jsx-381182823{grid-area:right;}img.jsx-381182823{width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW0uZGF2aXMtY2FzdHJvL0Rlc2t0b3AvYmVsbGZsb3dlci1zaXRlLW5leHRqcy9jb21wb25lbnRzL1ZpZXdBbGJ1bVNpZGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCd0IsQUFHOEIsQUFVVSxBQUlULEFBR0UsQUFHRCxBQUdBLEFBR0MsQUFNTCxXQUNmLEVBL0I2QixDQWE3QixDQU1BLEFBR0EsQ0FOQSxBQVNBLE9BaEJnQixZQUNoQix3QkFUbUMsK0JBQ0MsZ0NBQ2Qsa0JBQ0cscUJBQ1AsY0FDbEIiLCJmaWxlIjoiL1VzZXJzL3NhbS5kYXZpcy1jYXN0cm8vRGVza3RvcC9iZWxsZmxvd2VyLXNpdGUtbmV4dGpzL2NvbXBvbmVudHMvVmlld0FsYnVtU2lkZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTdHlsZUJhc2UgZnJvbSAnLi4vY29tcG9uZW50cy9TdHlsZUJhc2UnO1xuXG5cbmNvbnN0IFZpZXdBbGJ1bVNpZGVzID0gKHByb3BzKSA9PiB7XG4gICAgbGV0IGFsYnVtID0gcHJvcHMuYWxidW07XG4gICAgY29uc3QgW2luVmlldywgc2V0SW5WaWV3XSA9IHVzZVN0YXRlKCdmcm9udCcpO1xuICAgIGNvbnN0IHVwZGF0ZUluVmlldyA9ICh2aWV3KSA9PiB7XG4gICAgICAgICAgICBzZXRJblZpZXcodmlldyk7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHZpZXcpWzBdLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8U3R5bGVCYXNlPlxuICAgICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGJ1bS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIlwiLz5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImljb25cIiBzcmM9e3JlcXVpcmUoYC4uL3B1YmxpYy9hbGJ1bXMvJHthbGJ1bX0vYWxidW0tJHtpblZpZXd9LnBuZ2ApfSAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsYnVtLWNvbnRyb2xzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YGZyb250ICR7aW5WaWV3ID09PSAnZnJvbnQnID8gJ2FjdGl2ZScgOiAnJ31gfSBvbkNsaWNrPXsoKSA9PiB7dXBkYXRlSW5WaWV3KCdmcm9udCcpfX0+RnJvbnQ8YnIvPkNvdmVyPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YGJhY2sgJHtpblZpZXcgPT09ICdiYWNrJyA/ICdhY3RpdmUnIDogJyd9YH0gb25DbGljaz17KCkgPT4ge3VwZGF0ZUluVmlldygnYmFjaycpfX0+QmFjazxici8+Q292ZXI8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgbGVmdCAke2luVmlldyA9PT0gJ2xlZnQnID8gJ2FjdGl2ZScgOiAnJ31gfSBvbkNsaWNrPXsoKSA9PiB7dXBkYXRlSW5WaWV3KCdsZWZ0Jyl9fT5JbnNpZGU8YnIvPkxlZnQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgcmlnaHQgJHtpblZpZXcgPT09ICdyaWdodCcgPyAnYWN0aXZlJyA6ICcnfWB9IG9uQ2xpY2s9eygpID0+IHt1cGRhdGVJblZpZXcoJ3JpZ2h0Jyl9fT5JbnNpZGU8YnIvPlJpZ2h0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLmFsYnVtLWNvbnRyb2xzIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiZnJvbnQgYmFja1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGVmdCByaWdodFwiO1xuICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogXCIzcmVtIDNyZW1cIjtcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IFwiNTAlIDUwJVwiO1xuICAgICAgICAgICAgICAgIGdyaWQtcm93LWdhcDogMnJlbTtcbiAgICAgICAgICAgICAgICBncmlkLWNvbHVtbi1nYXA6IDJyZW07XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAycmVtIDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYWxidW0tY29udHJvbHMgYnV0dG9uIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYWN0aXZlIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2Y2OWQxYTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5mcm9udCB7XG4gICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiBmcm9udDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5iYWNrIHtcbiAgICAgICAgICAgICAgICBncmlkLWFyZWE6IGJhY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubGVmdCB7XG4gICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiBsZWZ0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnJpZ2h0IHtcbiAgICAgICAgICAgICAgICBncmlkLWFyZWE6IHJpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFsYnVtLWNvbnRhaW5lciB7XG4gXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L1N0eWxlQmFzZT5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFZpZXdBbGJ1bVNpZGVzOyJdfQ== */\n/*@ sourceURL=/Users/sam.davis-castro/Desktop/bellflower-site-nextjs/components/ViewAlbumSides.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (ViewAlbumSides);

/***/ }),

/***/ "./pages/album/[albumName].js":
/*!************************************!*\
  !*** ./pages/album/[albumName].js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_StyleBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/StyleBase */ "./components/StyleBase.js");
/* harmony import */ var _components_ViewAlbumSides__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/ViewAlbumSides */ "./components/ViewAlbumSides.js");
/* harmony import */ var _public_albumInfo_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/albumInfo.js */ "./public/albumInfo.js");
/* harmony import */ var _components_AlbumVendors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/AlbumVendors */ "./components/AlbumVendors.js");
var _jsxFileName = "/Users/sam.davis-castro/Desktop/bellflower-site-nextjs/pages/album/[albumName].js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





const Album = () => {
  return __jsx(_components_StyleBase__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("section", {
    className: "jsx-2852094415",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-2852094415" + " " + "albums",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, _public_albumInfo_js__WEBPACK_IMPORTED_MODULE_4__["default"].map((album, i) => {
    return __jsx("div", {
      key: i,
      className: "jsx-2852094415",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: undefined
    }, __jsx(_components_AlbumVendors__WEBPACK_IMPORTED_MODULE_5__["default"], {
      vendor: album.vendors,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: undefined
    }), __jsx("h2", {
      className: "jsx-2852094415",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: undefined
    }, "INFO"), __jsx("p", {
      className: "jsx-2852094415" + " " + "detail",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: undefined
    }, "Album Name", __jsx("br", {
      className: "jsx-2852094415",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: undefined
    }), __jsx("span", {
      className: "jsx-2852094415",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: undefined
    }, album.name)), __jsx("p", {
      className: "jsx-2852094415" + " " + "detail",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: undefined
    }, "Release Date", __jsx("br", {
      className: "jsx-2852094415",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: undefined
    }), __jsx("span", {
      className: "jsx-2852094415",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: undefined
    }, album.releaseDate)), __jsx("p", {
      className: "jsx-2852094415" + " " + "detail",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: undefined
    }, "Composers", __jsx("br", {
      className: "jsx-2852094415",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: undefined
    }), __jsx("span", {
      className: "jsx-2852094415",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: undefined
    }, album.writers.map((writer, j) => {
      if (j + 1 < album.writers.length) {
        return __jsx("span", {
          key: j,
          className: "jsx-2852094415",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          },
          __self: undefined
        }, `${writer}, `);
      } else {
        return __jsx("span", {
          key: j,
          className: "jsx-2852094415",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          __self: undefined
        }, writer);
      }
    }))), __jsx("p", {
      className: "jsx-2852094415" + " " + "detail",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: undefined
    }, "Song Number", __jsx("br", {
      className: "jsx-2852094415",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: undefined
    }), __jsx("span", {
      className: "jsx-2852094415",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: undefined
    }, album.songs)), __jsx("div", {
      className: "jsx-2852094415" + " " + "detail",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: undefined
    }, "Song Names", __jsx("br", {
      className: "jsx-2852094415",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: undefined
    }), __jsx("span", {
      className: "jsx-2852094415",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: undefined
    }, album.songNames.map((song, k) => {
      return __jsx("div", {
        key: k,
        className: "jsx-2852094415",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: undefined
      }, __jsx("span", {
        className: "jsx-2852094415",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: undefined
      }, song), __jsx("br", {
        className: "jsx-2852094415",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: undefined
      }));
    }))), __jsx("h2", {
      className: "jsx-2852094415",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: undefined
    }, "ART"), __jsx(_components_ViewAlbumSides__WEBPACK_IMPORTED_MODULE_3__["default"], {
      album: album.name.toLowerCase().split(' ').join('-'),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: undefined
    }));
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2852094415",
    __self: undefined
  }, ".album-vendors.jsx-2852094415{display:grid;grid-template-areas:\"iTunes googlePlay\" \"amazonPrime cdBaby\";grid-template-rows:\"3rem 3rem\";grid-template-columns:\"50% 50%\";grid-row-gap:2rem;margin:2rem 0;}.albums.jsx-2852094415{text-align:left;}.detail.jsx-2852094415{color:#f29a2f;}.detail.jsx-2852094415 span.jsx-2852094415{color:#fff;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW0uZGF2aXMtY2FzdHJvL0Rlc2t0b3AvYmVsbGZsb3dlci1zaXRlLW5leHRqcy9wYWdlcy9hbGJ1bS9bYWxidW1OYW1lXS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQ3dCLEFBSThCLEFBU0csQUFHRixBQUdILFdBQ2YsRUFkcUMsQ0FXckMsRUFIQSwwREFQbUMsK0JBQ0MsZ0NBQ2Qsa0JBQ0osY0FDbEIiLCJmaWxlIjoiL1VzZXJzL3NhbS5kYXZpcy1jYXN0cm8vRGVza3RvcC9iZWxsZmxvd2VyLXNpdGUtbmV4dGpzL3BhZ2VzL2FsYnVtL1thbGJ1bU5hbWVdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN0eWxlQmFzZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL1N0eWxlQmFzZSc7XG5pbXBvcnQgVmlld0FsYnVtU2lkZXMgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9WaWV3QWxidW1TaWRlcyc7XG5pbXBvcnQgYWxidW1JbmZvIGZyb20gJy4uLy4uL3B1YmxpYy9hbGJ1bUluZm8uanMnO1xuaW1wb3J0IEFsYnVtVmVuZG9ycyBmcm9tICcuLi8uLi9jb21wb25lbnRzL0FsYnVtVmVuZG9ycyc7XG5cbmNvbnN0IEFsYnVtID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxTdHlsZUJhc2U+XG4gICAgICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsYnVtc1wiPlxuICAgICAgICAgICAgICAgIHthbGJ1bUluZm8ubWFwKChhbGJ1bSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBbGJ1bVZlbmRvcnMgdmVuZG9yPXthbGJ1bS52ZW5kb3JzfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPklORk88L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGV0YWlsXCI+QWxidW0gTmFtZTxici8+PHNwYW4+e2FsYnVtLm5hbWV9PC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRldGFpbFwiPlJlbGVhc2UgRGF0ZTxici8+PHNwYW4+e2FsYnVtLnJlbGVhc2VEYXRlfTwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXRhaWxcIj5Db21wb3NlcnM8YnIvPjxzcGFuPnthbGJ1bS53cml0ZXJzLm1hcCgod3JpdGVyLCBqKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGorMSA8IGFsYnVtLndyaXRlcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8c3BhbiBrZXk9e2p9PntgJHt3cml0ZXJ9LCBgfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHNwYW4ga2V5PXtqfT57d3JpdGVyfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXRhaWxcIj5Tb25nIE51bWJlcjxici8+PHNwYW4+e2FsYnVtLnNvbmdzfTwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbFwiPlNvbmcgTmFtZXM8YnIvPjxzcGFuPnthbGJ1bS5zb25nTmFtZXMubWFwKChzb25nLCBrKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYga2V5PXtrfT48c3Bhbj57c29uZ308L3NwYW4+PGJyLz48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfTwvc3Bhbj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5BUlQ8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFZpZXdBbGJ1bVNpZGVzIGFsYnVtPXthbGJ1bS5uYW1lLnRvTG93ZXJDYXNlKCkuc3BsaXQoJyAnKS5qb2luKCctJyl9Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuXG4gICAgICAgICAgICAuYWxidW0tdmVuZG9ycyB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImlUdW5lcyBnb29nbGVQbGF5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhbWF6b25QcmltZSBjZEJhYnlcIjtcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IFwiM3JlbSAzcmVtXCI7XG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBcIjUwJSA1MCVcIjtcbiAgICAgICAgICAgICAgICBncmlkLXJvdy1nYXA6IDJyZW07XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAycmVtIDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYWxidW1zIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmRldGFpbCB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmMjlhMmY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZGV0YWlsIHNwYW4ge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L1N0eWxlQmFzZT5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFsYnVtOyJdfQ== */\n/*@ sourceURL=/Users/sam.davis-castro/Desktop/bellflower-site-nextjs/pages/album/[albumName].js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Album);

/***/ }),

/***/ "./public/albumInfo.js":
/*!*****************************!*\
  !*** ./public/albumInfo.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const albums = [{
  "item": "Bellflower album",
  "name": "Changes On The Way",
  "urlName": "changes-on-the-way",
  "albumImages": "public/changes-on-the-way",
  "releaseDate": "September 30, 2019",
  "writers": ["Franklin Bellflower", "Natasha Wilson", "David Criswell"],
  "songs": "10",
  "price": "$10",
  "songNames": ["Changes on the Way", "Feeling You", "Blowing the Wind", "Looking for the One", "Candy Crunch", "Kind of Like Jolene", "Bradford Pear", "Fire to the Feast", "What Is Love", "To the End"],
  "vendors": [{
    "vendorName": "iTunes",
    "vendorLink": "https://music.apple.com/us/album/changes-on-the-way/1480122305"
  }, {
    "vendorName": "CD Baby",
    "vendorLink": "https://store.cdbaby.com/cd/bellflower"
  }, {
    "vendorName": "Google Play",
    "vendorLink": "https://play.google.com/store/music/album/Bellflower_Changes_on_the_Way?id=Bix7j567nfnaili7n6utbonfe34"
  }, {
    "vendorName": "Amazon Prime",
    "vendorLink": "https://www.amazon.com/Changes-Way-Bellflower/dp/B07XLXV6W8"
  }]
}];
/* harmony default export */ __webpack_exports__["default"] = (albums);

/***/ }),

/***/ "./public/albums sync recursive ^\\.\\/.*\\/album\\-.*\\.png$":
/*!*****************************************************!*\
  !*** ./public/albums sync ^\.\/.*\/album\-.*\.png$ ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./changes-on-the-way/album-back.png": "./public/albums/changes-on-the-way/album-back.png",
	"./changes-on-the-way/album-front.png": "./public/albums/changes-on-the-way/album-front.png",
	"./changes-on-the-way/album-left.png": "./public/albums/changes-on-the-way/album-left.png",
	"./changes-on-the-way/album-right.png": "./public/albums/changes-on-the-way/album-right.png"
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
webpackContext.id = "./public/albums sync recursive ^\\.\\/.*\\/album\\-.*\\.png$";

/***/ }),

/***/ "./public/albums/changes-on-the-way/album-back.png":
/*!*********************************************************!*\
  !*** ./public/albums/changes-on-the-way/album-back.png ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/album-back-ef1cebf1fd3c97db83d9bc82f5bdabdb.png";

/***/ }),

/***/ "./public/albums/changes-on-the-way/album-front.png":
/*!**********************************************************!*\
  !*** ./public/albums/changes-on-the-way/album-front.png ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/album-front-e7c1f2a4a62f97b3fe42cdd82d0d2ab1.png";

/***/ }),

/***/ "./public/albums/changes-on-the-way/album-left.png":
/*!*********************************************************!*\
  !*** ./public/albums/changes-on-the-way/album-left.png ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/album-left-fc2498305cc6481515616e114b7c5c9d.png";

/***/ }),

/***/ "./public/albums/changes-on-the-way/album-right.png":
/*!**********************************************************!*\
  !*** ./public/albums/changes-on-the-way/album-right.png ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/album-right-9b7c7940185dfb61ac901a57a1f75b87.png";

/***/ }),

/***/ 3:
/*!******************************************!*\
  !*** multi ./pages/album/[albumName].js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/sam.davis-castro/Desktop/bellflower-site-nextjs/pages/album/[albumName].js */"./pages/album/[albumName].js");


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
//# sourceMappingURL=[albumName].js.map