/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/app */ \"./src/js/app.js\");\n\n // entry point for webpack\n// don't write your code here\n\n//# sourceURL=webpack://ajs_diploma/./src/index.js?");

/***/ }),

/***/ "./src/js/Character.js":
/*!*****************************!*\
  !*** ./src/js/Character.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Character; }\n/* harmony export */ });\nclass Character {\n  constructor(level) {\n    let type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'generic';\n    this.level = level;\n    this.attack = 0;\n    this.defence = 0;\n    this.health = 50;\n    this.type = type; // TODO: throw error if user use \"new Character()\"\n\n    if (new.target.name === 'Character') {\n      throw new Error('You cannot create objects of this class!');\n    }\n  }\n\n  levelUp() {\n    const healthBefore = this.health;\n    this.level += 1;\n    this.health += 80;\n\n    if (this.health > 100) {\n      this.health = 100;\n    }\n\n    this.attack = Math.max(this.attack, this.attack * ((1.8 - healthBefore) / 100));\n    this.defence = Math.max(this.defence, this.defence * ((1.8 - healthBefore) / 100));\n  }\n\n}\n\n//# sourceURL=webpack://ajs_diploma/./src/js/Character.js?");

/***/ }),

/***/ "./src/js/Characters/Bowman.js":
/*!*************************************!*\
  !*** ./src/js/Characters/Bowman.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Bowman; }\n/* harmony export */ });\n/* harmony import */ var _Character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Character */ \"./src/js/Character.js\");\n\nclass Bowman extends _Character__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(level) {\n    let type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'bowman';\n    super(level, type);\n    this.attack = 25;\n    this.defence = 25;\n    this.distance = 2;\n    this.attackRange = 2;\n  }\n\n}\n\n//# sourceURL=webpack://ajs_diploma/./src/js/Characters/Bowman.js?");

/***/ }),

/***/ "./src/js/Characters/Daemon.js":
/*!*************************************!*\
  !*** ./src/js/Characters/Daemon.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Daemon; }\n/* harmony export */ });\n/* harmony import */ var _Character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Character */ \"./src/js/Character.js\");\n\nclass Daemon extends _Character__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(level) {\n    let type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'daemon';\n    super(level, type);\n    this.attack = 10;\n    this.defence = 40;\n    this.distance = 1;\n    this.attackRange = 4;\n  }\n\n}\n\n//# sourceURL=webpack://ajs_diploma/./src/js/Characters/Daemon.js?");

/***/ }),

/***/ "./src/js/Characters/Magician.js":
/*!***************************************!*\
  !*** ./src/js/Characters/Magician.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Magician; }\n/* harmony export */ });\n/* harmony import */ var _Character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Character */ \"./src/js/Character.js\");\n\nclass Magician extends _Character__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(level) {\n    let type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'magician';\n    super(level, type);\n    this.attack = 10;\n    this.defence = 40;\n    this.distance = 1;\n    this.attackRange = 4;\n  }\n\n}\n\n//# sourceURL=webpack://ajs_diploma/./src/js/Characters/Magician.js?");

/***/ }),

/***/ "./src/js/Characters/Swordsman.js":
/*!****************************************!*\
  !*** ./src/js/Characters/Swordsman.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Swordsman; }\n/* harmony export */ });\n/* harmony import */ var _Character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Character */ \"./src/js/Character.js\");\n\nclass Swordsman extends _Character__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(level) {\n    let type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'swordsman';\n    super(level, type);\n    this.attack = 40;\n    this.defence = 10;\n    this.distance = 4;\n    this.attackRange = 1;\n  }\n\n}\n\n//# sourceURL=webpack://ajs_diploma/./src/js/Characters/Swordsman.js?");

/***/ }),

/***/ "./src/js/Characters/Undead.js":
/*!*************************************!*\
  !*** ./src/js/Characters/Undead.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Undead; }\n/* harmony export */ });\n/* harmony import */ var _Character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Character */ \"./src/js/Character.js\");\n\nclass Undead extends _Character__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(level) {\n    let type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'undead';\n    super(level, type);\n    this.attack = 40;\n    this.defence = 10;\n    this.distance = 4;\n    this.attackRange = 1;\n  }\n\n}\n\n//# sourceURL=webpack://ajs_diploma/./src/js/Characters/Undead.js?");

/***/ }),

/***/ "./src/js/Characters/Vampire.js":
/*!**************************************!*\
  !*** ./src/js/Characters/Vampire.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Vampire; }\n/* harmony export */ });\n/* harmony import */ var _Character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Character */ \"./src/js/Character.js\");\n\nclass Vampire extends _Character__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(level) {\n    let type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'vampire';\n    super(level, type);\n    this.attack = 25;\n    this.defence = 25;\n    this.distance = 2;\n    this.attackRange = 2;\n  }\n\n}\n\n//# sourceURL=webpack://ajs_diploma/./src/js/Characters/Vampire.js?");

/***/ }),

