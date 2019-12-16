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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/NumberOfEvents.js":
/*!**************************************!*\
  !*** ./components/NumberOfEvents.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/sam.davis-castro/Desktop/bellflower-site-nextjs/components/NumberOfEvents.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const NumberOfEvents = props => {
  const noError = () => {
    if (props.events === 1) {
      return __jsx("p", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 4
        },
        __self: undefined
      }, "There is ", props.events, " event in the next 30 days.");
    } else {
      return __jsx("p", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        },
        __self: undefined
      }, "There are ", props.events, " events in the next 30 days.");
    }
  };

  const error = () => {
    return __jsx("p", {
      className: "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: undefined
    }, "Sorry, calendar data could not be fetched. Refresh this page in a few seconds to try again.");
  };

  return props.error ? error() : noError();
};

/* harmony default export */ __webpack_exports__["default"] = (NumberOfEvents);

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

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./pages/calendar.js":
/*!***************************!*\
  !*** ./pages/calendar.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_StyleBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/StyleBase */ "./components/StyleBase.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_NumberOfEvents__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/NumberOfEvents */ "./components/NumberOfEvents.js");

var _jsxFileName = "/Users/sam.davis-castro/Desktop/bellflower-site-nextjs/pages/calendar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;





class Calendar extends react__WEBPACK_IMPORTED_MODULE_3___default.a.Component {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", {
      calendarEvents: [],
      fetchError: false
    });
  }

  componentDidMount() {
    let now = new Date();
    let startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0);
    let endOfDayOneMonthOut = new Date(now.getFullYear(), now.getMonth() + 1, now.getDate(), 23, 59, 59);
    axios__WEBPACK_IMPORTED_MODULE_4___default.a.get('https://www.googleapis.com/calendar/v3/calendars/thebellflowerband%40gmail.com/events?key=AIzaSyA73ezNBuEPQSSjMgoMjfiFa5wwT1TJht8').then(res => {
      let allEvents = res.data.items;
      allEvents = allEvents.sort((a, b) => Date.parse(a.start.dateTime.toString()) > Date.parse(b.start.dateTime.toString()) ? 1 : -1);
      let futureEvents = [];
      allEvents.map((calEvent, i) => {
        let eventTime = new Date(calEvent.start.dateTime);

        if (eventTime > startOfToday && eventTime < endOfDayOneMonthOut) {
          futureEvents.push(calEvent);
        }

        return true;
      });
      this.setState({
        calendarEvents: futureEvents
      });
    }).catch(err => {
      this.setState({
        fetchError: true
      });
    });
  }

  date(utcDate, type) {
    let date = new Date(utcDate);
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'Novermber', 'December'];
    const dateMaker = {
      get day() {
        return days[date.getDay()];
      },

      get dayNum() {
        return date.getDate();
      },

      get month() {
        return months[date.getMonth()];
      },

      get year() {
        return date.getFullYear();
      },

      get hour() {
        return date.getHours();
      },

      get minute() {
        return date.getMinutes();
      },

      get localTime() {
        return date.toLocaleTimeString().slice(0, -6).concat(date.toLocaleTimeString().slice(-3));
      }

    };
    let formattedDate;

    switch (type) {
      case 'day':
        formattedDate = dateMaker.day;
        break;

      case 'dayNum':
        formattedDate = dateMaker.dayNum;
        break;

      case 'month':
        formattedDate = dateMaker.month;
        break;

      case 'year':
        formattedDate = dateMaker.year;
        break;

      case 'hour':
        formattedDate = dateMaker.hour;
        break;

      case 'minute':
        formattedDate = dateMaker.minute;
        break;

      case 'localTime':
        formattedDate = dateMaker.localTime;
        break;

      default:
        break;
    }

    return formattedDate;
  }

  formatMapsUrl(address) {
    let firstPart = 'https://www.google.com/maps/search/?api=1&query=';
    let secondPart = encodeURIComponent(address);
    return firstPart + secondPart;
  }

  render() {
    const eventsList = this.state.calendarEvents.map((calEvent, i) => {
      return __jsx("div", {
        key: i,
        className: "jsx-2312332707" + " " + "eventCard",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, __jsx("h3", {
        className: "jsx-2312332707",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, calEvent.summary), __jsx("div", {
        className: "jsx-2312332707" + " " + "detailsContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-2312332707" + " " + "details",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-2312332707" + " " + "event",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, __jsx("img", {
        src: __webpack_require__(/*! ../public/time-icon-01.svg */ "./public/time-icon-01.svg"),
        className: "jsx-2312332707" + " " + "icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }), __jsx("p", {
        className: "jsx-2312332707" + " " + "time",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, this.date(calEvent.start.dateTime, 'day'), ", ", this.date(calEvent.start.dateTime, 'month'), " ", this.date(calEvent.start.dateTime, 'dayNum'), "  ", this.date(calEvent.start.dateTime, 'localTime'), " - ", this.date(calEvent.end.dateTime, 'localTime'))), __jsx("div", {
        className: "jsx-2312332707" + " " + "event",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, __jsx("img", {
        src: __webpack_require__(/*! ../public/pin-icon-01.svg */ "./public/pin-icon-01.svg"),
        className: "jsx-2312332707" + " " + "icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }), __jsx("p", {
        className: "jsx-2312332707" + " " + "pin",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, calEvent.location)), __jsx("div", {
        className: "jsx-2312332707" + " " + "event",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, __jsx("img", {
        src: __webpack_require__(/*! ../public/description-icon-01.svg */ "./public/description-icon-01.svg"),
        className: "jsx-2312332707" + " " + "icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }), __jsx("p", {
        className: "jsx-2312332707" + " " + "description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, calEvent.description)), __jsx("div", {
        className: "jsx-2312332707" + " " + "buttons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, __jsx("a", {
        alt: "directions link",
        href: this.formatMapsUrl(calEvent.location),
        className: "jsx-2312332707" + " " + "directions",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-2312332707" + " " + "event",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, __jsx("img", {
        src: __webpack_require__(/*! ../public/navigate-icon-01.svg */ "./public/navigate-icon-01.svg"),
        className: "jsx-2312332707" + " " + "icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }), __jsx("p", {
        className: "jsx-2312332707" + " " + "navigate",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, "Navigate"))), __jsx("a", {
        href: calEvent.htmlLink,
        className: "jsx-2312332707" + " " + "openInCalendar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-2312332707" + " " + "event",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, __jsx("img", {
        src: __webpack_require__(/*! ../public/calendar-icon-01.svg */ "./public/calendar-icon-01.svg"),
        className: "jsx-2312332707" + " " + "icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }), __jsx("p", {
        className: "jsx-2312332707" + " " + "calendar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, "Calendar")))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        id: "2312332707",
        __self: this
      }, ".eventCard.jsx-2312332707{padding:1rem;margin:2rem 0;text-align:left;}.eventCard.jsx-2312332707:last-child{margin-bottom:0;}.icon.jsx-2312332707{height:1.5rem;position:relative;top:5px;}.event.jsx-2312332707{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:baseline;-webkit-box-align:baseline;-ms-flex-align:baseline;align-items:baseline;width:100%;}.time.jsx-2312332707{margin-left:10px;}.pin.jsx-2312332707{margin-left:6px;}.description.jsx-2312332707{margin-left:9px;}.calendar.jsx-2312332707{margin-left:10px;}.navigate.jsx-2312332707{margin-left:9px;}.buttons.jsx-2312332707{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin:1rem 0;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.buttons.jsx-2312332707 .event.jsx-2312332707:first-child{margin:0 0 1rem 0;}.buttons.jsx-2312332707 .event.jsx-2312332707:last-child{margin:1rem 0 0 0;}.buttons.jsx-2312332707:hover{cursor:pointer;}.buttons.jsx-2312332707 .event.jsx-2312332707{width:100%;border:2px solid #fff;text-align:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:#f69d1a;-webkit-transition:background ease .5s;transition:background ease .5s;margin:1rem;}.buttons.jsx-2312332707 .event.jsx-2312332707:hover{background:#fff;}.buttons.jsx-2312332707 .event.jsx-2312332707 p.jsx-2312332707{color:#333;}.buttons.jsx-2312332707 .icon.jsx-2312332707{top:0px;}@media only screen and (min-width:700px){.buttons.jsx-2312332707{-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.buttons.jsx-2312332707 .event.jsx-2312332707:first-child,.buttons.jsx-2312332707 .event.jsx-2312332707:last-child{margin:0;padding:0 1rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW0uZGF2aXMtY2FzdHJvL0Rlc2t0b3AvYmVsbGZsb3dlci1zaXRlLW5leHRqcy9wYWdlcy9jYWxlbmRhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpR29DLEFBRzBDLEFBS0csQUFHRixBQUtELEFBS0ksQUFHRCxBQUdBLEFBR0MsQUFHRCxBQUdILEFBTUssQUFHQSxBQUlILEFBR0osQUFZSyxBQUdMLEFBR0gsQUFJZSxBQUlWLFFBUGpCLENBUXVCLEVBMUJHLEFBZTFCLEVBaEVrQixDQVFJLENBc0N0QixDQXpDQSxBQWdCQSxBQUdBLEFBTUEsQUErQkEsQ0EzQ0EsQUFTQSxDQVlBLEFBR0EsTUFrQ0ksR0EzRWdCLEtBUVIsQ0F5Q1UsT0F4Q3RCLEdBUkEsUUFpRGlCLGtCQW9Cb0IsS0ExRFosQUFvQkUsbURBbUJBLGdEQWxCVCxFQXBCSCxXQUNmLENBb0IwQixLQXFDdEIsZ0NBbkJtQix5Q0FqQnZCLG9EQWtCdUIsbUJBQ1ksc0VBQ25CLFlBQ2hCIiwiZmlsZSI6Ii9Vc2Vycy9zYW0uZGF2aXMtY2FzdHJvL0Rlc2t0b3AvYmVsbGZsb3dlci1zaXRlLW5leHRqcy9wYWdlcy9jYWxlbmRhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdHlsZUJhc2UgZnJvbSAnLi4vY29tcG9uZW50cy9TdHlsZUJhc2UnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgTnVtYmVyT2ZFdmVudHMgZnJvbSAnLi4vY29tcG9uZW50cy9OdW1iZXJPZkV2ZW50cyc7XG5jbGFzcyBDYWxlbmRhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGUgPSB7XG4gICAgICAgIGNhbGVuZGFyRXZlbnRzOiBbXSxcbiAgICAgICAgZmV0Y2hFcnJvcjogZmFsc2VcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgbGV0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGxldCBzdGFydE9mVG9kYXkgPSBuZXcgRGF0ZShub3cuZ2V0RnVsbFllYXIoKSwgbm93LmdldE1vbnRoKCksIG5vdy5nZXREYXRlKCksIDAsIDAsIDApO1xuICAgICAgICBsZXQgZW5kT2ZEYXlPbmVNb250aE91dCA9IG5ldyBEYXRlKG5vdy5nZXRGdWxsWWVhcigpLCBub3cuZ2V0TW9udGgoKSArIDEsIG5vdy5nZXREYXRlKCksIDIzLCA1OSwgNTkpO1xuICAgICAgICBheGlvcy5nZXQoJ2h0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2NhbGVuZGFyL3YzL2NhbGVuZGFycy90aGViZWxsZmxvd2VyYmFuZCU0MGdtYWlsLmNvbS9ldmVudHM/a2V5PUFJemFTeUE3M2V6TkJ1RVBRU1NqTWdvTWpmaUZhNXd3VDFUSmh0OCcpXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBhbGxFdmVudHMgPSByZXMuZGF0YS5pdGVtcztcbiAgICAgICAgICAgICAgICBhbGxFdmVudHMgPSBhbGxFdmVudHMuc29ydCgoYSwgYikgPT4gKERhdGUucGFyc2UoYS5zdGFydC5kYXRlVGltZS50b1N0cmluZygpKSA+IERhdGUucGFyc2UoYi5zdGFydC5kYXRlVGltZS50b1N0cmluZygpKSA/IDE6IC0xKSk7XG4gICAgICAgICAgICAgICAgbGV0IGZ1dHVyZUV2ZW50cyA9IFtdO1xuICAgICAgICAgICAgICAgIGFsbEV2ZW50cy5tYXAoKGNhbEV2ZW50LCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBldmVudFRpbWUgPSBuZXcgRGF0ZShjYWxFdmVudC5zdGFydC5kYXRlVGltZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChldmVudFRpbWUgPiBzdGFydE9mVG9kYXkgJiYgZXZlbnRUaW1lIDwgZW5kT2ZEYXlPbmVNb250aE91dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZnV0dXJlRXZlbnRzLnB1c2goY2FsRXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNhbGVuZGFyRXZlbnRzOiBmdXR1cmVFdmVudHMgfSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZmV0Y2hFcnJvcjogdHJ1ZX0pO1xuICAgICAgICAgICAgfSlcbiAgICB9XG5cbiAgICBkYXRlKHV0Y0RhdGUsIHR5cGUpIHtcbiAgICAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSh1dGNEYXRlKTtcbiAgICAgICAgY29uc3QgZGF5cyA9IFsnU3VuJywgJ01vbicsICdUdWUnLCAnV2VkJywgJ1RodScsICdGcmknLCAnU2F0JyBdO1xuICAgICAgICBjb25zdCBtb250aHMgPSBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZXJtYmVyJywgJ0RlY2VtYmVyJ107XG4gICAgICAgIGNvbnN0IGRhdGVNYWtlciA9IHtcbiAgICAgICAgICAgIGdldCBkYXkoKSB7cmV0dXJuIGRheXNbZGF0ZS5nZXREYXkoKV19LFxuICAgICAgICAgICAgZ2V0IGRheU51bSgpIHtyZXR1cm4gZGF0ZS5nZXREYXRlKCl9LFxuICAgICAgICAgICAgZ2V0IG1vbnRoKCkge3JldHVybiBtb250aHNbZGF0ZS5nZXRNb250aCgpXX0sXG4gICAgICAgICAgICBnZXQgeWVhcigpIHtyZXR1cm4gZGF0ZS5nZXRGdWxsWWVhcigpfSxcbiAgICAgICAgICAgIGdldCBob3VyKCkge3JldHVybiBkYXRlLmdldEhvdXJzKCl9LFxuICAgICAgICAgICAgZ2V0IG1pbnV0ZSgpIHtyZXR1cm4gZGF0ZS5nZXRNaW51dGVzKCl9LFxuICAgICAgICAgICAgZ2V0IGxvY2FsVGltZSgpIHtyZXR1cm4gZGF0ZS50b0xvY2FsZVRpbWVTdHJpbmcoKS5zbGljZSgwLCAtNikuY29uY2F0KGRhdGUudG9Mb2NhbGVUaW1lU3RyaW5nKCkuc2xpY2UoLTMpKTt9XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGZvcm1hdHRlZERhdGU7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnZGF5JzpcbiAgICAgICAgICAgICAgICBmb3JtYXR0ZWREYXRlID0gZGF0ZU1ha2VyLmRheTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2RheU51bSc6XG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkRGF0ZSA9IGRhdGVNYWtlci5kYXlOdW07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdtb250aCc6XG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkRGF0ZSA9IGRhdGVNYWtlci5tb250aDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3llYXInOlxuICAgICAgICAgICAgICAgIGZvcm1hdHRlZERhdGUgPSBkYXRlTWFrZXIueWVhcjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2hvdXInOlxuICAgICAgICAgICAgICAgIGZvcm1hdHRlZERhdGUgPSBkYXRlTWFrZXIuaG91cjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ21pbnV0ZSc6XG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkRGF0ZSA9IGRhdGVNYWtlci5taW51dGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdsb2NhbFRpbWUnOlxuICAgICAgICAgICAgICAgIGZvcm1hdHRlZERhdGUgPSBkYXRlTWFrZXIubG9jYWxUaW1lO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmb3JtYXR0ZWREYXRlO1xuICAgIH1cbiAgICBmb3JtYXRNYXBzVXJsKGFkZHJlc3MpIHtcbiAgICAgICAgbGV0IGZpcnN0UGFydCA9ICdodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvc2VhcmNoLz9hcGk9MSZxdWVyeT0nO1xuICAgICAgICBsZXQgc2Vjb25kUGFydCA9IGVuY29kZVVSSUNvbXBvbmVudChhZGRyZXNzKTtcbiAgICAgICAgcmV0dXJuIGZpcnN0UGFydCtzZWNvbmRQYXJ0O1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgZXZlbnRzTGlzdCA9IChcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuY2FsZW5kYXJFdmVudHMubWFwKChjYWxFdmVudCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAgPGRpdiBjbGFzc05hbWU9XCJldmVudENhcmRcIiBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57Y2FsRXZlbnQuc3VtbWFyeX08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsc0NvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXZlbnRcIj48aW1nIGNsYXNzTmFtZT1cImljb25cIiBzcmM9e3JlcXVpcmUoJy4uL3B1YmxpYy90aW1lLWljb24tMDEuc3ZnJyl9IC8+PHAgY2xhc3NOYW1lPVwidGltZVwiPnt0aGlzLmRhdGUoY2FsRXZlbnQuc3RhcnQuZGF0ZVRpbWUsICdkYXknKX0sIHt0aGlzLmRhdGUoY2FsRXZlbnQuc3RhcnQuZGF0ZVRpbWUsICdtb250aCcpfSB7dGhpcy5kYXRlKGNhbEV2ZW50LnN0YXJ0LmRhdGVUaW1lLCAnZGF5TnVtJyl9ICB7dGhpcy5kYXRlKGNhbEV2ZW50LnN0YXJ0LmRhdGVUaW1lLCAnbG9jYWxUaW1lJyl9IC0ge3RoaXMuZGF0ZShjYWxFdmVudC5lbmQuZGF0ZVRpbWUsICdsb2NhbFRpbWUnKX08L3A+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV2ZW50XCI+PGltZyBjbGFzc05hbWU9XCJpY29uXCIgc3JjPXtyZXF1aXJlKCcuLi9wdWJsaWMvcGluLWljb24tMDEuc3ZnJyl9IC8+PHAgY2xhc3NOYW1lPVwicGluXCI+e2NhbEV2ZW50LmxvY2F0aW9ufTwvcD48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXZlbnRcIj48aW1nIGNsYXNzTmFtZT1cImljb25cIiBzcmM9e3JlcXVpcmUoJy4uL3B1YmxpYy9kZXNjcmlwdGlvbi1pY29uLTAxLnN2ZycpfSAvPjxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+e2NhbEV2ZW50LmRlc2NyaXB0aW9ufTwvcD48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImRpcmVjdGlvbnNcIiBhbHQ9XCJkaXJlY3Rpb25zIGxpbmtcIiBocmVmPXt0aGlzLmZvcm1hdE1hcHNVcmwoY2FsRXZlbnQubG9jYXRpb24pfT48ZGl2IGNsYXNzTmFtZT1cImV2ZW50XCI+PGltZyBjbGFzc05hbWU9XCJpY29uXCIgc3JjPXtyZXF1aXJlKCcuLi9wdWJsaWMvbmF2aWdhdGUtaWNvbi0wMS5zdmcnKX0gLz48cCBjbGFzc05hbWU9XCJuYXZpZ2F0ZVwiPk5hdmlnYXRlPC9wPjwvZGl2PjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJvcGVuSW5DYWxlbmRhclwiIGhyZWY9e2NhbEV2ZW50Lmh0bWxMaW5rfT48ZGl2IGNsYXNzTmFtZT1cImV2ZW50XCI+PGltZyBjbGFzc05hbWU9XCJpY29uXCIgc3JjPXtyZXF1aXJlKCcuLi9wdWJsaWMvY2FsZW5kYXItaWNvbi0wMS5zdmcnKX0gLz48cCBjbGFzc05hbWU9XCJjYWxlbmRhclwiPkNhbGVuZGFyPC9wPjwvZGl2PjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAgICAgICAgIC5ldmVudENhcmQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAycmVtIDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5ldmVudENhcmQ6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5pY29uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEuNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuZXZlbnQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRpbWUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAucGluIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDlweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2FsZW5kYXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLm5hdmlnYXRlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogOXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLmJ1dHRvbnMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxcmVtIDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5idXR0b25zIC5ldmVudDpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgMXJlbSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLmJ1dHRvbnMgLmV2ZW50Omxhc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMXJlbSAwIDAgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgLmJ1dHRvbnM6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5idXR0b25zIC5ldmVudCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmNjlkMWE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCBlYXNlIC41cztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDFyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5idXR0b25zIC5ldmVudDpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5idXR0b25zIC5ldmVudCBwIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5idXR0b25zIC5pY29uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3MDBweCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5idXR0b25zIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5idXR0b25zIC5ldmVudDpmaXJzdC1jaGlsZCwgLmJ1dHRvbnMgLmV2ZW50Omxhc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxTdHlsZUJhc2U+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjYWxlbmRhclBhZ2VDb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhbGVuZGFyUGFnZVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm51bU9mRXZlbnRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPHAgY2xhc3NOYW1lPVwidGl0bGVcIj5UaGVyZSBhcmUge3RoaXMuc3RhdGUuY2FsZW5kYXJFdmVudHMubGVuZ3RofSB1cGNvbWluZyBldmVudHMgdGhpcyBtb250aC48L3A+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgPE51bWJlck9mRXZlbnRzIGV2ZW50cz17dGhpcy5zdGF0ZS5jYWxlbmRhckV2ZW50cy5sZW5ndGh9IGVycm9yPXt0aGlzLnN0YXRlLmZldGNoRXJyb3J9Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJldmVudExpc3RDb250YWluZXJcIj57ZXZlbnRzTGlzdH08L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgIDwvU3R5bGVCYXNlPlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYWxlbmRhcjsiXX0= */\n/*@ sourceURL=/Users/sam.davis-castro/Desktop/bellflower-site-nextjs/pages/calendar.js */"));
    });
    return __jsx(_components_StyleBase__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184
      },
      __self: this
    }, __jsx("section", {
      className: "calendarPageContainer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185
      },
      __self: this
    }, __jsx("div", {
      className: "calendarPage",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186
      },
      __self: this
    }, __jsx("div", {
      className: "numOfEvents",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187
      },
      __self: this
    }, __jsx(_components_NumberOfEvents__WEBPACK_IMPORTED_MODULE_5__["default"], {
      events: this.state.calendarEvents.length,
      error: this.state.fetchError,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189
      },
      __self: this
    })), __jsx("div", {
      className: "eventListContainer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191
      },
      __self: this
    }, eventsList))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Calendar);

/***/ }),

