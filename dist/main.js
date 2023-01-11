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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_Article__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/Article */ \"./src/js/Article.js\");\n/* harmony import */ var _js_ArticleModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/ArticleModal */ \"./src/js/ArticleModal.js\");\n/* harmony import */ var _js_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/Modal */ \"./src/js/Modal.js\");\n\n\n\n\n\nconst data = [\n    {\n        id: 1,\n        title: 'title1',\n        urlToImage: './src/img/strategies/pic-5.jpg',\n        tags: ['Culture' ],\n        content: 'This is1This is1This is1This is1This is1This is1This is1This is1This is1This is1This is1This is1This is1This is1',\n        date: new Date(),\n    },\n    {\n        id: 2,\n        title: 'title2',\n        urlToImage: './src/img/strategies/pic-2.jpg',\n        tags: ['Art' ],\n        content: 'This is2This is2This is2This is2This is2This is2This is2This is2This is2This is2This is2This is2This is2This is2This is2This is2',\n        date: new Date(),\n    },\n    {\n        id: 3,\n        title: 'title3',\n        urlToImage: './src/img/strategies/pic-4.jpg',\n        tags: ['Design' ],\n        content: 'This is3This is3This is3This is3This is3This is3This is3This is3This is3This is3This is3This is3This is3This is3This is3',\n        date: new Date(),\n    },\n\n]\n\n\nconsole.log(data);\n\n\nwindow.onload = function () {\n    console.log ('3');\n    // render\n    if(data){\n        renderArticlesToDom ();\n    }\n\n    addTagsClickHandler();\n    addToolsClickHandler();\n}\n\nconst addTagsClickHandler = () => {\n    document.querySelector('.strategies__tags').addEventListener('click', (e) => {\n        if (e.target.classList.contains('tag')) {\n            let clickedTag = e.target;\n            removeSelectedTags();\n            selectClickedTag(clickedTag);\n            if (clickedTag.innerText === 'All') {\n                showAllStrategies();\n            } else {\n                filterStrategyBySelectedTag(clickedTag.innerText);\n            }\n        }\n    })\n}\n\nconst removeSelectedTags = () => {\n    let tags = document.querySelectorAll('.strategies__tags .tag');\n    tags.forEach(tag => {\n        tag.classList.remove('tag__selected');\n        tag.classList.add('tag__bordered');\n    })\n}\n\nconst selectClickedTag = (clickedTag) => {\n    clickedTag.classList.add('tag__selected');\n    clickedTag.classList.remove('tag__bordered');\n}\n\nconst showAllStrategies = () => {\n    let strategies = document.querySelectorAll('.strategy-wrapper .strategy');\n    strategies.forEach(strategy => {\n        strategy.classList.remove('strategy_hidden');\n    })\n}\n\nconst filterStrategyBySelectedTag = (selectedTag) => {\n    let strategies = document.querySelectorAll('.strategy-wrapper .strategy');\n    strategies.forEach(strategy => {\n        strategy.classList.add('strategy_hidden');\n        strategy.querySelectorAll('.tag').forEach(tag => {\n            if (tag.innerText === selectedTag) {\n                strategy.classList.remove('strategy_hidden');\n            }\n        })\n    })\n}\n\nconst renderArticlesToDom = () => {\n    let strategiesWrapper = getStrategiesWrapper();\n    generateArticles(data).forEach(article => {\n        strategiesWrapper.append(article.generateArticle())\n    })\n\n    addStrategyClickHandler();\n}\n\nconst getStrategiesWrapper = () => {\n    const strategiesConstainer = document.querySelector('.strategy-wrapper');\n    strategiesConstainer.innerHTML = '';\n    return strategiesConstainer\n}\n\nconst generateArticles = (data) => {\n    let articles = [];\n    data.forEach(article => {\n        articles.push(new _js_Article__WEBPACK_IMPORTED_MODULE_0__.Article(article))\n    });\n    return articles;\n}\n\nconst addToolsClickHandler = () => {\n    document.querySelector('.tools__button .button').addEventListener('click', () => {\n        generateToolsModal();\n    })\n}\n\nconst generateToolsModal = () => {\n    renderModalWindow('Test content for Tools Modal');\n}\n\nconst renderModalWindow = (content) => {\n    let modal =  new _js_Modal__WEBPACK_IMPORTED_MODULE_2__.Modal ('tools-modal');\n    modal.buildModal(content);\n}\n\nconst addStrategyClickHandler = () => {\n    document.querySelector('.strategy-wrapper').addEventListener('click', (e) => {\n        if (e.target.closest('.strategy')) {\n            let clickedStrategyId = e.target.closest('.strategy').getAttribute('data-id');\n            let clickedStrategyData = getClickedData(clickedStrategyId);\n\n            renderArticleModalWindow(clickedStrategyData);\n        }\n    })\n}\n\nconst getClickedData = (id) => {\n    return data.find(article => article.id == id)\n}\n\nconst renderArticleModalWindow = (article) => {\n    let modal =  new _js_ArticleModal__WEBPACK_IMPORTED_MODULE_1__.ArticleModal ('article-modal', article);\n    modal.renderModal();\n}\n\n// const addTagsClickHandler = () => {\n//     document.querySelector('.strategies__tags').addEventListener('click', (e) => {\n//         // console.log(e);\n\n//         if(e.target.classList.contains('tag')){\n//             let clickedTag = e.target;\n//             removeSelectedTags();\n//             addSelectedTags(clickedTag);\n//             if(clickedTag.innerHTML === 'All') {\n//                 showAllStrategies();\n//             } else {\n//                 filterStrategyBySelectedTag(clickedTag.innerHTML);\n//             }\n\n\n\n//         }\n//     })\n// }\n\n// const removeSelectedTags = () => {\n//     let tags = document.querySelectorAll('.strategies__tags .tag');\n//     // console.log(tags);\n//     tags.forEach(tag => {\n//         tag.classList.remove('tag__selected');\n//         tag.classList.add('tag__bordered');\n//     })\n// }\n\n// const addSelectedTags = (tag) => {\n//     tag.classList.remove('tag__bordered');\n//     tag.classList.add('tag__selected');\n// }\n\n// const showAllStrategies = () => {\n//     let strategies = document.querySelectorAll('.strategy-wrapper .strategy');\n//     strategies.forEach(strategy => {\n//         strategy.classList.remove('strategy_hidden');\n//     })\n\n\n// }\n// const filterStrategyBySelectedTag = (selectedTag) => {\n//     let strategies = document.querySelectorAll('.strategy-wrapper .strategy');\n//     // console.log(strategies);\n//     strategies.forEach(strategy => {\n//         // console.log(strategy);\n//         strategy.classList.add('strategy_hidden');\n//         strategy.querySelectorAll('.tag').forEach(tag => {\n//             // console.log(tag.innerHTML);\n//             // console.log(selectedTag);\n\n//             // && !strategy.classList.contains('strategy_hidden')\n//             if(tag.innerHTML === selectedTag) {\n//                 strategy.classList.remove('strategy_hidden');\n//             }\n//         })\n\n//     })\n\n// }\n\n// const renderArticlesToDom = () => {\n//     const strategiesWrapper = getStrategiesWrapper();\n//     generateArticles(data).forEach(article => {\n//         strategiesWrapper.append(article.generateArticle());\n//     })\n\n//     addStrategyClickHandler();\n// }\n\n// const getStrategiesWrapper = () => {\n//     const strategiesContainer = document.querySelector('.strategy-wrapper');\n//     strategiesContainer.innerHTML = '';\n//     return strategiesContainer;\n// }\n\n// const generateArticles = (data) => {\n//     let articles = [];\n//     data.forEach(item => {\n//         articles.push(new Article(item));\n//         }\n//     )\n//     console.log(articles);\n//     return articles;\n// }\n\n// const renderModalWindow = (content) => {\n//     let modal = new Modal ('tools-modal');\n//     modal.buildModal(content);\n// }\n\n// const addStrategyClickHandler = () => {\n//     document.querySelector('.strategy').addEventListener('click', (event) => {\n//         if(e.target.closest('.strategy')){\n//             let clickedStrategyId = e.target.closest('.strategy').getAttribute('data-id');\n//             console.log(clickedStrategyId);\n//             let clickedStrategyData = getClickedData(clickedStrategyId);\n//             console.log(clickedStrategyData);       \n\n//             // renderArticleModalWindow(clickedStrategyData);\n\n//         }\n\n//     })\n// }\n\n// const getClickedData = (clickedStrategyId) => {\n//     return data.find(item => item.id === clickedStrategyId)\n// }\n\n// const renderArticleModalWindow = (data) => {\n//     let modal = new ArticleModal ('article-modal', data );\n//     modal.renderModal();\n// }\n\n//# sourceURL=webpack://fridaylivecoding/./src/index.js?");