/***/ "./src/js/GameController.js":
/*!**********************************!*\
  !*** ./src/js/GameController.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GameController; }\n/* harmony export */ });\n/* harmony import */ var _Characters_Bowman__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Characters/Bowman */ \"./src/js/Characters/Bowman.js\");\n/* harmony import */ var _Characters_Swordsman__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Characters/Swordsman */ \"./src/js/Characters/Swordsman.js\");\n/* harmony import */ var _Characters_Magician__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Characters/Magician */ \"./src/js/Characters/Magician.js\");\n/* harmony import */ var _Characters_Daemon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Characters/Daemon */ \"./src/js/Characters/Daemon.js\");\n/* harmony import */ var _Characters_Undead__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Characters/Undead */ \"./src/js/Characters/Undead.js\");\n/* harmony import */ var _Characters_Vampire__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Characters/Vampire */ \"./src/js/Characters/Vampire.js\");\n/* harmony import */ var _generators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./generators */ \"./src/js/generators.js\");\n/* harmony import */ var _PositionedCharacter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PositionedCharacter */ \"./src/js/PositionedCharacter.js\");\n/* harmony import */ var _Team__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Team */ \"./src/js/Team.js\");\n/* harmony import */ var _themes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./themes */ \"./src/js/themes.js\");\n/* harmony import */ var _cursors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cursors */ \"./src/js/cursors.js\");\n/* harmony import */ var _GameState__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./GameState */ \"./src/js/GameState.js\");\n/* harmony import */ var _GamePlay__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./GamePlay */ \"./src/js/GamePlay.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst userPosition = [0, 1, 8, 9, 16, 17, 24, 25, 32, 33, 40, 41, 48, 49, 56, 57];\nconst botPosition = [6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55, 62, 63];\nconst userPerson = [_Characters_Bowman__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _Characters_Swordsman__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _Characters_Magician__WEBPACK_IMPORTED_MODULE_2__[\"default\"]];\nconst botPerson = [_Characters_Daemon__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _Characters_Undead__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _Characters_Vampire__WEBPACK_IMPORTED_MODULE_5__[\"default\"]];\nclass GameController {\n  constructor(gamePlay, stateService) {\n    this.gamePlay = gamePlay;\n    this.stateService = stateService;\n    this.userTeam = new _Team__WEBPACK_IMPORTED_MODULE_8__[\"default\"]();\n    this.botTeam = new _Team__WEBPACK_IMPORTED_MODULE_8__[\"default\"]();\n    this.players = [];\n    this.counter = 0;\n    this.indexChar = null;\n    this.indexCursor = null;\n    this.levelGame = 1;\n    this.points = 0;\n    this.pointsAll = [];\n  }\n\n  init() {\n    // TODO: add event listeners to gamePlay events\n    // TODO: load saved stated from stateService\n    this.gamePlay.drawUi(_themes__WEBPACK_IMPORTED_MODULE_9__[\"default\"].prairie);\n    this.userTeam.addAll(...(0,_generators__WEBPACK_IMPORTED_MODULE_6__.generateTeam)([_Characters_Bowman__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _Characters_Swordsman__WEBPACK_IMPORTED_MODULE_1__[\"default\"]], 1, 2));\n    this.botTeam.addAll(...(0,_generators__WEBPACK_IMPORTED_MODULE_6__.generateTeam)(botPerson, 1, 2));\n    this.getCommand(this.userTeam, userPosition);\n    this.getCommand(this.botTeam, botPosition);\n    this.gamePlay.redrawPositions(this.players);\n    this.gamePlay.addCellEnterListener(this.onCellEnter.bind(this));\n    this.gamePlay.addCellLeaveListener(this.onCellLeave.bind(this));\n    this.gamePlay.addCellClickListener(this.onCellClick.bind(this));\n    this.gamePlay.addNewGameListener(this.onNewGameClick.bind(this));\n    this.gamePlay.addSaveGameListener(this.onSaveGameClick.bind(this));\n    this.gamePlay.addLoadGameListener(this.onLoadGameClick.bind(this));\n  }\n\n  getRandomPosition(positions) {\n    let pos = positions[Math.floor(Math.random() * positions.length)];\n\n    while (this.checkRandomPosition(pos)) {\n      pos = positions[Math.floor(Math.random() * positions.length)];\n    }\n\n    return pos;\n  }\n\n  checkRandomPosition(pos) {\n    return this.players.some(item => item.position === pos);\n  }\n\n  findChar(index) {\n    return this.players.find(item => item.position === index);\n  }\n\n  getCommand(team, positions) {\n    for (const item of team) {\n      this.players.push(new _PositionedCharacter__WEBPACK_IMPORTED_MODULE_7__[\"default\"](item, this.getRandomPosition(positions)));\n    }\n  }\n\n  checkMove(indexChar, index, char) {\n    const arr = this.calculateMove(indexChar, char);\n    return arr.includes(index);\n  }\n\n  calculateMove(indexChar, char) {\n    const dist = char.character.distance;\n    const field = this.gamePlay.boardSize;\n    const left = [0, 8, 16, 24, 32, 40, 48, 56];\n    const right = [7, 15, 23, 31, 39, 47, 55, 63];\n    const result = [];\n\n    for (let i = 1; i <= dist; i += 1) {\n      result.push(indexChar + field * i);\n      result.push(indexChar - field * i);\n    }\n\n    for (let i = 1; i <= dist; i += 1) {\n      if (left.includes(indexChar)) {\n        break;\n      }\n\n      result.push(indexChar - i);\n      result.push(indexChar - (field * i + i));\n      result.push(indexChar + (field * i - i));\n\n      if (left.includes(indexChar - i)) {\n        break;\n      }\n    }\n\n    for (let i = 1; i <= dist; i += 1) {\n      if (right.includes(indexChar)) {\n        break;\n      }\n\n      result.push(indexChar + i);\n      result.push(indexChar - (field * i - i));\n      result.push(indexChar + (field * i + i));\n\n      if (right.includes(indexChar + i)) {\n        break;\n      }\n    }\n\n    return result.filter(value => value >= 0 && value <= 63);\n  }\n\n  checkAttack(indexChar, index, char) {\n    const arr = this.calculateAttack(indexChar, char);\n    return arr.includes(index);\n  }\n\n  calculateAttack(indexChar, char) {\n    const dist = char.character.attackRange;\n    const field = this.gamePlay.boardSize;\n    const left = [0, 8, 16, 24, 32, 40, 48, 56];\n    const right = [7, 15, 23, 31, 39, 47, 55, 63];\n    const result = [];\n\n    for (let i = 1; i <= dist; i += 1) {\n      result.push(indexChar + field * i);\n      result.push(indexChar - field * i);\n    }\n\n    for (let i = 1; i <= dist; i += 1) {\n      if (left.includes(indexChar)) {\n        break;\n      }\n\n      result.push(indexChar - i);\n\n      for (let j = 1; j <= dist; j += 1) {\n        result.push(indexChar - i + field * j);\n        result.push(indexChar - i - field * j);\n      }\n\n      if (left.includes(indexChar - i)) {\n        break;\n      }\n    }\n\n    for (let i = 1; i <= dist; i += 1) {\n      if (right.includes(indexChar)) {\n        break;\n      }\n\n      result.push(indexChar + i);\n\n      for (let j = 1; j <= dist; j += 1) {\n        result.push(indexChar + i + field * j);\n        result.push(indexChar + i - field * j);\n      }\n\n      if (right.includes(indexChar + i)) {\n        break;\n      }\n    }\n\n    return result.filter(value => value >= 0 && value <= 63);\n  }\n\n  checkWin() {\n    if (this.levelGame === 4 && this.botTeam.members.size === 0) {\n      this.scoring();\n      this.pointsAll.push(this.points);\n      _GamePlay__WEBPACK_IMPORTED_MODULE_12__[\"default\"].showMessage(`YOU WIN!!! Total points ${this.points}, Record points ${Math.max(this.pointsAll)}`);\n      this.levelGame += 1;\n    }\n\n    if (this.botTeam.members.size === 0 && this.levelGame <= 3) {\n      this.levelGame += 1;\n      _GamePlay__WEBPACK_IMPORTED_MODULE_12__[\"default\"].showMessage(`Level ${this.levelGame}!`);\n      this.scoring();\n      this.getLevelUp();\n    }\n\n    if (this.userTeam.members.size === 0) {\n      this.pointsAll.push(this.ponts);\n      _GamePlay__WEBPACK_IMPORTED_MODULE_12__[\"default\"].showMessage(`YOU LOSE! Total points ${this.points}, Record points ${Math.max(this.pointsAll)}`);\n    }\n  }\n\n  getLevelUp() {\n    this.players = [];\n    this.userTeam.members.forEach(char => char.levelUp());\n\n    if (this.levelGame === 2) {\n      this.gamePlay.drawUi(_themes__WEBPACK_IMPORTED_MODULE_9__[\"default\"].desert);\n      this.userTeam.addAll(...(0,_generators__WEBPACK_IMPORTED_MODULE_6__.generateTeam)(userPerson, 1, 1));\n      this.botTeam.addAll(...(0,_generators__WEBPACK_IMPORTED_MODULE_6__.generateTeam)(botPerson, 2, this.userTeam.members.size));\n    }\n\n    if (this.levelGame === 3) {\n      this.gamePlay.drawUi(_themes__WEBPACK_IMPORTED_MODULE_9__[\"default\"].arctic);\n      this.userTeam.addAll(...(0,_generators__WEBPACK_IMPORTED_MODULE_6__.generateTeam)(userPerson, 2, 2));\n      this.botTeam.addAll(...(0,_generators__WEBPACK_IMPORTED_MODULE_6__.generateTeam)(botPerson, 3, this.userTeam.members.size));\n    }\n\n    if (this.levelGame === 4) {\n      this.gamePlay.drawUi(_themes__WEBPACK_IMPORTED_MODULE_9__[\"default\"].mountain);\n      this.userTeam.addAll(...(0,_generators__WEBPACK_IMPORTED_MODULE_6__.generateTeam)(userPerson, 3, 2));\n      this.botTeam.addAll(...(0,_generators__WEBPACK_IMPORTED_MODULE_6__.generateTeam)(botPerson, 4, this.userTeam.members.size));\n    }\n\n    this.getCommand(this.userTeam, userPosition);\n    this.getCommand(this.botTeam, botPosition);\n    this.gamePlay.redrawPositions(this.players);\n  }\n\n  enterAttack(index) {\n    const attacker = this.findChar(this.indexChar).character;\n    const target = this.findChar(index).character;\n    const damage = Math.max(attacker.attack - target.defence, attacker.attack * 0.1);\n    this.gamePlay.showDamage(index, damage).then(() => {\n      target.health -= damage;\n\n      if (target.health <= 0) {\n        this.players.splice(this.players.indexOf(this.findChar(index)), 1);\n        this.userTeam.delete(target);\n        this.botTeam.delete(target);\n      }\n    }).then(() => {\n      this.gamePlay.redrawPositions(this.players);\n      this.checkWin();\n      this.botPlaying();\n    }).catch(err => {\n      _GamePlay__WEBPACK_IMPORTED_MODULE_12__[\"default\"].showError(err);\n    });\n  }\n\n  scoring() {\n    this.points += this.userTeam.toArray().reduce((a, b) => a + b.health, 0);\n  }\n\n  botPlaying() {\n    if (this.counter !== 1 || this.botTeam.members.size === 0) {\n      return;\n    }\n\n    const botCommand = this.players.filter(item => item.character instanceof _Characters_Vampire__WEBPACK_IMPORTED_MODULE_5__[\"default\"] || item.character instanceof _Characters_Daemon__WEBPACK_IMPORTED_MODULE_3__[\"default\"] || item.character instanceof _Characters_Undead__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n    const userCommand = this.players.filter(item => item.character instanceof _Characters_Bowman__WEBPACK_IMPORTED_MODULE_0__[\"default\"] || item.character instanceof _Characters_Swordsman__WEBPACK_IMPORTED_MODULE_1__[\"default\"] || item.character instanceof _Characters_Magician__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n    let bot = null;\n    let target = null;\n    botCommand.forEach(item => {\n      const botAttack = this.calculateAttack(item.position, item);\n      userCommand.forEach(val => {\n        if (botAttack.includes(val.position)) {\n          bot = item;\n          target = val;\n        }\n      });\n    });\n\n    if (target) {\n      // eslint-disable-next-line max-len\n      const damage = Math.max(bot.character.attack - target.character.defence, bot.character.attack * 0.1);\n      this.gamePlay.showDamage(target.position, damage).then(() => {\n        target.character.health -= damage;\n\n        if (target.character.health <= 0) {\n          this.players.splice(this.players.indexOf(this.findChar(target.position)), 1);\n          this.userTeam.delete(target.character);\n          this.botTeam.delete(target.character);\n        }\n      }).then(() => {\n        this.gamePlay.redrawPositions(this.players);\n        this.checkWin();\n      }).catch(err => {\n        _GamePlay__WEBPACK_IMPORTED_MODULE_12__[\"default\"].showError(err);\n      });\n    } else {\n      bot = botCommand[Math.floor(Math.random() * botCommand.length)];\n      const botMove = this.calculateMove(bot.position, bot);\n      this.findChar(bot.position).position = this.getRandomPosition(botMove);\n      this.gamePlay.redrawPositions(this.players);\n    }\n\n    this.counter = 0;\n  }\n\n  onNewGameClick() {\n    this.userTeam = new _Team__WEBPACK_IMPORTED_MODULE_8__[\"default\"]();\n    this.botTeam = new _Team__WEBPACK_IMPORTED_MODULE_8__[\"default\"]();\n    this.players = [];\n    this.counter = 0;\n    this.indexChar = null;\n    this.indexCursor = null;\n    this.levelGame = 1;\n    this.points = 0;\n    this.gamePlay.drawUi(_themes__WEBPACK_IMPORTED_MODULE_9__[\"default\"].prairie);\n    this.userTeam.addAll(...(0,_generators__WEBPACK_IMPORTED_MODULE_6__.generateTeam)([_Characters_Bowman__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _Characters_Swordsman__WEBPACK_IMPORTED_MODULE_1__[\"default\"]], 1, 2));\n    this.botTeam.addAll(...(0,_generators__WEBPACK_IMPORTED_MODULE_6__.generateTeam)(botPerson, 1, 2));\n    this.getCommand(this.userTeam, userPosition);\n    this.getCommand(this.botTeam, botPosition);\n    this.gamePlay.redrawPositions(this.players);\n  }\n\n  onSaveGameClick() {\n    const savedGame = {\n      command: this.players,\n      levelGame: this.levelGame,\n      counter: this.counter,\n      points: this.points,\n      pointsAll: this.pointsAll\n    };\n    this.stateService.save(_GameState__WEBPACK_IMPORTED_MODULE_11__[\"default\"].from(savedGame));\n    _GamePlay__WEBPACK_IMPORTED_MODULE_12__[\"default\"].showMessage('GAME SAVED');\n  }\n\n  onLoadGameClick() {\n    _GamePlay__WEBPACK_IMPORTED_MODULE_12__[\"default\"].showMessage('LOADING...');\n    const load = this.stateService.load();\n    this.levelGame = load.levelGame;\n    this.counter = load.counter;\n    this.points = load.points;\n    this.pointsAll = load.pointsAll;\n    this.userTeam = new _Team__WEBPACK_IMPORTED_MODULE_8__[\"default\"]();\n    this.botTeam = new _Team__WEBPACK_IMPORTED_MODULE_8__[\"default\"]();\n    this.players = load.command.map(item => {\n      let char;\n      const {\n        character: {\n          level,\n          type,\n          health,\n          attack,\n          defence\n        },\n        position\n      } = item;\n\n      switch (type) {\n        case 'bowman':\n          char = new _Characters_Bowman__WEBPACK_IMPORTED_MODULE_0__[\"default\"](level);\n          break;\n\n        case 'swordsman':\n          char = new _Characters_Swordsman__WEBPACK_IMPORTED_MODULE_1__[\"default\"](level);\n          break;\n\n        case 'magician':\n          char = new _Characters_Magician__WEBPACK_IMPORTED_MODULE_2__[\"default\"](level);\n          break;\n\n        case 'vampire':\n          char = new _Characters_Vampire__WEBPACK_IMPORTED_MODULE_5__[\"default\"](level);\n          break;\n\n        case 'undead':\n          char = new _Characters_Undead__WEBPACK_IMPORTED_MODULE_4__[\"default\"](level);\n          break;\n\n        default:\n          char = new _Characters_Daemon__WEBPACK_IMPORTED_MODULE_3__[\"default\"](level);\n      }\n\n      char.health = health;\n      char.attack = attack;\n      char.defence = defence;\n\n      if (type === 'bowman' || type === 'swordsman' || type === 'magician') {\n        this.userTeam.add(char);\n      } else {\n        this.botTeam.add(char);\n      }\n\n      return new _PositionedCharacter__WEBPACK_IMPORTED_MODULE_7__[\"default\"](char, position);\n    });\n\n    switch (this.levelGame) {\n      case 1:\n        this.gamePlay.drawUi(_themes__WEBPACK_IMPORTED_MODULE_9__[\"default\"].prairie);\n        break;\n\n      case 2:\n        this.gamePlay.drawUi(_themes__WEBPACK_IMPORTED_MODULE_9__[\"default\"].desert);\n        break;\n\n      case 3:\n        this.gamePlay.drawUi(_themes__WEBPACK_IMPORTED_MODULE_9__[\"default\"].arctic);\n        break;\n\n      default:\n        this.gamePlay.drawUi(_themes__WEBPACK_IMPORTED_MODULE_9__[\"default\"].mountain);\n        break;\n    }\n\n    this.gamePlay.redrawPositions(this.players);\n  }\n\n  onCellClick(index) {\n    if (this.levelGame === 5 || this.userTeam.members.size === 0) {\n      return;\n    }\n\n    if (this.counter === 1) {\n      _GamePlay__WEBPACK_IMPORTED_MODULE_12__[\"default\"].showMessage('Its not you turn!');\n      return;\n    }\n\n    if (this.findChar(index)) {\n      if (userPerson.some(item => this.findChar(index).character instanceof item)) {\n        if (this.indexChar === null) {\n          this.indexChar = index;\n        } else {\n          this.gamePlay.deselectCell(this.indexChar);\n          this.gamePlay.deselectCell(this.indexCursor);\n        }\n\n        this.gamePlay.setCursor(_cursors__WEBPACK_IMPORTED_MODULE_10__[\"default\"].pointer);\n        this.gamePlay.selectCell(index);\n        this.indexChar = index;\n      } else if (this.indexChar === null) {\n        _GamePlay__WEBPACK_IMPORTED_MODULE_12__[\"default\"].showError('Its not you Character');\n      }\n    }\n\n    if (this.indexChar !== null) {\n      if (this.checkMove(this.indexChar, index, this.findChar(this.indexChar)) && !this.findChar(index)) {\n        this.findChar(this.indexChar).position = index;\n        this.gamePlay.deselectCell(this.indexChar);\n        this.gamePlay.deselectCell(this.indexCursor);\n        this.indexChar = null;\n        this.counter = 1;\n        this.gamePlay.redrawPositions(this.players);\n        this.botPlaying();\n      }\n\n      if (this.findChar(index) && botPerson.some(item => this.findChar(index).character instanceof item) && this.checkAttack(this.indexChar, index, this.findChar(this.indexChar))) {\n        this.enterAttack(index);\n        this.gamePlay.deselectCell(this.indexChar);\n        this.gamePlay.deselectCell(this.indexCursor);\n        this.indexChar = null;\n        this.counter = 1;\n        this.gamePlay.setCursor(_cursors__WEBPACK_IMPORTED_MODULE_10__[\"default\"].auto);\n      }\n\n      if (this.indexChar !== index && this.gamePlay.boardEl.style.cursor === 'not-allowed') {\n        _GamePlay__WEBPACK_IMPORTED_MODULE_12__[\"default\"].showMessage('Action not allowed!');\n      }\n    } // TODO: react to click\n\n  }\n\n  onCellEnter(index) {\n    if (this.findChar(index)) {\n      const char = this.findChar(index).character;\n      const message = `\\u{1F396}${char.level}\\u{2694}${char.attack}\\u{1F6E1}${char.defence}\\u{2764}${char.health}`;\n      this.gamePlay.showCellTooltip(message, index);\n    } // TODO: react to mouse enter\n\n\n    if (this.indexChar !== null) {\n      this.gamePlay.setCursor(_cursors__WEBPACK_IMPORTED_MODULE_10__[\"default\"].notallowed);\n\n      if (this.indexCursor === null) {\n        this.indexCursor = index;\n      } else if (this.indexChar !== this.indexCursor) {\n        this.gamePlay.deselectCell(this.indexCursor);\n      }\n\n      if (this.findChar(index) && userPerson.some(item => this.findChar(index).character instanceof item)) {\n        this.gamePlay.setCursor(_cursors__WEBPACK_IMPORTED_MODULE_10__[\"default\"].pointer);\n      }\n\n      if (this.indexChar !== index) {\n        if (!this.findChar(index) && this.checkMove(this.indexChar, index, this.findChar(this.indexChar))) {\n          this.gamePlay.selectCell(index, 'green');\n          this.gamePlay.setCursor(_cursors__WEBPACK_IMPORTED_MODULE_10__[\"default\"].pointer);\n          this.indexCursor = index;\n        }\n\n        if (this.findChar(index) && botPerson.some(item => this.findChar(index).character instanceof item) && this.checkAttack(this.indexChar, index, this.findChar(this.indexChar))) {\n          this.gamePlay.setCursor(_cursors__WEBPACK_IMPORTED_MODULE_10__[\"default\"].crosshair);\n          this.gamePlay.selectCell(index, 'red');\n          this.indexCursor = index;\n        }\n      }\n    } else {\n      this.gamePlay.setCursor(_cursors__WEBPACK_IMPORTED_MODULE_10__[\"default\"].auto);\n    }\n  }\n\n  onCellLeave(index) {\n    this.gamePlay.hideCellTooltip(index); // TODO: react to mouse leave\n  }\n\n}\n\n//# sourceURL=webpack://ajs_diploma/./src/js/GameController.js?");

