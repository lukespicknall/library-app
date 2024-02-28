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

/***/ }),

/***/ "./src/images/trash-can-outline.png":
/*!******************************************!*\
  !*** ./src/images/trash-can-outline.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9d85791232c5153a4295.png";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/* harmony import */ var _images_trash_can_outline_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/trash-can-outline.png */ "./src/images/trash-can-outline.png");



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
    deleteImg.src = _images_trash_can_outline_png__WEBPACK_IMPORTED_MODULE_1__; // set img source
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CO0FBQ25CLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLGFBQWEsTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxNQUFNLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLFVBQVUsWUFBWSxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsY0FBYyxhQUFhLGFBQWEsdUJBQXVCLHVCQUF1QixhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxjQUFjLHNCQUFzQix1QkFBdUIsYUFBYSxhQUFhLE9BQU8saUJBQWlCLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sTUFBTSxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLFlBQVksTUFBTSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksTUFBTSxXQUFXLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxnQ0FBZ0Msd0JBQXdCLEdBQUcsT0FBTyxjQUFjLGVBQWUsOENBQThDLEdBQUcsVUFBVSxpQkFBaUIsa0JBQWtCLGtCQUFrQixpQ0FBaUMsMERBQTBELEdBQUcsYUFBYSxzQkFBc0Isa0JBQWtCLHdCQUF3Qiw0QkFBNEIsR0FBRyxjQUFjLG9DQUFvQyxvQ0FBb0MsaUJBQWlCLHNDQUFzQyxpQkFBaUIsb0JBQW9CLHFCQUFxQix3QkFBd0IsaUJBQWlCLGdDQUFnQyxHQUFHLG9CQUFvQixlQUFlLEdBQUcsNkNBQTZDLHVCQUF1QiwrQkFBK0IsR0FBRyxnQkFBZ0IsOENBQThDLDhCQUE4QixnQkFBZ0IscUJBQXFCLEdBQUcsbUNBQW1DLDJCQUEyQixpQkFBaUIsR0FBRyxtQ0FBbUMsOEJBQThCLEdBQUcseUJBQXlCLDJCQUEyQixHQUFHLG1CQUFtQixzQkFBc0IseUJBQXlCLHFCQUFxQixzQ0FBc0MsaUJBQWlCLEdBQUcsaUJBQWlCLHVCQUF1QixHQUFHLGdCQUFnQix1QkFBdUIsR0FBRyxvQkFBb0IsdUJBQXVCLGVBQWUsR0FBRyxpQkFBaUIsb0JBQW9CLG9CQUFvQixpQkFBaUIsR0FBRyxpQkFBaUIsbUJBQW1CLGlCQUFpQiw0QkFBNEIsR0FBRyxpR0FBaUcsdUJBQXVCLGlCQUFpQiw0QkFBNEIsd0JBQXdCLDJDQUEyQyw0RUFBNEUsbUJBQW1CLHVDQUF1Qyw2RUFBNkUsZ0VBQWdFLHVCQUF1Qix1QkFBdUIsaUJBQWlCLDRCQUE0Qix3QkFBd0IsMkNBQTJDLHFCQUFxQix1QkFBdUIsNkNBQTZDLGtGQUFrRix5REFBeUQsZ2xCQUFnbEIsdUJBQXVCLDRCQUE0QixzQ0FBc0Msd0JBQXdCLDJDQUEyQyx1QkFBdUIsR0FBRyxnQkFBZ0Isd0JBQXdCLGlCQUFpQix1QkFBdUIsR0FBRyxXQUFXLGlCQUFpQixvQkFBb0Isa0JBQWtCLHVCQUF1QixHQUFHLFdBQVcsaUJBQWlCLG9CQUFvQix1QkFBdUIsMEJBQTBCLDZDQUE2QyxxQkFBcUIsR0FBRyxnQkFBZ0Isa0JBQWtCLDJCQUEyQiw0QkFBNEIsR0FBRyxlQUFlLGtCQUFrQixnQkFBZ0IsR0FBRyxlQUFlLGtCQUFrQixzQkFBc0IsYUFBYSw0QkFBNEIsR0FBRyxlQUFlLGtCQUFrQixhQUFhLEdBQUcsaUhBQWlILDJCQUEyQixxQkFBcUIsa0JBQWtCLGlCQUFpQiw0QkFBNEIsa0JBQWtCLG1CQUFtQixzQ0FBc0MsdUJBQXVCLGtCQUFrQiwwQkFBMEIsR0FBRyxtQ0FBbUMsa0JBQWtCLGtCQUFrQixtQkFBbUIsdUJBQXVCLHdCQUF3Qiw0Q0FBNEMsOENBQThDLEdBQUcsMkNBQTJDLHdCQUF3QixHQUFHLG9CQUFvQixrQkFBa0IsMkJBQTJCLDBCQUEwQixHQUFHLGtCQUFrQixxQkFBcUIsb0JBQW9CLHdCQUF3QiwyQkFBMkIsNEJBQTRCLGdCQUFnQixvQkFBb0IsZ0JBQWdCLEdBQUcscUJBQXFCO0FBQzl6TjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ3JRMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLHNGQUFPLFVBQVUsc0ZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7VUNiQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDOEI7O0FBRW5EO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUI7O0FBRXJCLGVBQWU7QUFDZjtBQUNBLHdCQUF3QjtBQUN4QixrQkFBa0IscUJBQXFCO0FBQ3ZDO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0EsNEJBQTRCO0FBQzVCLG9EQUFvRDtBQUNwRCxxREFBcUQ7QUFDckQsb0RBQW9EO0FBQ3BELG1EQUFtRDtBQUNuRCxxREFBcUQ7QUFDckQsd0NBQXdDO0FBQ3hDLHNDQUFzQztBQUN0QywwQ0FBMEM7QUFDMUMsK0NBQStDO0FBQy9DLGlEQUFpRDtBQUNqRCwrQ0FBK0M7QUFDL0MsZ0NBQWdDO0FBQ2hDLGlDQUFpQztBQUNqQyxnQ0FBZ0M7O0FBRWhDO0FBQ0EsdURBQXVEO0FBQ3ZELGdEQUFnRDtBQUNoRCw0Q0FBNEM7QUFDNUMsd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkMsTUFBTTtBQUNOO0FBQ0Esa0NBQWtDO0FBQ2xDLHVDQUF1QztBQUN2QztBQUNBLCtCQUErQjs7QUFFL0I7QUFDQSx3REFBd0Q7QUFDeEQscURBQXFEO0FBQ3JELHdDQUF3QztBQUN4QyxvQkFBb0IsMERBQUssRUFBRTtBQUMzQix3Q0FBd0M7QUFDeEMsNENBQTRDO0FBQzVDLHNDQUFzQztBQUN0Qyx1Q0FBdUM7QUFDdkMsaUNBQWlDO0FBQ2pDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQSxtREFBbUQ7QUFDbkQsMERBQTBEO0FBQzFELG1DQUFtQztBQUNuQztBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBLGdCQUFnQixLQUFLO0FBQ3JCO0FBQ0EsNkRBQTZEO0FBQzdELCtEQUErRDtBQUMvRCw2REFBNkQ7QUFDN0QsZ0ZBQWdGO0FBQ2hGLHdEQUF3RDtBQUN4RCwwQkFBMEI7QUFDMUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQyxJQUFJO0FBQ0o7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTs7QUFFQSxZQUFZLE1BQU07QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckMsbUJBQW1CLCtCQUErQixNQUFNO0FBQ3hEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUIsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBLEdBQUc7QUFDSDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCLHNDQUFzQztBQUN0QyxnREFBZ0Q7QUFDaEQsaURBQWlEO0FBQ2pELGlEQUFpRDtBQUNqRCw4QkFBOEI7QUFDOUI7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEIsYUFBYTtBQUNiLG9EQUFvRDtBQUNwRCw2Q0FBNkM7QUFDN0M7QUFDQSw2QkFBNkI7QUFDN0Isb0JBQW9CO0FBQ3BCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9saWJyYXJ5LWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vbGlicmFyeS1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2xpYnJhcnktYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vbGlicmFyeS1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vbGlicmFyeS1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbGlicmFyeS1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2xpYnJhcnktYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2xpYnJhcnktYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2xpYnJhcnktYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vbGlicmFyeS1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9saWJyYXJ5LWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9saWJyYXJ5LWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9saWJyYXJ5LWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbGlicmFyeS1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9saWJyYXJ5LWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2xpYnJhcnktYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbGlicmFyeS1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vbGlicmFyeS1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2xpYnJhcnktYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gIC0tbXktZ3JlZW46ICMwNGFhNmQ7XG59XG5cbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuXG4uYm94IHtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlOiAxZnIgNWZyIC8gMWZyO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgIFwiaGVhZGVyXCJcbiAgICBcImxpYnJhcnlcIjtcbn1cblxuLmhlYWRlciB7XG4gIGdyaWQtYXJlYTogaGVhZGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmFkZC1idG4ge1xuICB3aWR0aDogY2xhbXAoMTYwcHgsIDE1JSwgNTAwcHgpO1xuICBoZWlnaHQ6IGNsYW1wKDUwcHgsIDE1JSwgNTAwcHgpO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW15LWdyZWVuKTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE1MCU7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIG1hcmdpbjogMTBweDtcbiAgdHJhbnNpdGlvbjogLjJzIGVhc2UtaW4tb3V0O1xufVxuXG4uYWRkLWJ0bjpob3ZlciB7XG4gIHNjYWxlOiAxLjE7XG59XG5cbi8qIExJQlJBUlkgJiBUQUJMRSBTVFlMRSAqL1xuXG4ubGlicmFyeSB7XG4gIGdyaWQtYXJlYTogbGlicmFyeTtcbiAgcGFkZGluZzogMjBweCAxNSUgMjBweCAxNSU7XG59XG5cbi5saWItdGFibGUge1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgd2lkdGg6IDEwMCU7XG5ib3JkZXItc3R5bGU6IG5vbmU7XG59XG5cbi5saWItdGFibGUgdGQsXG4ubGliLXRhYmxlIHRoIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgcGFkZGluZzogOHB4O1xufVxuXG4ubGliLXRhYmxlIHRyOm50aC1jaGlsZChldmVuKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG59XG5cbi5saWItdGFibGUgdHI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xufVxuXG4ubGliLXRhYmxlIHRoIHtcbiAgcGFkZGluZy10b3A6IDEycHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMnB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1teS1ncmVlbik7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnBhZ2VzLWNlbGwge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5yZWFkLWNlbGwge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbnRkLmRlbGV0ZS1jZWxsIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uZGVsZXRlLWltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5kZWxldGUtYnRuIHtcbiAgbWF4LXdpZHRoOiAzMCU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi8qIEZPUk0gU1RMWUUgKi9cbi8qIFRoaXMgZm9ybS1vdmVybGF5IHRyYW5zaXRpb24gY29kZSBkb2N1bWVudGVkIGJlbG93IGl0Ki9cbi5mb3JtLW92ZXJsYXkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDB2dztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zMjkpO1xuXG4gLyogSGlkZSB0aGUgZWxlbWVudCBjb250ZW50LCB3aGlsZSBoZWlnaHQgPSAwICovXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBoZWlnaHQ6IDB2aDsgLyogc3RhcnQgaGllZ2ggQCAwICovXG4gICAgb3BhY2l0eTogMDsgLyogc3RhcnQgb3BhY2l0eSBAIDAgKi9cbiAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMG1zIDQwMG1zLCBvcGFjaXR5IDQwMG1zIDBtcztcbiAgLyogaGVpZ2h0IGRlbGF5cyB0byB0aGUgdGltZSBpdCB0YWtlcyBvcGFjaXR5IHRvIGZhZGUgKi8gXG59XG5cbi5mb3JtLW92ZXJsYXktdmlzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwdnc7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzI5KTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgIGhlaWdodDogMTAwdmg7IC8qIGJyaW5nIGhlaWdodCB0byAxMDB2aCAqL1xuICAgIG9wYWNpdHk6IDE7IC8qIHNldCBvcGFjaXR5IHRvIDAgKGZ1bGwpICovXG4gICAgdHJhbnNpdGlvbjogaGVpZ2h0IDBtcyAwbXMsIG9wYWNpdHkgMjc1bXMgMG1zOyBcbiAgLyogaGVpZ2h0IGNoYW5nZXMgaW1tZWRpYXRlbHksIG9wYWNpdHkgZmFkZXMgaW4gKi9cbn1cblxuLyogXG5odHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8zMzMxMzUzL3RyYW5zaXRpb25zLW9uLXRoZS1jc3MtZGlzcGxheS1wcm9wZXJ0eVxuU28sIHdoYXQncyBnb2luZyBvbiBoZXJlP1xuXG5XaGVuIGZvcm0tb3ZlcmxheS12aXMgY2xhc3MgaXMgYWRkZWQsIGJvdGggaGVpZ2h0IGFuZCBvcGFjaXR5IFxuc3RhcnQgYW5pbWF0aW9uIHdpdGhvdXQgZGVsYXkgKDAgbXMpLCB0aG91Z2ggaGVpZ2h0IFxudGFrZXMgMCBtcyB0byBjb21wbGV0ZSBhbmltYXRpb24gXG4oZXF1aXZhbGVudCBvZiBkaXNwbGF5OiBibG9jaykgYW5kIG9wYWNpdHkgdGFrZXMgNjAwIG1zLlxuXG5XaGVuIGZvcm0tb3ZlcmxheS12aXMgY2xhc3MgaXMgcmVtb3ZlZCwgb3BhY2l0eSBzdGFydHMgXG5hbmltYXRpb24gKDAgbXMgZGVsYXksIDQwMCBtcyBkdXJhdGlvbiksIGFuZCBoZWlnaHQgd2FpdHMgXG40MDAgbXMgYW5kIG9ubHkgdGhlbiBpbnN0YW50bHkgKDAgbXMpIHJlc3RvcmVzIGluaXRpYWwgdmFsdWUgXG4oZXF1aXZhbGVudCBvZiBkaXNwbGF5OiBub25lIGluIHRoZSBhbmltYXRpb24gY2FsbGJhY2spLlxuKi9cblxuLmZvcm0tY2FyZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyOiA1cHggc29saWQgI2ZmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW15LWdyZWVuKTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYm94LXNoYWRvdzogMjVweCAyMHB4IDcwcHggLTMwcHggYmxhY2s7XG4gICAgICB0cmFuc2l0aW9uOiAxcztcbn1cblxuLnNpZGUtZm9ybSB7XG4gIGdyaWQtYXJlYTogc2lkZWZvcm07XG4gIG1hcmdpbjogMzBweDtcbiAgICAgIHRyYW5zaXRpb246IDFzO1xufVxuXG5pbnB1dCB7XG4gIHBhZGRpbmc6IDVweDtcbiAgbWFyZ2luOiAwIDAgMCAwO1xuICBib3JkZXI6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbmxhYmVsIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDExMCU7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlclxufVxuXG4ucmVhZC1vcHQxID4gbGFiZWwsXG4ucmVhZC1vcHQyID4gbGFiZWwge1xuICBmb250LXdlaWdodDogMTAwO1xufVxuXG4uaW5maWVsZC1yIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5cbi5yZWFkLW9wdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucmVhZC1vcHQxe1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tcmlnaHQ6IDIwJTtcbiAgZ2FwOiA1cHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ucmVhZC1vcHQye1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDVweDtcbn1cblxuLyogKiBUSElTIENPREUgQ09NRVMgRlJPTSBodHRwczovL21vZGVybmNzcy5kZXYvcHVyZS1jc3MtY3VzdG9tLXN0eWxlZC1yYWRpby1idXR0b25zLyAqL1xuaW5wdXRbdHlwZT1yYWRpb10ge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBhcHBlYXJhbmNlOiBub25lO1xuICBmb250OiBpbmhlcml0O1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMS4xNWVtO1xuICBoZWlnaHQ6IDEuMTVlbTtcbiAgYm9yZGVyOiAwLjE1ZW0gc29saWQgY3VycmVudENvbG9yO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuaW5wdXRbdHlwZT1cInJhZGlvXCJdOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMC42NWVtO1xuICBoZWlnaHQ6IDAuNjVlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICB0cmFuc2l0aW9uOiAxMjBtcyB0cmFuc2Zvcm0gZWFzZS1pbi1vdXQ7XG4gIGJveC1zaGFkb3c6IGluc2V0IDFlbSAxZW0gdmFyKC0tbXktZ3JlZW4pO1xufVxuXG5pbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZDo6YmVmb3JlIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cbi8qKi9cblxuLmluZmllbGQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW46IDEwcHggMCAxMHB4IDA7XG59XG5cbmlucHV0I3N1Ym1pdCB7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgY29sb3I6IHZhcigtLW15LWdyZWVuKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAxMCU7XG4gIHBhZGRpbmc6IDUlO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVix5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7RUFDYiw0QkFBNEI7RUFDNUI7O2FBRVc7QUFDYjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQiwrQkFBK0I7RUFDL0IsWUFBWTtFQUNaLGlDQUFpQztFQUNqQyxZQUFZO0VBQ1osZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQSwwQkFBMEI7O0FBRTFCO0VBQ0Usa0JBQWtCO0VBQ2xCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLHlDQUF5QztFQUN6Qyx5QkFBeUI7RUFDekIsV0FBVztBQUNiLGtCQUFrQjtBQUNsQjs7QUFFQTs7RUFFRSxzQkFBc0I7RUFDdEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsaUNBQWlDO0VBQ2pDLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osdUJBQXVCO0FBQ3pCOztBQUVBLGVBQWU7QUFDZix5REFBeUQ7QUFDekQ7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsc0NBQXNDOztDQUV2QywrQ0FBK0M7SUFDNUMsZ0JBQWdCO0lBQ2hCLFdBQVcsRUFBRSxvQkFBb0I7SUFDakMsVUFBVSxFQUFFLHNCQUFzQjtJQUNsQywrQ0FBK0M7RUFDakQsdURBQXVEO0FBQ3pEOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHNDQUFzQztFQUN0QyxnQkFBZ0I7O0lBRWQsYUFBYSxFQUFFLDBCQUEwQjtJQUN6QyxVQUFVLEVBQUUsNEJBQTRCO0lBQ3hDLDZDQUE2QztFQUMvQyxpREFBaUQ7QUFDbkQ7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Q0FhQzs7QUFFRDtFQUNFLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsaUNBQWlDO0VBQ2pDLG1CQUFtQjtFQUNuQixzQ0FBc0M7TUFDbEMsY0FBYztBQUNwQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO01BQ1IsY0FBYztBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCO0FBQ0Y7O0FBRUE7O0VBRUUsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixRQUFRO0VBQ1IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFFBQVE7QUFDVjs7QUFFQSx1RkFBdUY7QUFDdkY7RUFDRSxzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixjQUFjO0VBQ2QsaUNBQWlDO0VBQ2pDLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQix1Q0FBdUM7RUFDdkMseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0EsR0FBRzs7QUFFSDtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsZUFBZTtFQUNmLFdBQVc7QUFDYlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAtLW15LWdyZWVuOiAjMDRhYTZkO1xcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmJveCB7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IDFmciA1ZnIgLyAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICBcXFwiaGVhZGVyXFxcIlxcbiAgICBcXFwibGlicmFyeVxcXCI7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uYWRkLWJ0biB7XFxuICB3aWR0aDogY2xhbXAoMTYwcHgsIDE1JSwgNTAwcHgpO1xcbiAgaGVpZ2h0OiBjbGFtcCg1MHB4LCAxNSUsIDUwMHB4KTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW15LWdyZWVuKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMTUwJTtcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgdHJhbnNpdGlvbjogLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uYWRkLWJ0bjpob3ZlciB7XFxuICBzY2FsZTogMS4xO1xcbn1cXG5cXG4vKiBMSUJSQVJZICYgVEFCTEUgU1RZTEUgKi9cXG5cXG4ubGlicmFyeSB7XFxuICBncmlkLWFyZWE6IGxpYnJhcnk7XFxuICBwYWRkaW5nOiAyMHB4IDE1JSAyMHB4IDE1JTtcXG59XFxuXFxuLmxpYi10YWJsZSB7XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICB3aWR0aDogMTAwJTtcXG5ib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcblxcbi5saWItdGFibGUgdGQsXFxuLmxpYi10YWJsZSB0aCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xcbiAgcGFkZGluZzogOHB4O1xcbn1cXG5cXG4ubGliLXRhYmxlIHRyOm50aC1jaGlsZChldmVuKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xcbn1cXG5cXG4ubGliLXRhYmxlIHRyOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XFxufVxcblxcbi5saWItdGFibGUgdGgge1xcbiAgcGFkZGluZy10b3A6IDEycHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMTJweDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1teS1ncmVlbik7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5wYWdlcy1jZWxsIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnJlYWQtY2VsbCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbnRkLmRlbGV0ZS1jZWxsIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi5kZWxldGUtaW1nIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIG1pbi13aWR0aDogMTAwJTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLmRlbGV0ZS1idG4ge1xcbiAgbWF4LXdpZHRoOiAzMCU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLyogRk9STSBTVExZRSAqL1xcbi8qIFRoaXMgZm9ybS1vdmVybGF5IHRyYW5zaXRpb24gY29kZSBkb2N1bWVudGVkIGJlbG93IGl0Ki9cXG4uZm9ybS1vdmVybGF5IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zMjkpO1xcblxcbiAvKiBIaWRlIHRoZSBlbGVtZW50IGNvbnRlbnQsIHdoaWxlIGhlaWdodCA9IDAgKi9cXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgaGVpZ2h0OiAwdmg7IC8qIHN0YXJ0IGhpZWdoIEAgMCAqL1xcbiAgICBvcGFjaXR5OiAwOyAvKiBzdGFydCBvcGFjaXR5IEAgMCAqL1xcbiAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMG1zIDQwMG1zLCBvcGFjaXR5IDQwMG1zIDBtcztcXG4gIC8qIGhlaWdodCBkZWxheXMgdG8gdGhlIHRpbWUgaXQgdGFrZXMgb3BhY2l0eSB0byBmYWRlICovIFxcbn1cXG5cXG4uZm9ybS1vdmVybGF5LXZpcyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwdnc7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzI5KTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuXFxuICAgIGhlaWdodDogMTAwdmg7IC8qIGJyaW5nIGhlaWdodCB0byAxMDB2aCAqL1xcbiAgICBvcGFjaXR5OiAxOyAvKiBzZXQgb3BhY2l0eSB0byAwIChmdWxsKSAqL1xcbiAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMG1zIDBtcywgb3BhY2l0eSAyNzVtcyAwbXM7IFxcbiAgLyogaGVpZ2h0IGNoYW5nZXMgaW1tZWRpYXRlbHksIG9wYWNpdHkgZmFkZXMgaW4gKi9cXG59XFxuXFxuLyogXFxuaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMzMzMTM1My90cmFuc2l0aW9ucy1vbi10aGUtY3NzLWRpc3BsYXktcHJvcGVydHlcXG5Tbywgd2hhdCdzIGdvaW5nIG9uIGhlcmU/XFxuXFxuV2hlbiBmb3JtLW92ZXJsYXktdmlzIGNsYXNzIGlzIGFkZGVkLCBib3RoIGhlaWdodCBhbmQgb3BhY2l0eSBcXG5zdGFydCBhbmltYXRpb24gd2l0aG91dCBkZWxheSAoMCBtcyksIHRob3VnaCBoZWlnaHQgXFxudGFrZXMgMCBtcyB0byBjb21wbGV0ZSBhbmltYXRpb24gXFxuKGVxdWl2YWxlbnQgb2YgZGlzcGxheTogYmxvY2spIGFuZCBvcGFjaXR5IHRha2VzIDYwMCBtcy5cXG5cXG5XaGVuIGZvcm0tb3ZlcmxheS12aXMgY2xhc3MgaXMgcmVtb3ZlZCwgb3BhY2l0eSBzdGFydHMgXFxuYW5pbWF0aW9uICgwIG1zIGRlbGF5LCA0MDAgbXMgZHVyYXRpb24pLCBhbmQgaGVpZ2h0IHdhaXRzIFxcbjQwMCBtcyBhbmQgb25seSB0aGVuIGluc3RhbnRseSAoMCBtcykgcmVzdG9yZXMgaW5pdGlhbCB2YWx1ZSBcXG4oZXF1aXZhbGVudCBvZiBkaXNwbGF5OiBub25lIGluIHRoZSBhbmltYXRpb24gY2FsbGJhY2spLlxcbiovXFxuXFxuLmZvcm0tY2FyZCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3JkZXI6IDVweCBzb2xpZCAjZmZmZjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW15LWdyZWVuKTtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBib3gtc2hhZG93OiAyNXB4IDIwcHggNzBweCAtMzBweCBibGFjaztcXG4gICAgICB0cmFuc2l0aW9uOiAxcztcXG59XFxuXFxuLnNpZGUtZm9ybSB7XFxuICBncmlkLWFyZWE6IHNpZGVmb3JtO1xcbiAgbWFyZ2luOiAzMHB4O1xcbiAgICAgIHRyYW5zaXRpb246IDFzO1xcbn1cXG5cXG5pbnB1dCB7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBtYXJnaW46IDAgMCAwIDA7XFxuICBib3JkZXI6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG5sYWJlbCB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDExMCU7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxuICBmb250LXdlaWdodDogYm9sZGVyXFxufVxcblxcbi5yZWFkLW9wdDEgPiBsYWJlbCxcXG4ucmVhZC1vcHQyID4gbGFiZWwge1xcbiAgZm9udC13ZWlnaHQ6IDEwMDtcXG59XFxuXFxuLmluZmllbGQtciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4ucmVhZC1vcHQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ucmVhZC1vcHQxe1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbi1yaWdodDogMjAlO1xcbiAgZ2FwOiA1cHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnJlYWQtb3B0MntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDVweDtcXG59XFxuXFxuLyogKiBUSElTIENPREUgQ09NRVMgRlJPTSBodHRwczovL21vZGVybmNzcy5kZXYvcHVyZS1jc3MtY3VzdG9tLXN0eWxlZC1yYWRpby1idXR0b25zLyAqL1xcbmlucHV0W3R5cGU9cmFkaW9dIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgd2lkdGg6IDEuMTVlbTtcXG4gIGhlaWdodDogMS4xNWVtO1xcbiAgYm9yZGVyOiAwLjE1ZW0gc29saWQgY3VycmVudENvbG9yO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgd2lkdGg6IDAuNjVlbTtcXG4gIGhlaWdodDogMC42NWVtO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gIHRyYW5zaXRpb246IDEyMG1zIHRyYW5zZm9ybSBlYXNlLWluLW91dDtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDFlbSAxZW0gdmFyKC0tbXktZ3JlZW4pO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdOmNoZWNrZWQ6OmJlZm9yZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbn1cXG4vKiovXFxuXFxuLmluZmllbGQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW46IDEwcHggMCAxMHB4IDA7XFxufVxcblxcbmlucHV0I3N1Ym1pdCB7XFxuICBmb250LXdlaWdodDogODAwO1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIGNvbG9yOiB2YXIoLS1teS1ncmVlbik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLXRvcDogMTAlO1xcbiAgcGFkZGluZzogNSU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgVHJhc2ggZnJvbSAnLi9pbWFnZXMvdHJhc2gtY2FuLW91dGxpbmUucG5nJztcblxuY29uc3QgdEJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd0Ym9keScpO1xuY29uc3QgYWRkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1idG4nKTtcbmNvbnN0IHNpZGVGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGUtZm9ybScpO1xuY29uc3QgZm9ybU92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1vdmVybGF5Jyk7XG5cbmZ1bmN0aW9uIEJvb2sodGl0bGUsIGF1dGhvciwgcGFnZXMsIHJlYWQpIHtcbiAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICB0aGlzLmF1dGhvciA9IGF1dGhvcjtcbiAgdGhpcy5wYWdlcyA9IHBhZ2VzO1xuICB0aGlzLnJlYWQgPSByZWFkO1xufVxuXG5jb25zdCBteUxpYmFyeSA9IFtdOyAvLyBjcmVhdGVzIGFycmF5IG9mIEJvb2sgb2JqZWN0cy92YWx1ZXNcblxuLy8gcHV0cyBCb29re30gZGF0YSBmcm9tIG15TGlicmFyeVtdIGludG8gbGliVGFibGVcbmZ1bmN0aW9uIGRpc3BsYXlCb29rKCkge1xuICB0Qm9keS5pbm5lckhUTUwgPSAnJzsgLy8gY2xlYXJzIGN1cnJlbnQgdGJvZHkgdG8gYXZvaWQgcmVwZWF0c1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG15TGliYXJ5Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgLy8gbG9vcCB0aHJvdSBteUxpYnJhcnlbXVxuICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7IC8vIGNyZWF0ZSBuZXcgdHIgZm9yIG5ldyBCb29rXG4gICAgcm93LmNsYXNzTmFtZSA9ICd0YWJsZS1yb3cnO1xuICAgIHRCb2R5LmFwcGVuZENoaWxkKHJvdyk7IC8vIGFkZCB0aGF0IHRyIHRvIHRib2R5IGluIGxpYlRhYmxlXG4gICAgY29uc3QgdGl0bGVDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTsgLy9cbiAgICBjb25zdCBhdXRob3JDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTsgLy9cbiAgICBjb25zdCBwYWdlc0NlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpOyAvLyBjcmVhdGUgbmV3IGNlbGxzIGZvciBCb29rIGRhdGFcbiAgICBjb25zdCByZWFkQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7IC8vXG4gICAgY29uc3QgZGVsZXRlQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7IC8vXG4gICAgcGFnZXNDZWxsLmNsYXNzTmFtZSA9ICdwYWdlcy1jZWxsJzsgLy9cbiAgICByZWFkQ2VsbC5jbGFzc05hbWUgPSAncmVhZC1jZWxsJzsgLy8gZ2l2ZSBjbGFzcyBuYW1lcyB0byB0YWJsZSBjZWxsc1xuICAgIGRlbGV0ZUNlbGwuY2xhc3NOYW1lID0gJ2RlbGV0ZS1jZWxsJzsgLy9cbiAgICB0aXRsZUNlbGwudGV4dENvbnRlbnQgPSBteUxpYmFyeVtpXS50aXRsZTsgLy9cbiAgICBhdXRob3JDZWxsLnRleHRDb250ZW50ID0gbXlMaWJhcnlbaV0uYXV0aG9yOyAvLyBhc3NpZ24gb2JqZWN0IHZhbHVlIHRvIGNlbGwgY29udGVudFxuICAgIHBhZ2VzQ2VsbC50ZXh0Q29udGVudCA9IG15TGliYXJ5W2ldLnBhZ2VzOyAvL1xuICAgIHJvdy5hcHBlbmRDaGlsZCh0aXRsZUNlbGwpOyAvL1xuICAgIHJvdy5hcHBlbmRDaGlsZChhdXRob3JDZWxsKTsgLy8gYWRkIHRob3NlIGNlbGxzIHRvIHRoZSBuZXcgcm93XG4gICAgcm93LmFwcGVuZENoaWxkKHBhZ2VzQ2VsbCk7IC8vXG5cbiAgICAvLyBSZWFkIENoZWNrYm94XG4gICAgY29uc3QgcmVhZENoZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTsgLy8gY3JlYXRlIGFuIGlucHV0IGVsZW1lbnRcbiAgICByZWFkQ2hlY2suc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7IC8vIG1ha2UgaXQgYSBjaGVja2JveFxuICAgIHJlYWRDaGVjay5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBbaV0pOyAvLyBhc3NpZ24gZGF0YS1pZCB0aGF0ID0gb2JqZWN0J3MgYXJyYXkgaW5kZXhcbiAgICByZWFkQ2hlY2suY2xhc3NOYW1lID0gJ3JlYWQtY2hlY2snOyAvLyBnaXZlIGl0IGEgY2xhc3MgbmFtZVxuICAgIGlmIChteUxpYmFyeVtpXS5yZWFkID09PSAnbm8nKSB7XG4gICAgICAvLyBpZiBub3QgcmVhZFxuICAgICAgcmVhZENlbGwuYXBwZW5kQ2hpbGQocmVhZENoZWNrKTsgLy8gYWRkIHRoZSBkZWZhdWx0IHVuY2hlY2tlZCBib3ggdG8gdGhlIGNlbGxcbiAgICB9IGVsc2UgaWYgKG15TGliYXJ5W2ldLnJlYWQgPT09ICd5ZXMnKSB7XG4gICAgICAvLyBpZiByZWFkXG4gICAgICByZWFkQ2hlY2suY2hlY2tlZCA9ICd0cnVlJzsgLy8gbWFrZSB0aGUgY2hlY2tib3ggY2hlY2tlZFxuICAgICAgcmVhZENlbGwuYXBwZW5kQ2hpbGQocmVhZENoZWNrKTsgLy8gYWRkIHRoZSBjaGVja2VkIGJveCB0byB0aGUgcmVhZENlbGxcbiAgICB9XG4gICAgcm93LmFwcGVuZENoaWxkKHJlYWRDZWxsKTsgLy8gYWRkIHJlYWRDZWxsIHRvIHJvd1xuXG4gICAgLy8gRGVsZXRlIEJ1dHRvblxuICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpOyAvLyBjcmVhdGUgYSBidXR0b25cbiAgICBjb25zdCBkZWxldGVJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTsgLy8gY3JlYXRlIGFuZCBpbWcgZWxlbWVudFxuICAgIGRlbGV0ZUJ0bi5jbGFzc05hbWUgPSAnZGVsZXRlLWJ0bic7IC8vIGdpdmUgYnV0dG9uIGEgY2xhc3NcbiAgICBkZWxldGVJbWcuc3JjID0gVHJhc2g7IC8vIHNldCBpbWcgc291cmNlXG4gICAgZGVsZXRlSW1nLmNsYXNzTmFtZSA9ICdkZWxldGUtaW1nJzsgLy8gZ2l2ZSBpbWcgZWxlbWVudCBhIGNsYXNzXG4gICAgZGVsZXRlSW1nLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIFtpXSk7IC8vIGFzc2lnbiBkYXRhLWlkIHRoYXQgPSBvYmplY3QncyBhcnJheSBpbmRleFxuICAgIGRlbGV0ZUJ0bi5hcHBlbmRDaGlsZChkZWxldGVJbWcpOyAvLyBhZGQgaW1hZ2UgdG8gYnV0dG9uXG4gICAgZGVsZXRlQ2VsbC5hcHBlbmRDaGlsZChkZWxldGVCdG4pOyAvLyBhZGQgYnV0dG9uIHRvIGNlbGxcbiAgICByb3cuYXBwZW5kQ2hpbGQoZGVsZXRlQ2VsbCk7IC8vIGFkZCBjZWxsIHRvIHJvd1xuICB9XG59XG5cbi8vIGNsZWFycyBmb3JtIGFuZCBoaWRlcyBpdCBpZiB1c2VyIGNsaWNrcyBvdXRzaWRlIG9mIGZvcm0gd2hlbiBmb3JtIGlzIHZpc2libGVcbmZ1bmN0aW9uIGNsaWNrT3V0KCkge1xuICBpZiAoZm9ybU92ZXJsYXkuc3R5bGUuZGlzcGxheSA9PT0gJ2ZsZXgnKSB7XG4gICAgLy8gaWYgZm9ybSBpcyB2aXNpYmxlXG4gICAgZm9ybU92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgLy8gY2xpY2sgbGlzdGVuZXIgb24gZm9ybU92ZXJsYXlcbiAgICAgIGNvbnN0IGNsaWNrU3BvdCA9IGUudGFyZ2V0OyAvLyBtYWtlIGNsaWNrU3BvdCA9IHRoZSBldmVudCB0YXJnZXRcbiAgICAgIGlmIChjbGlja1Nwb3QuY2xhc3NOYW1lID09PSAnZm9ybS1vdmVybGF5LXZpcycpIHtcbiAgICAgICAgLy8gaWYgY2xpY2sgaGFwcGVuZWQgb24gZm9ybU92ZXJsYXksIGkuZS4gb3V0aXNkZSBvZiB0aGUgZm9ybVxuICAgICAgICBmb3JtT3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdmb3JtLW92ZXJsYXknKTsgLy8gYWRkIGhpZGRlbiBjbGFzc1xuICAgICAgICBmb3JtT3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdmb3JtLW92ZXJsYXktdmlzJyk7IC8vIHJlbW92ZSB2aXNpYmxlIGNsYXNzXG4gICAgICAgIGFkZEJ0bi5zdHlsZS56SW5kZXggPSAnMCc7IC8vIGJyaW5nIGFkZEJ0biB0byBudWV0cmFsIHogcGxhbmVcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG4vLyBjcmVhdGVzIG5ldyB7Qm9va30sIGFkZHMgaXQgdG8gbXlMaWJyYXJ5W10sIGRpc3BsYXlzIHVwZGF0ZWQgbXlMaWJyYXJ5W11cbmZ1bmN0aW9uIGFkZEJvb2soKSB7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Jvb2stdGl0bGUnKS52YWx1ZTsgLy9cbiAgY29uc3QgYXV0aG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2F1dGhvci1uYW1lJykudmFsdWU7IC8vXG4gIGNvbnN0IHBhZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BhZ2UtY291bnQnKS52YWx1ZTsgLy8gZmluZCB2YWx1ZSBvZiBlYWNoIGZvcm0gaW5wdXRcbiAgY29uc3QgcmVhZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJoYXZlLXJlYWRcIl06Y2hlY2tlZCcpLnZhbHVlOyAvL1xuICBjb25zdCBuZXdCb29rID0gbmV3IEJvb2sodGl0bGUsIGF1dGhvciwgcGFnZXMsIHJlYWQpOyAvLyBjcmVhdGVzIG5ldyBCb29rIG9iamVjdCB3aXRoIHRob3NlIHZhbHVlc1xuICBteUxpYmFyeS5wdXNoKG5ld0Jvb2spOyAvLyBwdXNoZXMgdGhhdCBuZXcgYm9vayBvYmplY3QgaW50byBteUxpYltdXG4gIGRpc3BsYXlCb29rKCk7XG59XG5cbi8vIHJ1bnMgZnVuY3Rpb24gc3BlY2lmaWMgb2JqZWN0IHJlbGF0ZWQgdG8gZWxlbWVudCBJRCBwYXNzZWQgaW4gY2xpY2tSZWFkKClcbmZ1bmN0aW9uIHJlYWRCb29rKHJlYWRCb3gsIGJveElkKSB7XG4gIGlmIChyZWFkQm94LmNoZWNrZWQgPT09IGZhbHNlKSB7XG4gICAgLy8gaWYgdW5jaGVja2VkIGFmdGVyIGNsaWNrXG4gICAgbXlMaWJhcnlbYm94SWRdLnJlYWQgPSAnbm8nOyAvLyBzZXQgb2JqZWN0cyByZWFkIHZhbHVlIHRvIG1hdGNoXG4gIH0gZWxzZSBpZiAocmVhZEJveC5jaGVja2VkID09PSB0cnVlKSB7XG4gICAgLy8gaWYgY2hlY2tlZCBhY3RlciBjbGlja1xuICAgIG15TGliYXJ5W2JveElkXS5yZWFkID0gJ3llcyc7IC8vIHNldCBvYmplY3RzIHJlYWQgdmFsdWUgdG8gbWF0Y2hcbiAgfVxufVxuXG4vLyByZW1vdmVzIHtCb29rfSBmcm9tIG15TGlicmFyeVtdXG5mdW5jdGlvbiBkZWxldGVCb29rKGRlbGV0ZUJveElEKSB7XG4gIC8vIHRha2VzIGRhdGEtaWQgbGlua2VkIHRvIGVsZW1lbnQgY2xpY2tlZFxuICBpZiAobXlMaWJhcnkubGVuZ3RoID49IDEpIHtcbiAgICAvLyBpZiB0aGVyZSBpcyB0IGxlYXN0IDEgYm9va1xuICAgIG15TGliYXJ5LnNwbGljZShkZWxldGVCb3hJRCwgMSk7IC8vIHVzZSBkYXRhLWlkIGFzIFtdIGluZGV4IHRvIHJlbW92ZSBvYmplY3RcbiAgICBkaXNwbGF5Qm9vaygpOyAvLyBkaXNwbGF5IHVwZGF0ZWQgYXJyYXkgd2l0aCB7Qm9va30gcmVtb3ZlZFxuICB9XG59XG5cbi8vIGxpc3RlbnMgdG8gUmVhZD8gY2xpY2sgYW5kIHBhc3NlcyBzcGVjaWZpYyB0YXJnZXQgdmFsdWVzIHRvIHJlYWRCb29rKClcbmZ1bmN0aW9uIGNsaWNrUmVhZCgpIHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIC8vIGxpc3RlbiBmb3IgY2xpY2tcbiAgICBjb25zdCByZWFkQm94ID0gZS50YXJnZXQ7IC8vIHNldCB2YXIgdG8gZWxlbWVudCBjbGlja2VkXG4gICAgY29uc3QgcmVhZEJveElkID0gZS50YXJnZXQuZGF0YXNldC5pZDsgLy8gc2V0IHZhciB0byBJRCBhc3NvY2lhdGVkIHcvIGVsIGNsaWNrZWRcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSAncmVhZC1jaGVjaycpIHtcbiAgICAgIC8vIGlmIHRoYXQgZWwgd2FzIHRoZSByZWFkIGNoZWNrYm94XG4gICAgICByZWFkQm9vayhyZWFkQm94LCByZWFkQm94SWQpOyAvLyBwYXNzIHRoZSBlbCBhbmQgaXQncyBJRCB0byByZWFkQm9vaygpXG4gICAgfVxuICB9KTtcbn1cblxuLy8gbGlzdGVucyB0byBkZWxldCBpY29uIGNsaWNrIGFuZCBwYXNzZXMgc3BlY2lmaWMgdGFyZ2V0IHZhbHVlcyB0byBkZWxldGUgQm9vaygpXG5mdW5jdGlvbiBjbGlja0RlbGV0ZSgpIHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIC8vIGxpc3RlbiBmb3IgY2xpY2tcbiAgICBjb25zdCBkZWxldGVCb3hJRCA9IGUudGFyZ2V0LmRhdGFzZXQuaWQ7IC8vIHNldCB2YXIgdG8gSUQgYXNzb2NpYXRlZCB3LyBlbCBjbGlja2VkXG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2RlbGV0ZS1pbWcnKSB7XG4gICAgICAvLyBpZiB0aGF0IGVsIHdhcyB0aGUgZGVsZXRlIGltZyAodHJhc2ggY2FuKVxuICAgICAgZGVsZXRlQm9vayhkZWxldGVCb3hJRCk7IC8vIHBhc3MgdGhlIGVsIGFuZCBpdCdzIElEIHRvIGRlbGV0ZUJvb2soKVxuICAgIH1cbiAgfSk7XG59XG5cbmNsaWNrUmVhZCgpO1xuXG5jbGlja0RlbGV0ZSgpO1xuXG4vLyBjYWxscyBmb3JtIHdoZW4gK0FkZCBCb29rIGlzIGNsaWNrZWRcbmFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgc2lkZUZvcm0ucmVzZXQoKTsgLy8gcmVzZXQgdGhlIGZvcm1cbiAgZm9ybU92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdmbGV4JzsgLy8gbWFrZXMgZm9ybSBhcHBlYXJcbiAgZm9ybU92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnZm9ybS1vdmVybGF5Jyk7IC8vIHJlbW92ZXMgaGlkZGVuIGNsYXNzXG4gIGZvcm1PdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tb3ZlcmxheS12aXMnKTsgLy8gYWRkcyB2aXNpYmxlIGNsYXNzXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib29rLXRpdGxlJykuZm9jdXMoKTsgLy8gcHV0cyBmb2N1cyBjdXJzb3Igb24gZmlyc3QgaW5wdXRcbiAgYWRkQnRuLnN0eWxlLnpJbmRleCA9ICctMSc7IC8vIHNldCBhZGRCdG4gdG8gYmFja2dyb3VuZCB2aWEgeiBpbmRleFxuICBjbGlja091dCgpO1xufSk7XG5cbi8vIHBhc3NlcyBmb3JtIGRhdGEgdG8gYWRkQm9vaygpIGFuZCBoaWRlcyBmb3JtIHdoZW4gU3VibWl0IGlzIGNsaWNrZWRcbnNpZGVGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTsgLy8gc3RvcHMgc3VtYml0IGZyb20gc2VuZGluZyBkYXRhIHRvIHNlcnZlciBieSBkZWZhdWx0XG4gIGFkZEJvb2soKTsgLy8gc2VuZHMgZGF0YSB0byBteUxpYltdXG4gIGZvcm1PdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2Zvcm0tb3ZlcmxheS12aXMnKTsgLy8gcmVtb3ZlcyB2aXNpYmxlIGNsYXNzXG4gIGZvcm1PdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tb3ZlcmxheScpOyAvLyBhZGRzIGhpZGRlbiBjbGFzc1xuICAvLyBtYWtlcyBmb3JtIGRpc3NhcGVhciBvbiBzdWJtaXRcbiAgYWRkQnRuLnN0eWxlLnpJbmRleCA9ICcwJzsgLy8gYnJpbmcgYWRkQnRuIHRvIG51ZXRyYWwgeiBwbGFuZVxuICBzaWRlRm9ybS5yZXNldCgpOyAvLyByZXNldCB0aGUgZm9ybVxufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=