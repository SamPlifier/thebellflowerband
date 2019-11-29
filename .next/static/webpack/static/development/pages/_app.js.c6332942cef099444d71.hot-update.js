webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/EmailForm2.js":
/*!**********************************!*\
  !*** ./components/EmailForm2.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "/Users/sam.davis-castro/Desktop/bellflower-site-nextjs/components/EmailForm2.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;



var EmailForm2 = function EmailForm2() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    sending: false,
    status: null
  }),
      serverState = _useState[0],
      setServerState = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({}),
      fieldErrors = _useState2[0],
      setFieldErrors = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    email: '',
    message: ''
  }),
      inputs = _useState3[0],
      setInputs = _useState3[1];

  var validityRules = {
    email: function email(val) {
      val && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
    },
    message: function message(val) {
      return !!val;
    }
  }; // const validate = () => {
  //     let errors = {};
  //     let hasErrors = false;
  //     for (let key of Object.keys(inputs)) {
  //         errors[key] = !validityRules[key](inputs[key]);
  //         hasErrors |= errors[key];
  //     }
  //     setFieldErrors(prev => ({ ...prev, ...errors }));
  //     return !hasErrors;
  // };
  // const renderFieldError = field => {
  //     console.log(!fieldErrors[field]);
  //     // if (!fieldErrors[field]) {
  //     //     return <p className="errorMsg">Please enter a valid {field}</p>
  //     // }
  // };
  // useEffect(() => {
  //     if (Object.keys(fieldErrors).length > 0) {
  //       validate();
  //     }
  //   }, [inputs]);

  var handleOnChange = function handleOnChange(event) {
    event.persist();
    setInputs(function (prev) {
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, prev, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, event.target.id, event.target.value));
    });
  };

  var handleServerResponse = function handleServerResponse(ok, msg) {
    setServerState({
      sending: false,
      status: {
        ok: ok,
        msg: msg
      }
    });

    if (ok) {
      setFieldErrors({});
      setInputs({
        email: '',
        message: ''
      });
    }
  };

  var handleFormSubmit = function handleFormSubmit(e) {
    // if (!validate()) {
    //     return;
    // }
    e.preventDefault();
    setServerState({
      sending: true
    });
    axios__WEBPACK_IMPORTED_MODULE_4___default()({
      method: 'post',
      url: 'https://formspree.io/mbjllqae',
      data: new FormData(form)
    }).then(function (resp) {
      handleServerResponse(true, 'Message sent. Thanks!');
    })["catch"](function (resp) {
      handleServerResponse(false, resp.response.data.error, form);
    });
  };

  return __jsx("div", {
    className: "jsx-1141248355",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-1141248355",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, "GET IN TOUCH"), __jsx("form", {
    onSubmit: handleFormSubmit,
    noValidate: true,
    className: "jsx-1141248355",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "email",
    className: "jsx-1141248355",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, "Email"), __jsx("input", {
    value: inputs.email,
    onChange: handleOnChange,
    id: "email",
    type: "email",
    name: "email",
    noValidate: true,
    autoComplete: "off",
    required: true,
    className: "jsx-1141248355",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }), __jsx("label", {
    htmlFor: "message",
    className: "jsx-1141248355",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, "Message"), __jsx("textarea", {
    value: inputs.message,
    onChange: handleOnChange,
    id: "message",
    type: "text",
    name: "message",
    rows: "2",
    noValidate: true,
    required: true,
    className: "jsx-1141248355",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }), __jsx("button", {
    type: "submit",
    disable: serverState.sending.toString(),
    onClick: handleFormSubmit,
    className: "jsx-1141248355",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, "SEND"), serverState.status && __jsx("p", {
    className: "jsx-1141248355" + " " + ((!serverState.status.ok ? "errorMsg" : "") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, serverState.status.msg)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1141248355",
    __self: this
  }, "form.jsx-1141248355{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:space-between;-webkit-box-align:space-between;-ms-flex-align:space-between;align-items:space-between;padding-bottom:1rem;}form.jsx-1141248355 label.jsx-1141248355{text-align:left;}label.jsx-1141248355,button.jsx-1141248355{margin-top:1rem;}input.jsx-1141248355,textarea.jsx-1141248355{margin-top:.5rem;}form.jsx-1141248355 textarea.jsx-1141248355{resize:vertical;}button.jsx-1141248355{color:#fff;margin-top:2rem;background:#d81e5b;padding:1rem 1.5rem;border:2px solid #fff;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW0uZGF2aXMtY2FzdHJvL0Rlc2t0b3AvYmVsbGZsb3dlci1zaXRlLW5leHRqcy9jb21wb25lbnRzL0VtYWlsRm9ybTIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0h3QixBQUd3QixBQU9HLEFBR0EsQUFHQyxBQUdELEFBR0wsV0FDSyxLQVpsQixBQUdBLEFBTUEsQ0FIQSxVQU9xQixtQkFDQyxvQkFDRSxRQXRCQSxjQXVCeEIsZ0VBdEI2Qix5R0FDRCx5SEFDTixvQkFDdEIiLCJmaWxlIjoiL1VzZXJzL3NhbS5kYXZpcy1jYXN0cm8vRGVza3RvcC9iZWxsZmxvd2VyLXNpdGUtbmV4dGpzL2NvbXBvbmVudHMvRW1haWxGb3JtMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3QgRW1haWxGb3JtMiA9ICgpID0+IHtcbiAgICBjb25zdCBbc2VydmVyU3RhdGUsIHNldFNlcnZlclN0YXRlXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgc2VuZGluZzogZmFsc2UsXG4gICAgICAgIHN0YXR1czogbnVsbFxuICAgIH0pO1xuICAgIGNvbnN0IFtmaWVsZEVycm9ycywgc2V0RmllbGRFcnJvcnNdID0gdXNlU3RhdGUoe30pO1xuICAgIGNvbnN0IFtpbnB1dHMsIHNldElucHV0c10gPSB1c2VTdGF0ZSh7XG4gICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgbWVzc2FnZTogJydcbiAgICB9KTtcbiAgICBjb25zdCB2YWxpZGl0eVJ1bGVzID0ge1xuICAgICAgICBlbWFpbDogdmFsID0+IHt2YWwgJiYgL15bXlxcc0BdK0BbXlxcc0BdK1xcLlteXFxzQF0rJC8udGVzdCh2YWwpfSxcbiAgICAgICAgbWVzc2FnZTogdmFsID0+ICEhdmFsXG4gICAgfTtcblxuICAgIC8vIGNvbnN0IHZhbGlkYXRlID0gKCkgPT4ge1xuICAgIC8vICAgICBsZXQgZXJyb3JzID0ge307XG4gICAgLy8gICAgIGxldCBoYXNFcnJvcnMgPSBmYWxzZTtcbiAgICAvLyAgICAgZm9yIChsZXQga2V5IG9mIE9iamVjdC5rZXlzKGlucHV0cykpIHtcbiAgICAvLyAgICAgICAgIGVycm9yc1trZXldID0gIXZhbGlkaXR5UnVsZXNba2V5XShpbnB1dHNba2V5XSk7XG4gICAgLy8gICAgICAgICBoYXNFcnJvcnMgfD0gZXJyb3JzW2tleV07XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgc2V0RmllbGRFcnJvcnMocHJldiA9PiAoeyAuLi5wcmV2LCAuLi5lcnJvcnMgfSkpO1xuICAgIC8vICAgICByZXR1cm4gIWhhc0Vycm9ycztcbiAgICAvLyB9O1xuICAgIC8vIGNvbnN0IHJlbmRlckZpZWxkRXJyb3IgPSBmaWVsZCA9PiB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKCFmaWVsZEVycm9yc1tmaWVsZF0pO1xuICAgICAgICBcbiAgICAvLyAgICAgLy8gaWYgKCFmaWVsZEVycm9yc1tmaWVsZF0pIHtcbiAgICAvLyAgICAgLy8gICAgIHJldHVybiA8cCBjbGFzc05hbWU9XCJlcnJvck1zZ1wiPlBsZWFzZSBlbnRlciBhIHZhbGlkIHtmaWVsZH08L3A+XG4gICAgLy8gICAgIC8vIH1cbiAgICAvLyB9O1xuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gICAgIGlmIChPYmplY3Qua2V5cyhmaWVsZEVycm9ycykubGVuZ3RoID4gMCkge1xuICAgIC8vICAgICAgIHZhbGlkYXRlKCk7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgIH0sIFtpbnB1dHNdKTtcblxuICAgIGNvbnN0IGhhbmRsZU9uQ2hhbmdlID0gZXZlbnQgPT4ge1xuICAgICAgICBldmVudC5wZXJzaXN0KCk7XG4gICAgICAgIHNldElucHV0cyhwcmV2ID0+ICh7XG4gICAgICAgICAgICAuLi5wcmV2LFxuICAgICAgICAgICAgW2V2ZW50LnRhcmdldC5pZF06IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICB9KSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZVNlcnZlclJlc3BvbnNlID0gKG9rLCBtc2cpID0+IHtcbiAgICAgICAgc2V0U2VydmVyU3RhdGUoe1xuICAgICAgICAgICAgc2VuZGluZzogZmFsc2UsXG4gICAgICAgICAgICBzdGF0dXM6IHsgb2ssIG1zZyB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAob2spIHtcbiAgICAgICAgICAgIHNldEZpZWxkRXJyb3JzKHt9KTtcbiAgICAgICAgICAgIHNldElucHV0cyh7XG4gICAgICAgICAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICcnXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZUZvcm1TdWJtaXQgPSBlID0+IHtcbiAgICAgICAgLy8gaWYgKCF2YWxpZGF0ZSgpKSB7XG4gICAgICAgIC8vICAgICByZXR1cm47XG4gICAgICAgIC8vIH1cbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBzZXRTZXJ2ZXJTdGF0ZSh7IHNlbmRpbmc6IHRydWUgfSk7XG4gICAgICAgIGF4aW9zKHtcbiAgICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9mb3Jtc3ByZWUuaW8vbWJqbGxxYWUnLFxuICAgICAgICAgICAgZGF0YTogbmV3IEZvcm1EYXRhKGZvcm0pXG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXNwID0+IHtcbiAgICAgICAgICAgICAgICBoYW5kbGVTZXJ2ZXJSZXNwb25zZSh0cnVlLCAnTWVzc2FnZSBzZW50LiBUaGFua3MhJyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKHJlc3AgPT4ge1xuICAgICAgICAgICAgICAgIGhhbmRsZVNlcnZlclJlc3BvbnNlKGZhbHNlLCByZXNwLnJlc3BvbnNlLmRhdGEuZXJyb3IsIGZvcm0pO1xuICAgICAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgyPkdFVCBJTiBUT1VDSDwvaDI+XG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlRm9ybVN1Ym1pdH0gbm9WYWxpZGF0ZT5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nZW1haWwnPkVtYWlsPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0cy5lbWFpbH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU9uQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICBpZD0nZW1haWwnXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9J2VtYWlsJ1xuICAgICAgICAgICAgICAgICAgICBuYW1lPSdlbWFpbCdcbiAgICAgICAgICAgICAgICAgICAgbm9WYWxpZGF0ZVxuICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIHsvKiB7cmVuZGVyRmllbGRFcnJvcihcImVtYWlsXCIpfSAqL31cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nbWVzc2FnZSc+TWVzc2FnZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpbnB1dHMubWVzc2FnZX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU9uQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICBpZD0nbWVzc2FnZSdcbiAgICAgICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgICAgICAgICAgICAgbmFtZT0nbWVzc2FnZSdcbiAgICAgICAgICAgICAgICAgICAgcm93cz0nMidcbiAgICAgICAgICAgICAgICAgICAgbm9WYWxpZGF0ZVxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgey8qIHtyZW5kZXJGaWVsZEVycm9yKCdtZXNzYWdlJyl9ICovfVxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0JyBkaXNhYmxlPXtzZXJ2ZXJTdGF0ZS5zZW5kaW5nLnRvU3RyaW5nKCl9IG9uQ2xpY2s9e2hhbmRsZUZvcm1TdWJtaXR9PlNFTkQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICB7c2VydmVyU3RhdGUuc3RhdHVzICYmIChcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXshc2VydmVyU3RhdGUuc3RhdHVzLm9rID8gXCJlcnJvck1zZ1wiIDogXCJcIn0+e3NlcnZlclN0YXRlLnN0YXR1cy5tc2d9PC9wPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGZvcm0ge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gICAgICAgIH1cbiAgICAgICAgZm9ybSBsYWJlbCB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgfVxuICAgICAgICBsYWJlbCwgYnV0dG9uIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgICAgICB9XG4gICAgICAgIGlucHV0LCB0ZXh0YXJlYSB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogLjVyZW07XG4gICAgICAgIH1cbiAgICAgICAgZm9ybSB0ZXh0YXJlYSB7XG4gICAgICAgICAgcmVzaXplOiB2ZXJ0aWNhbDtcbiAgICAgICAgfVxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgICAgICAgYmFja2dyb3VuZDogI2Q4MWU1YjtcbiAgICAgICAgICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRW1haWxGb3JtMjtcbiJdfQ== */\n/*@ sourceURL=/Users/sam.davis-castro/Desktop/bellflower-site-nextjs/components/EmailForm2.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (EmailForm2);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "./node_modules/core-js/library/fn/object/get-own-property-symbols.js");

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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./node_modules/core-js/library/fn/object/get-own-property-symbols.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/get-own-property-symbols.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.symbol */ "./node_modules/core-js/library/modules/es6.symbol.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.getOwnPropertySymbols;


/***/ })

})
//# sourceMappingURL=_app.js.c6332942cef099444d71.hot-update.js.map