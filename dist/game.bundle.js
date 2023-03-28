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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --oxfordBlue: #000022;\n    --pennBlue: #001242;\n    --blue: #0094C6;\n    --robinEggBlue: #66CED6;\n    --lapisLazuli: #005E7C;\n    --richBlack: #040F16;\n    --munsellBlue: #55828B;\n    --darkSlateGray: #3B6064;\n    --charcoal: #364958;\n    --papayaWhip: #FDF0D5; \n    --engineeringOrange: #BF0603;\n}\n\n* {\n    margin: 0;\n    box-sizing: border-box;\n}\n\nbody,\nhtml {\n    height: 100%;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n}\n\nheader {\n    width: 100%;\n    height: 60px;\n    background-color: var(--charcoal);\n    font-size: 30px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: var(--richBlack);\n    \n}\n\n.main {\n    background-color: var(--robinEggBlue);\n    flex: 1;\n    min-height: fit-content;\n    display: flex;\n    padding-top: 20px;\n} \n\n.game-area {\n    display: flex;\n    flex-wrap: wrap;\n    width: 90vw;\n    height: 100%;\n    margin: auto;\n}\n\n.game-board {\n    width: fit-content;\n    height: fit-content;\n    margin: auto;\n    display: flex;\n    flex-direction: column;\n    gap: 2px;\n    text-align: center;\n}\n\n.game-board p {\n    color: var(--charcoal);\n    font-size: 26px;\n}\n\n\n.row {\n    display: flex;\n    gap: 2px;\n}\n\n.row > div {\n    height: 30px;\n    width: 30px;\n    border: 1px solid;\n    background-color: var(--papayaWhip);\n    color: transparent;\n}\n\n\n\n\nspan {\n    opacity: 0;\n}\n\n\ndiv.ship-exists {\n    background-color: var(--darkSlateGray);\n}\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,qBAAqB;IACrB,mBAAmB;IACnB,eAAe;IACf,uBAAuB;IACvB,sBAAsB;IACtB,oBAAoB;IACpB,sBAAsB;IACtB,wBAAwB;IACxB,mBAAmB;IACnB,qBAAqB;IACrB,4BAA4B;AAChC;;AAEA;IACI,SAAS;IACT,sBAAsB;AAC1B;;AAEA;;IAEI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,iCAAiC;IACjC,eAAe;IACf,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,uBAAuB;;AAE3B;;AAEA;IACI,qCAAqC;IACrC,OAAO;IACP,uBAAuB;IACvB,aAAa;IACb,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,eAAe;IACf,WAAW;IACX,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;IACnB,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,QAAQ;IACR,kBAAkB;AACtB;;AAEA;IACI,sBAAsB;IACtB,eAAe;AACnB;;;AAGA;IACI,aAAa;IACb,QAAQ;AACZ;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,iBAAiB;IACjB,mCAAmC;IACnC,kBAAkB;AACtB;;;;;AAKA;IACI,UAAU;AACd;;;AAGA;IACI,sCAAsC;AAC1C","sourcesContent":[":root {\n    --oxfordBlue: #000022;\n    --pennBlue: #001242;\n    --blue: #0094C6;\n    --robinEggBlue: #66CED6;\n    --lapisLazuli: #005E7C;\n    --richBlack: #040F16;\n    --munsellBlue: #55828B;\n    --darkSlateGray: #3B6064;\n    --charcoal: #364958;\n    --papayaWhip: #FDF0D5; \n    --engineeringOrange: #BF0603;\n}\n\n* {\n    margin: 0;\n    box-sizing: border-box;\n}\n\nbody,\nhtml {\n    height: 100%;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n}\n\nheader {\n    width: 100%;\n    height: 60px;\n    background-color: var(--charcoal);\n    font-size: 30px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: var(--richBlack);\n    \n}\n\n.main {\n    background-color: var(--robinEggBlue);\n    flex: 1;\n    min-height: fit-content;\n    display: flex;\n    padding-top: 20px;\n} \n\n.game-area {\n    display: flex;\n    flex-wrap: wrap;\n    width: 90vw;\n    height: 100%;\n    margin: auto;\n}\n\n.game-board {\n    width: fit-content;\n    height: fit-content;\n    margin: auto;\n    display: flex;\n    flex-direction: column;\n    gap: 2px;\n    text-align: center;\n}\n\n.game-board p {\n    color: var(--charcoal);\n    font-size: 26px;\n}\n\n\n.row {\n    display: flex;\n    gap: 2px;\n}\n\n.row > div {\n    height: 30px;\n    width: 30px;\n    border: 1px solid;\n    background-color: var(--papayaWhip);\n    color: transparent;\n}\n\n\n\n\nspan {\n    opacity: 0;\n}\n\n\ndiv.ship-exists {\n    background-color: var(--darkSlateGray);\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/styles.css":
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
/* harmony export */   "attackCoordinateListeners": () => (/* binding */ attackCoordinateListeners),
/* harmony export */   "createGameBoard": () => (/* binding */ createGameBoard),
/* harmony export */   "highlightShips": () => (/* binding */ highlightShips)
/* harmony export */ });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
const index = __webpack_require__(/*! ./index */ "./src/index.js")

;

const header = document.createElement('header');
header.className = 'header';
const headTitle = document.createElement('p');
headTitle.textContent = 'Battleship';
header.append(headTitle)
document.body.appendChild(header)

const main = document.createElement('div');
main.className = 'main'
document.body.appendChild(main);

const gameArea = document.createElement('div');
gameArea.className = 'game-area';
main.append(gameArea)


const newGameWindow = () => {
    // enter name
    // place ships
    // reset button
    // start button
}


