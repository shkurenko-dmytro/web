'use strict';

import addDeviceClass from './modules/isMobile';
import addMenuClass from './modules/menu';
import urlList from './modules/urlList';

const preloader = document.querySelector('.preloader');

document.body.onload = function(){
  setTimeout(function() {
    if(!preloader.classList.contains('done')){
      preloader.classList.add('done');
    }
  }, 500);
}

if(document.querySelector('.form')){
  const formContainer = document.querySelector('.container-form');

  const formLogin = document.querySelector('.form__login');
  const formSignUp = document.querySelector('.form__sign-up');

  const username = document.querySelector('#username');
  const password = document.querySelector('#password');
  const usernameError = document.querySelector('#username-error');
  const passwordError = document.querySelector('#password-error');

  const usernameSignUp = document.querySelector('#username-signUp');
  const passwordSignUp = document.querySelector('#password-signUp');
  const confirmPassword = document.querySelector('#confirm-password');
  const usernameSignUpError = document.querySelector('#username-signUp-error');
  const passwordSignUpError = document.querySelector('#password-signUp-error');
  const confirmPasswordError = document.querySelector('#confirm-password-error');

  const linkToSignUp = document.querySelector('#link-to-signUp');
  const linkToLogin = document.querySelector('#link-to-login');

  username.addEventListener('input', username_Verify);
  password.addEventListener('input', password_Verify);

  usernameSignUp.addEventListener('input', username_Verify);
  passwordSignUp.addEventListener('input', password_Verify);
  confirmPassword.addEventListener('input', confirmPassword_Verify);

  function validated(name, pass, nameError, passError, confirm_pass = null, confirm_passError = null){
    if(name.value.length < 4) {
      name.style.borderColor = "red";
      nameError.style.display = "block";
      name.focus();

      return false;
    }

    if(pass.value.length < 4) {
      pass.style.borderColor = "red";
      passError.style.display = "block";
      pass.focus();

      return false;
    }
  
    if(confirm_pass){
      if(confirm_pass.value !== pass.value){
        confirm_pass.style.borderColor = "red";
        confirm_passError.style.display = "block";
        confirm_pass.focus();

        return false;
      }
    }

    return true;
  }

  function username_Verify(e){
    if(e.target.value.length >= 4){
      e.target.style.borderColor = "gray";
      usernameError.style.display = "none";
      usernameSignUpError.style.display = "none";

      return true;
    }
  }

  function password_Verify(e){
    if(e.target.value.length >= 4){
      e.target.style.borderColor = "gray";
      passwordError.style.display = "none";
      passwordSignUpError.style.display = "none";

      return true;
    }
  }

  function confirmPassword_Verify(e){
    if(e.target.value === passwordSignUp.value){
      e.target.style.borderColor = "gray";
      confirmPasswordError.style.display = "none";

      return true;
    }
  }

  function sendRequest(method, url, body = null) {
    return fetch(url, {
      method: method,
      body: body,
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

  //Перехід між авторизацією та регістрацією
  linkToSignUp.addEventListener('click', (e) => {
    e.preventDefault();

    formContainer.classList.add('active');
  })

  linkToLogin.addEventListener('click', (e) => {
    e.preventDefault();

    formContainer.classList.remove('active');
  })

  //Авторизація
  formLogin.addEventListener('submit', (e) => {
    e.preventDefault();

    if(validated(username, password, usernameError, passwordError)){
      let dataForm = new FormData();
  
      dataForm.append('username', username.value );
      dataForm.append('password', password.value);
      
      if(preloader.classList.contains('done')){
        preloader.classList.remove('done');
      }

      sendRequest('POST', urlList.localServer, dataForm)
        .then(data => {
          setTimeout(function() {
            if(!preloader.classList.contains('done')){
              preloader.classList.add('done');
            }
          }, 100);

          console.log(data);

          formContainer.style.display = 'none';

          document.querySelector('.account__login-text').style.display = "block";
        })
        .catch(err => {
          setTimeout(function() {
            if(!preloader.classList.contains('done')){
              preloader.classList.add('done');
            }
          }, 100);
          
          alert('Adding User failed');
          console.log(err);
        })
    } else {
      return false;
    }
  })

  //Регістрація
  formSignUp.addEventListener('submit', (e) => {
    e.preventDefault();

    if(validated(usernameSignUp, passwordSignUp, usernameSignUpError, passwordSignUpError, confirmPassword, confirmPasswordError)){
      let dataForm = new FormData();
  
      dataForm.append('username', usernameSignUp.value );
      dataForm.append('password', passwordSignUp.value);
      
      if(preloader.classList.contains('done')){
        preloader.classList.remove('done');
      }

      sendRequest('POST', urlList.localServer, dataForm)
        .then(data => {
          setTimeout(function() {
            if(!preloader.classList.contains('done')){
              preloader.classList.add('done');
            }
          }, 100);

          console.log(data);

          formContainer.style.display = 'none';

          document.querySelector('.account__signup-text').style.display = "block";
        })
        .catch(err => {
          setTimeout(function() {
            if(!preloader.classList.contains('done')){
              preloader.classList.add('done');
            }
          }, 100);

          alert('Adding User failed');
          console.log(err);
        })

    } else {
      return false;
    }
  })
}

// Which device
addDeviceClass();

//Menu
addMenuClass();