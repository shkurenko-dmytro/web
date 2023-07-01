'use strict'

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
      alert('Летс гоу всі');
    } else {
      return false;
    }
  })

  //Регістрація
  formSignUp.addEventListener('submit', (e) => {
    e.preventDefault();

    if(validated(usernameSignUp, passwordSignUp, usernameSignUpError, passwordSignUpError, confirmPassword, confirmPasswordError)){
      alert('Летс гоу всі');
    } else {
      return false;
    }
  })
}