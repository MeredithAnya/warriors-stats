/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var Stats = __webpack_require__(1);
	var Quiz = __webpack_require__(2)
	__webpack_require__(3)

	if (Array.prototype.shuffle === undefined){
	  Array.prototype.shuffle = function() {
	    for (var i = 0; i < this.length; i++) {
	      var randIdx = Math.floor(Math.random() * this.length - i) + i;
	      var temp = this[i];
	      this[i] = this[randIdx];
	      this[randIdx] = temp;
	    }
	    return this;
	  };
	}

	var getStats = function(quizGame){
	  var players = quizGame.questions[quizGame.currentQ];
	  var playerName = "";
	  Object.keys(players).forEach(function(player){
	    if (players[player]){
	      playerName = player;
	    }
	  });
	  return Stats.names[playerName];
	}

	var displayStats = function(quizGame){
	  var stats = getStats(quizGame);

	  el = document.getElementById('stats');
	  Object.keys(stats).forEach(function(statName){
	    el = document.getElementById('stats');
	    newEl = document.createElement("li");
	    newEl.className += "stats-item";
	    var fullStat = Stats.fullStats[statName];
	    text = document.createTextNode(fullStat + ": "+ stats[statName]);
	    newEl.appendChild(text);
	    el.appendChild(newEl);
	  });
	}

	var start = function(quizGame){
	  displayStats(quizGame);
	  var count = 0;
	  el = document.getElementById('question');
	  Object.keys(quizGame.questions[0]).shuffle().forEach(function(name){
	    el = document.getElementById('question');
	    newEl = document.createElement("li");
	    newEl.className += "player" + count;
	    text = document.createTextNode(name);
	    newEl.appendChild(text);
	    el.appendChild(newEl);

	    count += 1;
	  });
	  checkGuess(quizGame);
	}

	var next = function(quizGame){
	  el = document.getElementById('question');
	  var child = document.getElementsByTagName('li');
	  if (child[0]) {
	    while (child[0]){
	      child[0].parentNode.removeChild(child[0]);
	    }
	  }

	  var num = quizGame.currentQ;
	  quizGame.currentQ = num + 1;
	  var count = 0;
	  displayStats(quizGame);

	  Object.keys(quizGame.questions[quizGame.currentQ]).shuffle().forEach(function(name){
	    el = document.getElementById('question');
	    newEl = document.createElement("li");
	    newEl.className += "player" + count;
	    text = document.createTextNode(name);
	    newEl.appendChild(text);
	    el.appendChild(newEl);

	    count += 1;
	  });
	}

	var clicked = function(e){
	  var quizGame = this;
	  var guess = e.target.innerHTML;
	  if (quizGame.currentQ < 12){
	    quizGame.checkGuess(guess);
	    next(quizGame);
	  } else {
	    endQuiz(quizGame);
	  }
	};

	var checkGuess = function(quizGame){
	  el = document.getElementById('question');
	  // el.addEventListener("click", clicked.bind(quizGame));
	  el.onclick = clicked.bind(quizGame);
	}

	var endQuiz = function(quizGame){
	  el = document.getElementById('question');
	  debugger;
	  // el.removeEventListener("click", clicked, false);
	  el.onclick = null;
	}

	document.addEventListener("DOMContentLoaded", function () {
	  var quizGame = new Quiz();
	  start(quizGame);

	});


