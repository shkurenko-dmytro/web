'use strict'

const swiper = new Swiper('.testimonials__swiper', {
  // Navigation arrows
  navigation: {
    nextEl: '.testimonials__swiper-button-next',
    prevEl: '.testimonials__swiper-button-prev',
  },

  slidesPerView: 1.5,
  spaceBetween: 20,

  centeredSlides: true,
  initialSlide: 1,

  simulateTouch: false,
  speed: 500,

  
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







//Трикрапка
var truncate = document.querySelector(".start__text");
  $clamp(truncate, {
    clamp: 4, // Число строк
    useNativeClamp: false // НЕ используем -webkit-line-clamp
  });