/***/ }),

/***/ "./src/js/GamePlay.js":
/*!****************************!*\
  !*** ./src/js/GamePlay.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GamePlay; }\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/js/utils.js\");\n/* eslint-disable no-restricted-syntax */\n\nclass GamePlay {\n  constructor() {\n    this.boardSize = 8;\n    this.container = null;\n    this.boardEl = null;\n    this.cells = [];\n    this.cellClickListeners = [];\n    this.cellEnterListeners = [];\n    this.cellLeaveListeners = [];\n    this.newGameListeners = [];\n    this.saveGameListeners = [];\n    this.loadGameListeners = [];\n  }\n\n  bindToDOM(container) {\n    if (!(container instanceof HTMLElement)) {\n      throw new Error('container is not HTMLElement');\n    }\n\n    this.container = container;\n  }\n  /**\n   * Draws boardEl with specific theme\n   *\n   * @param theme\n   */\n\n\n  drawUi(theme) {\n    this.checkBinding();\n    this.container.innerHTML = `\n      <div class=\"controls\">\n        <button data-id=\"action-restart\" class=\"btn\">New Game</button>\n        <button data-id=\"action-save\" class=\"btn\">Save Game</button>\n        <button data-id=\"action-load\" class=\"btn\">Load Game</button>\n      </div>\n      <div class=\"board-container\">\n        <div data-id=\"board\" class=\"board\"></div>\n      </div>\n    `;\n    this.newGameEl = this.container.querySelector('[data-id=action-restart]');\n    this.saveGameEl = this.container.querySelector('[data-id=action-save]');\n    this.loadGameEl = this.container.querySelector('[data-id=action-load]');\n    this.newGameEl.addEventListener('click', event => this.onNewGameClick(event));\n    this.saveGameEl.addEventListener('click', event => this.onSaveGameClick(event));\n    this.loadGameEl.addEventListener('click', event => this.onLoadGameClick(event));\n    this.boardEl = this.container.querySelector('[data-id=board]');\n    this.boardEl.classList.add(theme);\n\n    for (let i = 0; i < this.boardSize ** 2; i += 1) {\n      const cellEl = document.createElement('div');\n      cellEl.classList.add('cell', 'map-tile', `map-tile-${(0,_utils__WEBPACK_IMPORTED_MODULE_0__.calcTileType)(i, this.boardSize)}`);\n      cellEl.addEventListener('mouseenter', event => this.onCellEnter(event));\n      cellEl.addEventListener('mouseleave', event => this.onCellLeave(event));\n      cellEl.addEventListener('click', event => this.onCellClick(event));\n      this.boardEl.appendChild(cellEl);\n    }\n\n    this.cells = Array.from(this.boardEl.children);\n  }\n  /**\n   * Draws positions (with chars) on boardEl\n   *\n   * @param positions array of PositionedCharacter objects\n   */\n\n\n  redrawPositions(positions) {\n    for (const cell of this.cells) {\n      cell.innerHTML = '';\n    }\n\n    for (const position of positions) {\n      const cellEl = this.boardEl.children[position.position];\n      const charEl = document.createElement('div');\n      charEl.classList.add('character', position.character.type);\n      const healthEl = document.createElement('div');\n      healthEl.classList.add('health-level');\n      const healthIndicatorEl = document.createElement('div');\n      healthIndicatorEl.classList.add('health-level-indicator', `health-level-indicator-${(0,_utils__WEBPACK_IMPORTED_MODULE_0__.calcHealthLevel)(position.character.health)}`);\n      healthIndicatorEl.style.width = `${position.character.health}%`;\n      healthEl.appendChild(healthIndicatorEl);\n      charEl.appendChild(healthEl);\n      cellEl.appendChild(charEl);\n    }\n  }\n  /**\n   * Add listener to mouse enter for cell\n   *\n   * @param callback\n   */\n\n\n  addCellEnterListener(callback) {\n    this.cellEnterListeners.push(callback);\n  }\n  /**\n   * Add listener to mouse leave for cell\n   *\n   * @param callback\n   */\n\n\n  addCellLeaveListener(callback) {\n    this.cellLeaveListeners.push(callback);\n  }\n  /**\n   * Add listener to mouse click for cell\n   *\n   * @param callback\n   */\n\n\n  addCellClickListener(callback) {\n    this.cellClickListeners.push(callback);\n  }\n  /**\n   * Add listener to \"New Game\" button click\n   *\n   * @param callback\n   */\n\n\n  addNewGameListener(callback) {\n    this.newGameListeners.push(callback);\n  }\n  /**\n   * Add listener to \"Save Game\" button click\n   *\n   * @param callback\n   */\n\n\n  addSaveGameListener(callback) {\n    this.saveGameListeners.push(callback);\n  }\n  /**\n   * Add listener to \"Load Game\" button click\n   *\n   * @param callback\n   */\n\n\n  addLoadGameListener(callback) {\n    this.loadGameListeners.push(callback);\n  }\n\n  onCellEnter(event) {\n    event.preventDefault();\n    const index = this.cells.indexOf(event.currentTarget);\n    this.cellEnterListeners.forEach(o => o.call(null, index));\n  }\n\n  onCellLeave(event) {\n    event.preventDefault();\n    const index = this.cells.indexOf(event.currentTarget);\n    this.cellLeaveListeners.forEach(o => o.call(null, index));\n  }\n\n  onCellClick(event) {\n    const index = this.cells.indexOf(event.currentTarget);\n    this.cellClickListeners.forEach(o => o.call(null, index));\n  }\n\n  onNewGameClick(event) {\n    event.preventDefault();\n    this.newGameListeners.forEach(o => o.call(null));\n  }\n\n  onSaveGameClick(event) {\n    event.preventDefault();\n    this.saveGameListeners.forEach(o => o.call(null));\n  }\n\n  onLoadGameClick(event) {\n    event.preventDefault();\n    this.loadGameListeners.forEach(o => o.call(null));\n  }\n\n  static showError(message) {\n    // eslint-disable-next-line no-alert\n    alert(message);\n  }\n\n  static showMessage(message) {\n    // eslint-disable-next-line no-alert\n    alert(message);\n  }\n\n  selectCell(index) {\n    let color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'yellow';\n    this.deselectCell(index);\n    this.cells[index].classList.add('selected', `selected-${color}`);\n  }\n\n  deselectCell(index) {\n    const cell = this.cells[index];\n    cell.classList.remove(...Array.from(cell.classList).filter(o => o.startsWith('selected')));\n  }\n\n  showCellTooltip(message, index) {\n    this.cells[index].title = message;\n  }\n\n  hideCellTooltip(index) {\n    this.cells[index].title = '';\n  }\n\n  showDamage(index, damage) {\n    return new Promise(resolve => {\n      const cell = this.cells[index];\n      const damageEl = document.createElement('span');\n      damageEl.textContent = damage;\n      damageEl.classList.add('damage');\n      cell.appendChild(damageEl);\n      damageEl.addEventListener('animationend', () => {\n        cell.removeChild(damageEl);\n        resolve();\n      });\n    });\n  }\n\n  setCursor(cursor) {\n    this.boardEl.style.cursor = cursor;\n  }\n\n  checkBinding() {\n    if (this.container === null) {\n      throw new Error('GamePlay not bind to DOM');\n    }\n  }\n\n}\n\n//# sourceURL=webpack://ajs_diploma/./src/js/GamePlay.js?");

/***/ }),

