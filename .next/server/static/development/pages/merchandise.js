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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
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
    className: "jsx-2975590344" + " " + "page-layout",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: undefined
  }, props.children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2975590344",
    __self: undefined
  }, "@import url('https://fonts.googleapis.com/css?family=Noto+Serif+TC:300|BenchNine:300&display=swap');html,body{margin:0;padding:0;text-align:center;background:#333;}h1,h2,h3,h4,h5,h6{font-family:'BenchNine',sans-serif;font-weight:300;color:#fff;font-size:2.4rem;text-align:center;}a,p,li,button,ul,ol,div,label{font-family:'Open Sans',sans-serif;font-size:1.2rem;line-height:2rem;color:#fff;}input,textarea{font-family:'Open Sans',sans-serif;font-size:1.2rem;line-height:2rem;color:#222;}ul,ol{list-style-type:none;margin:0;padding:0;line-height:2rem;}a{-webkit-text-decoration:none;text-decoration:none;}section{padding:1rem;box-sizing:border-box;}@media only screen and (min-width:500px){section{padding:1rem 6rem;}}.page-layout{margin-top:50px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW0uZGF2aXMtY2FzdHJvL0Rlc2t0b3AvYmVsbGZsb3dlci1zaXRlLW5leHRqcy9jb21wb25lbnRzL1N0eWxlQmFzZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJK0IsQUFFb0gsQUFFdEYsQUFNMkIsQUFTQSxBQU1BLEFBTWYsQUFNQSxBQUlSLEFBTVMsQUFLTixBQUlyQixTQW5EZSxJQXFDWSxHQVcxQixFQUxJLENBMUNrQixFQTBCVCxTQUNDLEtBdEJNLEFBU0MsQUFNQSxBQWlCckIsRUFwQ29CLEdBMkJDLFVBSXJCLENBMUJlLENBU00sQUFNQSxDQW5CckIsSUEyQkEsS0F0QnFCLE9BU04sQUFNQSxVQWRPLENBU3RCLEFBTUUsaUJBZEYiLCJmaWxlIjoiL1VzZXJzL3NhbS5kYXZpcy1jYXN0cm8vRGVza3RvcC9iZWxsZmxvd2VyLXNpdGUtbmV4dGpzL2NvbXBvbmVudHMvU3R5bGVCYXNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgU3R5bGVCYXNlID0gKHByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWxheW91dFwiPlxuICAgICAgICAgICAgeyBwcm9wcy5jaGlsZHJlbiB9XG4gICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgICAgICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Tm90bytTZXJpZitUQzozMDB8QmVuY2hOaW5lOjMwMCZkaXNwbGF5PXN3YXAnKTtcbiAgICAgICAgICAgICAgICBodG1sLCBib2R5IHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzMzM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0JlbmNoTmluZScsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIuNHJlbTtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGEsIHAsIGxpLCBidXR0b24sIHVsLCBvbCwgZGl2LCBsYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW5wdXQsIHRleHRhcmVhIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDJyZW07XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMjIyO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHVsLCBvbCB7XG4gICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMnJlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzZWN0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NTAwcHgpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VjdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxcmVtIDZyZW07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAucGFnZS1sYXlvdXQge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubWFwIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3R5bGVCYXNlOyJdfQ== */\n/*@ sourceURL=/Users/sam.davis-castro/Desktop/bellflower-site-nextjs/components/StyleBase.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (StyleBase);

/***/ }),

/***/ "./pages/merchandise.js":
/*!******************************!*\
  !*** ./pages/merchandise.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_StyleBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/StyleBase */ "./components/StyleBase.js");
