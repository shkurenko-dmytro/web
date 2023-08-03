'use strict';

import addDeviceClass from './modules/isMobile';
import addMenuClass from './modules/menu';
import urlList from './modules/urlList';

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
})

// Which device
addDeviceClass();

//Menu
addMenuClass();

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
  
    sendRequest('POST', urlList.database, dataForm)
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

