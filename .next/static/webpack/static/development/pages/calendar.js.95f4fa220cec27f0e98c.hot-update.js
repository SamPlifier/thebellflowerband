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
          className: "jsx-49119113" + " " + "eventCard",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          },
          __self: this
        }, __jsx("h3", {
          className: "jsx-49119113",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          },
          __self: this
        }, calEvent.summary), __jsx("div", {
          className: "jsx-49119113" + " " + "detailsContainer",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          },
          __self: this
        }, __jsx("div", {
          className: "jsx-49119113" + " " + "details",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          },
          __self: this
        }, __jsx("div", {
          className: "jsx-49119113" + " " + "event",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          },
          __self: this
        }, __jsx("img", {
          src: __webpack_require__(/*! ../public/time-icon-01.svg */ "./public/time-icon-01.svg"),
          className: "jsx-49119113" + " " + "icon",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          },
          __self: this
        }), __jsx("p", {
          className: "jsx-49119113" + " " + "time",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          },
          __self: this
        }, _this3.date(calEvent.start.dateTime, 'day'), ", ", _this3.date(calEvent.start.dateTime, 'month'), " ", _this3.date(calEvent.start.dateTime, 'dayNum'), "  ", _this3.date(calEvent.start.dateTime, 'localTime'), " - ", _this3.date(calEvent.end.dateTime, 'localTime'))), __jsx("div", {
          className: "jsx-49119113" + " " + "event",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          },
          __self: this
        }, __jsx("img", {
          src: __webpack_require__(/*! ../public/pin-icon-01.svg */ "./public/pin-icon-01.svg"),
          className: "jsx-49119113" + " " + "icon",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          },
          __self: this
        }), __jsx("p", {
          className: "jsx-49119113" + " " + "pin",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          },
          __self: this
        }, calEvent.location)), __jsx("div", {
          className: "jsx-49119113" + " " + "event",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          },
          __self: this
        }, __jsx("img", {
          src: __webpack_require__(/*! ../public/description-icon-01.svg */ "./public/description-icon-01.svg"),
          className: "jsx-49119113" + " " + "icon",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          },
          __self: this
        }), __jsx("p", {
          className: "jsx-49119113" + " " + "description",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          },
          __self: this
        }, calEvent.description)), __jsx("div", {
          className: "jsx-49119113" + " " + "buttons",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92
          },
          __self: this
        }, __jsx("div", {
          className: "jsx-49119113" + " " + "event",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          },
          __self: this
        }, __jsx("img", {
          src: __webpack_require__(/*! ../public/navigate-icon-01.svg */ "./public/navigate-icon-01.svg"),
          className: "jsx-49119113" + " " + "icon",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          },
          __self: this
        }), __jsx("p", {
          className: "jsx-49119113" + " " + "navigate",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          },
          __self: this
        }, __jsx("a", {
          alt: "directions link",
          href: _this3.formatMapsUrl(calEvent.location),
          className: "jsx-49119113" + " " + "directions",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          },
          __self: this
        }, "Navigate"))), __jsx("div", {
          className: "jsx-49119113" + " " + "event",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          },
          __self: this
        }, __jsx("img", {
          src: __webpack_require__(/*! ../public/calendar-icon-01.svg */ "./public/calendar-icon-01.svg"),
          className: "jsx-49119113" + " " + "icon",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          },
          __self: this
        }), __jsx("p", {
          className: "jsx-49119113" + " " + "calendar",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          },
          __self: this
        }, __jsx("a", {
          href: calEvent.htmlLink,
          className: "jsx-49119113" + " " + "openInCalendar",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          },
          __self: this
        }, "Calendar")))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
          id: "49119113",
          __self: this
        }, ".eventCard.jsx-49119113{padding:1rem;margin:2rem 0;text-align:left;}.eventCard.jsx-49119113:last-child{margin-bottom:0;}.icon.jsx-49119113{height:1.2rem;position:relative;top:3px;}.event.jsx-49119113{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:baseline;-webkit-box-align:baseline;-ms-flex-align:baseline;align-items:baseline;}.time.jsx-49119113{margin-left:10px;}.pin.jsx-49119113{margin-left:6px;}.description.jsx-49119113{margin-left:9px;}.calendar.jsx-49119113{margin-left:10px;}.navigate.jsx-49119113{margin-left:9px;}.buttons.jsx-49119113{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin:1rem 0;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.event.jsx-49119113{width:100%;}.buttons.jsx-49119113 .event.jsx-49119113:first-child{margin:0 0 1rem 0;}.buttons.jsx-49119113 .event.jsx-49119113:last-child{margin:1rem 0 0 0;}.buttons.jsx-49119113:hover{cursor:pointer;}.buttons.jsx-49119113 .event.jsx-49119113{width:100%;border:2px solid #fff;text-align:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:#f69d1a;-webkit-transition:background ease .5s;transition:background ease .5s;}.buttons.jsx-49119113 .event.jsx-49119113:hover{background:#fff;}.buttons.jsx-49119113 .event.jsx-49119113 .navigate.jsx-49119113 .directions.jsx-49119113,.buttons.jsx-49119113 .event.jsx-49119113 .calendar.jsx-49119113 .openInCalendar.jsx-49119113{color:#333;}.buttons.jsx-49119113 .icon.jsx-49119113{top:0px;}@media only screen and (min-width:500px){.buttons.jsx-49119113{-webkit-flex-direction:row!important;-ms-flex-direction:row!important;flex-direction:row!important;background:red;}.buttons.jsx-49119113 .event.jsx-49119113:first-child{margin:0 1rem 0 0;}.buttons.jsx-49119113 .event.jsx-49119113:last-child{margin:0 0 0 1rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW0uZGF2aXMtY2FzdHJvL0Rlc2t0b3AvYmVsbGZsb3dlci1zaXRlLW5leHRqcy9wYWdlcy9jYWxlbmRhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpR29DLEFBRzBDLEFBS0csQUFHRixBQUtELEFBSUksQUFHRCxBQUdBLEFBR0MsQUFHRCxBQUdILEFBTUYsQUFHTyxBQUdBLEFBSUgsQUFHSixBQVdLLEFBR0wsQUFHSCxBQVV5QixBQUlYLEFBR0EsUUFoQjFCLEdBOUJBLEFBYTBCLEFBYzFCLEVBakVrQixDQVFJLENBd0N0QixDQTNDQSxBQWVBLEFBR0EsQUFNQSxBQWlDQSxDQTdDQSxBQVNBLENBZUEsQUFHQSxBQXNDSSxBQUdBLFNBcEZnQixLQVFSLENBMkNVLE9BMUN0QixHQVJBLFFBbURpQix1QkF4Q1EsQUFtQkUseUJBOENKLGVBQ25CLFdBekJ1QixnREFyQlQsRUFuQmxCLFlBb0IwQixxQ0FxQkgseUNBcEJ2QixvREFxQnVCLG1CQUNZLHNFQUNuQyIsImZpbGUiOiIvVXNlcnMvc2FtLmRhdmlzLWNhc3Ryby9EZXNrdG9wL2JlbGxmbG93ZXItc2l0ZS1uZXh0anMvcGFnZXMvY2FsZW5kYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3R5bGVCYXNlIGZyb20gJy4uL2NvbXBvbmVudHMvU3R5bGVCYXNlJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IE51bWJlck9mRXZlbnRzIGZyb20gJy4uL2NvbXBvbmVudHMvTnVtYmVyT2ZFdmVudHMnO1xuY2xhc3MgQ2FsZW5kYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRlID0ge1xuICAgICAgICBjYWxlbmRhckV2ZW50czogW10sXG4gICAgICAgIGZldGNoRXJyb3I6IGZhbHNlXG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGxldCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBsZXQgc3RhcnRPZlRvZGF5ID0gbmV3IERhdGUobm93LmdldEZ1bGxZZWFyKCksIG5vdy5nZXRNb250aCgpLCBub3cuZ2V0RGF0ZSgpLCAwLCAwLCAwKTtcbiAgICAgICAgbGV0IGVuZE9mRGF5T25lTW9udGhPdXQgPSBuZXcgRGF0ZShub3cuZ2V0RnVsbFllYXIoKSwgbm93LmdldE1vbnRoKCkgKyAxLCBub3cuZ2V0RGF0ZSgpLCAyMywgNTksIDU5KTtcbiAgICAgICAgYXhpb3MuZ2V0KCdodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9jYWxlbmRhci92My9jYWxlbmRhcnMvdGhlYmVsbGZsb3dlcmJhbmQlNDBnbWFpbC5jb20vZXZlbnRzP2tleT1BSXphU3lBNzNlek5CdUVQUVNTak1nb01qZmlGYTV3d1QxVEpodDgnKVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgYWxsRXZlbnRzID0gcmVzLmRhdGEuaXRlbXM7XG4gICAgICAgICAgICAgICAgYWxsRXZlbnRzID0gYWxsRXZlbnRzLnNvcnQoKGEsIGIpID0+IChEYXRlLnBhcnNlKGEuc3RhcnQuZGF0ZVRpbWUudG9TdHJpbmcoKSkgPiBEYXRlLnBhcnNlKGIuc3RhcnQuZGF0ZVRpbWUudG9TdHJpbmcoKSkgPyAxOiAtMSkpO1xuICAgICAgICAgICAgICAgIGxldCBmdXR1cmVFdmVudHMgPSBbXTtcbiAgICAgICAgICAgICAgICBhbGxFdmVudHMubWFwKChjYWxFdmVudCwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZXZlbnRUaW1lID0gbmV3IERhdGUoY2FsRXZlbnQuc3RhcnQuZGF0ZVRpbWUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnRUaW1lID4gc3RhcnRPZlRvZGF5ICYmIGV2ZW50VGltZSA8IGVuZE9mRGF5T25lTW9udGhPdXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1dHVyZUV2ZW50cy5wdXNoKGNhbEV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjYWxlbmRhckV2ZW50czogZnV0dXJlRXZlbnRzIH0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2ZldGNoRXJyb3I6IHRydWV9KTtcbiAgICAgICAgICAgIH0pXG4gICAgfVxuXG4gICAgZGF0ZSh1dGNEYXRlLCB0eXBlKSB7XG4gICAgICAgIGxldCBkYXRlID0gbmV3IERhdGUodXRjRGF0ZSk7XG4gICAgICAgIGNvbnN0IGRheXMgPSBbJ1N1bicsICdNb24nLCAnVHVlJywgJ1dlZCcsICdUaHUnLCAnRnJpJywgJ1NhdCcgXTtcbiAgICAgICAgY29uc3QgbW9udGhzID0gWydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVybWJlcicsICdEZWNlbWJlciddO1xuICAgICAgICBjb25zdCBkYXRlTWFrZXIgPSB7XG4gICAgICAgICAgICBnZXQgZGF5KCkge3JldHVybiBkYXlzW2RhdGUuZ2V0RGF5KCldfSxcbiAgICAgICAgICAgIGdldCBkYXlOdW0oKSB7cmV0dXJuIGRhdGUuZ2V0RGF0ZSgpfSxcbiAgICAgICAgICAgIGdldCBtb250aCgpIHtyZXR1cm4gbW9udGhzW2RhdGUuZ2V0TW9udGgoKV19LFxuICAgICAgICAgICAgZ2V0IHllYXIoKSB7cmV0dXJuIGRhdGUuZ2V0RnVsbFllYXIoKX0sXG4gICAgICAgICAgICBnZXQgaG91cigpIHtyZXR1cm4gZGF0ZS5nZXRIb3VycygpfSxcbiAgICAgICAgICAgIGdldCBtaW51dGUoKSB7cmV0dXJuIGRhdGUuZ2V0TWludXRlcygpfSxcbiAgICAgICAgICAgIGdldCBsb2NhbFRpbWUoKSB7cmV0dXJuIGRhdGUudG9Mb2NhbGVUaW1lU3RyaW5nKCkuc2xpY2UoMCwgLTYpLmNvbmNhdChkYXRlLnRvTG9jYWxlVGltZVN0cmluZygpLnNsaWNlKC0zKSk7fVxuICAgICAgICB9XG4gICAgICAgIGxldCBmb3JtYXR0ZWREYXRlO1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2RheSc6XG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkRGF0ZSA9IGRhdGVNYWtlci5kYXk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdkYXlOdW0nOlxuICAgICAgICAgICAgICAgIGZvcm1hdHRlZERhdGUgPSBkYXRlTWFrZXIuZGF5TnVtO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbW9udGgnOlxuICAgICAgICAgICAgICAgIGZvcm1hdHRlZERhdGUgPSBkYXRlTWFrZXIubW9udGg7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd5ZWFyJzpcbiAgICAgICAgICAgICAgICBmb3JtYXR0ZWREYXRlID0gZGF0ZU1ha2VyLnllYXI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdob3VyJzpcbiAgICAgICAgICAgICAgICBmb3JtYXR0ZWREYXRlID0gZGF0ZU1ha2VyLmhvdXI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdtaW51dGUnOlxuICAgICAgICAgICAgICAgIGZvcm1hdHRlZERhdGUgPSBkYXRlTWFrZXIubWludXRlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbG9jYWxUaW1lJzpcbiAgICAgICAgICAgICAgICBmb3JtYXR0ZWREYXRlID0gZGF0ZU1ha2VyLmxvY2FsVGltZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZm9ybWF0dGVkRGF0ZTtcbiAgICB9XG4gICAgZm9ybWF0TWFwc1VybChhZGRyZXNzKSB7XG4gICAgICAgIGxldCBmaXJzdFBhcnQgPSAnaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL3NlYXJjaC8/YXBpPTEmcXVlcnk9JztcbiAgICAgICAgbGV0IHNlY29uZFBhcnQgPSBlbmNvZGVVUklDb21wb25lbnQoYWRkcmVzcyk7XG4gICAgICAgIHJldHVybiBmaXJzdFBhcnQrc2Vjb25kUGFydDtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IGV2ZW50c0xpc3QgPSAoXG4gICAgICAgICAgICB0aGlzLnN0YXRlLmNhbGVuZGFyRXZlbnRzLm1hcCgoY2FsRXZlbnQsIGkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gIDxkaXYgY2xhc3NOYW1lPVwiZXZlbnRDYXJkXCIga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+e2NhbEV2ZW50LnN1bW1hcnl9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHNDb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV2ZW50XCI+PGltZyBjbGFzc05hbWU9XCJpY29uXCIgc3JjPXtyZXF1aXJlKCcuLi9wdWJsaWMvdGltZS1pY29uLTAxLnN2ZycpfSAvPjxwIGNsYXNzTmFtZT1cInRpbWVcIj57dGhpcy5kYXRlKGNhbEV2ZW50LnN0YXJ0LmRhdGVUaW1lLCAnZGF5Jyl9LCB7dGhpcy5kYXRlKGNhbEV2ZW50LnN0YXJ0LmRhdGVUaW1lLCAnbW9udGgnKX0ge3RoaXMuZGF0ZShjYWxFdmVudC5zdGFydC5kYXRlVGltZSwgJ2RheU51bScpfSAge3RoaXMuZGF0ZShjYWxFdmVudC5zdGFydC5kYXRlVGltZSwgJ2xvY2FsVGltZScpfSAtIHt0aGlzLmRhdGUoY2FsRXZlbnQuZW5kLmRhdGVUaW1lLCAnbG9jYWxUaW1lJyl9PC9wPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJldmVudFwiPjxpbWcgY2xhc3NOYW1lPVwiaWNvblwiIHNyYz17cmVxdWlyZSgnLi4vcHVibGljL3Bpbi1pY29uLTAxLnN2ZycpfSAvPjxwIGNsYXNzTmFtZT1cInBpblwiPntjYWxFdmVudC5sb2NhdGlvbn08L3A+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV2ZW50XCI+PGltZyBjbGFzc05hbWU9XCJpY29uXCIgc3JjPXtyZXF1aXJlKCcuLi9wdWJsaWMvZGVzY3JpcHRpb24taWNvbi0wMS5zdmcnKX0gLz48cCBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPntjYWxFdmVudC5kZXNjcmlwdGlvbn08L3A+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV2ZW50XCI+PGltZyBjbGFzc05hbWU9XCJpY29uXCIgc3JjPXtyZXF1aXJlKCcuLi9wdWJsaWMvbmF2aWdhdGUtaWNvbi0wMS5zdmcnKX0gLz48cCBjbGFzc05hbWU9XCJuYXZpZ2F0ZVwiPjxhIGNsYXNzTmFtZT1cImRpcmVjdGlvbnNcIiBhbHQ9XCJkaXJlY3Rpb25zIGxpbmtcIiBocmVmPXt0aGlzLmZvcm1hdE1hcHNVcmwoY2FsRXZlbnQubG9jYXRpb24pfT5OYXZpZ2F0ZTwvYT48L3A+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJldmVudFwiPjxpbWcgY2xhc3NOYW1lPVwiaWNvblwiIHNyYz17cmVxdWlyZSgnLi4vcHVibGljL2NhbGVuZGFyLWljb24tMDEuc3ZnJyl9IC8+PHAgY2xhc3NOYW1lPVwiY2FsZW5kYXJcIj48YSBjbGFzc05hbWU9XCJvcGVuSW5DYWxlbmRhclwiIGhyZWY9e2NhbEV2ZW50Lmh0bWxMaW5rfT5DYWxlbmRhcjwvYT48L3A+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgICAgICAuZXZlbnRDYXJkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMnJlbSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuZXZlbnRDYXJkOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxLjJyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogM3B4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLmV2ZW50IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC50aW1lIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgLnBpbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA5cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhbGVuZGFyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5uYXZpZ2F0ZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDlweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5idXR0b25zIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMXJlbSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuZXZlbnQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLmJ1dHRvbnMgLmV2ZW50OmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMCAxcmVtIDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuYnV0dG9ucyAuZXZlbnQ6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxcmVtIDAgMCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAuYnV0dG9uczpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLmJ1dHRvbnMgLmV2ZW50IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2Y2OWQxYTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIGVhc2UgLjVzO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAuYnV0dG9ucyAuZXZlbnQ6aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuYnV0dG9ucyAuZXZlbnQgLm5hdmlnYXRlIC5kaXJlY3Rpb25zLCAuYnV0dG9ucyAuZXZlbnQgLmNhbGVuZGFyIC5vcGVuSW5DYWxlbmRhciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuYnV0dG9ucyAuaWNvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAuYnV0dG9ucyAuZXZlbnQ6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIC5idXR0b25zIC5ldmVudDpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo1MDBweCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5idXR0b25zIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdyFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJlZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmJ1dHRvbnMgLmV2ZW50OmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDFyZW0gMCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYnV0dG9ucyAuZXZlbnQ6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwIDAgMXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxTdHlsZUJhc2U+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjYWxlbmRhclBhZ2VDb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhbGVuZGFyUGFnZVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm51bU9mRXZlbnRzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPHAgY2xhc3NOYW1lPVwidGl0bGVcIj5UaGVyZSBhcmUge3RoaXMuc3RhdGUuY2FsZW5kYXJFdmVudHMubGVuZ3RofSB1cGNvbWluZyBldmVudHMgdGhpcyBtb250aC48L3A+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgPE51bWJlck9mRXZlbnRzIGV2ZW50cz17dGhpcy5zdGF0ZS5jYWxlbmRhckV2ZW50cy5sZW5ndGh9IGVycm9yPXt0aGlzLnN0YXRlLmZldGNoRXJyb3J9Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJldmVudExpc3RDb250YWluZXJcIj57ZXZlbnRzTGlzdH08L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgIDwvU3R5bGVCYXNlPlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYWxlbmRhcjsiXX0= */\n/*@ sourceURL=/Users/sam.davis-castro/Desktop/bellflower-site-nextjs/pages/calendar.js */"));
      });
      return __jsx(_components_StyleBase__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      }, __jsx("section", {
        className: "calendarPageContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      }, __jsx("div", {
        className: "calendarPage",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }, __jsx("div", {
        className: "numOfEvents",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        },
        __self: this
      }, __jsx(_components_NumberOfEvents__WEBPACK_IMPORTED_MODULE_11__["default"], {
        events: this.state.calendarEvents.length,
        error: this.state.fetchError,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        },
        __self: this
      })), __jsx("div", {
        className: "eventListContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
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
//# sourceMappingURL=calendar.js.95f4fa220cec27f0e98c.hot-update.js.map