/* harmony import */ var _public_merchInfo_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/merchInfo.js */ "./public/merchInfo.js");
var _jsxFileName = "/Users/sam.davis-castro/Desktop/bellflower-site-nextjs/pages/merchandise.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const Merch = () => {
  const merchItems = _public_merchInfo_js__WEBPACK_IMPORTED_MODULE_3__["default"];
  console.log(merchItems);
  return __jsx(_components_StyleBase__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("section", {
    className: "jsx-770515978",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("h2", {
    className: "jsx-770515978",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, "ITEMS"), __jsx("div", {
    className: "jsx-770515978" + " " + "merchContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, merchItems.map((item, i) => {
    return __jsx("div", {
      key: i,
      className: "jsx-770515978" + " " + "merchItem",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: undefined
    }, __jsx("div", {
      className: "jsx-770515978" + " " + "description",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: undefined
    }, __jsx("p", {
      className: "jsx-770515978",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: undefined
    }, "Item: ", item.name), __jsx("p", {
      className: "jsx-770515978",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: undefined
    }, "Price: $", item.price), __jsx("p", {
      className: "jsx-770515978",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: undefined
    }, "Get at: ", item.availableAt), __jsx("div", {
      className: "jsx-770515978" + " " + "imgContainer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: undefined
    }, __jsx("img", {
      src: item.imgSrc,
      className: "jsx-770515978",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: undefined
    }))));
  })), __jsx("h2", {
    className: "jsx-770515978",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, "PURCHASING"), __jsx("p", {
    className: "jsx-770515978",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, "We currently accept ", __jsx("span", {
    className: "jsx-770515978",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, "Credit Cards"), ", ", __jsx("span", {
    className: "jsx-770515978",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, "Venmo"), ", and ", __jsx("span", {
    className: "jsx-770515978",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, "Paypal"), ". Contact us below if you have any questions about stock or payment details.")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "770515978",
    __self: undefined
  }, ".payment-types.jsx-770515978{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}span.jsx-770515978{color:#f69d1a;}.merchContainer.jsx-770515978{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.merchItem.jsx-770515978{border:2px solid #f69d1a;padding:2rem;margin:2rem 0;}.merchItem.jsx-770515978 .imgContainer.jsx-770515978{height:auto;}.merchItem.jsx-770515978 .imgContainer.jsx-770515978 img.jsx-770515978{width:70%;object-fit:contain;}.description.jsx-770515978 p.jsx-770515978{text-align:left;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW0uZGF2aXMtY2FzdHJvL0Rlc2t0b3AvYmVsbGZsb3dlci1zaXRlLW5leHRqcy9wYWdlcy9tZXJjaGFuZGlzZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQndCLEFBRzhCLEFBS0MsQUFHRCxBQUtZLEFBS2IsQUFHRixBQUlNLFVBSEcsRUFIdkIsRUFiQSxFQW9CQSxTQVppQixJQVNqQixTQVJrQixjQUNsQixzQkFmaUMsQUFRUCw4RUFDQyw2Q0FSSixzREFTdkIsdUNBUkEiLCJmaWxlIjoiL1VzZXJzL3NhbS5kYXZpcy1jYXN0cm8vRGVza3RvcC9iZWxsZmxvd2VyLXNpdGUtbmV4dGpzL3BhZ2VzL21lcmNoYW5kaXNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN0eWxlQmFzZSBmcm9tICcuLi9jb21wb25lbnRzL1N0eWxlQmFzZSc7XG5pbXBvcnQgbWVyY2hhbmRpc2UgZnJvbSAnLi4vcHVibGljL21lcmNoSW5mby5qcyc7XG5jb25zdCBNZXJjaCA9ICgpID0+IHtcbiAgICBjb25zdCBtZXJjaEl0ZW1zID0gbWVyY2hhbmRpc2U7XG4gICAgY29uc29sZS5sb2cobWVyY2hJdGVtcyk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFN0eWxlQmFzZT5cbiAgICAgICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxoMj5JVEVNUzwvaDI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXJjaENvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICB7bWVyY2hJdGVtcy5tYXAoKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT1cIm1lcmNoSXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkl0ZW06IHtpdGVtLm5hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlByaWNlOiAmIzM2O3tpdGVtLnByaWNlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5HZXQgYXQ6IHtpdGVtLmF2YWlsYWJsZUF0fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZ0NvbnRhaW5lclwiPjxpbWcgc3JjPXtpdGVtLmltZ1NyY30vPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxoMj5QVVJDSEFTSU5HPC9oMj5cbiAgICAgICAgICAgICAgICA8cD5XZSBjdXJyZW50bHkgYWNjZXB0IDxzcGFuPkNyZWRpdCBDYXJkczwvc3Bhbj4sIDxzcGFuPlZlbm1vPC9zcGFuPiwgYW5kIDxzcGFuPlBheXBhbDwvc3Bhbj4uIENvbnRhY3QgdXMgYmVsb3cgaWYgeW91IGhhdmUgYW55IHF1ZXN0aW9ucyBhYm91dCBzdG9jayBvciBwYXltZW50IGRldGFpbHMuPC9wPlxuXG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAucGF5bWVudC10eXBlcyB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmNjlkMWE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWVyY2hDb250YWluZXIge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tZXJjaEl0ZW0ge1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmNjlkMWE7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMnJlbTtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDJyZW0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tZXJjaEl0ZW0gLmltZ0NvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1lcmNoSXRlbSAuaW1nQ29udGFpbmVyIGltZyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmRlc2NyaXB0aW9uIHAge1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvU3R5bGVCYXNlPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWVyY2g7Il19 */\n/*@ sourceURL=/Users/sam.davis-castro/Desktop/bellflower-site-nextjs/pages/merchandise.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Merch);

/***/ }),

/***/ "./public/albums/changes-on-the-way/album-front.png":
/*!**********************************************************!*\
  !*** ./public/albums/changes-on-the-way/album-front.png ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/album-front-e7c1f2a4a62f97b3fe42cdd82d0d2ab1.png";

/***/ }),

/***/ "./public/merchInfo.js":
/*!*****************************!*\
  !*** ./public/merchInfo.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_sticker_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../public/sticker.svg */ "./public/sticker.svg");
/* harmony import */ var _public_sticker_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_public_sticker_svg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_shirt1_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/shirt1.svg */ "./public/shirt1.svg");
/* harmony import */ var _public_shirt1_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_shirt1_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_albums_changes_on_the_way_album_front_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/albums/changes-on-the-way/album-front.png */ "./public/albums/changes-on-the-way/album-front.png");
/* harmony import */ var _public_albums_changes_on_the_way_album_front_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_albums_changes_on_the_way_album_front_png__WEBPACK_IMPORTED_MODULE_2__);



