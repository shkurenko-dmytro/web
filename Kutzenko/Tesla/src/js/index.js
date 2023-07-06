'use strict';

import Swiper from 'swiper';
import { Navigation, Pagination, Virtual, Parallax, Keyboard } from 'swiper/modules';

import isMobile from './modules/isMobile';
import urlList from './modules/urlList';

if(document.querySelector('.myswiper')){
  const swiper = new Swiper('.myswiper', {
    modules: [Navigation, Pagination, Virtual, Parallax, Keyboard],
    navigation: {
      nextEl: '.myswiper__button-next',
      prevEl: '.myswiper__button-prev',
    },
    pagination: {
      el: '.myswiper-pagination',
      clickable: true,
    },
    simulateTouch: false,
    speed: 500,
    spaceBetween: 50,
    virtual: {
      enabled: true,
    },
    parallax: true,
    keyboard: true
  });
  
  async function getData(url) {
    const response = await fetch(url);
    let data = await response.json();
    data = data.splice(0, 4);
  
    let key;
    let arr = [];
  
    for (key in data) {
      let slideHtml = `<div class="swiper-slide myswiper__slide">
                          <div class="myswiper__slide-body">
                            <p data-swiper-parallax-opacity="0.5" data-swiper-parallax-scale="0.4" data-swiper-parallax="15%" class="myswiper__name">
                              Model ${data[key].model}
                            </p>
                            <div data-swiper-parallax-opacity="0.5" data-swiper-parallax-scale="0.3" data-swiper-parallax="15%" class="myswiper__image">
                              <img src="https://tests-ipny.onrender.com/${data[key].image}" onerror="this.src = './img/tesla${data[key].model}.png'">
                            </div>
                          </div>
                          <div ata-swiper-parallax-opacity="0.5" data-swiper-parallax-scale="0.3" class="main__info info">
                            <div class="info__body">
                              <div class="info__characteristic-block">
                                <dl class="info__characteristic">
                                  <dd class="info__characteristic-value">
                                    ${data[key].range}
                                  </dd>
                                  <dt class="info__characteristic-name">Range</dt>
                                </dl>
                                <dl class="info__characteristic">
                                  <dd class="info__characteristic-value">
                                    ${data[key].top_speed}
                                  </dd>
                                  <dt class="info__characteristic-name">Top Speed</dt>
                                </dl>
                                <dl class="info__characteristic">
                                  <dd class="info__characteristic-value">
                                    ${data[key].mph}
                                  </dd>
                                  <dt class="info__characteristic-name">0.60 mph</dt>
                                </dl>
                              </div>
                              <div class="info__links">
                                <a href="#" class="info__button">
                                  Buy Now
                                </a>
                                <a href="#" class="info__share">
                                  <img src="./img/share-icon.svg" class="info__share-icon">
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>`;
  
      arr.push(slideHtml);
    };
    
    swiper.virtual.appendSlide(arr);
  
    setTimeout(function() {
      let preloader = document.querySelector('.preloader');
      if(!preloader.classList.contains('done')){
        preloader.classList.add('done');
      }
    }, 500);
  };
  
  getData(urlList.database);
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