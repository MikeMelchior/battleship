(self["webpackChunkbattleship"] = self["webpackChunkbattleship"] || []).push([["game"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --midnightGreen: #073B3A;\n    --dartmouthGreen: #0B6E4F;\n    --pigmentGreen: #08A045;\n    --mantis: #6BBF59;\n    --ecru: #DDB771;\n    --engineeringOrange: #BF0603;\n}\n\n* {\n    margin: 0;\n    box-sizing: border-box;\n}\n\nbody,\nhtml {\n    height: 100%;\n}\n\n.header {\n    font-size: 40px;\n    font-weight: 600;\n    display: flex;\n    justify-content: center;\n    padding: 1rem;\n    background-color: #6b6969;\n    color: var(--mantis);\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    background-color: var(--ecru);\n}\n\n.opening-window {\n    position: absolute;\n    width: 100%;\n    height: fit-content;\n    min-height: 100%;\n    background-color: var(--ecru); \n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n.opening-window.hidden{\n    width: 0;\n    height: 0;\n    opacity: 0;\n    visibility: hidden;\n}\n\n.input-grid {\n    \n    border: 1px solid;\n    background-color: whitesmoke;\n    display: grid;\n    grid: repeat(10, 35px) / repeat(10, 35px);\n}\n\n.input-grid .cell {\n    border: 1px solid;\n}\n\n.opening-window p {\n    font-size: 30px;\n    /* padding-bottom: 20px; */\n}\n\n.opening-window .buttons {\n    width: 350px;\n    padding: 10px;\n    display: grid;\n    grid: 1fr / 1fr;\n    place-items: center;\n}\n\n.opening-window button {\n    width: 90px;\n    height: 40px;\n    border: 1px solid;\n    border-radius: 5px;\n}\n\n.opening-window button:hover {\n    opacity: 0.8;\n}\n\n.game-info {\n    width: 80%;\n    height: 50px;\n    margin: 60px auto 30px auto;\n    flex-wrap: wrap;\n    gap: 100px;\n}\n\n.game-info p {\n    text-align: center;\n    font-size: 26px;\n}\n.main {\n    height: fit-content;\n    flex: 1;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-evenly;\n    align-items: center;\n    gap: 100px;\n}\n\n.main > div {\n    height: fit-content;\n    border: 2px solid gray;\n    border-radius: 3px;\n}\n\n.grid {\n    width: fit-content;\n    height: fit-content;\n    margin: auto;\n    padding: 2px;\n    display: grid;\n    grid: repeat(10, 35px)/ 1fr;\n}\n\n.grid > div {\n    display: grid;\n    grid: 1fr / repeat(10, 35px);\n}\n\n.grid, \n.grid > div {\n    gap: 3px\n}\n\n.cell {\n    background-color: #FDF0D5;\n    display: grid;\n    place-items: center;\n    line-height: 0;\n    font-size: 9px;\n}\n\n.second-grid .cell:hover,\n.input-grid .cell:hover {\n    background-color: var(--ecru);\n}\n\nfooter {\n    display: flex;\n    justify-content: flex-end;\n    padding: 0 8px 3px 0;\n    margin-top: auto;\n}\nfooter a {\n    text-decoration: none;\n    color: rgb(99, 99, 99);\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* header {\n    width: 100%;\n    height: 60px;\n    background-color: var(--charcoal);\n    font-size: 30px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: var(--richBlack);\n    \n}\n\n.main {\n    background-color: var(--robinEggBlue);\n    flex: 1;\n    min-height: fit-content;\n    display: flex;\n    padding-top: 20px;\n} \n\n.game-area {\n    display: flex;\n    flex-wrap: wrap;\n    width: 90vw;\n    height: 100%;\n    margin: auto;\n}\n\n.game-board {\n    width: fit-content;\n    height: fit-content;\n    margin: auto;\n    display: flex;\n    flex-direction: column;\n    gap: 2px;\n    text-align: center;\n}\n\n.game-board p {\n    color: var(--charcoal);\n    font-size: 26px;\n}\n\n\n.row {\n    display: flex;\n    gap: 2px;\n}\n\n.row > div {\n    height: 30px;\n    width: 30px;\n    border: 1px solid;\n    background-color: var(--papayaWhip);\n    color: transparent;\n} */\n\n\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,wBAAwB;IACxB,yBAAyB;IACzB,uBAAuB;IACvB,iBAAiB;IACjB,eAAe;IACf,4BAA4B;AAChC;;AAEA;IACI,SAAS;IACT,sBAAsB;AAC1B;;AAEA;;IAEI,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,aAAa;IACb,uBAAuB;IACvB,aAAa;IACb,yBAAyB;IACzB,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,6BAA6B;AACjC;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,mBAAmB;IACnB,gBAAgB;IAChB,6BAA6B;IAC7B,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,QAAQ;IACR,SAAS;IACT,UAAU;IACV,kBAAkB;AACtB;;AAEA;;IAEI,iBAAiB;IACjB,4BAA4B;IAC5B,aAAa;IACb,yCAAyC;AAC7C;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,eAAe;IACf,0BAA0B;AAC9B;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,aAAa;IACb,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,UAAU;IACV,YAAY;IACZ,2BAA2B;IAC3B,eAAe;IACf,UAAU;AACd;;AAEA;IACI,kBAAkB;IAClB,eAAe;AACnB;AACA;IACI,mBAAmB;IACnB,OAAO;IACP,aAAa;IACb,eAAe;IACf,6BAA6B;IAC7B,mBAAmB;IACnB,UAAU;AACd;;AAEA;IACI,mBAAmB;IACnB,sBAAsB;IACtB,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;IACnB,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,2BAA2B;AAC/B;;AAEA;IACI,aAAa;IACb,4BAA4B;AAChC;;AAEA;;IAEI;AACJ;;AAEA;IACI,yBAAyB;IACzB,aAAa;IACb,mBAAmB;IACnB,cAAc;IACd,cAAc;AAClB;;AAEA;;IAEI,6BAA6B;AACjC;;AAEA;IACI,aAAa;IACb,yBAAyB;IACzB,oBAAoB;IACpB,gBAAgB;AACpB;AACA;IACI,qBAAqB;IACrB,sBAAsB;AAC1B;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAgCA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;GAuDG","sourcesContent":[":root {\n    --midnightGreen: #073B3A;\n    --dartmouthGreen: #0B6E4F;\n    --pigmentGreen: #08A045;\n    --mantis: #6BBF59;\n    --ecru: #DDB771;\n    --engineeringOrange: #BF0603;\n}\n\n* {\n    margin: 0;\n    box-sizing: border-box;\n}\n\nbody,\nhtml {\n    height: 100%;\n}\n\n.header {\n    font-size: 40px;\n    font-weight: 600;\n    display: flex;\n    justify-content: center;\n    padding: 1rem;\n    background-color: #6b6969;\n    color: var(--mantis);\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    background-color: var(--ecru);\n}\n\n.opening-window {\n    position: absolute;\n    width: 100%;\n    height: fit-content;\n    min-height: 100%;\n    background-color: var(--ecru); \n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n.opening-window.hidden{\n    width: 0;\n    height: 0;\n    opacity: 0;\n    visibility: hidden;\n}\n\n.input-grid {\n    \n    border: 1px solid;\n    background-color: whitesmoke;\n    display: grid;\n    grid: repeat(10, 35px) / repeat(10, 35px);\n}\n\n.input-grid .cell {\n    border: 1px solid;\n}\n\n.opening-window p {\n    font-size: 30px;\n    /* padding-bottom: 20px; */\n}\n\n.opening-window .buttons {\n    width: 350px;\n    padding: 10px;\n    display: grid;\n    grid: 1fr / 1fr;\n    place-items: center;\n}\n\n.opening-window button {\n    width: 90px;\n    height: 40px;\n    border: 1px solid;\n    border-radius: 5px;\n}\n\n.opening-window button:hover {\n    opacity: 0.8;\n}\n\n.game-info {\n    width: 80%;\n    height: 50px;\n    margin: 60px auto 30px auto;\n    flex-wrap: wrap;\n    gap: 100px;\n}\n\n.game-info p {\n    text-align: center;\n    font-size: 26px;\n}\n.main {\n    height: fit-content;\n    flex: 1;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-evenly;\n    align-items: center;\n    gap: 100px;\n}\n\n.main > div {\n    height: fit-content;\n    border: 2px solid gray;\n    border-radius: 3px;\n}\n\n.grid {\n    width: fit-content;\n    height: fit-content;\n    margin: auto;\n    padding: 2px;\n    display: grid;\n    grid: repeat(10, 35px)/ 1fr;\n}\n\n.grid > div {\n    display: grid;\n    grid: 1fr / repeat(10, 35px);\n}\n\n.grid, \n.grid > div {\n    gap: 3px\n}\n\n.cell {\n    background-color: #FDF0D5;\n    display: grid;\n    place-items: center;\n    line-height: 0;\n    font-size: 9px;\n}\n\n.second-grid .cell:hover,\n.input-grid .cell:hover {\n    background-color: var(--ecru);\n}\n\nfooter {\n    display: flex;\n    justify-content: flex-end;\n    padding: 0 8px 3px 0;\n    margin-top: auto;\n}\nfooter a {\n    text-decoration: none;\n    color: rgb(99, 99, 99);\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* header {\n    width: 100%;\n    height: 60px;\n    background-color: var(--charcoal);\n    font-size: 30px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: var(--richBlack);\n    \n}\n\n.main {\n    background-color: var(--robinEggBlue);\n    flex: 1;\n    min-height: fit-content;\n    display: flex;\n    padding-top: 20px;\n} \n\n.game-area {\n    display: flex;\n    flex-wrap: wrap;\n    width: 90vw;\n    height: 100%;\n    margin: auto;\n}\n\n.game-board {\n    width: fit-content;\n    height: fit-content;\n    margin: auto;\n    display: flex;\n    flex-direction: column;\n    gap: 2px;\n    text-align: center;\n}\n\n.game-board p {\n    color: var(--charcoal);\n    font-size: 26px;\n}\n\n\n.row {\n    display: flex;\n    gap: 2px;\n}\n\n.row > div {\n    height: 30px;\n    width: 30px;\n    border: 1px solid;\n    background-color: var(--papayaWhip);\n    color: transparent;\n} */\n\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css?44b2":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/dom-stuff.js":
/*!**************************!*\
  !*** ./src/dom-stuff.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addListeners": () => (/* binding */ addListeners),
/* harmony export */   "createBoard": () => (/* binding */ createBoard),
/* harmony export */   "renderShips": () => (/* binding */ renderShips),
/* harmony export */   "tempGame": () => (/* binding */ tempGame),
/* harmony export */   "updateBoard": () => (/* binding */ updateBoard)
/* harmony export */ });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css?44b2");