const merchItems = [{
  name: "T-shirt",
  price: '20',
  availableAt: 'Performances.',
  imgSrc: _public_shirt1_svg__WEBPACK_IMPORTED_MODULE_1___default.a
}, {
  name: "Sticker",
  price: '0',
  availableAt: 'Performances.',
  imgSrc: _public_sticker_svg__WEBPACK_IMPORTED_MODULE_0___default.a
}, {
  name: "Album (Changes On The Way)",
  price: '10',
  availableAt: 'Performances and online.',
  imgSrc: _public_albums_changes_on_the_way_album_front_png__WEBPACK_IMPORTED_MODULE_2___default.a
}];
/* harmony default export */ __webpack_exports__["default"] = (merchItems);

/***/ }),

/***/ "./public/shirt1.svg":
/*!***************************!*\
  !*** ./public/shirt1.svg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/shirt1-4aa423598235e460e0dd29a28babb57b.svg";

/***/ }),

/***/ "./public/sticker.svg":
/*!****************************!*\
  !*** ./public/sticker.svg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/sticker-151fc66497ee6d6e8c111aa44731c7db.svg";

/***/ }),

/***/ 6:
/*!************************************!*\
  !*** multi ./pages/merchandise.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/sam.davis-castro/Desktop/bellflower-site-nextjs/pages/merchandise.js */"./pages/merchandise.js");


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
//# sourceMappingURL=merchandise.js.map