/***/ "./src/js/GameState.js":
/*!*****************************!*\
  !*** ./src/js/GameState.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GameState; }\n/* harmony export */ });\nclass GameState {\n  static from(object) {\n    // TODO: create object\n    return object;\n  }\n\n}\n\n//# sourceURL=webpack://ajs_diploma/./src/js/GameState.js?");

/***/ }),

/***/ "./src/js/GameStateService.js":
/*!************************************!*\
  !*** ./src/js/GameStateService.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GameStateService; }\n/* harmony export */ });\nclass GameStateService {\n  constructor(storage) {\n    this.storage = storage;\n  }\n\n  save(state) {\n    this.storage.setItem('state', JSON.stringify(state));\n  }\n\n  load() {\n    try {\n      return JSON.parse(this.storage.getItem('state'));\n    } catch (e) {\n      throw new Error('Invalid state');\n    }\n  }\n\n}\n\n//# sourceURL=webpack://ajs_diploma/./src/js/GameStateService.js?");

/***/ }),

/***/ "./src/js/PositionedCharacter.js":
/*!***************************************!*\
  !*** ./src/js/PositionedCharacter.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PositionedCharacter; }\n/* harmony export */ });\n/* harmony import */ var _Character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Character */ \"./src/js/Character.js\");\n\nclass PositionedCharacter {\n  constructor(character, position) {\n    if (!(character instanceof _Character__WEBPACK_IMPORTED_MODULE_0__[\"default\"])) {\n      throw new Error('character must be instance of Character or its children');\n    }\n\n    if (typeof position !== 'number') {\n      throw new Error('position must be a number');\n    }\n\n    this.character = character;\n    this.position = position;\n  }\n\n}\n\n//# sourceURL=webpack://ajs_diploma/./src/js/PositionedCharacter.js?");

