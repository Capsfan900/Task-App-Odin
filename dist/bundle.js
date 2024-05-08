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

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://01/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://01/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://01/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _taskFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskFactory */ \"./src/taskFactory.js\");\n\n\n\n\n//content needed to collect and store in local storage WEB API\n//-notes data\n//-formTaskData(title,description..etc)\n//and the state or output drawing of the canvas(remeber what was on it)\n\n//global variables and DOM\n\nlet taskList = [];\nconst body = document.querySelector(\"body\");\nconst dialog = document.querySelector(\"dialog\");\nconst taskBtn = document.getElementById(\"test\");\nconst submit = document.querySelector(\"#submit1\");\nconst welcomeScreen = document.querySelector(\"#welcome-screen\");\nconst welcomeItem = document.querySelector(\"#welcome-item\");\nconst startMenu = document.querySelector(\"dialog#welcome-screen\");\nconst task = document.querySelector(\".taskWrapper\");\n\n//event listeners\n\nwelcomeItem.addEventListener(\"click\", function () {\n  console.log(\"this works\");\n  startMenu.remove();\n});\ntaskBtn.addEventListener(\"click\", e => {\n  dialog.showModal();\n  body.style.opacity = 1;\n});\n\n//custom form submission handling (extracts form data into an object)\nsubmit.addEventListener(\"click\", e => {\n  let currTask = (0,_taskFactory__WEBPACK_IMPORTED_MODULE_1__.constructTask)();\n  e.preventDefault();\n  console.log(currTask.taskTitleID);\n  taskList.push(currTask);\n});\nwindow.onload = () => {\n  welcomeScreen.showModal();\n  setTimeout(() => {\n    //alert(\"Welcome To The Site Click Spinny Guy To Enter!\")\n    console.log(\"hello logs\");\n  }, \"700\");\n};\nconst focusTaskElement = () => {\n  const itemToFocus = currTask.taskTitleID;\n};\nfocusTaskElement();\n\n//# sourceURL=webpack://01/./src/index.js?");

/***/ }),

