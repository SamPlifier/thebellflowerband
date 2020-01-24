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
      className: "jsx-2181045801" + " " + "individual",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, __jsx("button", {
      onClick: props.close,
      className: "jsx-2181045801",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, "\u2715"), __jsx("h2", {
      className: "jsx-2181045801",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, _public_musicians_js__WEBPACK_IMPORTED_MODULE_2__["default"][person].musician), __jsx("img", {
      src: _public_musicians_js__WEBPACK_IMPORTED_MODULE_2__["default"][person].photo,
      className: "jsx-2181045801",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }), __jsx("p", {
      className: "jsx-2181045801",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, _public_musicians_js__WEBPACK_IMPORTED_MODULE_2__["default"][person].description), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "2181045801",
      __self: this
    }, ".individual.jsx-2181045801{position:fixed;height:calc(100vh - 2rem);width:calc(100vw - 2rem);max-width:800px;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);background:linear-gradient(45deg,#ef447e,#f69d1a);padding:0 1rem;text-align:left;display:grid;grid-template-areas:\"close\" \"photos\" \"person\" \"description\";grid-template-rows:70px 3fr 1fr 5fr;grid-template-columns:100%;z-index:11;box-sizing:border-box;}.individual.jsx-2181045801 button.jsx-2181045801,.individual.jsx-2181045801 img.jsx-2181045801,.individual.jsx-2181045801 h2.jsx-2181045801,.individual.jsx-2181045801 p.jsx-2181045801{color:#222;}.individual.jsx-2181045801 button.jsx-2181045801{grid-area:close;font-size:1.6rem;}.individual.jsx-2181045801 button.jsx-2181045801:hover{cursor:pointer;}.individual.jsx-2181045801 img.jsx-2181045801{grid-area:photos;width:100%;max-height:100%;object-fit:cover;object-position:top;opacity:.8;}.individual.jsx-2181045801 h2.jsx-2181045801{grid-area:person;}.individual.jsx-2181045801 p.jsx-2181045801{grid-area:description;margin-top:0;overflow-y:scroll;}button.jsx-2181045801{border:none;background:transparent;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW0uZGF2aXMtY2FzdHJvL0Rlc2t0b3AvYmVsbGZsb3dlci1zaXRlLW5leHRqcy9jb21wb25lbnRzL0JhbmRNZW1iZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWTRCLEFBR29DLEFBa0JKLEFBR0ssQUFJRCxBQUdFLEFBUUEsQUFHSyxBQUtWLFdBekJoQixDQTBCMkIsR0E1Q0csQUF5QjlCLENBSnFCLENBT04sQUFRZixLQUdpQixNQVZHLEtBUHBCLEVBa0JzQixBQUt0QixNQTVDNkIsR0E2QlIsU0FXckIsUUFWd0IsS0E3QkosZUE4QkwsQ0E3QkgsUUFDQyxFQTZCYixPQTVCb0MseUdBQ2tCLGtEQUNuQyxlQUNDLGdCQUNILGFBQytDLDREQUN4QixvQ0FDVCwyQkFDaEIsV0FDVyxzQkFDMUIiLCJmaWxlIjoiL1VzZXJzL3NhbS5kYXZpcy1jYXN0cm8vRGVza3RvcC9iZWxsZmxvd2VyLXNpdGUtbmV4dGpzL2NvbXBvbmVudHMvQmFuZE1lbWJlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBiYW5kTWVtYmVycyBmcm9tICcuLi9wdWJsaWMvbXVzaWNpYW5zLmpzJztcblxuY29uc3QgQmFuZE1lbWJlciA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHBlcnNvbiA9IHByb3BzLnZpZXdQZXJzb247XG4gICAgXG4gICAgaWYgKHR5cGVvZiBwcm9wcy52aWV3UGVyc29uID09PSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmRpdmlkdWFsXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtwcm9wcy5jbG9zZX0+JiMxMDAwNTs8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8aDI+e2JhbmRNZW1iZXJzW3BlcnNvbl0ubXVzaWNpYW59PC9oMj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17YmFuZE1lbWJlcnNbcGVyc29uXS5waG90b30vPlxuICAgICAgICAgICAgICAgIDxwPntiYW5kTWVtYmVyc1twZXJzb25dLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgLmluZGl2aWR1YWwge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDJyZW0pO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogY2FsYygxMDB2dyAtIDJyZW0pO1xuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCNlZjQ0N2UsI2Y2OWQxYSk7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMXJlbTtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJjbG9zZVwiIFwicGhvdG9zXCIgXCJwZXJzb25cIiBcImRlc2NyaXB0aW9uXCI7XG4gICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogNzBweCAzZnIgMWZyIDVmcjtcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMTtcbiAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmluZGl2aWR1YWwgYnV0dG9uLCAuaW5kaXZpZHVhbCBpbWcsIC5pbmRpdmlkdWFsIGgyLCAuaW5kaXZpZHVhbCBwIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMyMjI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5pbmRpdmlkdWFsIGJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgICAgIGdyaWQtYXJlYTogY2xvc2U7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuaW5kaXZpZHVhbCBidXR0b246aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5pbmRpdmlkdWFsIGltZyB7XG4gICAgICAgICAgICAgICAgICAgIGdyaWQtYXJlYTogcGhvdG9zO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC1wb3NpdGlvbjogdG9wO1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAuODtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmluZGl2aWR1YWwgaDIge1xuICAgICAgICAgICAgICAgICAgICBncmlkLWFyZWE6IHBlcnNvbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmluZGl2aWR1YWwgcCB7XG4gICAgICAgICAgICAgICAgICAgIGdyaWQtYXJlYTogZGVzY3JpcHRpb247XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMGVtKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgIC5pbmRpdmlkdWFsIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogNzBweCA1ZnIgMWZyIDNmcjtcbiAgICAgICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICAvLyBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgIC5pbmRpdmlkdWFsIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIC8vIGdyaWQtdGVtcGxhdGUtcm93czogNzBweCBhdXRvO1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG87XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA1MCU7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAtd2Via2l0LWNvbHVtbi1nYXA6IDFyZW07XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBjb2x1bW4tZ2FwOiAxcmVtO1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJjbG9zZSBwZXJzb25cIiBcInBob3RvcyBkZXNjcmlwdGlvblwiO1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgICAgIC8vICAgICAuaW5kaXZpZHVhbCBoMiB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAgICAgLy8gICAgIC5pbmRpdmlkdWFsIHAge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgcGFkZGluZzogMCAxcmVtIDFyZW0gMDtcbiAgICAgICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFuZE1lbWJlcjsiXX0= */\n/*@ sourceURL=/Users/sam.davis-castro/Desktop/bellflower-site-nextjs/components/BandMember.js */"));
  } else {
    return null;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (BandMember);

/***/ })

})
//# sourceMappingURL=about.js.486d1b0f9d2f0677e1d7.hot-update.js.map