/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/styles.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/styles.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n}\\n\\nbody {\\n  display: -webkit-box;\\n  display: flex;\\n  -webkit-box-pack: center;\\n  -ms-flex-pack: center;\\n  justify-content: center;\\n  margin-top: 20px;\\n}\\n\\n.no-list-style {\\n  list-style-type: none;\\n}\\n\\n.no-focus:focus {\\n  outline: none;\\n}\\n\\n.box-shadow {\\n  -webkit-box-shadow: 0 0 5px 2px #cecece;\\n  box-shadow: 0 0 5px 2px #cecece;\\n}\\n\\n.rotate-90 {\\n  -webkit-transform: rotate(90deg);\\n  transform: rotate(90deg);\\n}\\n\\n.placeholder-italic::-webkit-input-placeholder {\\n  font-style: italic;\\n}\\n\\n.placeholder-italic::-ms-input-placeholder {\\n  font-style: italic;\\n}\\n\\n.placeholder-italic:-ms-input-placeholder {\\n  font-style: italic;\\n}\\n\\n.placeholder-italic::placeholder {\\n  font-style: italic;\\n}\\n\\n.font-sm {\\n  font-size: smaller;\\n}\\n\\n.strike {\\n  text-decoration: line-through;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-exercise/./src/css/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack-exercise/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/css/styles.css":
/*!****************************!*\
  !*** ./src/css/styles.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/getTarget.js */ \"./node_modules/style-loader/dist/runtime/getTarget.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = function(css, style){\n      if (style.styleSheet) {\n        style.styleSheet.cssText = css;\n      } else {\n      while (style.firstChild) {\n        style.removeChild(style.firstChild);\n      }\n\n      style.appendChild(document.createTextNode(css));\n    }\n  };\noptions.setAttributes = function(style) {\n        var nonce =\n           true ? __webpack_require__.nc : 0;\n\n        if (nonce) {\n          style.setAttribute(\"nonce\", nonce);\n        }\n      };\noptions.insert = function(style){\n    var target = _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default()(\"head\");\n\n    if (!target) {\n      throw new Error(\n        \"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\"\n      );\n    }\n\n    target.appendChild(style);\n  };\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_4__.default, options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_4__.default && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_4__.default.locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_4__.default.locals : undefined);\n\n\n//# sourceURL=webpack://webpack-exercise/./src/css/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/getTarget.js":
/*!*************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/getTarget.js ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n\nmodule.exports = getTarget;\n\n//# sourceURL=webpack://webpack-exercise/./node_modules/style-loader/dist/runtime/getTarget.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-exercise/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-exercise/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-exercise/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./src/add_and_remove.js":
/*!*******************************!*\
  !*** ./src/add_and_remove.js ***!
  \*******************************/
/***/ ((module) => {

eval("function addNewTask() {\r\n  const taskArray = JSON.parse(localStorage.getItem('tasks'));\r\n  const description = document.getElementById('task-description').value;\r\n  taskArray.push({\r\n    description,\r\n    completed: false,\r\n    index: taskArray.length + 1,\r\n  });\r\n  document.getElementById('task-description').value = '';\r\n  localStorage.setItem('tasks', JSON.stringify(taskArray));\r\n}\r\n\r\nfunction deleteTask(task) {\r\n  const taskArray = JSON.parse(localStorage.getItem('tasks'));\r\n  const sortedTasks = taskArray.sort((a, b) => a.index - b.index);\r\n  sortedTasks.splice(task.index - 1, 1);\r\n  sortedTasks.forEach((task, index) => {\r\n    task.index = index + 1;\r\n  });\r\n  localStorage.setItem('tasks', JSON.stringify(sortedTasks));\r\n}\r\n\r\nfunction editTask(e, listItem, textElement, spanItem, allTasks, task, populate) {\r\n  const menu = e.target;\r\n  menu.classList.remove('fa-ellipsis-v');\r\n  menu.classList.add('fa-trash-alt');\r\n  listItem.classList.add('bg-warning');\r\n  textElement.remove();\r\n  const inputElement = document.createElement('input');\r\n  inputElement.value = task.description;\r\n  inputElement.classList.add('no-focus', 'border-0', 'bg-warning');\r\n  spanItem.append(inputElement);\r\n\r\n  inputElement.addEventListener('keydown', (e) => {\r\n    if (e.key === 'Enter') {\r\n      task.description = inputElement.value;\r\n      const sortedTasks = allTasks.sort((a, b) => a.index - b.index);\r\n      localStorage.setItem('tasks', JSON.stringify(sortedTasks));\r\n      populate(sortedTasks);\r\n    }\r\n  });\r\n\r\n  inputElement.focus();\r\n}\r\n\r\nfunction clearAllCompleted() {\r\n  const taskArray = JSON.parse(localStorage.getItem('tasks'));\r\n  const filteredTaskArray = taskArray.filter((task) => task.completed === false);\r\n  const sortedTasks = filteredTaskArray.sort((a, b) => a.index - b.index);\r\n\r\n  sortedTasks.forEach((task, index) => {\r\n    task.index = index;\r\n  });\r\n  localStorage.setItem('tasks', JSON.stringify(sortedTasks));\r\n}\r\n\r\nmodule.exports = {\r\n  addNewTask, editTask, deleteTask, clearAllCompleted,\r\n};\n\n//# sourceURL=webpack://webpack-exercise/./src/add_and_remove.js?");

/***/ }),

/***/ "./src/drag.js":
/*!*********************!*\
  !*** ./src/drag.js ***!
  \*********************/
/***/ ((module) => {

eval("let currentPosition = 0;\r\nlet currentlyDraggging = 0;\r\n\r\nfunction dragStart(e) {\r\n  currentlyDraggging = e.target.id;\r\n  e.target.classList.add('border', 'border-primary');\r\n}\r\n\r\nfunction dragOver(e) {\r\n  e.preventDefault();\r\n  currentPosition = e.target.id;\r\n}\r\n\r\nfunction drop(e, sortedTask, populate) {\r\n  const movedItem = sortedTask.splice(currentlyDraggging, 1);\r\n  sortedTask.splice(currentPosition, 0, movedItem[0]);\r\n\r\n  sortedTask.forEach((a, b) => {\r\n    a.index = b;\r\n  });\r\n\r\n  localStorage.setItem('tasks', JSON.stringify(sortedTask));\r\n  populate(sortedTask);\r\n  e.stopPropagation();\r\n}\r\n\r\nmodule.exports = { dragStart, dragOver, drop };\n\n//# sourceURL=webpack://webpack-exercise/./src/drag.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/styles.css */ \"./src/css/styles.css\");\n/* harmony import */ var _drag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drag.js */ \"./src/drag.js\");\n/* harmony import */ var _drag_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_drag_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _add_and_remove_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add_and_remove.js */ \"./src/add_and_remove.js\");\n/* harmony import */ var _add_and_remove_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_add_and_remove_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _status_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./status.js */ \"./src/status.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst taskList = document.getElementById('task-list');\r\n\r\nlet allTasks = [\r\n];\r\n\r\nfunction populate(tasks) {\r\n  taskList.innerHTML = '';\r\n\r\n  tasks.forEach((task) => {\r\n    const listItem = document.createElement('li');\r\n    listItem.draggable = true;\r\n    listItem.classList.add('border-bottom', 'p-3', 'pt-2', 'pb-2', 'd-flex', 'flex-row', 'justify-content-between', 'align-items-center');\r\n    listItem.id = task.index;\r\n\r\n    const spanItem = document.createElement('span');\r\n    const textElement = document.createElement('p');\r\n    textElement.innerText = task.description;\r\n    textElement.classList.add('d-inline');\r\n    const checkBox = document.createElement('input');\r\n    checkBox.type = 'checkbox';\r\n    checkBox.classList.add('me-2');\r\n    const menu = document.createElement('i');\r\n    menu.classList.add('fa', 'fa-ellipsis-v', 'text-secondarys');\r\n    menu.addEventListener('click', (e) => {\r\n      (0,_add_and_remove_js__WEBPACK_IMPORTED_MODULE_2__.editTask)(e, listItem, textElement, spanItem, allTasks, task, populate);\r\n      menu.addEventListener('click', () => {\r\n        (0,_add_and_remove_js__WEBPACK_IMPORTED_MODULE_2__.deleteTask)(task);\r\n        allTasks = JSON.parse(localStorage.getItem('tasks'));\r\n        const sortedTasks = allTasks.sort((a, b) => a.index - b.index);\r\n        populate(sortedTasks);\r\n      });\r\n    });\r\n    spanItem.append(checkBox, textElement);\r\n\r\n    listItem.append(spanItem, menu);\r\n    taskList.append(listItem);\r\n\r\n    listItem.addEventListener('dragover', _drag_js__WEBPACK_IMPORTED_MODULE_1__.dragOver);\r\n    listItem.addEventListener('dragstart', _drag_js__WEBPACK_IMPORTED_MODULE_1__.dragStart);\r\n\r\n    if (task.completed) {\r\n      textElement.classList.add('strike', 'text-muted');\r\n      checkBox.checked = true;\r\n    }\r\n\r\n    checkBox.addEventListener('change', () => {\r\n      (0,_status_js__WEBPACK_IMPORTED_MODULE_3__.default)(textElement, checkBox, task);\r\n    });\r\n  });\r\n}\r\n\r\ntaskList.addEventListener('drop', (e) => {\r\n  const sortedTasks = allTasks.sort((a, b) => a.index - b.index);\r\n  (0,_drag_js__WEBPACK_IMPORTED_MODULE_1__.drop)(e, sortedTasks, populate);\r\n});\r\n\r\nif (localStorage.getItem('tasks')) {\r\n  allTasks = JSON.parse(localStorage.getItem('tasks'));\r\n} else {\r\n  localStorage.setItem('tasks', JSON.stringify(allTasks));\r\n}\r\n\r\ndocument.getElementById('add-button').addEventListener('click', () => {\r\n  (0,_add_and_remove_js__WEBPACK_IMPORTED_MODULE_2__.addNewTask)();\r\n  allTasks = JSON.parse(localStorage.getItem('tasks'));\r\n  const sortedTasks = allTasks.sort((a, b) => a.index - b.index);\r\n  populate(sortedTasks);\r\n});\r\n\r\ndocument.getElementById('task-description').addEventListener('keydown', (e) => {\r\n  if (e.key === 'Enter') {\r\n    (0,_add_and_remove_js__WEBPACK_IMPORTED_MODULE_2__.addNewTask)();\r\n    allTasks = JSON.parse(localStorage.getItem('tasks'));\r\n    const sortedTasks = allTasks.sort((a, b) => a.index - b.index);\r\n    populate(sortedTasks);\r\n  }\r\n});\r\n\r\ndocument.getElementById('clear-completed-button').addEventListener('click', () => {\r\n  (0,_add_and_remove_js__WEBPACK_IMPORTED_MODULE_2__.clearAllCompleted)();\r\n  if (localStorage.getItem('tasks')) {\r\n    allTasks = JSON.parse(localStorage.getItem('tasks'));\r\n    const sortedTasks = allTasks.sort((a, b) => a.index - b.index);\r\n    populate(sortedTasks);\r\n  }\r\n});\r\n\r\nconst sortedTasks = allTasks.sort((a, b) => a.index - b.index);\r\ndocument.addEventListener('DOMContentLoaded', populate(sortedTasks));\n\n//# sourceURL=webpack://webpack-exercise/./src/index.js?");

/***/ }),

/***/ "./src/status.js":
/*!***********************!*\
  !*** ./src/status.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction updateStatus(textElement, checkBox, task) {\r\n  const allTasks = JSON.parse(localStorage.getItem('tasks'));\r\n  const currentTask = allTasks.find((t) => t.index === task.index);\r\n  textElement.classList.toggle('strike');\r\n  textElement.classList.toggle('text-muted');\r\n  if (checkBox.checked) {\r\n    task.completed = true;\r\n    currentTask.completed = true;\r\n  } else {\r\n    task.completed = false;\r\n    currentTask.completed = false;\r\n  }\r\n  localStorage.setItem('tasks', JSON.stringify(allTasks));\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateStatus);\n\n//# sourceURL=webpack://webpack-exercise/./src/status.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;