/***/ }),

/***/ "./src/js/Article.js":
/*!***************************!*\
  !*** ./src/js/Article.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Article\": () => (/* binding */ Article)\n/* harmony export */ });\nclass Article {\n    constructor({ id, title, urlToImage, tags, ...rest }) {\n        this.id = id;\n        this.title = title;\n        this.urlToImage = urlToImage;\n        this.tags = tags;\n    }\n\n    // Article generator\n    generateArticle() {\n        let template = '';\n        let article = document.createElement('article');\n        article.className = 'strategy block-shadowed';\n        article.setAttribute('data-id', this.id);\n\n        this.urlToImage && \n        (template += `<img class=\"strategy__image\" src=${this.urlToImage} alt=\"strategy\">`)\n\n        if (this.title || this.tags) {\n            template += `<div class=\"strategy__content\">`\n            \n            this.title && \n            (template += `<h3 class=\"strategy__name\">${this.title}</h3>`)\n\n            if(this.tags) {\n                template += `<div class=\"strategy__tags tags\">`\n\n                this.tags.map(tag => {\n                    template += `<span class=\"tag tag__colored\">${tag}</span>`\n                })\n\n                template += `</div>`\n            }\n\n            template += `</div>`\n        }\n\n        article.innerHTML = template;\n        return article;\n    }\n}\n\n//# sourceURL=webpack://fridaylivecoding/./src/js/Article.js?");

/***/ }),