/***/ "./public/calendar-icon-01.svg":
/*!*************************************!*\
  !*** ./public/calendar-icon-01.svg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuNiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAyOC4zNSAyOC4zNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjguMzUgMjguMzU7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojMzMzMzMzO30KPC9zdHlsZT4KPGc+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMS4yMiwzLjU0djI0LjUzaDI1LjlWMy41NEgxLjIyeiBNMjYuMTMsMjYuODRIMi4yMVY4Ljc3aDIzLjkyVjI2Ljg0eiIvPgoJPHJlY3QgeD0iMTkuMTMiIHk9IjAuMjgiIGNsYXNzPSJzdDAiIHdpZHRoPSIzLjM3IiBoZWlnaHQ9IjYuNzEiLz4KCTxyZWN0IHg9IjUuODUiIHk9IjAuMjgiIGNsYXNzPSJzdDAiIHdpZHRoPSIzLjM3IiBoZWlnaHQ9IjYuNzEiLz4KPC9nPgo8L3N2Zz4K"

/***/ }),

/***/ "./public/description-icon-01.svg":
/*!****************************************!*\
  !*** ./public/description-icon-01.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuNiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAyOC4zNSAyOC4zNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjguMzUgMjguMzU7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojRkZGRkZGO30KPC9zdHlsZT4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTE5LjQ5LDBIMy41djI4LjM1aDIxLjM0VjUuMzVMMTkuNDksMHogTTIyLjY0LDIyLjM5SDUuN3YtMy40NmgxNi45NFYyMi4zOXogTTIyLjY0LDE1LjlINS43di0zLjQ2aDE2Ljk0VjE1LjkKCXogTTIyLjY0LDkuNDFINS43VjUuOTVoMTYuOTRWOS40MXoiLz4KPC9zdmc+Cg=="

/***/ }),

