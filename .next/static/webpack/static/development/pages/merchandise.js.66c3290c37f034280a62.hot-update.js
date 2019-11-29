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
    className: "jsx-770515978",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-770515978",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "ITEMS"), __jsx("div", {
    className: "jsx-770515978" + " " + "merchContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, merchItems.map(function (item, i) {
    return __jsx("div", {
      key: i,
      className: "jsx-770515978" + " " + "merchItem",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-770515978" + " " + "description",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, __jsx("p", {
      className: "jsx-770515978",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, item.name), __jsx("p", {
      className: "jsx-770515978",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, "Price $", item.price), __jsx("p", {
      className: "jsx-770515978",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, "Availabile at: ", item.availableAt), __jsx("div", {
      className: "jsx-770515978" + " " + "imgContainer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, __jsx("img", {
      src: item.imgSrc,
      className: "jsx-770515978",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }))));
  })), __jsx("h2", {
    className: "jsx-770515978",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "PURCHASING"), __jsx("p", {
    className: "jsx-770515978",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "We currently accept ", __jsx("span", {
    className: "jsx-770515978",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Credit Cards"), ", ", __jsx("span", {
    className: "jsx-770515978",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Venmo"), ", and ", __jsx("span", {
    className: "jsx-770515978",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Paypal"), ". Contact us below if you have any questions about stock or payment details.")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "770515978",
    __self: this
  }, ".payment-types.jsx-770515978{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}span.jsx-770515978{color:#f69d1a;}.merchContainer.jsx-770515978{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.merchItem.jsx-770515978{border:2px solid #f69d1a;padding:2rem;margin:2rem 0;}.merchItem.jsx-770515978 .imgContainer.jsx-770515978{height:auto;}.merchItem.jsx-770515978 .imgContainer.jsx-770515978 img.jsx-770515978{width:70%;object-fit:contain;}.description.jsx-770515978 p.jsx-770515978{text-align:left;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW0uZGF2aXMtY2FzdHJvL0Rlc2t0b3AvYmVsbGZsb3dlci1zaXRlLW5leHRqcy9wYWdlcy9tZXJjaGFuZGlzZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0QndCLEFBRzhCLEFBS0MsQUFHRCxBQUtZLEFBS2IsQUFHRixBQUlNLFVBSEcsRUFIdkIsRUFiQSxFQW9CQSxTQVppQixJQVNqQixTQVJrQixjQUNsQixzQkFmaUMsQUFRUCw4RUFDQyw2Q0FSSixzREFTdkIsdUNBUkEiLCJmaWxlIjoiL1VzZXJzL3NhbS5kYXZpcy1jYXN0cm8vRGVza3RvcC9iZWxsZmxvd2VyLXNpdGUtbmV4dGpzL3BhZ2VzL21lcmNoYW5kaXNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBTdHlsZUJhc2UgZnJvbSAnLi4vY29tcG9uZW50cy9TdHlsZUJhc2UnO1xuaW1wb3J0IG1lcmNoYW5kaXNlIGZyb20gJy4uL3B1YmxpYy9tZXJjaEluZm8uanMnO1xuY29uc3QgTWVyY2ggPSAoKSA9PiB7XG4gICAgY29uc3QgbWVyY2hJdGVtcyA9IG1lcmNoYW5kaXNlO1xuICAgIGNvbnNvbGUubG9nKG1lcmNoSXRlbXMpO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxTdHlsZUJhc2U+XG4gICAgICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8aDI+SVRFTVM8L2gyPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVyY2hDb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAge21lcmNoSXRlbXMubWFwKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9XCJtZXJjaEl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57aXRlbS5uYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5QcmljZSAmIzM2O3tpdGVtLnByaWNlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5BdmFpbGFiaWxlIGF0OiB7aXRlbS5hdmFpbGFibGVBdH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWdDb250YWluZXJcIj48aW1nIHNyYz17aXRlbS5pbWdTcmN9Lz48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8aDI+UFVSQ0hBU0lORzwvaDI+XG4gICAgICAgICAgICAgICAgPHA+V2UgY3VycmVudGx5IGFjY2VwdCA8c3Bhbj5DcmVkaXQgQ2FyZHM8L3NwYW4+LCA8c3Bhbj5WZW5tbzwvc3Bhbj4sIGFuZCA8c3Bhbj5QYXlwYWw8L3NwYW4+LiBDb250YWN0IHVzIGJlbG93IGlmIHlvdSBoYXZlIGFueSBxdWVzdGlvbnMgYWJvdXQgc3RvY2sgb3IgcGF5bWVudCBkZXRhaWxzLjwvcD5cblxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLnBheW1lbnQtdHlwZXMge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZjY5ZDFhO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm1lcmNoQ29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWVyY2hJdGVtIHtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZjY5ZDFhO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDJyZW07XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAycmVtIDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWVyY2hJdGVtIC5pbWdDb250YWluZXIge1xuICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tZXJjaEl0ZW0gLmltZ0NvbnRhaW5lciBpbWcge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5kZXNjcmlwdGlvbiBwIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L1N0eWxlQmFzZT5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lcmNoOyJdfQ== */\n/*@ sourceURL=/Users/sam.davis-castro/Desktop/bellflower-site-nextjs/pages/merchandise.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Merch);

/***/ })

})
//# sourceMappingURL=merchandise.js.66c3290c37f034280a62.hot-update.js.map