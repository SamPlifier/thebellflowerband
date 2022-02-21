module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "0yw6":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)");

/***/ }),

/***/ "12V9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HJQg");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const StyleBase = props => {
  return __jsx("div", {
    className: "jsx-941705676" + " " + "page-layout"
  }, props.children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "941705676"
  }, ["@import url('https://fonts.googleapis.com/css?family=Noto+Serif+TC:300|BenchNine:300&display=swap');", "html,body{margin:0;padding:0;text-align:center;background:#333;}", "body{margin-top:50px;}", "h1,h2,h3,h4,h5,h6{font-family:'BenchNine',sans-serif;font-weight:300;color:#fff;font-size:2.4rem;text-align:center;}", "a,p,li,button,ul,ol,div,label{font-family:'Open Sans',sans-serif;font-size:1.2rem;line-height:2rem;color:#fff;}", "input,textarea{font-family:'Open Sans',sans-serif;font-size:1.2rem;line-height:2rem;color:#222;}", "ul,ol{list-style-type:none;margin:0;padding:0;line-height:2rem;}", "a{-webkit-text-decoration:none;text-decoration:none;-webkit-transition:all .5s;transition:all .5s;}", "section{padding:1rem;box-sizing:border-box;}", "@media only screen and (min-width:500px){section{padding:1rem 6rem;}}"]));
};

/* harmony default export */ __webpack_exports__["a"] = (StyleBase);

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("rcaY");


/***/ }),

/***/ "EdJK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const albums = [{
  "item": "Bellflower album",
  "name": "Changes On The Way",
  "urlName": "changes-on-the-way",
  "albumImages": "public/changes-on-the-way",
  "releaseDate": "September 30, 2019",
  "writers": ["Franklin Bellflower", "Natasha Wilson", "David Criswell"],
  "songs": "10",
  "price": "$10",
  "songNames": ["Changes on the Way", "Feeling You", "Blowing the Wind", "Looking for the One", "Candy Crunch", "Kind of Like Jolene", "Bradford Pear", "Fire to the Feast", "What Is Love", "To the End"],
  "vendors": [{
    "vendorName": "iTunes",
    "vendorLink": "https://music.apple.com/us/album/changes-on-the-way/1480122305"
  }, {
    "vendorName": "CD Baby",
    "vendorLink": "https://store.cdbaby.com/cd/bellflower"
  }, {
    "vendorName": "Google Play",
    "vendorLink": "https://play.google.com/store/music/album/Bellflower_Changes_on_the_Way?id=Bix7j567nfnaili7n6utbonfe34"
  }, {
    "vendorName": "Amazon Prime",
    "vendorLink": "https://www.amazon.com/Changes-Way-Bellflower/dp/B07XLXV6W8"
  }]
}];
/* harmony default export */ __webpack_exports__["a"] = (albums);

/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "W6dm":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cGbi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HJQg");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const AlbumVendors = props => {
  return __jsx("div", null, __jsx("h2", null, "PURCHASE ON"), __jsx("div", {
    className: "jsx-749630752" + " " + "vendors"
  }, props.vendor.map(vendor => {
    return __jsx("a", {
      key: vendor.vendorName,
      href: vendor.vendorLink,
      className: "jsx-749630752" + " " + "vendor"
    }, vendor.vendorName);
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3557643927"
  }, [".vendors.jsx-749630752{width:100%;display:grid;grid-template-areas:\"topLeft topRight\" \"bottomLeft bottomRight\";grid-template-rows:auto;grid-template-columns:1fr 1fr;grid-row-gap:2rem;grid-column-gap:2rem;margin:2rem 0;}", ".vendor.jsx-749630752{border:2px solid #fff;padding:1rem;text-align:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:2rem;background:#f69d1a;color:#222;-webkit-transition:background ease .5s;transition:background ease .5s;}", ".vendor.jsx-749630752:hover{background:#fff;}"]), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3725597374"
  }, [".vendorAvail{text-align:center;}"])));
};

/* harmony default export */ __webpack_exports__["a"] = (AlbumVendors);

/***/ }),

/***/ "fFg5":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./changes-on-the-way/album-back.png": "kVfV",
	"./changes-on-the-way/album-front.png": "0yw6",
	"./changes-on-the-way/album-left.png": "W6dm",
	"./changes-on-the-way/album-right.png": "jY9z"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "fFg5";

/***/ }),

/***/ "jY9z":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)");

/***/ }),

/***/ "kVfV":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected character '�' (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n(Source code omitted for this binary file)");

/***/ }),

/***/ "rcaY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/StyleBase.js
var StyleBase = __webpack_require__("12V9");

// CONCATENATED MODULE: ./components/ViewAlbumSides.js


var __jsx = external_react_default.a.createElement;