/***/ "./src/js/ArticleModal.js":
/*!********************************!*\
  !*** ./src/js/ArticleModal.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ArticleModal\": () => (/* binding */ ArticleModal)\n/* harmony export */ });\n/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modal */ \"./src/js/Modal.js\");\n\n\n\n\nclass ArticleModal extends _Modal__WEBPACK_IMPORTED_MODULE_0__.Modal {\n    constructor (classes, { id, title, urlToImage, tags, content, date }) {\n        super(classes);\n        this.id = id;\n        this.title = title;\n        this.urlToImage = urlToImage;\n        this.tags = tags;\n        this.content = content;\n        this.date = date;\n    }\n\n    // Article Modal generator\n    generateContent() {\n        let template = '';\n        let article = document.createElement('div');\n        article.className = 'article-modal__content';\n\n        this.urlToImage && \n        (template += `<img class=\"strategy__image\" src=${this.urlToImage} alt=\"strategy\">`)\n\n        if (this.title || this.tags || this.content || this.date) {\n            template += `<div class=\"strategy__content\">`\n            \n            this.date && \n            (template += `<p class=\"strategy__date\">${this.date}</p>`)\n\n            this.title && \n            (template += `<h3 class=\"strategy__name\">${this.title}</h3>`)\n\n            this.content && \n            (template += `<p class=\"strategy__text\">${this.content}</p>`)\n\n            if(this.tags) {\n                template += `<div class=\"strategy__tags tags\">`\n\n                this.tags.map(tag => {\n                    template += `<span class=\"tag tag__colored\">${tag}</span>`\n                })\n\n                template += `</div>`\n            }\n\n            template += `</div>`\n        }\n\n        article.innerHTML = template;\n        return article;\n    }\n\n    renderModal() {\n        let content = this.generateContent();\n        console.log(content)\n        super.buildModal(content);\n    }\n}\n\n//# sourceURL=webpack://fridaylivecoding/./src/js/ArticleModal.js?");