const createGameBoard = (board, infoString) => {
    let element = document.createElement('div');
    element.className = `game-board ${infoString.split(' ').join('-')}`;

    let info = document.createElement('p');
    info.textContent = infoString;
    element.append(info)

    let rowCount = 0
    for (let row of board) {
        let squareCount = 0;
        let gameRow = document.createElement('div');
        gameRow.className = 'row'
        for (let square of row) {
            let gameSquare = document.createElement('div');

                let hiddenText = document.createElement('span');
                hiddenText.textContent = board[rowCount][squareCount];
                gameSquare.appendChild(hiddenText)

            gameSquare.className = `${rowCount}, ${squareCount}`;
            
            gameRow.append(gameSquare);
            squareCount++
        }
        element.append(gameRow)
        rowCount++;
        squareCount = 0;
    }

    gameArea.append(element);
}

const attackCoordinateListeners = (board) => {
    let squares = document.querySelectorAll(`.${board} > div > div`)
    squares.forEach(square => {
        square.addEventListener('click', () => {
            console.log(square.className)
        })
    })
}

const highlightShips = (board) => {
    let squares = document.querySelectorAll(`.${board} > div > div`)
    squares.forEach(square => {
        if (square.firstChild.textContent != '') square.className = 'ship-exists'
    })
}





/***/ }),

/***/ "./src/game-loop.js":
/*!**************************!*\
  !*** ./src/game-loop.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom_stuff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-stuff */ "./src/dom-stuff.js");
const index = __webpack_require__(/*! ./index */ "./src/index.js");



const gameLoop = () => {

      // setup
    let playerOne = index.Player('Player One');
    let computer = index.Player('Computer', true);
    let playerBoard = index.gameBoard();
    let computerBoard = index.gameBoard();

    
    

      // auto random place ships for now;
    playerBoard.randomlyPlaceShips();
    computerBoard.randomlyPlaceShips();

    



    _dom_stuff__WEBPACK_IMPORTED_MODULE_0__.createGameBoard(playerBoard.board, 'Player 1 Board');
    _dom_stuff__WEBPACK_IMPORTED_MODULE_0__.createGameBoard(computerBoard.board, 'Computer Board');

    _dom_stuff__WEBPACK_IMPORTED_MODULE_0__.highlightShips('Player-1-Board');
    _dom_stuff__WEBPACK_IMPORTED_MODULE_0__.attackCoordinateListeners('Computer-Board')


    let gameHasWinner = true;
    let playerOneTurn = true;



    
    
    
    
   

    while (!gameHasWinner) {
    // player attack

    if (playerOneTurn) {
        try {
            let attack = playerOne.attack()
        } catch (e) {
            console.log(e)
        }
        

        // .then(coord => {
        //       // remove spaces and commas
        //     coord = coord.split(' ').join('').split(',');
        //       // turn strings into numbers
        //     coord.forEach(element => {
        //         coord[coord.indexOf(element)] = parseInt(element)
        //     });
        //     return coord;
        // })
        // .then(coord => {
        //     computerBoard.receiveAttack(coord);
        //     if (computerBoard.allShipsSunk()) gameHasWinner = true;
        // })
    }

        
    // check if winner;

    // comp attack;

    // check if winner;
    gameHasWinner = true;

    }
    


      // logic for game loop ** switch gameHasWinner flag to adjust;
    

    
    

    return {
        get playerBoard() {
            return playerBoard
        },
        get computerBoard() {
            return computerBoard
        }, 
    }

}

// auto call
gameLoop();


// async function game() {
//     let gameOne = newGame();
//     await domStuff;
//     domStuff.createGameBoard(gameOne.computerBoard.board)

// }

// game()



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

    let board = createBoard(length);

    // board will consist of following markers: 
    // '' For empty square; // M for missed square;
    // X for hit // index of gamePieces array for ship
    
    let gamePieces = [];

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
        let cell = board[coord[0]][coord[1]];
          // check board at argument coord and return corresponding value;
        if (cell === '') return 'M';  // M for miss
        if (cell !== '') {
            gamePieces[cell].hit();
            board[coord[0]][coord[1]] = 'X';
            return 'X'  // X for hit
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



    

      // 0 - n random number generator
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
        gamePieces,
        placeShip,
        receiveAttack,
        allShipsSunk,
        isMoveValid,
        getRandomCoords,
        randomlyPlaceShips
    }
}



