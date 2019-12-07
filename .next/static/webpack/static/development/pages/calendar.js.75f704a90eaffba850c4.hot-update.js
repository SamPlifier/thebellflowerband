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
          className: "jsx-3811365911" + " " + "eventCard",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          },
          __self: this
        }, __jsx("h3", {
          className: "jsx-3811365911",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          },
          __self: this
        }, calEvent.summary), __jsx("div", {
          className: "jsx-3811365911" + " " + "detailsContainer",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          },
          __self: this
        }, __jsx("div", {
          className: "jsx-3811365911" + " " + "details",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          },
          __self: this
        }, __jsx("div", {
          className: "jsx-3811365911" + " " + "event",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          },
          __self: this
        }, __jsx("img", {
          src: __webpack_require__(/*! ../public/time-icon-01.svg */ "./public/time-icon-01.svg"),
          className: "jsx-3811365911" + " " + "icon",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          },
          __self: this
        }), __jsx("p", {
          className: "jsx-3811365911" + " " + "time",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          },
          __self: this
        }, _this3.date(calEvent.start.dateTime, 'day'), ", ", _this3.date(calEvent.start.dateTime, 'month'), " ", _this3.date(calEvent.start.dateTime, 'dayNum'), "  ", _this3.date(calEvent.start.dateTime, 'localTime'), " - ", _this3.date(calEvent.end.dateTime, 'localTime'))), __jsx("div", {
          className: "jsx-3811365911" + " " + "event",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          },
          __self: this
        }, __jsx("img", {
          src: __webpack_require__(/*! ../public/pin-icon-01.svg */ "./public/pin-icon-01.svg"),
          className: "jsx-3811365911" + " " + "icon",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          },
          __self: this
        }), __jsx("p", {
          className: "jsx-3811365911" + " " + "pin",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          },
          __self: this
        }, calEvent.location)), __jsx("div", {
          className: "jsx-3811365911" + " " + "event",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          },
          __self: this
        }, __jsx("img", {
          src: __webpack_require__(/*! ../public/description-icon-01.svg */ "./public/description-icon-01.svg"),
          className: "jsx-3811365911" + " " + "icon",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          },
          __self: this
        }), __jsx("p", {
          className: "jsx-3811365911" + " " + "description",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          },
          __self: this
        }, calEvent.description)), __jsx("div", {
          className: "jsx-3811365911" + " " + "buttons",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92
          },
          __self: this
        }, __jsx("div", {
          className: "jsx-3811365911" + " " + "event",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          },
          __self: this
        }, __jsx("img", {
          src: __webpack_require__(/*! ../public/navigate-icon-01.svg */ "./public/navigate-icon-01.svg"),
          className: "jsx-3811365911" + " " + "icon",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          },
          __self: this
        }), __jsx("p", {
          className: "jsx-3811365911" + " " + "navigate",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          },
          __self: this
        }, __jsx("a", {
          alt: "directions link",
          href: _this3.formatMapsUrl(calEvent.location),
          className: "jsx-3811365911" + " " + "directions",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          },
          __self: this
        }, "Navigate"))), __jsx("div", {
          className: "jsx-3811365911" + " " + "event",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          },
          __self: this
        }, __jsx("img", {
          src: __webpack_require__(/*! ../public/calendar-icon-01.svg */ "./public/calendar-icon-01.svg"),
          className: "jsx-3811365911" + " " + "icon",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          },
          __self: this
        }), __jsx("p", {
          className: "jsx-3811365911" + " " + "calendar",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          },
          __self: this
        }, __jsx("a", {
          href: calEvent.htmlLink,
          className: "jsx-3811365911" + " " + "openInCalendar",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          },
          __self: this
        }, "Calendar")))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
          id: "3811365911",
          __self: this
        }, ".eventCard.jsx-3811365911{padding:1rem;margin:2rem 0;text-align:left;}.eventCard.jsx-3811365911:last-child{margin-bottom:0;}.icon.jsx-3811365911{height:1.2rem;position:relative;top:3px;}.event.jsx-3811365911{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:baseline;-webkit-box-align:baseline;-ms-flex-align:baseline;align-items:baseline;}.time.jsx-3811365911{margin-left:10px;}.pin.jsx-3811365911{margin-left:6px;}.description.jsx-3811365911{margin-left:9px;}.calendar.jsx-3811365911{margin-left:10px;}.navigate.jsx-3811365911{margin-left:9px;}.buttons.jsx-3811365911{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin:1rem 0;}.buttons.jsx-3811365911:hover{cursor:pointer;}.buttons.jsx-3811365911 .event.jsx-3811365911{width:calc(50% - 1rem);border:2px solid #fff;text-align:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:#f69d1a;-webkit-transition:background ease .5s;transition:background ease .5s;}.buttons.jsx-3811365911 .event.jsx-3811365911:hover{background:#fff;}.buttons.jsx-3811365911 .event.jsx-3811365911 .navigate.jsx-3811365911 .directions.jsx-3811365911,.buttons.jsx-3811365911 .event.jsx-3811365911 .calendar.jsx-3811365911 .openInCalendar.jsx-3811365911{color:#333;}.buttons.jsx-3811365911 .icon.jsx-3811365911{top:0px;}.buttons.jsx-3811365911 .event.jsx-3811365911:first-child{margin-right:1rem;}.buttons.jsx-3811365911 .event.jsx-3811365911:last-child{margin-left:1rem;}@media only screen and (min-width:500px){.buttons.jsx-3811365911{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.buttons.jsx-3811365911 .event.jsx-3811365911:first-child{margin:0 0 1rem 0;}.buttons.jsx-3811365911 .event.jsx-3811365911:last-child{margin:1rem 0 0 0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW0uZGF2aXMtY2FzdHJvL0Rlc2t0b3AvYmVsbGZsb3dlci1zaXRlLW5leHRqcy9wYWdlcy9jYWxlbmRhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpR29DLEFBRzBDLEFBS0csQUFHRixBQUtELEFBSUksQUFHRCxBQUdBLEFBR0MsQUFHRCxBQUdILEFBS0UsQUFHUSxBQVdQLEFBR0wsQUFHSCxBQUdVLEFBR0QsQUFJUyxBQUdKLEFBR0EsUUFmMUIsR0FIQSxFQXREa0IsQ0FRSSxDQTZCdEIsQ0FoQ0EsQUFlQSxBQUdBLEFBTUEsQUFzQkEsQ0FsQ0EsQUFTQSxBQXFDQSxDQUhBLEFBVUksQUFHQSxLQWpDc0IsSUF2Q04sS0FRUixRQUNaLEdBUkEsRUF1Q3NCLGtCQUNMLFdBN0JRLEFBbUJFLElBbUN2QiwyREF4QnVCLG9DQVZULEVBbkJsQixZQW9CQSxpREFVdUIsNkZBQ0EsbUJBQ1ksc0VBQ25DIiwiZmlsZSI6Ii9Vc2Vycy9zYW0uZGF2aXMtY2FzdHJvL0Rlc2t0b3AvYmVsbGZsb3dlci1zaXRlLW5leHRqcy9wYWdlcy9jYWxlbmRhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdHlsZUJhc2UgZnJvbSAnLi4vY29tcG9uZW50cy9TdHlsZUJhc2UnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgTnVtYmVyT2ZFdmVudHMgZnJvbSAnLi4vY29tcG9uZW50cy9OdW1iZXJPZkV2ZW50cyc7XG5jbGFzcyBDYWxlbmRhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGUgPSB7XG4gICAgICAgIGNhbGVuZGFyRXZlbnRzOiBbXSxcbiAgICAgICAgZmV0Y2hFcnJvcjogZmFsc2VcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgbGV0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGxldCBzdGFydE9mVG9kYXkgPSBuZXcgRGF0ZShub3cuZ2V0RnVsbFllYXIoKSwgbm93LmdldE1vbnRoKCksIG5vdy5nZXREYXRlKCksIDAsIDAsIDApO1xuICAgICAgICBsZXQgZW5kT2ZEYXlPbmVNb250aE91dCA9IG5ldyBEYXRlKG5vdy5nZXRGdWxsWWVhcigpLCBub3cuZ2V0TW9udGgoKSArIDEsIG5vdy5nZXREYXRlKCksIDIzLCA1OSwgNTkpO1xuICAgICAgICBheGlvcy5nZXQoJ2h0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2NhbGVuZGFyL3YzL2NhbGVuZGFycy90aGViZWxsZmxvd2VyYmFuZCU0MGdtYWlsLmNvbS9ldmVudHM/a2V5PUFJemFTeUE3M2V6TkJ1RVBRU1NqTWdvTWpmaUZhNXd3VDFUSmh0OCcpXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBhbGxFdmVudHMgPSByZXMuZGF0YS5pdGVtcztcbiAgICAgICAgICAgICAgICBhbGxFdmVudHMgPSBhbGxFdmVudHMuc29ydCgoYSwgYikgPT4gKERhdGUucGFyc2UoYS5zdGFydC5kYXRlVGltZS50b1N0cmluZygpKSA+IERhdGUucGFyc2UoYi5zdGFydC5kYXRlVGltZS50b1N0cmluZygpKSA/IDE6IC0xKSk7XG4gICAgICAgICAgICAgICAgbGV0IGZ1dHVyZUV2ZW50cyA9IFtdO1xuICAgICAgICAgICAgICAgIGFsbEV2ZW50cy5tYXAoKGNhbEV2ZW50LCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBldmVudFRpbWUgPSBuZXcgRGF0ZShjYWxFdmVudC5zdGFydC5kYXRlVGltZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChldmVudFRpbWUgPiBzdGFydE9mVG9kYXkgJiYgZXZlbnRUaW1lIDwgZW5kT2ZEYXlPbmVNb250aE91dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZnV0dXJlRXZlbnRzLnB1c2goY2FsRXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNhbGVuZGFyRXZlbnRzOiBmdXR1cmVFdmVudHMgfSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZmV0Y2hFcnJvcjogdHJ1ZX0pO1xuICAgICAgICAgICAgfSlcbiAgICB9XG5cbiAgICBkYXRlKHV0Y0RhdGUsIHR5cGUpIHtcbiAgICAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSh1dGNEYXRlKTtcbiAgICAgICAgY29uc3QgZGF5cyA9IFsnU3VuJywgJ01vbicsICdUdWUnLCAnV2VkJywgJ1RodScsICdGcmknLCAnU2F0JyBdO1xuICAgICAgICBjb25zdCBtb250aHMgPSBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZXJtYmVyJywgJ0RlY2VtYmVyJ107XG4gICAgICAgIGNvbnN0IGRhdGVNYWtlciA9IHtcbiAgICAgICAgICAgIGdldCBkYXkoKSB7cmV0dXJuIGRheXNbZGF0ZS5nZXREYXkoKV19LFxuICAgICAgICAgICAgZ2V0IGRheU51bSgpIHtyZXR1cm4gZGF0ZS5nZXREYXRlKCl9LFxuICAgICAgICAgICAgZ2V0IG1vbnRoKCkge3JldHVybiBtb250aHNbZGF0ZS5nZXRNb250aCgpXX0sXG4gICAgICAgICAgICBnZXQgeWVhcigpIHtyZXR1cm4gZGF0ZS5nZXRGdWxsWWVhcigpfSxcbiAgICAgICAgICAgIGdldCBob3VyKCkge3JldHVybiBkYXRlLmdldEhvdXJzKCl9LFxuICAgICAgICAgICAgZ2V0IG1pbnV0ZSgpIHtyZXR1cm4gZGF0ZS5nZXRNaW51dGVzKCl9LFxuICAgICAgICAgICAgZ2V0IGxvY2FsVGltZSgpIHtyZXR1cm4gZGF0ZS50b0xvY2FsZVRpbWVTdHJpbmcoKS5zbGljZSgwLCAtNikuY29uY2F0KGRhdGUudG9Mb2NhbGVUaW1lU3RyaW5nKCkuc2xpY2UoLTMpKTt9XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGZvcm1hdHRlZERhdGU7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnZGF5JzpcbiAgICAgICAgICAgICAgICBmb3JtYXR0ZWREYXRlID0gZGF0ZU1ha2VyLmRheTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2RheU51bSc6XG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkRGF0ZSA9IGRhdGVNYWtlci5kYXlOdW07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdtb250aCc6XG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkRGF0ZSA9IGRhdGVNYWtlci5tb250aDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3llYXInOlxuICAgICAgICAgICAgICAgIGZvcm1hdHRlZERhdGUgPSBkYXRlTWFrZXIueWVhcjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2hvdXInOlxuICAgICAgICAgICAgICAgIGZvcm1hdHRlZERhdGUgPSBkYXRlTWFrZXIuaG91cjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ21pbnV0ZSc6XG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkRGF0ZSA9IGRhdGVNYWtlci5taW51dGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdsb2NhbFRpbWUnOlxuICAgICAgICAgICAgICAgIGZvcm1hdHRlZERhdGUgPSBkYXRlTWFrZXIubG9jYWxUaW1lO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmb3JtYXR0ZWREYXRlO1xuICAgIH1cbiAgICBmb3JtYXRNYXBzVXJsKGFkZHJlc3MpIHtcbiAgICAgICAgbGV0IGZpcnN0UGFydCA9ICdodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvc2VhcmNoLz9hcGk9MSZxdWVyeT0nO1xuICAgICAgICBsZXQgc2Vjb25kUGFydCA9IGVuY29kZVVSSUNvbXBvbmVudChhZGRyZXNzKTtcbiAgICAgICAgcmV0dXJuIGZpcnN0UGFydCtzZWNvbmRQYXJ0O1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgZXZlbnRzTGlzdCA9IChcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuY2FsZW5kYXJFdmVudHMubWFwKChjYWxFdmVudCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAgPGRpdiBjbGFzc05hbWU9XCJldmVudENhcmRcIiBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57Y2FsRXZlbnQuc3VtbWFyeX08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsc0NvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXZlbnRcIj48aW1nIGNsYXNzTmFtZT1cImljb25cIiBzcmM9e3JlcXVpcmUoJy4uL3B1YmxpYy90aW1lLWljb24tMDEuc3ZnJyl9IC8+PHAgY2xhc3NOYW1lPVwidGltZVwiPnt0aGlzLmRhdGUoY2FsRXZlbnQuc3RhcnQuZGF0ZVRpbWUsICdkYXknKX0sIHt0aGlzLmRhdGUoY2FsRXZlbnQuc3RhcnQuZGF0ZVRpbWUsICdtb250aCcpfSB7dGhpcy5kYXRlKGNhbEV2ZW50LnN0YXJ0LmRhdGVUaW1lLCAnZGF5TnVtJyl9ICB7dGhpcy5kYXRlKGNhbEV2ZW50LnN0YXJ0LmRhdGVUaW1lLCAnbG9jYWxUaW1lJyl9IC0ge3RoaXMuZGF0ZShjYWxFdmVudC5lbmQuZGF0ZVRpbWUsICdsb2NhbFRpbWUnKX08L3A+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV2ZW50XCI+PGltZyBjbGFzc05hbWU9XCJpY29uXCIgc3JjPXtyZXF1aXJlKCcuLi9wdWJsaWMvcGluLWljb24tMDEuc3ZnJyl9IC8+PHAgY2xhc3NOYW1lPVwicGluXCI+e2NhbEV2ZW50LmxvY2F0aW9ufTwvcD48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXZlbnRcIj48aW1nIGNsYXNzTmFtZT1cImljb25cIiBzcmM9e3JlcXVpcmUoJy4uL3B1YmxpYy9kZXNjcmlwdGlvbi1pY29uLTAxLnN2ZycpfSAvPjxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+e2NhbEV2ZW50LmRlc2NyaXB0aW9ufTwvcD48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXZlbnRcIj48aW1nIGNsYXNzTmFtZT1cImljb25cIiBzcmM9e3JlcXVpcmUoJy4uL3B1YmxpYy9uYXZpZ2F0ZS1pY29uLTAxLnN2ZycpfSAvPjxwIGNsYXNzTmFtZT1cIm5hdmlnYXRlXCI+PGEgY2xhc3NOYW1lPVwiZGlyZWN0aW9uc1wiIGFsdD1cImRpcmVjdGlvbnMgbGlua1wiIGhyZWY9e3RoaXMuZm9ybWF0TWFwc1VybChjYWxFdmVudC5sb2NhdGlvbil9Pk5hdmlnYXRlPC9hPjwvcD48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV2ZW50XCI+PGltZyBjbGFzc05hbWU9XCJpY29uXCIgc3JjPXtyZXF1aXJlKCcuLi9wdWJsaWMvY2FsZW5kYXItaWNvbi0wMS5zdmcnKX0gLz48cCBjbGFzc05hbWU9XCJjYWxlbmRhclwiPjxhIGNsYXNzTmFtZT1cIm9wZW5JbkNhbGVuZGFyXCIgaHJlZj17Y2FsRXZlbnQuaHRtbExpbmt9PkNhbGVuZGFyPC9hPjwvcD48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAgICAgICAgIC5ldmVudENhcmQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAycmVtIDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5ldmVudENhcmQ6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5pY29uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEuMnJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAzcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuZXZlbnQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRpbWUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAucGluIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDlweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2FsZW5kYXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLm5hdmlnYXRlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogOXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLmJ1dHRvbnMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxcmVtIDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuYnV0dG9uczpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLmJ1dHRvbnMgLmV2ZW50IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogY2FsYyg1MCUgLSAxcmVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2Y2OWQxYTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIGVhc2UgLjVzO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAuYnV0dG9ucyAuZXZlbnQ6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuYnV0dG9ucyAuZXZlbnQgLm5hdmlnYXRlIC5kaXJlY3Rpb25zLCAuYnV0dG9ucyAuZXZlbnQgLmNhbGVuZGFyIC5vcGVuSW5DYWxlbmRhciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuYnV0dG9ucyAuaWNvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuYnV0dG9ucyAuZXZlbnQ6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5idXR0b25zIC5ldmVudDpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo1MDBweCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5idXR0b25zIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmJ1dHRvbnMgLmV2ZW50OmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgMXJlbSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYnV0dG9ucyAuZXZlbnQ6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMXJlbSAwIDAgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgICAgICAgICAgfSAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFN0eWxlQmFzZT5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNhbGVuZGFyUGFnZUNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FsZW5kYXJQYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibnVtT2ZFdmVudHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8cCBjbGFzc05hbWU9XCJ0aXRsZVwiPlRoZXJlIGFyZSB7dGhpcy5zdGF0ZS5jYWxlbmRhckV2ZW50cy5sZW5ndGh9IHVwY29taW5nIGV2ZW50cyB0aGlzIG1vbnRoLjwvcD4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICA8TnVtYmVyT2ZFdmVudHMgZXZlbnRzPXt0aGlzLnN0YXRlLmNhbGVuZGFyRXZlbnRzLmxlbmd0aH0gZXJyb3I9e3RoaXMuc3RhdGUuZmV0Y2hFcnJvcn0vPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV2ZW50TGlzdENvbnRhaW5lclwiPntldmVudHNMaXN0fTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPC9TdHlsZUJhc2U+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhbGVuZGFyOyJdfQ== */\n/*@ sourceURL=/Users/sam.davis-castro/Desktop/bellflower-site-nextjs/pages/calendar.js */"));
      });
      return __jsx(_components_StyleBase__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      }, __jsx("section", {
        className: "calendarPageContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        },
        __self: this
      }, __jsx("div", {
        className: "calendarPage",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        __self: this
      }, __jsx("div", {
        className: "numOfEvents",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        },
        __self: this
      }, __jsx(_components_NumberOfEvents__WEBPACK_IMPORTED_MODULE_11__["default"], {
        events: this.state.calendarEvents.length,
        error: this.state.fetchError,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        },
        __self: this
      })), __jsx("div", {
        className: "eventListContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
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
//# sourceMappingURL=calendar.js.75f704a90eaffba850c4.hot-update.js.map