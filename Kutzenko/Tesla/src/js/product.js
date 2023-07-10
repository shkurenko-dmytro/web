'use strict';

import addDeviceClass from './modules/isMobile';
import addMenuClass from './modules/menu';
import urlList from './modules/urlList';

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
    sendRequest('GET', urlList.database)
      .then(data => {
        let filteredData = data.splice(0, 3);

        filteredData.forEach(element => {
            let productHtml = `
                              <a href="#" class="product__item" data-pid="${element._id}">
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

  sendRequest('GET', urlList.database)
      .then(data => {
        let filteredData = data.splice(productList.length, 3);

        filteredData.forEach(itemData => {
            let productHtml = `
                              <a href="#" class="product__item" data-pid="${itemData._id}">
                                <div class="product__image">
                                  <img src="https://tests-ipny.onrender.com/${itemData.image}" onerror="this.src = './img/teslaX.png'" alt="Tesla">
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
      })
      .catch(err => {
        console.log(err);
      });

  e.preventDefault();
});

// Which device
addDeviceClass();

//Menu
addMenuClass();