/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --my-green: #04aa6d;
}

* {
  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.box {
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template: 1fr 5fr / 1fr;
  grid-template-areas:
    "header"
    "library";
}

.header {
  grid-area: header;
  display: flex;
  align-items: center;
  justify-content: center;
}

.add-btn {
  width: clamp(160px, 15%, 500px);
  height: clamp(50px, 15%, 500px);
  border: none;
  background-color: var(--my-green);
  color: white;
  font-size: 150%;
  font-weight: 800;
  border-radius: 15px;
  margin: 10px;
  transition: .2s ease-in-out;
}

.add-btn:hover {
  scale: 1.1;
}

/* LIBRARY & TABLE STYLE */

.library {
  grid-area: library;
  padding: 20px 15% 20px 15%;
}

.lib-table {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
border-style: none;
}

.lib-table td,
.lib-table th {
  border: 1px solid #ddd;
  padding: 8px;
}

.lib-table tr:nth-child(even) {
  background-color: #f2f2f2;
}

.lib-table tr:hover {
  background-color: #ddd;
}

.lib-table th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: var(--my-green);
  color: white;
}

.pages-cell {
  text-align: center;
}

.read-cell {
  text-align: center;
}

td.delete-cell {
  text-align: center;
  padding: 0;
}

.delete-img {
  max-width: 100%;
  min-width: 100%;
  border: none;
}

.delete-btn {
  max-width: 30%;
  border: none;
  background: transparent;
}

/* FORM STLYE */
/* This form-overlay transition code documented below it*/
.form-overlay {
  position: absolute;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.329);

 /* Hide the element content, while height = 0 */
    overflow: hidden;
    height: 0vh; /* start hiegh @ 0 */
    opacity: 0; /* start opacity @ 0 */
    transition: height 0ms 400ms, opacity 400ms 0ms;
  /* height delays to the time it takes opacity to fade */ 
}

.form-overlay-vis {
  position: absolute;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.329);
  overflow: hidden;

    height: 100vh; /* bring height to 100vh */
    opacity: 1; /* set opacity to 0 (full) */
    transition: height 0ms 0ms, opacity 275ms 0ms; 
  /* height changes immediately, opacity fades in */
}

/* 
https://stackoverflow.com/questions/3331353/transitions-on-the-css-display-property
So, what's going on here?

When form-overlay-vis class is added, both height and opacity 
start animation without delay (0 ms), though height 
takes 0 ms to complete animation 
(equivalent of display: block) and opacity takes 600 ms.

When form-overlay-vis class is removed, opacity starts 
animation (0 ms delay, 400 ms duration), and height waits 
400 ms and only then instantly (0 ms) restores initial value 
(equivalent of display: none in the animation callback).
*/

.form-card {
  position: absolute;
  border: 5px solid #ffff;
  background-color: var(--my-green);
  border-radius: 15px;
  box-shadow: 25px 20px 70px -30px black;
      transition: 1s;
}

.side-form {
  grid-area: sideform;
  margin: 30px;
      transition: 1s;
}

input {
  padding: 5px;
  margin: 0 0 0 0;
  border: white;
  border-radius: 5px;
}

label {
  color: white;
  font-size: 110%;
  margin-bottom: 5px;
  font-weight: bolder
}

.read-opt1 > label,
.read-opt2 > label {
  font-weight: 100;
}

