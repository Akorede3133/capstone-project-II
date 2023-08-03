/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Lato:wght@100;300;400;700;900&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `*,\r\n*::after,\r\n*::before {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml {\r\n  scroll-behavior: smooth;\r\n}\r\n\r\nbody {\r\n  font-family: 'Lato', sans-serif;\r\n  position: relative;\r\n  background-color: black;\r\n  min-height: 100vh;\r\n  height: 100%;\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n}\r\n\r\nli {\r\n  font-size: 0.8rem;\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  align-items: center;\r\n  background-color: blue;\r\n  gap: 2rem;\r\n  padding: 10px;\r\n}\r\n\r\nheader img {\r\n  border-radius: 5px;\r\n  width: 50px;\r\n}\r\n\r\nmain {\r\n  width: 90%;\r\n  margin: 10px auto;\r\n}\r\n\r\n.shows--container {\r\n  display: grid;\r\n\r\n  /* display: none; */\r\n  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));\r\n  gap: 2rem;\r\n  color: #fff;\r\n}\r\n\r\n.show--info {\r\n  width: 100%;\r\n}\r\n\r\n.show--thumbnail img {\r\n  width: 100%;\r\n  border-radius: 5px;\r\n}\r\n\r\n.show--counts {\r\n  display: flex;\r\n  width: 100%;\r\n  justify-content: space-between;\r\n  font-size: 0.9em;\r\n}\r\n\r\n.show--name {\r\n  font-size: 0.8rem;\r\n  align-self: center;\r\n}\r\n\r\n.show--likes {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.show--likes i {\r\n  align-self: flex-end;\r\n}\r\n\r\n.fa-heart {\r\n  cursor: pointer;\r\n}\r\n\r\n.fa-solid.fa-heart {\r\n  display: none;\r\n}\r\n\r\n.comments--btn {\r\n  padding: 7px 20px;\r\n  border: none;\r\n  background-color: rgba(0, 0, 255, 0.697);\r\n  border-radius: 5px;\r\n  width: 100%;\r\n  margin-top: 4px;\r\n  color: white;\r\n  letter-spacing: 1.2px;\r\n  cursor: pointer;\r\n}\r\n\r\n.comments--btn:hover {\r\n  opacity: 0.7;\r\n}\r\n\r\nfooter {\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  background-color: blue;\r\n  padding: 10px 20px;\r\n}\r\n\r\nfooter p {\r\n  font-size: 0.8rem;\r\n  color: #fff;\r\n}\r\n\r\n.pop--up--section {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  min-height: 100%;\r\n  padding: 20px;\r\n  background-color: rgba(0, 0, 0, 0.842);\r\n  transition: all 0.3s linear;\r\n  z-index: 100;\r\n}\r\n\r\n.hide--pop--up {\r\n  height: 0;\r\n  width: 0;\r\n  padding: 0;\r\n  overflow: hidden;\r\n}\r\n\r\n.pop--up--container {\r\n  padding: 20px;\r\n  width: 90%;\r\n  height: 100%;\r\n  min-height: 100vh;\r\n  margin: auto;\r\n  margin-top: 50px;\r\n  background-color: white;\r\n}\r\n\r\n.pop--up--section .fa-close {\r\n  font-size: 30px;\r\n  position: absolute;\r\n  top: 0%;\r\n  right: 3%;\r\n  z-index: 2;\r\n  color: blue;\r\n  cursor: pointer;\r\n}\r\n\r\n.pop--up--desc {\r\n  margin-top: 10px;\r\n}\r\n\r\n.pop--up--img img {\r\n  width: 100%;\r\n  margin: auto;\r\n  display: block;\r\n  height: 250px;\r\n}\r\n\r\n.pop--up--desc .show--name {\r\n  text-align: center;\r\n}\r\n\r\n.pop--up--info {\r\n  margin-top: 10px;\r\n  display: grid;\r\n  grid-template-columns: repeat(2, 1fr);\r\n  gap: 1rem 2rem;\r\n}\r\n\r\n.pop--up--container p {\r\n  font-size: 0.9em;\r\n}\r\n\r\n.comments--container {\r\n  margin-top: 40px;\r\n}\r\n\r\n.form h4,\r\n.comments--container h4 {\r\n  text-align: center;\r\n  padding: 10px 0;\r\n}\r\n\r\n.comments--list {\r\n  display: grid;\r\n  gap: 1rem;\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 1rem;\r\n}\r\n\r\nform input {\r\n  width: 70%;\r\n  padding: 7px 10px;\r\n}\r\n\r\ntextarea {\r\n  width: 70%;\r\n  resize: none;\r\n  padding: 10px;\r\n  height: 100px;\r\n}\r\n\r\nform button {\r\n  align-self: flex-start;\r\n  padding: 10px;\r\n  border: none;\r\n  border-radius: 5px;\r\n  background-color: rgba(0, 0, 255, 0.681);\r\n  color: white;\r\n  cursor: pointer;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .pop--up--container {\r\n    padding: 20px;\r\n    width: 500px;\r\n    margin: 40px auto;\r\n  }\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-setup/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://webpack-setup/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-setup/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-setup/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-setup/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-setup/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-setup/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-setup/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-setup/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-setup/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_show_class_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/show_class.js */ \"./src/modules/show_class.js\");\n\n\n\n_modules_show_class_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].displayShows();\n\n//# sourceURL=webpack://webpack-setup/./src/index.js?");

/***/ }),

/***/ "./src/modules/fetch_api.js":
/*!**********************************!*\
  !*** ./src/modules/fetch_api.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass FetchData {\n  showsUrl = 'https://api.tvmaze.com/shows';\n\n  postLikeUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps';\n\n  fetchShows = async () => {\n    try {\n      const response = await fetch(this.showsUrl);\n      const data = await response.json();\n      return data;\n    } catch (error) {\n      return error;\n    }\n  }\n\n  fetchSingleShows = async (id) => {\n    try {\n      const response = await fetch(`${this.showsUrl}/${id}`);\n      const data = await response.json();\n      return data;\n    } catch (error) {\n      return error;\n    }\n  }\n\n  postLike = async (id, showId) => {\n    try {\n      const response = await fetch(`${this.postLikeUrl}/${showId}/likes/`, {\n        method: 'POST',\n        headers: {\n          'Content-Type': 'application/json',\n        },\n        body: JSON.stringify({\n          item_id: id,\n        }),\n      });\n      const data = await response.text();\n      return data;\n    } catch (error) {\n      return error;\n    }\n  }\n\n  getLikes = async (showId) => {\n    try {\n      const response = await fetch(`${this.postLikeUrl}/${showId}/likes`);\n      const data = await response.json();\n      return data;\n    } catch (error) {\n      return error;\n    }\n  }\n}\nconst fecthData = new FetchData();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fecthData);\n\n//# sourceURL=webpack://webpack-setup/./src/modules/fetch_api.js?");

/***/ }),

/***/ "./src/modules/show_class.js":
/*!***********************************!*\
  !*** ./src/modules/show_class.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _fetch_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetch_api.js */ \"./src/modules/fetch_api.js\");\n\n\nclass Show {\n  constructor() {\n    this.showsContainer = document.querySelector('.shows--container');\n    this.popUpContainer = document.querySelector('.single--show--detail');\n    this.popUpSection = document.querySelector('.pop--up--section');\n    this.closePopUpBtn = document.querySelector('.fa-close');\n    this.windowHeight = window.scrollY;\n\n    // this.showId = '7eeZSxoE9qlr2meDvNAi';\n    // this.showId = 'HA6T9JcmdjaALtObT86k';\n    this.showId = 'Zrj6oLFHff3PIwzqVfDg';\n    this.commentID = '';\n    // HA6T9JcmdjaALtObT86k\n    // qN4F0k3AjslqJdg5LeJa\n    // Zrj6oLFHff3PIwzqVfDg\n  }\n\n  displayShows = async () => {\n    const shows = await _fetch_api_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].fetchShows();\n    const elements = shows.slice(0, 30).map((show) => {\n      const {\n        image: { medium }, name, id,\n      } = show;\n      const showElement = `<div class=\"show--info\">\n      <div class=\"show--details\">\n        <div class=\"show--thumbnail\">\n            <img src=${medium} alt=\"\">\n        </div>\n        <div class=\"show--counts\">\n          <p class=\"show--name\">${name}</p>\n          <div class=\"show--likes\">\n            <i class=\"fa-regular fa-heart\" id=${id}></i>\n            <i class=\"fa-solid fa-heart\"></i>\n            <p class=\"show--likes--count\">\n                <span class=\"likes--count\" id=${id}></span> likes\n            </p>\n          </div>\n        </div>\n      </div>\n      <button class=\"comments--btn\" id=${id}>Comments</button>\n    </div>`;\n      return showElement;\n    }).join('');\n    this.showsContainer.insertAdjacentHTML('beforeend', elements);\n    this.displayPopUp();\n    this.hidePopUp();\n    this.updateLikes();\n    this.updateLikesCount();\n  }\n\n  displayPopUp = () => {\n    const commentBtns = this.showsContainer.querySelectorAll('.comments--btn');\n    commentBtns.forEach((btn) => {\n      btn.addEventListener('click', async (e) => {\n        const { id } = e.target;\n        try {\n          const shows = await _fetch_api_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].fetchSingleShows(id);\n          window.scrollTo(0, 0);\n          this.windowHeight = window.scrollY;\n          this.CreatePopUpInterface(shows);\n        } catch (error) {\n          return error;\n        }\n        return id;\n      });\n    });\n  }\n\n  CreatePopUpInterface = async (data) => {\n    const {\n      language, name, genres, rating: { average }, weight, premiered, image: { original }, summary,\n    } = data;\n    this.popUpContainer.innerHTML = '';\n    const element = ` <div class=\"pop--up--img\">\n    <img src=${original} alt=\"\">\n  </div>\n  <div class=\"pop--up--desc\">\n    <h3 class=\"show--name\">${name}</h3>\n    <p>${summary}</p>\n    <ul class=\"pop--up--info\">\n      <li class=\"show--title\">Name: <span>${name}</span></li>\n      <li class=\"\">Language: <span>${language}</span></li>\n      <li class=\"show--rating\">Rating: <span>${average}</span></li>\n      <li class=\"show--weight\">Weight: <span>${weight}</span></li>\n      <li class=\"show--genre\">Generes: <span>${genres[0]}</span></li>\n      <li class=\"show--premiered\">premiered: <span>${premiered}</span></li>\n    </ul>\n  </div>\n  <div class=\"comments--container\">\n    <h4>Comments (<span class=\"comment--count\"></span>)</h4>\n    <ul class=\"comments--list\">\n    </ul>\n  </div>`;\n    this.popUpContainer.insertAdjacentHTML('beforeend', element);\n    // this.popUpSection.style.display = 'block';\n    this.popUpSection.classList.remove('hide--pop--up');\n  }\n\n  hidePopUp = () => {\n    this.closePopUpBtn.addEventListener('click', () => {\n      window.scrollTo(0, this.windowHeight);\n      this.popUpSection.classList.add('hide--pop--up');\n    });\n  }\n\n  updateLikes = () => {\n    const heartBtn = document.querySelectorAll('.fa-heart');\n    heartBtn.forEach((btn) => {\n      btn.addEventListener('click', async (e) => {\n        const { target } = e;\n        const { id } = target;\n        const parent = target.parentElement;\n        const countSpan = parent.querySelector('.likes--count');\n        const filledLove = parent.querySelector('.fa-heart.fa-solid');\n        const emptyLove = parent.querySelector('.fa-heart.fa-regular');\n        let likesCount = countSpan.textContent ? parseInt(countSpan.textContent, 10) : 0;\n        if (e.target.classList.contains('fa-regular')) {\n          likesCount += 1;\n          countSpan.textContent = likesCount;\n          target.style.display = 'none';\n          filledLove.style.display = 'block';\n          _fetch_api_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].postLike(id, this.showId);\n        } else {\n          likesCount -= 1;\n          countSpan.textContent = likesCount;\n          target.style.display = 'none';\n          emptyLove.style.display = 'block';\n        }\n      });\n    });\n  }\n\n  updateLikesCount = async () => {\n    try {\n      const response = await _fetch_api_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getLikes(this.showId);\n      // console.log(response);\n      response.forEach((res) => {\n        const counts = document.querySelectorAll('.likes--count');\n        counts.forEach((count) => {\n          if (count.id === res.item_id) {\n            count.textContent = res.likes;\n          }\n        });\n      });\n      this.updateHeartDisplay();\n      return response;\n    } catch (error) {\n      return error;\n    }\n  }\n\n  updateHeartDisplay = () => {\n    const countSpans = document.querySelectorAll('.likes--count');\n    countSpans.forEach((span) => {\n      if (span.textContent > 0) {\n        const parent = span.parentElement.parentElement;\n        const filledLove = parent.querySelector('.fa-heart.fa-solid');\n        const emptyLove = parent.querySelector('.fa-heart.fa-regular');\n        emptyLove.style.display = 'none';\n        filledLove.style.display = 'block';\n      }\n    });\n  }\n}\nconst show = new Show();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (show);\n\n//# sourceURL=webpack://webpack-setup/./src/modules/show_class.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;