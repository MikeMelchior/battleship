(self["webpackChunkbattleship"] = self["webpackChunkbattleship"] || []).push([["dom"],{

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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --midnightGreen: #073B3A;\n    --dartmouthGreen: #0B6E4F;\n    --pigmentGreen: #08A045;\n    --mantis: #6BBF59;\n    --ecru: #DDB771;\n    --engineeringOrange: #BF0603;\n}\n\n* {\n    margin: 0;\n    box-sizing: border-box;\n}\n\nbody,\nhtml {\n    height: 100%;\n}\n\n.header {\n    font-size: 40px;\n    font-weight: 600;\n    display: flex;\n    justify-content: center;\n    padding: 1rem;\n    background-color: #6b6969;\n    color: var(--mantis);\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    background-color: var(--ecru);\n}\n\n.opening-window {\n    position: absolute;\n    width: 100%;\n    height: fit-content;\n    min-height: 100%;\n    background-color: var(--ecru); \n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n.opening-window.hidden{\n    width: 0;\n    height: 0;\n    opacity: 0;\n    visibility: hidden;\n}\n\n.input-grid {\n    \n    border: 1px solid;\n    background-color: whitesmoke;\n    display: grid;\n    grid: repeat(10, 35px) / repeat(10, 35px);\n}\n\n.input-grid .cell {\n    border: 1px solid;\n}\n\n.opening-window p {\n    font-size: 30px;\n    /* padding-bottom: 20px; */\n}\n\n.opening-window .buttons {\n    width: 350px;\n    padding: 10px;\n    display: grid;\n    grid: 1fr / 1fr;\n    place-items: center;\n}\n\n.opening-window button {\n    width: 90px;\n    height: 40px;\n    border: 1px solid;\n    border-radius: 5px;\n}\n\n.opening-window button:hover {\n    opacity: 0.8;\n}\n\n.game-info {\n    width: 80%;\n    height: fit-content;\n    margin: 60px auto 30px auto;\n    flex-wrap: wrap;\n    gap: 100px;\n}\n\n.game-info p {\n    text-align: center;\n    font-size: 26px;\n}\n.main {\n    height: fit-content;\n    flex: 1;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-evenly;\n    align-items: center;\n    gap: 100px;\n}\n\n.main > div {\n    height: fit-content;\n    border: 2px solid gray;\n    border-radius: 3px;\n}\n\n.grid {\n    width: fit-content;\n    height: fit-content;\n    margin: auto;\n    padding: 2px;\n    display: grid;\n    grid: repeat(10, 35px)/ 1fr;\n}\n\n.grid > div {\n    display: grid;\n    grid: 1fr / repeat(10, 35px);\n}\n\n.grid, \n.grid > div {\n    gap: 3px\n}\n\n.cell {\n    background-color: #FDF0D5;\n    display: grid;\n    place-items: center;\n    line-height: 0;\n    font-size: 9px;\n}\n\n.second-grid .cell:hover,\n.input-grid .cell:hover {\n    background-color: var(--ecru);\n}\n\nfooter {\n    display: flex;\n    justify-content: flex-end;\n    padding: 0 8px 3px 0;\n    margin-top: auto;\n}\nfooter a {\n    text-decoration: none;\n    color: rgb(99, 99, 99);\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* header {\n    width: 100%;\n    height: 60px;\n    background-color: var(--charcoal);\n    font-size: 30px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: var(--richBlack);\n    \n}\n\n.main {\n    background-color: var(--robinEggBlue);\n    flex: 1;\n    min-height: fit-content;\n    display: flex;\n    padding-top: 20px;\n} \n\n.game-area {\n    display: flex;\n    flex-wrap: wrap;\n    width: 90vw;\n    height: 100%;\n    margin: auto;\n}\n\n.game-board {\n    width: fit-content;\n    height: fit-content;\n    margin: auto;\n    display: flex;\n    flex-direction: column;\n    gap: 2px;\n    text-align: center;\n}\n\n.game-board p {\n    color: var(--charcoal);\n    font-size: 26px;\n}\n\n\n.row {\n    display: flex;\n    gap: 2px;\n}\n\n.row > div {\n    height: 30px;\n    width: 30px;\n    border: 1px solid;\n    background-color: var(--papayaWhip);\n    color: transparent;\n} */\n\n\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,wBAAwB;IACxB,yBAAyB;IACzB,uBAAuB;IACvB,iBAAiB;IACjB,eAAe;IACf,4BAA4B;AAChC;;AAEA;IACI,SAAS;IACT,sBAAsB;AAC1B;;AAEA;;IAEI,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,aAAa;IACb,uBAAuB;IACvB,aAAa;IACb,yBAAyB;IACzB,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,6BAA6B;AACjC;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,mBAAmB;IACnB,gBAAgB;IAChB,6BAA6B;IAC7B,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,QAAQ;IACR,SAAS;IACT,UAAU;IACV,kBAAkB;AACtB;;AAEA;;IAEI,iBAAiB;IACjB,4BAA4B;IAC5B,aAAa;IACb,yCAAyC;AAC7C;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,eAAe;IACf,0BAA0B;AAC9B;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,aAAa;IACb,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,UAAU;IACV,mBAAmB;IACnB,2BAA2B;IAC3B,eAAe;IACf,UAAU;AACd;;AAEA;IACI,kBAAkB;IAClB,eAAe;AACnB;AACA;IACI,mBAAmB;IACnB,OAAO;IACP,aAAa;IACb,eAAe;IACf,6BAA6B;IAC7B,mBAAmB;IACnB,UAAU;AACd;;AAEA;IACI,mBAAmB;IACnB,sBAAsB;IACtB,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;IACnB,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,2BAA2B;AAC/B;;AAEA;IACI,aAAa;IACb,4BAA4B;AAChC;;AAEA;;IAEI;AACJ;;AAEA;IACI,yBAAyB;IACzB,aAAa;IACb,mBAAmB;IACnB,cAAc;IACd,cAAc;AAClB;;AAEA;;IAEI,6BAA6B;AACjC;;AAEA;IACI,aAAa;IACb,yBAAyB;IACzB,oBAAoB;IACpB,gBAAgB;AACpB;AACA;IACI,qBAAqB;IACrB,sBAAsB;AAC1B;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAgCA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;GAuDG","sourcesContent":[":root {\n    --midnightGreen: #073B3A;\n    --dartmouthGreen: #0B6E4F;\n    --pigmentGreen: #08A045;\n    --mantis: #6BBF59;\n    --ecru: #DDB771;\n    --engineeringOrange: #BF0603;\n}\n\n* {\n    margin: 0;\n    box-sizing: border-box;\n}\n\nbody,\nhtml {\n    height: 100%;\n}\n\n.header {\n    font-size: 40px;\n    font-weight: 600;\n    display: flex;\n    justify-content: center;\n    padding: 1rem;\n    background-color: #6b6969;\n    color: var(--mantis);\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    background-color: var(--ecru);\n}\n\n.opening-window {\n    position: absolute;\n    width: 100%;\n    height: fit-content;\n    min-height: 100%;\n    background-color: var(--ecru); \n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n.opening-window.hidden{\n    width: 0;\n    height: 0;\n    opacity: 0;\n    visibility: hidden;\n}\n\n.input-grid {\n    \n    border: 1px solid;\n    background-color: whitesmoke;\n    display: grid;\n    grid: repeat(10, 35px) / repeat(10, 35px);\n}\n\n.input-grid .cell {\n    border: 1px solid;\n}\n\n.opening-window p {\n    font-size: 30px;\n    /* padding-bottom: 20px; */\n}\n\n.opening-window .buttons {\n    width: 350px;\n    padding: 10px;\n    display: grid;\n    grid: 1fr / 1fr;\n    place-items: center;\n}\n\n.opening-window button {\n    width: 90px;\n    height: 40px;\n    border: 1px solid;\n    border-radius: 5px;\n}\n\n.opening-window button:hover {\n    opacity: 0.8;\n}\n\n.game-info {\n    width: 80%;\n    height: fit-content;\n    margin: 60px auto 30px auto;\n    flex-wrap: wrap;\n    gap: 100px;\n}\n\n.game-info p {\n    text-align: center;\n    font-size: 26px;\n}\n.main {\n    height: fit-content;\n    flex: 1;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-evenly;\n    align-items: center;\n    gap: 100px;\n}\n\n.main > div {\n    height: fit-content;\n    border: 2px solid gray;\n    border-radius: 3px;\n}\n\n.grid {\n    width: fit-content;\n    height: fit-content;\n    margin: auto;\n    padding: 2px;\n    display: grid;\n    grid: repeat(10, 35px)/ 1fr;\n}\n\n.grid > div {\n    display: grid;\n    grid: 1fr / repeat(10, 35px);\n}\n\n.grid, \n.grid > div {\n    gap: 3px\n}\n\n.cell {\n    background-color: #FDF0D5;\n    display: grid;\n    place-items: center;\n    line-height: 0;\n    font-size: 9px;\n}\n\n.second-grid .cell:hover,\n.input-grid .cell:hover {\n    background-color: var(--ecru);\n}\n\nfooter {\n    display: flex;\n    justify-content: flex-end;\n    padding: 0 8px 3px 0;\n    margin-top: auto;\n}\nfooter a {\n    text-decoration: none;\n    color: rgb(99, 99, 99);\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* header {\n    width: 100%;\n    height: 60px;\n    background-color: var(--charcoal);\n    font-size: 30px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: var(--richBlack);\n    \n}\n\n.main {\n    background-color: var(--robinEggBlue);\n    flex: 1;\n    min-height: fit-content;\n    display: flex;\n    padding-top: 20px;\n} \n\n.game-area {\n    display: flex;\n    flex-wrap: wrap;\n    width: 90vw;\n    height: 100%;\n    margin: auto;\n}\n\n.game-board {\n    width: fit-content;\n    height: fit-content;\n    margin: auto;\n    display: flex;\n    flex-direction: column;\n    gap: 2px;\n    text-align: center;\n}\n\n.game-board p {\n    color: var(--charcoal);\n    font-size: 26px;\n}\n\n\n.row {\n    display: flex;\n    gap: 2px;\n}\n\n.row > div {\n    height: 30px;\n    width: 30px;\n    border: 1px solid;\n    background-color: var(--papayaWhip);\n    color: transparent;\n} */\n\n\n"],"sourceRoot":""}]);
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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/dom-stuff.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSxpREFBaUQsK0JBQStCLGdDQUFnQyw4QkFBOEIsd0JBQXdCLHNCQUFzQixtQ0FBbUMsR0FBRyxPQUFPLGdCQUFnQiw2QkFBNkIsR0FBRyxpQkFBaUIsbUJBQW1CLEdBQUcsYUFBYSxzQkFBc0IsdUJBQXVCLG9CQUFvQiw4QkFBOEIsb0JBQW9CLGdDQUFnQywyQkFBMkIsR0FBRyxVQUFVLG9CQUFvQiw2QkFBNkIsb0NBQW9DLEdBQUcscUJBQXFCLHlCQUF5QixrQkFBa0IsMEJBQTBCLHVCQUF1QixxQ0FBcUMsb0JBQW9CLDZCQUE2QiwwQkFBMEIsOEJBQThCLEdBQUcsMkJBQTJCLGVBQWUsZ0JBQWdCLGlCQUFpQix5QkFBeUIsR0FBRyxpQkFBaUIsOEJBQThCLG1DQUFtQyxvQkFBb0IsZ0RBQWdELEdBQUcsdUJBQXVCLHdCQUF3QixHQUFHLHVCQUF1QixzQkFBc0IsK0JBQStCLEtBQUssOEJBQThCLG1CQUFtQixvQkFBb0Isb0JBQW9CLHNCQUFzQiwwQkFBMEIsR0FBRyw0QkFBNEIsa0JBQWtCLG1CQUFtQix3QkFBd0IseUJBQXlCLEdBQUcsa0NBQWtDLG1CQUFtQixHQUFHLGdCQUFnQixpQkFBaUIsMEJBQTBCLGtDQUFrQyxzQkFBc0IsaUJBQWlCLEdBQUcsa0JBQWtCLHlCQUF5QixzQkFBc0IsR0FBRyxTQUFTLDBCQUEwQixjQUFjLG9CQUFvQixzQkFBc0Isb0NBQW9DLDBCQUEwQixpQkFBaUIsR0FBRyxpQkFBaUIsMEJBQTBCLDZCQUE2Qix5QkFBeUIsR0FBRyxXQUFXLHlCQUF5QiwwQkFBMEIsbUJBQW1CLG1CQUFtQixvQkFBb0Isa0NBQWtDLEdBQUcsaUJBQWlCLG9CQUFvQixtQ0FBbUMsR0FBRywwQkFBMEIsaUJBQWlCLFdBQVcsZ0NBQWdDLG9CQUFvQiwwQkFBMEIscUJBQXFCLHFCQUFxQixHQUFHLHdEQUF3RCxvQ0FBb0MsR0FBRyxZQUFZLG9CQUFvQixnQ0FBZ0MsMkJBQTJCLHVCQUF1QixHQUFHLFlBQVksNEJBQTRCLDZCQUE2QixHQUFHLDJFQUEyRSxrQkFBa0IsbUJBQW1CLHdDQUF3QyxzQkFBc0Isb0JBQW9CLDBCQUEwQiw4QkFBOEIsOEJBQThCLFNBQVMsV0FBVyw0Q0FBNEMsY0FBYyw4QkFBOEIsb0JBQW9CLHdCQUF3QixJQUFJLGdCQUFnQixvQkFBb0Isc0JBQXNCLGtCQUFrQixtQkFBbUIsbUJBQW1CLEdBQUcsaUJBQWlCLHlCQUF5QiwwQkFBMEIsbUJBQW1CLG9CQUFvQiw2QkFBNkIsZUFBZSx5QkFBeUIsR0FBRyxtQkFBbUIsNkJBQTZCLHNCQUFzQixHQUFHLFlBQVksb0JBQW9CLGVBQWUsR0FBRyxnQkFBZ0IsbUJBQW1CLGtCQUFrQix3QkFBd0IsMENBQTBDLHlCQUF5QixJQUFJLGVBQWUsaUZBQWlGLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxNQUFNLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLE1BQU0sS0FBSyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEscUNBQXFDLDREQUE0RCxpQ0FBaUMsK0JBQStCLGdDQUFnQyw4QkFBOEIsd0JBQXdCLHNCQUFzQixtQ0FBbUMsR0FBRyxPQUFPLGdCQUFnQiw2QkFBNkIsR0FBRyxpQkFBaUIsbUJBQW1CLEdBQUcsYUFBYSxzQkFBc0IsdUJBQXVCLG9CQUFvQiw4QkFBOEIsb0JBQW9CLGdDQUFnQywyQkFBMkIsR0FBRyxVQUFVLG9CQUFvQiw2QkFBNkIsb0NBQW9DLEdBQUcscUJBQXFCLHlCQUF5QixrQkFBa0IsMEJBQTBCLHVCQUF1QixxQ0FBcUMsb0JBQW9CLDZCQUE2QiwwQkFBMEIsOEJBQThCLEdBQUcsMkJBQTJCLGVBQWUsZ0JBQWdCLGlCQUFpQix5QkFBeUIsR0FBRyxpQkFBaUIsOEJBQThCLG1DQUFtQyxvQkFBb0IsZ0RBQWdELEdBQUcsdUJBQXVCLHdCQUF3QixHQUFHLHVCQUF1QixzQkFBc0IsK0JBQStCLEtBQUssOEJBQThCLG1CQUFtQixvQkFBb0Isb0JBQW9CLHNCQUFzQiwwQkFBMEIsR0FBRyw0QkFBNEIsa0JBQWtCLG1CQUFtQix3QkFBd0IseUJBQXlCLEdBQUcsa0NBQWtDLG1CQUFtQixHQUFHLGdCQUFnQixpQkFBaUIsMEJBQTBCLGtDQUFrQyxzQkFBc0IsaUJBQWlCLEdBQUcsa0JBQWtCLHlCQUF5QixzQkFBc0IsR0FBRyxTQUFTLDBCQUEwQixjQUFjLG9CQUFvQixzQkFBc0Isb0NBQW9DLDBCQUEwQixpQkFBaUIsR0FBRyxpQkFBaUIsMEJBQTBCLDZCQUE2Qix5QkFBeUIsR0FBRyxXQUFXLHlCQUF5QiwwQkFBMEIsbUJBQW1CLG1CQUFtQixvQkFBb0Isa0NBQWtDLEdBQUcsaUJBQWlCLG9CQUFvQixtQ0FBbUMsR0FBRywwQkFBMEIsaUJBQWlCLFdBQVcsZ0NBQWdDLG9CQUFvQiwwQkFBMEIscUJBQXFCLHFCQUFxQixHQUFHLHdEQUF3RCxvQ0FBb0MsR0FBRyxZQUFZLG9CQUFvQixnQ0FBZ0MsMkJBQTJCLHVCQUF1QixHQUFHLFlBQVksNEJBQTRCLDZCQUE2QixHQUFHLDJFQUEyRSxrQkFBa0IsbUJBQW1CLHdDQUF3QyxzQkFBc0Isb0JBQW9CLDBCQUEwQiw4QkFBOEIsOEJBQThCLFNBQVMsV0FBVyw0Q0FBNEMsY0FBYyw4QkFBOEIsb0JBQW9CLHdCQUF3QixJQUFJLGdCQUFnQixvQkFBb0Isc0JBQXNCLGtCQUFrQixtQkFBbUIsbUJBQW1CLEdBQUcsaUJBQWlCLHlCQUF5QiwwQkFBMEIsbUJBQW1CLG9CQUFvQiw2QkFBNkIsZUFBZSx5QkFBeUIsR0FBRyxtQkFBbUIsNkJBQTZCLHNCQUFzQixHQUFHLFlBQVksb0JBQW9CLGVBQWUsR0FBRyxnQkFBZ0IsbUJBQW1CLGtCQUFrQix3QkFBd0IsMENBQTBDLHlCQUF5QixJQUFJLDJCQUEyQjtBQUN0dlI7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7O0FDUDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW9HO0FBQ3BHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsdUZBQU87Ozs7QUFJOEM7QUFDdEUsT0FBTyxpRUFBZSx1RkFBTyxJQUFJLDhGQUFjLEdBQUcsOEZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JxQjs7O0FBR3JCLGNBQWMsbUJBQU8sQ0FBQywrQkFBUztBQUMvQixpQkFBaUIsbUJBQU8sQ0FBQyx1Q0FBYTs7OztBQUl0QztBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBLHdCQUF3QixRQUFRO0FBQ2hDO0FBQ0E7QUFDQSxnREFBZ0QsT0FBTyxHQUFHLFFBQVE7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsTUFBTTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7OztBQVdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9IRCxjQUFjLG1CQUFPLENBQUMsK0JBQVM7QUFDUTs7QUFFdkM7O0FBRWU7QUFDZjtBQUNBLHdCQUF3QixnREFBaUI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUksbURBQW9CO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSSxtREFBb0I7O0FBRXhCO0FBQ0E7QUFDQSxJQUFJLG1EQUFvQjs7QUFFeEI7QUFDQTtBQUNBLElBQUksb0RBQXFCOztBQUV6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksbURBQW9CO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDRCQUE0QjtBQUM1Qjs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCLFlBQVk7QUFDcEM7QUFDQSw0QkFBNEIsWUFBWTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQywwQkFBMEI7QUFDN0Q7QUFDQTtBQUNBLG1DQUFtQywwQkFBMEI7QUFDN0Q7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLG1DQUFtQywwQkFBMEI7QUFDN0Q7QUFDQTtBQUNBLG1DQUFtQywwQkFBMEI7QUFDN0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0VBQWtFO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZG9tLXN0dWZmLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZS1sb29wLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIC0tbWlkbmlnaHRHcmVlbjogIzA3M0IzQTtcXG4gICAgLS1kYXJ0bW91dGhHcmVlbjogIzBCNkU0RjtcXG4gICAgLS1waWdtZW50R3JlZW46ICMwOEEwNDU7XFxuICAgIC0tbWFudGlzOiAjNkJCRjU5O1xcbiAgICAtLWVjcnU6ICNEREI3NzE7XFxuICAgIC0tZW5naW5lZXJpbmdPcmFuZ2U6ICNCRjA2MDM7XFxufVxcblxcbioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHksXFxuaHRtbCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2YjY5Njk7XFxuICAgIGNvbG9yOiB2YXIoLS1tYW50aXMpO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZWNydSk7XFxufVxcblxcbi5vcGVuaW5nLXdpbmRvdyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWVjcnUpOyBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5vcGVuaW5nLXdpbmRvdy5oaWRkZW57XFxuICAgIHdpZHRoOiAwO1xcbiAgICBoZWlnaHQ6IDA7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLmlucHV0LWdyaWQge1xcbiAgICBcXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQ6IHJlcGVhdCgxMCwgMzVweCkgLyByZXBlYXQoMTAsIDM1cHgpO1xcbn1cXG5cXG4uaW5wdXQtZ3JpZCAuY2VsbCB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xcbn1cXG5cXG4ub3BlbmluZy13aW5kb3cgcCB7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgLyogcGFkZGluZy1ib3R0b206IDIwcHg7ICovXFxufVxcblxcbi5vcGVuaW5nLXdpbmRvdyAuYnV0dG9ucyB7XFxuICAgIHdpZHRoOiAzNTBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZDogMWZyIC8gMWZyO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ub3BlbmluZy13aW5kb3cgYnV0dG9uIHtcXG4gICAgd2lkdGg6IDkwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLm9wZW5pbmctd2luZG93IGJ1dHRvbjpob3ZlciB7XFxuICAgIG9wYWNpdHk6IDAuODtcXG59XFxuXFxuLmdhbWUtaW5mbyB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIG1hcmdpbjogNjBweCBhdXRvIDMwcHggYXV0bztcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBnYXA6IDEwMHB4O1xcbn1cXG5cXG4uZ2FtZS1pbmZvIHAge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMjZweDtcXG59XFxuLm1haW4ge1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwMHB4O1xcbn1cXG5cXG4ubWFpbiA+IGRpdiB7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyYXk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuXFxuLmdyaWQge1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgcGFkZGluZzogMnB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkOiByZXBlYXQoMTAsIDM1cHgpLyAxZnI7XFxufVxcblxcbi5ncmlkID4gZGl2IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZDogMWZyIC8gcmVwZWF0KDEwLCAzNXB4KTtcXG59XFxuXFxuLmdyaWQsIFxcbi5ncmlkID4gZGl2IHtcXG4gICAgZ2FwOiAzcHhcXG59XFxuXFxuLmNlbGwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkRGMEQ1O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgICBsaW5lLWhlaWdodDogMDtcXG4gICAgZm9udC1zaXplOiA5cHg7XFxufVxcblxcbi5zZWNvbmQtZ3JpZCAuY2VsbDpob3ZlcixcXG4uaW5wdXQtZ3JpZCAuY2VsbDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWVjcnUpO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBwYWRkaW5nOiAwIDhweCAzcHggMDtcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXG59XFxuZm9vdGVyIGEge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiByZ2IoOTksIDk5LCA5OSk7XFxufVxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcbi8qIGhlYWRlciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNoYXJjb2FsKTtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgY29sb3I6IHZhcigtLXJpY2hCbGFjayk7XFxuICAgIFxcbn1cXG5cXG4ubWFpbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJvYmluRWdnQmx1ZSk7XFxuICAgIGZsZXg6IDE7XFxuICAgIG1pbi1oZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcXG59IFxcblxcbi5nYW1lLWFyZWEge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIHdpZHRoOiA5MHZ3O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG1hcmdpbjogYXV0bztcXG59XFxuXFxuLmdhbWUtYm9hcmQge1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAycHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmdhbWUtYm9hcmQgcCB7XFxuICAgIGNvbG9yOiB2YXIoLS1jaGFyY29hbCk7XFxuICAgIGZvbnQtc2l6ZTogMjZweDtcXG59XFxuXFxuXFxuLnJvdyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMnB4O1xcbn1cXG5cXG4ucm93ID4gZGl2IHtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhcGF5YVdoaXApO1xcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxufSAqL1xcblxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksd0JBQXdCO0lBQ3hCLHlCQUF5QjtJQUN6Qix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxTQUFTO0lBQ1Qsc0JBQXNCO0FBQzFCOztBQUVBOztJQUVJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQiw2QkFBNkI7SUFDN0IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksUUFBUTtJQUNSLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLGlCQUFpQjtJQUNqQiw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7SUFDZiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7SUFDYixlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLGVBQWU7SUFDZixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLE9BQU87SUFDUCxhQUFhO0lBQ2IsZUFBZTtJQUNmLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtJQUNiLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw0QkFBNEI7QUFDaEM7O0FBRUE7O0lBRUk7QUFDSjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxjQUFjO0FBQ2xCOztBQUVBOztJQUVJLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLHNCQUFzQjtBQUMxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F1REdcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLW1pZG5pZ2h0R3JlZW46ICMwNzNCM0E7XFxuICAgIC0tZGFydG1vdXRoR3JlZW46ICMwQjZFNEY7XFxuICAgIC0tcGlnbWVudEdyZWVuOiAjMDhBMDQ1O1xcbiAgICAtLW1hbnRpczogIzZCQkY1OTtcXG4gICAgLS1lY3J1OiAjRERCNzcxO1xcbiAgICAtLWVuZ2luZWVyaW5nT3JhbmdlOiAjQkYwNjAzO1xcbn1cXG5cXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5LFxcbmh0bWwge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmI2OTY5O1xcbiAgICBjb2xvcjogdmFyKC0tbWFudGlzKTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWVjcnUpO1xcbn1cXG5cXG4ub3BlbmluZy13aW5kb3cge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1lY3J1KTsgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ub3BlbmluZy13aW5kb3cuaGlkZGVue1xcbiAgICB3aWR0aDogMDtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5pbnB1dC1ncmlkIHtcXG4gICAgXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkOiByZXBlYXQoMTAsIDM1cHgpIC8gcmVwZWF0KDEwLCAzNXB4KTtcXG59XFxuXFxuLmlucHV0LWdyaWQgLmNlbGwge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcXG59XFxuXFxuLm9wZW5pbmctd2luZG93IHAge1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIC8qIHBhZGRpbmctYm90dG9tOiAyMHB4OyAqL1xcbn1cXG5cXG4ub3BlbmluZy13aW5kb3cgLmJ1dHRvbnMge1xcbiAgICB3aWR0aDogMzUwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQ6IDFmciAvIDFmcjtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm9wZW5pbmctd2luZG93IGJ1dHRvbiB7XFxuICAgIHdpZHRoOiA5MHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5vcGVuaW5nLXdpbmRvdyBidXR0b246aG92ZXIge1xcbiAgICBvcGFjaXR5OiAwLjg7XFxufVxcblxcbi5nYW1lLWluZm8ge1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICBtYXJnaW46IDYwcHggYXV0byAzMHB4IGF1dG87XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgZ2FwOiAxMDBweDtcXG59XFxuXFxuLmdhbWUtaW5mbyBwIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDI2cHg7XFxufVxcbi5tYWluIHtcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMDBweDtcXG59XFxuXFxuLm1haW4gPiBkaXYge1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBncmF5O1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcblxcbi5ncmlkIHtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHBhZGRpbmc6IDJweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZDogcmVwZWF0KDEwLCAzNXB4KS8gMWZyO1xcbn1cXG5cXG4uZ3JpZCA+IGRpdiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQ6IDFmciAvIHJlcGVhdCgxMCwgMzVweCk7XFxufVxcblxcbi5ncmlkLCBcXG4uZ3JpZCA+IGRpdiB7XFxuICAgIGdhcDogM3B4XFxufVxcblxcbi5jZWxsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZERjBENTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gICAgbGluZS1oZWlnaHQ6IDA7XFxuICAgIGZvbnQtc2l6ZTogOXB4O1xcbn1cXG5cXG4uc2Vjb25kLWdyaWQgLmNlbGw6aG92ZXIsXFxuLmlucHV0LWdyaWQgLmNlbGw6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1lY3J1KTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgcGFkZGluZzogMCA4cHggM3B4IDA7XFxuICAgIG1hcmdpbi10b3A6IGF1dG87XFxufVxcbmZvb3RlciBhIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogcmdiKDk5LCA5OSwgOTkpO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG4vKiBoZWFkZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jaGFyY29hbCk7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGNvbG9yOiB2YXIoLS1yaWNoQmxhY2spO1xcbiAgICBcXG59XFxuXFxuLm1haW4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yb2JpbkVnZ0JsdWUpO1xcbiAgICBmbGV4OiAxO1xcbiAgICBtaW4taGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XFxufSBcXG5cXG4uZ2FtZS1hcmVhIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICB3aWR0aDogOTB2dztcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBtYXJnaW46IGF1dG87XFxufVxcblxcbi5nYW1lLWJvYXJkIHtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMnB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5nYW1lLWJvYXJkIHAge1xcbiAgICBjb2xvcjogdmFyKC0tY2hhcmNvYWwpO1xcbiAgICBmb250LXNpemU6IDI2cHg7XFxufVxcblxcblxcbi5yb3cge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDJweDtcXG59XFxuXFxuLnJvdyA+IGRpdiB7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYXBheWFXaGlwKTtcXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xcbn0gKi9cXG5cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGVzLmNzcydcblxuXG5jb25zdCBpbmRleCA9IHJlcXVpcmUoJy4vaW5kZXgnKVxuY29uc3QgZ2FtZUxvb3AgPSByZXF1aXJlKCcuL2dhbWUtbG9vcCcpXG5cblxuXG5jb25zdCBjcmVhdGVJbnB1dEdyaWQgPSAoKSA9PiB7XG4gICAgbGV0IGdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtZ3JpZCcpO1xuICAgIGxldCByb3dOdW0gPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IDk7IGkrKykge1xuICAgICAgICBsZXQgY2VsbE51bSA9IDA7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDw9IDk7IGorKykge1xuICAgICAgICAgICAgbGV0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNlbGwuY2xhc3NOYW1lID0gJ2NlbGwnO1xuICAgICAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ2Nvb3JkaW5hdGVzJywgYCR7cm93TnVtfSwke2NlbGxOdW19YCk7XG4gICAgICAgICAgICBncmlkLmFwcGVuZChjZWxsKTtcbiAgICAgICAgICAgIGNlbGxOdW0rKztcbiAgICAgICAgfVxuICAgICAgICByb3dOdW0rKztcbiAgICB9ICAgXG59XG5cbmNyZWF0ZUlucHV0R3JpZCgpO1xuXG5sZXQgaW5wdXROb2RlTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbnB1dC1ncmlkIC5jZWxsJylcbiAgICAvLyBjcmVhdGUgdGVtcG9yYXJ5IGdhbWUgYW5kIHVzZSBpdCB0byBcbiAgICAvLyBzdG9yZSB0aGUgaW5mbyBvZiB0aGUgcGxhY2VkIHNoaXBzLFxubGV0IHRlbXBHYW1lID0gaW5kZXguZ2FtZUJvYXJkKCk7ICAgXG5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICB0ZW1wR2FtZS5yYW5kb21seVBsYWNlU2hpcHMoKVxuICAgIHJlbmRlclNoaXBzKGlucHV0Tm9kZUxpc3QsIHRlbXBHYW1lLmJvYXJkKVxufSwgMSk7XG5cblxuLy8gcmFuZG9taXplIHNoaXAgcGxhY2VtZW50IGJ1dHRvbiBldmVudCBsaXN0ZW5lclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJhbmRvbScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIC8vIGNsZWFyIGJvYXJkIGluIGNhc2UgaXQgYWxyZWFkeSBleGlzdHM7XG4gICAgdGVtcEdhbWUuY2xlYXJCb2FyZCgpO1xuICAgIHRlbXBHYW1lLnJhbmRvbWx5UGxhY2VTaGlwcygpO1xuICAgIHJlbmRlclNoaXBzKGlucHV0Tm9kZUxpc3QsIHRlbXBHYW1lLmJvYXJkKVxufSkgIFxuXG5cbmNvbnN0IGNyZWF0ZUJvYXJkID0gKHRhcmdldEVsZW1lbnQsIGJvYXJkKSA9PiB7XG4gICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZWxlbWVudC5jbGFzc05hbWUgPSAnZ3JpZCc7XG5cbiAgICAgIC8vIHVzZSBjb29yZCB2YXJpYWJsZSB0byBzZXQgYW4gYXR0cmlidXRlIG9uIFxuICAgICAgLy8gaW5kaXZpZHVhbCBET00gY2VsbHMsIGNvcnJlc3BvbmRpbmcgdG8gZ2FtZSBib2FyZCAgICBcbiAgICBsZXQgY29vcmQgPSBbMCwgMF07XG4gICAgZm9yIChsZXQgcm93WCBvZiBib2FyZCkge1xuICAgICAgICBsZXQgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGZvciAobGV0IGNlbGxYIG9mIHJvd1gpIHtcbiAgICAgICAgICAgIGxldCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2NlbGwnKTtcbiAgICAgICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdjb29yZGluYXRlcycsIGAke2Nvb3JkfWApO1xuICAgICAgICAgICAgY29vcmRbMV0rKztcbiAgICAgICAgICAgIHJvdy5hcHBlbmRDaGlsZChjZWxsKTtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50LmFwcGVuZChyb3cpO1xuICAgICAgICBjb29yZFswXSsrO1xuICAgICAgICBjb29yZFsxXSA9IDA7XG4gICAgfVxuICAgIHRhcmdldEVsZW1lbnQuYXBwZW5kKGVsZW1lbnQpO1xufVxuXG5jb25zdCByZW5kZXJTaGlwcyA9IChub2RlTGlzdCwgYm9hcmQpID0+IHtcbiAgICBcbiAgICBub2RlTGlzdC5mb3JFYWNoKGNlbGwgPT4ge1xuICAgICAgICBsZXQgY29vcmRZID0gY2VsbC5nZXRBdHRyaWJ1dGUoJ2Nvb3JkaW5hdGVzJylbMF07XG4gICAgICAgIGxldCBjb29yZFggPSBjZWxsLmdldEF0dHJpYnV0ZSgnY29vcmRpbmF0ZXMnKVsyXTtcbiAgICAgICAgaWYgKGJvYXJkW2Nvb3JkWV1bY29vcmRYXSAhPT0gJycpIHtcbiAgICAgICAgICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyMwNzNCM0EnO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICBjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjRkRGMEQ1J1xuICAgICAgICB9XG4gICAgfSk7XG59ICAgXG5cbmNvbnN0IHVwZGF0ZUJvYXJkID0gKG5vZGVMaXN0LCBib2FyZCkgPT4ge1xuICAgIG5vZGVMaXN0LmZvckVhY2goY2VsbCA9PiB7XG4gICAgICAgIGxldCBjb29yZFkgPSBjZWxsLmdldEF0dHJpYnV0ZSgnY29vcmRpbmF0ZXMnKVswXTtcbiAgICAgICAgbGV0IGNvb3JkWCA9IGNlbGwuZ2V0QXR0cmlidXRlKCdjb29yZGluYXRlcycpWzJdO1xuICAgICAgICBpZiAoYm9hcmRbY29vcmRZXVtjb29yZFhdID09PSAnWCcpIHtcbiAgICAgICAgICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JlZCc7XG4gICAgICAgIH0gZWxzZSBpZiAoYm9hcmRbY29vcmRZXVtjb29yZFhdID09PSAnTScpIHtcbiAgICAgICAgICAgIGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2N5YW4nXG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5jb25zdCBhdHRhY2tMaXN0ZW5lciA9IChjZWxsLCBwbGF5ZXIsIHRhcmdldCkgPT4ge1xuICAgIGlmICghcGxheWVyLmlzUGxheWVyc1R1cm4pIHJldHVyblxuICAgIGxldCBjb29yZFkgPSBjZWxsLmdldEF0dHJpYnV0ZSgnY29vcmRpbmF0ZXMnKVswXTtcbiAgICBsZXQgY29vcmRYID0gY2VsbC5nZXRBdHRyaWJ1dGUoJ2Nvb3JkaW5hdGVzJylbMl07XG4gICAgaWYgKHRhcmdldC5ib2FyZFtjb29yZFldW2Nvb3JkWF0gPT09ICdYJyBcbiAgICAgICAgfHx0YXJnZXQuYm9hcmRbY29vcmRZXVtjb29yZFhdID09PSAnTScpIHJldHVybiBcbiAgICBsZXQgY29vcmQgPSBbY29vcmRZLCBjb29yZFhdXG4gICAgcGxheWVyLmF0dGFjayhjb29yZCwgdGFyZ2V0KTtcbiAgICBwbGF5ZXIuaXNQbGF5ZXJzVHVybiA9IGZhbHNlO1xufVxuXG5jb25zdCBhZGRMaXN0ZW5lcnMgPSAobm9kZUxpc3QsIHBsYXllciwgdGFyZ2V0KSA9PiB7XG4gICAgbm9kZUxpc3QuZm9yRWFjaCggKGNlbGwpID0+IHtcbiAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGF0dGFja0xpc3RlbmVyKGNlbGwsIHBsYXllciwgdGFyZ2V0KVxuICAgICAgICAgICAgdXBkYXRlQm9hcmQobm9kZUxpc3QsIHRhcmdldC5ib2FyZClcbiAgICAgICAgfSlcbiAgICB9KVxufSBcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9wZW5pbmctd2luZG93JykuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICBnYW1lTG9vcC5kZWZhdWx0KCk7XG59KVxuXG5cblxuXG5leHBvcnQge1xuICAgIGNyZWF0ZUJvYXJkLFxuICAgIHJlbmRlclNoaXBzLFxuICAgIHVwZGF0ZUJvYXJkLFxuICAgIGFkZExpc3RlbmVycyxcbiAgICB0ZW1wR2FtZVxufVxuXG5cblxuXG5cblxuIiwiY29uc3QgaW5kZXggPSByZXF1aXJlKCcuL2luZGV4Jyk7XG5pbXBvcnQgKiBhcyBkb21TdHVmZiBmcm9tICcuL2RvbS1zdHVmZidcblxubGV0IGxvb3A7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5ld0dhbWUgKCkge1xuICAgIGxldCBwbGF5ZXJPbmUgPSBpbmRleC5QbGF5ZXIoJ1BsYXllci1PbmUnLCBmYWxzZSwgdHJ1ZSk7XG4gICAgbGV0IHBsYXllck9uZUdhbWUgPSBkb21TdHVmZi50ZW1wR2FtZTtcbiAgICBsZXQgY29tcHV0ZXIgPSBpbmRleC5QbGF5ZXIoJ0NvbXB1dGVyJywgdHJ1ZSk7XG4gICAgLy8gbGV0IHBsYXllck9uZUdhbWUgPSBpbmRleC5nYW1lQm9hcmQoKTtcbiAgICBsZXQgY29tcHV0ZXJHYW1lID0gaW5kZXguZ2FtZUJvYXJkKCk7XG4gICAgbGV0IHBsYXllckJvYXJkID0gcGxheWVyT25lR2FtZS5ib2FyZDtcbiAgICBsZXQgY29tcHV0ZXJCb2FyZCA9IGNvbXB1dGVyR2FtZS5ib2FyZDtcblxuICAgIFxuICAgIFxuXG4gICAgXG4gICAgY29tcHV0ZXJHYW1lLnJhbmRvbWx5UGxhY2VTaGlwcygpO1xuXG5cbiAgICAgIC8vIGNyZWF0ZSBwbGF5ZXIgZ2FtZSBib2FyZFxuICAgIGxldCBmaXJzdEdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmlyc3QtZ3JpZCcpO1xuICAgIGZpcnN0R3JpZC5jaGlsZE5vZGVzLmZvckVhY2gobm9kZSA9PiB7XG4gICAgICAgIG5vZGUucmVtb3ZlKCk7XG4gICAgfSlcbiAgICBkb21TdHVmZi5jcmVhdGVCb2FyZChmaXJzdEdyaWQsIHBsYXllckJvYXJkKVxuICAgIFxuICAgICAgLy8gY3JlYXRlIGNvbXB1dGVyIGdhbWUgYm9hcmRcbiAgICBsZXQgc2Vjb25kR3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWNvbmQtZ3JpZCcpO1xuICAgIHNlY29uZEdyaWQuY2hpbGROb2Rlcy5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgICBub2RlLnJlbW92ZSgpO1xuICAgIH0pXG4gICAgZG9tU3R1ZmYuY3JlYXRlQm9hcmQoc2Vjb25kR3JpZCwgY29tcHV0ZXJCb2FyZClcblxuICAgICAgLy8gcmVuZGVyIHNoaXBzIG9uIHBsYXllciBvbmVcbiAgICBsZXQgcGxheWVyQ2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmlyc3QtZ3JpZCAuY2VsbCcpXG4gICAgZG9tU3R1ZmYucmVuZGVyU2hpcHMocGxheWVyQ2VsbHMsIHBsYXllckJvYXJkKVxuXG4gICAgICAvL2FkZCBsaXN0ZW5lcnNcbiAgICBsZXQgdGFyZ2V0Q2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2Vjb25kLWdyaWQgLmNlbGwnKTtcbiAgICBkb21TdHVmZi5hZGRMaXN0ZW5lcnModGFyZ2V0Q2VsbHMsIHBsYXllck9uZSwgY29tcHV0ZXJHYW1lKTtcblxuICAgICAgLy9zZXQgdXAgaW50ZXJ2YWwgdG8gY2hlY2sgaWYgY29tcHV0ZXJzIHR1cm4gYW5kIG1ha2UgbW92ZSBpZiBpdCBpc1xuICAgIGxvb3AgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIGlmICghcGxheWVyT25lLmlzUGxheWVyc1R1cm4pIHtcbiAgICAgICAgICAgIGNvbXB1dGVyLmF0dGFjayhudWxsLCBwbGF5ZXJPbmVHYW1lKVxuICAgICAgICAgICAgZG9tU3R1ZmYudXBkYXRlQm9hcmQocGxheWVyQ2VsbHMsIHBsYXllckJvYXJkKVxuICAgICAgICAgICAgcGxheWVyT25lLmlzUGxheWVyc1R1cm4gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgICAgLy8gaWYgY29tcHV0ZXIgd29uIGdhbWUgOlxuICAgICAgICBpZiAocGxheWVyT25lR2FtZS5hbGxTaGlwc1N1bmsoKSkge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChsb29wKVxuICAgICAgICAgICAgYWxlcnQoJ0NvbXB1dGVyIHdpbnMhJylcbiAgICAgICAgfSBcbiAgICAgICAgaWYgKGNvbXB1dGVyR2FtZS5hbGxTaGlwc1N1bmsoKSkge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChsb29wKVxuICAgICAgICAgICAgYWxlcnQoJ1BsYXllciB3aW5zIScpXG4gICAgICAgIH1cbiAgICB9LCA4MDApXG4gICAgXG4gICAgXG4gICAgXG4gICAgXG59XG5cblxuXG5cblxuXG5cblxuXG5cbiIsImxldCBzaGlwcyA9IHtcbiAgICBjYXJyaWVyOiB7XG4gICAgICAgIG5hbWU6ICdDYXJyaWVyJyxcbiAgICAgICAgc2l6ZTogNSxcbiAgICAgICAgY29kZTogJ0NhJyxcbiAgICB9LFxuICAgIGJhdHRsZXNoaXA6IHtcbiAgICAgICAgbmFtZTogJ0JhdHRsZXNoaXAnLFxuICAgICAgICBzaXplOiA0LFxuICAgICAgICBjb2RlOiAnQmEnLFxuICAgIH0sXG4gICAgY3J1aXNlcjoge1xuICAgICAgICBuYW1lOiAnQ3J1aXNlcicsXG4gICAgICAgIHNpemU6IDMsXG4gICAgICAgIGNvZGU6ICdDcicsXG4gICAgfSxcbiAgICBzdWJtYXJpbmU6IHtcbiAgICAgICAgbmFtZTogJ1N1Ym1hcmluZScsXG4gICAgICAgIHNpemU6IDMsXG4gICAgICAgIGNvZGU6ICdTdScsXG4gICAgfSxcbiAgICBkZXN0cm95ZXI6IHtcbiAgICAgICAgbmFtZTogJ0Rlc3Ryb3llcicsXG4gICAgICAgIHNpemU6IDIsXG4gICAgICAgIGNvZGU6ICdEZScsXG4gICAgfSxcbn1cblxuY29uc3Qgc2hpcEZhY3RvcnkgPSAobmFtZSwgc2l6ZSkgPT4ge1xuICAgIGxldCBzaGlwTmFtZSA9IG5hbWU7XG4gICAgbGV0IGhpdHMgPSAwO1xuXG4gICAgbGV0IGhpdCA9ICgpID0+IHtcbiAgICAgICAgaGl0cysrO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGdldCBzaGlwTmFtZSgpIHtcbiAgICAgICAgICAgIHJldHVybiBzaGlwTmFtZTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0IGhpdHMoKSB7XG4gICAgICAgICAgICByZXR1cm4gaGl0cztcbiAgICAgICAgfSxcbiAgICAgICAgaGl0LFxuICAgICAgICBnZXQgaXNTdW5rKCkge1xuICAgICAgICAgICAgcmV0dXJuIHNpemUgPT09IGhpdHM7XG4gICAgICAgIH0sXG4gICAgfVxufVxuXG5jb25zdCBnYW1lQm9hcmQgPSAobGVuZ3RoPTEwKSA9PiB7XG5cbiAgICAvLyBib2FyZCB3aWxsIGNvbnNpc3Qgb2YgZm9sbG93aW5nIG1hcmtlcnM6IFxuICAgIC8vICcnIEZvciBlbXB0eSBzcXVhcmU7IC8vIE0gZm9yIG1pc3NlZCBzcXVhcmU7XG4gICAgLy8gWCBmb3IgaGl0IC8vIGluZGV4IG9mIGdhbWVQaWVjZXMgYXJyYXkgZm9yIHNoaXBcblxuICAgIGxldCBjcmVhdGVCb2FyZCA9ICgpID0+IHtcbiAgICAgICAgbGV0IGJvYXJkID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCByb3cgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICByb3cucHVzaCgnJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBib2FyZC5wdXNoKHJvdyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJvYXJkO1xuICAgIH1cblxuICAgIGxldCBib2FyZCA9IGNyZWF0ZUJvYXJkKCk7XG4gICAgbGV0IGdhbWVQaWVjZXMgPSBbXTtcblxuICAgIGxldCBjbGVhckJvYXJkID0gKCkgPT4ge1xuICAgICAgICBib2FyZCA9IGNyZWF0ZUJvYXJkKClcbiAgICAgICAgZ2FtZVBpZWNlcyA9IFtdO1xuICAgIH1cblxuICAgIGxldCBzdG9yZVNoaXAgPSAoc2hpcCkgPT4ge1xuICAgICAgICBsZXQgbmV3U2hpcCA9IHNoaXBGYWN0b3J5KHNoaXAubmFtZSwgc2hpcC5zaXplKVxuICAgICAgICBnYW1lUGllY2VzLnB1c2gobmV3U2hpcCk7XG4gICAgfVxuXG4gICAgbGV0IHBsYWNlU2hpcCA9IChzaGlwLCBjb29yZCwgaG9yaXpvbnRhbD10cnVlKSA9PiB7XG4gICAgICAgICAgLy8gY2hlY2sgc2hpcCBpcyBiZWluZyBwbGFjZXMgd2l0aGluIGJvdW5kYXJ5IG9mIGJvYXJkXG4gICAgICAgIGlmIChob3Jpem9udGFsICYmIGNvb3JkWzFdICsgc2hpcC5zaXplID4gbGVuZ3RoLTEpIHJldHVybiBuZXcgRXJyb3IoJ1BsZWFzZSBwbGFjZSBzaGlwIHdpdGhpbiBib2FyZCcpO1xuICAgICAgICBpZiAoIWhvcml6b250YWwgJiYgY29vcmRbMF0gKyBzaGlwLnNpemUgPiBsZW5ndGgtMSkgcmV0dXJuIG5ldyBFcnJvcignUGxlYXNlIHBsYWNlIHNoaXAgd2l0aGluIGJvYXJkJyk7XG4gICAgICAgIFxuICAgICAgICBpZiAoaG9yaXpvbnRhbCkge1xuICAgICAgICAgICAgICAvLyBsb29wIHRvIGNoZWNrIGlmIG92ZXJsYXBwaW5nIHNoaXBzXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gY29vcmRbMV07IGkgPCBjb29yZFsxXSArIHNoaXAuc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGJvYXJkW2Nvb3JkWzBdXVtpXSAhPT0gJycpIHJldHVybiBuZXcgRXJyb3IoJ0Nhbm5vdCBvdmVybGFwIHNoaXBzJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBjb29yZFsxXTsgaSA8IGNvb3JkWzFdICsgc2hpcC5zaXplOyBpKyspIHtcbiAgICAgICAgICAgICAgICBib2FyZFtjb29yZFswXV1baV0gPSBnYW1lUGllY2VzLmxlbmd0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGVsc2UgZm9sbG93IHNhbWUgZGlyZWN0aW9ucyBidXQgdmVydGljYWxseTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBjb29yZFswXTsgaSA8IGNvb3JkWzBdICsgc2hpcC5zaXplOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoYm9hcmRbaV1bY29vcmRbMV1dICE9PSAnJykgcmV0dXJuIG5ldyBFcnJvciAoJ0Nhbm5vdCBvdmVybGFwIHNoaXBzJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBjb29yZFswXTsgaSA8IGNvb3JkWzBdICsgc2hpcC5zaXplOyBpKyspIHtcbiAgICAgICAgICAgICAgICBib2FyZFtpXVtjb29yZFsxXV0gPSBnYW1lUGllY2VzLmxlbmd0aDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICAgICAgLy8gc3RvcmUgc2hpcCBpbiBnYW1lIHBpZWNlcyBhcnJheVxuICAgICAgICBzdG9yZVNoaXAoc2hpcCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGxldCByYW5kb21seVBsYWNlU2hpcHMgPSAoKSA9PiB7XG4gICAgICAgIGZvciAobGV0IHNoaXAgaW4gc2hpcHMpIHtcbiAgICAgICAgICAgIHBsYWNlZCA9IGZhbHNlO1xuICAgICAgICAgICAgbGV0IHggPSBnZXRSYW5kb21Db29yZHMoKTtcbiAgICAgICAgICAgIGxldCB5ID0gY29pbkZsaXAoKTtcbiAgICAgICAgICAgIHdoaWxlICghcGxhY2VkKVxuICAgICAgICAgICAgICAvLyBpZiBzaGlwIGdldCBwbGFjZWQsIGV4aXQgd2hpbGUgbG9vcDtcbiAgICAgICAgICAgIGlmIChwbGFjZVNoaXAoc2hpcHNbc2hpcF0sIHgsIHkpID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBwbGFjZVNoaXAoc2hpcHNbc2hpcF0sIHgsIHkpO1xuICAgICAgICAgICAgICAgIHBsYWNlZCA9IHRydWU7XG4gICAgICAgICAgICAgIC8vIGVsc2UgZ2V0IG5ldyBjb29yZGluYXRlcyBhbmQgYm9vbGVhbiBhbmQgdHJ5IGFnYWluO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB4ID0gZ2V0UmFuZG9tQ29vcmRzKCk7XG4gICAgICAgICAgICAgICAgeSA9IGNvaW5GbGlwKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgY29pbkZsaXAgPSAoKSA9PiB7XG4gICAgICAgIGlmIChNYXRoLnJhbmRvbSgpID4gMC41KSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGxldCByZWNlaXZlQXR0YWNrID0gKGNvb3JkKSA9PiB7XG4gICAgICAgIGxldCBjZWxsID0gYm9hcmRbcGFyc2VJbnQoY29vcmRbMF0pXVtwYXJzZUludChjb29yZFsxXSldO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdBdHRhY2tpbmc6JywgY29vcmQsICctLS0+JywgY2VsbClcbiAgICAgICAgICAvLyBpZiBib2FyZCBjZWxsIGlzIGVtcHR5IGFkZCBNIGZvciBtaXNzLCBpZiBub3QgZW1wdHksXG4gICAgICAgICAgLy8gdGFyZ2V0IGdhbWUgcGllY2UgaW4gZ2FtZVBpZWNlcyBhcnJheSB1c2luZyBib2FyZCBjZWxsIFxuICAgICAgICAgIC8vIGhpdCB0aGUgY29ycmVzcG9uZGluZyBzaGlwIGFuZCBhZGQgWCB0byBib2FyZDtcbiAgICAgICAgaWYgKGNlbGwgPT09ICcnKSByZXR1cm4gYm9hcmRbY29vcmRbMF1dW2Nvb3JkWzFdXSA9ICdNJzsgIC8vIE0gZm9yIG1pc3NcbiAgICAgICAgXG4gICAgICAgIGlmIChjZWxsICE9PSAnJykge1xuICAgICAgICAgICAgZ2FtZVBpZWNlc1tjZWxsXS5oaXQoKTtcbiAgICAgICAgICAgIGJvYXJkW2Nvb3JkWzBdXVtjb29yZFsxXV0gPSAnWCc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAgIC8vIGNoZWNrIGlmIGFsbCBzaGlwcyBoYXZlIGJlZW4gc3VuaztcbiAgICBsZXQgYWxsU2hpcHNTdW5rID0gKCkgPT4ge1xuICAgICAgICBmb3IgKGxldCBwaWVjZSBvZiBnYW1lUGllY2VzKSB7XG4gICAgICAgICAgICBpZiAocGllY2UuaXNTdW5rID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgICAgLy8gZnVuY3Rpb24gdG8gY2hlY2sgbW92ZSBpcyB2YWxpZFxuICAgIGxldCBpc01vdmVWYWxpZCA9IChjb29yZCkgPT4ge1xuICAgICAgICBpZiAoYm9hcmRbY29vcmRbMF1dW2Nvb3JkWzFdXSAhPT0gJ00nXG4gICAgICAgICAgICAmJiBib2FyZFtjb29yZFswXV1bY29vcmRbMV1dICE9PSAnWCdcbiAgICAgICAgICAgICYmIGNvb3JkWzBdIDwgMTBcbiAgICAgICAgICAgICYmIGNvb3JkWzFdIDwgMTBcbiAgICAgICAgICAgICYmIGNvb3JkWzBdID49IDBcbiAgICAgICAgICAgICYmIGNvb3JkWzFdID49IDApIHJldHVybiB0cnVlO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBcblxuICAgIGxldCBybmcgPSAobikgPT4ge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbilcbiAgICB9XG4gICAgLy8gdXNlIHJuZyB0byBjcmVhdGUgcmFuZG9tIGNvb3Jkc1xuICAgIGxldCBnZXRSYW5kb21Db29yZHMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBbcm5nKDEwKSwgcm5nKDEwKV1cbiAgICB9XG4gICAgIFxuXG4gICAgcmV0dXJuIHsgXG4gICAgICAgIGdldCBib2FyZCgpIHtcbiAgICAgICAgICAgIHJldHVybiBib2FyZDtcbiAgICAgICAgfSxcbiAgICAgICAgY2xlYXJCb2FyZCxcbiAgICAgICAgZ2V0IGdhbWVQaWVjZXMoKSB7XG4gICAgICAgICAgICByZXR1cm4gZ2FtZVBpZWNlcztcbiAgICAgICAgfSxcbiAgICAgICAgcGxhY2VTaGlwLFxuICAgICAgICByZWNlaXZlQXR0YWNrLFxuICAgICAgICBhbGxTaGlwc1N1bmssXG4gICAgICAgIGlzTW92ZVZhbGlkLFxuICAgICAgICByYW5kb21seVBsYWNlU2hpcHNcbiAgICB9XG59XG5cbmNvbnN0IFBsYXllciA9IChuYW1lLCBjb21wdXRlcj1mYWxzZSwgcGxheWVyc1R1cm49ZmFsc2UpID0+IHtcblxuICAgIGxldCBpc1BsYXllcnNUdXJuID0gcGxheWVyc1R1cm47XG5cbiAgICAgIC8vIHN0b3JlIGFycmF5IG9mIGFscmVhZHkgcGxheWVkIG1vdmVzIGZvciBcbiAgICAgIC8vIGNvbXB1dGVyIHRvIG5vdCBtYWtlIGR1cGxpY2F0ZSBtb3ZlO1xuICAgIGxldCBtb3Zlc01hZGUgPSBbXTtcbiAgICAgIC8vIHN0b3JlIGFycmF5IG9mICdzbWFydCcgbW92ZXMgaWYgY29tcHV0ZXIgZ2V0cyBhIGhpdFxuICAgIGxldCBzbWFydE1vdmVzID0gW107XG5cbiAgICBsZXQgc3RvcmVTbWFydE1vdmVzID0gKGNvb3JkaW5hdGUpID0+IHtcblxuICAgICAgICBsZXQgeSA9IGNvb3JkaW5hdGVbMF07XG4gICAgICAgIGxldCB4ID0gY29vcmRpbmF0ZVsxXTtcblxuICAgICAgICBsZXQgcG9zc2libGVNb3ZlcyA9IFtcbiAgICAgICAgICAgIFt5KzEsIHhdLFxuICAgICAgICAgICAgW3ktMSwgeF0sXG4gICAgICAgICAgICBbeSwgeCsxXSwgXG4gICAgICAgICAgICBbeSwgeC0xXSxcbiAgICAgICAgXVxuICAgICAgICBmb3IgKGxldCBtb3ZlIG9mIHBvc3NpYmxlTW92ZXMpIHtcbiAgICAgICAgICAgIGlmIChtb3ZlWzBdID49IDAgJiYgbW92ZVswXSA8IDEwXG4gICAgICAgICAgICAgICAgJiYgbW92ZVsxXSA+PSAwICYmIG1vdmVbMV0gPCAxMFxuICAgICAgICAgICAgICAgICYmICFtb3ZlQWxyZWFkeU1hZGUobW92ZSlcbiAgICAgICAgICAgICAgICAmJiAhc21hcnRNb3ZlRXhpc3RzKG1vdmUpKSB7XG4gICAgICAgICAgICAgICAgc21hcnRNb3Zlcy5wdXNoKG1vdmUpOyAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgICAvLyAwIC0gbiByYW5kb20gbnVtYmVyIGdlbmVyYXRvclxuICAgIGxldCBybmcgPSAobikgPT4ge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbilcbiAgICB9XG4gICAgICAvLyB1c2Ugcm5nIHRvIGNyZWF0ZSByYW5kb20gY29vcmRzXG4gICAgbGV0IGdldFJhbmRvbUNvb3JkcyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIFtybmcoMTApLCBybmcoMTApXVxuICAgIH1cblxuICAgIGxldCB3YXNIaXQgPSAoY29vcmQsIGJvYXJkKSA9PiB7XG4gICAgICAgIGlmIChib2FyZFtjb29yZFswXV1bY29vcmRbMV1dID09PSAnWCcpIHJldHVybiB0cnVlO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgbGV0IHNtYXJ0TW92ZUV4aXN0cyA9IChjb29yZCkgPT4ge1xuICAgICAgICBmb3IgKGxldCBtb3ZlIG9mIHNtYXJ0TW92ZXMpIHtcbiAgICAgICAgICAgIGlmIChKU09OLnN0cmluZ2lmeShjb29yZCkgPT0gSlNPTi5zdHJpbmdpZnkobW92ZSkpIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGxldCBtb3ZlQWxyZWFkeU1hZGUgPSAoY29vcmQpID0+IHtcbiAgICAgICAgZm9yIChsZXQgbW92ZSBvZiBtb3Zlc01hZGUpIHtcbiAgICAgICAgICAgIGlmIChKU09OLnN0cmluZ2lmeShjb29yZCkgPT0gSlNPTi5zdHJpbmdpZnkobW92ZSkpIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuXG4gICAgbGV0IGF0dGFjayA9IChjb29yZCwgdGFyZ2V0RW5lbXkpID0+IHtcblxuICAgICAgICBpZiAoIWNvbXB1dGVyKSB7XG4gICAgICAgICAgICB0YXJnZXRFbmVteS5yZWNlaXZlQXR0YWNrKGNvb3JkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gaWYgc21hcnQgbW92ZXMgZXhpc3QsIHVzZSBvbmUsIGlmIG5vdCwgZ2V0IHJhbmRvbSBjb29yZGluYXRlXG4gICAgICAgICAgICBpZiAoc21hcnRNb3Zlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgbGV0IHJhbmRvbVNtYXJ0TW92ZSA9IHJuZyhzbWFydE1vdmVzLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgbGV0IHNtYXJ0TW92ZSA9IHNtYXJ0TW92ZXNbcmFuZG9tU21hcnRNb3ZlXVxuICAgICAgICAgICAgICAgIHNtYXJ0TW92ZXMuc3BsaWNlKHJhbmRvbVNtYXJ0TW92ZSwgMSk7XG4gICAgICAgICAgICAgICAgdGFyZ2V0RW5lbXkucmVjZWl2ZUF0dGFjayhzbWFydE1vdmUpO1xuXG4gICAgICAgICAgICAgICAgLy8gaWYgbW92ZSB3YXMgaGl0IHN0b3JlIHNtYXJ0bW92ZXNcbiAgICAgICAgICAgICAgICBpZiAod2FzSGl0KHNtYXJ0TW92ZSwgdGFyZ2V0RW5lbXkuYm9hcmQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0b3JlU21hcnRNb3ZlcyhzbWFydE1vdmUsIHRhcmdldEVuZW15LmJvYXJkKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBtb3Zlc01hZGUucHVzaChzbWFydE1vdmUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncmFuZG9tIG1vdmUnKVxuICAgICAgICAgICAgICAgIGxldCByYW5kb21Db29yZCA9IGdldFJhbmRvbUNvb3JkcygpO1xuICAgICAgICAgICAgICAgIC8vIGlmICdyYW5kb20nIG1vdmUgaGFzIGFscmVhZHkgYmVlbiBtYWRlLCBcbiAgICAgICAgICAgICAgICAvLyBjcmVhdGUgYW5vdGhlciBwYWlyIG9mIHJhbmRvbXMgY29vcmRzIFxuICAgICAgICAgICAgICAgIC8vIHVudGlsIG1vdmUgaGFzbid0IGJlZW4gbWFkZVxuICAgICAgICAgICAgICAgIHdoaWxlIChtb3ZlQWxyZWFkeU1hZGUocmFuZG9tQ29vcmQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJhbmRvbUNvb3JkID0gZ2V0UmFuZG9tQ29vcmRzKCk7IFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0YXJnZXRFbmVteS5yZWNlaXZlQXR0YWNrKHJhbmRvbUNvb3JkKTtcbiAgICAgICAgICAgICAgICBtb3Zlc01hZGUucHVzaChyYW5kb21Db29yZCk7XG4gICAgICAgICAgICAgICAgLy8gaWYgbW92ZSB3YXMgaGl0IHN0b3JlIHNtYXJ0TW92ZXNcbiAgICAgICAgICAgICAgICBpZiAod2FzSGl0KHJhbmRvbUNvb3JkLCB0YXJnZXRFbmVteS5ib2FyZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RvcmVTbWFydE1vdmVzKHJhbmRvbUNvb3JkLCB0YXJnZXRFbmVteS5ib2FyZClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coc21hcnRNb3ZlcylcblxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIG5hbWUsIFxuICAgICAgICBhdHRhY2ssXG4gICAgICAgIGdldCBpc1BsYXllcnNUdXJuKCkge1xuICAgICAgICAgICAgcmV0dXJuIGlzUGxheWVyc1R1cm47XG4gICAgICAgIH0sXG4gICAgICAgIHNldCBpc1BsYXllcnNUdXJuKHZhbCkge1xuICAgICAgICAgICAgcmV0dXJuIGlzUGxheWVyc1R1cm4gPSB2YWw7XG4gICAgICAgIH1cblxuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgc2hpcHMsXG4gICAgc2hpcEZhY3RvcnksXG4gICAgZ2FtZUJvYXJkLFxuICAgIFBsYXllclxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9