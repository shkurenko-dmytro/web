'use strict'

const swiper = new Swiper('.testimonials__swiper', {
  // Navigation arrows
  navigation: {
    nextEl: '.testimonials__swiper-button-next',
    prevEl: '.testimonials__swiper-button-prev',
  },

  slidesPerView: 1,
  spaceBetween: 20,

  centeredSlides: true,

  simulateTouch: false,
  speed: 500,

  autoHeight: true,

  breakpoints:{
    769:{
      slidesPerView: 1.5,
      initialSlide: 1
    }
  }
});




const swiper2 = new Swiper('.partners__swiper', {
  // Navigation arrows
  navigation: {
    nextEl: '.partners__button-next',
    prevEl: '.partners__button-prev',
  },

  spaceBetween: 24,

  simulateTouch: false,
  speed: 500,

  slidesPerView: 1,
});


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

const iconMenu = document.querySelector('.header__icon');
const menuBody = document.querySelector('.header__inner-body');
if (iconMenu) {
  iconMenu.addEventListener('click', function () {
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
  })
}