/***/ },
/* 1 */
/***/ function(module, exports) {

	// function NBAPLayer(stats) {
	//   this.name = stats[name];
	//   this.fgp = stats[fgp];
	//   this.tpp = stats[tpp];
	//   this.ftp = stats[ftp];
	//   this.reb = stats[reb];
	//   this.ast = stats[ast];
	//   this.pts = stats[pts];
	// }
	rushStats = {
	  fgp: "45.0",
	  tpp: "33.3",
	  ftp: "50.0",
	  reb: "1.6",
	  ast: "0.2",
	  pts: "1.6"
	}

	speightsStats = {
	  fgp: "39.0",
	  tpp: "41.9",
	  ftp: "77.4",
	  reb: "2.0",
	  ast: "0.5",
	  pts: "5.6"
	}

	iguodalaStats = {
	  fgp: "47.6",
	  tpp: "38.5",
	  ftp: "56.1",
	  reb: "4.4",
	  ast: "3.8",
	  pts: "8.9"
	}

	thompsonStats = {
	  fgp: "44.4",
	  tpp: "42.2",
	  ftp: "85.4",
	  reb: "3.7",
	  ast: "2.3",
	  pts: "24.3"
	}

	varejaoStats = {
	  fgp: "35.7",
	  tpp: "0.00",
	  ftp: "52.6",
	  reb: "1.2",
	  ast: "0.8",
	  pts: "1.2"
	}

	barbosaStats = {
	  fgp: "58.0",
	  tpp: "39.3",
	  ftp: "76.2",
	  reb: "1.2",
	  ast: "0.7",
	  pts: "5.6"
	}
	mcadooStats = {
	  fgp: "50.0",
	  tpp: "0.00",
	  ftp: "25.0",
	  reb: "1.0",
	  ast: "0.3",
	  pts: "0.6"
	}
	clarkStats = {
	  fgp: "49.1",
	  tpp: "33.3",
	  ftp: "80.0",
	  reb: "1.1",
	  ast: "1.0",
	  pts: "4.1"
	}

	bogutStats = {
	  fgp: "62.3",
	  tpp: "0.00",
	  ftp: "35.7",
	  reb: "5.7",
	  ast: "1.4",
	  pts: "4.6"
	}

	curryStats = {
	  fgp: "43.8",
	  tpp: "40.4",
	  ftp: "91.6",
	  reb: "5.5",
	  ast: "5.2",
	  pts: "25.1"
	}
	ezeliStats = {
	  fgp: "53.6",
	  tpp: "0.00",
	  ftp: "43.2",
	  reb: "2.7",
	  ast: "0.3",
	  pts: "4.0"
	}
	livingstonStats = {
	  fgp: "48.8",
	  tpp: "0.00",
	  ftp: "86.5",
	  reb: "3.2",
	  ast: "3.3",
	  pts: "8.2"
	}

	barnesStats = {
	  fgp: "38.5",
	  tpp: "34.2",
	  ftp: "76.5",
	  reb: "4.7",
	  ast: "1.3",
	  pts: "9.0"
	}

	greenStats = {
	  fgp: "43.1",
	  tpp: "36.5",
	  ftp: "73.8",
	  reb: "9.9",
	  ast: "6.0",
	  pts: "15.4"
	}



	stats = {
	  "Andrew Bogut": bogutStats,
	  "Harrison Barnes": barnesStats,
	  "Draymond Green": greenStats,
	  "Stephen Curry": curryStats,
	  "Anderson Varejao": varejaoStats,
	  "Leandro Barbosa": barbosaStats,
	  "Klay Thompson": thompsonStats,
	  "Marreese Speights": speightsStats,
	  "Shaun Livingston": livingstonStats,
	  "Festus Ezeli": ezeliStats,
	  "Ian Clark": clarkStats,
	  "James Michael McAdoo": mcadooStats,
	  "Brandon Rush": rushStats,
	  "Andre Iguodala": iguodalaStats

	}
	fullStats = {
	  fgp: "FG%",
	  tpp: "TP%",
	  ftp: "FT%",
	  reb: "Rebounds",
	  ast: "Assists",
	  pts: "Points"
	}


	module.exports.names = stats;
	module.exports.fullStats = fullStats;


/***/ },
/* 2 */
/***/ function(module, exports) {

	var Quiz = function(){
	  this.questions = getQuestions();
	  this.points = 0;
	  this.currentQ = 0;
	}

	PLAYERS = {
	  1: "Stephen Curry",
	  2: "Draymond Green",
	  3: "Andrew Bogut",
	  4: "Andre Iguodala",
	  5: "Harrison Barnes",
	  6: "Klay Thompson",
	  7: "Ian Clark",
	  8: "Marreese Speights",
	  9: "Leandro Barbosa",
	  10: "Brandon Rush",
	  11: "Festus Ezeli",
	  12: "Shaun Livingston",
	  13: "Anderson Varejao"
	}

	if (Array.prototype.shuffle === undefined){
	  Array.prototype.shuffle = function() {
	    for (var i = 0; i < this.length; i++) {
	      var randIdx = Math.floor(Math.random() * this.length - i) + i;
	      var temp = this[i];
	      this[i] = this[randIdx];
	      this[randIdx] = temp;
	    }

	    return this;
	  };
	}

	function getQuestions(){
	  var questions = [];
	  Object.keys(PLAYERS).shuffle().forEach(function(playerNum){
	    questions.push(makeQuestion(playerNum));
	  });
	  return questions;
	}

	function makeQuestion(playerNum) {
	  var playerName = PLAYERS[playerNum];
	  var question = {}
	  question[playerName] = true;
	  var seenNumbers = [parseInt(playerNum)];
	  for (var i = 0; i < 3; i++) {
	    var num = Math.floor(Math.random() * (13 - 1)) + 1;
	    while (seenNumbers.indexOf(num) !== -1){
	      num = Math.floor(Math.random() * (13 - 1)) + 1;
	    }
	    question[PLAYERS[num]] = false;
	    seenNumbers.push(num);
	  }

	  return question;
	}

	Quiz.prototype.checkGuess = function(guess) {
	  var question = this.questions[this.currentQ];
	  if (question[guess] === true){
	    this.points += 1;
	    console.log("correct");
	  }
	  return this.points;
	};


	module.exports = Quiz;


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(4);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./node_modules/css-loader/index.js!./style.css", function() {
				var newContent = require("!!./node_modules/css-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, "#game {\n  width: 800px;\n  text-align: center;\n}\n\nul {\n  padding: 10px;\n  list-style: none;\n}\nli {\n  list-style: none;\n}\nli:hover {\n  cursor: pointer;\n}\nh1 {\n  text-align: center;\n}\n\n.quiz-container {\n  margin: 50px auto;\n  height: 70%;\n  width: 50%;\n}\n.question {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.player0, .player1, .player2, .player3 {\n  background-color: #0146AD;\n  color: #FEC235;\n  margin: 5px;\n  width: 50%;\n  padding: 10px;\n  font-size: 22px;\n}\n.player0:hover, .player1:hover, .player2:hover, .player3:hover {\n  color: \t#FFFEFF;\n}\n\n.stats-item {\n  font-size: 20px;\n  padding: 5px;\n  display: inline-block;\n}\n", ""]);

	// exports


/***/ },
/* 5 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ]);