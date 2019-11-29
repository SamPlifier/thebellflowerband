webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/EmailForm.js":
/*!*********************************!*\
  !*** ./components/EmailForm.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyForm; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);






var _jsxFileName = "/Users/sam.davis-castro/Desktop/bellflower-site-nextjs/components/EmailForm.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;
 // import EmailForm2 from "./EmailForm2";

var MyForm =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(MyForm, _React$Component);

  function MyForm(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MyForm);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(MyForm).call(this, props));
    _this.submitForm = _this.submitForm.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.state = {
      status: ""
    }; // add function to check form validation, if all clear, then send

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MyForm, [{
    key: "render",
    value: function render() {
      var status = this.state.status;
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, __jsx("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, "DROP US A LINE?"), __jsx("form", {
        // call validation function first
        onSubmit: this.submitForm,
        action: "https://formspree.io/mbjllqae",
        method: "POST",
        className: "jsx-3997247975",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, __jsx("label", {
        className: "jsx-3997247975",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "Email"), __jsx("input", {
        type: "email",
        name: "email",
        className: "jsx-3997247975",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }), __jsx("label", {
        className: "jsx-3997247975",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, "Message"), __jsx("textarea", {
        type: "text",
        name: "message",
        className: "jsx-3997247975",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }), status === "SUCCESS" ? __jsx("p", {
        className: "jsx-3997247975",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, "Thanks!") : __jsx("button", {
        className: "jsx-3997247975",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, "SUBMIT"), status === "ERROR" && __jsx("p", {
        className: "jsx-3997247975",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, "Oops, tech fail. Try emailing us at thebellflowerband@gmail.com"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "3997247975",
        __self: this
      }, "form.jsx-3997247975{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:space-between;-webkit-box-align:space-between;-ms-flex-align:space-between;align-items:space-between;padding-bottom:1rem;}form.jsx-3997247975 label.jsx-3997247975{text-align:left;}label.jsx-3997247975,button.jsx-3997247975{margin-top:1rem;}button.jsx-3997247975{margin-top:2rem;}input.jsx-3997247975,textarea.jsx-3997247975{margin-top:.5rem;}form.jsx-3997247975 textarea.jsx-3997247975{resize:vertical;}button.jsx-3997247975{color:#fff;background:#d81e5b;padding:1rem 1.5rem;border:2px solid #fff;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW0uZGF2aXMtY2FzdHJvL0Rlc2t0b3AvYmVsbGZsb3dlci1zaXRlLW5leHRqcy9jb21wb25lbnRzL0VtYWlsRm9ybS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQ3NCLEFBRzRCLEFBT0csQUFHQSxBQUdBLEFBR0MsQUFHRCxBQUdMLFdBQ1EsS0FmckIsQUFHQSxBQUdBLEFBTUEsQ0FIQSxhQU9zQixvQkFDRSxzQkFDMUIsRUF6QjBCLDhFQUNLLHlHQUNELHlIQUNOLG9CQUN0QiIsImZpbGUiOiIvVXNlcnMvc2FtLmRhdmlzLWNhc3Ryby9EZXNrdG9wL2JlbGxmbG93ZXItc2l0ZS1uZXh0anMvY29tcG9uZW50cy9FbWFpbEZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG4vLyBpbXBvcnQgRW1haWxGb3JtMiBmcm9tIFwiLi9FbWFpbEZvcm0yXCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdWJtaXRGb3JtID0gdGhpcy5zdWJtaXRGb3JtLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHN0YXR1czogXCJcIlxuICAgIH07XG4gICAgLy8gYWRkIGZ1bmN0aW9uIHRvIGNoZWNrIGZvcm0gdmFsaWRhdGlvbiwgaWYgYWxsIGNsZWFyLCB0aGVuIHNlbmRcbiAgfVxuICBcbiAgXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHN0YXR1cyB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgyPkRST1AgVVMgQSBMSU5FPzwvaDI+XG4gICAgICAgIDxmb3JtXG4gICAgICAgICAgLy8gY2FsbCB2YWxpZGF0aW9uIGZ1bmN0aW9uIGZpcnN0XG4gICAgICAgICAgb25TdWJtaXQ9e3RoaXMuc3VibWl0Rm9ybX1cbiAgICAgICAgICBhY3Rpb249XCJodHRwczovL2Zvcm1zcHJlZS5pby9tYmpsbHFhZVwiXG4gICAgICAgICAgbWV0aG9kPVwiUE9TVFwiXG4gICAgICAgID5cbiAgICAgICAgICA8bGFiZWw+RW1haWw8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiAvPlxuICAgICAgICAgIDxsYWJlbD5NZXNzYWdlPC9sYWJlbD5cbiAgICAgICAgICA8dGV4dGFyZWEgdHlwZT1cInRleHRcIiBuYW1lPVwibWVzc2FnZVwiIC8+XG4gICAgICAgICAge3N0YXR1cyA9PT0gXCJTVUNDRVNTXCIgPyA8cD5UaGFua3MhPC9wPiA6IDxidXR0b24+U1VCTUlUPC9idXR0b24+fVxuICAgICAgICAgIHtzdGF0dXMgPT09IFwiRVJST1JcIiAmJiA8cD5Pb3BzLCB0ZWNoIGZhaWwuIFRyeSBlbWFpbGluZyB1cyBhdCB0aGViZWxsZmxvd2VyYmFuZEBnbWFpbC5jb208L3A+fVxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIGZvcm0ge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvcm0gbGFiZWwge1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGFiZWwsIGJ1dHRvbiB7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW5wdXQsIHRleHRhcmVhIHtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLjVyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3JtIHRleHRhcmVhIHtcbiAgICAgICAgICAgICAgcmVzaXplOiB2ZXJ0aWNhbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZDgxZTViO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcbiAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbiAgICAgICAgICB9XG4gICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgc3VibWl0Rm9ybShldikge1xuICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZm9ybSA9IGV2LnRhcmdldDtcbiAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKGZvcm0pO1xuICAgIGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIHhoci5vcGVuKGZvcm0ubWV0aG9kLCBmb3JtLmFjdGlvbik7XG4gICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJBY2NlcHRcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xuICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XG4gICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgIT09IFhNTEh0dHBSZXF1ZXN0LkRPTkUpIHJldHVybjtcbiAgICAgIGlmICh4aHIuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgZm9ybS5yZXNldCgpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc3RhdHVzOiBcIlNVQ0NFU1NcIiB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzdGF0dXM6IFwiRVJST1JcIiB9KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHhoci5zZW5kKGRhdGEpO1xuICB9XG59XG5cbi8vIGV4cG9ydCBkZWZhdWx0IE15Rm9ybTsiXX0= */\n/*@ sourceURL=/Users/sam.davis-castro/Desktop/bellflower-site-nextjs/components/EmailForm.js */")));
    }
  }, {
    key: "submitForm",
    value: function submitForm(ev) {
      var _this2 = this;

      ev.preventDefault();
      var form = ev.target;
      var data = new FormData(form);
      var xhr = new XMLHttpRequest();
      xhr.open(form.method, form.action);
      xhr.setRequestHeader("Accept", "application/json");

      xhr.onreadystatechange = function () {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;

        if (xhr.status === 200) {
          form.reset();

          _this2.setState({
            status: "SUCCESS"
          });
        } else {
          _this2.setState({
            status: "ERROR"
          });
        }
      };

      xhr.send(data);
    }
  }]);

  return MyForm;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component); // export default MyForm;