/***/ "./public/navigate-icon-01.svg":
/*!*************************************!*\
  !*** ./public/navigate-icon-01.svg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuNiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAyOC4zNSAyOC4zNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjguMzUgMjguMzU7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDpub25lO3N0cm9rZTojMzMzMzMzO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1taXRlcmxpbWl0OjEwO30KCS5zdDF7ZmlsbDojMzMzMzMzO30KPC9zdHlsZT4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTI2Ljk0LDE0Ljg4TDE0Ljg4LDI2Ljk0Yy0wLjM5LDAuMzktMS4wMywwLjM5LTEuNDEsMEwxLjQxLDE0Ljg4Yy0wLjM5LTAuMzktMC4zOS0xLjAzLDAtMS40MUwxMy40NywxLjQxCgljMC4zOS0wLjM5LDEuMDMtMC4zOSwxLjQxLDBsMTIuMDYsMTIuMDZDMjcuMzMsMTMuODYsMjcuMzMsMTQuNDksMjYuOTQsMTQuODh6Ii8+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xOS42MywxMy4wN2gtOS4yMWMtMC40MSwwLTAuNzUsMC4zMS0wLjc1LDAuNjh2NC45MiIvPgo8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjIyLjM4LDEzLjA3IDE1LjMxLDguOTkgMTUuMzEsMTcuMTUgIi8+Cjwvc3ZnPgo="

/***/ }),

/***/ "./public/pin-icon-01.svg":
/*!********************************!*\
  !*** ./public/pin-icon-01.svg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuNiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAyOC4zNSAyOC4zNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjguMzUgMjguMzU7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojRkZGRkZGO30KPC9zdHlsZT4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTIzLjYzLDkuNDVjMC01LjIyLTQuMjMtOS40NS05LjQ1LTkuNDVTNC43Miw0LjIzLDQuNzIsOS40NWMwLDEuNzgsMC41LDMuNDMsMS4zNSw0Ljg1bDguMTEsMTQuMDRsOC4xNS0xNC4xMQoJaC0wLjAxQzIzLjE0LDEyLjgzLDIzLjYzLDExLjIsMjMuNjMsOS40NXogTTE0LjE3LDE1Ljc0Yy0zLjUsMC02LjM0LTIuODQtNi4zNC02LjM0czIuODQtNi4zNCw2LjM0LTYuMzRjMy41LDAsNi4zNCwyLjg0LDYuMzQsNi4zNAoJUzE3LjY3LDE1Ljc0LDE0LjE3LDE1Ljc0eiIvPgo8L3N2Zz4K"

/***/ }),

/***/ "./public/time-icon-01.svg":
/*!*********************************!*\
  !*** ./public/time-icon-01.svg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuNiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAyOC4zNSAyOC4zNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjguMzUgMjguMzU7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojRkZGRkZGO30KCS5zdDF7ZmlsbDpub25lO3N0cm9rZTojRkZGRkZGO3N0cm9rZS13aWR0aDozO3N0cm9rZS1taXRlcmxpbWl0OjEwO30KPC9zdHlsZT4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTE0LjE3LDBDNi4zNSwwLDAsNi4zNSwwLDE0LjE3czYuMzUsMTQuMTcsMTQuMTcsMTQuMTdTMjguMzUsMjIsMjguMzUsMTQuMTdTMjIsMCwxNC4xNywweiBNMTQuMTcsMjUuNwoJYy02LjM3LDAtMTEuNTMtNS4xNi0xMS41My0xMS41M1M3LjgxLDIuNjUsMTQuMTcsMi42NWM2LjM3LDAsMTEuNTMsNS4xNiwxMS41MywxMS41M1MyMC41NCwyNS43LDE0LjE3LDI1Ljd6Ii8+Cjxwb2x5bGluZSBjbGFzcz0ic3QxIiBwb2ludHM9IjguOTksMjAuMDIgMTQuNTEsMTQuOTQgMTQuNTEsNC45MiAiLz4KPC9zdmc+Cg=="

/***/ }),

/***/ 7:
/*!*********************************!*\
  !*** multi ./pages/calendar.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/sam.davis-castro/Desktop/bellflower-site-nextjs/pages/calendar.js */"./pages/calendar.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

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
//# sourceMappingURL=calendar.js.map