/***/ }),

/***/ "./src/js/Team.js":
/*!************************!*\
  !*** ./src/js/Team.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Team; }\n/* harmony export */ });\n/* eslint-disable no-restricted-syntax */\nclass Team {\n  constructor() {\n    this.members = new Set();\n  }\n\n  add(data) {\n    if (this.members.has(data)) {\n      throw new Error('Такой персонаж уже есть в команде');\n    } else {\n      this.members.add(data);\n    }\n  }\n\n  addAll() {\n    for (var _len = arguments.length, data = new Array(_len), _key = 0; _key < _len; _key++) {\n      data[_key] = arguments[_key];\n    }\n\n    data.forEach(elem => {\n      this.members.add(elem);\n    });\n  }\n\n  delete(elem) {\n    this.members.delete(elem);\n  }\n\n  toArray() {\n    return Array.from(this.members);\n  }\n\n  *[Symbol.iterator]() {\n    for (const char of this.members) {\n      yield char;\n    }\n  }\n\n}\n\n//# sourceURL=webpack://ajs_diploma/./src/js/Team.js?");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _GamePlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GamePlay */ \"./src/js/GamePlay.js\");\n/* harmony import */ var _GameController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GameController */ \"./src/js/GameController.js\");\n/* harmony import */ var _GameStateService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GameStateService */ \"./src/js/GameStateService.js\");\n/**\n * Entry point of app: don't change this\n */\n\n\n\nconst gamePlay = new _GamePlay__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\ngamePlay.bindToDOM(document.querySelector('#game-container'));\nconst stateService = new _GameStateService__WEBPACK_IMPORTED_MODULE_2__[\"default\"](localStorage);\nconst gameCtrl = new _GameController__WEBPACK_IMPORTED_MODULE_1__[\"default\"](gamePlay, stateService);\ngameCtrl.init(); // don't write your code here\n\n//# sourceURL=webpack://ajs_diploma/./src/js/app.js?");

