'use strict';

import addDeviceClass from './modules/isMobile';
import addMenuClass from './modules/menu';
import urlList from './modules/urlList';

const preloader = document.querySelector('.preloader');
const reqURL = urlList.localServer;

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

  usernameSignUp.addEventListener('input', hiddenError);
  passwordSignUp.addEventListener('input', hiddenError);
  confirmPassword.addEventListener('input', confirmPassword_Verify);

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

  function hiddenError(e){
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

    // let dataForm = new FormData();

    // dataForm.append('username', username.value);
    // dataForm.append('password', password.value);

    // if (preloader.classList.contains('done')) {
    //   preloader.classList.remove('done');
    // }

    // sendRequest('POST', reqURL, dataForm)
    //   .then(data => {
    //     setTimeout(function () {
    //       if (!preloader.classList.contains('done')) {
    //         preloader.classList.add('done');
    //       }
    //     }, 100);

    //     console.log(data);

    //     formContainer.style.display = 'none';

    //     document.querySelector('.account__login-text').style.display = "block";
    //   })
    //   .catch(err => {
    //     setTimeout(function () {
    //       if (!preloader.classList.contains('done')) {
    //         preloader.classList.add('done');
    //       }
    //     }, 100);

    //     alert('Adding User failed');
    //     console.log(err);
    //   })
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

      async function getData(url, body) {
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

          document.querySelector('.account__signup-text').style.display = "block";
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

      getData(reqURL, dataForm);

    } else {
      return false;
    }
  })
}

// Which device
addDeviceClass();

//Menu
addMenuClass();