webpackHotUpdate("static/development/pages/album/[albumName].js",{

/***/ "./pages/album/[albumName].js":
/*!************************************!*\
  !*** ./pages/album/[albumName].js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_StyleBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/StyleBase */ "./components/StyleBase.js");
/* harmony import */ var _components_ViewAlbumSides__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/ViewAlbumSides */ "./components/ViewAlbumSides.js");
/* harmony import */ var _public_albumInfo_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/albumInfo.js */ "./public/albumInfo.js");
var _jsxFileName = "/Users/sam.davis-castro/Desktop/bellflower-site-nextjs/pages/album/[albumName].js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


 // import AlbumVendors from '../../components/AlbumVendors';

var Album = function Album() {
  return __jsx(_components_StyleBase__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("section", {
    className: "jsx-2852094415",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2852094415" + " " + "albums",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, _public_albumInfo_js__WEBPACK_IMPORTED_MODULE_4__["default"].map(function (album, i) {
    return __jsx("div", {
      key: i,
      className: "jsx-2852094415",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, __jsx("h2", {
      className: "jsx-2852094415",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, "INFO"), __jsx("p", {
      className: "jsx-2852094415" + " " + "detail",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, "Album Name", __jsx("br", {
      className: "jsx-2852094415",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }), __jsx("span", {
      className: "jsx-2852094415",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, album.name)), __jsx("p", {
      className: "jsx-2852094415" + " " + "detail",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, "Release Date", __jsx("br", {
      className: "jsx-2852094415",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }), __jsx("span", {
      className: "jsx-2852094415",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, album.releaseDate)), __jsx("p", {
      className: "jsx-2852094415" + " " + "detail",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, "Composers", __jsx("br", {
      className: "jsx-2852094415",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }), __jsx("span", {
      className: "jsx-2852094415",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, album.writers.map(function (writer, j) {
      if (j + 1 < album.writers.length) {
        return __jsx("span", {
          key: j,
          className: "jsx-2852094415",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          },
          __self: this
        }, "".concat(writer, ", "));
      } else {
        return __jsx("span", {
          key: j,
          className: "jsx-2852094415",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          __self: this
        }, writer);
      }
    }))), __jsx("p", {
      className: "jsx-2852094415" + " " + "detail",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, "Song Number", __jsx("br", {
      className: "jsx-2852094415",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }), __jsx("span", {
      className: "jsx-2852094415",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, album.songs)), __jsx("div", {
      className: "jsx-2852094415" + " " + "detail",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, "Song Names", __jsx("br", {
      className: "jsx-2852094415",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }), __jsx("span", {
      className: "jsx-2852094415",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, album.songNames.map(function (song, k) {
      return __jsx("div", {
        key: k,
        className: "jsx-2852094415",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, __jsx("span", {
        className: "jsx-2852094415",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, song), __jsx("br", {
        className: "jsx-2852094415",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }));
    }))), __jsx("h2", {
      className: "jsx-2852094415",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, "ART"), __jsx(_components_ViewAlbumSides__WEBPACK_IMPORTED_MODULE_3__["default"], {
      album: album.name.toLowerCase().split(' ').join('-'),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }));
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2852094415",
    __self: this
  }, ".album-vendors.jsx-2852094415{display:grid;grid-template-areas:\"iTunes googlePlay\" \"amazonPrime cdBaby\";grid-template-rows:\"3rem 3rem\";grid-template-columns:\"50% 50%\";grid-row-gap:2rem;margin:2rem 0;}.albums.jsx-2852094415{text-align:left;}.detail.jsx-2852094415{color:#f29a2f;}.detail.jsx-2852094415 span.jsx-2852094415{color:#fff;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW0uZGF2aXMtY2FzdHJvL0Rlc2t0b3AvYmVsbGZsb3dlci1zaXRlLW5leHRqcy9wYWdlcy9hbGJ1bS9bYWxidW1OYW1lXS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQ3dCLEFBSThCLEFBU0csQUFHRixBQUdILFdBQ2YsRUFkcUMsQ0FXckMsRUFIQSwwREFQbUMsK0JBQ0MsZ0NBQ2Qsa0JBQ0osY0FDbEIiLCJmaWxlIjoiL1VzZXJzL3NhbS5kYXZpcy1jYXN0cm8vRGVza3RvcC9iZWxsZmxvd2VyLXNpdGUtbmV4dGpzL3BhZ2VzL2FsYnVtL1thbGJ1bU5hbWVdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN0eWxlQmFzZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL1N0eWxlQmFzZSc7XG5pbXBvcnQgVmlld0FsYnVtU2lkZXMgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9WaWV3QWxidW1TaWRlcyc7XG5pbXBvcnQgYWxidW1JbmZvIGZyb20gJy4uLy4uL3B1YmxpYy9hbGJ1bUluZm8uanMnO1xuLy8gaW1wb3J0IEFsYnVtVmVuZG9ycyBmcm9tICcuLi8uLi9jb21wb25lbnRzL0FsYnVtVmVuZG9ycyc7XG5cbmNvbnN0IEFsYnVtID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxTdHlsZUJhc2U+XG4gICAgICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsYnVtc1wiPlxuICAgICAgICAgICAgICAgIHthbGJ1bUluZm8ubWFwKChhbGJ1bSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8QWxidW1WZW5kb3JzIHZlbmRvcj17YWxidW0udmVuZG9yc30vPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+SU5GTzwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXRhaWxcIj5BbGJ1bSBOYW1lPGJyLz48c3Bhbj57YWxidW0ubmFtZX08L3NwYW4+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGV0YWlsXCI+UmVsZWFzZSBEYXRlPGJyLz48c3Bhbj57YWxidW0ucmVsZWFzZURhdGV9PC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRldGFpbFwiPkNvbXBvc2Vyczxici8+PHNwYW4+e2FsYnVtLndyaXRlcnMubWFwKCh3cml0ZXIsIGopID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaisxIDwgYWxidW0ud3JpdGVycy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxzcGFuIGtleT17an0+e2Ake3dyaXRlcn0sIGB9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8c3BhbiBrZXk9e2p9Pnt3cml0ZXJ9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRldGFpbFwiPlNvbmcgTnVtYmVyPGJyLz48c3Bhbj57YWxidW0uc29uZ3N9PC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlsXCI+U29uZyBOYW1lczxici8+PHNwYW4+e2FsYnVtLnNvbmdOYW1lcy5tYXAoKHNvbmcsIGspID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBrZXk9e2t9PjxzcGFuPntzb25nfTwvc3Bhbj48YnIvPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9PC9zcGFuPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPkFSVDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Vmlld0FsYnVtU2lkZXMgYWxidW09e2FsYnVtLm5hbWUudG9Mb3dlckNhc2UoKS5zcGxpdCgnICcpLmpvaW4oJy0nKX0vPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG5cbiAgICAgICAgICAgIC5hbGJ1bS12ZW5kb3JzIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiaVR1bmVzIGdvb2dsZVBsYXlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFtYXpvblByaW1lIGNkQmFieVwiO1xuICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogXCIzcmVtIDNyZW1cIjtcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IFwiNTAlIDUwJVwiO1xuICAgICAgICAgICAgICAgIGdyaWQtcm93LWdhcDogMnJlbTtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDJyZW0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5hbGJ1bXMge1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZGV0YWlsIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2YyOWEyZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5kZXRhaWwgc3BhbiB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvU3R5bGVCYXNlPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWxidW07Il19 */\n/*@ sourceURL=/Users/sam.davis-castro/Desktop/bellflower-site-nextjs/pages/album/[albumName].js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Album);

/***/ })

})
//# sourceMappingURL=[albumName].js.11755e0c29c2fc9a66ac.hot-update.js.map