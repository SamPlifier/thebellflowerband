webpackHotUpdate("static/development/pages/merchandise.js",{

/***/ "./pages/merchandise.js":
/*!******************************!*\
  !*** ./pages/merchandise.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_StyleBase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/StyleBase */ "./components/StyleBase.js");
/* harmony import */ var _public_merchInfo_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/merchInfo.js */ "./public/merchInfo.js");
var _jsxFileName = "/Users/sam.davis-castro/Desktop/bellflower-site-nextjs/pages/merchandise.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var Merch = function Merch() {
  var merchItems = _public_merchInfo_js__WEBPACK_IMPORTED_MODULE_4__["default"];
  console.log(merchItems);
  return __jsx(_components_StyleBase__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("section", {
    className: "jsx-3203606137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-3203606137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "ITEMS"), __jsx("div", {
    className: "jsx-3203606137" + " " + "merchContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, merchItems.map(function (item, i) {
    return __jsx("div", {
      key: i,
      className: "jsx-3203606137" + " " + "merchItem",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-3203606137" + " " + "description",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, __jsx("p", {
      className: "jsx-3203606137",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, item.name), __jsx("p", {
      className: "jsx-3203606137",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, "Price $", item.price), __jsx("p", {
      className: "jsx-3203606137",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, "Availabile at: ", item.availableAt), __jsx("div", {
      className: "jsx-3203606137" + " " + "imgContainer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, __jsx("img", {
      src: item.imgSrc,
      className: "jsx-3203606137",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }))));
  })), __jsx("h2", {
    className: "jsx-3203606137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "PURCHASING"), __jsx("p", {
    className: "jsx-3203606137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "We currently accept ", __jsx("span", {
    className: "jsx-3203606137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Credit Cards"), ", ", __jsx("span", {
    className: "jsx-3203606137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Venmo"), ", and ", __jsx("span", {
    className: "jsx-3203606137",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Paypal"), ". Contact us below if you have any questions about stock or payment details.")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3203606137",
    __self: this
  }, ".payment-types.jsx-3203606137{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}span.jsx-3203606137{color:#f69d1a;}.merchContainer.jsx-3203606137{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.merchItem.jsx-3203606137{border:2px solid #f69d1a;padding:1rem;}.merchItem.jsx-3203606137 .imgContainer.jsx-3203606137{height:auto;}.merchItem.jsx-3203606137 .imgContainer.jsx-3203606137 img.jsx-3203606137{width:70%;object-fit:contain;}.description.jsx-3203606137 p.jsx-3203606137{text-align:left;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW0uZGF2aXMtY2FzdHJvL0Rlc2t0b3AvYmVsbGZsb3dlci1zaXRlLW5leHRqcy9wYWdlcy9tZXJjaGFuZGlzZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0QndCLEFBRzhCLEFBS0MsQUFHRCxBQUtZLEFBSWIsQUFHRixBQUlNLFVBSEcsRUFIdkIsRUFaQSxFQW1CQSxTQVhpQixJQVFqQixTQVBBLG9DQWRpQyxBQVFQLDhFQUNDLDZDQVJKLHNEQVN2Qix1Q0FSQSIsImZpbGUiOiIvVXNlcnMvc2FtLmRhdmlzLWNhc3Ryby9EZXNrdG9wL2JlbGxmbG93ZXItc2l0ZS1uZXh0anMvcGFnZXMvbWVyY2hhbmRpc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IFN0eWxlQmFzZSBmcm9tICcuLi9jb21wb25lbnRzL1N0eWxlQmFzZSc7XG5pbXBvcnQgbWVyY2hhbmRpc2UgZnJvbSAnLi4vcHVibGljL21lcmNoSW5mby5qcyc7XG5jb25zdCBNZXJjaCA9ICgpID0+IHtcbiAgICBjb25zdCBtZXJjaEl0ZW1zID0gbWVyY2hhbmRpc2U7XG4gICAgY29uc29sZS5sb2cobWVyY2hJdGVtcyk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFN0eWxlQmFzZT5cbiAgICAgICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxoMj5JVEVNUzwvaDI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXJjaENvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICB7bWVyY2hJdGVtcy5tYXAoKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT1cIm1lcmNoSXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntpdGVtLm5hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlByaWNlICYjMzY7e2l0ZW0ucHJpY2V9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkF2YWlsYWJpbGUgYXQ6IHtpdGVtLmF2YWlsYWJsZUF0fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZ0NvbnRhaW5lclwiPjxpbWcgc3JjPXtpdGVtLmltZ1NyY30vPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxoMj5QVVJDSEFTSU5HPC9oMj5cbiAgICAgICAgICAgICAgICA8cD5XZSBjdXJyZW50bHkgYWNjZXB0IDxzcGFuPkNyZWRpdCBDYXJkczwvc3Bhbj4sIDxzcGFuPlZlbm1vPC9zcGFuPiwgYW5kIDxzcGFuPlBheXBhbDwvc3Bhbj4uIENvbnRhY3QgdXMgYmVsb3cgaWYgeW91IGhhdmUgYW55IHF1ZXN0aW9ucyBhYm91dCBzdG9jayBvciBwYXltZW50IGRldGFpbHMuPC9wPlxuXG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAucGF5bWVudC10eXBlcyB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmNjlkMWE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWVyY2hDb250YWluZXIge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tZXJjaEl0ZW0ge1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmNjlkMWE7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tZXJjaEl0ZW0gLmltZ0NvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1lcmNoSXRlbSAuaW1nQ29udGFpbmVyIGltZyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmRlc2NyaXB0aW9uIHAge1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvU3R5bGVCYXNlPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWVyY2g7Il19 */\n/*@ sourceURL=/Users/sam.davis-castro/Desktop/bellflower-site-nextjs/pages/merchandise.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Merch);

/***/ })

})
//# sourceMappingURL=merchandise.js.b09795680f0618c7fcec.hot-update.js.map