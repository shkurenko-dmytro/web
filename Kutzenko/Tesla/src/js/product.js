'use strict';

import isMobile from './modules/isMobile';
import urlList from './modules/urlList';

const preloader = document.querySelector('.preloader');
const productList = document.querySelector('.product__container');

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

if(document.querySelector('.product')){
  sendRequest('GET', urlList.database)
      .then(data => {
        setTimeout(function() {
          if(!preloader.classList.contains('done')){
            preloader.classList.add('done');
          }
        }, 500);

        function addProducts(data){
          data.forEach((element) => {
            let productHtml = `<a href="#" class="product__item">
              <div class="product__image">
                <img src="https://tests-ipny.onrender.com/${element.image}" onerror="this.src = './img/teslaX.png'" alt="Tesla">
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
            </a>`

            productList.insertAdjacentHTML('beforeend', productHtml);
          })
        }

        addProducts(data);
      })
      .catch(err => {
        console.log(err);
      })
}



// Which device
if (isMobile.any()) {
  document.body.classList.add('_touch');
} else {
  document.body.classList.add('_pc');
}

//Menu
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
  iconMenu.addEventListener('click', function () {
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
  })
}