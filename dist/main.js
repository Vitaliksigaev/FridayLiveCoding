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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_Article__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/Article */ \"./src/js/Article.js\");\n\n\n\nconst data = [\n    {\n        id: 1,\n        title: 'title1',\n        urlToImage: './src/img/srategies/3.jpg',\n        tags: ['Culture', 'Art', 'Design' ],\n        content: 'This is',\n        date: new Date(),\n    },\n    {\n        id: 2,\n        title: 'title2',\n        urlToImage: './src/img/srategies/3.jpg',\n        tags: ['Culture', 'Art', 'Design' ],\n        content: 'This is',\n        date: new Date(),\n    },\n    {\n        id: 3,\n        title: 'title3',\n        urlToImage: './src/img/srategies/3.jpg',\n        tags: ['Culture', 'Art', 'Design' ],\n        content: 'This is',\n        date: new Date(),\n    },\n\n]\n\n\n\n\nwindow.onload = function () {\n    console.log ('3');\n    // render\n    if(data){\n        renderArticlesToDom ();\n    }\n\n    addTagsClickHandler();\n}\n\nconst addTagsClickHandler = () => {\n    document.querySelector('.strategies__tags').addEventListener('click', (e) => {\n        // console.log(e);\n\n        if(e.target.classList.contains('tag')){\n            let clickedTag = e.target;\n            removeSelectedTags();\n            addSelectedTags(clickedTag);\n            if(clickedTag.innerHTML === 'All') {\n                showAllStrategies();\n            } else {\n                filterStrategyBySelectedTag(clickedTag.innerHTML);\n            }\n\n\n\n        }\n    })\n}\n\nconst removeSelectedTags = () => {\n    let tags = document.querySelectorAll('.strategies__tags .tag');\n    // console.log(tags);\n    tags.forEach(tag => {\n        tag.classList.remove('tag__selected');\n        tag.classList.add('tag__bordered');\n    })\n}\n\nconst addSelectedTags = (tag) => {\n    tag.classList.remove('tag__bordered');\n    tag.classList.add('tag__selected');\n}\n\nconst showAllStrategies = () => {\n    let strategies = document.querySelectorAll('.strategy-wrapper .strategy');\n    strategies.forEach(strategy => {\n        strategy.classList.remove('strategy_hidden');\n    })\n\n\n}\nconst filterStrategyBySelectedTag = (selectedTag) => {\n    let strategies = document.querySelectorAll('.strategy-wrapper .strategy');\n    // console.log(strategies);\n    strategies.forEach(strategy => {\n        // console.log(strategy);\n        strategy.classList.add('strategy_hidden');\n        strategy.querySelectorAll('.tag').forEach(tag => {\n            // console.log(tag.innerHTML);\n            // console.log(selectedTag);\n\n            // && !strategy.classList.contains('strategy_hidden')\n            if(tag.innerHTML === selectedTag) {\n                strategy.classList.remove('strategy_hidden');\n            }\n        })\n\n    })\n\n}\n\nconst renderArticlesToDom = () => {\n    const strategiesWrapper = getStrategiesWrapper();\n\n}\n\nconst getStrategiesWrapper = () => {\n    const strategiesContainer = document.querySelector('.strategy-wrapper');\n    strategiesContainer.innerHTML = '';\n    return strategiesContainer;\n}\n\nconst generateArticles = (data) => {\n    let articles = [];\n    data.forEach(item => {\n        articles.push(new _js_Article__WEBPACK_IMPORTED_MODULE_0__.Article(item));\n        }\n    )\n}\n\n//# sourceURL=webpack://fridaylivecoding/./src/index.js?");

/***/ }),

/***/ "./src/js/Article.js":
/*!***************************!*\
  !*** ./src/js/Article.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Article\": () => (/* binding */ Article)\n/* harmony export */ });\nclass Article {\n    constructor({id, title, urlToImage, tags, ...rest}) {\n        this.id = id;\n        this.title = title;\n        this.urlToImage = urlToImage;\n        this.tags = tags;\n        Object.assign(this, rest);\n    }\n\n    generateArticle() {\n        let template = '';\n        let article = document.createElement('article');\n        article.className = 'strategy block-shadowed';\n        article.setAttribute('data-id', this.id);\n\n        this.urlToImage &&\n        (template += `<img src='${this.urlToImage}' alt=\"bd cards\">`)\n        if(this.tags || this.title) {\n            template += `<div class=\"strategy__content\">`\n            this.title &&\n            (template += `<h3 class=\"strategy__name\">${this.title}</h3>`)\n            if(this.tags) {\n                template += `<div class=\"\">`\n\n                this.tags.map(tag => {\n                    template += `<span class=\"tag tag__colored\">${tag}</span>`\n                })\n\n                template += `</div>`\n            \n            }\n\n            template += `</div>`\n        }\n        article.innerHTML = template;\n        return article;\n    }\n}\n\n{/* <article class=\"strategy block-shadowed\">\n<img src=\"./src/img/strategies/pic-2.jpg\" alt=\"bd cards\">\n<div class=\"strategy__content\">\n    <h3 class=\"strategy__name\">Success Steps For Your Personal Or Business Life</h3>\n    <div class=\"\">\n        <span class = \"tag tag__colored\">Culture</span>\n        <span class = \"tag tag__colored\">Design</span>\n        <span class = \"tag tag__colored\">Art</span>\n    </div>\n</div>\n</article> */}\n\n//# sourceURL=webpack://fridaylivecoding/./src/js/Article.js?");

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