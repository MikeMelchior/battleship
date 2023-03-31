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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/dom-stuff.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSxpREFBaUQsK0JBQStCLGdDQUFnQyw4QkFBOEIsd0JBQXdCLHNCQUFzQixtQ0FBbUMsR0FBRyxPQUFPLGdCQUFnQiw2QkFBNkIsR0FBRyxpQkFBaUIsbUJBQW1CLEdBQUcsYUFBYSxzQkFBc0IsdUJBQXVCLG9CQUFvQiw4QkFBOEIsb0JBQW9CLGdDQUFnQywyQkFBMkIsR0FBRyxVQUFVLG9CQUFvQiw2QkFBNkIsb0NBQW9DLEdBQUcscUJBQXFCLHlCQUF5QixrQkFBa0IsMEJBQTBCLHVCQUF1QixxQ0FBcUMsb0JBQW9CLDZCQUE2QiwwQkFBMEIsOEJBQThCLEdBQUcsMkJBQTJCLGVBQWUsZ0JBQWdCLGlCQUFpQix5QkFBeUIsR0FBRyxpQkFBaUIsOEJBQThCLG1DQUFtQyxvQkFBb0IsZ0RBQWdELEdBQUcsdUJBQXVCLHdCQUF3QixHQUFHLHVCQUF1QixzQkFBc0IsK0JBQStCLEtBQUssOEJBQThCLG1CQUFtQixvQkFBb0Isb0JBQW9CLHNCQUFzQiwwQkFBMEIsR0FBRyw0QkFBNEIsa0JBQWtCLG1CQUFtQix3QkFBd0IseUJBQXlCLEdBQUcsa0NBQWtDLG1CQUFtQixHQUFHLGdCQUFnQixpQkFBaUIsbUJBQW1CLGtDQUFrQyxzQkFBc0IsaUJBQWlCLEdBQUcsa0JBQWtCLHlCQUF5QixzQkFBc0IsR0FBRyxTQUFTLDBCQUEwQixjQUFjLG9CQUFvQixzQkFBc0Isb0NBQW9DLDBCQUEwQixpQkFBaUIsR0FBRyxpQkFBaUIsMEJBQTBCLDZCQUE2Qix5QkFBeUIsR0FBRyxXQUFXLHlCQUF5QiwwQkFBMEIsbUJBQW1CLG1CQUFtQixvQkFBb0Isa0NBQWtDLEdBQUcsaUJBQWlCLG9CQUFvQixtQ0FBbUMsR0FBRywwQkFBMEIsaUJBQWlCLFdBQVcsZ0NBQWdDLG9CQUFvQiwwQkFBMEIscUJBQXFCLHFCQUFxQixHQUFHLHdEQUF3RCxvQ0FBb0MsR0FBRyxZQUFZLG9CQUFvQixnQ0FBZ0MsMkJBQTJCLHVCQUF1QixHQUFHLFlBQVksNEJBQTRCLDZCQUE2QixHQUFHLDJFQUEyRSxrQkFBa0IsbUJBQW1CLHdDQUF3QyxzQkFBc0Isb0JBQW9CLDBCQUEwQiw4QkFBOEIsOEJBQThCLFNBQVMsV0FBVyw0Q0FBNEMsY0FBYyw4QkFBOEIsb0JBQW9CLHdCQUF3QixJQUFJLGdCQUFnQixvQkFBb0Isc0JBQXNCLGtCQUFrQixtQkFBbUIsbUJBQW1CLEdBQUcsaUJBQWlCLHlCQUF5QiwwQkFBMEIsbUJBQW1CLG9CQUFvQiw2QkFBNkIsZUFBZSx5QkFBeUIsR0FBRyxtQkFBbUIsNkJBQTZCLHNCQUFzQixHQUFHLFlBQVksb0JBQW9CLGVBQWUsR0FBRyxnQkFBZ0IsbUJBQW1CLGtCQUFrQix3QkFBd0IsMENBQTBDLHlCQUF5QixJQUFJLGVBQWUsaUZBQWlGLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxNQUFNLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLE1BQU0sS0FBSyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEscUNBQXFDLDREQUE0RCxpQ0FBaUMsK0JBQStCLGdDQUFnQyw4QkFBOEIsd0JBQXdCLHNCQUFzQixtQ0FBbUMsR0FBRyxPQUFPLGdCQUFnQiw2QkFBNkIsR0FBRyxpQkFBaUIsbUJBQW1CLEdBQUcsYUFBYSxzQkFBc0IsdUJBQXVCLG9CQUFvQiw4QkFBOEIsb0JBQW9CLGdDQUFnQywyQkFBMkIsR0FBRyxVQUFVLG9CQUFvQiw2QkFBNkIsb0NBQW9DLEdBQUcscUJBQXFCLHlCQUF5QixrQkFBa0IsMEJBQTBCLHVCQUF1QixxQ0FBcUMsb0JBQW9CLDZCQUE2QiwwQkFBMEIsOEJBQThCLEdBQUcsMkJBQTJCLGVBQWUsZ0JBQWdCLGlCQUFpQix5QkFBeUIsR0FBRyxpQkFBaUIsOEJBQThCLG1DQUFtQyxvQkFBb0IsZ0RBQWdELEdBQUcsdUJBQXVCLHdCQUF3QixHQUFHLHVCQUF1QixzQkFBc0IsK0JBQStCLEtBQUssOEJBQThCLG1CQUFtQixvQkFBb0Isb0JBQW9CLHNCQUFzQiwwQkFBMEIsR0FBRyw0QkFBNEIsa0JBQWtCLG1CQUFtQix3QkFBd0IseUJBQXlCLEdBQUcsa0NBQWtDLG1CQUFtQixHQUFHLGdCQUFnQixpQkFBaUIsbUJBQW1CLGtDQUFrQyxzQkFBc0IsaUJBQWlCLEdBQUcsa0JBQWtCLHlCQUF5QixzQkFBc0IsR0FBRyxTQUFTLDBCQUEwQixjQUFjLG9CQUFvQixzQkFBc0Isb0NBQW9DLDBCQUEwQixpQkFBaUIsR0FBRyxpQkFBaUIsMEJBQTBCLDZCQUE2Qix5QkFBeUIsR0FBRyxXQUFXLHlCQUF5QiwwQkFBMEIsbUJBQW1CLG1CQUFtQixvQkFBb0Isa0NBQWtDLEdBQUcsaUJBQWlCLG9CQUFvQixtQ0FBbUMsR0FBRywwQkFBMEIsaUJBQWlCLFdBQVcsZ0NBQWdDLG9CQUFvQiwwQkFBMEIscUJBQXFCLHFCQUFxQixHQUFHLHdEQUF3RCxvQ0FBb0MsR0FBRyxZQUFZLG9CQUFvQixnQ0FBZ0MsMkJBQTJCLHVCQUF1QixHQUFHLFlBQVksNEJBQTRCLDZCQUE2QixHQUFHLDJFQUEyRSxrQkFBa0IsbUJBQW1CLHdDQUF3QyxzQkFBc0Isb0JBQW9CLDBCQUEwQiw4QkFBOEIsOEJBQThCLFNBQVMsV0FBVyw0Q0FBNEMsY0FBYyw4QkFBOEIsb0JBQW9CLHdCQUF3QixJQUFJLGdCQUFnQixvQkFBb0Isc0JBQXNCLGtCQUFrQixtQkFBbUIsbUJBQW1CLEdBQUcsaUJBQWlCLHlCQUF5QiwwQkFBMEIsbUJBQW1CLG9CQUFvQiw2QkFBNkIsZUFBZSx5QkFBeUIsR0FBRyxtQkFBbUIsNkJBQTZCLHNCQUFzQixHQUFHLFlBQVksb0JBQW9CLGVBQWUsR0FBRyxnQkFBZ0IsbUJBQW1CLGtCQUFrQix3QkFBd0IsMENBQTBDLHlCQUF5QixJQUFJLDJCQUEyQjtBQUNydVI7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7O0FDUDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW9HO0FBQ3BHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsdUZBQU87Ozs7QUFJOEM7QUFDdEUsT0FBTyxpRUFBZSx1RkFBTyxJQUFJLDhGQUFjLEdBQUcsOEZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JxQjs7O0FBR3JCLGNBQWMsbUJBQU8sQ0FBQywrQkFBUztBQUMvQixpQkFBaUIsbUJBQU8sQ0FBQyx1Q0FBYTs7OztBQUl0QztBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBLHdCQUF3QixRQUFRO0FBQ2hDO0FBQ0E7QUFDQSxnREFBZ0QsT0FBTyxHQUFHLFFBQVE7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsTUFBTTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7OztBQVdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9IRCxjQUFjLG1CQUFPLENBQUMsK0JBQVM7QUFDUTs7QUFFdkM7O0FBRWU7QUFDZjtBQUNBLHdCQUF3QixnREFBaUI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUksbURBQW9CO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSSxtREFBb0I7O0FBRXhCO0FBQ0E7QUFDQSxJQUFJLG1EQUFvQjs7QUFFeEI7QUFDQTtBQUNBLElBQUksb0RBQXFCOztBQUV6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksbURBQW9CO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDRCQUE0QjtBQUM1Qjs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCLFlBQVk7QUFDcEM7QUFDQSw0QkFBNEIsWUFBWTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQywwQkFBMEI7QUFDN0Q7QUFDQTtBQUNBLG1DQUFtQywwQkFBMEI7QUFDN0Q7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLG1DQUFtQywwQkFBMEI7QUFDN0Q7QUFDQTtBQUNBLG1DQUFtQywwQkFBMEI7QUFDN0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0VBQWtFO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZG9tLXN0dWZmLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZS1sb29wLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIC0tbWlkbmlnaHRHcmVlbjogIzA3M0IzQTtcXG4gICAgLS1kYXJ0bW91dGhHcmVlbjogIzBCNkU0RjtcXG4gICAgLS1waWdtZW50R3JlZW46ICMwOEEwNDU7XFxuICAgIC0tbWFudGlzOiAjNkJCRjU5O1xcbiAgICAtLWVjcnU6ICNEREI3NzE7XFxuICAgIC0tZW5naW5lZXJpbmdPcmFuZ2U6ICNCRjA2MDM7XFxufVxcblxcbioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHksXFxuaHRtbCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2YjY5Njk7XFxuICAgIGNvbG9yOiB2YXIoLS1tYW50aXMpO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZWNydSk7XFxufVxcblxcbi5vcGVuaW5nLXdpbmRvdyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWVjcnUpOyBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5vcGVuaW5nLXdpbmRvdy5oaWRkZW57XFxuICAgIHdpZHRoOiAwO1xcbiAgICBoZWlnaHQ6IDA7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLmlucHV0LWdyaWQge1xcbiAgICBcXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQ6IHJlcGVhdCgxMCwgMzVweCkgLyByZXBlYXQoMTAsIDM1cHgpO1xcbn1cXG5cXG4uaW5wdXQtZ3JpZCAuY2VsbCB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xcbn1cXG5cXG4ub3BlbmluZy13aW5kb3cgcCB7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgLyogcGFkZGluZy1ib3R0b206IDIwcHg7ICovXFxufVxcblxcbi5vcGVuaW5nLXdpbmRvdyAuYnV0dG9ucyB7XFxuICAgIHdpZHRoOiAzNTBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZDogMWZyIC8gMWZyO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ub3BlbmluZy13aW5kb3cgYnV0dG9uIHtcXG4gICAgd2lkdGg6IDkwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLm9wZW5pbmctd2luZG93IGJ1dHRvbjpob3ZlciB7XFxuICAgIG9wYWNpdHk6IDAuODtcXG59XFxuXFxuLmdhbWUtaW5mbyB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgbWFyZ2luOiA2MHB4IGF1dG8gMzBweCBhdXRvO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGdhcDogMTAwcHg7XFxufVxcblxcbi5nYW1lLWluZm8gcCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyNnB4O1xcbn1cXG4ubWFpbiB7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTAwcHg7XFxufVxcblxcbi5tYWluID4gZGl2IHtcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgZ3JheTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG5cXG4uZ3JpZCB7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBwYWRkaW5nOiAycHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQ6IHJlcGVhdCgxMCwgMzVweCkvIDFmcjtcXG59XFxuXFxuLmdyaWQgPiBkaXYge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkOiAxZnIgLyByZXBlYXQoMTAsIDM1cHgpO1xcbn1cXG5cXG4uZ3JpZCwgXFxuLmdyaWQgPiBkaXYge1xcbiAgICBnYXA6IDNweFxcbn1cXG5cXG4uY2VsbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGREYwRDU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGxpbmUtaGVpZ2h0OiAwO1xcbiAgICBmb250LXNpemU6IDlweDtcXG59XFxuXFxuLnNlY29uZC1ncmlkIC5jZWxsOmhvdmVyLFxcbi5pbnB1dC1ncmlkIC5jZWxsOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZWNydSk7XFxufVxcblxcbmZvb3RlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIHBhZGRpbmc6IDAgOHB4IDNweCAwO1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbn1cXG5mb290ZXIgYSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6IHJnYig5OSwgOTksIDk5KTtcXG59XFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuLyogaGVhZGVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2hhcmNvYWwpO1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBjb2xvcjogdmFyKC0tcmljaEJsYWNrKTtcXG4gICAgXFxufVxcblxcbi5tYWluIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcm9iaW5FZ2dCbHVlKTtcXG4gICAgZmxleDogMTtcXG4gICAgbWluLWhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xcbn0gXFxuXFxuLmdhbWUtYXJlYSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgd2lkdGg6IDkwdnc7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4uZ2FtZS1ib2FyZCB7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDJweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZ2FtZS1ib2FyZCBwIHtcXG4gICAgY29sb3I6IHZhcigtLWNoYXJjb2FsKTtcXG4gICAgZm9udC1zaXplOiAyNnB4O1xcbn1cXG5cXG5cXG4ucm93IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAycHg7XFxufVxcblxcbi5yb3cgPiBkaXYge1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFwYXlhV2hpcCk7XFxuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcXG59ICovXFxuXFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx3QkFBd0I7SUFDeEIseUJBQXlCO0lBQ3pCLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLFNBQVM7SUFDVCxzQkFBc0I7QUFDMUI7O0FBRUE7O0lBRUksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLDZCQUE2QjtJQUM3QixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxRQUFRO0lBQ1IsU0FBUztJQUNULFVBQVU7SUFDVixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksaUJBQWlCO0lBQ2pCLDRCQUE0QjtJQUM1QixhQUFhO0lBQ2IseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsYUFBYTtJQUNiLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWiwyQkFBMkI7SUFDM0IsZUFBZTtJQUNmLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsT0FBTztJQUNQLGFBQWE7SUFDYixlQUFlO0lBQ2YsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2IsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksYUFBYTtJQUNiLDRCQUE0QjtBQUNoQzs7QUFFQTs7SUFFSTtBQUNKOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGNBQWM7QUFDbEI7O0FBRUE7O0lBRUksNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixvQkFBb0I7SUFDcEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsc0JBQXNCO0FBQzFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXVER1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0tbWlkbmlnaHRHcmVlbjogIzA3M0IzQTtcXG4gICAgLS1kYXJ0bW91dGhHcmVlbjogIzBCNkU0RjtcXG4gICAgLS1waWdtZW50R3JlZW46ICMwOEEwNDU7XFxuICAgIC0tbWFudGlzOiAjNkJCRjU5O1xcbiAgICAtLWVjcnU6ICNEREI3NzE7XFxuICAgIC0tZW5naW5lZXJpbmdPcmFuZ2U6ICNCRjA2MDM7XFxufVxcblxcbioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHksXFxuaHRtbCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2YjY5Njk7XFxuICAgIGNvbG9yOiB2YXIoLS1tYW50aXMpO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZWNydSk7XFxufVxcblxcbi5vcGVuaW5nLXdpbmRvdyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWVjcnUpOyBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5vcGVuaW5nLXdpbmRvdy5oaWRkZW57XFxuICAgIHdpZHRoOiAwO1xcbiAgICBoZWlnaHQ6IDA7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLmlucHV0LWdyaWQge1xcbiAgICBcXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQ6IHJlcGVhdCgxMCwgMzVweCkgLyByZXBlYXQoMTAsIDM1cHgpO1xcbn1cXG5cXG4uaW5wdXQtZ3JpZCAuY2VsbCB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xcbn1cXG5cXG4ub3BlbmluZy13aW5kb3cgcCB7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgLyogcGFkZGluZy1ib3R0b206IDIwcHg7ICovXFxufVxcblxcbi5vcGVuaW5nLXdpbmRvdyAuYnV0dG9ucyB7XFxuICAgIHdpZHRoOiAzNTBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZDogMWZyIC8gMWZyO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ub3BlbmluZy13aW5kb3cgYnV0dG9uIHtcXG4gICAgd2lkdGg6IDkwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLm9wZW5pbmctd2luZG93IGJ1dHRvbjpob3ZlciB7XFxuICAgIG9wYWNpdHk6IDAuODtcXG59XFxuXFxuLmdhbWUtaW5mbyB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgbWFyZ2luOiA2MHB4IGF1dG8gMzBweCBhdXRvO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGdhcDogMTAwcHg7XFxufVxcblxcbi5nYW1lLWluZm8gcCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyNnB4O1xcbn1cXG4ubWFpbiB7XFxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTAwcHg7XFxufVxcblxcbi5tYWluID4gZGl2IHtcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgZ3JheTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG5cXG4uZ3JpZCB7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBwYWRkaW5nOiAycHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQ6IHJlcGVhdCgxMCwgMzVweCkvIDFmcjtcXG59XFxuXFxuLmdyaWQgPiBkaXYge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkOiAxZnIgLyByZXBlYXQoMTAsIDM1cHgpO1xcbn1cXG5cXG4uZ3JpZCwgXFxuLmdyaWQgPiBkaXYge1xcbiAgICBnYXA6IDNweFxcbn1cXG5cXG4uY2VsbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGREYwRDU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGxpbmUtaGVpZ2h0OiAwO1xcbiAgICBmb250LXNpemU6IDlweDtcXG59XFxuXFxuLnNlY29uZC1ncmlkIC5jZWxsOmhvdmVyLFxcbi5pbnB1dC1ncmlkIC5jZWxsOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZWNydSk7XFxufVxcblxcbmZvb3RlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIHBhZGRpbmc6IDAgOHB4IDNweCAwO1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbn1cXG5mb290ZXIgYSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6IHJnYig5OSwgOTksIDk5KTtcXG59XFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuLyogaGVhZGVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2hhcmNvYWwpO1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBjb2xvcjogdmFyKC0tcmljaEJsYWNrKTtcXG4gICAgXFxufVxcblxcbi5tYWluIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcm9iaW5FZ2dCbHVlKTtcXG4gICAgZmxleDogMTtcXG4gICAgbWluLWhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xcbn0gXFxuXFxuLmdhbWUtYXJlYSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgd2lkdGg6IDkwdnc7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4uZ2FtZS1ib2FyZCB7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDJweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZ2FtZS1ib2FyZCBwIHtcXG4gICAgY29sb3I6IHZhcigtLWNoYXJjb2FsKTtcXG4gICAgZm9udC1zaXplOiAyNnB4O1xcbn1cXG5cXG5cXG4ucm93IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAycHg7XFxufVxcblxcbi5yb3cgPiBkaXYge1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFwYXlhV2hpcCk7XFxuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcXG59ICovXFxuXFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnXG5cblxuY29uc3QgaW5kZXggPSByZXF1aXJlKCcuL2luZGV4JylcbmNvbnN0IGdhbWVMb29wID0gcmVxdWlyZSgnLi9nYW1lLWxvb3AnKVxuXG5cblxuY29uc3QgY3JlYXRlSW5wdXRHcmlkID0gKCkgPT4ge1xuICAgIGxldCBncmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0LWdyaWQnKTtcbiAgICBsZXQgcm93TnVtID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSA5OyBpKyspIHtcbiAgICAgICAgbGV0IGNlbGxOdW0gPSAwO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8PSA5OyBqKyspIHtcbiAgICAgICAgICAgIGxldCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTmFtZSA9ICdjZWxsJztcbiAgICAgICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdjb29yZGluYXRlcycsIGAke3Jvd051bX0sJHtjZWxsTnVtfWApO1xuICAgICAgICAgICAgZ3JpZC5hcHBlbmQoY2VsbCk7XG4gICAgICAgICAgICBjZWxsTnVtKys7XG4gICAgICAgIH1cbiAgICAgICAgcm93TnVtKys7XG4gICAgfSAgIFxufVxuXG5jcmVhdGVJbnB1dEdyaWQoKTtcblxubGV0IGlucHV0Tm9kZUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaW5wdXQtZ3JpZCAuY2VsbCcpXG4gICAgLy8gY3JlYXRlIHRlbXBvcmFyeSBnYW1lIGFuZCB1c2UgaXQgdG8gXG4gICAgLy8gc3RvcmUgdGhlIGluZm8gb2YgdGhlIHBsYWNlZCBzaGlwcyxcbmxldCB0ZW1wR2FtZSA9IGluZGV4LmdhbWVCb2FyZCgpOyAgIFxuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgdGVtcEdhbWUucmFuZG9tbHlQbGFjZVNoaXBzKClcbiAgICByZW5kZXJTaGlwcyhpbnB1dE5vZGVMaXN0LCB0ZW1wR2FtZS5ib2FyZClcbn0sIDEpO1xuXG5cbi8vIHJhbmRvbWl6ZSBzaGlwIHBsYWNlbWVudCBidXR0b24gZXZlbnQgbGlzdGVuZXJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yYW5kb20nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAvLyBjbGVhciBib2FyZCBpbiBjYXNlIGl0IGFscmVhZHkgZXhpc3RzO1xuICAgIHRlbXBHYW1lLmNsZWFyQm9hcmQoKTtcbiAgICB0ZW1wR2FtZS5yYW5kb21seVBsYWNlU2hpcHMoKTtcbiAgICByZW5kZXJTaGlwcyhpbnB1dE5vZGVMaXN0LCB0ZW1wR2FtZS5ib2FyZClcbn0pICBcblxuXG5jb25zdCBjcmVhdGVCb2FyZCA9ICh0YXJnZXRFbGVtZW50LCBib2FyZCkgPT4ge1xuICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gJ2dyaWQnO1xuXG4gICAgICAvLyB1c2UgY29vcmQgdmFyaWFibGUgdG8gc2V0IGFuIGF0dHJpYnV0ZSBvbiBcbiAgICAgIC8vIGluZGl2aWR1YWwgRE9NIGNlbGxzLCBjb3JyZXNwb25kaW5nIHRvIGdhbWUgYm9hcmQgICAgXG4gICAgbGV0IGNvb3JkID0gWzAsIDBdO1xuICAgIGZvciAobGV0IHJvd1ggb2YgYm9hcmQpIHtcbiAgICAgICAgbGV0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBmb3IgKGxldCBjZWxsWCBvZiByb3dYKSB7XG4gICAgICAgICAgICBsZXQgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdjZWxsJyk7XG4gICAgICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZSgnY29vcmRpbmF0ZXMnLCBgJHtjb29yZH1gKTtcbiAgICAgICAgICAgIGNvb3JkWzFdKys7XG4gICAgICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudC5hcHBlbmQocm93KTtcbiAgICAgICAgY29vcmRbMF0rKztcbiAgICAgICAgY29vcmRbMV0gPSAwO1xuICAgIH1cbiAgICB0YXJnZXRFbGVtZW50LmFwcGVuZChlbGVtZW50KTtcbn1cblxuY29uc3QgcmVuZGVyU2hpcHMgPSAobm9kZUxpc3QsIGJvYXJkKSA9PiB7XG4gICAgXG4gICAgbm9kZUxpc3QuZm9yRWFjaChjZWxsID0+IHtcbiAgICAgICAgbGV0IGNvb3JkWSA9IGNlbGwuZ2V0QXR0cmlidXRlKCdjb29yZGluYXRlcycpWzBdO1xuICAgICAgICBsZXQgY29vcmRYID0gY2VsbC5nZXRBdHRyaWJ1dGUoJ2Nvb3JkaW5hdGVzJylbMl07XG4gICAgICAgIGlmIChib2FyZFtjb29yZFldW2Nvb3JkWF0gIT09ICcnKSB7XG4gICAgICAgICAgICBjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjMDczQjNBJztcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgY2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI0ZERjBENSdcbiAgICAgICAgfVxuICAgIH0pO1xufSAgIFxuXG5jb25zdCB1cGRhdGVCb2FyZCA9IChub2RlTGlzdCwgYm9hcmQpID0+IHtcbiAgICBub2RlTGlzdC5mb3JFYWNoKGNlbGwgPT4ge1xuICAgICAgICBsZXQgY29vcmRZID0gY2VsbC5nZXRBdHRyaWJ1dGUoJ2Nvb3JkaW5hdGVzJylbMF07XG4gICAgICAgIGxldCBjb29yZFggPSBjZWxsLmdldEF0dHJpYnV0ZSgnY29vcmRpbmF0ZXMnKVsyXTtcbiAgICAgICAgaWYgKGJvYXJkW2Nvb3JkWV1bY29vcmRYXSA9PT0gJ1gnKSB7XG4gICAgICAgICAgICBjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZWQnO1xuICAgICAgICB9IGVsc2UgaWYgKGJvYXJkW2Nvb3JkWV1bY29vcmRYXSA9PT0gJ00nKSB7XG4gICAgICAgICAgICBjZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdjeWFuJ1xuICAgICAgICB9XG4gICAgfSlcbn1cblxuY29uc3QgYXR0YWNrTGlzdGVuZXIgPSAoY2VsbCwgcGxheWVyLCB0YXJnZXQpID0+IHtcbiAgICBpZiAoIXBsYXllci5pc1BsYXllcnNUdXJuKSByZXR1cm5cbiAgICBsZXQgY29vcmRZID0gY2VsbC5nZXRBdHRyaWJ1dGUoJ2Nvb3JkaW5hdGVzJylbMF07XG4gICAgbGV0IGNvb3JkWCA9IGNlbGwuZ2V0QXR0cmlidXRlKCdjb29yZGluYXRlcycpWzJdO1xuICAgIGlmICh0YXJnZXQuYm9hcmRbY29vcmRZXVtjb29yZFhdID09PSAnWCcgXG4gICAgICAgIHx8dGFyZ2V0LmJvYXJkW2Nvb3JkWV1bY29vcmRYXSA9PT0gJ00nKSByZXR1cm4gXG4gICAgbGV0IGNvb3JkID0gW2Nvb3JkWSwgY29vcmRYXVxuICAgIHBsYXllci5hdHRhY2soY29vcmQsIHRhcmdldCk7XG4gICAgcGxheWVyLmlzUGxheWVyc1R1cm4gPSBmYWxzZTtcbn1cblxuY29uc3QgYWRkTGlzdGVuZXJzID0gKG5vZGVMaXN0LCBwbGF5ZXIsIHRhcmdldCkgPT4ge1xuICAgIG5vZGVMaXN0LmZvckVhY2goIChjZWxsKSA9PiB7XG4gICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBhdHRhY2tMaXN0ZW5lcihjZWxsLCBwbGF5ZXIsIHRhcmdldClcbiAgICAgICAgICAgIHVwZGF0ZUJvYXJkKG5vZGVMaXN0LCB0YXJnZXQuYm9hcmQpXG4gICAgICAgIH0pXG4gICAgfSlcbn0gXG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vcGVuaW5nLXdpbmRvdycpLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgZ2FtZUxvb3AuZGVmYXVsdCgpO1xufSlcblxuXG5cblxuZXhwb3J0IHtcbiAgICBjcmVhdGVCb2FyZCxcbiAgICByZW5kZXJTaGlwcyxcbiAgICB1cGRhdGVCb2FyZCxcbiAgICBhZGRMaXN0ZW5lcnMsXG4gICAgdGVtcEdhbWVcbn1cblxuXG5cblxuXG5cbiIsImNvbnN0IGluZGV4ID0gcmVxdWlyZSgnLi9pbmRleCcpO1xuaW1wb3J0ICogYXMgZG9tU3R1ZmYgZnJvbSAnLi9kb20tc3R1ZmYnXG5cbmxldCBsb29wO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBuZXdHYW1lICgpIHtcbiAgICBsZXQgcGxheWVyT25lID0gaW5kZXguUGxheWVyKCdQbGF5ZXItT25lJywgZmFsc2UsIHRydWUpO1xuICAgIGxldCBwbGF5ZXJPbmVHYW1lID0gZG9tU3R1ZmYudGVtcEdhbWU7XG4gICAgbGV0IGNvbXB1dGVyID0gaW5kZXguUGxheWVyKCdDb21wdXRlcicsIHRydWUpO1xuICAgIC8vIGxldCBwbGF5ZXJPbmVHYW1lID0gaW5kZXguZ2FtZUJvYXJkKCk7XG4gICAgbGV0IGNvbXB1dGVyR2FtZSA9IGluZGV4LmdhbWVCb2FyZCgpO1xuICAgIGxldCBwbGF5ZXJCb2FyZCA9IHBsYXllck9uZUdhbWUuYm9hcmQ7XG4gICAgbGV0IGNvbXB1dGVyQm9hcmQgPSBjb21wdXRlckdhbWUuYm9hcmQ7XG5cbiAgICBcbiAgICBcblxuICAgIFxuICAgIGNvbXB1dGVyR2FtZS5yYW5kb21seVBsYWNlU2hpcHMoKTtcblxuXG4gICAgICAvLyBjcmVhdGUgcGxheWVyIGdhbWUgYm9hcmRcbiAgICBsZXQgZmlyc3RHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZpcnN0LWdyaWQnKTtcbiAgICBmaXJzdEdyaWQuY2hpbGROb2Rlcy5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgICBub2RlLnJlbW92ZSgpO1xuICAgIH0pXG4gICAgZG9tU3R1ZmYuY3JlYXRlQm9hcmQoZmlyc3RHcmlkLCBwbGF5ZXJCb2FyZClcbiAgICBcbiAgICAgIC8vIGNyZWF0ZSBjb21wdXRlciBnYW1lIGJvYXJkXG4gICAgbGV0IHNlY29uZEdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2Vjb25kLWdyaWQnKTtcbiAgICBzZWNvbmRHcmlkLmNoaWxkTm9kZXMuZm9yRWFjaChub2RlID0+IHtcbiAgICAgICAgbm9kZS5yZW1vdmUoKTtcbiAgICB9KVxuICAgIGRvbVN0dWZmLmNyZWF0ZUJvYXJkKHNlY29uZEdyaWQsIGNvbXB1dGVyQm9hcmQpXG5cbiAgICAgIC8vIHJlbmRlciBzaGlwcyBvbiBwbGF5ZXIgb25lXG4gICAgbGV0IHBsYXllckNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZpcnN0LWdyaWQgLmNlbGwnKVxuICAgIGRvbVN0dWZmLnJlbmRlclNoaXBzKHBsYXllckNlbGxzLCBwbGF5ZXJCb2FyZClcblxuICAgICAgLy9hZGQgbGlzdGVuZXJzXG4gICAgbGV0IHRhcmdldENlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlY29uZC1ncmlkIC5jZWxsJyk7XG4gICAgZG9tU3R1ZmYuYWRkTGlzdGVuZXJzKHRhcmdldENlbGxzLCBwbGF5ZXJPbmUsIGNvbXB1dGVyR2FtZSk7XG5cbiAgICAgIC8vc2V0IHVwIGludGVydmFsIHRvIGNoZWNrIGlmIGNvbXB1dGVycyB0dXJuIGFuZCBtYWtlIG1vdmUgaWYgaXQgaXNcbiAgICBsb29wID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBpZiAoIXBsYXllck9uZS5pc1BsYXllcnNUdXJuKSB7XG4gICAgICAgICAgICBjb21wdXRlci5hdHRhY2sobnVsbCwgcGxheWVyT25lR2FtZSlcbiAgICAgICAgICAgIGRvbVN0dWZmLnVwZGF0ZUJvYXJkKHBsYXllckNlbGxzLCBwbGF5ZXJCb2FyZClcbiAgICAgICAgICAgIHBsYXllck9uZS5pc1BsYXllcnNUdXJuID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAgIC8vIGlmIGNvbXB1dGVyIHdvbiBnYW1lIDpcbiAgICAgICAgaWYgKHBsYXllck9uZUdhbWUuYWxsU2hpcHNTdW5rKCkpIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwobG9vcClcbiAgICAgICAgICAgIGFsZXJ0KCdDb21wdXRlciB3aW5zIScpXG4gICAgICAgIH0gXG4gICAgICAgIGlmIChjb21wdXRlckdhbWUuYWxsU2hpcHNTdW5rKCkpIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwobG9vcClcbiAgICAgICAgICAgIGFsZXJ0KCdQbGF5ZXIgd2lucyEnKVxuICAgICAgICB9XG4gICAgfSwgODAwKVxuICAgIFxuICAgIFxuICAgIFxuICAgIFxufVxuXG5cblxuXG5cblxuXG5cblxuXG4iLCJsZXQgc2hpcHMgPSB7XG4gICAgY2Fycmllcjoge1xuICAgICAgICBuYW1lOiAnQ2FycmllcicsXG4gICAgICAgIHNpemU6IDUsXG4gICAgICAgIGNvZGU6ICdDYScsXG4gICAgfSxcbiAgICBiYXR0bGVzaGlwOiB7XG4gICAgICAgIG5hbWU6ICdCYXR0bGVzaGlwJyxcbiAgICAgICAgc2l6ZTogNCxcbiAgICAgICAgY29kZTogJ0JhJyxcbiAgICB9LFxuICAgIGNydWlzZXI6IHtcbiAgICAgICAgbmFtZTogJ0NydWlzZXInLFxuICAgICAgICBzaXplOiAzLFxuICAgICAgICBjb2RlOiAnQ3InLFxuICAgIH0sXG4gICAgc3VibWFyaW5lOiB7XG4gICAgICAgIG5hbWU6ICdTdWJtYXJpbmUnLFxuICAgICAgICBzaXplOiAzLFxuICAgICAgICBjb2RlOiAnU3UnLFxuICAgIH0sXG4gICAgZGVzdHJveWVyOiB7XG4gICAgICAgIG5hbWU6ICdEZXN0cm95ZXInLFxuICAgICAgICBzaXplOiAyLFxuICAgICAgICBjb2RlOiAnRGUnLFxuICAgIH0sXG59XG5cbmNvbnN0IHNoaXBGYWN0b3J5ID0gKG5hbWUsIHNpemUpID0+IHtcbiAgICBsZXQgc2hpcE5hbWUgPSBuYW1lO1xuICAgIGxldCBoaXRzID0gMDtcblxuICAgIGxldCBoaXQgPSAoKSA9PiB7XG4gICAgICAgIGhpdHMrKztcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBnZXQgc2hpcE5hbWUoKSB7XG4gICAgICAgICAgICByZXR1cm4gc2hpcE5hbWU7XG4gICAgICAgIH0sXG4gICAgICAgIGdldCBoaXRzKCkge1xuICAgICAgICAgICAgcmV0dXJuIGhpdHM7XG4gICAgICAgIH0sXG4gICAgICAgIGhpdCxcbiAgICAgICAgZ2V0IGlzU3VuaygpIHtcbiAgICAgICAgICAgIHJldHVybiBzaXplID09PSBoaXRzO1xuICAgICAgICB9LFxuICAgIH1cbn1cblxuY29uc3QgZ2FtZUJvYXJkID0gKGxlbmd0aD0xMCkgPT4ge1xuXG4gICAgLy8gYm9hcmQgd2lsbCBjb25zaXN0IG9mIGZvbGxvd2luZyBtYXJrZXJzOiBcbiAgICAvLyAnJyBGb3IgZW1wdHkgc3F1YXJlOyAvLyBNIGZvciBtaXNzZWQgc3F1YXJlO1xuICAgIC8vIFggZm9yIGhpdCAvLyBpbmRleCBvZiBnYW1lUGllY2VzIGFycmF5IGZvciBzaGlwXG5cbiAgICBsZXQgY3JlYXRlQm9hcmQgPSAoKSA9PiB7XG4gICAgICAgIGxldCBib2FyZCA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcm93ID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgcm93LnB1c2goJycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYm9hcmQucHVzaChyb3cpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBib2FyZDtcbiAgICB9XG5cbiAgICBsZXQgYm9hcmQgPSBjcmVhdGVCb2FyZCgpO1xuICAgIGxldCBnYW1lUGllY2VzID0gW107XG5cbiAgICBsZXQgY2xlYXJCb2FyZCA9ICgpID0+IHtcbiAgICAgICAgYm9hcmQgPSBjcmVhdGVCb2FyZCgpXG4gICAgICAgIGdhbWVQaWVjZXMgPSBbXTtcbiAgICB9XG5cbiAgICBsZXQgc3RvcmVTaGlwID0gKHNoaXApID0+IHtcbiAgICAgICAgbGV0IG5ld1NoaXAgPSBzaGlwRmFjdG9yeShzaGlwLm5hbWUsIHNoaXAuc2l6ZSlcbiAgICAgICAgZ2FtZVBpZWNlcy5wdXNoKG5ld1NoaXApO1xuICAgIH1cblxuICAgIGxldCBwbGFjZVNoaXAgPSAoc2hpcCwgY29vcmQsIGhvcml6b250YWw9dHJ1ZSkgPT4ge1xuICAgICAgICAgIC8vIGNoZWNrIHNoaXAgaXMgYmVpbmcgcGxhY2VzIHdpdGhpbiBib3VuZGFyeSBvZiBib2FyZFxuICAgICAgICBpZiAoaG9yaXpvbnRhbCAmJiBjb29yZFsxXSArIHNoaXAuc2l6ZSA+IGxlbmd0aC0xKSByZXR1cm4gbmV3IEVycm9yKCdQbGVhc2UgcGxhY2Ugc2hpcCB3aXRoaW4gYm9hcmQnKTtcbiAgICAgICAgaWYgKCFob3Jpem9udGFsICYmIGNvb3JkWzBdICsgc2hpcC5zaXplID4gbGVuZ3RoLTEpIHJldHVybiBuZXcgRXJyb3IoJ1BsZWFzZSBwbGFjZSBzaGlwIHdpdGhpbiBib2FyZCcpO1xuICAgICAgICBcbiAgICAgICAgaWYgKGhvcml6b250YWwpIHtcbiAgICAgICAgICAgICAgLy8gbG9vcCB0byBjaGVjayBpZiBvdmVybGFwcGluZyBzaGlwc1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IGNvb3JkWzFdOyBpIDwgY29vcmRbMV0gKyBzaGlwLnNpemU7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChib2FyZFtjb29yZFswXV1baV0gIT09ICcnKSByZXR1cm4gbmV3IEVycm9yKCdDYW5ub3Qgb3ZlcmxhcCBzaGlwcycpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gY29vcmRbMV07IGkgPCBjb29yZFsxXSArIHNoaXAuc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYm9hcmRbY29vcmRbMF1dW2ldID0gZ2FtZVBpZWNlcy5sZW5ndGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBlbHNlIGZvbGxvdyBzYW1lIGRpcmVjdGlvbnMgYnV0IHZlcnRpY2FsbHk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gY29vcmRbMF07IGkgPCBjb29yZFswXSArIHNoaXAuc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGJvYXJkW2ldW2Nvb3JkWzFdXSAhPT0gJycpIHJldHVybiBuZXcgRXJyb3IgKCdDYW5ub3Qgb3ZlcmxhcCBzaGlwcycpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gY29vcmRbMF07IGkgPCBjb29yZFswXSArIHNoaXAuc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYm9hcmRbaV1bY29vcmRbMV1dID0gZ2FtZVBpZWNlcy5sZW5ndGg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgICAgIC8vIHN0b3JlIHNoaXAgaW4gZ2FtZSBwaWVjZXMgYXJyYXlcbiAgICAgICAgc3RvcmVTaGlwKHNoaXApO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBsZXQgcmFuZG9tbHlQbGFjZVNoaXBzID0gKCkgPT4ge1xuICAgICAgICBmb3IgKGxldCBzaGlwIGluIHNoaXBzKSB7XG4gICAgICAgICAgICBwbGFjZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGxldCB4ID0gZ2V0UmFuZG9tQ29vcmRzKCk7XG4gICAgICAgICAgICBsZXQgeSA9IGNvaW5GbGlwKCk7XG4gICAgICAgICAgICB3aGlsZSAoIXBsYWNlZClcbiAgICAgICAgICAgICAgLy8gaWYgc2hpcCBnZXQgcGxhY2VkLCBleGl0IHdoaWxlIGxvb3A7XG4gICAgICAgICAgICBpZiAocGxhY2VTaGlwKHNoaXBzW3NoaXBdLCB4LCB5KSA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgcGxhY2VTaGlwKHNoaXBzW3NoaXBdLCB4LCB5KTtcbiAgICAgICAgICAgICAgICBwbGFjZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAvLyBlbHNlIGdldCBuZXcgY29vcmRpbmF0ZXMgYW5kIGJvb2xlYW4gYW5kIHRyeSBhZ2FpbjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgeCA9IGdldFJhbmRvbUNvb3JkcygpO1xuICAgICAgICAgICAgICAgIHkgPSBjb2luRmxpcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGV0IGNvaW5GbGlwID0gKCkgPT4ge1xuICAgICAgICBpZiAoTWF0aC5yYW5kb20oKSA+IDAuNSkgcmV0dXJuIHRydWU7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBsZXQgcmVjZWl2ZUF0dGFjayA9IChjb29yZCkgPT4ge1xuICAgICAgICBsZXQgY2VsbCA9IGJvYXJkW3BhcnNlSW50KGNvb3JkWzBdKV1bcGFyc2VJbnQoY29vcmRbMV0pXTtcblxuICAgICAgICBjb25zb2xlLmxvZygnQXR0YWNraW5nOicsIGNvb3JkLCAnLS0tPicsIGNlbGwpXG4gICAgICAgICAgLy8gaWYgYm9hcmQgY2VsbCBpcyBlbXB0eSBhZGQgTSBmb3IgbWlzcywgaWYgbm90IGVtcHR5LFxuICAgICAgICAgIC8vIHRhcmdldCBnYW1lIHBpZWNlIGluIGdhbWVQaWVjZXMgYXJyYXkgdXNpbmcgYm9hcmQgY2VsbCBcbiAgICAgICAgICAvLyBoaXQgdGhlIGNvcnJlc3BvbmRpbmcgc2hpcCBhbmQgYWRkIFggdG8gYm9hcmQ7XG4gICAgICAgIGlmIChjZWxsID09PSAnJykgcmV0dXJuIGJvYXJkW2Nvb3JkWzBdXVtjb29yZFsxXV0gPSAnTSc7ICAvLyBNIGZvciBtaXNzXG4gICAgICAgIFxuICAgICAgICBpZiAoY2VsbCAhPT0gJycpIHtcbiAgICAgICAgICAgIGdhbWVQaWVjZXNbY2VsbF0uaGl0KCk7XG4gICAgICAgICAgICBib2FyZFtjb29yZFswXV1bY29vcmRbMV1dID0gJ1gnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgICAvLyBjaGVjayBpZiBhbGwgc2hpcHMgaGF2ZSBiZWVuIHN1bms7XG4gICAgbGV0IGFsbFNoaXBzU3VuayA9ICgpID0+IHtcbiAgICAgICAgZm9yIChsZXQgcGllY2Ugb2YgZ2FtZVBpZWNlcykge1xuICAgICAgICAgICAgaWYgKHBpZWNlLmlzU3VuayA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAgIC8vIGZ1bmN0aW9uIHRvIGNoZWNrIG1vdmUgaXMgdmFsaWRcbiAgICBsZXQgaXNNb3ZlVmFsaWQgPSAoY29vcmQpID0+IHtcbiAgICAgICAgaWYgKGJvYXJkW2Nvb3JkWzBdXVtjb29yZFsxXV0gIT09ICdNJ1xuICAgICAgICAgICAgJiYgYm9hcmRbY29vcmRbMF1dW2Nvb3JkWzFdXSAhPT0gJ1gnXG4gICAgICAgICAgICAmJiBjb29yZFswXSA8IDEwXG4gICAgICAgICAgICAmJiBjb29yZFsxXSA8IDEwXG4gICAgICAgICAgICAmJiBjb29yZFswXSA+PSAwXG4gICAgICAgICAgICAmJiBjb29yZFsxXSA+PSAwKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gXG5cbiAgICBsZXQgcm5nID0gKG4pID0+IHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG4pXG4gICAgfVxuICAgIC8vIHVzZSBybmcgdG8gY3JlYXRlIHJhbmRvbSBjb29yZHNcbiAgICBsZXQgZ2V0UmFuZG9tQ29vcmRzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gW3JuZygxMCksIHJuZygxMCldXG4gICAgfVxuICAgICBcblxuICAgIHJldHVybiB7IFxuICAgICAgICBnZXQgYm9hcmQoKSB7XG4gICAgICAgICAgICByZXR1cm4gYm9hcmQ7XG4gICAgICAgIH0sXG4gICAgICAgIGNsZWFyQm9hcmQsXG4gICAgICAgIGdldCBnYW1lUGllY2VzKCkge1xuICAgICAgICAgICAgcmV0dXJuIGdhbWVQaWVjZXM7XG4gICAgICAgIH0sXG4gICAgICAgIHBsYWNlU2hpcCxcbiAgICAgICAgcmVjZWl2ZUF0dGFjayxcbiAgICAgICAgYWxsU2hpcHNTdW5rLFxuICAgICAgICBpc01vdmVWYWxpZCxcbiAgICAgICAgcmFuZG9tbHlQbGFjZVNoaXBzXG4gICAgfVxufVxuXG5jb25zdCBQbGF5ZXIgPSAobmFtZSwgY29tcHV0ZXI9ZmFsc2UsIHBsYXllcnNUdXJuPWZhbHNlKSA9PiB7XG5cbiAgICBsZXQgaXNQbGF5ZXJzVHVybiA9IHBsYXllcnNUdXJuO1xuXG4gICAgICAvLyBzdG9yZSBhcnJheSBvZiBhbHJlYWR5IHBsYXllZCBtb3ZlcyBmb3IgXG4gICAgICAvLyBjb21wdXRlciB0byBub3QgbWFrZSBkdXBsaWNhdGUgbW92ZTtcbiAgICBsZXQgbW92ZXNNYWRlID0gW107XG4gICAgICAvLyBzdG9yZSBhcnJheSBvZiAnc21hcnQnIG1vdmVzIGlmIGNvbXB1dGVyIGdldHMgYSBoaXRcbiAgICBsZXQgc21hcnRNb3ZlcyA9IFtdO1xuXG4gICAgbGV0IHN0b3JlU21hcnRNb3ZlcyA9IChjb29yZGluYXRlKSA9PiB7XG5cbiAgICAgICAgbGV0IHkgPSBjb29yZGluYXRlWzBdO1xuICAgICAgICBsZXQgeCA9IGNvb3JkaW5hdGVbMV07XG5cbiAgICAgICAgbGV0IHBvc3NpYmxlTW92ZXMgPSBbXG4gICAgICAgICAgICBbeSsxLCB4XSxcbiAgICAgICAgICAgIFt5LTEsIHhdLFxuICAgICAgICAgICAgW3ksIHgrMV0sIFxuICAgICAgICAgICAgW3ksIHgtMV0sXG4gICAgICAgIF1cbiAgICAgICAgZm9yIChsZXQgbW92ZSBvZiBwb3NzaWJsZU1vdmVzKSB7XG4gICAgICAgICAgICBpZiAobW92ZVswXSA+PSAwICYmIG1vdmVbMF0gPCAxMFxuICAgICAgICAgICAgICAgICYmIG1vdmVbMV0gPj0gMCAmJiBtb3ZlWzFdIDwgMTBcbiAgICAgICAgICAgICAgICAmJiAhbW92ZUFscmVhZHlNYWRlKG1vdmUpXG4gICAgICAgICAgICAgICAgJiYgIXNtYXJ0TW92ZUV4aXN0cyhtb3ZlKSkge1xuICAgICAgICAgICAgICAgIHNtYXJ0TW92ZXMucHVzaChtb3ZlKTsgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgICAgLy8gMCAtIG4gcmFuZG9tIG51bWJlciBnZW5lcmF0b3JcbiAgICBsZXQgcm5nID0gKG4pID0+IHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG4pXG4gICAgfVxuICAgICAgLy8gdXNlIHJuZyB0byBjcmVhdGUgcmFuZG9tIGNvb3Jkc1xuICAgIGxldCBnZXRSYW5kb21Db29yZHMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBbcm5nKDEwKSwgcm5nKDEwKV1cbiAgICB9XG5cbiAgICBsZXQgd2FzSGl0ID0gKGNvb3JkLCBib2FyZCkgPT4ge1xuICAgICAgICBpZiAoYm9hcmRbY29vcmRbMF1dW2Nvb3JkWzFdXSA9PT0gJ1gnKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGxldCBzbWFydE1vdmVFeGlzdHMgPSAoY29vcmQpID0+IHtcbiAgICAgICAgZm9yIChsZXQgbW92ZSBvZiBzbWFydE1vdmVzKSB7XG4gICAgICAgICAgICBpZiAoSlNPTi5zdHJpbmdpZnkoY29vcmQpID09IEpTT04uc3RyaW5naWZ5KG1vdmUpKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBsZXQgbW92ZUFscmVhZHlNYWRlID0gKGNvb3JkKSA9PiB7XG4gICAgICAgIGZvciAobGV0IG1vdmUgb2YgbW92ZXNNYWRlKSB7XG4gICAgICAgICAgICBpZiAoSlNPTi5zdHJpbmdpZnkoY29vcmQpID09IEpTT04uc3RyaW5naWZ5KG1vdmUpKSByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cblxuICAgIGxldCBhdHRhY2sgPSAoY29vcmQsIHRhcmdldEVuZW15KSA9PiB7XG5cbiAgICAgICAgaWYgKCFjb21wdXRlcikge1xuICAgICAgICAgICAgdGFyZ2V0RW5lbXkucmVjZWl2ZUF0dGFjayhjb29yZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIGlmIHNtYXJ0IG1vdmVzIGV4aXN0LCB1c2Ugb25lLCBpZiBub3QsIGdldCByYW5kb20gY29vcmRpbmF0ZVxuICAgICAgICAgICAgaWYgKHNtYXJ0TW92ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGxldCByYW5kb21TbWFydE1vdmUgPSBybmcoc21hcnRNb3Zlcy5sZW5ndGgpO1xuICAgICAgICAgICAgICAgIGxldCBzbWFydE1vdmUgPSBzbWFydE1vdmVzW3JhbmRvbVNtYXJ0TW92ZV1cbiAgICAgICAgICAgICAgICBzbWFydE1vdmVzLnNwbGljZShyYW5kb21TbWFydE1vdmUsIDEpO1xuICAgICAgICAgICAgICAgIHRhcmdldEVuZW15LnJlY2VpdmVBdHRhY2soc21hcnRNb3ZlKTtcblxuICAgICAgICAgICAgICAgIC8vIGlmIG1vdmUgd2FzIGhpdCBzdG9yZSBzbWFydG1vdmVzXG4gICAgICAgICAgICAgICAgaWYgKHdhc0hpdChzbWFydE1vdmUsIHRhcmdldEVuZW15LmJvYXJkKSkge1xuICAgICAgICAgICAgICAgICAgICBzdG9yZVNtYXJ0TW92ZXMoc21hcnRNb3ZlLCB0YXJnZXRFbmVteS5ib2FyZClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbW92ZXNNYWRlLnB1c2goc21hcnRNb3ZlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3JhbmRvbSBtb3ZlJylcbiAgICAgICAgICAgICAgICBsZXQgcmFuZG9tQ29vcmQgPSBnZXRSYW5kb21Db29yZHMoKTtcbiAgICAgICAgICAgICAgICAvLyBpZiAncmFuZG9tJyBtb3ZlIGhhcyBhbHJlYWR5IGJlZW4gbWFkZSwgXG4gICAgICAgICAgICAgICAgLy8gY3JlYXRlIGFub3RoZXIgcGFpciBvZiByYW5kb21zIGNvb3JkcyBcbiAgICAgICAgICAgICAgICAvLyB1bnRpbCBtb3ZlIGhhc24ndCBiZWVuIG1hZGVcbiAgICAgICAgICAgICAgICB3aGlsZSAobW92ZUFscmVhZHlNYWRlKHJhbmRvbUNvb3JkKSkge1xuICAgICAgICAgICAgICAgICAgICByYW5kb21Db29yZCA9IGdldFJhbmRvbUNvb3JkcygpOyBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGFyZ2V0RW5lbXkucmVjZWl2ZUF0dGFjayhyYW5kb21Db29yZCk7XG4gICAgICAgICAgICAgICAgbW92ZXNNYWRlLnB1c2gocmFuZG9tQ29vcmQpO1xuICAgICAgICAgICAgICAgIC8vIGlmIG1vdmUgd2FzIGhpdCBzdG9yZSBzbWFydE1vdmVzXG4gICAgICAgICAgICAgICAgaWYgKHdhc0hpdChyYW5kb21Db29yZCwgdGFyZ2V0RW5lbXkuYm9hcmQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0b3JlU21hcnRNb3ZlcyhyYW5kb21Db29yZCwgdGFyZ2V0RW5lbXkuYm9hcmQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKHNtYXJ0TW92ZXMpXG5cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBuYW1lLCBcbiAgICAgICAgYXR0YWNrLFxuICAgICAgICBnZXQgaXNQbGF5ZXJzVHVybigpIHtcbiAgICAgICAgICAgIHJldHVybiBpc1BsYXllcnNUdXJuO1xuICAgICAgICB9LFxuICAgICAgICBzZXQgaXNQbGF5ZXJzVHVybih2YWwpIHtcbiAgICAgICAgICAgIHJldHVybiBpc1BsYXllcnNUdXJuID0gdmFsO1xuICAgICAgICB9XG5cbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIHNoaXBzLFxuICAgIHNoaXBGYWN0b3J5LFxuICAgIGdhbWVCb2FyZCxcbiAgICBQbGF5ZXJcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==