/***/ }),

/***/ "./src/js/Modal.js":
/*!*************************!*\
  !*** ./src/js/Modal.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Modal\": () => (/* binding */ Modal)\n/* harmony export */ });\nclass Modal {\n    constructor (classes) {\n        this.classes = classes;\n        this.modal = '';\n        this.modalContent = '';\n        this.modalCloseBtn = '';\n        this.overlay = '';\n    }\n\n    buildModal(content) {\n        //Overlay\n        this.overlay = this.createDomNode(this.overlay, 'div', 'overlay', 'overlay_modal');\n\n        //Modal\n        this.modal = this.createDomNode(this.modal, 'div', 'modal', this.classes);\n\n        //Modal content\n        this.modalContent = this.createDomNode(this.modalContent, 'div', 'modal__content');\n\n        //Close Button\n        this.modalCloseBtn = this.createDomNode(this.modalCloseBtn, 'span', 'modal__close-icon');\n        this.modalCloseBtn.innerHTML = '<svg width=\"21\" height=\"22\" viewBox=\"0 0 21 22\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12.4239 10.5172L20.6009 2.33999C21.1331 1.80809 21.1331 0.948089 20.6009 0.416194C20.069 -0.115701 19.209 -0.115701 18.6771 0.416194L10.4999 8.59343L2.3229 0.416194C1.79076 -0.115701 0.931004 -0.115701 0.399108 0.416194C-0.133036 0.948089 -0.133036 1.80809 0.399108 2.33999L8.5761 10.5172L0.399108 18.6945C-0.133036 19.2263 -0.133036 20.0863 0.399108 20.6182C0.664184 20.8836 1.01272 21.0169 1.361 21.0169C1.70929 21.0169 2.05758 20.8836 2.3229 20.6182L10.4999 12.441L18.6771 20.6182C18.9425 20.8836 19.2907 21.0169 19.639 21.0169C19.9873 21.0169 20.3356 20.8836 20.6009 20.6182C21.1331 20.0863 21.1331 19.2263 20.6009 18.6945L12.4239 10.5172Z\" fill=\"#2F281E\"/></svg>'\n\n        this.setContent(content);\n\n        this.appendModalElements();\n\n        // Bind Events\n        this.bindEvents();\n\n        // Open Modal\n        this.openModal();\n    }\n\n    createDomNode (node, element, ...classes){\n        node = document.createElement(element);\n        node.classList.add(...classes);\n        return node\n    };\n\n    setContent(content) {\n        if(typeof content === 'string') {\n            this.modalContent.innerHTML = content;\n        } else {\n            this.modalContent.innerHTML = '';\n            this.modalContent.appendChild(content);\n        }\n    }\n\n    appendModalElements() {\n        this.modal.append(this.modalCloseBtn);\n        this.modal.append(this.modalContent);\n        this.overlay.append(this.modal);\n    }\n\n    bindEvents() {\n        this.modalCloseBtn.addEventListener('click', this.closeModal);\n        this.overlay.addEventListener('click', this.closeModal);\n    }\n\n    openModal() {\n        // console.log(this.overlay);\n        document.body.append(this.overlay);\n    }\n\n    closeModal(e) {\n        let classes = e.target.classList;\n        if(classes.contains('overlay') || classes.contains('modal__close-icon')) {\n            let rem =  document.querySelector('.overlay');\n            rem.remove();\n        }\n    }\n} \n\n//# sourceURL=webpack://fridaylivecoding/./src/js/Modal.js?");

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