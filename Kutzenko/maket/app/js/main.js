'use strict'

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 70,

  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true
  },
  speed: 1000,

  simulateTouch: false,

  effect: 'creative',
  creativeEffect: {
    prev: {
      // will set `translateZ(-400px)` on previous slides
      translate: [0, 0, -400],
      opacity: 0
    },
    next: {
      // will set `translateX(100%)` on next slides
      translate: ['100%', 0, 0],
    },
  },
})

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

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
  iconMenu.addEventListener('click', function () {
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
  })
}

const menuLinks = document.querySelectorAll('.menu__list-link[data-goto]');
if (menuLinks.length > 0) {
  menuLinks.forEach(menulink => {
    menulink.addEventListener('click', onMenuLinksClick);
  });

  function onMenuLinksClick(event) {
    const menuLink = event.target;
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;

      if (iconMenu.classList.contains('_active')) {
        document.body.classList.remove('_lock');
        iconMenu.classList.remove('_active');
        menuBody.classList.remove('_active');
      }

      window.scrollTo({
        top: gotoBlockValue,
        behavior: 'smooth'
      })
      event.preventDefault();
    }
  }
}

const footerListLinks = document.querySelectorAll('.footer__list-link[data-goto]');
console.log(footerListLinks);
if (footerListLinks.length > 0) {
  footerListLinks.forEach(footerlink => {
    footerlink.addEventListener('click', onFooterLinksClick);
  });

  function onFooterLinksClick(event) {
    const footerLink = event.target;
    if (footerLink.dataset.goto && document.querySelector(footerLink.dataset.goto)) {
      const gotoBlock = document.querySelector(footerLink.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;

      window.scrollTo({
        top: gotoBlockValue,
        behavior: 'smooth'
      })
      event.preventDefault();
    }
  }
}