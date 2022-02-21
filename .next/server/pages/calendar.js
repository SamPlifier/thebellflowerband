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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("B+Aq");


/***/ }),

/***/ "6j4y":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuNiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAyOC4zNSAyOC4zNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjguMzUgMjguMzU7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojRkZGRkZGO30KPC9zdHlsZT4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTIzLjYzLDkuNDVjMC01LjIyLTQuMjMtOS40NS05LjQ1LTkuNDVTNC43Miw0LjIzLDQuNzIsOS40NWMwLDEuNzgsMC41LDMuNDMsMS4zNSw0Ljg1bDguMTEsMTQuMDRsOC4xNS0xNC4xMQoJaC0wLjAxQzIzLjE0LDEyLjgzLDIzLjYzLDExLjIsMjMuNjMsOS40NXogTTE0LjE3LDE1Ljc0Yy0zLjUsMC02LjM0LTIuODQtNi4zNC02LjM0czIuODQtNi4zNCw2LjM0LTYuMzRjMy41LDAsNi4zNCwyLjg0LDYuMzQsNi4zNAoJUzE3LjY3LDE1Ljc0LDE0LjE3LDE1Ljc0eiIvPgo8L3N2Zz4K"

/***/ }),

/***/ "B+Aq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./components/StyleBase.js
var StyleBase = __webpack_require__("12V9");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./components/NumberOfEvents.js

var __jsx = external_react_default.a.createElement;

const NumberOfEvents = props => {
  const noError = () => {
    if (props.events === 1) {
      return __jsx("p", {
        className: "title"
      }, "There is ", props.events, " event in the next 30 days.");
    } else {
      return __jsx("p", {
        className: "title"
      }, "There are ", props.events, " events in the next 30 days.");
    }
  };

  const error = () => {
    return __jsx("p", {
      className: "title"
    }, "Sorry, calendar data could not be fetched. Refresh this page in a few seconds to try again.");
  };

  return props.error ? error() : noError();
};

/* harmony default export */ var components_NumberOfEvents = (NumberOfEvents);
// CONCATENATED MODULE: ./pages/calendar.js

