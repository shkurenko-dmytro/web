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

const logout = document.querySelector('.logout');
const username = document.getElementById('username');

document.body.onload = function(){
  setTimeout(function() {
    if(!preloader.classList.contains('done')){
      preloader.classList.add('done');
    }
  }, 500);
}

//LocalStorage
let user = JSON.parse(localStorage.getItem('username'));

username.innerHTML = `<span>Admin: </span>${user}`

//Log out
logout.addEventListener('click', function(){
  localStorage.clear();

  window.location.href = '/account'
})

// Which device
;(0,_modules_isMobile__WEBPACK_IMPORTED_MODULE_0__["default"])();

//Menu
(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__["default"])();

function sendRequest(method, url, body = null) {
  return fetch(url, {
    method: method,
    body: body
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

const btnSend = document.querySelector('#send');
const modelValue = document.querySelector('#model');
const rangeValue = document.querySelector('#range');
const top_speedValue = document.querySelector('#top_speed');
const mphValue = document.querySelector('#mph');
const file = document.querySelector('input[type="file"]');

if(btnSend){
  btnSend.addEventListener('click', function () {
    let dataForm = new FormData();
    
    dataForm.append('model', modelValue.value );
    dataForm.append('range', rangeValue.value);
    dataForm.append('top_speed', top_speedValue.value);
    dataForm.append('mph', mphValue.value);
    dataForm.append('image', file.files[0]);
  
    if(preloader.classList.contains('done')){
      preloader.classList.remove('done');
    }
  
    sendRequest('POST', _modules_urlList__WEBPACK_IMPORTED_MODULE_2__["default"].database, dataForm)
      .then(data => {
        setTimeout(function() {
          if(!preloader.classList.contains('done')){
            preloader.classList.add('done');
          }
        }, 100);
  
        console.log(data);
        alert('Item added successfully');
      })
      .catch(err => {
        console.log(err)
        alert('Adding item failed');
      })
  })
}


}();
/******/ })()
;