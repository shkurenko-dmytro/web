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
  page: '/auth/usersb'
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
const signUpURL = _modules_urlList__WEBPACK_IMPORTED_MODULE_2__["default"].signUp;
const loginURL = _modules_urlList__WEBPACK_IMPORTED_MODULE_2__["default"].login;
const pageURL = _modules_urlList__WEBPACK_IMPORTED_MODULE_2__["default"].page;

document.body.onload = function () {
  setTimeout(function () {
    if (!preloader.classList.contains('done')) {
      preloader.classList.add('done');
    }
  }, 500);
}

if (document.querySelector('.form')) {
  const formContainer = document.querySelector('.container-form');

  const formLogin = document.querySelector('.form__login');
  const formSignUp = document.querySelector('.form__sign-up');

  //Login
  const username = document.querySelector('#username');
  const password = document.querySelector('#password');
  const usernameError = document.querySelector('#username-error');
  const passwordError = document.querySelector('#password-error');

  //Sign Up
  const usernameSignUp = document.querySelector('#username-signUp');
  const passwordSignUp = document.querySelector('#password-signUp');
  const confirmPassword = document.querySelector('#confirm-password');
  const usernameSignUpError = document.querySelector('#username-signUp-error');
  const passwordSignUpError = document.querySelector('#password-signUp-error');
  const confirmPasswordError = document.querySelector('#confirm-password-error');

  const linkToSignUp = document.querySelector('#link-to-signUp');
  const linkToLogin = document.querySelector('#link-to-login');

  username.addEventListener('input', hiddenError);
  username.addEventListener('input', hiddenError);
  usernameSignUp.addEventListener('input', hiddenError);
  passwordSignUp.addEventListener('input', hiddenError);
  confirmPassword.addEventListener('input', confirmPassword_Verify);

  username.value = JSON.parse(localStorage.getItem('username'));

  function validated(pass, confirm_pass, confirm_passError) {
    if (confirm_pass) {
      if (confirm_pass.value !== pass.value) {
        confirm_pass.style.borderColor = "red";
        confirm_passError.style.display = "block";
        confirm_pass.focus();

        return false;
      }
    }

    return true;
  }

  function confirmPassword_Verify(e) {
    if (e.target.value === passwordSignUp.value) {
      e.target.style.borderColor = "gray";
      confirmPasswordError.style.display = "none";

      return true;
    }
  }

  function hiddenError(e) {
    e.target.style.borderColor = "gray";
    e.target.nextElementSibling.style.display = "none";
  }

  // Transition between Login and Sign Up
  linkToSignUp.addEventListener('click', (e) => {
    e.preventDefault();

    formContainer.classList.add('active');
  })

  linkToLogin.addEventListener('click', (e) => {
    e.preventDefault();

    formContainer.classList.remove('active');
  })

  // Login
  formLogin.addEventListener('submit', (e) => {
    e.preventDefault();

    let dataForm = new FormData();

    dataForm.append('username', username.value);
    dataForm.append('password', password.value);

    if (preloader.classList.contains('done')) {
      preloader.classList.remove('done');
    }

    async function sendForm(url, body) {
      const response = await fetch(url, {
        method: 'POST',
        body: body
      });

      let data = await response.json();

      if (response.ok) {
        setTimeout(function () {
          if (!preloader.classList.contains('done')) {
            preloader.classList.add('done');
          }
        }, 100);

        formContainer.style.display = 'none';
        
        await localStorage.setItem("token", JSON.stringify(data));
        await localStorage.setItem("username", JSON.stringify( username.value));
        console.log('login');

        let token = JSON.parse(localStorage.getItem('token'))
        window.location.href = `${pageURL}?token=${token}`

      } else {
        setTimeout(function () {
          if (!preloader.classList.contains('done')) {
            preloader.classList.add('done');
          }
        }, 100);

        if (data.usernameError) {
          username.style.borderColor = "red"
          usernameError.style.display = "block"
          usernameError.innerText = data.usernameError
          username.focus()
        }

        if (data.passwordError) {
          password.style.borderColor = "red"
          passwordError.style.display = "block"
          passwordError.innerText = data.passwordError
          password.focus()
        }
      }
    }

    sendForm(loginURL, dataForm);
  })

  // Sign Up
  formSignUp.addEventListener('submit', (e) => {
    e.preventDefault();

    if (validated(passwordSignUp, confirmPassword, confirmPasswordError)) {
      let dataForm = new FormData();

      dataForm.append('username', usernameSignUp.value);
      dataForm.append('password', passwordSignUp.value);

      if (preloader.classList.contains('done')) {
        preloader.classList.remove('done');
      }

      async function sendRegForm(url, body) {
        const response = await fetch(url, {
          method: 'POST',
          body: body
        });

        let data = await response.json();

        if (response.ok) {
          setTimeout(function () {
            if (!preloader.classList.contains('done')) {
              preloader.classList.add('done');
            }
          }, 100);

          formContainer.style.display = 'none';

          await localStorage.setItem("token", JSON.stringify(data));
          await localStorage.setItem("username", JSON.stringify( usernameSignUp.value));
          console.log('register');

          window.location.href = `${signUpURL}`

        } else {
          setTimeout(function () {
            if (!preloader.classList.contains('done')) {
              preloader.classList.add('done');
            }
          }, 100);

          console.log(data);

          if (data.errors && data.message) {
            if (data.errors.errors[0].path === 'username') {
              usernameSignUp.style.borderColor = "red";
              usernameSignUpError.style.display = "block";
              usernameSignUpError.innerText = data.errors.errors[0].msg;
              usernameSignUp.focus();

            } else if (data.errors.errors[0].path === 'password') {
              passwordSignUp.style.borderColor = "red";
              passwordSignUpError.style.display = "block";
              passwordSignUpError.innerText = data.errors.errors[0].msg;
              passwordSignUp.focus();
            };

          } else if (data.message) {
            usernameSignUp.style.borderColor = "red";
            usernameSignUpError.style.display = "block";
            usernameSignUpError.innerText = data.message;
            usernameSignUp.focus();
          }
        }
      }

      sendRegForm(signUpURL, dataForm);

    } else {
      return false;
    }
  })
}

// Which device
(0,_modules_isMobile__WEBPACK_IMPORTED_MODULE_0__["default"])();

//Menu
(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__["default"])();
}();
/******/ })()
;