const ViewAlbumSides = props => {
  let album = props.album;
  const {
    0: inView,
    1: setInView
  } = Object(external_react_["useState"])('front');

  const updateInView = view => {
    setInView(view);
    document.getElementsByClassName(view)[0].classList.add('active');
  };

  return __jsx(StyleBase["a" /* default */], null, __jsx("section", {
    className: "jsx-1922064489"
  }, __jsx("div", {
    className: "jsx-1922064489" + " " + "album-container"
  }, __jsx("img", {
    src: "",
    className: "jsx-1922064489"
  }), __jsx("img", {
    src: __webpack_require__("fFg5")(`./${album}/album-${inView}.png`),
    className: "jsx-1922064489" + " " + "icon"
  }), __jsx("div", {
    className: "jsx-1922064489" + " " + "album-controls"
  }, __jsx("button", {
    onClick: () => {
      updateInView('front');
    },
    className: "jsx-1922064489" + " " + `front ${inView === 'front' ? 'active' : ''}`
  }, "Front Cover"), __jsx("button", {
    onClick: () => {
      updateInView('back');
    },
    className: "jsx-1922064489" + " " + `back ${inView === 'back' ? 'active' : ''}`
  }, "Back Cover"), __jsx("button", {
    onClick: () => {
      updateInView('left');
    },
    className: "jsx-1922064489" + " " + `left ${inView === 'left' ? 'active' : ''}`
  }, "Inside Left"), __jsx("button", {
    onClick: () => {
      updateInView('right');
    },
    className: "jsx-1922064489" + " " + `right ${inView === 'right' ? 'active' : ''}`
  }, "Inside Right")))), __jsx(style_default.a, {
    id: "1922064489"
  }, [".album-controls.jsx-1922064489{display:grid;grid-template-areas:\"front back\" \"left right\";grid-template-rows:\"3rem 3rem\";grid-template-columns:\"50% 50%\";grid-row-gap:2rem;grid-column-gap:2rem;margin:2rem 0;}", ".album-controls.jsx-1922064489 button.jsx-1922064489{border:2px solid #fff;padding:1rem;text-align:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:#f69d1a;color:#222;-webkit-transition:background ease .5s;transition:background ease .5s;}", ".album-controls.jsx-1922064489 button.active.jsx-1922064489{background:#fff;}", ".front.jsx-1922064489{grid-area:front;}", ".back.jsx-1922064489{grid-area:back;}", ".left.jsx-1922064489{grid-area:left;}", ".right.jsx-1922064489{grid-area:right;}", "img.jsx-1922064489{width:100%;}"]));
};

/* harmony default export */ var components_ViewAlbumSides = (ViewAlbumSides);
// EXTERNAL MODULE: ./public/albumInfo.js
var albumInfo = __webpack_require__("EdJK");

// EXTERNAL MODULE: ./components/AlbumVendors.js
var AlbumVendors = __webpack_require__("cGbi");

// CONCATENATED MODULE: ./pages/album/[albumName].js


var _albumName_jsx = external_react_default.a.createElement;





const Album = () => {
  return _albumName_jsx(StyleBase["a" /* default */], null, _albumName_jsx("section", {
    className: "jsx-2852094415"
  }, _albumName_jsx("div", {
    className: "jsx-2852094415" + " " + "albums"
  }, albumInfo["a" /* default */].map((album, i) => {
    return _albumName_jsx("div", {
      key: i,
      className: "jsx-2852094415"
    }, _albumName_jsx(AlbumVendors["a" /* default */], {
      vendor: album.vendors
    }), _albumName_jsx("h2", {
      className: "jsx-2852094415"
    }, "INFO"), _albumName_jsx("p", {
      className: "jsx-2852094415" + " " + "detail"
    }, "Album Name", _albumName_jsx("br", {
      className: "jsx-2852094415"
    }), _albumName_jsx("span", {
      className: "jsx-2852094415"
    }, album.name)), _albumName_jsx("p", {
      className: "jsx-2852094415" + " " + "detail"
    }, "Release Date", _albumName_jsx("br", {
      className: "jsx-2852094415"
    }), _albumName_jsx("span", {
      className: "jsx-2852094415"
    }, album.releaseDate)), _albumName_jsx("p", {
      className: "jsx-2852094415" + " " + "detail"
    }, "Composers", _albumName_jsx("br", {
      className: "jsx-2852094415"
    }), _albumName_jsx("span", {
      className: "jsx-2852094415"
    }, album.writers.map((writer, j) => {
      if (j + 1 < album.writers.length) {
        return _albumName_jsx("span", {
          key: j,
          className: "jsx-2852094415"
        }, `${writer}, `);
      } else {
        return _albumName_jsx("span", {
          key: j,
          className: "jsx-2852094415"
        }, writer);
      }
    }))), _albumName_jsx("p", {
      className: "jsx-2852094415" + " " + "detail"
    }, "Song Number", _albumName_jsx("br", {
      className: "jsx-2852094415"
    }), _albumName_jsx("span", {
      className: "jsx-2852094415"
    }, album.songs)), _albumName_jsx("div", {
      className: "jsx-2852094415" + " " + "detail"
    }, "Song Names", _albumName_jsx("br", {
      className: "jsx-2852094415"
    }), _albumName_jsx("span", {
      className: "jsx-2852094415"
    }, album.songNames.map((song, k) => {
      return _albumName_jsx("div", {
        key: k,
        className: "jsx-2852094415"
      }, _albumName_jsx("span", {
        className: "jsx-2852094415"
      }, song), _albumName_jsx("br", {
        className: "jsx-2852094415"
      }));
    }))), _albumName_jsx("h2", {
      className: "jsx-2852094415"
    }, "ART"), _albumName_jsx(components_ViewAlbumSides, {
      album: album.name.toLowerCase().split(' ').join('-')
    }));
  }))), _albumName_jsx(style_default.a, {
    id: "2852094415"
  }, [".album-vendors.jsx-2852094415{display:grid;grid-template-areas:\"iTunes googlePlay\" \"amazonPrime cdBaby\";grid-template-rows:\"3rem 3rem\";grid-template-columns:\"50% 50%\";grid-row-gap:2rem;margin:2rem 0;}", ".albums.jsx-2852094415{text-align:left;}", ".detail.jsx-2852094415{color:#f29a2f;}", ".detail.jsx-2852094415 span.jsx-2852094415{color:#fff;}"]));
};

/* harmony default export */ var _albumName_ = __webpack_exports__["default"] = (Album);

/***/ })

/******/ });