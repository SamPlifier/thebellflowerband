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
  };

  var emailChangeHandler = function emailChangeHandler(e) {
    e.persist();
    setIinputs.email = inputs.email += e;
  };

  var messagesChangeHandler = function messagesChangeHandler(e) {
    e.persist();
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
      lineNumber: 89
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-1141248355",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "GET IN TOUCH"), __jsx("form", {
    onSubmit: handleFormSubmit,
    noValidate: true,
    className: "jsx-1141248355",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, __jsx("label", {
    htmlFor: "email",
    className: "jsx-1141248355",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "Email"), __jsx("input", {
    value: inputs.email // onChange={handleOnChange}
    ,
    onChange: emailChangeHandler,
    id: "email",
    type: "email",
    name: "email",
    noValidate: true,
    autoComplete: "off",
    required: true,
    className: "jsx-1141248355",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }), __jsx("label", {
    htmlFor: "message",
    className: "jsx-1141248355",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, "Message"), __jsx("textarea", {
    value: inputs.message // onChange={handleOnChange}
    ,
    onChange: messagesChangeHandler,
    id: "message",
    type: "text",
    name: "message",
    rows: "2",
    noValidate: true,
    required: true,
    className: "jsx-1141248355",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }), __jsx("button", {
    type: "submit",
    disable: serverState.sending.toString(),
    onClick: handleFormSubmit,
    className: "jsx-1141248355",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, "SEND"), serverState.status && __jsx("p", {
    className: "jsx-1141248355" + " " + ((!serverState.status.ok ? "errorMsg" : "") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, serverState.status.msg)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1141248355",
    __self: this
  }, "form.jsx-1141248355{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:space-between;-webkit-box-align:space-between;-ms-flex-align:space-between;align-items:space-between;padding-bottom:1rem;}form.jsx-1141248355 label.jsx-1141248355{text-align:left;}label.jsx-1141248355,button.jsx-1141248355{margin-top:1rem;}input.jsx-1141248355,textarea.jsx-1141248355{margin-top:.5rem;}form.jsx-1141248355 textarea.jsx-1141248355{resize:vertical;}button.jsx-1141248355{color:#fff;margin-top:2rem;background:#d81e5b;padding:1rem 1.5rem;border:2px solid #fff;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW0uZGF2aXMtY2FzdHJvL0Rlc2t0b3AvYmVsbGZsb3dlci1zaXRlLW5leHRqcy9jb21wb25lbnRzL0VtYWlsRm9ybTIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEh3QixBQUd3QixBQU9HLEFBR0EsQUFHQyxBQUdELEFBR0wsV0FDSyxLQVpsQixBQUdBLEFBTUEsQ0FIQSxVQU9xQixtQkFDQyxvQkFDRSxRQXRCQSxjQXVCeEIsZ0VBdEI2Qix5R0FDRCx5SEFDTixvQkFDdEIiLCJmaWxlIjoiL1VzZXJzL3NhbS5kYXZpcy1jYXN0cm8vRGVza3RvcC9iZWxsZmxvd2VyLXNpdGUtbmV4dGpzL2NvbXBvbmVudHMvRW1haWxGb3JtMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3QgRW1haWxGb3JtMiA9ICgpID0+IHtcbiAgICBjb25zdCBbc2VydmVyU3RhdGUsIHNldFNlcnZlclN0YXRlXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgc2VuZGluZzogZmFsc2UsXG4gICAgICAgIHN0YXR1czogbnVsbFxuICAgIH0pO1xuICAgIGNvbnN0IFtmaWVsZEVycm9ycywgc2V0RmllbGRFcnJvcnNdID0gdXNlU3RhdGUoe30pO1xuICAgIGNvbnN0IFtpbnB1dHMsIHNldElucHV0c10gPSB1c2VTdGF0ZSh7XG4gICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgbWVzc2FnZTogJydcbiAgICB9KTtcbiAgICBjb25zdCB2YWxpZGl0eVJ1bGVzID0ge1xuICAgICAgICBlbWFpbDogdmFsID0+IHt2YWwgJiYgL15bXlxcc0BdK0BbXlxcc0BdK1xcLlteXFxzQF0rJC8udGVzdCh2YWwpfSxcbiAgICAgICAgbWVzc2FnZTogdmFsID0+ICEhdmFsXG4gICAgfTtcbiAgICBjb25zdCBlbWFpbENoYW5nZUhhbmRsZXIgPSAoZSkgPT4ge1xuICAgICAgICBlLnBlcnNpc3QoKTtcbiAgICAgICAgc2V0SWlucHV0cy5lbWFpbCA9IGlucHV0cy5lbWFpbCArPSBlO1xuICAgIH1cbiAgICBjb25zdCBtZXNzYWdlc0NoYW5nZUhhbmRsZXIgPSAoZSkgPT4ge1xuICAgICAgICBlLnBlcnNpc3QoKTtcbiAgICB9XG4gICAgLy8gY29uc3QgdmFsaWRhdGUgPSAoKSA9PiB7XG4gICAgLy8gICAgIGxldCBlcnJvcnMgPSB7fTtcbiAgICAvLyAgICAgbGV0IGhhc0Vycm9ycyA9IGZhbHNlO1xuICAgIC8vICAgICBmb3IgKGxldCBrZXkgb2YgT2JqZWN0LmtleXMoaW5wdXRzKSkge1xuICAgIC8vICAgICAgICAgZXJyb3JzW2tleV0gPSAhdmFsaWRpdHlSdWxlc1trZXldKGlucHV0c1trZXldKTtcbiAgICAvLyAgICAgICAgIGhhc0Vycm9ycyB8PSBlcnJvcnNba2V5XTtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBzZXRGaWVsZEVycm9ycyhwcmV2ID0+ICh7IC4uLnByZXYsIC4uLmVycm9ycyB9KSk7XG4gICAgLy8gICAgIHJldHVybiAhaGFzRXJyb3JzO1xuICAgIC8vIH07XG4gICAgLy8gY29uc3QgcmVuZGVyRmllbGRFcnJvciA9IGZpZWxkID0+IHtcbiAgICAvLyAgICAgY29uc29sZS5sb2coIWZpZWxkRXJyb3JzW2ZpZWxkXSk7XG4gICAgICAgIFxuICAgIC8vICAgICAvLyBpZiAoIWZpZWxkRXJyb3JzW2ZpZWxkXSkge1xuICAgIC8vICAgICAvLyAgICAgcmV0dXJuIDxwIGNsYXNzTmFtZT1cImVycm9yTXNnXCI+UGxlYXNlIGVudGVyIGEgdmFsaWQge2ZpZWxkfTwvcD5cbiAgICAvLyAgICAgLy8gfVxuICAgIC8vIH07XG4gICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyAgICAgaWYgKE9iamVjdC5rZXlzKGZpZWxkRXJyb3JzKS5sZW5ndGggPiAwKSB7XG4gICAgLy8gICAgICAgdmFsaWRhdGUoKTtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgfSwgW2lucHV0c10pO1xuXG4gICAgLy8gY29uc3QgaGFuZGxlT25DaGFuZ2UgPSBldmVudCA9PiB7XG4gICAgLy8gICAgIGV2ZW50LnBlcnNpc3QoKTtcbiAgICAvLyAgICAgc2V0SW5wdXRzKHByZXYgPT4gKHtcbiAgICAvLyAgICAgICAgIC4uLnByZXYsXG4gICAgLy8gICAgICAgICBbZXZlbnQudGFyZ2V0LmlkXTogZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgLy8gICAgIH0pKTtcbiAgICAvLyB9O1xuXG4gICAgY29uc3QgaGFuZGxlU2VydmVyUmVzcG9uc2UgPSAob2ssIG1zZykgPT4ge1xuICAgICAgICBzZXRTZXJ2ZXJTdGF0ZSh7XG4gICAgICAgICAgICBzZW5kaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIHN0YXR1czogeyBvaywgbXNnIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChvaykge1xuICAgICAgICAgICAgc2V0RmllbGRFcnJvcnMoe30pO1xuICAgICAgICAgICAgc2V0SW5wdXRzKHtcbiAgICAgICAgICAgICAgICBlbWFpbDogJycsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJydcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlRm9ybVN1Ym1pdCA9IGUgPT4ge1xuICAgICAgICAvLyBpZiAoIXZhbGlkYXRlKCkpIHtcbiAgICAgICAgLy8gICAgIHJldHVybjtcbiAgICAgICAgLy8gfVxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHNldFNlcnZlclN0YXRlKHsgc2VuZGluZzogdHJ1ZSB9KTtcbiAgICAgICAgYXhpb3Moe1xuICAgICAgICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICAgICAgICB1cmw6ICdodHRwczovL2Zvcm1zcHJlZS5pby9tYmpsbHFhZScsXG4gICAgICAgICAgICBkYXRhOiBuZXcgRm9ybURhdGEoZm9ybSlcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlc3AgPT4ge1xuICAgICAgICAgICAgICAgIGhhbmRsZVNlcnZlclJlc3BvbnNlKHRydWUsICdNZXNzYWdlIHNlbnQuIFRoYW5rcyEnKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2gocmVzcCA9PiB7XG4gICAgICAgICAgICAgICAgaGFuZGxlU2VydmVyUmVzcG9uc2UoZmFsc2UsIHJlc3AucmVzcG9uc2UuZGF0YS5lcnJvciwgZm9ybSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDI+R0VUIElOIFRPVUNIPC9oMj5cbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVGb3JtU3VibWl0fSBub1ZhbGlkYXRlPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSdlbWFpbCc+RW1haWw8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRzLmVtYWlsfVxuICAgICAgICAgICAgICAgICAgICAvLyBvbkNoYW5nZT17aGFuZGxlT25DaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlbWFpbENoYW5nZUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgIGlkPSdlbWFpbCdcbiAgICAgICAgICAgICAgICAgICAgdHlwZT0nZW1haWwnXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9J2VtYWlsJ1xuICAgICAgICAgICAgICAgICAgICBub1ZhbGlkYXRlXG4gICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgey8qIHtyZW5kZXJGaWVsZEVycm9yKFwiZW1haWxcIil9ICovfVxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSdtZXNzYWdlJz5NZXNzYWdlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0cy5tZXNzYWdlfVxuICAgICAgICAgICAgICAgICAgICAvLyBvbkNoYW5nZT17aGFuZGxlT25DaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXttZXNzYWdlc0NoYW5nZUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgIGlkPSdtZXNzYWdlJ1xuICAgICAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xuICAgICAgICAgICAgICAgICAgICBuYW1lPSdtZXNzYWdlJ1xuICAgICAgICAgICAgICAgICAgICByb3dzPScyJ1xuICAgICAgICAgICAgICAgICAgICBub1ZhbGlkYXRlXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB7Lyoge3JlbmRlckZpZWxkRXJyb3IoJ21lc3NhZ2UnKX0gKi99XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnIGRpc2FibGU9e3NlcnZlclN0YXRlLnNlbmRpbmcudG9TdHJpbmcoKX0gb25DbGljaz17aGFuZGxlRm9ybVN1Ym1pdH0+U0VORDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIHtzZXJ2ZXJTdGF0ZS5zdGF0dXMgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9eyFzZXJ2ZXJTdGF0ZS5zdGF0dXMub2sgPyBcImVycm9yTXNnXCIgOiBcIlwifT57c2VydmVyU3RhdGUuc3RhdHVzLm1zZ308L3A+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgZm9ybSB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgICAgICAgfVxuICAgICAgICBmb3JtIGxhYmVsIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICB9XG4gICAgICAgIGxhYmVsLCBidXR0b24ge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgICAgIH1cbiAgICAgICAgaW5wdXQsIHRleHRhcmVhIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAuNXJlbTtcbiAgICAgICAgfVxuICAgICAgICBmb3JtIHRleHRhcmVhIHtcbiAgICAgICAgICByZXNpemU6IHZlcnRpY2FsO1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZDgxZTViO1xuICAgICAgICAgIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBFbWFpbEZvcm0yO1xuIl19 */\n/*@ sourceURL=/Users/sam.davis-castro/Desktop/bellflower-site-nextjs/components/EmailForm2.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (EmailForm2);

/***/ })

})
//# sourceMappingURL=_app.js.ed0b484431dc81e7fa9c.hot-update.js.map