const index = __webpack_require__(/*! ./index */ "./src/index.js")
const gameLoop = __webpack_require__(/*! ./game-loop */ "./src/game-loop.js")



const createInputGrid = () => {
    let grid = document.querySelector('.input-grid');
    let rowNum = 0;
    for (let i = 0; i <= 9; i++) {
        let cellNum = 0;
        for (let j = 0; j <= 9; j++) {
            let cell = document.createElement('div');
            cell.className = 'cell';
            cell.setAttribute('coordinates', `${rowNum},${cellNum}`);
            grid.append(cell);
            cellNum++;
        }
        rowNum++;
    }   
}

createInputGrid();

let inputNodeList = document.querySelectorAll('.input-grid .cell')
    // create temporary game and use it to 
    // store the info of the placed ships,
let tempGame = index.gameBoard();   
setTimeout(() => {
    tempGame.randomlyPlaceShips()
    renderShips(inputNodeList, tempGame.board)
}, 1);


// randomize ship placement button event listener
document.querySelector('.random').addEventListener('click', () => {
    // clear board in case it already exists;
    tempGame.clearBoard();
    tempGame.randomlyPlaceShips();
    renderShips(inputNodeList, tempGame.board)
})  


const createBoard = (targetElement, board) => {
    let element = document.createElement('div');
        element.className = 'grid';

      // use coord variable to set an attribute on 
      // individual DOM cells, corresponding to game board    
    let coord = [0, 0];
    for (let rowX of board) {
        let row = document.createElement('div');
        for (let cellX of rowX) {
            let cell = document.createElement('div');
            cell.classList.add('cell');
            cell.setAttribute('coordinates', `${coord}`);
            coord[1]++;
            row.appendChild(cell);
        }
        element.append(row);
        coord[0]++;
        coord[1] = 0;
    }
    targetElement.append(element);
}

const renderShips = (nodeList, board) => {
    
    nodeList.forEach(cell => {
        let coordY = cell.getAttribute('coordinates')[0];
        let coordX = cell.getAttribute('coordinates')[2];
        if (board[coordY][coordX] !== '') {
            cell.style.backgroundColor = '#073B3A';
        }else {
            cell.style.backgroundColor = '#FDF0D5'
        }
    });
}   

const updateBoard = (nodeList, board) => {
    nodeList.forEach(cell => {
        let coordY = cell.getAttribute('coordinates')[0];
        let coordX = cell.getAttribute('coordinates')[2];
        if (board[coordY][coordX] === 'X') {
            cell.style.backgroundColor = 'red';
        } else if (board[coordY][coordX] === 'M') {
            cell.style.backgroundColor = 'cyan'
        }
    })
}

const attackListener = (cell, player, target) => {
    if (!player.isPlayersTurn) return
    let coordY = cell.getAttribute('coordinates')[0];
    let coordX = cell.getAttribute('coordinates')[2];
    if (target.board[coordY][coordX] === 'X' 
        ||target.board[coordY][coordX] === 'M') return 
    let coord = [coordY, coordX]
    player.attack(coord, target);
    player.isPlayersTurn = false;
}

const addListeners = (nodeList, player, target) => {
    nodeList.forEach( (cell) => {
        cell.addEventListener('click', () => {
            attackListener(cell, player, target)
            updateBoard(nodeList, target.board)
        })
    })
} 

document.querySelector('.start').addEventListener('click', () => {
    document.querySelector('.opening-window').classList.add('hidden')
    gameLoop.default();
})













/***/ }),

/***/ "./src/game-loop.js":
/*!**************************!*\
  !*** ./src/game-loop.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ newGame)
/* harmony export */ });
/* harmony import */ var _dom_stuff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-stuff */ "./src/dom-stuff.js");
const index = __webpack_require__(/*! ./index */ "./src/index.js");


let loop;

function newGame () {
    let playerOne = index.Player('Player-One', false, true);
    let playerOneGame = _dom_stuff__WEBPACK_IMPORTED_MODULE_0__.tempGame;
    let computer = index.Player('Computer', true);
    // let playerOneGame = index.gameBoard();
    let computerGame = index.gameBoard();
    let playerBoard = playerOneGame.board;
    let computerBoard = computerGame.board;

    
    

    
    computerGame.randomlyPlaceShips();


      // create player game board
    let firstGrid = document.querySelector('.first-grid');
    firstGrid.childNodes.forEach(node => {
        node.remove();
    })
    _dom_stuff__WEBPACK_IMPORTED_MODULE_0__.createBoard(firstGrid, playerBoard)
    
      // create computer game board
    let secondGrid = document.querySelector('.second-grid');
    secondGrid.childNodes.forEach(node => {
        node.remove();
    })
    _dom_stuff__WEBPACK_IMPORTED_MODULE_0__.createBoard(secondGrid, computerBoard)

      // render ships on player one
    let playerCells = document.querySelectorAll('.first-grid .cell')
    _dom_stuff__WEBPACK_IMPORTED_MODULE_0__.renderShips(playerCells, playerBoard)

      //add listeners
    let targetCells = document.querySelectorAll('.second-grid .cell');
    _dom_stuff__WEBPACK_IMPORTED_MODULE_0__.addListeners(targetCells, playerOne, computerGame);

      //set up interval to check if computers turn and make move if it is
    loop = setInterval(() => {
        if (!playerOne.isPlayersTurn) {
            computer.attack(null, playerOneGame)
            _dom_stuff__WEBPACK_IMPORTED_MODULE_0__.updateBoard(playerCells, playerBoard)
            playerOne.isPlayersTurn = true;
        }
          // if computer won game :
        if (playerOneGame.allShipsSunk()) {
            clearInterval(loop)
            alert('Computer wins!')
        } 
        if (computerGame.allShipsSunk()) {
            clearInterval(loop)
            alert('Player wins!')
        }
    }, 800)
    
    
    
    
}