/***/ }),

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_StyleBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/StyleBase */ "./components/StyleBase.js");
/* harmony import */ var _components_EmailForm2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/EmailForm2 */ "./components/EmailForm2.js");
/* harmony import */ var _components_EmailForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/EmailForm */ "./components/EmailForm.js");
/* harmony import */ var _components_Map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Map */ "./components/Map.js");
var _jsxFileName = "/Users/sam.davis-castro/Desktop/bellflower-site-nextjs/components/Footer.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var Footer = function Footer() {
  return __jsx(_components_StyleBase__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("section", {
    className: "jsx-181592782" + " " + "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx(_components_EmailForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), __jsx(_components_Map__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-181592782" + " " + "socialIcons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("img", {
    src: __webpack_require__(/*! ../public/social_icons/facebook.svg */ "./public/social_icons/facebook.svg"),
    className: "jsx-181592782",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), __jsx("img", {
    src: __webpack_require__(/*! ../public/social_icons/twitter.svg */ "./public/social_icons/twitter.svg"),
    className: "jsx-181592782",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), __jsx("img", {
    src: __webpack_require__(/*! ../public/social_icons/youtube.svg */ "./public/social_icons/youtube.svg"),
    className: "jsx-181592782",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "181592782",
    __self: this
  }, ".footer.jsx-181592782{border-top:2px solid #fff;}.socialIcons.jsx-181592782{margin:1rem 0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.socialIcons.jsx-181592782 img.jsx-181592782{height:100%;max-width:50px;}#map.jsx-181592782{height:300px;width:100%;}.socialIcons.jsx-181592782{-webkit-filter:invert(100%);filter:invert(100%);height:50px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW0uZGF2aXMtY2FzdHJvL0Rlc2t0b3AvYmVsbGZsb3dlci1zaXRlLW5leHRqcy9jb21wb25lbnRzL0Zvb3Rlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQm9CLEFBR3VDLEFBR1osQUFLRixBQUlDLEFBSVMsWUFQUCxDQUlKLENBVEUsVUFVZixFQWJGLENBU0EscUJBT2tCLFlBQ2hCLDRCQWIrQiwySEFDakMiLCJmaWxlIjoiL1VzZXJzL3NhbS5kYXZpcy1jYXN0cm8vRGVza3RvcC9iZWxsZmxvd2VyLXNpdGUtbmV4dGpzL2NvbXBvbmVudHMvRm9vdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN0eWxlQmFzZSBmcm9tICcuLi9jb21wb25lbnRzL1N0eWxlQmFzZSc7XG5pbXBvcnQgRW1haWxGb3JtMiBmcm9tICcuLi9jb21wb25lbnRzL0VtYWlsRm9ybTInO1xuaW1wb3J0IE15Rm9ybSBmcm9tICcuLi9jb21wb25lbnRzL0VtYWlsRm9ybSc7XG5pbXBvcnQgTWFwIGZyb20gJy4uL2NvbXBvbmVudHMvTWFwJztcblxuY29uc3QgRm9vdGVyID0gKCkgPT4ge1xuICAgIFxuICAgIHJldHVybiAoXG4gICAgICAgIDxTdHlsZUJhc2U+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJmb290ZXJcIj5cbiAgICAgICAgICAgICAgICB7LyogPEVtYWlsRm9ybTIgLz4gKi99XG4gICAgICAgICAgICAgICAgPE15Rm9ybSAvPlxuICAgICAgICAgICAgICAgIDxNYXAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsSWNvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3JlcXVpcmUoJy4uL3B1YmxpYy9zb2NpYWxfaWNvbnMvZmFjZWJvb2suc3ZnJyl9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtyZXF1aXJlKCcuLi9wdWJsaWMvc29jaWFsX2ljb25zL3R3aXR0ZXIuc3ZnJyl9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtyZXF1aXJlKCcuLi9wdWJsaWMvc29jaWFsX2ljb25zL3lvdXR1YmUuc3ZnJyl9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmZvb3RlciB7XG4gICAgICAgICAgICBib3JkZXItdG9wOiAycHggc29saWQgI2ZmZjtcbiAgICAgICAgfVxuICAgICAgICAuc29jaWFsSWNvbnMge1xuICAgICAgICAgICAgbWFyZ2luOiAxcmVtIDA7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgIH1cbiAgICAgICAgLnNvY2lhbEljb25zIGltZyB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDUwcHg7XG4gICAgICAgIH1cbiAgICAgICAgI21hcCB7XG4gICAgICAgICAgICBoZWlnaHQ6IDMwMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zb2NpYWxJY29ucyB7XG4gICAgICAgICAgICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvU3R5bGVCYXNlPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyOyJdfQ== */\n/*@ sourceURL=/Users/sam.davis-castro/Desktop/bellflower-site-nextjs/components/Footer.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ })

})
//# sourceMappingURL=_app.js.fb6b5f016d986f76acc0.hot-update.js.map