/***/ }),

/***/ "./src/js/cursors.js":
/*!***************************!*\
  !*** ./src/js/cursors.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst cursors = {\n  auto: 'auto',\n  pointer: 'pointer',\n  crosshair: 'crosshair',\n  notallowed: 'not-allowed'\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (cursors);\n\n//# sourceURL=webpack://ajs_diploma/./src/js/cursors.js?");

/***/ }),

/***/ "./src/js/generators.js":
/*!******************************!*\
  !*** ./src/js/generators.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"characterGenerator\": function() { return /* binding */ characterGenerator; },\n/* harmony export */   \"generateTeam\": function() { return /* binding */ generateTeam; }\n/* harmony export */ });\n/**\n * Generates random characters\n *\n * @param allowedTypes iterable of classes\n * @param maxLevel max character level\n * @returns Character type children (ex. Magician, Bowman, etc)\n */\nfunction levelGenerator(maxLevel) {\n  const max = maxLevel;\n  return Math.floor(Math.random() * max) + 1;\n}\n\nfunction* characterGenerator(allowedTypes, maxLevel) {\n  // TODO: write logic here\n  while (true) {\n    const n = Math.floor(Math.random() * allowedTypes.length);\n    yield new allowedTypes[n](levelGenerator(maxLevel));\n  }\n}\nfunction generateTeam(allowedTypes, maxLevel, characterCount) {\n  // TODO: write logic here\n  const team = [];\n  const character = characterGenerator(allowedTypes, maxLevel);\n\n  for (let i = 0; i < characterCount; i += 1) {\n    team.push(character.next(i).value);\n  }\n\n  return team;\n}\n\n//# sourceURL=webpack://ajs_diploma/./src/js/generators.js?");