/***/ "./src/taskFactory.js":
/*!****************************!*\
  !*** ./src/taskFactory.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Task: () => (/* binding */ Task),\n/* harmony export */   constructTask: () => (/* binding */ constructTask)\n/* harmony export */ });\n// i know i need to rename a lot of this, it's a mess\nlet taskList = [];\nconst leftMenu = document.querySelector(\".left-menu\");\nfunction Task(title, description, dueDate, priorityLevel) {\n  this.Title = title;\n  this.Description = description;\n  this.DueDate = dueDate;\n  this.PriorityLevel = priorityLevel;\n}\nconst constructTask = () => {\n  // Object Creation Phase\n  const dialog = document.querySelector(\"dialog\");\n  const formTitle = document.getElementById(\"title\");\n  const form = document.getElementById('myForm');\n  const taskObj = new Task(form.elements.title.value, form.elements.description.value, form.elements.dueDate.value, form.elements.priorityLevel.value);\n  if (formTitle.value === \"\") {\n    alert(\"form is not complete!\");\n  } else {\n    dialog.close();\n    form.reset();\n  }\n  console.log(taskObj);\n  // End of Object Creation Phase\n\n  const taskBar = document.createElement(\"div\");\n  taskBar.setAttribute(\"class\", \"taskBarItems\");\n  taskBar.setAttribute(\"id\", `${taskObj.Title}`);\n  taskBar.style.color = \"blue\";\n  taskBar.width = \"100%\";\n  taskBar.textContent = `${taskObj.Title}`;\n  leftMenu.appendChild(taskBar);\n\n  // Actual rendering of the task elements\n  // Element creation\n  const taskWrapper = document.createElement(\"div\");\n  taskWrapper.setAttribute(\"id\", `${taskObj.Title}`);\n  // Dom manipulation\n  taskWrapper.setAttribute(\"class\", \"taskWrapper\");\n  const taskItem = document.createElement(\"div\");\n  const taskMenu = document.querySelector(\".task-container\");\n  // Assigning taskObj made from formData to a variable\n  let makeTask = taskObj;\n  const keyValueWrapper = document.createElement(\"div\");\n  keyValueWrapper.classList.add(\"keyValueWrapper\");\n  for (const [key, value] of Object.entries(makeTask)) {\n    // element create to wrap the contents of each object pair\n    const taskContent = document.createElement(\"div\");\n    taskContent.classList.add(\"taskContent\");\n    const keyDiv = document.createElement(\"div\");\n    keyDiv.classList.add(\"key\");\n    keyDiv.textContent = key;\n    keyDiv.style.color = \"orange\";\n    keyDiv.style.fontSize = \"25px\";\n    keyDiv.style.height = \"20px\";\n    keyDiv.style.width = \"100px\";\n    taskContent.appendChild(keyDiv);\n    const valueDiv = document.createElement(\"div\");\n    valueDiv.classList.add(\"value\");\n    valueDiv.textContent = value;\n    valueDiv.style.color = \"purple\";\n    valueDiv.style.fontSize = \"20px\";\n    valueDiv.style.height = \"fit-content\";\n    valueDiv.style.width = \"fit-content\";\n    taskContent.appendChild(valueDiv);\n    keyValueWrapper.appendChild(taskContent);\n  }\n  taskItem.setAttribute(\"class\", \"task\");\n  taskItem.style.width = \"20rem\";\n  taskItem.style.color = \"Red\";\n  taskItem.style.height = \"fit-content\";\n  taskItem.style.background = \"grey\";\n  taskItem.appendChild(keyValueWrapper);\n  taskWrapper.appendChild(taskItem);\n  const formContainer = document.createElement(\"div\");\n\n  // Create canvas element (potentially make this its own module)\n  const canvas = document.createElement(\"canvas\");\n  canvas.setAttribute(\"class\", \"canvasForTask\");\n  canvas.width = 600;\n  canvas.height = 400;\n  canvas.style.border = \"1px solid black\";\n  // Add a border to the canvas for better visibility\n  const ctx = canvas.getContext('2d');\n  ctx.lineWidth = 3;\n  ctx.strokeStyle = 'black';\n\n  // Track drawing state\n  let isDrawing = false;\n  let lastX = 0;\n  let lastY = 0;\n\n  // Handle mouse events\n  canvas.addEventListener('mousedown', startDrawing);\n  canvas.addEventListener('mousemove', draw);\n  canvas.addEventListener('mouseup', stopDrawing);\n\n  // Functions for the canvas\n  function startDrawing(e) {\n    isDrawing = true;\n    [lastX, lastY] = [e.offsetX, e.offsetY];\n  }\n  function draw(e) {\n    if (!isDrawing) return;\n    ctx.beginPath();\n    ctx.moveTo(lastX, lastY);\n    ctx.lineTo(e.offsetX, e.offsetY);\n    ctx.stroke();\n    [lastX, lastY] = [e.offsetX, e.offsetY];\n  }\n  function stopDrawing() {\n    isDrawing = false;\n  }\n\n  // Dom manipulation\n  taskWrapper.appendChild(canvas);\n\n  // Create textarea\n  const textarea = document.createElement(\"textarea\");\n  textarea.classList.add(\"task-textarea\");\n  textarea.placeholder = \"Enter notes...\";\n  textarea.rows = 20;\n  textarea.style.width = \"100%\";\n  textarea.style.height = \"400px\";\n  taskWrapper.appendChild(textarea);\n  taskMenu.append(taskWrapper);\n  let taskTitleID = taskObj.Title;\n  return {\n    taskTitleID,\n    taskObj\n  };\n};\n\n//# sourceURL=webpack://01/./src/taskFactory.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./red_guy.jpeg */ \"./src/red_guy.jpeg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/*/main content/*/\r\n* {\r\n    margin: 0;\r\n    font-family: cursive;\r\n    padding: 7px;\r\n}\r\n\r\nhtml {\r\n    display: grid;\r\n    background-size: cover;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    height: 100%;\r\n    width: 100%;\r\n    position: fixed;\r\n}\r\n\r\n.globalWrapper {\r\n    height: 100%;\r\n    width: 100%;\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n}\r\n\r\nbody {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding: 10px;\r\n    background-repeat: no-repeat;\r\n    height: auto;\r\n    width: 100%;\r\n    background-size: cover;\r\n    background-position: center;\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n    background-image: linear-gradient(to right top, #d16b6b, #a7565b, #7e424a, #572f37, #331e23, #361e23, #3a1d24, #3d1d24, #692c37, #983b47, #c94c55, #fb5f5f);\r\n}\r\n\r\nbody:has(dialog[open]) {\r\n    overflow: hidden;\r\n}\r\n\r\nh3 {\r\n    color: black;\r\n}\r\n\r\n\r\n.canvasForTask {\r\n    background-color: grey;\r\n    margin-top: 45px;\r\n    height: 400px;\r\n\r\n}\r\n\r\n.task-textarea {\r\n    margin-top: 53px;\r\n    transform: translateY(-9px);\r\n    align-self: flex-start;\r\n}\r\n\r\n.navBar {\r\n    display: flex;\r\n    justify-content: center;\r\n    width: auto;\r\n    margin-bottom: 20px;\r\n    z-index: 1;\r\n}\r\n\r\n\r\n#test {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background-color: red;\r\n    color: red;\r\n    height: 50px;\r\n    width: 100px;\r\n    cursor: pointer;\r\n    transition: all 0.3s ease;\r\n}\r\n\r\n\r\n\r\n#test:hover {\r\n    background-color: black;\r\n    color: red;\r\n    transition: .5s ease-in;\r\n    width: 300px;\r\n    opacity: 75%;\r\n    font-size: 15px;\r\n}\r\n\r\n#test:active {\r\n    transform: scale(1.5);\r\n\r\n}\r\n\r\n\r\n\r\n/*/\r\n    welcome screen\r\n    /*/\r\ndialog#welcome-screen {\r\n    height: 60vh;\r\n    width: 30vw;\r\n    border-radius: 50%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\r\n    overflow: hidden;\r\n    flex-shrink: 0;\r\n}\r\n\r\n\r\n#welcome-item {\r\n    height: 500px;\r\n    width: 500px;\r\n    animation: none;\r\n    border-radius: 50%;\r\n    border: groove 1px white;\r\n    position: relative;\r\n    animation: rotate 10s infinite linear, glow 2s infinite alternate;\r\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\r\n    background-position: center;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    cursor: pointer;\r\n\r\n}\r\n\r\n#welcome-item:hover {\r\n    background-color: red;\r\n}\r\n\r\n\r\n/*/\r\n    backdrops\r\n    /*/\r\n#welcome-screen::backdrop {\r\n    background-image: linear-gradient(to right top, #000000, #151414, #232021, #312d2e, #403b3b, #403b3b, #403b3b, #403b3b, #312d2e, #232021, #151414, #000000);\r\n\r\n}\r\n\r\n#form-dialog::backdrop {\r\n    background-color: black;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    background-image: linear-gradient(to right top, #000000, #151414, #232021, #312d2e, #403b3b, #403b3b, #403b3b, #403b3b, #312d2e, #232021, #151414, #000000);\r\n}\r\n\r\n\r\n\r\n\r\n/*/\r\n    end of welcome screen\r\n    /*/\r\n\r\n#test {\r\n    background-color: #4ADBC8;\r\n    color: red;\r\n    height: 50px;\r\n    width: 100px;\r\n    opacity: 75%;\r\n    margin-top: 20px;\r\n    margin-left: 30px;\r\n}\r\n\r\n\r\n#test:hover {\r\n    background-color: #4ADBC8;\r\n    color: red;\r\n    height: px;\r\n    transition: 1s;\r\n    width: 100px;\r\n    opacity: 75%;\r\n}\r\n\r\n\r\n.task-scroll-box {\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    scroll-snap-type: y mandatory;\r\n    scroll-behavior: smooth;\r\n\r\n}\r\n\r\n.task-container {\r\n    display: flex;\r\n    align-items: center;\r\n    flex-wrap: nowrap;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: fit-content;\r\n    gap: 50px;\r\n}\r\n\r\n\r\n.task-details {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    gap: 10px;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n\r\n.key {\r\n    display: flex;\r\n    font-weight: bold;\r\n    color: #4f5447;\r\n    margin-right: 5px;\r\n    height: fit-content;\r\n    width: fit-content;\r\n}\r\n\r\n.value {\r\n    display: flex;\r\n    color: #666;\r\n    height: fit-content;\r\n    width: fit-content;\r\n\r\n}\r\n\r\n.keyValueWrapper {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    text-align: center;\r\n    flex-wrap: wrap;\r\n    max-width: 250px;\r\n    gap: 30px;\r\n}\r\n\r\n\r\n.task {\r\n    background-color: darkgray;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    text-align: center;\r\n    border: solid 2px red;\r\n}\r\n\r\n.taskContent {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-self: center;\r\n    gap: 20px;\r\n    border: solid red 1px;\r\n    margin-bottom: 5px;\r\n    width: 15rem;\r\n    text-align: center;\r\n}\r\n\r\n.taskBarItems {\r\n    background-color: orange;\r\n    width: 100%;\r\n}\r\n\r\n.taskBarItems:hover {\r\n    transform: scale(1.1);\r\n    background-color: green;\r\n}\r\n\r\n.left-menu {\r\n    position: fixed;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n    left: 0%;\r\n    /* Position the div at the left edge of the screen */\r\n    top: 50%;\r\n    /* Position the div vertically centered */\r\n    transform: translateY(-50%);\r\n    /* Adjust vertical offset */\r\n    padding: 10px;\r\n    background-color: black;\r\n    height: 100%;\r\n    width: 200px;\r\n    padding: 25px;\r\n    overflow-y: auto;\r\n}\r\n\r\n#taskBool {\r\n\r\n    height: 50px;\r\n    width: 50px;\r\n}\r\n\r\n.taskDoneBtn {\r\n    grid-row: 2/2;\r\n    grid-column: 4/4;\r\n}\r\n\r\n.taskWrapper {\r\n    display: flex;\r\n    height: fit-content;\r\n    width: fit-content;\r\n    gap: 20px;\r\n    border: 5px grove purple;\r\n    padding: 20px;\r\n    border: solid 1px black;\r\n    background-color: #4cae4c;\r\n    margin-top: 120px;\r\n    transition: left 0.5s, top 0.5s;\r\n    /* Smooth transition */\r\n}\r\n\r\n\r\n.taskWrapper:hover {\r\n    transform: scale(1.15);\r\n    border: solid red 5px;\r\n\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.task-detail {\r\n    color: red;\r\n    text-align: center;\r\n    height: fit-content;\r\n    width: fit-content;\r\n}\r\n\r\n/*/\r\n    end of main-content\r\n    /*/\r\n\r\n\r\n\r\n\r\n\r\n\r\n/*/\r\n    form styling\r\n    /*/\r\n#form-dialog,\r\n#welcome-screen {\r\n    overflow-y: auto;\r\n    animation: fadeIn .76s;\r\n    /* don't forget to set a duration! */\r\n    padding: 20px;\r\n    position: fixed;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    width: fit-content;\r\n    height: fit-content;\r\n    background-size: cover;\r\n    background-position: center;\r\n    border-radius: 5%;\r\n    color: black;\r\n\r\n}\r\n\r\n#form-dialog {\r\n    font-size: 10px;\r\n    color: red;\r\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n.formWrapper {\r\n    display: flex;\r\n    align-self: center;\r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n    height: 900px;\r\n    width: 900px;\r\n    text-align: center;\r\n}\r\n\r\n/*task from fieldset*/\r\n.colorme {\r\n    display: flex;\r\n    align-self: center;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    gap: 25px;\r\n    height: fit-content;\r\n    width: 30rem;\r\n    text-align: left;\r\n    margin-bottom: 100px;\r\n    border-radius: 5%;\r\n    padding: 15px;\r\n    color: black;\r\n    font: 2rem cursive;\r\n    background-color: gray;\r\n    opacity: .9;\r\n}\r\n\r\n.colorme>text {\r\n    opacity: 1;\r\n}\r\n\r\n\r\n\r\n#submit1:hover {\r\n    background-color: #4cae4c;\r\n}\r\n\r\n#submit1 {\r\n    height: 50px;\r\n    width: 100px;\r\n    color: red;\r\n    background-color: black;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n#myForm {\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    margin: auto;\r\n    padding: 0;\r\n    border: 1px solid #888;\r\n    width: 80%;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n    width: 900px;\r\n    height: 900px;\r\n    border-radius: 5%;\r\n    background-position: center;\r\n    font-size: 25px;\r\n}\r\n\r\n\r\n\r\n/* end of form styling */\r\n\r\n\r\n\r\n/* media queries */\r\n\r\n@media(max-width:1500px) {\r\n\r\n    dialog#welcome-screen {\r\n        height: 200px;\r\n        width: 200px;\r\n    }\r\n\r\n    #welcome-item {\r\n        height: 150px;\r\n        width: 150px;\r\n\r\n    }\r\n\r\n    .main-content {\r\n        transform: scale(.8);\r\n        overflow: hidden;\r\n\r\n    }\r\n\r\n    .taskWrapper {\r\n        width: fit-content;\r\n        transform: scale(.8);\r\n    }\r\n\r\n    .task-container {\r\n        overflow-x: hidden;\r\n        width: auto;\r\n        transform: scale(.7);\r\n    }\r\n\r\n    .keyValueWrapper {\r\n        transform: scale(.9);\r\n    }\r\n\r\n    .task-scroll-box {\r\n        height: fit-content;\r\n        width: fit-content;\r\n    }\r\n\r\n    .left-menu {\r\n        opacity: 0%;\r\n    }\r\n\r\n\r\n    .taskWrapper:hover {\r\n        transform: scale(1);\r\n        border: solid red 5px;\r\n\r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/*/ keyframes/*/\r\n@keyframes fadeIn {\r\n    from {\r\n        transform-origin: 0 0;\r\n        scale: 50%;\r\n        opacity: 0;\r\n    }\r\n\r\n    to {\r\n        transform-origin: 0 0;\r\n        scale: 100%;\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n@keyframes fadeOut {\r\n    from {\r\n        transform-origin: 0 0;\r\n        scale: 100%;\r\n        opacity: 1;\r\n    }\r\n\r\n    to {\r\n        transform-origin: 0 0;\r\n        scale: 50%;\r\n        opacity: 0;\r\n    }\r\n}\r\n\r\n@keyframes rotate {\r\n    0% {\r\n        transform: rotate(0deg);\r\n    }\r\n\r\n    100% {\r\n        transform: rotate(360deg);\r\n    }\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://01/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://01/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://01/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://01/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://01/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://01/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://01/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://01/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/red_guy.jpeg":
/*!**************************!*\
  !*** ./src/red_guy.jpeg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d50249b108522c7932e1.jpeg\";\n\n//# sourceURL=webpack://01/./src/red_guy.jpeg?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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