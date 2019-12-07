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
          className: "jsx-1300491556" + " " + "eventCard",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          },
          __self: this
        }, __jsx("h3", {
          className: "jsx-1300491556",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          },
          __self: this
        }, calEvent.summary), __jsx("div", {
          className: "jsx-1300491556" + " " + "detailsContainer",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          },
          __self: this
        }, __jsx("div", {
          className: "jsx-1300491556" + " " + "details",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          },
          __self: this
        }, __jsx("div", {
          className: "jsx-1300491556" + " " + "event",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          },
          __self: this
        }, __jsx("img", {
          src: __webpack_require__(/*! ../public/time-icon-01.svg */ "./public/time-icon-01.svg"),
          className: "jsx-1300491556" + " " + "icon",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          },
          __self: this
        }), __jsx("p", {
          className: "jsx-1300491556" + " " + "time",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          },
          __self: this
        }, _this3.date(calEvent.start.dateTime, 'day'), ", ", _this3.date(calEvent.start.dateTime, 'month'), " ", _this3.date(calEvent.start.dateTime, 'dayNum'), "  ", _this3.date(calEvent.start.dateTime, 'localTime'), " - ", _this3.date(calEvent.end.dateTime, 'localTime'))), __jsx("div", {
          className: "jsx-1300491556" + " " + "event",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          },
          __self: this
        }, __jsx("img", {
          src: __webpack_require__(/*! ../public/pin-icon-01.svg */ "./public/pin-icon-01.svg"),
          className: "jsx-1300491556" + " " + "icon",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          },
          __self: this
        }), __jsx("p", {
          className: "jsx-1300491556" + " " + "pin",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          },
          __self: this
        }, calEvent.location)), __jsx("div", {
          className: "jsx-1300491556" + " " + "event",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          },
          __self: this
        }, __jsx("img", {
          src: __webpack_require__(/*! ../public/description-icon-01.svg */ "./public/description-icon-01.svg"),
          className: "jsx-1300491556" + " " + "icon",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          },
          __self: this
        }), __jsx("p", {
          className: "jsx-1300491556" + " " + "description",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          },
          __self: this
        }, calEvent.description)), __jsx("div", {
          className: "jsx-1300491556" + " " + "buttons",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92
          },
          __self: this
        }, __jsx("div", {
          className: "jsx-1300491556" + " " + "event",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          },
          __self: this
        }, __jsx("img", {
          src: __webpack_require__(/*! ../public/navigate-icon-01.svg */ "./public/navigate-icon-01.svg"),
          className: "jsx-1300491556" + " " + "icon",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          },
          __self: this
        }), __jsx("p", {
          className: "jsx-1300491556" + " " + "navigate",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          },
          __self: this
        }, __jsx("a", {
          alt: "directions link",
          href: _this3.formatMapsUrl(calEvent.location),
          className: "jsx-1300491556" + " " + "directions",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          },
          __self: this
        }, "Navigate to event"))), __jsx("div", {
          className: "jsx-1300491556" + " " + "event",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          },
          __self: this
        }, __jsx("img", {
          src: __webpack_require__(/*! ../public/calendar-icon-01.svg */ "./public/calendar-icon-01.svg"),
          className: "jsx-1300491556" + " " + "icon",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          },
          __self: this
        }), __jsx("p", {
          className: "jsx-1300491556" + " " + "calendar",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          },
          __self: this
        }, __jsx("a", {
          href: calEvent.htmlLink,
          className: "jsx-1300491556" + " " + "openInCalendar",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          },
          __self: this
        }, "View in Google Calendar")))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
          id: "1300491556",
          __self: this
        }, ".eventCard.jsx-1300491556{padding:1rem;margin:2rem 0;text-align:left;}.eventCard.jsx-1300491556:last-child{margin-bottom:0;}.icon.jsx-1300491556{height:1.2rem;position:relative;top:3px;}.event.jsx-1300491556{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:baseline;-webkit-box-align:baseline;-ms-flex-align:baseline;align-items:baseline;}.time.jsx-1300491556{margin-left:10px;}.pin.jsx-1300491556{margin-left:6px;}.description.jsx-1300491556{margin-left:9px;}.calendar.jsx-1300491556{margin-left:10px;}.navigate.jsx-1300491556{margin-left:9px;}.buttons.jsx-1300491556{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.buttons.jsx-1300491556 .event.jsx-1300491556{width:calc(50% - 1rem);border:2px solid #fff;text-align:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:#f69d1a;color:#222;-webkit-transition:background ease .5s;transition:background ease .5s;}.buttons.jsx-1300491556 .icon.jsx-1300491556{top:0px;}.buttons.jsx-1300491556 .event.jsx-1300491556:first-child{margin-right:1rem;}.buttons.jsx-1300491556 .event.jsx-1300491556:last-child{margin-left:1rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW0uZGF2aXMtY2FzdHJvL0Rlc2t0b3AvYmVsbGZsb3dlci1zaXRlLW5leHRqcy9wYWdlcy9jYWxlbmRhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpR29DLEFBRzBDLEFBS0csQUFHRixBQUtELEFBSUksQUFHRCxBQUdBLEFBR0MsQUFHRCxBQUdILEFBSVUsQUFZZixBQUdVLEFBR0QsUUFMckIsS0FoRGtCLENBUUksRUFIdEIsQUFlQSxBQUdBLEFBTUEsQ0FaQSxBQVNBLEFBNEJBLENBSEEsS0FmMEIsSUFuQ04sS0FRUixRQUNaLEdBUkEsRUFvQ3NCLGtCQUNMLFdBMUJRLEFBbUJFLCtEQVFBLG9DQVAzQixFQW5CQSw2REEyQnVCLDZGQUNBLG1CQUNSLFdBQ29CLHNFQUNuQyIsImZpbGUiOiIvVXNlcnMvc2FtLmRhdmlzLWNhc3Ryby9EZXNrdG9wL2JlbGxmbG93ZXItc2l0ZS1uZXh0anMvcGFnZXMvY2FsZW5kYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3R5bGVCYXNlIGZyb20gJy4uL2NvbXBvbmVudHMvU3R5bGVCYXNlJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IE51bWJlck9mRXZlbnRzIGZyb20gJy4uL2NvbXBvbmVudHMvTnVtYmVyT2ZFdmVudHMnO1xuY2xhc3MgQ2FsZW5kYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRlID0ge1xuICAgICAgICBjYWxlbmRhckV2ZW50czogW10sXG4gICAgICAgIGZldGNoRXJyb3I6IGZhbHNlXG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGxldCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBsZXQgc3RhcnRPZlRvZGF5ID0gbmV3IERhdGUobm93LmdldEZ1bGxZZWFyKCksIG5vdy5nZXRNb250aCgpLCBub3cuZ2V0RGF0ZSgpLCAwLCAwLCAwKTtcbiAgICAgICAgbGV0IGVuZE9mRGF5T25lTW9udGhPdXQgPSBuZXcgRGF0ZShub3cuZ2V0RnVsbFllYXIoKSwgbm93LmdldE1vbnRoKCkgKyAxLCBub3cuZ2V0RGF0ZSgpLCAyMywgNTksIDU5KTtcbiAgICAgICAgYXhpb3MuZ2V0KCdodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9jYWxlbmRhci92My9jYWxlbmRhcnMvdGhlYmVsbGZsb3dlcmJhbmQlNDBnbWFpbC5jb20vZXZlbnRzP2tleT1BSXphU3lBNzNlek5CdUVQUVNTak1nb01qZmlGYTV3d1QxVEpodDgnKVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgYWxsRXZlbnRzID0gcmVzLmRhdGEuaXRlbXM7XG4gICAgICAgICAgICAgICAgYWxsRXZlbnRzID0gYWxsRXZlbnRzLnNvcnQoKGEsIGIpID0+IChEYXRlLnBhcnNlKGEuc3RhcnQuZGF0ZVRpbWUudG9TdHJpbmcoKSkgPiBEYXRlLnBhcnNlKGIuc3RhcnQuZGF0ZVRpbWUudG9TdHJpbmcoKSkgPyAxOiAtMSkpO1xuICAgICAgICAgICAgICAgIGxldCBmdXR1cmVFdmVudHMgPSBbXTtcbiAgICAgICAgICAgICAgICBhbGxFdmVudHMubWFwKChjYWxFdmVudCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZXZlbnRUaW1lID0gbmV3IERhdGUoY2FsRXZlbnQuc3RhcnQuZGF0ZVRpbWUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnRUaW1lID4gc3RhcnRPZlRvZGF5ICYmIGV2ZW50VGltZSA8IGVuZE9mRGF5T25lTW9udGhPdXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1dHVyZUV2ZW50cy5wdXNoKGNhbEV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjYWxlbmRhckV2ZW50czogZnV0dXJlRXZlbnRzIH0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2ZldGNoRXJyb3I6IHRydWV9KTtcbiAgICAgICAgICAgIH0pXG4gICAgfVxuXG4gICAgZGF0ZSh1dGNEYXRlLCB0eXBlKSB7XG4gICAgICAgIGxldCBkYXRlID0gbmV3IERhdGUodXRjRGF0ZSk7XG4gICAgICAgIGNvbnN0IGRheXMgPSBbJ1N1bicsICdNb24nLCAnVHVlJywgJ1dlZCcsICdUaHUnLCAnRnJpJywgJ1NhdCcgXTtcbiAgICAgICAgY29uc3QgbW9udGhzID0gWydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVybWJlcicsICdEZWNlbWJlciddO1xuICAgICAgICBjb25zdCBkYXRlTWFrZXIgPSB7XG4gICAgICAgICAgICBnZXQgZGF5KCkge3JldHVybiBkYXlzW2RhdGUuZ2V0RGF5KCldfSxcbiAgICAgICAgICAgIGdldCBkYXlOdW0oKSB7cmV0dXJuIGRhdGUuZ2V0RGF0ZSgpfSxcbiAgICAgICAgICAgIGdldCBtb250aCgpIHtyZXR1cm4gbW9udGhzW2RhdGUuZ2V0TW9udGgoKV19LFxuICAgICAgICAgICAgZ2V0IHllYXIoKSB7cmV0dXJuIGRhdGUuZ2V0RnVsbFllYXIoKX0sXG4gICAgICAgICAgICBnZXQgaG91cigpIHtyZXR1cm4gZGF0ZS5nZXRIb3VycygpfSxcbiAgICAgICAgICAgIGdldCBtaW51dGUoKSB7cmV0dXJuIGRhdGUuZ2V0TWludXRlcygpfSxcbiAgICAgICAgICAgIGdldCBsb2NhbFRpbWUoKSB7cmV0dXJuIGRhdGUudG9Mb2NhbGVUaW1lU3RyaW5nKCkuc2xpY2UoMCwgLTYpLmNvbmNhdChkYXRlLnRvTG9jYWxlVGltZVN0cmluZygpLnNsaWNlKC0zKSk7fVxuICAgICAgICB9XG4gICAgICAgIGxldCBmb3JtYXR0ZWREYXRlO1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2RheSc6XG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkRGF0ZSA9IGRhdGVNYWtlci5kYXk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdkYXlOdW0nOlxuICAgICAgICAgICAgICAgIGZvcm1hdHRlZERhdGUgPSBkYXRlTWFrZXIuZGF5TnVtO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbW9udGgnOlxuICAgICAgICAgICAgICAgIGZvcm1hdHRlZERhdGUgPSBkYXRlTWFrZXIubW9udGg7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd5ZWFyJzpcbiAgICAgICAgICAgICAgICBmb3JtYXR0ZWREYXRlID0gZGF0ZU1ha2VyLnllYXI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdob3VyJzpcbiAgICAgICAgICAgICAgICBmb3JtYXR0ZWREYXRlID0gZGF0ZU1ha2VyLmhvdXI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdtaW51dGUnOlxuICAgICAgICAgICAgICAgIGZvcm1hdHRlZERhdGUgPSBkYXRlTWFrZXIubWludXRlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbG9jYWxUaW1lJzpcbiAgICAgICAgICAgICAgICBmb3JtYXR0ZWREYXRlID0gZGF0ZU1ha2VyLmxvY2FsVGltZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZm9ybWF0dGVkRGF0ZTtcbiAgICB9XG4gICAgZm9ybWF0TWFwc1VybChhZGRyZXNzKSB7XG4gICAgICAgIGxldCBmaXJzdFBhcnQgPSAnaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL3NlYXJjaC8/YXBpPTEmcXVlcnk9JztcbiAgICAgICAgbGV0IHNlY29uZFBhcnQgPSBlbmNvZGVVUklDb21wb25lbnQoYWRkcmVzcyk7XG4gICAgICAgIHJldHVybiBmaXJzdFBhcnQrc2Vjb25kUGFydDtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IGV2ZW50c0xpc3QgPSAoXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmNhbGVuZGFyRXZlbnRzLm1hcCgoY2FsRXZlbnQsIGkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gIDxkaXYgY2xhc3NOYW1lPVwiZXZlbnRDYXJkXCIga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+e2NhbEV2ZW50LnN1bW1hcnl9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHNDb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV2ZW50XCI+PGltZyBjbGFzc05hbWU9XCJpY29uXCIgc3JjPXtyZXF1aXJlKCcuLi9wdWJsaWMvdGltZS1pY29uLTAxLnN2ZycpfSAvPjxwIGNsYXNzTmFtZT1cInRpbWVcIj57dGhpcy5kYXRlKGNhbEV2ZW50LnN0YXJ0LmRhdGVUaW1lLCAnZGF5Jyl9LCB7dGhpcy5kYXRlKGNhbEV2ZW50LnN0YXJ0LmRhdGVUaW1lLCAnbW9udGgnKX0ge3RoaXMuZGF0ZShjYWxFdmVudC5zdGFydC5kYXRlVGltZSwgJ2RheU51bScpfSAge3RoaXMuZGF0ZShjYWxFdmVudC5zdGFydC5kYXRlVGltZSwgJ2xvY2FsVGltZScpfSAtIHt0aGlzLmRhdGUoY2FsRXZlbnQuZW5kLmRhdGVUaW1lLCAnbG9jYWxUaW1lJyl9PC9wPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJldmVudFwiPjxpbWcgY2xhc3NOYW1lPVwiaWNvblwiIHNyYz17cmVxdWlyZSgnLi4vcHVibGljL3Bpbi1pY29uLTAxLnN2ZycpfSAvPjxwIGNsYXNzTmFtZT1cInBpblwiPntjYWxFdmVudC5sb2NhdGlvbn08L3A+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV2ZW50XCI+PGltZyBjbGFzc05hbWU9XCJpY29uXCIgc3JjPXtyZXF1aXJlKCcuLi9wdWJsaWMvZGVzY3JpcHRpb24taWNvbi0wMS5zdmcnKX0gLz48cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPntjYWxFdmVudC5kZXNjcmlwdGlvbn08L3A+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV2ZW50XCI+PGltZyBjbGFzc05hbWU9XCJpY29uXCIgc3JjPXtyZXF1aXJlKCcuLi9wdWJsaWMvbmF2aWdhdGUtaWNvbi0wMS5zdmcnKX0gLz48cCBjbGFzc05hbWU9XCJuYXZpZ2F0ZVwiPjxhIGNsYXNzTmFtZT1cImRpcmVjdGlvbnNcIiBhbHQ9XCJkaXJlY3Rpb25zIGxpbmtcIiBocmVmPXt0aGlzLmZvcm1hdE1hcHNVcmwoY2FsRXZlbnQubG9jYXRpb24pfT5OYXZpZ2F0ZSB0byBldmVudDwvYT48L3A+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJldmVudFwiPjxpbWcgY2xhc3NOYW1lPVwiaWNvblwiIHNyYz17cmVxdWlyZSgnLi4vcHVibGljL2NhbGVuZGFyLWljb24tMDEuc3ZnJyl9IC8+PHAgY2xhc3NOYW1lPVwiY2FsZW5kYXJcIj48YSBjbGFzc05hbWU9XCJvcGVuSW5DYWxlbmRhclwiIGhyZWY9e2NhbEV2ZW50Lmh0bWxMaW5rfT5WaWV3IGluIEdvb2dsZSBDYWxlbmRhcjwvYT48L3A+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgICAgICAuZXZlbnRDYXJkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMnJlbSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuZXZlbnRDYXJkOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxLjJyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogM3B4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLmV2ZW50IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC50aW1lIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgLnBpbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA5cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhbGVuZGFyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5uYXZpZ2F0ZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDlweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5idXR0b25zIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLmJ1dHRvbnMgLmV2ZW50IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogY2FsYyg1MCUgLSAxcmVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHBhZGRpbmc6IDFyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjY5ZDFhO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMjIyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgZWFzZSAuNXM7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuYnV0dG9ucyAuaWNvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuYnV0dG9ucyAuZXZlbnQ6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5idXR0b25zIC5ldmVudDpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8U3R5bGVCYXNlPlxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY2FsZW5kYXJQYWdlQ29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYWxlbmRhclBhZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJudW1PZkV2ZW50c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxwIGNsYXNzTmFtZT1cInRpdGxlXCI+VGhlcmUgYXJlIHt0aGlzLnN0YXRlLmNhbGVuZGFyRXZlbnRzLmxlbmd0aH0gdXBjb21pbmcgZXZlbnRzIHRoaXMgbW9udGguPC9wPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDxOdW1iZXJPZkV2ZW50cyBldmVudHM9e3RoaXMuc3RhdGUuY2FsZW5kYXJFdmVudHMubGVuZ3RofSBlcnJvcj17dGhpcy5zdGF0ZS5mZXRjaEVycm9yfS8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXZlbnRMaXN0Q29udGFpbmVyXCI+e2V2ZW50c0xpc3R9PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICA8L1N0eWxlQmFzZT5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FsZW5kYXI7Il19 */\n/*@ sourceURL=/Users/sam.davis-castro/Desktop/bellflower-site-nextjs/pages/calendar.js */"));
      });
      return __jsx(_components_StyleBase__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }, __jsx("section", {
        className: "calendarPageContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }, __jsx("div", {
        className: "calendarPage",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, __jsx("div", {
        className: "numOfEvents",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }, __jsx(_components_NumberOfEvents__WEBPACK_IMPORTED_MODULE_11__["default"], {
        events: this.state.calendarEvents.length,
        error: this.state.fetchError,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      })), __jsx("div", {
        className: "eventListContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
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
//# sourceMappingURL=calendar.js.5f18d307ff0d4857180d.hot-update.js.map