/***/ }),

/***/ "./src/js/themes.js":
/*!**************************!*\
  !*** ./src/js/themes.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst themes = {\n  prairie: 'prairie',\n  desert: 'desert',\n  arctic: 'arctic',\n  mountain: 'mountain'\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (themes);\n\n//# sourceURL=webpack://ajs_diploma/./src/js/themes.js?");

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"calcTileType\": function() { return /* binding */ calcTileType; },\n/* harmony export */   \"calcHealthLevel\": function() { return /* binding */ calcHealthLevel; }\n/* harmony export */ });\nfunction calcTileType(index, boardSize) {\n  const board = ['top-left', ...Array(boardSize - 2).fill('top'), 'top-right', ...Array(boardSize - 2).fill(['left', ...Array(boardSize - 2).fill('center'), 'right']), 'bottom-left', ...Array(boardSize - 2).fill('bottom'), 'bottom-right'].flat();\n  return board[index];\n}\nfunction calcHealthLevel(health) {\n  if (health < 15) {\n    return 'critical';\n  }\n\n  if (health < 50) {\n    return 'normal';\n  }\n\n  return 'high';\n}\n\n//# sourceURL=webpack://ajs_diploma/./src/js/utils.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ (function() {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://ajs_diploma/./src/css/style.css?");

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
/******/ 			// no module.id needed
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
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
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