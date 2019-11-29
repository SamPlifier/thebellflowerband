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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    email: null,
    message: null
  }),
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
      val.length > 0 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
    },
    message: function message(val) {
      return val.length > 0;
    }
  };

  var validate = function validate() {
    console.log('calling validation...');
    console.log('email validity', inputs);
    console.log('calling validation...');
    var err = {
      emailErr: validityRules.email(inputs.email),
      msgErr: false
    }; // console.log(err);
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
    console.log(msg);

    if (ok) {
      setFieldErrors({});
      setInputs({
        email: '',
        message: ''
      });
    }
  };

  var handleFormSubmit = function handleFormSubmit(e) {
    validate();
    e.preventDefault(); // setServerState({ sending: true });
    // const form = e.target;
    // axios({
    //     method: 'post',
    //     url: 'https://formspree.io/mbjllqae',
    //     data: new FormData(form)
    // })
    //     .then(resp => {
    //         handleServerResponse(true, 'Message sent. Thanks!');
    //     })
    //     .catch(resp => {
    //         handleServerResponse(false, resp.response.data.error, form);
    //     });
  };

  return __jsx("div", {
    className: "jsx-1141248355",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-1141248355",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, "GET IN TOUCH"), __jsx("form", {
    onSubmit: handleFormSubmit,
    noValidate: true,
    className: "jsx-1141248355",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, serverState.status && __jsx("p", {
    className: "jsx-1141248355" + " " + ((!serverState.status.ok ? "errorMsg" : "") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, serverState.status.msg), __jsx("label", {
    htmlFor: "email",
    className: "jsx-1141248355",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
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
      lineNumber: 103
    },
    __self: this
  }), __jsx("label", {
    htmlFor: "message",
    className: "jsx-1141248355",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
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
      lineNumber: 115
    },
    __self: this
  }), __jsx("button", {
    type: "submit",
    disable: serverState.sending.toString() // onClick={validate}
    ,
    className: "jsx-1141248355",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, "SEND")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1141248355",
    __self: this
  }, "form.jsx-1141248355{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:space-between;-webkit-box-align:space-between;-ms-flex-align:space-between;align-items:space-between;padding-bottom:1rem;}form.jsx-1141248355 label.jsx-1141248355{text-align:left;}label.jsx-1141248355,button.jsx-1141248355{margin-top:1rem;}input.jsx-1141248355,textarea.jsx-1141248355{margin-top:.5rem;}form.jsx-1141248355 textarea.jsx-1141248355{resize:vertical;}button.jsx-1141248355{color:#fff;margin-top:2rem;background:#d81e5b;padding:1rem 1.5rem;border:2px solid #fff;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW0uZGF2aXMtY2FzdHJvL0Rlc2t0b3AvYmVsbGZsb3dlci1zaXRlLW5leHRqcy9jb21wb25lbnRzL0VtYWlsRm9ybTIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0l3QixBQUd3QixBQU9HLEFBR0EsQUFHQyxBQUdELEFBR0wsV0FDSyxLQVpsQixBQUdBLEFBTUEsQ0FIQSxVQU9xQixtQkFDQyxvQkFDRSxRQXRCQSxjQXVCeEIsZ0VBdEI2Qix5R0FDRCx5SEFDTixvQkFDdEIiLCJmaWxlIjoiL1VzZXJzL3NhbS5kYXZpcy1jYXN0cm8vRGVza3RvcC9iZWxsZmxvd2VyLXNpdGUtbmV4dGpzL2NvbXBvbmVudHMvRW1haWxGb3JtMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3QgRW1haWxGb3JtMiA9ICgpID0+IHtcbiAgICBjb25zdCBbc2VydmVyU3RhdGUsIHNldFNlcnZlclN0YXRlXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgc2VuZGluZzogZmFsc2UsXG4gICAgICAgIHN0YXR1czogbnVsbFxuICAgIH0pO1xuICAgIGNvbnN0IFtmaWVsZEVycm9ycywgc2V0RmllbGRFcnJvcnNdID0gdXNlU3RhdGUoe1xuICAgICAgICBlbWFpbDogbnVsbCxcbiAgICAgICAgbWVzc2FnZTogbnVsbFxuICAgIH0pO1xuICAgIGNvbnN0IFtpbnB1dHMsIHNldElucHV0c10gPSB1c2VTdGF0ZSh7XG4gICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgbWVzc2FnZTogJydcbiAgICB9KTtcbiAgICBjb25zdCB2YWxpZGl0eVJ1bGVzID0ge1xuICAgICAgICBlbWFpbDogdmFsID0+IHt2YWwubGVuZ3RoID4gMCAmJiAvXlteXFxzQF0rQFteXFxzQF0rXFwuW15cXHNAXSskLy50ZXN0KHZhbCl9LFxuICAgICAgICBtZXNzYWdlOiB2YWwgPT4gdmFsLmxlbmd0aCA+IDBcbiAgICB9O1xuICAgIGNvbnN0IHZhbGlkYXRlID0gKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnY2FsbGluZyB2YWxpZGF0aW9uLi4uJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdlbWFpbCB2YWxpZGl0eScsKGlucHV0cykpO1xuICAgICAgICBjb25zb2xlLmxvZygnY2FsbGluZyB2YWxpZGF0aW9uLi4uJyk7XG4gICAgICAgIGxldCBlcnIgPSB7XG4gICAgICAgICAgICBlbWFpbEVycjogdmFsaWRpdHlSdWxlcy5lbWFpbChpbnB1dHMuZW1haWwpLFxuICAgICAgICAgICAgbXNnRXJyOiBmYWxzZSxcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGVycik7XG4gICAgfVxuICAgIC8vIGNvbnN0IHZhbGlkYXRlID0gKCkgPT4ge1xuICAgIC8vICAgICBsZXQgZXJyb3JzID0ge307XG4gICAgLy8gICAgIGxldCBoYXNFcnJvcnMgPSBmYWxzZTtcbiAgICAvLyAgICAgZm9yIChsZXQga2V5IG9mIE9iamVjdC5rZXlzKGlucHV0cykpIHtcbiAgICAvLyAgICAgICAgIGVycm9yc1trZXldID0gIXZhbGlkaXR5UnVsZXNba2V5XShpbnB1dHNba2V5XSk7XG4gICAgLy8gICAgICAgICBoYXNFcnJvcnMgfD0gZXJyb3JzW2tleV07XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgc2V0RmllbGRFcnJvcnMocHJldiA9PiAoeyAuLi5wcmV2LCAuLi5lcnJvcnMgfSkpO1xuICAgIC8vICAgICByZXR1cm4gIWhhc0Vycm9ycztcbiAgICAvLyB9O1xuICAgIC8vIGNvbnN0IHJlbmRlckZpZWxkRXJyb3IgPSBmaWVsZCA9PiB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKCFmaWVsZEVycm9yc1tmaWVsZF0pO1xuICAgICAgICBcbiAgICAvLyAgICAgLy8gaWYgKCFmaWVsZEVycm9yc1tmaWVsZF0pIHtcbiAgICAvLyAgICAgLy8gICAgIHJldHVybiA8cCBjbGFzc05hbWU9XCJlcnJvck1zZ1wiPlBsZWFzZSBlbnRlciBhIHZhbGlkIHtmaWVsZH08L3A+XG4gICAgLy8gICAgIC8vIH1cbiAgICAvLyB9O1xuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gICAgIGlmIChPYmplY3Qua2V5cyhmaWVsZEVycm9ycykubGVuZ3RoID4gMCkge1xuICAgIC8vICAgICAgIHZhbGlkYXRlKCk7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgIH0sIFtpbnB1dHNdKTtcblxuICAgIGNvbnN0IGhhbmRsZU9uQ2hhbmdlID0gZXZlbnQgPT4ge1xuICAgICAgICBldmVudC5wZXJzaXN0KCk7XG4gICAgICAgIHNldElucHV0cyhwcmV2ID0+ICh7XG4gICAgICAgICAgICAuLi5wcmV2LFxuICAgICAgICAgICAgW2V2ZW50LnRhcmdldC5pZF06IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICB9KSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZVNlcnZlclJlc3BvbnNlID0gKG9rLCBtc2cpID0+IHtcbiAgICAgICAgc2V0U2VydmVyU3RhdGUoe1xuICAgICAgICAgICAgc2VuZGluZzogZmFsc2UsXG4gICAgICAgICAgICBzdGF0dXM6IHsgb2ssIG1zZyB9XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zb2xlLmxvZyhtc2cpO1xuICAgICAgICBpZiAob2spIHtcbiAgICAgICAgICAgIHNldEZpZWxkRXJyb3JzKHt9KTtcbiAgICAgICAgICAgIHNldElucHV0cyh7XG4gICAgICAgICAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICcnXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZUZvcm1TdWJtaXQgPSBlID0+IHtcbiAgICAgICAgdmFsaWRhdGUoKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAvLyBzZXRTZXJ2ZXJTdGF0ZSh7IHNlbmRpbmc6IHRydWUgfSk7XG4gICAgICAgIC8vIGNvbnN0IGZvcm0gPSBlLnRhcmdldDtcbiAgICAgICAgLy8gYXhpb3Moe1xuICAgICAgICAvLyAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICAgIC8vICAgICB1cmw6ICdodHRwczovL2Zvcm1zcHJlZS5pby9tYmpsbHFhZScsXG4gICAgICAgIC8vICAgICBkYXRhOiBuZXcgRm9ybURhdGEoZm9ybSlcbiAgICAgICAgLy8gfSlcbiAgICAgICAgLy8gICAgIC50aGVuKHJlc3AgPT4ge1xuICAgICAgICAvLyAgICAgICAgIGhhbmRsZVNlcnZlclJlc3BvbnNlKHRydWUsICdNZXNzYWdlIHNlbnQuIFRoYW5rcyEnKTtcbiAgICAgICAgLy8gICAgIH0pXG4gICAgICAgIC8vICAgICAuY2F0Y2gocmVzcCA9PiB7XG4gICAgICAgIC8vICAgICAgICAgaGFuZGxlU2VydmVyUmVzcG9uc2UoZmFsc2UsIHJlc3AucmVzcG9uc2UuZGF0YS5lcnJvciwgZm9ybSk7XG4gICAgICAgIC8vICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDI+R0VUIElOIFRPVUNIPC9oMj5cbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVGb3JtU3VibWl0fSBub1ZhbGlkYXRlPlxuICAgICAgICAgICAge3NlcnZlclN0YXRlLnN0YXR1cyAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17IXNlcnZlclN0YXRlLnN0YXR1cy5vayA/IFwiZXJyb3JNc2dcIiA6IFwiXCJ9PntzZXJ2ZXJTdGF0ZS5zdGF0dXMubXNnfTwvcD5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSdlbWFpbCc+RW1haWw8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRzLmVtYWlsfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlT25DaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIGlkPSdlbWFpbCdcbiAgICAgICAgICAgICAgICAgICAgdHlwZT0nZW1haWwnXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9J2VtYWlsJ1xuICAgICAgICAgICAgICAgICAgICBub1ZhbGlkYXRlXG4gICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgey8qIHtyZW5kZXJGaWVsZEVycm9yKFwiZW1haWxcIil9ICovfVxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSdtZXNzYWdlJz5NZXNzYWdlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0cy5tZXNzYWdlfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlT25DaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIGlkPSdtZXNzYWdlJ1xuICAgICAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xuICAgICAgICAgICAgICAgICAgICBuYW1lPSdtZXNzYWdlJ1xuICAgICAgICAgICAgICAgICAgICByb3dzPScyJ1xuICAgICAgICAgICAgICAgICAgICBub1ZhbGlkYXRlXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB7Lyoge3JlbmRlckZpZWxkRXJyb3IoJ21lc3NhZ2UnKX0gKi99XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnIGRpc2FibGU9e3NlcnZlclN0YXRlLnNlbmRpbmcudG9TdHJpbmcoKX0gXG4gICAgICAgICAgICAgICAgLy8gb25DbGljaz17dmFsaWRhdGV9XG4gICAgICAgICAgICAgICAgPlNFTkQ8L2J1dHRvbj5cblxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBmb3JtIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICAgICAgICB9XG4gICAgICAgIGZvcm0gbGFiZWwge1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIH1cbiAgICAgICAgbGFiZWwsIGJ1dHRvbiB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICAgICAgfVxuICAgICAgICBpbnB1dCwgdGV4dGFyZWEge1xuICAgICAgICAgIG1hcmdpbi10b3A6IC41cmVtO1xuICAgICAgICB9XG4gICAgICAgIGZvcm0gdGV4dGFyZWEge1xuICAgICAgICAgIHJlc2l6ZTogdmVydGljYWw7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNkODFlNWI7XG4gICAgICAgICAgcGFkZGluZzogMXJlbSAxLjVyZW07XG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEVtYWlsRm9ybTI7XG4iXX0= */\n/*@ sourceURL=/Users/sam.davis-castro/Desktop/bellflower-site-nextjs/components/EmailForm2.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (EmailForm2);

/***/ })

})
//# sourceMappingURL=_app.js.b466d3de788aad2bbef2.hot-update.js.map