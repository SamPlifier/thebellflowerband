webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/EmailForm2.js":
/*!**********************************!*\
  !*** ./components/EmailForm2.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/sam.davis-castro/Desktop/bellflower-site-nextjs/components/EmailForm2.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var EmailForm2 = function EmailForm2() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    sending: false,
    status: null
  }),
      serverState = _useState[0],
      setServerState = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      fieldErrors = _useState2[0],
      setFieldErrors = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
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
  // const handleOnChange = event => {
  //     event.persist();
  //     setInputs(prev => ({
  //         ...prev,
  //         [event.target.id]: event.target.value
  //     }));
  // };

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
    axios__WEBPACK_IMPORTED_MODULE_2___default()({
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
      lineNumber: 82
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-1141248355",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, "GET IN TOUCH"), __jsx("form", {
    onSubmit: handleFormSubmit,
    noValidate: true,
    className: "jsx-1141248355",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "email",
    className: "jsx-1141248355",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, "Email"), __jsx("input", {
    value: inputs.email // onChange={handleOnChange}
    ,
    id: "email",
    type: "email",
    name: "email",
    noValidate: true,
    autoComplete: "off",
    required: true,
    className: "jsx-1141248355",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }), __jsx("label", {
    htmlFor: "message",
    className: "jsx-1141248355",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, "Message"), __jsx("textarea", {
    value: inputs.message // onChange={handleOnChange}
    ,
    id: "message",
    type: "text",
    name: "message",
    rows: "2",
    noValidate: true,
    required: true,
    className: "jsx-1141248355",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }), __jsx("button", {
    type: "submit",
    disable: serverState.sending.toString(),
    onClick: handleFormSubmit,
    className: "jsx-1141248355",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, "SEND"), serverState.status && __jsx("p", {
    className: "jsx-1141248355" + " " + ((!serverState.status.ok ? "errorMsg" : "") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, serverState.status.msg)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1141248355",
    __self: this
  }, "form.jsx-1141248355{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:space-between;-webkit-box-align:space-between;-ms-flex-align:space-between;align-items:space-between;padding-bottom:1rem;}form.jsx-1141248355 label.jsx-1141248355{text-align:left;}label.jsx-1141248355,button.jsx-1141248355{margin-top:1rem;}input.jsx-1141248355,textarea.jsx-1141248355{margin-top:.5rem;}form.jsx-1141248355 textarea.jsx-1141248355{resize:vertical;}button.jsx-1141248355{color:#fff;margin-top:2rem;background:#d81e5b;padding:1rem 1.5rem;border:2px solid #fff;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW0uZGF2aXMtY2FzdHJvL0Rlc2t0b3AvYmVsbGZsb3dlci1zaXRlLW5leHRqcy9jb21wb25lbnRzL0VtYWlsRm9ybTIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUh3QixBQUd3QixBQU9HLEFBR0EsQUFHQyxBQUdELEFBR0wsV0FDSyxLQVpsQixBQUdBLEFBTUEsQ0FIQSxVQU9xQixtQkFDQyxvQkFDRSxRQXRCQSxjQXVCeEIsZ0VBdEI2Qix5R0FDRCx5SEFDTixvQkFDdEIiLCJmaWxlIjoiL1VzZXJzL3NhbS5kYXZpcy1jYXN0cm8vRGVza3RvcC9iZWxsZmxvd2VyLXNpdGUtbmV4dGpzL2NvbXBvbmVudHMvRW1haWxGb3JtMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3QgRW1haWxGb3JtMiA9ICgpID0+IHtcbiAgICBjb25zdCBbc2VydmVyU3RhdGUsIHNldFNlcnZlclN0YXRlXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgc2VuZGluZzogZmFsc2UsXG4gICAgICAgIHN0YXR1czogbnVsbFxuICAgIH0pO1xuICAgIGNvbnN0IFtmaWVsZEVycm9ycywgc2V0RmllbGRFcnJvcnNdID0gdXNlU3RhdGUoe30pO1xuICAgIGNvbnN0IFtpbnB1dHMsIHNldElucHV0c10gPSB1c2VTdGF0ZSh7XG4gICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgbWVzc2FnZTogJydcbiAgICB9KTtcbiAgICBjb25zdCB2YWxpZGl0eVJ1bGVzID0ge1xuICAgICAgICBlbWFpbDogdmFsID0+IHt2YWwgJiYgL15bXlxcc0BdK0BbXlxcc0BdK1xcLlteXFxzQF0rJC8udGVzdCh2YWwpfSxcbiAgICAgICAgbWVzc2FnZTogdmFsID0+ICEhdmFsXG4gICAgfTtcbiAgICAvLyBjb25zdCB2YWxpZGF0ZSA9ICgpID0+IHtcbiAgICAvLyAgICAgbGV0IGVycm9ycyA9IHt9O1xuICAgIC8vICAgICBsZXQgaGFzRXJyb3JzID0gZmFsc2U7XG4gICAgLy8gICAgIGZvciAobGV0IGtleSBvZiBPYmplY3Qua2V5cyhpbnB1dHMpKSB7XG4gICAgLy8gICAgICAgICBlcnJvcnNba2V5XSA9ICF2YWxpZGl0eVJ1bGVzW2tleV0oaW5wdXRzW2tleV0pO1xuICAgIC8vICAgICAgICAgaGFzRXJyb3JzIHw9IGVycm9yc1trZXldO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIHNldEZpZWxkRXJyb3JzKHByZXYgPT4gKHsgLi4ucHJldiwgLi4uZXJyb3JzIH0pKTtcbiAgICAvLyAgICAgcmV0dXJuICFoYXNFcnJvcnM7XG4gICAgLy8gfTtcbiAgICAvLyBjb25zdCByZW5kZXJGaWVsZEVycm9yID0gZmllbGQgPT4ge1xuICAgIC8vICAgICBjb25zb2xlLmxvZyghZmllbGRFcnJvcnNbZmllbGRdKTtcbiAgICAgICAgXG4gICAgLy8gICAgIC8vIGlmICghZmllbGRFcnJvcnNbZmllbGRdKSB7XG4gICAgLy8gICAgIC8vICAgICByZXR1cm4gPHAgY2xhc3NOYW1lPVwiZXJyb3JNc2dcIj5QbGVhc2UgZW50ZXIgYSB2YWxpZCB7ZmllbGR9PC9wPlxuICAgIC8vICAgICAvLyB9XG4gICAgLy8gfTtcbiAgICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vICAgICBpZiAoT2JqZWN0LmtleXMoZmllbGRFcnJvcnMpLmxlbmd0aCA+IDApIHtcbiAgICAvLyAgICAgICB2YWxpZGF0ZSgpO1xuICAgIC8vICAgICB9XG4gICAgLy8gICB9LCBbaW5wdXRzXSk7XG5cbiAgICAvLyBjb25zdCBoYW5kbGVPbkNoYW5nZSA9IGV2ZW50ID0+IHtcbiAgICAvLyAgICAgZXZlbnQucGVyc2lzdCgpO1xuICAgIC8vICAgICBzZXRJbnB1dHMocHJldiA9PiAoe1xuICAgIC8vICAgICAgICAgLi4ucHJldixcbiAgICAvLyAgICAgICAgIFtldmVudC50YXJnZXQuaWRdOiBldmVudC50YXJnZXQudmFsdWVcbiAgICAvLyAgICAgfSkpO1xuICAgIC8vIH07XG5cbiAgICBjb25zdCBoYW5kbGVTZXJ2ZXJSZXNwb25zZSA9IChvaywgbXNnKSA9PiB7XG4gICAgICAgIHNldFNlcnZlclN0YXRlKHtcbiAgICAgICAgICAgIHNlbmRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgc3RhdHVzOiB7IG9rLCBtc2cgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKG9rKSB7XG4gICAgICAgICAgICBzZXRGaWVsZEVycm9ycyh7fSk7XG4gICAgICAgICAgICBzZXRJbnB1dHMoe1xuICAgICAgICAgICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVGb3JtU3VibWl0ID0gZSA9PiB7XG4gICAgICAgIC8vIGlmICghdmFsaWRhdGUoKSkge1xuICAgICAgICAvLyAgICAgcmV0dXJuO1xuICAgICAgICAvLyB9XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgc2V0U2VydmVyU3RhdGUoeyBzZW5kaW5nOiB0cnVlIH0pO1xuICAgICAgICBheGlvcyh7XG4gICAgICAgICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vZm9ybXNwcmVlLmlvL21iamxscWFlJyxcbiAgICAgICAgICAgIGRhdGE6IG5ldyBGb3JtRGF0YShmb3JtKVxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzcCA9PiB7XG4gICAgICAgICAgICAgICAgaGFuZGxlU2VydmVyUmVzcG9uc2UodHJ1ZSwgJ01lc3NhZ2Ugc2VudC4gVGhhbmtzIScpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChyZXNwID0+IHtcbiAgICAgICAgICAgICAgICBoYW5kbGVTZXJ2ZXJSZXNwb25zZShmYWxzZSwgcmVzcC5yZXNwb25zZS5kYXRhLmVycm9yLCBmb3JtKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMj5HRVQgSU4gVE9VQ0g8L2gyPlxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZUZvcm1TdWJtaXR9IG5vVmFsaWRhdGU+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J2VtYWlsJz5FbWFpbDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpbnB1dHMuZW1haWx9XG4gICAgICAgICAgICAgICAgICAgIC8vIG9uQ2hhbmdlPXtoYW5kbGVPbkNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgaWQ9J2VtYWlsJ1xuICAgICAgICAgICAgICAgICAgICB0eXBlPSdlbWFpbCdcbiAgICAgICAgICAgICAgICAgICAgbmFtZT0nZW1haWwnXG4gICAgICAgICAgICAgICAgICAgIG5vVmFsaWRhdGVcbiAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB7Lyoge3JlbmRlckZpZWxkRXJyb3IoXCJlbWFpbFwiKX0gKi99XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J21lc3NhZ2UnPk1lc3NhZ2U8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRzLm1lc3NhZ2V9XG4gICAgICAgICAgICAgICAgICAgIC8vIG9uQ2hhbmdlPXtoYW5kbGVPbkNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgaWQ9J21lc3NhZ2UnXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9J21lc3NhZ2UnXG4gICAgICAgICAgICAgICAgICAgIHJvd3M9JzInXG4gICAgICAgICAgICAgICAgICAgIG5vVmFsaWRhdGVcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIHsvKiB7cmVuZGVyRmllbGRFcnJvcignbWVzc2FnZScpfSAqL31cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgZGlzYWJsZT17c2VydmVyU3RhdGUuc2VuZGluZy50b1N0cmluZygpfSBvbkNsaWNrPXtoYW5kbGVGb3JtU3VibWl0fT5TRU5EPC9idXR0b24+XG4gICAgICAgICAgICAgICAge3NlcnZlclN0YXRlLnN0YXR1cyAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17IXNlcnZlclN0YXRlLnN0YXR1cy5vayA/IFwiZXJyb3JNc2dcIiA6IFwiXCJ9PntzZXJ2ZXJTdGF0ZS5zdGF0dXMubXNnfTwvcD5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBmb3JtIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICAgICAgICB9XG4gICAgICAgIGZvcm0gbGFiZWwge1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIH1cbiAgICAgICAgbGFiZWwsIGJ1dHRvbiB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICAgICAgfVxuICAgICAgICBpbnB1dCwgdGV4dGFyZWEge1xuICAgICAgICAgIG1hcmdpbi10b3A6IC41cmVtO1xuICAgICAgICB9XG4gICAgICAgIGZvcm0gdGV4dGFyZWEge1xuICAgICAgICAgIHJlc2l6ZTogdmVydGljYWw7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNkODFlNWI7XG4gICAgICAgICAgcGFkZGluZzogMXJlbSAxLjVyZW07XG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEVtYWlsRm9ybTI7XG4iXX0= */\n/*@ sourceURL=/Users/sam.davis-castro/Desktop/bellflower-site-nextjs/components/EmailForm2.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (EmailForm2);

/***/ })

})
//# sourceMappingURL=_app.js.b547854537e25b8e36eb.hot-update.js.map