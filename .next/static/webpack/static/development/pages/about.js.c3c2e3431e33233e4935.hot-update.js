webpackHotUpdate("static/development/pages/about.js",{

/***/ "./components/BandMember.js":
/*!**********************************!*\
  !*** ./components/BandMember.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_musicians_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/musicians.js */ "./public/musicians.js");
var _jsxFileName = "/Users/sam.davis-castro/Desktop/bellflower-site-nextjs/components/BandMember.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var BandMember = function BandMember(props) {
  var person = props.viewPerson;

  if (typeof props.viewPerson === 'number') {
    return __jsx("div", {
      className: "jsx-2957644584" + " " + "individual",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, __jsx("button", {
      onClick: props.close,
      className: "jsx-2957644584",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, "\u2715"), __jsx("h2", {
      className: "jsx-2957644584",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, _public_musicians_js__WEBPACK_IMPORTED_MODULE_2__["default"][person].musician), __jsx("img", {
      src: _public_musicians_js__WEBPACK_IMPORTED_MODULE_2__["default"][person].photo,
      className: "jsx-2957644584",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }), __jsx("p", {
      className: "jsx-2957644584",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, _public_musicians_js__WEBPACK_IMPORTED_MODULE_2__["default"][person].description), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "2957644584",
      __self: this
    }, ".individual.jsx-2957644584{position:fixed;height:calc(100vh - 2rem);width:calc(100vw - 4rem);max-width:800px;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);background:linear-gradient(45deg,#ef447e,#f69d1a);padding:0 1rem;text-align:left;display:grid;grid-template-areas:\"close\" \"photos\" \"person\" \"description\";grid-template-rows:1fr 3fr 1fr 5fr;grid-template-columns:100%;z-index:11;}@media only screen and (min-width:30em){.individual.jsx-2957644584{grid-template-rows:1fr 5fr 1fr 3fr;}}.individual.jsx-2957644584 button.jsx-2957644584,.individual.jsx-2957644584 img.jsx-2957644584,.individual.jsx-2957644584 h2.jsx-2957644584,.individual.jsx-2957644584 p.jsx-2957644584{color:#222;}.individual.jsx-2957644584 button.jsx-2957644584{grid-area:close;font-size:1.6rem;}.individual.jsx-2957644584 button.jsx-2957644584:hover{cursor:pointer;}.individual.jsx-2957644584 img.jsx-2957644584{grid-area:photos;width:100%;max-height:100%;object-fit:cover;object-position:top;opacity:.8;}.individual.jsx-2957644584 h2.jsx-2957644584{grid-area:person;}.individual.jsx-2957644584 p.jsx-2957644584{grid-area:description;margin-top:0;}button.jsx-2957644584{border:none;background:transparent;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW0uZGF2aXMtY2FzdHJvL0Rlc2t0b3AvYmVsbGZsb3dlci1zaXRlLW5leHRqcy9jb21wb25lbnRzL0JhbmRNZW1iZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWTRCLEFBR29DLEFBa0J3QixBQUk1QixBQUdLLEFBSUQsQUFHRSxBQVFBLEFBR0ssQUFJVixXQXhCaEIsQ0F5QjJCLEdBL0NHLEFBNkI5QixDQUpxQixDQU9OLEFBUWYsS0FHaUIsTUFWRyxLQVBwQixFQVJJLEFBMEJKLEFBSUEsTUEvQzZCLEdBaUNSLGlCQUNHLEtBakNKLGVBa0NMLENBakNILFFBQ0MsRUFpQ2IsT0FoQ29DLHlHQUNrQixrREFDbkMsZUFDQyxnQkFDSCxhQUMrQyw0REFDekIsbUNBQ1IsMkJBQ2hCLFdBQ2YiLCJmaWxlIjoiL1VzZXJzL3NhbS5kYXZpcy1jYXN0cm8vRGVza3RvcC9iZWxsZmxvd2VyLXNpdGUtbmV4dGpzL2NvbXBvbmVudHMvQmFuZE1lbWJlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBiYW5kTWVtYmVycyBmcm9tICcuLi9wdWJsaWMvbXVzaWNpYW5zLmpzJztcblxuY29uc3QgQmFuZE1lbWJlciA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHBlcnNvbiA9IHByb3BzLnZpZXdQZXJzb247XG4gICAgXG4gICAgaWYgKHR5cGVvZiBwcm9wcy52aWV3UGVyc29uID09PSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmRpdmlkdWFsXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtwcm9wcy5jbG9zZX0+JiMxMDAwNTs8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8aDI+e2JhbmRNZW1iZXJzW3BlcnNvbl0ubXVzaWNpYW59PC9oMj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17YmFuZE1lbWJlcnNbcGVyc29uXS5waG90b30vPlxuICAgICAgICAgICAgICAgIDxwPntiYW5kTWVtYmVyc1twZXJzb25dLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgLmluZGl2aWR1YWwge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDJyZW0pO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogY2FsYygxMDB2dyAtIDRyZW0pO1xuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCNlZjQ0N2UsI2Y2OWQxYSk7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMXJlbTtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJjbG9zZVwiIFwicGhvdG9zXCIgXCJwZXJzb25cIiBcImRlc2NyaXB0aW9uXCI7XG4gICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDNmciAxZnIgNWZyO1xuICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDExO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMwZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgLmluZGl2aWR1YWwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNWZyIDFmciAzZnI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmluZGl2aWR1YWwgYnV0dG9uLCAuaW5kaXZpZHVhbCBpbWcsIC5pbmRpdmlkdWFsIGgyLCAuaW5kaXZpZHVhbCBwIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMyMjI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5pbmRpdmlkdWFsIGJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgICAgIGdyaWQtYXJlYTogY2xvc2U7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuaW5kaXZpZHVhbCBidXR0b246aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5pbmRpdmlkdWFsIGltZyB7XG4gICAgICAgICAgICAgICAgICAgIGdyaWQtYXJlYTogcGhvdG9zO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC1wb3NpdGlvbjogdG9wO1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAuODtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmluZGl2aWR1YWwgaDIge1xuICAgICAgICAgICAgICAgICAgICBncmlkLWFyZWE6IHBlcnNvbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmluZGl2aWR1YWwgcCB7XG4gICAgICAgICAgICAgICAgICAgIGdyaWQtYXJlYTogZGVzY3JpcHRpb247XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCYW5kTWVtYmVyOyJdfQ== */\n/*@ sourceURL=/Users/sam.davis-castro/Desktop/bellflower-site-nextjs/components/BandMember.js */"));
  } else {
    return null;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (BandMember);

/***/ })

})
//# sourceMappingURL=about.js.c3c2e3431e33233e4935.hot-update.js.map