/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 35:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  Blackberry: function () {
    return navigator.userAgent.match(/Blackberry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.Blackberry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows());
  }
};

function addDeviceClass(){
  if (isMobile.any()) {
    document.body.classList.add('_touch');
  } else {
    document.body.classList.add('_pc');
  }
}

/* harmony default export */ __webpack_exports__["default"] = (addDeviceClass);

/***/ }),

/***/ 36:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');

function addMenuClass(){
  if (iconMenu) {
    iconMenu.addEventListener('click', function () {
      document.body.classList.toggle('_lock');
      iconMenu.classList.toggle('_active');
      menuBody.classList.toggle('_active');
    })
  }
}

/* harmony default export */ __webpack_exports__["default"] = (addMenuClass);

/***/ }),

/***/ 37:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const urlList = {
  database: 'https://tests-ipny.onrender.com/api/posts',
  fakeJson: 'https://my-json-server.typicode.com/typicode/demo/posts',
  signUp: '/auth/registration',
  login: '/auth/login',
  page: '/auth/usersa'
}

/* harmony default export */ __webpack_exports__["default"] = (urlList);

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_isMobile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);
/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36);
/* harmony import */ var _modules_urlList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37);






const preloader = document.querySelector('.preloader');
const productContainer = document.querySelector('.product__container');
const productButton = document.querySelector('.product__button');

function sendRequest(method, url, body = null) {
  return fetch(url, {
    method: method,
  }).then(response => {
    if (response.ok) {
      return response.json();
    }

    return response.json().then(err => {
      const e = new Error('Не працює');
      e.data = err;
      throw e;
    })
  })
}

window.addEventListener("load", function() {
  if(document.querySelector('.product')){
    sendRequest('GET', _modules_urlList__WEBPACK_IMPORTED_MODULE_2__["default"].database)
      .then(data => {
        let filteredData = data.splice(0, 3);

        filteredData.forEach(element => {
            let productHtml = `
                              <a href="#" class="product__item" data-pid="${element._id}">
                                <div class="product__image">
                                  <img src="https://tests-ipny.onrender.com/${element.image}" onerror="this.src = '/img/teslaX.png'" alt="Tesla">
                                </div>
                                <div class="product__item-body">
                                  <div class="product__description-box">
                                    <dl class="product__description">
                                      <dt class="product__name">Model:</dt>
                                      <dd class="product__name-value">
                                        <h2 class="product__subtitle">Tesla ${element.model}</h2>
                                      </dd>
                                    </dl>
                                    <dl class="product__description">
                                      <dt class="product__name">Range:</dt>
                                      <dd class="product__name-value">${element.range}</dd>
                                    </dl>
                                    <dl class="product__description">
                                      <dt class="product__name">Top Speed:</dt>
                                      <dd class="product__name-value">${element.top_speed}</dd>
                                    </dl>
                                    <dl class="product__description">
                                      <dt class="product__name">Mph:</dt>
                                      <dd class="product__name-value">${element.mph}</dd>
                                    </dl>
                                  </div>
                                </div>
                              </a>
            `;

            productContainer.insertAdjacentHTML('beforeend', productHtml);
        });

        setTimeout(function() {
          if(!preloader.classList.contains('done')){
            preloader.classList.add('done');
          }
        }, 500);
      })
      .catch(err => {
        console.log(err);
      })
  };
});

productButton.addEventListener( 'click', function(e) {
  productButton.parentElement.classList.add('loading');

  let productList = Array.from(document.querySelectorAll('.product__item[data-pid]'));

  sendRequest('GET', _modules_urlList__WEBPACK_IMPORTED_MODULE_2__["default"].database)
      .then(data => {
        function filterData(){
          let filteredData = data.splice(productList.length, 3);

          filteredData.forEach(itemData => {
              let productHtml = `
                                <a href="#" class="product__item" data-pid="${itemData._id}">
                                  <div class="product__image">
                                    <img src="https://tests-ipny.onrender.com/${itemData.image}" onerror="this.src = '/img/teslaX.png'" alt="Tesla">
                                  </div>
                                  <div class="product__item-body">
                                    <div class="product__description-box">
                                      <dl class="product__description">
                                        <dt class="product__name">Model:</dt>
                                        <dd class="product__name-value">
                                          <h2 class="product__subtitle">Tesla ${itemData.model}</h2>
                                        </dd>
                                      </dl>
                                      <dl class="product__description">
                                        <dt class="product__name">Range:</dt>
                                        <dd class="product__name-value">${itemData.range}</dd>
                                      </dl>
                                      <dl class="product__description">
                                        <dt class="product__name">Top Speed:</dt>
                                        <dd class="product__name-value">${itemData.top_speed}</dd>
                                      </dl>
                                      <dl class="product__description">
                                        <dt class="product__name">Mph:</dt>
                                        <dd class="product__name-value">${itemData.mph}</dd>
                                      </dl>
                                    </div>
                                  </div>
                                </a>
              `;

              productContainer.insertAdjacentHTML('beforeend', productHtml);
          });

          productButton.parentElement.classList.remove('loading');
        }

        if(productList.length + 3 >= data.length) {
          filterData();
          
          productButton.style.display = "none";
        } else {
          filterData();
        }
      })
      .catch(err => {
        console.log(err);
      });

  e.preventDefault();
});

// Which device
(0,_modules_isMobile__WEBPACK_IMPORTED_MODULE_0__["default"])();

//Menu
(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__["default"])();
}();
/******/ })()
;