const Player = (name, computer=false) => {

    async function attack (board, coord) {
          // hit flag used to determine if smart move should be made;
        let hit = false; 

        if (!computer) {
            // logic for player attack;
            return coord 
        } 

        //   // store array of 'smart' moves if computer gets a hit
        // let smartMoves = [];
        
        // // on a hit, push all adjacent unplayed coordinates into smartMoves Arr;
        // let storeSmartMoves = (hitCoord) => {
        //     let moves = [];
        //     let y = hitCoord[0];
        //     let x = hitCoord[1];
        //     moves.push([y++, x++]);
        //     moves.push([y++, x--]);
        //     moves.push([y--, x++]);
        //     moves.push([y--, x--]);
        //     moves.forEach(move => {
        //         if (board.isMoveValid(move)) {
        //             smartMoves.push(move);
        //         }
        //     })
        // }

          // computer AI logic;
        if (computer) {
            

            //   // if smart moves exist, use them, if not, get random coordinate
            // if (smartMoves.length > 0) {
            //     let randomSmartMove = Math.floor(Math.random() * smartMoves.length);
            //     let smartMove = smartMoves.splice(randomSmartMove, 1);
                
            //     return smartMove;
                

                
            // } else {
                // store a random move in x;
                let x = board.getRandomCoords();

                // if 'random' move has already been made, create another pair of randoms coords
                while(board[x[0]][x[1]] === 'X' || board[x[0]][x[1]] === 'M') {
                    x = board.getRandomCoords();
                }

                return x;
                
            //     // if the move is a hit store smart moves;
            //     if (board[x[0]][x[1]] !== '') {
            //         hit = true;
            //         storeSmartMoves(x);
            //     }
            // }
        } 
    }

    return {
        name, 
        attack,

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7QUMzR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0IsWUFBWTtBQUNwQztBQUNBLDRCQUE0QixZQUFZO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsMEJBQTBCO0FBQzdEO0FBQ0E7QUFDQSxtQ0FBbUMsMEJBQTBCO0FBQzdEO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixtQ0FBbUMsMEJBQTBCO0FBQzdEO0FBQ0E7QUFDQSxtQ0FBbUMsMEJBQTBCO0FBQzdEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kb20tc3R1ZmYuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lLWxvb3AuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgLS1veGZvcmRCbHVlOiAjMDAwMDIyO1xcbiAgICAtLXBlbm5CbHVlOiAjMDAxMjQyO1xcbiAgICAtLWJsdWU6ICMwMDk0QzY7XFxuICAgIC0tcm9iaW5FZ2dCbHVlOiAjNjZDRUQ2O1xcbiAgICAtLWxhcGlzTGF6dWxpOiAjMDA1RTdDO1xcbiAgICAtLXJpY2hCbGFjazogIzA0MEYxNjtcXG4gICAgLS1tdW5zZWxsQmx1ZTogIzU1ODI4QjtcXG4gICAgLS1kYXJrU2xhdGVHcmF5OiAjM0I2MDY0O1xcbiAgICAtLWNoYXJjb2FsOiAjMzY0OTU4O1xcbiAgICAtLXBhcGF5YVdoaXA6ICNGREYwRDU7IFxcbiAgICAtLWVuZ2luZWVyaW5nT3JhbmdlOiAjQkYwNjAzO1xcbn1cXG5cXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5LFxcbmh0bWwge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jaGFyY29hbCk7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGNvbG9yOiB2YXIoLS1yaWNoQmxhY2spO1xcbiAgICBcXG59XFxuXFxuLm1haW4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yb2JpbkVnZ0JsdWUpO1xcbiAgICBmbGV4OiAxO1xcbiAgICBtaW4taGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XFxufSBcXG5cXG4uZ2FtZS1hcmVhIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICB3aWR0aDogOTB2dztcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBtYXJnaW46IGF1dG87XFxufVxcblxcbi5nYW1lLWJvYXJkIHtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMnB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5nYW1lLWJvYXJkIHAge1xcbiAgICBjb2xvcjogdmFyKC0tY2hhcmNvYWwpO1xcbiAgICBmb250LXNpemU6IDI2cHg7XFxufVxcblxcblxcbi5yb3cge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDJweDtcXG59XFxuXFxuLnJvdyA+IGRpdiB7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYXBheWFXaGlwKTtcXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG5cXG5cXG5cXG5zcGFuIHtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuXFxuXFxuZGl2LnNoaXAtZXhpc3RzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya1NsYXRlR3JheSk7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0kscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsc0JBQXNCO0lBQ3RCLHdCQUF3QjtJQUN4QixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLFNBQVM7SUFDVCxzQkFBc0I7QUFDMUI7O0FBRUE7O0lBRUksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlDQUFpQztJQUNqQyxlQUFlO0lBQ2YsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsdUJBQXVCOztBQUUzQjs7QUFFQTtJQUNJLHFDQUFxQztJQUNyQyxPQUFPO0lBQ1AsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsUUFBUTtJQUNSLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixlQUFlO0FBQ25COzs7QUFHQTtJQUNJLGFBQWE7SUFDYixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGlCQUFpQjtJQUNqQixtQ0FBbUM7SUFDbkMsa0JBQWtCO0FBQ3RCOzs7OztBQUtBO0lBQ0ksVUFBVTtBQUNkOzs7QUFHQTtJQUNJLHNDQUFzQztBQUMxQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIC0tb3hmb3JkQmx1ZTogIzAwMDAyMjtcXG4gICAgLS1wZW5uQmx1ZTogIzAwMTI0MjtcXG4gICAgLS1ibHVlOiAjMDA5NEM2O1xcbiAgICAtLXJvYmluRWdnQmx1ZTogIzY2Q0VENjtcXG4gICAgLS1sYXBpc0xhenVsaTogIzAwNUU3QztcXG4gICAgLS1yaWNoQmxhY2s6ICMwNDBGMTY7XFxuICAgIC0tbXVuc2VsbEJsdWU6ICM1NTgyOEI7XFxuICAgIC0tZGFya1NsYXRlR3JheTogIzNCNjA2NDtcXG4gICAgLS1jaGFyY29hbDogIzM2NDk1ODtcXG4gICAgLS1wYXBheWFXaGlwOiAjRkRGMEQ1OyBcXG4gICAgLS1lbmdpbmVlcmluZ09yYW5nZTogI0JGMDYwMztcXG59XFxuXFxuKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSxcXG5odG1sIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2hhcmNvYWwpO1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBjb2xvcjogdmFyKC0tcmljaEJsYWNrKTtcXG4gICAgXFxufVxcblxcbi5tYWluIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcm9iaW5FZ2dCbHVlKTtcXG4gICAgZmxleDogMTtcXG4gICAgbWluLWhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xcbn0gXFxuXFxuLmdhbWUtYXJlYSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgd2lkdGg6IDkwdnc7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4uZ2FtZS1ib2FyZCB7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDJweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZ2FtZS1ib2FyZCBwIHtcXG4gICAgY29sb3I6IHZhcigtLWNoYXJjb2FsKTtcXG4gICAgZm9udC1zaXplOiAyNnB4O1xcbn1cXG5cXG5cXG4ucm93IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAycHg7XFxufVxcblxcbi5yb3cgPiBkaXYge1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFwYXlhV2hpcCk7XFxuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuXFxuXFxuXFxuc3BhbiB7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcblxcblxcbmRpdi5zaGlwLWV4aXN0cyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtTbGF0ZUdyYXkpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBpbmRleCA9IHJlcXVpcmUoJy4vaW5kZXgnKVxuXG5pbXBvcnQgJy4vc3R5bGVzLmNzcydcblxuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG5oZWFkZXIuY2xhc3NOYW1lID0gJ2hlYWRlcic7XG5jb25zdCBoZWFkVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5oZWFkVGl0bGUudGV4dENvbnRlbnQgPSAnQmF0dGxlc2hpcCc7XG5oZWFkZXIuYXBwZW5kKGhlYWRUaXRsZSlcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaGVhZGVyKVxuXG5jb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5tYWluLmNsYXNzTmFtZSA9ICdtYWluJ1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYWluKTtcblxuY29uc3QgZ2FtZUFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmdhbWVBcmVhLmNsYXNzTmFtZSA9ICdnYW1lLWFyZWEnO1xubWFpbi5hcHBlbmQoZ2FtZUFyZWEpXG5cblxuY29uc3QgbmV3R2FtZVdpbmRvdyA9ICgpID0+IHtcbiAgICAvLyBlbnRlciBuYW1lXG4gICAgLy8gcGxhY2Ugc2hpcHNcbiAgICAvLyByZXNldCBidXR0b25cbiAgICAvLyBzdGFydCBidXR0b25cbn1cblxuXG5jb25zdCBjcmVhdGVHYW1lQm9hcmQgPSAoYm9hcmQsIGluZm9TdHJpbmcpID0+IHtcbiAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gYGdhbWUtYm9hcmQgJHtpbmZvU3RyaW5nLnNwbGl0KCcgJykuam9pbignLScpfWA7XG5cbiAgICBsZXQgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBpbmZvLnRleHRDb250ZW50ID0gaW5mb1N0cmluZztcbiAgICBlbGVtZW50LmFwcGVuZChpbmZvKVxuXG4gICAgbGV0IHJvd0NvdW50ID0gMFxuICAgIGZvciAobGV0IHJvdyBvZiBib2FyZCkge1xuICAgICAgICBsZXQgc3F1YXJlQ291bnQgPSAwO1xuICAgICAgICBsZXQgZ2FtZVJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBnYW1lUm93LmNsYXNzTmFtZSA9ICdyb3cnXG4gICAgICAgIGZvciAobGV0IHNxdWFyZSBvZiByb3cpIHtcbiAgICAgICAgICAgIGxldCBnYW1lU3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICBsZXQgaGlkZGVuVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgICAgICBoaWRkZW5UZXh0LnRleHRDb250ZW50ID0gYm9hcmRbcm93Q291bnRdW3NxdWFyZUNvdW50XTtcbiAgICAgICAgICAgICAgICBnYW1lU3F1YXJlLmFwcGVuZENoaWxkKGhpZGRlblRleHQpXG5cbiAgICAgICAgICAgIGdhbWVTcXVhcmUuY2xhc3NOYW1lID0gYCR7cm93Q291bnR9LCAke3NxdWFyZUNvdW50fWA7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGdhbWVSb3cuYXBwZW5kKGdhbWVTcXVhcmUpO1xuICAgICAgICAgICAgc3F1YXJlQ291bnQrK1xuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQuYXBwZW5kKGdhbWVSb3cpXG4gICAgICAgIHJvd0NvdW50Kys7XG4gICAgICAgIHNxdWFyZUNvdW50ID0gMDtcbiAgICB9XG5cbiAgICBnYW1lQXJlYS5hcHBlbmQoZWxlbWVudCk7XG59XG5cbmNvbnN0IGF0dGFja0Nvb3JkaW5hdGVMaXN0ZW5lcnMgPSAoYm9hcmQpID0+IHtcbiAgICBsZXQgc3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke2JvYXJkfSA+IGRpdiA+IGRpdmApXG4gICAgc3F1YXJlcy5mb3JFYWNoKHNxdWFyZSA9PiB7XG4gICAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHNxdWFyZS5jbGFzc05hbWUpXG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuY29uc3QgaGlnaGxpZ2h0U2hpcHMgPSAoYm9hcmQpID0+IHtcbiAgICBsZXQgc3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke2JvYXJkfSA+IGRpdiA+IGRpdmApXG4gICAgc3F1YXJlcy5mb3JFYWNoKHNxdWFyZSA9PiB7XG4gICAgICAgIGlmIChzcXVhcmUuZmlyc3RDaGlsZC50ZXh0Q29udGVudCAhPSAnJykgc3F1YXJlLmNsYXNzTmFtZSA9ICdzaGlwLWV4aXN0cydcbiAgICB9KVxufVxuXG5cblxuZXhwb3J0IHtcbiAgICBjcmVhdGVHYW1lQm9hcmQsXG4gICAgaGlnaGxpZ2h0U2hpcHMsXG4gICAgYXR0YWNrQ29vcmRpbmF0ZUxpc3RlbmVyc1xufSIsImNvbnN0IGluZGV4ID0gcmVxdWlyZSgnLi9pbmRleCcpO1xuaW1wb3J0ICogYXMgZG9tU3R1ZmYgZnJvbSAnLi9kb20tc3R1ZmYnXG5cblxuY29uc3QgZ2FtZUxvb3AgPSAoKSA9PiB7XG5cbiAgICAgIC8vIHNldHVwXG4gICAgbGV0IHBsYXllck9uZSA9IGluZGV4LlBsYXllcignUGxheWVyIE9uZScpO1xuICAgIGxldCBjb21wdXRlciA9IGluZGV4LlBsYXllcignQ29tcHV0ZXInLCB0cnVlKTtcbiAgICBsZXQgcGxheWVyQm9hcmQgPSBpbmRleC5nYW1lQm9hcmQoKTtcbiAgICBsZXQgY29tcHV0ZXJCb2FyZCA9IGluZGV4LmdhbWVCb2FyZCgpO1xuXG4gICAgXG4gICAgXG5cbiAgICAgIC8vIGF1dG8gcmFuZG9tIHBsYWNlIHNoaXBzIGZvciBub3c7XG4gICAgcGxheWVyQm9hcmQucmFuZG9tbHlQbGFjZVNoaXBzKCk7XG4gICAgY29tcHV0ZXJCb2FyZC5yYW5kb21seVBsYWNlU2hpcHMoKTtcblxuICAgIFxuXG5cblxuICAgIGRvbVN0dWZmLmNyZWF0ZUdhbWVCb2FyZChwbGF5ZXJCb2FyZC5ib2FyZCwgJ1BsYXllciAxIEJvYXJkJyk7XG4gICAgZG9tU3R1ZmYuY3JlYXRlR2FtZUJvYXJkKGNvbXB1dGVyQm9hcmQuYm9hcmQsICdDb21wdXRlciBCb2FyZCcpO1xuXG4gICAgZG9tU3R1ZmYuaGlnaGxpZ2h0U2hpcHMoJ1BsYXllci0xLUJvYXJkJyk7XG4gICAgZG9tU3R1ZmYuYXR0YWNrQ29vcmRpbmF0ZUxpc3RlbmVycygnQ29tcHV0ZXItQm9hcmQnKVxuXG5cbiAgICBsZXQgZ2FtZUhhc1dpbm5lciA9IHRydWU7XG4gICAgbGV0IHBsYXllck9uZVR1cm4gPSB0cnVlO1xuXG5cblxuICAgIFxuICAgIFxuICAgIFxuICAgIFxuICAgXG5cbiAgICB3aGlsZSAoIWdhbWVIYXNXaW5uZXIpIHtcbiAgICAvLyBwbGF5ZXIgYXR0YWNrXG5cbiAgICBpZiAocGxheWVyT25lVHVybikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGV0IGF0dGFjayA9IHBsYXllck9uZS5hdHRhY2soKVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgICB9XG4gICAgICAgIFxuXG4gICAgICAgIC8vIC50aGVuKGNvb3JkID0+IHtcbiAgICAgICAgLy8gICAgICAgLy8gcmVtb3ZlIHNwYWNlcyBhbmQgY29tbWFzXG4gICAgICAgIC8vICAgICBjb29yZCA9IGNvb3JkLnNwbGl0KCcgJykuam9pbignJykuc3BsaXQoJywnKTtcbiAgICAgICAgLy8gICAgICAgLy8gdHVybiBzdHJpbmdzIGludG8gbnVtYmVyc1xuICAgICAgICAvLyAgICAgY29vcmQuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgLy8gICAgICAgICBjb29yZFtjb29yZC5pbmRleE9mKGVsZW1lbnQpXSA9IHBhcnNlSW50KGVsZW1lbnQpXG4gICAgICAgIC8vICAgICB9KTtcbiAgICAgICAgLy8gICAgIHJldHVybiBjb29yZDtcbiAgICAgICAgLy8gfSlcbiAgICAgICAgLy8gLnRoZW4oY29vcmQgPT4ge1xuICAgICAgICAvLyAgICAgY29tcHV0ZXJCb2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkKTtcbiAgICAgICAgLy8gICAgIGlmIChjb21wdXRlckJvYXJkLmFsbFNoaXBzU3VuaygpKSBnYW1lSGFzV2lubmVyID0gdHJ1ZTtcbiAgICAgICAgLy8gfSlcbiAgICB9XG5cbiAgICAgICAgXG4gICAgLy8gY2hlY2sgaWYgd2lubmVyO1xuXG4gICAgLy8gY29tcCBhdHRhY2s7XG5cbiAgICAvLyBjaGVjayBpZiB3aW5uZXI7XG4gICAgZ2FtZUhhc1dpbm5lciA9IHRydWU7XG5cbiAgICB9XG4gICAgXG5cblxuICAgICAgLy8gbG9naWMgZm9yIGdhbWUgbG9vcCAqKiBzd2l0Y2ggZ2FtZUhhc1dpbm5lciBmbGFnIHRvIGFkanVzdDtcbiAgICBcblxuICAgIFxuICAgIFxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0IHBsYXllckJvYXJkKCkge1xuICAgICAgICAgICAgcmV0dXJuIHBsYXllckJvYXJkXG4gICAgICAgIH0sXG4gICAgICAgIGdldCBjb21wdXRlckJvYXJkKCkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbXB1dGVyQm9hcmRcbiAgICAgICAgfSwgXG4gICAgfVxuXG59XG5cbi8vIGF1dG8gY2FsbFxuZ2FtZUxvb3AoKTtcblxuXG4vLyBhc3luYyBmdW5jdGlvbiBnYW1lKCkge1xuLy8gICAgIGxldCBnYW1lT25lID0gbmV3R2FtZSgpO1xuLy8gICAgIGF3YWl0IGRvbVN0dWZmO1xuLy8gICAgIGRvbVN0dWZmLmNyZWF0ZUdhbWVCb2FyZChnYW1lT25lLmNvbXB1dGVyQm9hcmQuYm9hcmQpXG5cbi8vIH1cblxuLy8gZ2FtZSgpXG5cbiIsImxldCBzaGlwcyA9IHtcbiAgICBjYXJyaWVyOiB7XG4gICAgICAgIG5hbWU6ICdDYXJyaWVyJyxcbiAgICAgICAgc2l6ZTogNSxcbiAgICAgICAgY29kZTogJ0NhJyxcbiAgICB9LFxuICAgIGJhdHRsZXNoaXA6IHtcbiAgICAgICAgbmFtZTogJ0JhdHRsZXNoaXAnLFxuICAgICAgICBzaXplOiA0LFxuICAgICAgICBjb2RlOiAnQmEnLFxuICAgIH0sXG4gICAgY3J1aXNlcjoge1xuICAgICAgICBuYW1lOiAnQ3J1aXNlcicsXG4gICAgICAgIHNpemU6IDMsXG4gICAgICAgIGNvZGU6ICdDcicsXG4gICAgfSxcbiAgICBzdWJtYXJpbmU6IHtcbiAgICAgICAgbmFtZTogJ1N1Ym1hcmluZScsXG4gICAgICAgIHNpemU6IDMsXG4gICAgICAgIGNvZGU6ICdTdScsXG4gICAgfSxcbiAgICBkZXN0cm95ZXI6IHtcbiAgICAgICAgbmFtZTogJ0Rlc3Ryb3llcicsXG4gICAgICAgIHNpemU6IDIsXG4gICAgICAgIGNvZGU6ICdEZScsXG4gICAgfSxcbn1cblxuY29uc3Qgc2hpcEZhY3RvcnkgPSAobmFtZSwgc2l6ZSkgPT4ge1xuICAgIGxldCBzaGlwTmFtZSA9IG5hbWU7XG4gICAgbGV0IGhpdHMgPSAwO1xuXG4gICAgbGV0IGhpdCA9ICgpID0+IHtcbiAgICAgICAgaGl0cysrO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGdldCBzaGlwTmFtZSgpIHtcbiAgICAgICAgICAgIHJldHVybiBzaGlwTmFtZTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0IGhpdHMoKSB7XG4gICAgICAgICAgICByZXR1cm4gaGl0cztcbiAgICAgICAgfSxcbiAgICAgICAgaGl0LFxuICAgICAgICBnZXQgaXNTdW5rKCkge1xuICAgICAgICAgICAgcmV0dXJuIHNpemUgPT09IGhpdHM7XG4gICAgICAgIH0sXG4gICAgfVxufVxuXG5jb25zdCBnYW1lQm9hcmQgPSAobGVuZ3RoPTEwKSA9PiB7XG5cbiAgICBsZXQgY3JlYXRlQm9hcmQgPSAoKSA9PiB7XG4gICAgICAgIGxldCBib2FyZCA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcm93ID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgcm93LnB1c2goJycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYm9hcmQucHVzaChyb3cpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBib2FyZDtcbiAgICB9XG5cbiAgICBsZXQgYm9hcmQgPSBjcmVhdGVCb2FyZChsZW5ndGgpO1xuXG4gICAgLy8gYm9hcmQgd2lsbCBjb25zaXN0IG9mIGZvbGxvd2luZyBtYXJrZXJzOiBcbiAgICAvLyAnJyBGb3IgZW1wdHkgc3F1YXJlOyAvLyBNIGZvciBtaXNzZWQgc3F1YXJlO1xuICAgIC8vIFggZm9yIGhpdCAvLyBpbmRleCBvZiBnYW1lUGllY2VzIGFycmF5IGZvciBzaGlwXG4gICAgXG4gICAgbGV0IGdhbWVQaWVjZXMgPSBbXTtcblxuICAgIGxldCBzdG9yZVNoaXAgPSAoc2hpcCkgPT4ge1xuICAgICAgICBsZXQgbmV3U2hpcCA9IHNoaXBGYWN0b3J5KHNoaXAubmFtZSwgc2hpcC5zaXplKVxuICAgICAgICBnYW1lUGllY2VzLnB1c2gobmV3U2hpcCk7XG4gICAgfVxuXG4gICAgbGV0IHBsYWNlU2hpcCA9IChzaGlwLCBjb29yZCwgaG9yaXpvbnRhbD10cnVlKSA9PiB7XG4gICAgICAgICAgLy8gY2hlY2sgc2hpcCBpcyBiZWluZyBwbGFjZXMgd2l0aGluIGJvdW5kYXJ5IG9mIGJvYXJkXG4gICAgICAgIGlmIChob3Jpem9udGFsICYmIGNvb3JkWzFdICsgc2hpcC5zaXplID4gbGVuZ3RoLTEpIHJldHVybiBuZXcgRXJyb3IoJ1BsZWFzZSBwbGFjZSBzaGlwIHdpdGhpbiBib2FyZCcpO1xuICAgICAgICBpZiAoIWhvcml6b250YWwgJiYgY29vcmRbMF0gKyBzaGlwLnNpemUgPiBsZW5ndGgtMSkgcmV0dXJuIG5ldyBFcnJvcignUGxlYXNlIHBsYWNlIHNoaXAgd2l0aGluIGJvYXJkJyk7XG4gICAgICAgIFxuICAgICAgICBpZiAoaG9yaXpvbnRhbCkge1xuICAgICAgICAgICAgICAvLyBsb29wIHRvIGNoZWNrIGlmIG92ZXJsYXBwaW5nIHNoaXBzXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gY29vcmRbMV07IGkgPCBjb29yZFsxXSArIHNoaXAuc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGJvYXJkW2Nvb3JkWzBdXVtpXSAhPT0gJycpIHJldHVybiBuZXcgRXJyb3IoJ0Nhbm5vdCBvdmVybGFwIHNoaXBzJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBjb29yZFsxXTsgaSA8IGNvb3JkWzFdICsgc2hpcC5zaXplOyBpKyspIHtcbiAgICAgICAgICAgICAgICBib2FyZFtjb29yZFswXV1baV0gPSBnYW1lUGllY2VzLmxlbmd0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGVsc2UgZm9sbG93IHNhbWUgZGlyZWN0aW9ucyBidXQgdmVydGljYWxseTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBjb29yZFswXTsgaSA8IGNvb3JkWzBdICsgc2hpcC5zaXplOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoYm9hcmRbaV1bY29vcmRbMV1dICE9PSAnJykgcmV0dXJuIG5ldyBFcnJvciAoJ0Nhbm5vdCBvdmVybGFwIHNoaXBzJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBjb29yZFswXTsgaSA8IGNvb3JkWzBdICsgc2hpcC5zaXplOyBpKyspIHtcbiAgICAgICAgICAgICAgICBib2FyZFtpXVtjb29yZFsxXV0gPSBnYW1lUGllY2VzLmxlbmd0aDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICAgICAgLy8gc3RvcmUgc2hpcCBpbiBnYW1lIHBpZWNlcyBhcnJheVxuICAgICAgICBzdG9yZVNoaXAoc2hpcCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGxldCByYW5kb21seVBsYWNlU2hpcHMgPSAoKSA9PiB7XG4gICAgICAgIGZvciAobGV0IHNoaXAgaW4gc2hpcHMpIHtcbiAgICAgICAgICAgIHBsYWNlZCA9IGZhbHNlO1xuICAgICAgICAgICAgbGV0IHggPSBnZXRSYW5kb21Db29yZHMoKTtcbiAgICAgICAgICAgIGxldCB5ID0gY29pbkZsaXAoKTtcbiAgICAgICAgICAgIHdoaWxlICghcGxhY2VkKVxuICAgICAgICAgICAgICAvLyBpZiBzaGlwIGdldCBwbGFjZWQsIGV4aXQgd2hpbGUgbG9vcDtcbiAgICAgICAgICAgIGlmIChwbGFjZVNoaXAoc2hpcHNbc2hpcF0sIHgsIHkpID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBwbGFjZVNoaXAoc2hpcHNbc2hpcF0sIHgsIHkpO1xuICAgICAgICAgICAgICAgIHBsYWNlZCA9IHRydWU7XG4gICAgICAgICAgICAgIC8vIGVsc2UgZ2V0IG5ldyBjb29yZGluYXRlcyBhbmQgYm9vbGVhbiBhbmQgdHJ5IGFnYWluO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB4ID0gZ2V0UmFuZG9tQ29vcmRzKCk7XG4gICAgICAgICAgICAgICAgeSA9IGNvaW5GbGlwKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgY29pbkZsaXAgPSAoKSA9PiB7XG4gICAgICAgIGlmIChNYXRoLnJhbmRvbSgpID4gMC41KSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGxldCByZWNlaXZlQXR0YWNrID0gKGNvb3JkKSA9PiB7XG4gICAgICAgIGxldCBjZWxsID0gYm9hcmRbY29vcmRbMF1dW2Nvb3JkWzFdXTtcbiAgICAgICAgICAvLyBjaGVjayBib2FyZCBhdCBhcmd1bWVudCBjb29yZCBhbmQgcmV0dXJuIGNvcnJlc3BvbmRpbmcgdmFsdWU7XG4gICAgICAgIGlmIChjZWxsID09PSAnJykgcmV0dXJuICdNJzsgIC8vIE0gZm9yIG1pc3NcbiAgICAgICAgaWYgKGNlbGwgIT09ICcnKSB7XG4gICAgICAgICAgICBnYW1lUGllY2VzW2NlbGxdLmhpdCgpO1xuICAgICAgICAgICAgYm9hcmRbY29vcmRbMF1dW2Nvb3JkWzFdXSA9ICdYJztcbiAgICAgICAgICAgIHJldHVybiAnWCcgIC8vIFggZm9yIGhpdFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgICAvLyBjaGVjayBpZiBhbGwgc2hpcHMgaGF2ZSBiZWVuIHN1bms7XG4gICAgbGV0IGFsbFNoaXBzU3VuayA9ICgpID0+IHtcbiAgICAgICAgZm9yIChsZXQgcGllY2Ugb2YgZ2FtZVBpZWNlcykge1xuICAgICAgICAgICAgaWYgKHBpZWNlLmlzU3VuayA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAgIC8vIGZ1bmN0aW9uIHRvIGNoZWNrIG1vdmUgaXMgdmFsaWRcbiAgICBsZXQgaXNNb3ZlVmFsaWQgPSAoY29vcmQpID0+IHtcbiAgICAgICAgaWYgKGJvYXJkW2Nvb3JkWzBdXVtjb29yZFsxXV0gIT09ICdNJ1xuICAgICAgICAgICAgJiYgYm9hcmRbY29vcmRbMF1dW2Nvb3JkWzFdXSAhPT0gJ1gnXG4gICAgICAgICAgICAmJiBjb29yZFswXSA8IDEwXG4gICAgICAgICAgICAmJiBjb29yZFsxXSA8IDEwXG4gICAgICAgICAgICAmJiBjb29yZFswXSA+PSAwXG4gICAgICAgICAgICAmJiBjb29yZFsxXSA+PSAwKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuXG5cbiAgICBcblxuICAgICAgLy8gMCAtIG4gcmFuZG9tIG51bWJlciBnZW5lcmF0b3JcbiAgICBsZXQgcm5nID0gKG4pID0+IHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG4pXG4gICAgfVxuICAgICAgLy8gdXNlIHJuZyB0byBjcmVhdGUgcmFuZG9tIGNvb3Jkc1xuICAgIGxldCBnZXRSYW5kb21Db29yZHMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBbcm5nKDEwKSwgcm5nKDEwKV1cbiAgICB9XG5cbiAgICByZXR1cm4geyBcbiAgICAgICAgZ2V0IGJvYXJkKCkge1xuICAgICAgICAgICAgcmV0dXJuIGJvYXJkO1xuICAgICAgICB9LFxuICAgICAgICBnYW1lUGllY2VzLFxuICAgICAgICBwbGFjZVNoaXAsXG4gICAgICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgICAgIGFsbFNoaXBzU3VuayxcbiAgICAgICAgaXNNb3ZlVmFsaWQsXG4gICAgICAgIGdldFJhbmRvbUNvb3JkcyxcbiAgICAgICAgcmFuZG9tbHlQbGFjZVNoaXBzXG4gICAgfVxufVxuXG5cblxuY29uc3QgUGxheWVyID0gKG5hbWUsIGNvbXB1dGVyPWZhbHNlKSA9PiB7XG5cbiAgICBhc3luYyBmdW5jdGlvbiBhdHRhY2sgKGJvYXJkLCBjb29yZCkge1xuICAgICAgICAgIC8vIGhpdCBmbGFnIHVzZWQgdG8gZGV0ZXJtaW5lIGlmIHNtYXJ0IG1vdmUgc2hvdWxkIGJlIG1hZGU7XG4gICAgICAgIGxldCBoaXQgPSBmYWxzZTsgXG5cbiAgICAgICAgaWYgKCFjb21wdXRlcikge1xuICAgICAgICAgICAgLy8gbG9naWMgZm9yIHBsYXllciBhdHRhY2s7XG4gICAgICAgICAgICByZXR1cm4gY29vcmQgXG4gICAgICAgIH0gXG5cbiAgICAgICAgLy8gICAvLyBzdG9yZSBhcnJheSBvZiAnc21hcnQnIG1vdmVzIGlmIGNvbXB1dGVyIGdldHMgYSBoaXRcbiAgICAgICAgLy8gbGV0IHNtYXJ0TW92ZXMgPSBbXTtcbiAgICAgICAgXG4gICAgICAgIC8vIC8vIG9uIGEgaGl0LCBwdXNoIGFsbCBhZGphY2VudCB1bnBsYXllZCBjb29yZGluYXRlcyBpbnRvIHNtYXJ0TW92ZXMgQXJyO1xuICAgICAgICAvLyBsZXQgc3RvcmVTbWFydE1vdmVzID0gKGhpdENvb3JkKSA9PiB7XG4gICAgICAgIC8vICAgICBsZXQgbW92ZXMgPSBbXTtcbiAgICAgICAgLy8gICAgIGxldCB5ID0gaGl0Q29vcmRbMF07XG4gICAgICAgIC8vICAgICBsZXQgeCA9IGhpdENvb3JkWzFdO1xuICAgICAgICAvLyAgICAgbW92ZXMucHVzaChbeSsrLCB4KytdKTtcbiAgICAgICAgLy8gICAgIG1vdmVzLnB1c2goW3krKywgeC0tXSk7XG4gICAgICAgIC8vICAgICBtb3Zlcy5wdXNoKFt5LS0sIHgrK10pO1xuICAgICAgICAvLyAgICAgbW92ZXMucHVzaChbeS0tLCB4LS1dKTtcbiAgICAgICAgLy8gICAgIG1vdmVzLmZvckVhY2gobW92ZSA9PiB7XG4gICAgICAgIC8vICAgICAgICAgaWYgKGJvYXJkLmlzTW92ZVZhbGlkKG1vdmUpKSB7XG4gICAgICAgIC8vICAgICAgICAgICAgIHNtYXJ0TW92ZXMucHVzaChtb3ZlKTtcbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICB9KVxuICAgICAgICAvLyB9XG5cbiAgICAgICAgICAvLyBjb21wdXRlciBBSSBsb2dpYztcbiAgICAgICAgaWYgKGNvbXB1dGVyKSB7XG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgLy8gICAvLyBpZiBzbWFydCBtb3ZlcyBleGlzdCwgdXNlIHRoZW0sIGlmIG5vdCwgZ2V0IHJhbmRvbSBjb29yZGluYXRlXG4gICAgICAgICAgICAvLyBpZiAoc21hcnRNb3Zlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAvLyAgICAgbGV0IHJhbmRvbVNtYXJ0TW92ZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHNtYXJ0TW92ZXMubGVuZ3RoKTtcbiAgICAgICAgICAgIC8vICAgICBsZXQgc21hcnRNb3ZlID0gc21hcnRNb3Zlcy5zcGxpY2UocmFuZG9tU21hcnRNb3ZlLCAxKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIC8vICAgICByZXR1cm4gc21hcnRNb3ZlO1xuICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIHN0b3JlIGEgcmFuZG9tIG1vdmUgaW4geDtcbiAgICAgICAgICAgICAgICBsZXQgeCA9IGJvYXJkLmdldFJhbmRvbUNvb3JkcygpO1xuXG4gICAgICAgICAgICAgICAgLy8gaWYgJ3JhbmRvbScgbW92ZSBoYXMgYWxyZWFkeSBiZWVuIG1hZGUsIGNyZWF0ZSBhbm90aGVyIHBhaXIgb2YgcmFuZG9tcyBjb29yZHNcbiAgICAgICAgICAgICAgICB3aGlsZShib2FyZFt4WzBdXVt4WzFdXSA9PT0gJ1gnIHx8IGJvYXJkW3hbMF1dW3hbMV1dID09PSAnTScpIHtcbiAgICAgICAgICAgICAgICAgICAgeCA9IGJvYXJkLmdldFJhbmRvbUNvb3JkcygpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiB4O1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gICAgIC8vIGlmIHRoZSBtb3ZlIGlzIGEgaGl0IHN0b3JlIHNtYXJ0IG1vdmVzO1xuICAgICAgICAgICAgLy8gICAgIGlmIChib2FyZFt4WzBdXVt4WzFdXSAhPT0gJycpIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgaGl0ID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vICAgICAgICAgc3RvcmVTbWFydE1vdmVzKHgpO1xuICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgfSBcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBuYW1lLCBcbiAgICAgICAgYXR0YWNrLFxuXG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBzaGlwcyxcbiAgICBzaGlwRmFjdG9yeSxcbiAgICBnYW1lQm9hcmQsXG4gICAgUGxheWVyXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=