/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module) => {

let ships = {
    carrier: {
        name: 'Carrier',
        size: 5,
        code: 'Ca',
    },
    battleship: {
        name: 'Battleship',
        size: 4,
        code: 'Ba',
    },
    cruiser: {
        name: 'Cruiser',
        size: 3,
        code: 'Cr',
    },
    submarine: {
        name: 'Submarine',
        size: 3,
        code: 'Su',
    },
    destroyer: {
        name: 'Destroyer',
        size: 2,
        code: 'De',
    },
}

const shipFactory = (name, size) => {
    let shipName = name;
    let hits = 0;

    let hit = () => {
        hits++;
    }

    return {
        get shipName() {
            return shipName;
        },
        get hits() {
            return hits;
        },
        hit,
        get isSunk() {
            return size === hits;
        },
    }
}

const gameBoard = (length=10) => {

    // board will consist of following markers: 
    // '' For empty square; // M for missed square;
    // X for hit // index of gamePieces array for ship

    let createBoard = () => {
        let board = [];
        for (let i = 0; i < length; i++) {
            let row = [];
            for (let j = 0; j < length; j++) {
                row.push('');
            }
            board.push(row);
        }
        return board;
    }

    let board = createBoard();
    let gamePieces = [];

    let clearBoard = () => {
        board = createBoard()
        gamePieces = [];
    }

    let storeShip = (ship) => {
        let newShip = shipFactory(ship.name, ship.size)
        gamePieces.push(newShip);
    }

    let placeShip = (ship, coord, horizontal=true) => {
          // check ship is being places within boundary of board
        if (horizontal && coord[1] + ship.size > length-1) return new Error('Please place ship within board');
        if (!horizontal && coord[0] + ship.size > length-1) return new Error('Please place ship within board');
        
        if (horizontal) {
              // loop to check if overlapping ships
            for (let i = coord[1]; i < coord[1] + ship.size; i++) {
                if (board[coord[0]][i] !== '') return new Error('Cannot overlap ships')
            }
            for (let i = coord[1]; i < coord[1] + ship.size; i++) {
                board[coord[0]][i] = gamePieces.length;
            }
            // else follow same directions but vertically;
        } else {
            for (let i = coord[0]; i < coord[0] + ship.size; i++) {
                if (board[i][coord[1]] !== '') return new Error ('Cannot overlap ships')
            }
            for (let i = coord[0]; i < coord[0] + ship.size; i++) {
                board[i][coord[1]] = gamePieces.length;
            }

        }
          // store ship in game pieces array
        storeShip(ship);
        return true;
    }

    let randomlyPlaceShips = () => {
        for (let ship in ships) {
            placed = false;
            let x = getRandomCoords();
            let y = coinFlip();
            while (!placed)
              // if ship get placed, exit while loop;
            if (placeShip(ships[ship], x, y) == true) {
                placeShip(ships[ship], x, y);
                placed = true;
              // else get new coordinates and boolean and try again;
            } else {
                x = getRandomCoords();
                y = coinFlip();
            }
        }
    }

    let coinFlip = () => {
        if (Math.random() > 0.5) return true;
        return false;
    }

    let receiveAttack = (coord) => {
        let cell = board[parseInt(coord[0])][parseInt(coord[1])];

        console.log('Attacking:', coord, '--->', cell)
          // if board cell is empty add M for miss, if not empty,
          // target game piece in gamePieces array using board cell 
          // hit the corresponding ship and add X to board;
        if (cell === '') return board[coord[0]][coord[1]] = 'M';  // M for miss
        
        if (cell !== '') {
            gamePieces[cell].hit();
            board[coord[0]][coord[1]] = 'X';
        }
    }

      // check if all ships have been sunk;
    let allShipsSunk = () => {
        for (let piece of gamePieces) {
            if (piece.isSunk === false) return false;
        }
        return true;
    }

      // function to check move is valid
    let isMoveValid = (coord) => {
        if (board[coord[0]][coord[1]] !== 'M'
            && board[coord[0]][coord[1]] !== 'X'
            && coord[0] < 10
            && coord[1] < 10
            && coord[0] >= 0
            && coord[1] >= 0) return true;
        return false;
    } 

    let rng = (n) => {
        return Math.floor(Math.random() * n)
    }
    // use rng to create random coords
    let getRandomCoords = () => {
        return [rng(10), rng(10)]
    }
     

    return { 
        get board() {
            return board;
        },
        clearBoard,
        get gamePieces() {
            return gamePieces;
        },
        placeShip,
        receiveAttack,
        allShipsSunk,
        isMoveValid,
        randomlyPlaceShips
    }
}

const Player = (name, computer=false, playersTurn=false) => {

    let isPlayersTurn = playersTurn;

      // store array of already played moves for 
      // computer to not make duplicate move;
    let movesMade = [];
      // store array of 'smart' moves if computer gets a hit
    let smartMoves = [];

    let storeSmartMoves = (coordinate) => {

        let y = coordinate[0];
        let x = coordinate[1];

        let possibleMoves = [
            [y+1, x],
            [y-1, x],
            [y, x+1], 
            [y, x-1],
        ]
        for (let move of possibleMoves) {
            if (move[0] >= 0 && move[0] < 10
                && move[1] >= 0 && move[1] < 10
                && !moveAlreadyMade(move)
                && !smartMoveExists(move)) {
                smartMoves.push(move);        
            }
        }
    }
      // 0 - n random number generator
    let rng = (n) => {
        return Math.floor(Math.random() * n)
    }
      // use rng to create random coords
    let getRandomCoords = () => {
        return [rng(10), rng(10)]
    }

    let wasHit = (coord, board) => {
        if (board[coord[0]][coord[1]] === 'X') return true;
        return false;
    }

    let smartMoveExists = (coord) => {
        for (let move of smartMoves) {
            if (JSON.stringify(coord) == JSON.stringify(move)) return true;
        }
        return false
    }

    let moveAlreadyMade = (coord) => {
        for (let move of movesMade) {
            if (JSON.stringify(coord) == JSON.stringify(move)) return true
        }
        return false;
    }


    let attack = (coord, targetEnemy) => {

        if (!computer) {
            targetEnemy.receiveAttack(coord);
        } else {
              // if smart moves exist, use one, if not, get random coordinate
            if (smartMoves.length > 0) {
                let randomSmartMove = rng(smartMoves.length);
                let smartMove = smartMoves[randomSmartMove]
                smartMoves.splice(randomSmartMove, 1);
                targetEnemy.receiveAttack(smartMove);

                // if move was hit store smartmoves
                if (wasHit(smartMove, targetEnemy.board)) {
                    storeSmartMoves(smartMove, targetEnemy.board)
                }
                movesMade.push(smartMove);
            } else {
                console.log('random move')
                let randomCoord = getRandomCoords();
                // if 'random' move has already been made, 
                // create another pair of randoms coords 
                // until move hasn't been made
                while (moveAlreadyMade(randomCoord)) {
                    randomCoord = getRandomCoords(); 
                }
                targetEnemy.receiveAttack(randomCoord);
                movesMade.push(randomCoord);
                // if move was hit store smartMoves
                if (wasHit(randomCoord, targetEnemy.board)) {
                    storeSmartMoves(randomCoord, targetEnemy.board)
                }
            }
        }
        console.log(smartMoves)

    }

    return {
        name, 
        attack,
        get isPlayersTurn() {
            return isPlayersTurn;
        },
        set isPlayersTurn(val) {
            return isPlayersTurn = val;
        }

    }
}

module.exports = {
    ships,
    shipFactory,
    gameBoard,
    Player
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/game-loop.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQzdEO0FBQ0E7QUFDQSxtQ0FBbUMsMEJBQTBCO0FBQzdEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtFQUFrRTtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2RvbS1zdHVmZi5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWUtbG9vcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAtLW1pZG5pZ2h0R3JlZW46ICMwNzNCM0E7XFxuICAgIC0tZGFydG1vdXRoR3JlZW46ICMwQjZFNEY7XFxuICAgIC0tcGlnbWVudEdyZWVuOiAjMDhBMDQ1O1xcbiAgICAtLW1hbnRpczogIzZCQkY1OTtcXG4gICAgLS1lY3J1OiAjRERCNzcxO1xcbiAgICAtLWVuZ2luZWVyaW5nT3JhbmdlOiAjQkYwNjAzO1xcbn1cXG5cXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5LFxcbmh0bWwge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmI2OTY5O1xcbiAgICBjb2xvcjogdmFyKC0tbWFudGlzKTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWVjcnUpO1xcbn1cXG5cXG4ub3BlbmluZy13aW5kb3cge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1lY3J1KTsgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ub3BlbmluZy13aW5kb3cuaGlkZGVue1xcbiAgICB3aWR0aDogMDtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5pbnB1dC1ncmlkIHtcXG4gICAgXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkOiByZXBlYXQoMTAsIDM1cHgpIC8gcmVwZWF0KDEwLCAzNXB4KTtcXG59XFxuXFxuLmlucHV0LWdyaWQgLmNlbGwge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcXG59XFxuXFxuLm9wZW5pbmctd2luZG93IHAge1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIC8qIHBhZGRpbmctYm90dG9tOiAyMHB4OyAqL1xcbn1cXG5cXG4ub3BlbmluZy13aW5kb3cgLmJ1dHRvbnMge1xcbiAgICB3aWR0aDogMzUwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQ6IDFmciAvIDFmcjtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm9wZW5pbmctd2luZG93IGJ1dHRvbiB7XFxuICAgIHdpZHRoOiA5MHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5vcGVuaW5nLXdpbmRvdyBidXR0b246aG92ZXIge1xcbiAgICBvcGFjaXR5OiAwLjg7XFxufVxcblxcbi5nYW1lLWluZm8ge1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIG1hcmdpbjogNjBweCBhdXRvIDMwcHggYXV0bztcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBnYXA6IDEwMHB4O1xcbn1cXG5cXG4uZ2FtZS1pbmZvIHAge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMjZweDtcXG59XFxuLm1haW4ge1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwMHB4O1xcbn1cXG5cXG4ubWFpbiA+IGRpdiB7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyYXk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuXFxuLmdyaWQge1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgcGFkZGluZzogMnB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkOiByZXBlYXQoMTAsIDM1cHgpLyAxZnI7XFxufVxcblxcbi5ncmlkID4gZGl2IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZDogMWZyIC8gcmVwZWF0KDEwLCAzNXB4KTtcXG59XFxuXFxuLmdyaWQsIFxcbi5ncmlkID4gZGl2IHtcXG4gICAgZ2FwOiAzcHhcXG59XFxuXFxuLmNlbGwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkRGMEQ1O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgICBsaW5lLWhlaWdodDogMDtcXG4gICAgZm9udC1zaXplOiA5cHg7XFxufVxcblxcbi5zZWNvbmQtZ3JpZCAuY2VsbDpob3ZlcixcXG4uaW5wdXQtZ3JpZCAuY2VsbDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWVjcnUpO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBwYWRkaW5nOiAwIDhweCAzcHggMDtcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXG59XFxuZm9vdGVyIGEge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiByZ2IoOTksIDk5LCA5OSk7XFxufVxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcbi8qIGhlYWRlciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNoYXJjb2FsKTtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgY29sb3I6IHZhcigtLXJpY2hCbGFjayk7XFxuICAgIFxcbn1cXG5cXG4ubWFpbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJvYmluRWdnQmx1ZSk7XFxuICAgIGZsZXg6IDE7XFxuICAgIG1pbi1oZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcXG59IFxcblxcbi5nYW1lLWFyZWEge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIHdpZHRoOiA5MHZ3O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG1hcmdpbjogYXV0bztcXG59XFxuXFxuLmdhbWUtYm9hcmQge1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAycHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmdhbWUtYm9hcmQgcCB7XFxuICAgIGNvbG9yOiB2YXIoLS1jaGFyY29hbCk7XFxuICAgIGZvbnQtc2l6ZTogMjZweDtcXG59XFxuXFxuXFxuLnJvdyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMnB4O1xcbn1cXG5cXG4ucm93ID4gZGl2IHtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhcGF5YVdoaXApO1xcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxufSAqL1xcblxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksd0JBQXdCO0lBQ3hCLHlCQUF5QjtJQUN6Qix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxTQUFTO0lBQ1Qsc0JBQXNCO0FBQzFCOztBQUVBOztJQUVJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQiw2QkFBNkI7SUFDN0IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksUUFBUTtJQUNSLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLGlCQUFpQjtJQUNqQiw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7SUFDZiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7SUFDYixlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLGVBQWU7SUFDZixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLE9BQU87SUFDUCxhQUFhO0lBQ2IsZUFBZTtJQUNmLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtJQUNiLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw0QkFBNEI7QUFDaEM7O0FBRUE7O0lBRUk7QUFDSjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxjQUFjO0FBQ2xCOztBQUVBOztJQUVJLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLHNCQUFzQjtBQUMxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F1REdcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLW1pZG5pZ2h0R3JlZW46ICMwNzNCM0E7XFxuICAgIC0tZGFydG1vdXRoR3JlZW46ICMwQjZFNEY7XFxuICAgIC0tcGlnbWVudEdyZWVuOiAjMDhBMDQ1O1xcbiAgICAtLW1hbnRpczogIzZCQkY1OTtcXG4gICAgLS1lY3J1OiAjRERCNzcxO1xcbiAgICAtLWVuZ2luZWVyaW5nT3JhbmdlOiAjQkYwNjAzO1xcbn1cXG5cXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5LFxcbmh0bWwge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmI2OTY5O1xcbiAgICBjb2xvcjogdmFyKC0tbWFudGlzKTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWVjcnUpO1xcbn1cXG5cXG4ub3BlbmluZy13aW5kb3cge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1lY3J1KTsgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ub3BlbmluZy13aW5kb3cuaGlkZGVue1xcbiAgICB3aWR0aDogMDtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5pbnB1dC1ncmlkIHtcXG4gICAgXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkOiByZXBlYXQoMTAsIDM1cHgpIC8gcmVwZWF0KDEwLCAzNXB4KTtcXG59XFxuXFxuLmlucHV0LWdyaWQgLmNlbGwge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcXG59XFxuXFxuLm9wZW5pbmctd2luZG93IHAge1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIC8qIHBhZGRpbmctYm90dG9tOiAyMHB4OyAqL1xcbn1cXG5cXG4ub3BlbmluZy13aW5kb3cgLmJ1dHRvbnMge1xcbiAgICB3aWR0aDogMzUwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQ6IDFmciAvIDFmcjtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm9wZW5pbmctd2luZG93IGJ1dHRvbiB7XFxuICAgIHdpZHRoOiA5MHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5vcGVuaW5nLXdpbmRvdyBidXR0b246aG92ZXIge1xcbiAgICBvcGFjaXR5OiAwLjg7XFxufVxcblxcbi5nYW1lLWluZm8ge1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIG1hcmdpbjogNjBweCBhdXRvIDMwcHggYXV0bztcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBnYXA6IDEwMHB4O1xcbn1cXG5cXG4uZ2FtZS1pbmZvIHAge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMjZweDtcXG59XFxuLm1haW4ge1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwMHB4O1xcbn1cXG5cXG4ubWFpbiA+IGRpdiB7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyYXk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuXFxuLmdyaWQge1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgcGFkZGluZzogMnB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkOiByZXBlYXQoMTAsIDM1cHgpLyAxZnI7XFxufVxcblxcbi5ncmlkID4gZGl2IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZDogMWZyIC8gcmVwZWF0KDEwLCAzNXB4KTtcXG59XFxuXFxuLmdyaWQsIFxcbi5ncmlkID4gZGl2IHtcXG4gICAgZ2FwOiAzcHhcXG59XFxuXFxuLmNlbGwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkRGMEQ1O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgICBsaW5lLWhlaWdodDogMDtcXG4gICAgZm9udC1zaXplOiA5cHg7XFxufVxcblxcbi5zZWNvbmQtZ3JpZCAuY2VsbDpob3ZlcixcXG4uaW5wdXQtZ3JpZCAuY2VsbDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWVjcnUpO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBwYWRkaW5nOiAwIDhweCAzcHggMDtcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXG59XFxuZm9vdGVyIGEge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiByZ2IoOTksIDk5LCA5OSk7XFxufVxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcbi8qIGhlYWRlciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNoYXJjb2FsKTtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgY29sb3I6IHZhcigtLXJpY2hCbGFjayk7XFxuICAgIFxcbn1cXG5cXG4ubWFpbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJvYmluRWdnQmx1ZSk7XFxuICAgIGZsZXg6IDE7XFxuICAgIG1pbi1oZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcXG59IFxcblxcbi5nYW1lLWFyZWEge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIHdpZHRoOiA5MHZ3O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG1hcmdpbjogYXV0bztcXG59XFxuXFxuLmdhbWUtYm9hcmQge1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAycHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmdhbWUtYm9hcmQgcCB7XFxuICAgIGNvbG9yOiB2YXIoLS1jaGFyY29hbCk7XFxuICAgIGZvbnQtc2l6ZTogMjZweDtcXG59XFxuXFxuXFxuLnJvdyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMnB4O1xcbn1cXG5cXG4ucm93ID4gZGl2IHtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhcGF5YVdoaXApO1xcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxufSAqL1xcblxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZXMuY3NzJ1xuXG5cbmNvbnN0IGluZGV4ID0gcmVxdWlyZSgnLi9pbmRleCcpXG5jb25zdCBnYW1lTG9vcCA9IHJlcXVpcmUoJy4vZ2FtZS1sb29wJylcblxuXG5cbmNvbnN0IGNyZWF0ZUlucHV0R3JpZCA9ICgpID0+IHtcbiAgICBsZXQgZ3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC1ncmlkJyk7XG4gICAgbGV0IHJvd051bSA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gOTsgaSsrKSB7XG4gICAgICAgIGxldCBjZWxsTnVtID0gMDtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPD0gOTsgaisrKSB7XG4gICAgICAgICAgICBsZXQgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY2VsbC5jbGFzc05hbWUgPSAnY2VsbCc7XG4gICAgICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZSgnY29vcmRpbmF0ZXMnLCBgJHtyb3dOdW19LCR7Y2VsbE51bX1gKTtcbiAgICAgICAgICAgIGdyaWQuYXBwZW5kKGNlbGwpO1xuICAgICAgICAgICAgY2VsbE51bSsrO1xuICAgICAgICB9XG4gICAgICAgIHJvd051bSsrO1xuICAgIH0gICBcbn1cblxuY3JlYXRlSW5wdXRHcmlkKCk7XG5cbmxldCBpbnB1dE5vZGVMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmlucHV0LWdyaWQgLmNlbGwnKVxuICAgIC8vIGNyZWF0ZSB0ZW1wb3JhcnkgZ2FtZSBhbmQgdXNlIGl0IHRvIFxuICAgIC8vIHN0b3JlIHRoZSBpbmZvIG9mIHRoZSBwbGFjZWQgc2hpcHMsXG5sZXQgdGVtcEdhbWUgPSBpbmRleC5nYW1lQm9hcmQoKTsgICBcbnNldFRpbWVvdXQoKCkgPT4ge1xuICAgIHRlbXBHYW1lLnJhbmRvbWx5UGxhY2VTaGlwcygpXG4gICAgcmVuZGVyU2hpcHMoaW5wdXROb2RlTGlzdCwgdGVtcEdhbWUuYm9hcmQpXG59LCAxKTtcblxuXG4vLyByYW5kb21pemUgc2hpcCBwbGFjZW1lbnQgYnV0dG9uIGV2ZW50IGxpc3RlbmVyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmFuZG9tJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgLy8gY2xlYXIgYm9hcmQgaW4gY2FzZSBpdCBhbHJlYWR5IGV4aXN0cztcbiAgICB0ZW1wR2FtZS5jbGVhckJvYXJkKCk7XG4gICAgdGVtcEdhbWUucmFuZG9tbHlQbGFjZVNoaXBzKCk7XG4gICAgcmVuZGVyU2hpcHMoaW5wdXROb2RlTGlzdCwgdGVtcEdhbWUuYm9hcmQpXG59KSAgXG5cblxuY29uc3QgY3JlYXRlQm9hcmQgPSAodGFyZ2V0RWxlbWVudCwgYm9hcmQpID0+IHtcbiAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBlbGVtZW50LmNsYXNzTmFtZSA9ICdncmlkJztcblxuICAgICAgLy8gdXNlIGNvb3JkIHZhcmlhYmxlIHRvIHNldCBhbiBhdHRyaWJ1dGUgb24gXG4gICAgICAvLyBpbmRpdmlkdWFsIERPTSBjZWxscywgY29ycmVzcG9uZGluZyB0byBnYW1lIGJvYXJkICAgIFxuICAgIGxldCBjb29yZCA9IFswLCAwXTtcbiAgICBmb3IgKGxldCByb3dYIG9mIGJvYXJkKSB7XG4gICAgICAgIGxldCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZm9yIChsZXQgY2VsbFggb2Ygcm93WCkge1xuICAgICAgICAgICAgbGV0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnY2VsbCcpO1xuICAgICAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ2Nvb3JkaW5hdGVzJywgYCR7Y29vcmR9YCk7XG4gICAgICAgICAgICBjb29yZFsxXSsrO1xuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKGNlbGwpO1xuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQuYXBwZW5kKHJvdyk7XG4gICAgICAgIGNvb3JkWzBdKys7XG4gICAgICAgIGNvb3JkWzFdID0gMDtcbiAgICB9XG4gICAgdGFyZ2V0RWxlbWVudC5hcHBlbmQoZWxlbWVudCk7XG59XG5cbmNvbnN0IHJlbmRlclNoaXBzID0gKG5vZGVMaXN0LCBib2FyZCkgPT4ge1xuICAgIFxuICAgIG5vZGVMaXN0LmZvckVhY2goY2VsbCA9PiB7XG4gICAgICAgIGxldCBjb29yZFkgPSBjZWxsLmdldEF0dHJpYnV0ZSgnY29vcmRpbmF0ZXMnKVswXTtcbiAgICAgICAgbGV0IGNvb3JkWCA9IGNlbGwuZ2V0QXR0cmlidXRlKCdjb29yZGluYXRlcycpWzJdO1xuICAgICAgICBpZiAoYm9hcmRbY29vcmRZXVtjb29yZFhdICE9PSAnJykge1xuICAgICAgICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzA3M0IzQSc7XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNGREYwRDUnXG4gICAgICAgIH1cbiAgICB9KTtcbn0gICBcblxuY29uc3QgdXBkYXRlQm9hcmQgPSAobm9kZUxpc3QsIGJvYXJkKSA9PiB7XG4gICAgbm9kZUxpc3QuZm9yRWFjaChjZWxsID0+IHtcbiAgICAgICAgbGV0IGNvb3JkWSA9IGNlbGwuZ2V0QXR0cmlidXRlKCdjb29yZGluYXRlcycpWzBdO1xuICAgICAgICBsZXQgY29vcmRYID0gY2VsbC5nZXRBdHRyaWJ1dGUoJ2Nvb3JkaW5hdGVzJylbMl07XG4gICAgICAgIGlmIChib2FyZFtjb29yZFldW2Nvb3JkWF0gPT09ICdYJykge1xuICAgICAgICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmVkJztcbiAgICAgICAgfSBlbHNlIGlmIChib2FyZFtjb29yZFldW2Nvb3JkWF0gPT09ICdNJykge1xuICAgICAgICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnY3lhbidcbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmNvbnN0IGF0dGFja0xpc3RlbmVyID0gKGNlbGwsIHBsYXllciwgdGFyZ2V0KSA9PiB7XG4gICAgaWYgKCFwbGF5ZXIuaXNQbGF5ZXJzVHVybikgcmV0dXJuXG4gICAgbGV0IGNvb3JkWSA9IGNlbGwuZ2V0QXR0cmlidXRlKCdjb29yZGluYXRlcycpWzBdO1xuICAgIGxldCBjb29yZFggPSBjZWxsLmdldEF0dHJpYnV0ZSgnY29vcmRpbmF0ZXMnKVsyXTtcbiAgICBpZiAodGFyZ2V0LmJvYXJkW2Nvb3JkWV1bY29vcmRYXSA9PT0gJ1gnIFxuICAgICAgICB8fHRhcmdldC5ib2FyZFtjb29yZFldW2Nvb3JkWF0gPT09ICdNJykgcmV0dXJuIFxuICAgIGxldCBjb29yZCA9IFtjb29yZFksIGNvb3JkWF1cbiAgICBwbGF5ZXIuYXR0YWNrKGNvb3JkLCB0YXJnZXQpO1xuICAgIHBsYXllci5pc1BsYXllcnNUdXJuID0gZmFsc2U7XG59XG5cbmNvbnN0IGFkZExpc3RlbmVycyA9IChub2RlTGlzdCwgcGxheWVyLCB0YXJnZXQpID0+IHtcbiAgICBub2RlTGlzdC5mb3JFYWNoKCAoY2VsbCkgPT4ge1xuICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgYXR0YWNrTGlzdGVuZXIoY2VsbCwgcGxheWVyLCB0YXJnZXQpXG4gICAgICAgICAgICB1cGRhdGVCb2FyZChub2RlTGlzdCwgdGFyZ2V0LmJvYXJkKVxuICAgICAgICB9KVxuICAgIH0pXG59IFxuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcnQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3BlbmluZy13aW5kb3cnKS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgIGdhbWVMb29wLmRlZmF1bHQoKTtcbn0pXG5cblxuXG5cbmV4cG9ydCB7XG4gICAgY3JlYXRlQm9hcmQsXG4gICAgcmVuZGVyU2hpcHMsXG4gICAgdXBkYXRlQm9hcmQsXG4gICAgYWRkTGlzdGVuZXJzLFxuICAgIHRlbXBHYW1lXG59XG5cblxuXG5cblxuXG4iLCJjb25zdCBpbmRleCA9IHJlcXVpcmUoJy4vaW5kZXgnKTtcbmltcG9ydCAqIGFzIGRvbVN0dWZmIGZyb20gJy4vZG9tLXN0dWZmJ1xuXG5sZXQgbG9vcDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbmV3R2FtZSAoKSB7XG4gICAgbGV0IHBsYXllck9uZSA9IGluZGV4LlBsYXllcignUGxheWVyLU9uZScsIGZhbHNlLCB0cnVlKTtcbiAgICBsZXQgcGxheWVyT25lR2FtZSA9IGRvbVN0dWZmLnRlbXBHYW1lO1xuICAgIGxldCBjb21wdXRlciA9IGluZGV4LlBsYXllcignQ29tcHV0ZXInLCB0cnVlKTtcbiAgICAvLyBsZXQgcGxheWVyT25lR2FtZSA9IGluZGV4LmdhbWVCb2FyZCgpO1xuICAgIGxldCBjb21wdXRlckdhbWUgPSBpbmRleC5nYW1lQm9hcmQoKTtcbiAgICBsZXQgcGxheWVyQm9hcmQgPSBwbGF5ZXJPbmVHYW1lLmJvYXJkO1xuICAgIGxldCBjb21wdXRlckJvYXJkID0gY29tcHV0ZXJHYW1lLmJvYXJkO1xuXG4gICAgXG4gICAgXG5cbiAgICBcbiAgICBjb21wdXRlckdhbWUucmFuZG9tbHlQbGFjZVNoaXBzKCk7XG5cblxuICAgICAgLy8gY3JlYXRlIHBsYXllciBnYW1lIGJvYXJkXG4gICAgbGV0IGZpcnN0R3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5maXJzdC1ncmlkJyk7XG4gICAgZmlyc3RHcmlkLmNoaWxkTm9kZXMuZm9yRWFjaChub2RlID0+IHtcbiAgICAgICAgbm9kZS5yZW1vdmUoKTtcbiAgICB9KVxuICAgIGRvbVN0dWZmLmNyZWF0ZUJvYXJkKGZpcnN0R3JpZCwgcGxheWVyQm9hcmQpXG4gICAgXG4gICAgICAvLyBjcmVhdGUgY29tcHV0ZXIgZ2FtZSBib2FyZFxuICAgIGxldCBzZWNvbmRHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlY29uZC1ncmlkJyk7XG4gICAgc2Vjb25kR3JpZC5jaGlsZE5vZGVzLmZvckVhY2gobm9kZSA9PiB7XG4gICAgICAgIG5vZGUucmVtb3ZlKCk7XG4gICAgfSlcbiAgICBkb21TdHVmZi5jcmVhdGVCb2FyZChzZWNvbmRHcmlkLCBjb21wdXRlckJvYXJkKVxuXG4gICAgICAvLyByZW5kZXIgc2hpcHMgb24gcGxheWVyIG9uZVxuICAgIGxldCBwbGF5ZXJDZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5maXJzdC1ncmlkIC5jZWxsJylcbiAgICBkb21TdHVmZi5yZW5kZXJTaGlwcyhwbGF5ZXJDZWxscywgcGxheWVyQm9hcmQpXG5cbiAgICAgIC8vYWRkIGxpc3RlbmVyc1xuICAgIGxldCB0YXJnZXRDZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWNvbmQtZ3JpZCAuY2VsbCcpO1xuICAgIGRvbVN0dWZmLmFkZExpc3RlbmVycyh0YXJnZXRDZWxscywgcGxheWVyT25lLCBjb21wdXRlckdhbWUpO1xuXG4gICAgICAvL3NldCB1cCBpbnRlcnZhbCB0byBjaGVjayBpZiBjb21wdXRlcnMgdHVybiBhbmQgbWFrZSBtb3ZlIGlmIGl0IGlzXG4gICAgbG9vcCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgaWYgKCFwbGF5ZXJPbmUuaXNQbGF5ZXJzVHVybikge1xuICAgICAgICAgICAgY29tcHV0ZXIuYXR0YWNrKG51bGwsIHBsYXllck9uZUdhbWUpXG4gICAgICAgICAgICBkb21TdHVmZi51cGRhdGVCb2FyZChwbGF5ZXJDZWxscywgcGxheWVyQm9hcmQpXG4gICAgICAgICAgICBwbGF5ZXJPbmUuaXNQbGF5ZXJzVHVybiA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgICAvLyBpZiBjb21wdXRlciB3b24gZ2FtZSA6XG4gICAgICAgIGlmIChwbGF5ZXJPbmVHYW1lLmFsbFNoaXBzU3VuaygpKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKGxvb3ApXG4gICAgICAgICAgICBhbGVydCgnQ29tcHV0ZXIgd2lucyEnKVxuICAgICAgICB9IFxuICAgICAgICBpZiAoY29tcHV0ZXJHYW1lLmFsbFNoaXBzU3VuaygpKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKGxvb3ApXG4gICAgICAgICAgICBhbGVydCgnUGxheWVyIHdpbnMhJylcbiAgICAgICAgfVxuICAgIH0sIDgwMClcbiAgICBcbiAgICBcbiAgICBcbiAgICBcbn1cblxuXG5cblxuXG5cblxuXG5cblxuIiwibGV0IHNoaXBzID0ge1xuICAgIGNhcnJpZXI6IHtcbiAgICAgICAgbmFtZTogJ0NhcnJpZXInLFxuICAgICAgICBzaXplOiA1LFxuICAgICAgICBjb2RlOiAnQ2EnLFxuICAgIH0sXG4gICAgYmF0dGxlc2hpcDoge1xuICAgICAgICBuYW1lOiAnQmF0dGxlc2hpcCcsXG4gICAgICAgIHNpemU6IDQsXG4gICAgICAgIGNvZGU6ICdCYScsXG4gICAgfSxcbiAgICBjcnVpc2VyOiB7XG4gICAgICAgIG5hbWU6ICdDcnVpc2VyJyxcbiAgICAgICAgc2l6ZTogMyxcbiAgICAgICAgY29kZTogJ0NyJyxcbiAgICB9LFxuICAgIHN1Ym1hcmluZToge1xuICAgICAgICBuYW1lOiAnU3VibWFyaW5lJyxcbiAgICAgICAgc2l6ZTogMyxcbiAgICAgICAgY29kZTogJ1N1JyxcbiAgICB9LFxuICAgIGRlc3Ryb3llcjoge1xuICAgICAgICBuYW1lOiAnRGVzdHJveWVyJyxcbiAgICAgICAgc2l6ZTogMixcbiAgICAgICAgY29kZTogJ0RlJyxcbiAgICB9LFxufVxuXG5jb25zdCBzaGlwRmFjdG9yeSA9IChuYW1lLCBzaXplKSA9PiB7XG4gICAgbGV0IHNoaXBOYW1lID0gbmFtZTtcbiAgICBsZXQgaGl0cyA9IDA7XG5cbiAgICBsZXQgaGl0ID0gKCkgPT4ge1xuICAgICAgICBoaXRzKys7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0IHNoaXBOYW1lKCkge1xuICAgICAgICAgICAgcmV0dXJuIHNoaXBOYW1lO1xuICAgICAgICB9LFxuICAgICAgICBnZXQgaGl0cygpIHtcbiAgICAgICAgICAgIHJldHVybiBoaXRzO1xuICAgICAgICB9LFxuICAgICAgICBoaXQsXG4gICAgICAgIGdldCBpc1N1bmsoKSB7XG4gICAgICAgICAgICByZXR1cm4gc2l6ZSA9PT0gaGl0cztcbiAgICAgICAgfSxcbiAgICB9XG59XG5cbmNvbnN0IGdhbWVCb2FyZCA9IChsZW5ndGg9MTApID0+IHtcblxuICAgIC8vIGJvYXJkIHdpbGwgY29uc2lzdCBvZiBmb2xsb3dpbmcgbWFya2VyczogXG4gICAgLy8gJycgRm9yIGVtcHR5IHNxdWFyZTsgLy8gTSBmb3IgbWlzc2VkIHNxdWFyZTtcbiAgICAvLyBYIGZvciBoaXQgLy8gaW5kZXggb2YgZ2FtZVBpZWNlcyBhcnJheSBmb3Igc2hpcFxuXG4gICAgbGV0IGNyZWF0ZUJvYXJkID0gKCkgPT4ge1xuICAgICAgICBsZXQgYm9hcmQgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHJvdyA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBsZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIHJvdy5wdXNoKCcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJvYXJkLnB1c2gocm93KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYm9hcmQ7XG4gICAgfVxuXG4gICAgbGV0IGJvYXJkID0gY3JlYXRlQm9hcmQoKTtcbiAgICBsZXQgZ2FtZVBpZWNlcyA9IFtdO1xuXG4gICAgbGV0IGNsZWFyQm9hcmQgPSAoKSA9PiB7XG4gICAgICAgIGJvYXJkID0gY3JlYXRlQm9hcmQoKVxuICAgICAgICBnYW1lUGllY2VzID0gW107XG4gICAgfVxuXG4gICAgbGV0IHN0b3JlU2hpcCA9IChzaGlwKSA9PiB7XG4gICAgICAgIGxldCBuZXdTaGlwID0gc2hpcEZhY3Rvcnkoc2hpcC5uYW1lLCBzaGlwLnNpemUpXG4gICAgICAgIGdhbWVQaWVjZXMucHVzaChuZXdTaGlwKTtcbiAgICB9XG5cbiAgICBsZXQgcGxhY2VTaGlwID0gKHNoaXAsIGNvb3JkLCBob3Jpem9udGFsPXRydWUpID0+IHtcbiAgICAgICAgICAvLyBjaGVjayBzaGlwIGlzIGJlaW5nIHBsYWNlcyB3aXRoaW4gYm91bmRhcnkgb2YgYm9hcmRcbiAgICAgICAgaWYgKGhvcml6b250YWwgJiYgY29vcmRbMV0gKyBzaGlwLnNpemUgPiBsZW5ndGgtMSkgcmV0dXJuIG5ldyBFcnJvcignUGxlYXNlIHBsYWNlIHNoaXAgd2l0aGluIGJvYXJkJyk7XG4gICAgICAgIGlmICghaG9yaXpvbnRhbCAmJiBjb29yZFswXSArIHNoaXAuc2l6ZSA+IGxlbmd0aC0xKSByZXR1cm4gbmV3IEVycm9yKCdQbGVhc2UgcGxhY2Ugc2hpcCB3aXRoaW4gYm9hcmQnKTtcbiAgICAgICAgXG4gICAgICAgIGlmIChob3Jpem9udGFsKSB7XG4gICAgICAgICAgICAgIC8vIGxvb3AgdG8gY2hlY2sgaWYgb3ZlcmxhcHBpbmcgc2hpcHNcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBjb29yZFsxXTsgaSA8IGNvb3JkWzFdICsgc2hpcC5zaXplOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoYm9hcmRbY29vcmRbMF1dW2ldICE9PSAnJykgcmV0dXJuIG5ldyBFcnJvcignQ2Fubm90IG92ZXJsYXAgc2hpcHMnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IGNvb3JkWzFdOyBpIDwgY29vcmRbMV0gKyBzaGlwLnNpemU7IGkrKykge1xuICAgICAgICAgICAgICAgIGJvYXJkW2Nvb3JkWzBdXVtpXSA9IGdhbWVQaWVjZXMubGVuZ3RoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gZWxzZSBmb2xsb3cgc2FtZSBkaXJlY3Rpb25zIGJ1dCB2ZXJ0aWNhbGx5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IGNvb3JkWzBdOyBpIDwgY29vcmRbMF0gKyBzaGlwLnNpemU7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChib2FyZFtpXVtjb29yZFsxXV0gIT09ICcnKSByZXR1cm4gbmV3IEVycm9yICgnQ2Fubm90IG92ZXJsYXAgc2hpcHMnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IGNvb3JkWzBdOyBpIDwgY29vcmRbMF0gKyBzaGlwLnNpemU7IGkrKykge1xuICAgICAgICAgICAgICAgIGJvYXJkW2ldW2Nvb3JkWzFdXSA9IGdhbWVQaWVjZXMubGVuZ3RoO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgICAgICAvLyBzdG9yZSBzaGlwIGluIGdhbWUgcGllY2VzIGFycmF5XG4gICAgICAgIHN0b3JlU2hpcChzaGlwKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgbGV0IHJhbmRvbWx5UGxhY2VTaGlwcyA9ICgpID0+IHtcbiAgICAgICAgZm9yIChsZXQgc2hpcCBpbiBzaGlwcykge1xuICAgICAgICAgICAgcGxhY2VkID0gZmFsc2U7XG4gICAgICAgICAgICBsZXQgeCA9IGdldFJhbmRvbUNvb3JkcygpO1xuICAgICAgICAgICAgbGV0IHkgPSBjb2luRmxpcCgpO1xuICAgICAgICAgICAgd2hpbGUgKCFwbGFjZWQpXG4gICAgICAgICAgICAgIC8vIGlmIHNoaXAgZ2V0IHBsYWNlZCwgZXhpdCB3aGlsZSBsb29wO1xuICAgICAgICAgICAgaWYgKHBsYWNlU2hpcChzaGlwc1tzaGlwXSwgeCwgeSkgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHBsYWNlU2hpcChzaGlwc1tzaGlwXSwgeCwgeSk7XG4gICAgICAgICAgICAgICAgcGxhY2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgLy8gZWxzZSBnZXQgbmV3IGNvb3JkaW5hdGVzIGFuZCBib29sZWFuIGFuZCB0cnkgYWdhaW47XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHggPSBnZXRSYW5kb21Db29yZHMoKTtcbiAgICAgICAgICAgICAgICB5ID0gY29pbkZsaXAoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxldCBjb2luRmxpcCA9ICgpID0+IHtcbiAgICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPiAwLjUpIHJldHVybiB0cnVlO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgbGV0IHJlY2VpdmVBdHRhY2sgPSAoY29vcmQpID0+IHtcbiAgICAgICAgbGV0IGNlbGwgPSBib2FyZFtwYXJzZUludChjb29yZFswXSldW3BhcnNlSW50KGNvb3JkWzFdKV07XG5cbiAgICAgICAgY29uc29sZS5sb2coJ0F0dGFja2luZzonLCBjb29yZCwgJy0tLT4nLCBjZWxsKVxuICAgICAgICAgIC8vIGlmIGJvYXJkIGNlbGwgaXMgZW1wdHkgYWRkIE0gZm9yIG1pc3MsIGlmIG5vdCBlbXB0eSxcbiAgICAgICAgICAvLyB0YXJnZXQgZ2FtZSBwaWVjZSBpbiBnYW1lUGllY2VzIGFycmF5IHVzaW5nIGJvYXJkIGNlbGwgXG4gICAgICAgICAgLy8gaGl0IHRoZSBjb3JyZXNwb25kaW5nIHNoaXAgYW5kIGFkZCBYIHRvIGJvYXJkO1xuICAgICAgICBpZiAoY2VsbCA9PT0gJycpIHJldHVybiBib2FyZFtjb29yZFswXV1bY29vcmRbMV1dID0gJ00nOyAgLy8gTSBmb3IgbWlzc1xuICAgICAgICBcbiAgICAgICAgaWYgKGNlbGwgIT09ICcnKSB7XG4gICAgICAgICAgICBnYW1lUGllY2VzW2NlbGxdLmhpdCgpO1xuICAgICAgICAgICAgYm9hcmRbY29vcmRbMF1dW2Nvb3JkWzFdXSA9ICdYJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgICAgLy8gY2hlY2sgaWYgYWxsIHNoaXBzIGhhdmUgYmVlbiBzdW5rO1xuICAgIGxldCBhbGxTaGlwc1N1bmsgPSAoKSA9PiB7XG4gICAgICAgIGZvciAobGV0IHBpZWNlIG9mIGdhbWVQaWVjZXMpIHtcbiAgICAgICAgICAgIGlmIChwaWVjZS5pc1N1bmsgPT09IGZhbHNlKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgICAvLyBmdW5jdGlvbiB0byBjaGVjayBtb3ZlIGlzIHZhbGlkXG4gICAgbGV0IGlzTW92ZVZhbGlkID0gKGNvb3JkKSA9PiB7XG4gICAgICAgIGlmIChib2FyZFtjb29yZFswXV1bY29vcmRbMV1dICE9PSAnTSdcbiAgICAgICAgICAgICYmIGJvYXJkW2Nvb3JkWzBdXVtjb29yZFsxXV0gIT09ICdYJ1xuICAgICAgICAgICAgJiYgY29vcmRbMF0gPCAxMFxuICAgICAgICAgICAgJiYgY29vcmRbMV0gPCAxMFxuICAgICAgICAgICAgJiYgY29vcmRbMF0gPj0gMFxuICAgICAgICAgICAgJiYgY29vcmRbMV0gPj0gMCkgcmV0dXJuIHRydWU7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IFxuXG4gICAgbGV0IHJuZyA9IChuKSA9PiB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBuKVxuICAgIH1cbiAgICAvLyB1c2Ugcm5nIHRvIGNyZWF0ZSByYW5kb20gY29vcmRzXG4gICAgbGV0IGdldFJhbmRvbUNvb3JkcyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIFtybmcoMTApLCBybmcoMTApXVxuICAgIH1cbiAgICAgXG5cbiAgICByZXR1cm4geyBcbiAgICAgICAgZ2V0IGJvYXJkKCkge1xuICAgICAgICAgICAgcmV0dXJuIGJvYXJkO1xuICAgICAgICB9LFxuICAgICAgICBjbGVhckJvYXJkLFxuICAgICAgICBnZXQgZ2FtZVBpZWNlcygpIHtcbiAgICAgICAgICAgIHJldHVybiBnYW1lUGllY2VzO1xuICAgICAgICB9LFxuICAgICAgICBwbGFjZVNoaXAsXG4gICAgICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgICAgIGFsbFNoaXBzU3VuayxcbiAgICAgICAgaXNNb3ZlVmFsaWQsXG4gICAgICAgIHJhbmRvbWx5UGxhY2VTaGlwc1xuICAgIH1cbn1cblxuY29uc3QgUGxheWVyID0gKG5hbWUsIGNvbXB1dGVyPWZhbHNlLCBwbGF5ZXJzVHVybj1mYWxzZSkgPT4ge1xuXG4gICAgbGV0IGlzUGxheWVyc1R1cm4gPSBwbGF5ZXJzVHVybjtcblxuICAgICAgLy8gc3RvcmUgYXJyYXkgb2YgYWxyZWFkeSBwbGF5ZWQgbW92ZXMgZm9yIFxuICAgICAgLy8gY29tcHV0ZXIgdG8gbm90IG1ha2UgZHVwbGljYXRlIG1vdmU7XG4gICAgbGV0IG1vdmVzTWFkZSA9IFtdO1xuICAgICAgLy8gc3RvcmUgYXJyYXkgb2YgJ3NtYXJ0JyBtb3ZlcyBpZiBjb21wdXRlciBnZXRzIGEgaGl0XG4gICAgbGV0IHNtYXJ0TW92ZXMgPSBbXTtcblxuICAgIGxldCBzdG9yZVNtYXJ0TW92ZXMgPSAoY29vcmRpbmF0ZSkgPT4ge1xuXG4gICAgICAgIGxldCB5ID0gY29vcmRpbmF0ZVswXTtcbiAgICAgICAgbGV0IHggPSBjb29yZGluYXRlWzFdO1xuXG4gICAgICAgIGxldCBwb3NzaWJsZU1vdmVzID0gW1xuICAgICAgICAgICAgW3krMSwgeF0sXG4gICAgICAgICAgICBbeS0xLCB4XSxcbiAgICAgICAgICAgIFt5LCB4KzFdLCBcbiAgICAgICAgICAgIFt5LCB4LTFdLFxuICAgICAgICBdXG4gICAgICAgIGZvciAobGV0IG1vdmUgb2YgcG9zc2libGVNb3Zlcykge1xuICAgICAgICAgICAgaWYgKG1vdmVbMF0gPj0gMCAmJiBtb3ZlWzBdIDwgMTBcbiAgICAgICAgICAgICAgICAmJiBtb3ZlWzFdID49IDAgJiYgbW92ZVsxXSA8IDEwXG4gICAgICAgICAgICAgICAgJiYgIW1vdmVBbHJlYWR5TWFkZShtb3ZlKVxuICAgICAgICAgICAgICAgICYmICFzbWFydE1vdmVFeGlzdHMobW92ZSkpIHtcbiAgICAgICAgICAgICAgICBzbWFydE1vdmVzLnB1c2gobW92ZSk7ICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAgIC8vIDAgLSBuIHJhbmRvbSBudW1iZXIgZ2VuZXJhdG9yXG4gICAgbGV0IHJuZyA9IChuKSA9PiB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBuKVxuICAgIH1cbiAgICAgIC8vIHVzZSBybmcgdG8gY3JlYXRlIHJhbmRvbSBjb29yZHNcbiAgICBsZXQgZ2V0UmFuZG9tQ29vcmRzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gW3JuZygxMCksIHJuZygxMCldXG4gICAgfVxuXG4gICAgbGV0IHdhc0hpdCA9IChjb29yZCwgYm9hcmQpID0+IHtcbiAgICAgICAgaWYgKGJvYXJkW2Nvb3JkWzBdXVtjb29yZFsxXV0gPT09ICdYJykgcmV0dXJuIHRydWU7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBsZXQgc21hcnRNb3ZlRXhpc3RzID0gKGNvb3JkKSA9PiB7XG4gICAgICAgIGZvciAobGV0IG1vdmUgb2Ygc21hcnRNb3Zlcykge1xuICAgICAgICAgICAgaWYgKEpTT04uc3RyaW5naWZ5KGNvb3JkKSA9PSBKU09OLnN0cmluZ2lmeShtb3ZlKSkgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgbGV0IG1vdmVBbHJlYWR5TWFkZSA9IChjb29yZCkgPT4ge1xuICAgICAgICBmb3IgKGxldCBtb3ZlIG9mIG1vdmVzTWFkZSkge1xuICAgICAgICAgICAgaWYgKEpTT04uc3RyaW5naWZ5KGNvb3JkKSA9PSBKU09OLnN0cmluZ2lmeShtb3ZlKSkgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG5cbiAgICBsZXQgYXR0YWNrID0gKGNvb3JkLCB0YXJnZXRFbmVteSkgPT4ge1xuXG4gICAgICAgIGlmICghY29tcHV0ZXIpIHtcbiAgICAgICAgICAgIHRhcmdldEVuZW15LnJlY2VpdmVBdHRhY2soY29vcmQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyBpZiBzbWFydCBtb3ZlcyBleGlzdCwgdXNlIG9uZSwgaWYgbm90LCBnZXQgcmFuZG9tIGNvb3JkaW5hdGVcbiAgICAgICAgICAgIGlmIChzbWFydE1vdmVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBsZXQgcmFuZG9tU21hcnRNb3ZlID0gcm5nKHNtYXJ0TW92ZXMubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICBsZXQgc21hcnRNb3ZlID0gc21hcnRNb3Zlc1tyYW5kb21TbWFydE1vdmVdXG4gICAgICAgICAgICAgICAgc21hcnRNb3Zlcy5zcGxpY2UocmFuZG9tU21hcnRNb3ZlLCAxKTtcbiAgICAgICAgICAgICAgICB0YXJnZXRFbmVteS5yZWNlaXZlQXR0YWNrKHNtYXJ0TW92ZSk7XG5cbiAgICAgICAgICAgICAgICAvLyBpZiBtb3ZlIHdhcyBoaXQgc3RvcmUgc21hcnRtb3Zlc1xuICAgICAgICAgICAgICAgIGlmICh3YXNIaXQoc21hcnRNb3ZlLCB0YXJnZXRFbmVteS5ib2FyZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RvcmVTbWFydE1vdmVzKHNtYXJ0TW92ZSwgdGFyZ2V0RW5lbXkuYm9hcmQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG1vdmVzTWFkZS5wdXNoKHNtYXJ0TW92ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyYW5kb20gbW92ZScpXG4gICAgICAgICAgICAgICAgbGV0IHJhbmRvbUNvb3JkID0gZ2V0UmFuZG9tQ29vcmRzKCk7XG4gICAgICAgICAgICAgICAgLy8gaWYgJ3JhbmRvbScgbW92ZSBoYXMgYWxyZWFkeSBiZWVuIG1hZGUsIFxuICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSBhbm90aGVyIHBhaXIgb2YgcmFuZG9tcyBjb29yZHMgXG4gICAgICAgICAgICAgICAgLy8gdW50aWwgbW92ZSBoYXNuJ3QgYmVlbiBtYWRlXG4gICAgICAgICAgICAgICAgd2hpbGUgKG1vdmVBbHJlYWR5TWFkZShyYW5kb21Db29yZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmFuZG9tQ29vcmQgPSBnZXRSYW5kb21Db29yZHMoKTsgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRhcmdldEVuZW15LnJlY2VpdmVBdHRhY2socmFuZG9tQ29vcmQpO1xuICAgICAgICAgICAgICAgIG1vdmVzTWFkZS5wdXNoKHJhbmRvbUNvb3JkKTtcbiAgICAgICAgICAgICAgICAvLyBpZiBtb3ZlIHdhcyBoaXQgc3RvcmUgc21hcnRNb3Zlc1xuICAgICAgICAgICAgICAgIGlmICh3YXNIaXQocmFuZG9tQ29vcmQsIHRhcmdldEVuZW15LmJvYXJkKSkge1xuICAgICAgICAgICAgICAgICAgICBzdG9yZVNtYXJ0TW92ZXMocmFuZG9tQ29vcmQsIHRhcmdldEVuZW15LmJvYXJkKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhzbWFydE1vdmVzKVxuXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZSwgXG4gICAgICAgIGF0dGFjayxcbiAgICAgICAgZ2V0IGlzUGxheWVyc1R1cm4oKSB7XG4gICAgICAgICAgICByZXR1cm4gaXNQbGF5ZXJzVHVybjtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0IGlzUGxheWVyc1R1cm4odmFsKSB7XG4gICAgICAgICAgICByZXR1cm4gaXNQbGF5ZXJzVHVybiA9IHZhbDtcbiAgICAgICAgfVxuXG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBzaGlwcyxcbiAgICBzaGlwRmFjdG9yeSxcbiAgICBnYW1lQm9hcmQsXG4gICAgUGxheWVyXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=