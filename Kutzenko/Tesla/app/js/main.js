'use strict'

//Preloader
// document.body.onload = function(){
//   setTimeout(function() {
//     let preloader = document.querySelector('.preloader');
//     if(!preloader.classList.contains('done')){
//       preloader.classList.add('done');
//     }
//   }, 500);
// }

const url = 'https://tests-ipny.onrender.com/api/posts';

if(document.querySelector('.myswiper')){
  const swiper = new Swiper('.myswiper', {
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
    }
  });
  
  async function getData() {
    const response = await fetch(url);
    let data = await response.json();
    data = data.splice(0, 4);
  
    let key;
    let arr = [];
  
    for (key in data) {
      let slideHtml = `<div class="swiper-slide myswiper__slide">
                          <div class="myswiper__slide-body">
                            <p class="myswiper__name">
                              Model ${data[key].model}
                            </p>
                            <div class="myswiper__image">
                              <img src="https://tests-ipny.onrender.com/${data[key].image}" onerror="this.src = '../images/tesla${data[key].model}.png'">
                            </div>
                          </div>
                          <div class="main__info info">
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
                                  <svg class="info__share-icon">
                                    <use xlink:href="./images/sprite.svg#share-icon"></use>
                                  </svg>
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
  
  getData();
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