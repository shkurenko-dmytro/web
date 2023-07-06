'use strict';

const preloader = document.querySelector('.preloader');

document.body.onload = function(){
  setTimeout(function() {
    if(!preloader.classList.contains('done')){
      preloader.classList.add('done');
    }
  }, 500);
}

//Which device
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

if (isMobile.any()) {
  document.body.classList.add('_touch');
} else {
  document.body.classList.add('_pc');
}

const postURL = "https://tests-ipny.onrender.com/api/posts";

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
  
    sendRequest('POST', postURL, dataForm)
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