var calendar_jsx = external_react_default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class calendar_Calendar extends external_react_default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      calendarEvents: [],
      fetchError: false
    });
  }

  componentDidMount() {
    let now = new Date();
    let startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0);
    let endOfDayOneMonthOut = new Date(now.getFullYear(), now.getMonth() + 1, now.getDate(), 23, 59, 59);
    external_axios_default.a.get('https://www.googleapis.com/calendar/v3/calendars/thebellflowerband%40gmail.com/events?key=AIzaSyA73ezNBuEPQSSjMgoMjfiFa5wwT1TJht8').then(res => {
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
      return calendar_jsx("div", {
        key: i,
        className: "jsx-3941916298" + " " + "eventCard"
      }, calendar_jsx("h3", {
        className: "jsx-3941916298"
      }, calEvent.summary), calendar_jsx("div", {
        className: "jsx-3941916298" + " " + "detailsContainer"
      }, calendar_jsx("div", {
        className: "jsx-3941916298" + " " + "details"
      }, calendar_jsx("div", {
        className: "jsx-3941916298" + " " + "event"
      }, calendar_jsx("img", {
        src: __webpack_require__("xqXz"),
        className: "jsx-3941916298" + " " + "icon"
      }), calendar_jsx("p", {
        className: "jsx-3941916298" + " " + "time"
      }, this.date(calEvent.start.dateTime, 'day'), ", ", this.date(calEvent.start.dateTime, 'month'), " ", this.date(calEvent.start.dateTime, 'dayNum'), "  ", this.date(calEvent.start.dateTime, 'localTime'), " - ", this.date(calEvent.end.dateTime, 'localTime'))), calendar_jsx("div", {
        className: "jsx-3941916298" + " " + "event"
      }, calendar_jsx("img", {
        src: __webpack_require__("6j4y"),
        className: "jsx-3941916298" + " " + "icon"
      }), calendar_jsx("p", {
        className: "jsx-3941916298" + " " + "pin"
      }, calEvent.location)), calendar_jsx("div", {
        className: "jsx-3941916298" + " " + "event"
      }, calendar_jsx("img", {
        src: __webpack_require__("kQWG"),
        className: "jsx-3941916298" + " " + "icon"
      }), calendar_jsx("p", {
        className: "jsx-3941916298" + " " + "description"
      }, calEvent.description)), calendar_jsx("div", {
        className: "jsx-3941916298" + " " + "buttons"
      }, calendar_jsx("a", {
        alt: "directions link",
        href: this.formatMapsUrl(calEvent.location),
        className: "jsx-3941916298" + " " + "directions"
      }, calendar_jsx("div", {
        className: "jsx-3941916298" + " " + "event"
      }, calendar_jsx("img", {
        src: __webpack_require__("prtL"),
        className: "jsx-3941916298" + " " + "icon"
      }), calendar_jsx("p", {
        className: "jsx-3941916298" + " " + "navigate"
      }, "Navigate"))), calendar_jsx("a", {
        alt: "view in google calendar",
        href: calEvent.htmlLink,
        className: "jsx-3941916298" + " " + "openInCalendar"
      }, calendar_jsx("div", {
        className: "jsx-3941916298" + " " + "event"
      }, calendar_jsx("img", {
        src: __webpack_require__("EQe2"),
        className: "jsx-3941916298" + " " + "icon"
      }), calendar_jsx("p", {
        className: "jsx-3941916298" + " " + "calendar"
      }, "Calendar")))))), calendar_jsx(style_default.a, {
        id: "3941916298"
      }, [".eventCard.jsx-3941916298{padding:1rem;margin:2rem 0;text-align:left;}", ".eventCard.jsx-3941916298:last-child{margin-bottom:0;}", ".icon.jsx-3941916298{height:1.5rem;position:relative;top:5px;}", ".event.jsx-3941916298{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:baseline;-webkit-box-align:baseline;-ms-flex-align:baseline;align-items:baseline;width:100%;word-break:break-word;}", ".time.jsx-3941916298{margin-left:10px;}", ".pin.jsx-3941916298{margin-left:6px;}", ".description.jsx-3941916298{margin-left:9px;}", ".calendar.jsx-3941916298{margin-left:10px;}", ".navigate.jsx-3941916298{margin-left:9px;}", ".buttons.jsx-3941916298{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin:1rem 0;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}", ".buttons.jsx-3941916298 .event.jsx-3941916298:first-child{margin:0 0 1rem 0;}", ".buttons.jsx-3941916298 .event.jsx-3941916298:last-child{margin:1rem 0 0 0;}", ".buttons.jsx-3941916298:hover{cursor:pointer;}", ".buttons.jsx-3941916298 .event.jsx-3941916298{width:100%;border:2px solid #fff;text-align:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:#f69d1a;-webkit-transition:background ease .5s;transition:background ease .5s;margin:1rem;}", ".buttons.jsx-3941916298 .event.jsx-3941916298:hover{background:#fff;}", ".buttons.jsx-3941916298 .event.jsx-3941916298 p.jsx-3941916298{color:#333;}", ".buttons.jsx-3941916298 .icon.jsx-3941916298{top:0px;}", "@media only screen and (min-width:700px){.buttons.jsx-3941916298{-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.buttons.jsx-3941916298 .event.jsx-3941916298:first-child,.buttons.jsx-3941916298 .event.jsx-3941916298:last-child{margin:0;padding:0 1rem;box-sizing:border-box;}.directions.jsx-3941916298,.openInCalendar.jsx-3941916298{width:calc(50% - 1rem);}}"]));
    });
    return calendar_jsx(StyleBase["a" /* default */], null, calendar_jsx(head_default.a, null, calendar_jsx("title", null, "Calendar")), calendar_jsx("section", {
      className: "calendarPageContainer"
    }, calendar_jsx("div", {
      className: "calendarPage"
    }, calendar_jsx("div", {
      className: "numOfEvents"
    }, calendar_jsx(components_NumberOfEvents, {
      events: this.state.calendarEvents.length,
      error: this.state.fetchError
    })), calendar_jsx("div", {
      className: "eventListContainer"
    }, eventsList))));
  }

}

/* harmony default export */ var calendar = __webpack_exports__["default"] = (calendar_Calendar);

/***/ }),