.infield-r {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.read-opt {
  display: flex;
  width: 100%;
}

.read-opt1{
  display: flex;
  margin-right: 20%;
  gap: 5px;
  justify-content: center;
}

.read-opt2{
  display: flex;
  gap: 5px;
}

/* * THIS CODE COMES FROM https://moderncss.dev/pure-css-custom-styled-radio-buttons/ */
input[type=radio] {
  box-sizing: border-box;
  appearance: none;
  font: inherit;
  color: white;
  background-color: white;
  width: 1.15em;
  height: 1.15em;
  border: 0.15em solid currentColor;
  border-radius: 50%;
  display: grid;
  place-content: center;
}

input[type="radio"]::before {
  content: "";
  width: 0.65em;
  height: 0.65em;
  border-radius: 50%;
  transform: scale(0);
  transition: 120ms transform ease-in-out;
  box-shadow: inset 1em 1em var(--my-green);
}

input[type="radio"]:checked::before {
  transform: scale(1);
}
/**/

.infield {
  display: flex;
  flex-direction: column;
  margin: 10px 0 10px 0;
}

input#submit {
  font-weight: 800;
  font-size: 100%;
  border-radius: 15px;
  color: var(--my-green);
  background-color: white;
  width: 100%;
  margin-top: 10%;
  padding: 5%;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  --my-green: #04aa6d;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.box {\n  width: 100vw;\n  height: 100vh;\n  display: grid;\n  grid-template: 1fr 5fr / 1fr;\n  grid-template-areas:\n    \"header\"\n    \"library\";\n}\n\n.header {\n  grid-area: header;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.add-btn {\n  width: clamp(160px, 15%, 500px);\n  height: clamp(50px, 15%, 500px);\n  border: none;\n  background-color: var(--my-green);\n  color: white;\n  font-size: 150%;\n  font-weight: 800;\n  border-radius: 15px;\n  margin: 10px;\n  transition: .2s ease-in-out;\n}\n\n.add-btn:hover {\n  scale: 1.1;\n}\n\n/* LIBRARY & TABLE STYLE */\n\n.library {\n  grid-area: library;\n  padding: 20px 15% 20px 15%;\n}\n\n.lib-table {\n  font-family: Arial, Helvetica, sans-serif;\n  border-collapse: collapse;\n  width: 100%;\nborder-style: none;\n}\n\n.lib-table td,\n.lib-table th {\n  border: 1px solid #ddd;\n  padding: 8px;\n}\n\n.lib-table tr:nth-child(even) {\n  background-color: #f2f2f2;\n}\n\n.lib-table tr:hover {\n  background-color: #ddd;\n}\n\n.lib-table th {\n  padding-top: 12px;\n  padding-bottom: 12px;\n  text-align: left;\n  background-color: var(--my-green);\n  color: white;\n}\n\n.pages-cell {\n  text-align: center;\n}\n\n.read-cell {\n  text-align: center;\n}\n\ntd.delete-cell {\n  text-align: center;\n  padding: 0;\n}\n\n.delete-img {\n  max-width: 100%;\n  min-width: 100%;\n  border: none;\n}\n\n.delete-btn {\n  max-width: 30%;\n  border: none;\n  background: transparent;\n}\n\n/* FORM STLYE */\n/* This form-overlay transition code documented below it*/\n.form-overlay {\n  position: absolute;\n  width: 100vw;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.329);\n\n /* Hide the element content, while height = 0 */\n    overflow: hidden;\n    height: 0vh; /* start hiegh @ 0 */\n    opacity: 0; /* start opacity @ 0 */\n    transition: height 0ms 400ms, opacity 400ms 0ms;\n  /* height delays to the time it takes opacity to fade */ \n}\n\n.form-overlay-vis {\n  position: absolute;\n  width: 100vw;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.329);\n  overflow: hidden;\n\n    height: 100vh; /* bring height to 100vh */\n    opacity: 1; /* set opacity to 0 (full) */\n    transition: height 0ms 0ms, opacity 275ms 0ms; \n  /* height changes immediately, opacity fades in */\n}\n\n/* \nhttps://stackoverflow.com/questions/3331353/transitions-on-the-css-display-property\nSo, what's going on here?\n\nWhen form-overlay-vis class is added, both height and opacity \nstart animation without delay (0 ms), though height \ntakes 0 ms to complete animation \n(equivalent of display: block) and opacity takes 600 ms.\n\nWhen form-overlay-vis class is removed, opacity starts \nanimation (0 ms delay, 400 ms duration), and height waits \n400 ms and only then instantly (0 ms) restores initial value \n(equivalent of display: none in the animation callback).\n*/\n\n.form-card {\n  position: absolute;\n  border: 5px solid #ffff;\n  background-color: var(--my-green);\n  border-radius: 15px;\n  box-shadow: 25px 20px 70px -30px black;\n      transition: 1s;\n}\n\n.side-form {\n  grid-area: sideform;\n  margin: 30px;\n      transition: 1s;\n}\n\ninput {\n  padding: 5px;\n  margin: 0 0 0 0;\n  border: white;\n  border-radius: 5px;\n}\n\nlabel {\n  color: white;\n  font-size: 110%;\n  margin-bottom: 5px;\n  font-weight: bolder\n}\n\n.read-opt1 > label,\n.read-opt2 > label {\n  font-weight: 100;\n}\n\n.infield-r {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n\n.read-opt {\n  display: flex;\n  width: 100%;\n}\n\n.read-opt1{\n  display: flex;\n  margin-right: 20%;\n  gap: 5px;\n  justify-content: center;\n}\n\n.read-opt2{\n  display: flex;\n  gap: 5px;\n}\n\n/* * THIS CODE COMES FROM https://moderncss.dev/pure-css-custom-styled-radio-buttons/ */\ninput[type=radio] {\n  box-sizing: border-box;\n  appearance: none;\n  font: inherit;\n  color: white;\n  background-color: white;\n  width: 1.15em;\n  height: 1.15em;\n  border: 0.15em solid currentColor;\n  border-radius: 50%;\n  display: grid;\n  place-content: center;\n}\n\ninput[type=\"radio\"]::before {\n  content: \"\";\n  width: 0.65em;\n  height: 0.65em;\n  border-radius: 50%;\n  transform: scale(0);\n  transition: 120ms transform ease-in-out;\n  box-shadow: inset 1em 1em var(--my-green);\n}\n\ninput[type=\"radio\"]:checked::before {\n  transform: scale(1);\n}\n/**/\n\n.infield {\n  display: flex;\n  flex-direction: column;\n  margin: 10px 0 10px 0;\n}\n\ninput#submit {\n  font-weight: 800;\n  font-size: 100%;\n  border-radius: 15px;\n  color: var(--my-green);\n  background-color: white;\n  width: 100%;\n  margin-top: 10%;\n  padding: 5%;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



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

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


const tBody = document.querySelector('tbody');
const addBtn = document.querySelector('.add-btn');
const sideForm = document.querySelector('.side-form');
const formOverlay = document.querySelector('.form-overlay');

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

const myLibary = []; // creates array of Book objects/values

// puts Book{} data from myLibrary[] into libTable
function displayBook() {
  tBody.innerHTML = ''; // clears current tbody to avoid repeats
  for (let i = 0; i < myLibary.length; i += 1) {
    // loop throu myLibrary[]
    const row = document.createElement('tr'); // create new tr for new Book
    row.className = 'table-row';
    tBody.appendChild(row); // add that tr to tbody in libTable
    const titleCell = document.createElement('td'); //
    const authorCell = document.createElement('td'); //
    const pagesCell = document.createElement('td'); // create new cells for Book data
    const readCell = document.createElement('td'); //
    const deleteCell = document.createElement('td'); //
    pagesCell.className = 'pages-cell'; //
    readCell.className = 'read-cell'; // give class names to table cells
    deleteCell.className = 'delete-cell'; //
    titleCell.textContent = myLibary[i].title; //
    authorCell.textContent = myLibary[i].author; // assign object value to cell content
    pagesCell.textContent = myLibary[i].pages; //
    row.appendChild(titleCell); //
    row.appendChild(authorCell); // add those cells to the new row
    row.appendChild(pagesCell); //

    // Read Checkbox
    const readCheck = document.createElement('input'); // create an input element
    readCheck.setAttribute('type', 'checkbox'); // make it a checkbox
    readCheck.setAttribute('data-id', [i]); // assign data-id that = object's array index
    readCheck.className = 'read-check'; // give it a class name
    if (myLibary[i].read === 'no') {
      // if not read
      readCell.appendChild(readCheck); // add the default unchecked box to the cell
    } else if (myLibary[i].read === 'yes') {
      // if read
      readCheck.checked = 'true'; // make the checkbox checked
      readCell.appendChild(readCheck); // add the checked box to the readCell
    }
    row.appendChild(readCell); // add readCell to row

    // Delete Button
    const deleteBtn = document.createElement('button'); // create a button
    const deleteImg = document.createElement('img'); // create and img element
    deleteBtn.className = 'delete-btn'; // give button a class
    deleteImg.src = 'images/trash-can-outline.png'; // set img source
    deleteImg.className = 'delete-img'; // give img element a class
    deleteImg.setAttribute('data-id', [i]); // assign data-id that = object's array index
    deleteBtn.appendChild(deleteImg); // add image to button
    deleteCell.appendChild(deleteBtn); // add button to cell
    row.appendChild(deleteCell); // add cell to row
  }
}

// clears form and hides it if user clicks outside of form when form is visible
function clickOut() {
  if (formOverlay.style.display === 'flex') {
    // if form is visible
    formOverlay.addEventListener('click', (e) => {
      // click listener on formOverlay
      const clickSpot = e.target; // make clickSpot = the event target
      if (clickSpot.className === 'form-overlay-vis') {
        // if click happened on formOverlay, i.e. outisde of the form
        formOverlay.classList.add('form-overlay'); // add hidden class
        formOverlay.classList.remove('form-overlay-vis'); // remove visible class
        addBtn.style.zIndex = '0'; // bring addBtn to nuetral z plane
      }
    });
  }
}

// creates new {Book}, adds it to myLibrary[], displays updated myLibrary[]
function addBook() {
  const title = document.querySelector('#book-title').value; //
  const author = document.querySelector('#author-name').value; //
  const pages = document.querySelector('#page-count').value; // find value of each form input
  const read = document.querySelector('input[name="have-read"]:checked').value; //
  const newBook = new Book(title, author, pages, read); // creates new Book object with those values
  myLibary.push(newBook); // pushes that new book object into myLib[]
  displayBook();
}

// runs function specific object related to element ID passed in clickRead()
function readBook(readBox, boxId) {
  if (readBox.checked === false) {
    // if unchecked after click
    myLibary[boxId].read = 'no'; // set objects read value to match
  } else if (readBox.checked === true) {
    // if checked acter click
    myLibary[boxId].read = 'yes'; // set objects read value to match
  }
}

// removes {Book} from myLibrary[]
function deleteBook(deleteBoxID) {
  // takes data-id linked to element clicked
  if (myLibary.length >= 1) {
    // if there is t least 1 book
    myLibary.splice(deleteBoxID, 1); // use data-id as [] index to remove object
    displayBook(); // display updated array with {Book} removed
  }
}

// listens to Read? click and passes specific target values to readBook()
function clickRead() {
  document.addEventListener('click', (e) => {
    // listen for click
    const readBox = e.target; // set var to element clicked
    const readBoxId = e.target.dataset.id; // set var to ID associated w/ el clicked
    if (e.target.className === 'read-check') {
      // if that el was the read checkbox
      readBook(readBox, readBoxId); // pass the el and it's ID to readBook()
    }
  });
}

// listens to delet icon click and passes specific target values to delete Book()
function clickDelete() {
  document.addEventListener('click', (e) => {
    // listen for click
    const deleteBoxID = e.target.dataset.id; // set var to ID associated w/ el clicked
    if (e.target.className === 'delete-img') {
      // if that el was the delete img (trash can)
      deleteBook(deleteBoxID); // pass the el and it's ID to deleteBook()
    }
  });
}

clickRead();

clickDelete();

// calls form when +Add Book is clicked
addBtn.addEventListener('click', () => {
  sideForm.reset(); // reset the form
  formOverlay.style.display = 'flex'; // makes form appear
  formOverlay.classList.remove('form-overlay'); // removes hidden class
  formOverlay.classList.add('form-overlay-vis'); // adds visible class
  document.getElementById('book-title').focus(); // puts focus cursor on first input
  addBtn.style.zIndex = '-1'; // set addBtn to background via z index
  clickOut();
});

// passes form data to addBook() and hides form when Submit is clicked
sideForm.addEventListener('submit', (e) => {
  e.preventDefault(); // stops sumbit from sending data to server by default
  addBook(); // sends data to myLib[]
  formOverlay.classList.remove('form-overlay-vis'); // removes visible class
  formOverlay.classList.add('form-overlay'); // adds hidden class
  // makes form dissapear on submit
  addBtn.style.zIndex = '0'; // bring addBtn to nuetral z plane
  sideForm.reset(); // reset the form
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CO0FBQ25CLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLGFBQWEsTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxNQUFNLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLFVBQVUsWUFBWSxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsY0FBYyxhQUFhLGFBQWEsdUJBQXVCLHVCQUF1QixhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZ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QztBQUMzQztBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQixzQ0FBc0M7QUFDdEMsZ0RBQWdEO0FBQ2hELGlEQUFpRDtBQUNqRCxpREFBaUQ7QUFDakQsOEJBQThCO0FBQzlCO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCLGFBQWE7QUFDYixvREFBb0Q7QUFDcEQsNkNBQTZDO0FBQzdDO0FBQ0EsNkJBQTZCO0FBQzdCLG9CQUFvQjtBQUNwQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGlicmFyeS1hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2xpYnJhcnktYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9saWJyYXJ5LWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2xpYnJhcnktYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2xpYnJhcnktYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2xpYnJhcnktYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9saWJyYXJ5LWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9saWJyYXJ5LWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9saWJyYXJ5LWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2xpYnJhcnktYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vbGlicmFyeS1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbGlicmFyeS1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbGlicmFyeS1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2xpYnJhcnktYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbGlicmFyeS1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9saWJyYXJ5LWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vbGlicmFyeS1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgLS1teS1ncmVlbjogIzA0YWE2ZDtcbn1cblxuKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG5cbi5ib3gge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGU6IDFmciA1ZnIgLyAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgXCJoZWFkZXJcIlxuICAgIFwibGlicmFyeVwiO1xufVxuXG4uaGVhZGVyIHtcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uYWRkLWJ0biB7XG4gIHdpZHRoOiBjbGFtcCgxNjBweCwgMTUlLCA1MDBweCk7XG4gIGhlaWdodDogY2xhbXAoNTBweCwgMTUlLCA1MDBweCk7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXktZ3JlZW4pO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTUwJTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgbWFyZ2luOiAxMHB4O1xuICB0cmFuc2l0aW9uOiAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbi5hZGQtYnRuOmhvdmVyIHtcbiAgc2NhbGU6IDEuMTtcbn1cblxuLyogTElCUkFSWSAmIFRBQkxFIFNUWUxFICovXG5cbi5saWJyYXJ5IHtcbiAgZ3JpZC1hcmVhOiBsaWJyYXJ5O1xuICBwYWRkaW5nOiAyMHB4IDE1JSAyMHB4IDE1JTtcbn1cblxuLmxpYi10YWJsZSB7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICB3aWR0aDogMTAwJTtcbmJvcmRlci1zdHlsZTogbm9uZTtcbn1cblxuLmxpYi10YWJsZSB0ZCxcbi5saWItdGFibGUgdGgge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBwYWRkaW5nOiA4cHg7XG59XG5cbi5saWItdGFibGUgdHI6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbn1cblxuLmxpYi10YWJsZSB0cjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG59XG5cbi5saWItdGFibGUgdGgge1xuICBwYWRkaW5nLXRvcDogMTJweDtcbiAgcGFkZGluZy1ib3R0b206IDEycHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW15LWdyZWVuKTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ucGFnZXMtY2VsbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnJlYWQtY2VsbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxudGQuZGVsZXRlLWNlbGwge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5kZWxldGUtaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLmRlbGV0ZS1idG4ge1xuICBtYXgtd2lkdGg6IDMwJTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLyogRk9STSBTVExZRSAqL1xuLyogVGhpcyBmb3JtLW92ZXJsYXkgdHJhbnNpdGlvbiBjb2RlIGRvY3VtZW50ZWQgYmVsb3cgaXQqL1xuLmZvcm0tb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMHZ3O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMyOSk7XG5cbiAvKiBIaWRlIHRoZSBlbGVtZW50IGNvbnRlbnQsIHdoaWxlIGhlaWdodCA9IDAgKi9cbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGhlaWdodDogMHZoOyAvKiBzdGFydCBoaWVnaCBAIDAgKi9cbiAgICBvcGFjaXR5OiAwOyAvKiBzdGFydCBvcGFjaXR5IEAgMCAqL1xuICAgIHRyYW5zaXRpb246IGhlaWdodCAwbXMgNDAwbXMsIG9wYWNpdHkgNDAwbXMgMG1zO1xuICAvKiBoZWlnaHQgZGVsYXlzIHRvIHRoZSB0aW1lIGl0IHRha2VzIG9wYWNpdHkgdG8gZmFkZSAqLyBcbn1cblxuLmZvcm0tb3ZlcmxheS12aXMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDB2dztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zMjkpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgaGVpZ2h0OiAxMDB2aDsgLyogYnJpbmcgaGVpZ2h0IHRvIDEwMHZoICovXG4gICAgb3BhY2l0eTogMTsgLyogc2V0IG9wYWNpdHkgdG8gMCAoZnVsbCkgKi9cbiAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMG1zIDBtcywgb3BhY2l0eSAyNzVtcyAwbXM7IFxuICAvKiBoZWlnaHQgY2hhbmdlcyBpbW1lZGlhdGVseSwgb3BhY2l0eSBmYWRlcyBpbiAqL1xufVxuXG4vKiBcbmh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzMzMzEzNTMvdHJhbnNpdGlvbnMtb24tdGhlLWNzcy1kaXNwbGF5LXByb3BlcnR5XG5Tbywgd2hhdCdzIGdvaW5nIG9uIGhlcmU/XG5cbldoZW4gZm9ybS1vdmVybGF5LXZpcyBjbGFzcyBpcyBhZGRlZCwgYm90aCBoZWlnaHQgYW5kIG9wYWNpdHkgXG5zdGFydCBhbmltYXRpb24gd2l0aG91dCBkZWxheSAoMCBtcyksIHRob3VnaCBoZWlnaHQgXG50YWtlcyAwIG1zIHRvIGNvbXBsZXRlIGFuaW1hdGlvbiBcbihlcXVpdmFsZW50IG9mIGRpc3BsYXk6IGJsb2NrKSBhbmQgb3BhY2l0eSB0YWtlcyA2MDAgbXMuXG5cbldoZW4gZm9ybS1vdmVybGF5LXZpcyBjbGFzcyBpcyByZW1vdmVkLCBvcGFjaXR5IHN0YXJ0cyBcbmFuaW1hdGlvbiAoMCBtcyBkZWxheSwgNDAwIG1zIGR1cmF0aW9uKSwgYW5kIGhlaWdodCB3YWl0cyBcbjQwMCBtcyBhbmQgb25seSB0aGVuIGluc3RhbnRseSAoMCBtcykgcmVzdG9yZXMgaW5pdGlhbCB2YWx1ZSBcbihlcXVpdmFsZW50IG9mIGRpc3BsYXk6IG5vbmUgaW4gdGhlIGFuaW1hdGlvbiBjYWxsYmFjaykuXG4qL1xuXG4uZm9ybS1jYXJkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXI6IDVweCBzb2xpZCAjZmZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXktZ3JlZW4pO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBib3gtc2hhZG93OiAyNXB4IDIwcHggNzBweCAtMzBweCBibGFjaztcbiAgICAgIHRyYW5zaXRpb246IDFzO1xufVxuXG4uc2lkZS1mb3JtIHtcbiAgZ3JpZC1hcmVhOiBzaWRlZm9ybTtcbiAgbWFyZ2luOiAzMHB4O1xuICAgICAgdHJhbnNpdGlvbjogMXM7XG59XG5cbmlucHV0IHtcbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW46IDAgMCAwIDA7XG4gIGJvcmRlcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxubGFiZWwge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTEwJTtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBmb250LXdlaWdodDogYm9sZGVyXG59XG5cbi5yZWFkLW9wdDEgPiBsYWJlbCxcbi5yZWFkLW9wdDIgPiBsYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG59XG5cbi5pbmZpZWxkLXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cblxuLnJlYWQtb3B0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5yZWFkLW9wdDF7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1yaWdodDogMjAlO1xuICBnYXA6IDVweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5yZWFkLW9wdDJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogNXB4O1xufVxuXG4vKiAqIFRISVMgQ09ERSBDT01FUyBGUk9NIGh0dHBzOi8vbW9kZXJuY3NzLmRldi9wdXJlLWNzcy1jdXN0b20tc3R5bGVkLXJhZGlvLWJ1dHRvbnMvICovXG5pbnB1dFt0eXBlPXJhZGlvXSB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIGZvbnQ6IGluaGVyaXQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAxLjE1ZW07XG4gIGhlaWdodDogMS4xNWVtO1xuICBib3JkZXI6IDAuMTVlbSBzb2xpZCBjdXJyZW50Q29sb3I7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xufVxuXG5pbnB1dFt0eXBlPVwicmFkaW9cIl06OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAwLjY1ZW07XG4gIGhlaWdodDogMC42NWVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIHRyYW5zaXRpb246IDEyMG1zIHRyYW5zZm9ybSBlYXNlLWluLW91dDtcbiAgYm94LXNoYWRvdzogaW5zZXQgMWVtIDFlbSB2YXIoLS1teS1ncmVlbik7XG59XG5cbmlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkOjpiZWZvcmUge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuLyoqL1xuXG4uaW5maWVsZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbjogMTBweCAwIDEwcHggMDtcbn1cblxuaW5wdXQjc3VibWl0IHtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZm9udC1zaXplOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBjb2xvcjogdmFyKC0tbXktZ3JlZW4pO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDEwJTtcbiAgcGFkZGluZzogNSU7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsYUFBYTtFQUNiLDRCQUE0QjtFQUM1Qjs7YUFFVztBQUNiOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLCtCQUErQjtFQUMvQixZQUFZO0VBQ1osaUNBQWlDO0VBQ2pDLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBLDBCQUEwQjs7QUFFMUI7RUFDRSxrQkFBa0I7RUFDbEIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UseUNBQXlDO0VBQ3pDLHlCQUF5QjtFQUN6QixXQUFXO0FBQ2Isa0JBQWtCO0FBQ2xCOztBQUVBOztFQUVFLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixpQ0FBaUM7RUFDakMsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGVBQWU7RUFDZixlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWix1QkFBdUI7QUFDekI7O0FBRUEsZUFBZTtBQUNmLHlEQUF5RDtBQUN6RDtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixzQ0FBc0M7O0NBRXZDLCtDQUErQztJQUM1QyxnQkFBZ0I7SUFDaEIsV0FBVyxFQUFFLG9CQUFvQjtJQUNqQyxVQUFVLEVBQUUsc0JBQXNCO0lBQ2xDLCtDQUErQztFQUNqRCx1REFBdUQ7QUFDekQ7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsc0NBQXNDO0VBQ3RDLGdCQUFnQjs7SUFFZCxhQUFhLEVBQUUsMEJBQTBCO0lBQ3pDLFVBQVUsRUFBRSw0QkFBNEI7SUFDeEMsNkNBQTZDO0VBQy9DLGlEQUFpRDtBQUNuRDs7QUFFQTs7Ozs7Ozs7Ozs7OztDQWFDOztBQUVEO0VBQ0Usa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixpQ0FBaUM7RUFDakMsbUJBQW1CO0VBQ25CLHNDQUFzQztNQUNsQyxjQUFjO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7TUFDUixjQUFjO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0I7RUFDbEI7QUFDRjs7QUFFQTs7RUFFRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLFFBQVE7RUFDUix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsUUFBUTtBQUNWOztBQUVBLHVGQUF1RjtBQUN2RjtFQUNFLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLGNBQWM7RUFDZCxpQ0FBaUM7RUFDakMsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHVDQUF1QztFQUN2Qyx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7QUFDQSxHQUFHOztBQUVIO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxlQUFlO0VBQ2YsV0FBVztBQUNiXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC0tbXktZ3JlZW46ICMwNGFhNmQ7XFxufVxcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uYm94IHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogMWZyIDVmciAvIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCJoZWFkZXJcXFwiXFxuICAgIFxcXCJsaWJyYXJ5XFxcIjtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5hZGQtYnRuIHtcXG4gIHdpZHRoOiBjbGFtcCgxNjBweCwgMTUlLCA1MDBweCk7XFxuICBoZWlnaHQ6IGNsYW1wKDUwcHgsIDE1JSwgNTAwcHgpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXktZ3JlZW4pO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAxNTAlO1xcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBtYXJnaW46IDEwcHg7XFxuICB0cmFuc2l0aW9uOiAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5hZGQtYnRuOmhvdmVyIHtcXG4gIHNjYWxlOiAxLjE7XFxufVxcblxcbi8qIExJQlJBUlkgJiBUQUJMRSBTVFlMRSAqL1xcblxcbi5saWJyYXJ5IHtcXG4gIGdyaWQtYXJlYTogbGlicmFyeTtcXG4gIHBhZGRpbmc6IDIwcHggMTUlIDIwcHggMTUlO1xcbn1cXG5cXG4ubGliLXRhYmxlIHtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIHdpZHRoOiAxMDAlO1xcbmJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuXFxuLmxpYi10YWJsZSB0ZCxcXG4ubGliLXRhYmxlIHRoIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XFxuICBwYWRkaW5nOiA4cHg7XFxufVxcblxcbi5saWItdGFibGUgdHI6bnRoLWNoaWxkKGV2ZW4pIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XFxufVxcblxcbi5saWItdGFibGUgdHI6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcXG59XFxuXFxuLmxpYi10YWJsZSB0aCB7XFxuICBwYWRkaW5nLXRvcDogMTJweDtcXG4gIHBhZGRpbmctYm90dG9tOiAxMnB4O1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW15LWdyZWVuKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnBhZ2VzLWNlbGwge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ucmVhZC1jZWxsIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxudGQuZGVsZXRlLWNlbGwge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLmRlbGV0ZS1pbWcge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgbWluLXdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uZGVsZXRlLWJ0biB7XFxuICBtYXgtd2lkdGg6IDMwJTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4vKiBGT1JNIFNUTFlFICovXFxuLyogVGhpcyBmb3JtLW92ZXJsYXkgdHJhbnNpdGlvbiBjb2RlIGRvY3VtZW50ZWQgYmVsb3cgaXQqL1xcbi5mb3JtLW92ZXJsYXkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMyOSk7XFxuXFxuIC8qIEhpZGUgdGhlIGVsZW1lbnQgY29udGVudCwgd2hpbGUgaGVpZ2h0ID0gMCAqL1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBoZWlnaHQ6IDB2aDsgLyogc3RhcnQgaGllZ2ggQCAwICovXFxuICAgIG9wYWNpdHk6IDA7IC8qIHN0YXJ0IG9wYWNpdHkgQCAwICovXFxuICAgIHRyYW5zaXRpb246IGhlaWdodCAwbXMgNDAwbXMsIG9wYWNpdHkgNDAwbXMgMG1zO1xcbiAgLyogaGVpZ2h0IGRlbGF5cyB0byB0aGUgdGltZSBpdCB0YWtlcyBvcGFjaXR5IHRvIGZhZGUgKi8gXFxufVxcblxcbi5mb3JtLW92ZXJsYXktdmlzIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zMjkpO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG5cXG4gICAgaGVpZ2h0OiAxMDB2aDsgLyogYnJpbmcgaGVpZ2h0IHRvIDEwMHZoICovXFxuICAgIG9wYWNpdHk6IDE7IC8qIHNldCBvcGFjaXR5IHRvIDAgKGZ1bGwpICovXFxuICAgIHRyYW5zaXRpb246IGhlaWdodCAwbXMgMG1zLCBvcGFjaXR5IDI3NW1zIDBtczsgXFxuICAvKiBoZWlnaHQgY2hhbmdlcyBpbW1lZGlhdGVseSwgb3BhY2l0eSBmYWRlcyBpbiAqL1xcbn1cXG5cXG4vKiBcXG5odHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8zMzMxMzUzL3RyYW5zaXRpb25zLW9uLXRoZS1jc3MtZGlzcGxheS1wcm9wZXJ0eVxcblNvLCB3aGF0J3MgZ29pbmcgb24gaGVyZT9cXG5cXG5XaGVuIGZvcm0tb3ZlcmxheS12aXMgY2xhc3MgaXMgYWRkZWQsIGJvdGggaGVpZ2h0IGFuZCBvcGFjaXR5IFxcbnN0YXJ0IGFuaW1hdGlvbiB3aXRob3V0IGRlbGF5ICgwIG1zKSwgdGhvdWdoIGhlaWdodCBcXG50YWtlcyAwIG1zIHRvIGNvbXBsZXRlIGFuaW1hdGlvbiBcXG4oZXF1aXZhbGVudCBvZiBkaXNwbGF5OiBibG9jaykgYW5kIG9wYWNpdHkgdGFrZXMgNjAwIG1zLlxcblxcbldoZW4gZm9ybS1vdmVybGF5LXZpcyBjbGFzcyBpcyByZW1vdmVkLCBvcGFjaXR5IHN0YXJ0cyBcXG5hbmltYXRpb24gKDAgbXMgZGVsYXksIDQwMCBtcyBkdXJhdGlvbiksIGFuZCBoZWlnaHQgd2FpdHMgXFxuNDAwIG1zIGFuZCBvbmx5IHRoZW4gaW5zdGFudGx5ICgwIG1zKSByZXN0b3JlcyBpbml0aWFsIHZhbHVlIFxcbihlcXVpdmFsZW50IG9mIGRpc3BsYXk6IG5vbmUgaW4gdGhlIGFuaW1hdGlvbiBjYWxsYmFjaykuXFxuKi9cXG5cXG4uZm9ybS1jYXJkIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvcmRlcjogNXB4IHNvbGlkICNmZmZmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXktZ3JlZW4pO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIGJveC1zaGFkb3c6IDI1cHggMjBweCA3MHB4IC0zMHB4IGJsYWNrO1xcbiAgICAgIHRyYW5zaXRpb246IDFzO1xcbn1cXG5cXG4uc2lkZS1mb3JtIHtcXG4gIGdyaWQtYXJlYTogc2lkZWZvcm07XFxuICBtYXJnaW46IDMwcHg7XFxuICAgICAgdHJhbnNpdGlvbjogMXM7XFxufVxcblxcbmlucHV0IHtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIG1hcmdpbjogMCAwIDAgMDtcXG4gIGJvcmRlcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbmxhYmVsIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMTEwJTtcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXJcXG59XFxuXFxuLnJlYWQtb3B0MSA+IGxhYmVsLFxcbi5yZWFkLW9wdDIgPiBsYWJlbCB7XFxuICBmb250LXdlaWdodDogMTAwO1xcbn1cXG5cXG4uaW5maWVsZC1yIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5yZWFkLW9wdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5yZWFkLW9wdDF7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luLXJpZ2h0OiAyMCU7XFxuICBnYXA6IDVweDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ucmVhZC1vcHQye1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogNXB4O1xcbn1cXG5cXG4vKiAqIFRISVMgQ09ERSBDT01FUyBGUk9NIGh0dHBzOi8vbW9kZXJuY3NzLmRldi9wdXJlLWNzcy1jdXN0b20tc3R5bGVkLXJhZGlvLWJ1dHRvbnMvICovXFxuaW5wdXRbdHlwZT1yYWRpb10ge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBmb250OiBpbmhlcml0O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICB3aWR0aDogMS4xNWVtO1xcbiAgaGVpZ2h0OiAxLjE1ZW07XFxuICBib3JkZXI6IDAuMTVlbSBzb2xpZCBjdXJyZW50Q29sb3I7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICB3aWR0aDogMC42NWVtO1xcbiAgaGVpZ2h0OiAwLjY1ZW07XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgdHJhbnNpdGlvbjogMTIwbXMgdHJhbnNmb3JtIGVhc2UtaW4tb3V0O1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMWVtIDFlbSB2YXIoLS1teS1ncmVlbik7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl06Y2hlY2tlZDo6YmVmb3JlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxufVxcbi8qKi9cXG5cXG4uaW5maWVsZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1hcmdpbjogMTBweCAwIDEwcHggMDtcXG59XFxuXFxuaW5wdXQjc3VibWl0IHtcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgY29sb3I6IHZhcigtLW15LWdyZWVuKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tdG9wOiAxMCU7XFxuICBwYWRkaW5nOiA1JTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5jb25zdCB0Qm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3Rib2R5Jyk7XG5jb25zdCBhZGRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLWJ0bicpO1xuY29uc3Qgc2lkZUZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZS1mb3JtJyk7XG5jb25zdCBmb3JtT3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLW92ZXJsYXknKTtcblxuZnVuY3Rpb24gQm9vayh0aXRsZSwgYXV0aG9yLCBwYWdlcywgcmVhZCkge1xuICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gIHRoaXMuYXV0aG9yID0gYXV0aG9yO1xuICB0aGlzLnBhZ2VzID0gcGFnZXM7XG4gIHRoaXMucmVhZCA9IHJlYWQ7XG59XG5cbmNvbnN0IG15TGliYXJ5ID0gW107IC8vIGNyZWF0ZXMgYXJyYXkgb2YgQm9vayBvYmplY3RzL3ZhbHVlc1xuXG4vLyBwdXRzIEJvb2t7fSBkYXRhIGZyb20gbXlMaWJyYXJ5W10gaW50byBsaWJUYWJsZVxuZnVuY3Rpb24gZGlzcGxheUJvb2soKSB7XG4gIHRCb2R5LmlubmVySFRNTCA9ICcnOyAvLyBjbGVhcnMgY3VycmVudCB0Ym9keSB0byBhdm9pZCByZXBlYXRzXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbXlMaWJhcnkubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAvLyBsb29wIHRocm91IG15TGlicmFyeVtdXG4gICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTsgLy8gY3JlYXRlIG5ldyB0ciBmb3IgbmV3IEJvb2tcbiAgICByb3cuY2xhc3NOYW1lID0gJ3RhYmxlLXJvdyc7XG4gICAgdEJvZHkuYXBwZW5kQ2hpbGQocm93KTsgLy8gYWRkIHRoYXQgdHIgdG8gdGJvZHkgaW4gbGliVGFibGVcbiAgICBjb25zdCB0aXRsZUNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpOyAvL1xuICAgIGNvbnN0IGF1dGhvckNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpOyAvL1xuICAgIGNvbnN0IHBhZ2VzQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7IC8vIGNyZWF0ZSBuZXcgY2VsbHMgZm9yIEJvb2sgZGF0YVxuICAgIGNvbnN0IHJlYWRDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTsgLy9cbiAgICBjb25zdCBkZWxldGVDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTsgLy9cbiAgICBwYWdlc0NlbGwuY2xhc3NOYW1lID0gJ3BhZ2VzLWNlbGwnOyAvL1xuICAgIHJlYWRDZWxsLmNsYXNzTmFtZSA9ICdyZWFkLWNlbGwnOyAvLyBnaXZlIGNsYXNzIG5hbWVzIHRvIHRhYmxlIGNlbGxzXG4gICAgZGVsZXRlQ2VsbC5jbGFzc05hbWUgPSAnZGVsZXRlLWNlbGwnOyAvL1xuICAgIHRpdGxlQ2VsbC50ZXh0Q29udGVudCA9IG15TGliYXJ5W2ldLnRpdGxlOyAvL1xuICAgIGF1dGhvckNlbGwudGV4dENvbnRlbnQgPSBteUxpYmFyeVtpXS5hdXRob3I7IC8vIGFzc2lnbiBvYmplY3QgdmFsdWUgdG8gY2VsbCBjb250ZW50XG4gICAgcGFnZXNDZWxsLnRleHRDb250ZW50ID0gbXlMaWJhcnlbaV0ucGFnZXM7IC8vXG4gICAgcm93LmFwcGVuZENoaWxkKHRpdGxlQ2VsbCk7IC8vXG4gICAgcm93LmFwcGVuZENoaWxkKGF1dGhvckNlbGwpOyAvLyBhZGQgdGhvc2UgY2VsbHMgdG8gdGhlIG5ldyByb3dcbiAgICByb3cuYXBwZW5kQ2hpbGQocGFnZXNDZWxsKTsgLy9cblxuICAgIC8vIFJlYWQgQ2hlY2tib3hcbiAgICBjb25zdCByZWFkQ2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpOyAvLyBjcmVhdGUgYW4gaW5wdXQgZWxlbWVudFxuICAgIHJlYWRDaGVjay5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTsgLy8gbWFrZSBpdCBhIGNoZWNrYm94XG4gICAgcmVhZENoZWNrLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIFtpXSk7IC8vIGFzc2lnbiBkYXRhLWlkIHRoYXQgPSBvYmplY3QncyBhcnJheSBpbmRleFxuICAgIHJlYWRDaGVjay5jbGFzc05hbWUgPSAncmVhZC1jaGVjayc7IC8vIGdpdmUgaXQgYSBjbGFzcyBuYW1lXG4gICAgaWYgKG15TGliYXJ5W2ldLnJlYWQgPT09ICdubycpIHtcbiAgICAgIC8vIGlmIG5vdCByZWFkXG4gICAgICByZWFkQ2VsbC5hcHBlbmRDaGlsZChyZWFkQ2hlY2spOyAvLyBhZGQgdGhlIGRlZmF1bHQgdW5jaGVja2VkIGJveCB0byB0aGUgY2VsbFxuICAgIH0gZWxzZSBpZiAobXlMaWJhcnlbaV0ucmVhZCA9PT0gJ3llcycpIHtcbiAgICAgIC8vIGlmIHJlYWRcbiAgICAgIHJlYWRDaGVjay5jaGVja2VkID0gJ3RydWUnOyAvLyBtYWtlIHRoZSBjaGVja2JveCBjaGVja2VkXG4gICAgICByZWFkQ2VsbC5hcHBlbmRDaGlsZChyZWFkQ2hlY2spOyAvLyBhZGQgdGhlIGNoZWNrZWQgYm94IHRvIHRoZSByZWFkQ2VsbFxuICAgIH1cbiAgICByb3cuYXBwZW5kQ2hpbGQocmVhZENlbGwpOyAvLyBhZGQgcmVhZENlbGwgdG8gcm93XG5cbiAgICAvLyBEZWxldGUgQnV0dG9uXG4gICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7IC8vIGNyZWF0ZSBhIGJ1dHRvblxuICAgIGNvbnN0IGRlbGV0ZUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpOyAvLyBjcmVhdGUgYW5kIGltZyBlbGVtZW50XG4gICAgZGVsZXRlQnRuLmNsYXNzTmFtZSA9ICdkZWxldGUtYnRuJzsgLy8gZ2l2ZSBidXR0b24gYSBjbGFzc1xuICAgIGRlbGV0ZUltZy5zcmMgPSAnaW1hZ2VzL3RyYXNoLWNhbi1vdXRsaW5lLnBuZyc7IC8vIHNldCBpbWcgc291cmNlXG4gICAgZGVsZXRlSW1nLmNsYXNzTmFtZSA9ICdkZWxldGUtaW1nJzsgLy8gZ2l2ZSBpbWcgZWxlbWVudCBhIGNsYXNzXG4gICAgZGVsZXRlSW1nLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIFtpXSk7IC8vIGFzc2lnbiBkYXRhLWlkIHRoYXQgPSBvYmplY3QncyBhcnJheSBpbmRleFxuICAgIGRlbGV0ZUJ0bi5hcHBlbmRDaGlsZChkZWxldGVJbWcpOyAvLyBhZGQgaW1hZ2UgdG8gYnV0dG9uXG4gICAgZGVsZXRlQ2VsbC5hcHBlbmRDaGlsZChkZWxldGVCdG4pOyAvLyBhZGQgYnV0dG9uIHRvIGNlbGxcbiAgICByb3cuYXBwZW5kQ2hpbGQoZGVsZXRlQ2VsbCk7IC8vIGFkZCBjZWxsIHRvIHJvd1xuICB9XG59XG5cbi8vIGNsZWFycyBmb3JtIGFuZCBoaWRlcyBpdCBpZiB1c2VyIGNsaWNrcyBvdXRzaWRlIG9mIGZvcm0gd2hlbiBmb3JtIGlzIHZpc2libGVcbmZ1bmN0aW9uIGNsaWNrT3V0KCkge1xuICBpZiAoZm9ybU92ZXJsYXkuc3R5bGUuZGlzcGxheSA9PT0gJ2ZsZXgnKSB7XG4gICAgLy8gaWYgZm9ybSBpcyB2aXNpYmxlXG4gICAgZm9ybU92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgLy8gY2xpY2sgbGlzdGVuZXIgb24gZm9ybU92ZXJsYXlcbiAgICAgIGNvbnN0IGNsaWNrU3BvdCA9IGUudGFyZ2V0OyAvLyBtYWtlIGNsaWNrU3BvdCA9IHRoZSBldmVudCB0YXJnZXRcbiAgICAgIGlmIChjbGlja1Nwb3QuY2xhc3NOYW1lID09PSAnZm9ybS1vdmVybGF5LXZpcycpIHtcbiAgICAgICAgLy8gaWYgY2xpY2sgaGFwcGVuZWQgb24gZm9ybU92ZXJsYXksIGkuZS4gb3V0aXNkZSBvZiB0aGUgZm9ybVxuICAgICAgICBmb3JtT3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdmb3JtLW92ZXJsYXknKTsgLy8gYWRkIGhpZGRlbiBjbGFzc1xuICAgICAgICBmb3JtT3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdmb3JtLW92ZXJsYXktdmlzJyk7IC8vIHJlbW92ZSB2aXNpYmxlIGNsYXNzXG4gICAgICAgIGFkZEJ0bi5zdHlsZS56SW5kZXggPSAnMCc7IC8vIGJyaW5nIGFkZEJ0biB0byBudWV0cmFsIHogcGxhbmVcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG4vLyBjcmVhdGVzIG5ldyB7Qm9va30sIGFkZHMgaXQgdG8gbXlMaWJyYXJ5W10sIGRpc3BsYXlzIHVwZGF0ZWQgbXlMaWJyYXJ5W11cbmZ1bmN0aW9uIGFkZEJvb2soKSB7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Jvb2stdGl0bGUnKS52YWx1ZTsgLy9cbiAgY29uc3QgYXV0aG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2F1dGhvci1uYW1lJykudmFsdWU7IC8vXG4gIGNvbnN0IHBhZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BhZ2UtY291bnQnKS52YWx1ZTsgLy8gZmluZCB2YWx1ZSBvZiBlYWNoIGZvcm0gaW5wdXRcbiAgY29uc3QgcmVhZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJoYXZlLXJlYWRcIl06Y2hlY2tlZCcpLnZhbHVlOyAvL1xuICBjb25zdCBuZXdCb29rID0gbmV3IEJvb2sodGl0bGUsIGF1dGhvciwgcGFnZXMsIHJlYWQpOyAvLyBjcmVhdGVzIG5ldyBCb29rIG9iamVjdCB3aXRoIHRob3NlIHZhbHVlc1xuICBteUxpYmFyeS5wdXNoKG5ld0Jvb2spOyAvLyBwdXNoZXMgdGhhdCBuZXcgYm9vayBvYmplY3QgaW50byBteUxpYltdXG4gIGRpc3BsYXlCb29rKCk7XG59XG5cbi8vIHJ1bnMgZnVuY3Rpb24gc3BlY2lmaWMgb2JqZWN0IHJlbGF0ZWQgdG8gZWxlbWVudCBJRCBwYXNzZWQgaW4gY2xpY2tSZWFkKClcbmZ1bmN0aW9uIHJlYWRCb29rKHJlYWRCb3gsIGJveElkKSB7XG4gIGlmIChyZWFkQm94LmNoZWNrZWQgPT09IGZhbHNlKSB7XG4gICAgLy8gaWYgdW5jaGVja2VkIGFmdGVyIGNsaWNrXG4gICAgbXlMaWJhcnlbYm94SWRdLnJlYWQgPSAnbm8nOyAvLyBzZXQgb2JqZWN0cyByZWFkIHZhbHVlIHRvIG1hdGNoXG4gIH0gZWxzZSBpZiAocmVhZEJveC5jaGVja2VkID09PSB0cnVlKSB7XG4gICAgLy8gaWYgY2hlY2tlZCBhY3RlciBjbGlja1xuICAgIG15TGliYXJ5W2JveElkXS5yZWFkID0gJ3llcyc7IC8vIHNldCBvYmplY3RzIHJlYWQgdmFsdWUgdG8gbWF0Y2hcbiAgfVxufVxuXG4vLyByZW1vdmVzIHtCb29rfSBmcm9tIG15TGlicmFyeVtdXG5mdW5jdGlvbiBkZWxldGVCb29rKGRlbGV0ZUJveElEKSB7XG4gIC8vIHRha2VzIGRhdGEtaWQgbGlua2VkIHRvIGVsZW1lbnQgY2xpY2tlZFxuICBpZiAobXlMaWJhcnkubGVuZ3RoID49IDEpIHtcbiAgICAvLyBpZiB0aGVyZSBpcyB0IGxlYXN0IDEgYm9va1xuICAgIG15TGliYXJ5LnNwbGljZShkZWxldGVCb3hJRCwgMSk7IC8vIHVzZSBkYXRhLWlkIGFzIFtdIGluZGV4IHRvIHJlbW92ZSBvYmplY3RcbiAgICBkaXNwbGF5Qm9vaygpOyAvLyBkaXNwbGF5IHVwZGF0ZWQgYXJyYXkgd2l0aCB7Qm9va30gcmVtb3ZlZFxuICB9XG59XG5cbi8vIGxpc3RlbnMgdG8gUmVhZD8gY2xpY2sgYW5kIHBhc3NlcyBzcGVjaWZpYyB0YXJnZXQgdmFsdWVzIHRvIHJlYWRCb29rKClcbmZ1bmN0aW9uIGNsaWNrUmVhZCgpIHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIC8vIGxpc3RlbiBmb3IgY2xpY2tcbiAgICBjb25zdCByZWFkQm94ID0gZS50YXJnZXQ7IC8vIHNldCB2YXIgdG8gZWxlbWVudCBjbGlja2VkXG4gICAgY29uc3QgcmVhZEJveElkID0gZS50YXJnZXQuZGF0YXNldC5pZDsgLy8gc2V0IHZhciB0byBJRCBhc3NvY2lhdGVkIHcvIGVsIGNsaWNrZWRcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSAncmVhZC1jaGVjaycpIHtcbiAgICAgIC8vIGlmIHRoYXQgZWwgd2FzIHRoZSByZWFkIGNoZWNrYm94XG4gICAgICByZWFkQm9vayhyZWFkQm94LCByZWFkQm94SWQpOyAvLyBwYXNzIHRoZSBlbCBhbmQgaXQncyBJRCB0byByZWFkQm9vaygpXG4gICAgfVxuICB9KTtcbn1cblxuLy8gbGlzdGVucyB0byBkZWxldCBpY29uIGNsaWNrIGFuZCBwYXNzZXMgc3BlY2lmaWMgdGFyZ2V0IHZhbHVlcyB0byBkZWxldGUgQm9vaygpXG5mdW5jdGlvbiBjbGlja0RlbGV0ZSgpIHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIC8vIGxpc3RlbiBmb3IgY2xpY2tcbiAgICBjb25zdCBkZWxldGVCb3hJRCA9IGUudGFyZ2V0LmRhdGFzZXQuaWQ7IC8vIHNldCB2YXIgdG8gSUQgYXNzb2NpYXRlZCB3LyBlbCBjbGlja2VkXG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2RlbGV0ZS1pbWcnKSB7XG4gICAgICAvLyBpZiB0aGF0IGVsIHdhcyB0aGUgZGVsZXRlIGltZyAodHJhc2ggY2FuKVxuICAgICAgZGVsZXRlQm9vayhkZWxldGVCb3hJRCk7IC8vIHBhc3MgdGhlIGVsIGFuZCBpdCdzIElEIHRvIGRlbGV0ZUJvb2soKVxuICAgIH1cbiAgfSk7XG59XG5cbmNsaWNrUmVhZCgpO1xuXG5jbGlja0RlbGV0ZSgpO1xuXG4vLyBjYWxscyBmb3JtIHdoZW4gK0FkZCBCb29rIGlzIGNsaWNrZWRcbmFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgc2lkZUZvcm0ucmVzZXQoKTsgLy8gcmVzZXQgdGhlIGZvcm1cbiAgZm9ybU92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdmbGV4JzsgLy8gbWFrZXMgZm9ybSBhcHBlYXJcbiAgZm9ybU92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnZm9ybS1vdmVybGF5Jyk7IC8vIHJlbW92ZXMgaGlkZGVuIGNsYXNzXG4gIGZvcm1PdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tb3ZlcmxheS12aXMnKTsgLy8gYWRkcyB2aXNpYmxlIGNsYXNzXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib29rLXRpdGxlJykuZm9jdXMoKTsgLy8gcHV0cyBmb2N1cyBjdXJzb3Igb24gZmlyc3QgaW5wdXRcbiAgYWRkQnRuLnN0eWxlLnpJbmRleCA9ICctMSc7IC8vIHNldCBhZGRCdG4gdG8gYmFja2dyb3VuZCB2aWEgeiBpbmRleFxuICBjbGlja091dCgpO1xufSk7XG5cbi8vIHBhc3NlcyBmb3JtIGRhdGEgdG8gYWRkQm9vaygpIGFuZCBoaWRlcyBmb3JtIHdoZW4gU3VibWl0IGlzIGNsaWNrZWRcbnNpZGVGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTsgLy8gc3RvcHMgc3VtYml0IGZyb20gc2VuZGluZyBkYXRhIHRvIHNlcnZlciBieSBkZWZhdWx0XG4gIGFkZEJvb2soKTsgLy8gc2VuZHMgZGF0YSB0byBteUxpYltdXG4gIGZvcm1PdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2Zvcm0tb3ZlcmxheS12aXMnKTsgLy8gcmVtb3ZlcyB2aXNpYmxlIGNsYXNzXG4gIGZvcm1PdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tb3ZlcmxheScpOyAvLyBhZGRzIGhpZGRlbiBjbGFzc1xuICAvLyBtYWtlcyBmb3JtIGRpc3NhcGVhciBvbiBzdWJtaXRcbiAgYWRkQnRuLnN0eWxlLnpJbmRleCA9ICcwJzsgLy8gYnJpbmcgYWRkQnRuIHRvIG51ZXRyYWwgeiBwbGFuZVxuICBzaWRlRm9ybS5yZXNldCgpOyAvLyByZXNldCB0aGUgZm9ybVxufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=