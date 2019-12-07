webpackHotUpdate("static/development/pages/calendar.js",{

/***/ "./pages/calendar.js":
/*!***************************!*\
  !*** ./pages/calendar.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_StyleBase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/StyleBase */ "./components/StyleBase.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_NumberOfEvents__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/NumberOfEvents */ "./components/NumberOfEvents.js");







var _jsxFileName = "/Users/sam.davis-castro/Desktop/bellflower-site-nextjs/pages/calendar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;





var Calendar =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Calendar, _React$Component);

  function Calendar() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Calendar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Calendar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      calendarEvents: [],
      fetchError: false
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Calendar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var now = new Date();
      var startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0);
      var endOfDayOneMonthOut = new Date(now.getFullYear(), now.getMonth() + 1, now.getDate(), 23, 59, 59);
      axios__WEBPACK_IMPORTED_MODULE_10___default.a.get('https://www.googleapis.com/calendar/v3/calendars/thebellflowerband%40gmail.com/events?key=AIzaSyA73ezNBuEPQSSjMgoMjfiFa5wwT1TJht8').then(function (res) {
        var allEvents = res.data.items;
        allEvents = allEvents.sort(function (a, b) {
          return Date.parse(a.start.dateTime.toString()) > Date.parse(b.start.dateTime.toString()) ? 1 : -1;
        });
        var futureEvents = [];
        allEvents.map(function (calEvent, i) {
          var eventTime = new Date(calEvent.start.dateTime);

          if (eventTime > startOfToday && eventTime < endOfDayOneMonthOut) {
            futureEvents.push(calEvent);
          }

          return true;
        });

        _this2.setState({
          calendarEvents: futureEvents
        });
      })["catch"](function (err) {
        _this2.setState({
          fetchError: true
        });
      });
    }
  }, {
    key: "date",
    value: function date(utcDate, type) {
      var date = new Date(utcDate);
      var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'Novermber', 'December'];
      var dateMaker = {
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
      var formattedDate;

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
  }, {
    key: "formatMapsUrl",
    value: function formatMapsUrl(address) {
      var firstPart = 'https://www.google.com/maps/search/?api=1&query=';
      var secondPart = encodeURIComponent(address);
      return firstPart + secondPart;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var eventsList = this.state.calendarEvents.map(function (calEvent, i) {
        return __jsx("div", {
          key: i,
          className: "jsx-2134572381" + " " + "eventCard",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          },
          __self: this
        }, __jsx("h3", {
          className: "jsx-2134572381",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          },
          __self: this
        }, calEvent.summary), __jsx("div", {
          className: "jsx-2134572381" + " " + "detailsContainer",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          },
          __self: this
        }, __jsx("div", {
          className: "jsx-2134572381" + " " + "details",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          },
          __self: this
        }, __jsx("div", {
          className: "jsx-2134572381" + " " + "event",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          },
          __self: this
        }, __jsx("img", {
          src: __webpack_require__(/*! ../public/time-icon-01.svg */ "./public/time-icon-01.svg"),
          className: "jsx-2134572381" + " " + "icon",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          },
          __self: this
        }), __jsx("p", {
          className: "jsx-2134572381" + " " + "time",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          },
          __self: this
        }, _this3.date(calEvent.start.dateTime, 'day'), ", ", _this3.date(calEvent.start.dateTime, 'month'), " ", _this3.date(calEvent.start.dateTime, 'dayNum'), "  ", _this3.date(calEvent.start.dateTime, 'localTime'), " - ", _this3.date(calEvent.end.dateTime, 'localTime'))), __jsx("div", {
          className: "jsx-2134572381" + " " + "event",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          },
          __self: this
        }, __jsx("img", {
          src: __webpack_require__(/*! ../public/pin-icon-01.svg */ "./public/pin-icon-01.svg"),
          className: "jsx-2134572381" + " " + "icon",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          },
          __self: this
        }), __jsx("p", {
          className: "jsx-2134572381" + " " + "pin",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          },
          __self: this
        }, calEvent.location)), __jsx("div", {
          className: "jsx-2134572381" + " " + "event",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          },
          __self: this
        }, __jsx("img", {
          src: __webpack_require__(/*! ../public/description-icon-01.svg */ "./public/description-icon-01.svg"),
          className: "jsx-2134572381" + " " + "icon",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          },
          __self: this
        }), __jsx("p", {
          className: "jsx-2134572381" + " " + "description",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          },
          __self: this
        }, calEvent.description)), __jsx("div", {
          className: "jsx-2134572381" + " " + "buttons",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92
          },
          __self: this
        }, __jsx("div", {
          className: "jsx-2134572381" + " " + "event",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          },
          __self: this
        }, __jsx("img", {
          src: __webpack_require__(/*! ../public/navigate-icon-01.svg */ "./public/navigate-icon-01.svg"),
          className: "jsx-2134572381" + " " + "icon",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          },
          __self: this
        }), __jsx("p", {
          className: "jsx-2134572381" + " " + "navigate",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          },
          __self: this
        }, __jsx("a", {
          alt: "directions link",
          href: _this3.formatMapsUrl(calEvent.location),
          className: "jsx-2134572381" + " " + "directions",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          },
          __self: this
        }, "Navigate"))), __jsx("div", {
          className: "jsx-2134572381" + " " + "event",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          },
          __self: this
        }, __jsx("img", {
          src: __webpack_require__(/*! ../public/calendar-icon-01.svg */ "./public/calendar-icon-01.svg"),
          className: "jsx-2134572381" + " " + "icon",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          },
          __self: this
        }), __jsx("p", {
          className: "jsx-2134572381" + " " + "calendar",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          },
          __self: this
        }, __jsx("a", {
          href: calEvent.htmlLink,
          className: "jsx-2134572381" + " " + "openInCalendar",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          },
          __self: this
        }, "Calendar")))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
          id: "2134572381",
          __self: this
        }, ".eventCard.jsx-2134572381{padding:1rem;margin:2rem 0;text-align:left;}.eventCard.jsx-2134572381:last-child{margin-bottom:0;}.icon.jsx-2134572381{height:1.2rem;position:relative;top:3px;}.event.jsx-2134572381{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:baseline;-webkit-box-align:baseline;-ms-flex-align:baseline;align-items:baseline;}.time.jsx-2134572381{margin-left:10px;}.pin.jsx-2134572381{margin-left:6px;}.description.jsx-2134572381{margin-left:9px;}.calendar.jsx-2134572381{margin-left:10px;}.navigate.jsx-2134572381{margin-left:9px;}.buttons.jsx-2134572381{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin:1rem 0;}.event.jsx-2134572381{width:100%;}.buttons.jsx-2134572381{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.buttons.jsx-2134572381 .event.jsx-2134572381:first-child{margin:0 0 1rem 0;}.buttons.jsx-2134572381 .event.jsx-2134572381:last-child{margin:1rem 0 0 0;}.buttons.jsx-2134572381:hover{cursor:pointer;}.buttons.jsx-2134572381 .event.jsx-2134572381{width:100%;border:2px solid #fff;text-align:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:#f69d1a;-webkit-transition:background ease .5s;transition:background ease .5s;}.buttons.jsx-2134572381 .event.jsx-2134572381:hover{background:#fff;}.buttons.jsx-2134572381 .event.jsx-2134572381 .navigate.jsx-2134572381 .directions.jsx-2134572381,.buttons.jsx-2134572381 .event.jsx-2134572381 .calendar.jsx-2134572381 .openInCalendar.jsx-2134572381{color:#333;}.buttons.jsx-2134572381 .icon.jsx-2134572381{top:0px;}@media screen only and (min-width:700px){.buttons.jsx-2134572381 .event.jsx-2134572381:first-child{margin:0 1rem 0 0;}.buttons.jsx-2134572381 .event.jsx-2134572381:last-child{margin:0 0 0 1rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW0uZGF2aXMtY2FzdHJvL0Rlc2t0b3AvYmVsbGZsb3dlci1zaXRlLW5leHRqcy9wYWdlcy9jYWxlbmRhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpR29DLEFBRzBDLEFBS0csQUFHRixBQUtELEFBSUksQUFHRCxBQUdBLEFBR0MsQUFHRCxBQUdILEFBS0YsQUFHVyxBQUdKLEFBR0EsQUFJSCxBQUdKLEFBV0ssQUFHTCxBQUdILEFBd0JjLEFBR0EsUUExQjFCLEdBakNBLEFBZ0IwQixBQWMxQixFQW5Fa0IsQ0FRSSxDQTBDdEIsQ0E3Q0EsQUFlQSxBQUdBLEFBTUEsQUFtQ0EsQ0EvQ0EsQUFTQSxDQWlCQSxBQUdBLEFBZ0RJLEFBR0EsU0FoR2dCLEtBUVIsQ0E2Q1UsT0E1Q3RCLEdBUkEsUUFxRGlCLHVCQTFDUSxBQW1CRSxJQVEzQiwrQ0FnQjJCLGdEQXZCVCxFQW5CbEIsWUFvQkEscUNBdUJ1Qiw2RkFDQSxtQkFDWSxzRUFDbkMiLCJmaWxlIjoiL1VzZXJzL3NhbS5kYXZpcy1jYXN0cm8vRGVza3RvcC9iZWxsZmxvd2VyLXNpdGUtbmV4dGpzL3BhZ2VzL2NhbGVuZGFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN0eWxlQmFzZSBmcm9tICcuLi9jb21wb25lbnRzL1N0eWxlQmFzZSc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBOdW1iZXJPZkV2ZW50cyBmcm9tICcuLi9jb21wb25lbnRzL051bWJlck9mRXZlbnRzJztcbmNsYXNzIENhbGVuZGFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgY2FsZW5kYXJFdmVudHM6IFtdLFxuICAgICAgICBmZXRjaEVycm9yOiBmYWxzZVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBsZXQgbm93ID0gbmV3IERhdGUoKTtcbiAgICAgICAgbGV0IHN0YXJ0T2ZUb2RheSA9IG5ldyBEYXRlKG5vdy5nZXRGdWxsWWVhcigpLCBub3cuZ2V0TW9udGgoKSwgbm93LmdldERhdGUoKSwgMCwgMCwgMCk7XG4gICAgICAgIGxldCBlbmRPZkRheU9uZU1vbnRoT3V0ID0gbmV3IERhdGUobm93LmdldEZ1bGxZZWFyKCksIG5vdy5nZXRNb250aCgpICsgMSwgbm93LmdldERhdGUoKSwgMjMsIDU5LCA1OSk7XG4gICAgICAgIGF4aW9zLmdldCgnaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vY2FsZW5kYXIvdjMvY2FsZW5kYXJzL3RoZWJlbGxmbG93ZXJiYW5kJTQwZ21haWwuY29tL2V2ZW50cz9rZXk9QUl6YVN5QTczZXpOQnVFUFFTU2pNZ29NamZpRmE1d3dUMVRKaHQ4JylcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGFsbEV2ZW50cyA9IHJlcy5kYXRhLml0ZW1zO1xuICAgICAgICAgICAgICAgIGFsbEV2ZW50cyA9IGFsbEV2ZW50cy5zb3J0KChhLCBiKSA9PiAoRGF0ZS5wYXJzZShhLnN0YXJ0LmRhdGVUaW1lLnRvU3RyaW5nKCkpID4gRGF0ZS5wYXJzZShiLnN0YXJ0LmRhdGVUaW1lLnRvU3RyaW5nKCkpID8gMTogLTEpKTtcbiAgICAgICAgICAgICAgICBsZXQgZnV0dXJlRXZlbnRzID0gW107XG4gICAgICAgICAgICAgICAgYWxsRXZlbnRzLm1hcCgoY2FsRXZlbnQsIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGV2ZW50VGltZSA9IG5ldyBEYXRlKGNhbEV2ZW50LnN0YXJ0LmRhdGVUaW1lKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50VGltZSA+IHN0YXJ0T2ZUb2RheSAmJiBldmVudFRpbWUgPCBlbmRPZkRheU9uZU1vbnRoT3V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmdXR1cmVFdmVudHMucHVzaChjYWxFdmVudCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY2FsZW5kYXJFdmVudHM6IGZ1dHVyZUV2ZW50cyB9KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtmZXRjaEVycm9yOiB0cnVlfSk7XG4gICAgICAgICAgICB9KVxuICAgIH1cblxuICAgIGRhdGUodXRjRGF0ZSwgdHlwZSkge1xuICAgICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKHV0Y0RhdGUpO1xuICAgICAgICBjb25zdCBkYXlzID0gWydTdW4nLCAnTW9uJywgJ1R1ZScsICdXZWQnLCAnVGh1JywgJ0ZyaScsICdTYXQnIF07XG4gICAgICAgIGNvbnN0IG1vbnRocyA9IFsnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3Zlcm1iZXInLCAnRGVjZW1iZXInXTtcbiAgICAgICAgY29uc3QgZGF0ZU1ha2VyID0ge1xuICAgICAgICAgICAgZ2V0IGRheSgpIHtyZXR1cm4gZGF5c1tkYXRlLmdldERheSgpXX0sXG4gICAgICAgICAgICBnZXQgZGF5TnVtKCkge3JldHVybiBkYXRlLmdldERhdGUoKX0sXG4gICAgICAgICAgICBnZXQgbW9udGgoKSB7cmV0dXJuIG1vbnRoc1tkYXRlLmdldE1vbnRoKCldfSxcbiAgICAgICAgICAgIGdldCB5ZWFyKCkge3JldHVybiBkYXRlLmdldEZ1bGxZZWFyKCl9LFxuICAgICAgICAgICAgZ2V0IGhvdXIoKSB7cmV0dXJuIGRhdGUuZ2V0SG91cnMoKX0sXG4gICAgICAgICAgICBnZXQgbWludXRlKCkge3JldHVybiBkYXRlLmdldE1pbnV0ZXMoKX0sXG4gICAgICAgICAgICBnZXQgbG9jYWxUaW1lKCkge3JldHVybiBkYXRlLnRvTG9jYWxlVGltZVN0cmluZygpLnNsaWNlKDAsIC02KS5jb25jYXQoZGF0ZS50b0xvY2FsZVRpbWVTdHJpbmcoKS5zbGljZSgtMykpO31cbiAgICAgICAgfVxuICAgICAgICBsZXQgZm9ybWF0dGVkRGF0ZTtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlICdkYXknOlxuICAgICAgICAgICAgICAgIGZvcm1hdHRlZERhdGUgPSBkYXRlTWFrZXIuZGF5O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZGF5TnVtJzpcbiAgICAgICAgICAgICAgICBmb3JtYXR0ZWREYXRlID0gZGF0ZU1ha2VyLmRheU51bTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ21vbnRoJzpcbiAgICAgICAgICAgICAgICBmb3JtYXR0ZWREYXRlID0gZGF0ZU1ha2VyLm1vbnRoO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAneWVhcic6XG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkRGF0ZSA9IGRhdGVNYWtlci55ZWFyO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnaG91cic6XG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkRGF0ZSA9IGRhdGVNYWtlci5ob3VyO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbWludXRlJzpcbiAgICAgICAgICAgICAgICBmb3JtYXR0ZWREYXRlID0gZGF0ZU1ha2VyLm1pbnV0ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2xvY2FsVGltZSc6XG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkRGF0ZSA9IGRhdGVNYWtlci5sb2NhbFRpbWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZvcm1hdHRlZERhdGU7XG4gICAgfVxuICAgIGZvcm1hdE1hcHNVcmwoYWRkcmVzcykge1xuICAgICAgICBsZXQgZmlyc3RQYXJ0ID0gJ2h0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9zZWFyY2gvP2FwaT0xJnF1ZXJ5PSc7XG4gICAgICAgIGxldCBzZWNvbmRQYXJ0ID0gZW5jb2RlVVJJQ29tcG9uZW50KGFkZHJlc3MpO1xuICAgICAgICByZXR1cm4gZmlyc3RQYXJ0K3NlY29uZFBhcnQ7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBldmVudHNMaXN0ID0gKFxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5jYWxlbmRhckV2ZW50cy5tYXAoKGNhbEV2ZW50LCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICA8ZGl2IGNsYXNzTmFtZT1cImV2ZW50Q2FyZFwiIGtleT17aX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPntjYWxFdmVudC5zdW1tYXJ5fTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzQ29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJldmVudFwiPjxpbWcgY2xhc3NOYW1lPVwiaWNvblwiIHNyYz17cmVxdWlyZSgnLi4vcHVibGljL3RpbWUtaWNvbi0wMS5zdmcnKX0gLz48cCBjbGFzc05hbWU9XCJ0aW1lXCI+e3RoaXMuZGF0ZShjYWxFdmVudC5zdGFydC5kYXRlVGltZSwgJ2RheScpfSwge3RoaXMuZGF0ZShjYWxFdmVudC5zdGFydC5kYXRlVGltZSwgJ21vbnRoJyl9IHt0aGlzLmRhdGUoY2FsRXZlbnQuc3RhcnQuZGF0ZVRpbWUsICdkYXlOdW0nKX0gIHt0aGlzLmRhdGUoY2FsRXZlbnQuc3RhcnQuZGF0ZVRpbWUsICdsb2NhbFRpbWUnKX0gLSB7dGhpcy5kYXRlKGNhbEV2ZW50LmVuZC5kYXRlVGltZSwgJ2xvY2FsVGltZScpfTwvcD48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXZlbnRcIj48aW1nIGNsYXNzTmFtZT1cImljb25cIiBzcmM9e3JlcXVpcmUoJy4uL3B1YmxpYy9waW4taWNvbi0wMS5zdmcnKX0gLz48cCBjbGFzc05hbWU9XCJwaW5cIj57Y2FsRXZlbnQubG9jYXRpb259PC9wPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJldmVudFwiPjxpbWcgY2xhc3NOYW1lPVwiaWNvblwiIHNyYz17cmVxdWlyZSgnLi4vcHVibGljL2Rlc2NyaXB0aW9uLWljb24tMDEuc3ZnJyl9IC8+PHAgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj57Y2FsRXZlbnQuZGVzY3JpcHRpb259PC9wPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJldmVudFwiPjxpbWcgY2xhc3NOYW1lPVwiaWNvblwiIHNyYz17cmVxdWlyZSgnLi4vcHVibGljL25hdmlnYXRlLWljb24tMDEuc3ZnJyl9IC8+PHAgY2xhc3NOYW1lPVwibmF2aWdhdGVcIj48YSBjbGFzc05hbWU9XCJkaXJlY3Rpb25zXCIgYWx0PVwiZGlyZWN0aW9ucyBsaW5rXCIgaHJlZj17dGhpcy5mb3JtYXRNYXBzVXJsKGNhbEV2ZW50LmxvY2F0aW9uKX0+TmF2aWdhdGU8L2E+PC9wPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXZlbnRcIj48aW1nIGNsYXNzTmFtZT1cImljb25cIiBzcmM9e3JlcXVpcmUoJy4uL3B1YmxpYy9jYWxlbmRhci1pY29uLTAxLnN2ZycpfSAvPjxwIGNsYXNzTmFtZT1cImNhbGVuZGFyXCI+PGEgY2xhc3NOYW1lPVwib3BlbkluQ2FsZW5kYXJcIiBocmVmPXtjYWxFdmVudC5odG1sTGlua30+Q2FsZW5kYXI8L2E+PC9wPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICAgICAgICAgLmV2ZW50Q2FyZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDJyZW0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLmV2ZW50Q2FyZDpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLmljb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMS4ycmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDNweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5ldmVudCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAudGltZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIC5waW4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA2cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogOXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxlbmRhciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAubmF2aWdhdGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA5cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuYnV0dG9ucyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDFyZW0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5ldmVudCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuYnV0dG9ucyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5idXR0b25zIC5ldmVudDpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgMXJlbSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLmJ1dHRvbnMgLmV2ZW50Omxhc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMXJlbSAwIDAgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgLmJ1dHRvbnM6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5idXR0b25zIC5ldmVudCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmNjlkMWE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCBlYXNlIC41cztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLmJ1dHRvbnMgLmV2ZW50OmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLmJ1dHRvbnMgLmV2ZW50IC5uYXZpZ2F0ZSAuZGlyZWN0aW9ucywgLmJ1dHRvbnMgLmV2ZW50IC5jYWxlbmRhciAub3BlbkluQ2FsZW5kYXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLmJ1dHRvbnMgLmljb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gLmJ1dHRvbnMgLmV2ZW50OmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAuYnV0dG9ucyAuZXZlbnQ6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NTAwcHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAuZXZlbnQge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgLmJ1dHRvbnMge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAuYnV0dG9ucyAuZXZlbnQ6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBtYXJnaW46IDAgMCAxcmVtIDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIC5idXR0b25zIC5ldmVudDpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgbWFyZ2luOiAxcmVtIDAgMCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIG9ubHkgYW5kIChtaW4td2lkdGg6IDcwMHB4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmJ1dHRvbnMgLmV2ZW50OmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDFyZW0gMCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYnV0dG9ucyAuZXZlbnQ6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwIDAgMXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxTdHlsZUJhc2U+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjYWxlbmRhclBhZ2VDb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhbGVuZGFyUGFnZVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm51bU9mRXZlbnRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPHAgY2xhc3NOYW1lPVwidGl0bGVcIj5UaGVyZSBhcmUge3RoaXMuc3RhdGUuY2FsZW5kYXJFdmVudHMubGVuZ3RofSB1cGNvbWluZyBldmVudHMgdGhpcyBtb250aC48L3A+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgPE51bWJlck9mRXZlbnRzIGV2ZW50cz17dGhpcy5zdGF0ZS5jYWxlbmRhckV2ZW50cy5sZW5ndGh9IGVycm9yPXt0aGlzLnN0YXRlLmZldGNoRXJyb3J9Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJldmVudExpc3RDb250YWluZXJcIj57ZXZlbnRzTGlzdH08L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgIDwvU3R5bGVCYXNlPlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYWxlbmRhcjsiXX0= */\n/*@ sourceURL=/Users/sam.davis-castro/Desktop/bellflower-site-nextjs/pages/calendar.js */"));
      });
      return __jsx(_components_StyleBase__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205
        },
        __self: this
      }, __jsx("section", {
        className: "calendarPageContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        },
        __self: this
      }, __jsx("div", {
        className: "calendarPage",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        },
        __self: this
      }, __jsx("div", {
        className: "numOfEvents",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        },
        __self: this
      }, __jsx(_components_NumberOfEvents__WEBPACK_IMPORTED_MODULE_11__["default"], {
        events: this.state.calendarEvents.length,
        error: this.state.fetchError,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        },
        __self: this
      })), __jsx("div", {
        className: "eventListContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        },
        __self: this
      }, eventsList))));
    }
  }]);

  return Calendar;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Calendar);

/***/ })

})
//# sourceMappingURL=calendar.js.0156236f4b384f371ec1.hot-update.js.map