/***/ "EQe2":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuNiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAyOC4zNSAyOC4zNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjguMzUgMjguMzU7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojMzMzMzMzO30KPC9zdHlsZT4KPGc+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMS4yMiwzLjU0djI0LjUzaDI1LjlWMy41NEgxLjIyeiBNMjYuMTMsMjYuODRIMi4yMVY4Ljc3aDIzLjkyVjI2Ljg0eiIvPgoJPHJlY3QgeD0iMTkuMTMiIHk9IjAuMjgiIGNsYXNzPSJzdDAiIHdpZHRoPSIzLjM3IiBoZWlnaHQ9IjYuNzEiLz4KCTxyZWN0IHg9IjUuODUiIHk9IjAuMjgiIGNsYXNzPSJzdDAiIHdpZHRoPSIzLjM3IiBoZWlnaHQ9IjYuNzEiLz4KPC9nPgo8L3N2Zz4K"

/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "kQWG":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuNiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAyOC4zNSAyOC4zNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjguMzUgMjguMzU7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojRkZGRkZGO30KPC9zdHlsZT4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTE5LjQ5LDBIMy41djI4LjM1aDIxLjM0VjUuMzVMMTkuNDksMHogTTIyLjY0LDIyLjM5SDUuN3YtMy40NmgxNi45NFYyMi4zOXogTTIyLjY0LDE1LjlINS43di0zLjQ2aDE2Ljk0VjE1LjkKCXogTTIyLjY0LDkuNDFINS43VjUuOTVoMTYuOTRWOS40MXoiLz4KPC9zdmc+Cg=="

/***/ }),

/***/ "prtL":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuNiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAyOC4zNSAyOC4zNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjguMzUgMjguMzU7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDpub25lO3N0cm9rZTojMzMzMzMzO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1taXRlcmxpbWl0OjEwO30KCS5zdDF7ZmlsbDojMzMzMzMzO30KPC9zdHlsZT4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTI2Ljk0LDE0Ljg4TDE0Ljg4LDI2Ljk0Yy0wLjM5LDAuMzktMS4wMywwLjM5LTEuNDEsMEwxLjQxLDE0Ljg4Yy0wLjM5LTAuMzktMC4zOS0xLjAzLDAtMS40MUwxMy40NywxLjQxCgljMC4zOS0wLjM5LDEuMDMtMC4zOSwxLjQxLDBsMTIuMDYsMTIuMDZDMjcuMzMsMTMuODYsMjcuMzMsMTQuNDksMjYuOTQsMTQuODh6Ii8+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xOS42MywxMy4wN2gtOS4yMWMtMC40MSwwLTAuNzUsMC4zMS0wLjc1LDAuNjh2NC45MiIvPgo8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjIyLjM4LDEzLjA3IDE1LjMxLDguOTkgMTUuMzEsMTcuMTUgIi8+Cjwvc3ZnPgo="

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "xqXz":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuNiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAyOC4zNSAyOC4zNSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjguMzUgMjguMzU7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojRkZGRkZGO30KCS5zdDF7ZmlsbDpub25lO3N0cm9rZTojRkZGRkZGO3N0cm9rZS13aWR0aDozO3N0cm9rZS1taXRlcmxpbWl0OjEwO30KPC9zdHlsZT4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTE0LjE3LDBDNi4zNSwwLDAsNi4zNSwwLDE0LjE3czYuMzUsMTQuMTcsMTQuMTcsMTQuMTdTMjguMzUsMjIsMjguMzUsMTQuMTdTMjIsMCwxNC4xNywweiBNMTQuMTcsMjUuNwoJYy02LjM3LDAtMTEuNTMtNS4xNi0xMS41My0xMS41M1M3LjgxLDIuNjUsMTQuMTcsMi42NWM2LjM3LDAsMTEuNTMsNS4xNiwxMS41MywxMS41M1MyMC41NCwyNS43LDE0LjE3LDI1Ljd6Ii8+Cjxwb2x5bGluZSBjbGFzcz0ic3QxIiBwb2ludHM9IjguOTksMjAuMDIgMTQuNTEsMTQuOTQgMTQuNTEsNC45MiAiLz4KPC9zdmc+Cg=="

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });