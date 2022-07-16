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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_validate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/validate */ \"./modules/validate.js\");\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/scroll */ \"./modules/scroll.js\");\n/* harmony import */ var _modules_topSlider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/topSlider */ \"./modules/topSlider.js\");\n/* harmony import */ var _modules_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/carousel */ \"./modules/carousel.js\");\n/* harmony import */ var _modules_accordeon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/accordeon */ \"./modules/accordeon.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/sendForm */ \"./modules/sendForm.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_validate__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_scroll__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_topSlider__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_carousel__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_accordeon__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({ formId: 'form-callback'});\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/accordeon.js":
/*!******************************!*\
  !*** ./modules/accordeon.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst accordeon = () => {\r\nconst accordeonItem = document.querySelectorAll('.accordeon-item');\r\nconst accordeon = document.querySelector('.accordeon');\r\nconst elementСontent = document.querySelectorAll('.accordeon-item .element-content');\r\n\r\n\r\n  accordeonItem.forEach((item, i) => {\r\n\r\n    item.addEventListener('click', () => {\r\n      const elemActive = document.querySelectorAll('.accordeon-item.active');\r\n      const elemBlock = document.querySelectorAll('.element-content.block');\r\n      \r\n      elemActive.forEach(elem => {\r\n        elem.classList.remove('active');\r\n      });\r\n      elemBlock.forEach(block => {\r\n        block.classList.remove('block');\r\n      });\r\n\r\n      if(!item.classList.contains('active')){\r\n        elementСontent[i].classList.add('block');\r\n        item.classList.add('active');\r\n      } \r\n    });\r\n  });\r\n\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (accordeon);\n\n//# sourceURL=webpack:///./modules/accordeon.js?");

/***/ }),

/***/ "./modules/carousel.js":
/*!*****************************!*\
  !*** ./modules/carousel.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst carousel = () => {\r\n  let position = 0;\r\n  const slidesToShow = 3;\r\n  const slidesToScroll = 2;\r\n  const servicesElements = document.querySelector('.services-elements');\r\n  const servicesCarousel = document.querySelector('.services-carousel');\r\n  const servicesItems = document.querySelectorAll('.services-item');\r\n  const prev = document.querySelector('.arrow-left');\r\n  const next = document.querySelector('.arrow-right');\r\n\r\n  const itemWidth = servicesElements.clientWidth / slidesToShow;\r\n  const movePosition = slidesToScroll * itemWidth;\r\n  const itemCount = servicesItems.length;\r\n\r\n  servicesItems.forEach(item => {\r\n    item.style.minWidth = `${itemWidth}px`;\r\n  });\r\n\r\n  next.addEventListener('click', () => {\r\n    const item = itemCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;\r\n\r\n    position -= item >= slidesToScroll ? movePosition : item * itemWidth;\r\n\r\n    setPosition();\r\n    checkBtn();\r\n  });\r\n\r\n  prev.addEventListener('click', () => {\r\n    const item = Math.abs(position) / itemWidth;\r\n\r\n    position += item >= slidesToScroll ? movePosition : item * itemWidth;\r\n\r\n    setPosition();\r\n    checkBtn();\r\n  });\r\n  const setPosition = () => {\r\n    servicesCarousel.style.transform = `translateX(${position}px)`;\r\n  };\r\n\r\n  const checkBtn = () => {\r\n    prev.disabled = position === 0;\r\n    // next.disabled = position <= -(item - slidesToShow) * itemWidth;\r\n  };\r\n\r\n  checkBtn();\r\n  \r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (carousel);\n\n//# sourceURL=webpack:///./modules/carousel.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n\r\n  const modalCallback = document.querySelector('.modal-callback');\r\n  const modalClose = document.querySelector('.modal-close > img');\r\n  const modalOverlay = document.querySelector('.modal-overlay');\r\n  const callbackBtn = document.querySelectorAll('.callback-btn');\r\n  const buttonServices = document.querySelector('.button-services');\r\n  const body = document.querySelector('body');\r\n  const wrapper = document.querySelectorAll('.services-item  .img-wrapper');\r\n\r\n  wrapper.forEach(btn => {\r\n    btn.addEventListener('click', () => {\r\n      modalBlock();\r\n    });\r\n  });\r\n\r\n  const modalBlock = () => {\r\n    modalCallback.style.display = 'block';\r\n    modalOverlay.style.display = 'block';\r\n  };\r\n\r\n  callbackBtn.forEach(btn => {\r\n    btn.addEventListener('click', () => {\r\n      modalBlock();\r\n    });\r\n  });\r\n  body.addEventListener('click', (e) => {\r\n    e.preventDefault();\r\n\r\n    if(e.target.classList.contains('button-services')){\r\n      modalBlock();\r\n    }\r\n    if(e.target.classList.contains('modal-overlay') || e.target.closest('.modal-close > img')){\r\n      modalCallback.style.display = 'none';\r\n      modalOverlay.style.display = 'none';\r\n    }\r\n\r\n  });\r\n  \r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/scroll.js":
/*!***************************!*\
  !*** ./modules/scroll.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nconst scroll = () => {\r\n  const anchors = document.querySelectorAll('a[href*=\"#\"]');\r\n  const up = document.querySelector('.up');\r\n\r\n    for (let anchor of anchors) {\r\n      anchor.addEventListener('click', function (e) {\r\n        e.preventDefault();\r\n\r\n        const blockID = anchor.getAttribute('href');\r\n        document.querySelector(blockID).scrollIntoView({\r\n          behavior: 'smooth',\r\n          block: 'start'\r\n        });\r\n      });\r\n    }\r\n  window.addEventListener('scroll', () => {\r\n    let scroll = document.querySelector('.up');\r\n    scroll.classList.toggle('active-up', window.scrollY>500);\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scroll);\n\n//# sourceURL=webpack:///./modules/scroll.js?");

/***/ }),

/***/ "./modules/sendForm.js":
/*!*****************************!*\
  !*** ./modules/sendForm.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nconst sendForm = ({formId}) => {\r\n  const form = document.getElementById(formId);\r\n  const btnCallback = document.getElementById('btn-callback');\r\n  const statusBlock = document.createElement('div');\r\n  const loadText = 'Загрузка...';\r\n  const errorText = 'Ошибка...';\r\n  const successText = 'Выш запрос отправлен! Наш менеджер с вами свяжется!';\r\n\r\n\r\n  const validate = (list) => {\r\n    let success = true;\r\n\r\n    list.forEach(input => {\r\n      if(input.value.length >= 11 && input.name == 'tel') {\r\n        success = true;\r\n      } else {\r\n        success = false;\r\n      }\r\n    });\r\n    return success;\r\n  };\r\n\r\n  const sendData = (data) => {\r\n    return fetch('https://jsonplaceholder.typicode.com/posts', {\r\n      method: 'POST',\r\n      body:  JSON.stringify(data),\r\n      headers: {\r\n        \"Content-Type\": \"application/json\"\r\n      }\r\n    }).then(res => res.json());\r\n  };\r\n  const submitForm = () => {\r\n    const formElements = form.querySelectorAll('input');\r\n    const formData = new FormData(form);\r\n    const formBody = {};\r\n\r\n    statusBlock.textContent = loadText;\r\n    form.append(statusBlock);\r\n\r\n    formData.forEach((val, key) => {\r\n      formBody[key] = val;\r\n    });\r\n\r\n\r\n    if(validate(formElements)) {\r\n      sendData(formBody)\r\n        .then(date => {\r\n          statusBlock.textContent = successText;\r\n\r\n          formElements.forEach(input => {\r\n            input.value = '';\r\n          });\r\n        })\r\n        .catch(error => {\r\n          statusBlock.textContent = successText;\r\n        });\r\n    } else {\r\n      statusBlock.textContent = errorText;\r\n      \r\n    }\r\n  };\r\n\r\n\r\n\r\n  btnCallback.addEventListener('click', (e) => {\r\n      e.preventDefault();\r\n  \r\n      submitForm();\r\n    });\r\n\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack:///./modules/sendForm.js?");

/***/ }),

/***/ "./modules/topSlider.js":
/*!******************************!*\
  !*** ./modules/topSlider.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n  const topSlider = () => {  \r\n    const sliderBlock = document.querySelector('.top-slider');\r\n    const sliderItem = document.querySelectorAll('.item');\r\n    let dots;\r\n\r\n    let portfolioDots = document.querySelector('.slick-dots');\r\n\r\n    const timerInterval = 3000;  \r\n    \r\n    let currentSlide = 0;\r\n    let interval;\r\n\r\n    const addDot = () => {\r\n      sliderItem.forEach((item, i) => {\r\n        const li = document.createElement('li');\r\n        if(i == 0){\r\n          li.classList.add('slick-active');\r\n        } \r\n        li.classList.add('dot');\r\n        portfolioDots.append(li);\r\n        dots = document.querySelectorAll('.dot');\r\n      });\r\n    };\r\n    addDot();\r\n    const nextSlide = (elem, index, strClass) => {\r\n      elem[index].classList.remove(strClass);\r\n    };\r\n    const prevSlide = (elem, index, strClass) => {\r\n      elem[index].classList.add(strClass);\r\n\r\n    };\r\n    \r\n    const autoSlide = () => {\r\n      \r\n      nextSlide(sliderItem, currentSlide, 'item-active');\r\n      nextSlide(dots, currentSlide, 'slick-active');\r\n      currentSlide++;\r\n\r\n      if(currentSlide >= sliderItem.length) {\r\n        currentSlide = 0;\r\n      }\r\n      prevSlide(sliderItem, currentSlide, 'item-active');\r\n      prevSlide(dots, currentSlide, 'slick-active');\r\n    };\r\n\r\n    const startSlide = (timer = 1500) => {\r\n      interval = setInterval(autoSlide, timer);\r\n      \r\n    };\r\n\r\n    const stopSlide = () => {\r\n      clearInterval(interval);\r\n    \r\n   };\r\n   sliderBlock.addEventListener('click', (e)=>{\r\n    e.preventDefault();\r\n    if(!e.target.matches('.dot, .portfolio-btn')){\r\n      return;\r\n    }\r\n    nextSlide(sliderItem, currentSlide, 'item-active');\r\n    nextSlide(dots, currentSlide, 'slick-active');\r\n\r\n    if(e.target.matches('#arrow-right')) {\r\n      currentSlide++;\r\n    } else if(e.target.matches('#arrow-left')) {\r\n      currentSlide--;\r\n    } else if(e.target.classList.contains('dot')) {\r\n      dots.forEach((dot, i) => {\r\n        if(e.target === dot) {\r\n          currentSlide = i;\r\n        }\r\n      });\r\n    }\r\n      if(currentSlide >= sliderItem.length) {\r\n        currentSlide = 0;\r\n      }\r\n      if(currentSlide < 0) {\r\n        currentSlide = sliderItem.length - 1;\r\n      }\r\n    prevSlide(sliderItem, currentSlide, 'item-active');\r\n    prevSlide(dots, currentSlide, 'slick-active');\r\n   });\r\n\r\n   sliderBlock.addEventListener('mouseenter', (e) => {\r\n    if(e.target.matches('.dot')){\r\n      stopSlide();\r\n    }\r\n   }, true);   \r\n\r\n   sliderBlock.addEventListener('mouseleave', (e) => {\r\n    if(e.target.matches('.dotn')){\r\n      startSlide(timerInterval);\r\n    }\r\n  }, true);\r\n\r\n\r\n  startSlide(timerInterval);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (topSlider);\n\n//# sourceURL=webpack:///./modules/topSlider.js?");

/***/ }),

/***/ "./modules/validate.js":
/*!*****************************!*\
  !*** ./modules/validate.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst validate = () => {\r\nconst input = document.querySelectorAll('.form-control');\r\n\r\n  input.forEach(i => {\r\n    if(i.name == 'fio'){\r\n      i.addEventListener('input', (e)=> {\r\n        e.target.value = e.target.value.replace(/[^а-яё\\ \\s]/i, '');\r\n\r\n        if (e.target.value != '') {\r\n          e.target.value = e.target.value[0].toUpperCase() + e.target.value.slice(1);\r\n        }\r\n        \r\n      });\r\n    }\r\n    if(i.name == 'tel'){\r\n      i.addEventListener('input', (e) => {\r\n        e.target.value = e.target.value.replace(/[^0-9-()\\+\\s]/, '');\r\n        if(e.target.value.length < 11) {\r\n          return false;\r\n        }\r\n      });\r\n    }\r\n\r\n  });\r\n\r\n  \r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);\n\n//# sourceURL=webpack:///./modules/validate.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;