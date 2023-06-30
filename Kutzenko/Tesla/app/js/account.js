'use strict'

if(document.querySelector('.form')){
  const form = document.querySelector('.form');
  const username = document.querySelector('#username');
  const password = document.querySelector('#password');
  const username_err = document.querySelector('.form__username-error');
  const password_err = document.querySelector('.form__password-error');

  username.addEventListener('textInput', username_Verify);
  password.addEventListener('textInput', password_Verify);

  function validated(){
    if(username.value.length < 4) {
      username.style.borderColor = "red";
      username_err.style.display = "block";
      username.focus();

      return false;
    }

    if(password.value.length < 5) {
      password.style.borderColor = "red";
      password_err.style.display = "block";
      password.focus();

      return false;
    }

    return true;
  }

  function username_Verify(){
    if(username.value.length >= 3){
      console.log(username.value.length)
      username.style.borderColor = "gray";
      username_err.style.display = "none";

      return true;
    }
  }

  function password_Verify(){
    if(password.value.length >= 4){
      password.style.borderColor = "gray";
      password_err.style.display = "none";

      return true;
    }
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    
    if(validated()){
      alert('Летс гоу всі');
    } else {
      return false;
    }
  })
}