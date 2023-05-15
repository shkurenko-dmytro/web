'use strict'

//Swiper №1
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

  breakpoints: {
    769: {
      slidesPerView: 1.5,
      initialSlide: 1
    }
  }
});

//Hide the button when the last slide or the first slide is active --- Swiper №1
const testimonialsButtonPrev = document.querySelector('.testimonials__swiper-button-prev');
const testimonialsButtonNext = document.querySelector('.testimonials__swiper-button-next');

if (swiper.slides[0].classList.contains('swiper-slide-active')) {
  testimonialsButtonPrev.style.opacity = '0';
  testimonialsButtonPrev.style.visibility = 'hidden';
}

if (swiper.slides[swiper.slides.length - 1].classList.contains('swiper-slide-active')) {
  testimonialsButtonNext.style.opacity = '0';
  testimonialsButtonNext.style.visibility = 'hidden';
}

testimonialsButtonPrev.addEventListener('click', function () {
  if (swiper.slides[0].classList.contains('swiper-slide-active')) {
    testimonialsButtonPrev.style.opacity = '0';
    testimonialsButtonPrev.style.visibility = 'hidden';
  }

  if (!swiper.slides[swiper.slides.length - 1].classList.contains('swiper-slide-active')) {
    testimonialsButtonNext.style.opacity = '1';
    testimonialsButtonNext.style.visibility = 'visible';
  }
})

testimonialsButtonNext.addEventListener('click', function () {
  if (!swiper.slides[0].classList.contains('swiper-slide-active')) {
    testimonialsButtonPrev.style.opacity = '1';
    testimonialsButtonPrev.style.visibility = 'visible';
  }

  if (swiper.slides[swiper.slides.length - 1].classList.contains('swiper-slide-active')) {
    testimonialsButtonNext.style.opacity = '0';
    testimonialsButtonNext.style.visibility = 'hidden';
  }
})

//Swiper №2
const swiper2 = new Swiper('.partners__swiper', {
  // Navigation arrows
  navigation: {
    nextEl: '.partners__button-next',
    prevEl: '.partners__button-prev',
  },

  spaceBetween: 24,

  simulateTouch: false,
  speed: 500,

  slidesPerView: 1
});

//Hide the button when the last slide or the first slide is active --- Swiper №2
const partnersButtonPrev = document.querySelector('.partners__button-prev');
const partnersButtonNext = document.querySelector('.partners__button-next');

if (swiper2.slides[0].classList.contains('swiper-slide-active')) {
  partnersButtonPrev.style.opacity = '0.2';
  partnersButtonPrev.style.pointerEvents = 'none';
}

if (!swiper2.slides[0].classList.contains('swiper-slide-active')) {
  partnersButtonPrev.style.opacity = '1';
  partnersButtonPrev.style.pointerEvents = 'all';
}

partnersButtonPrev.addEventListener('click', function () {
  if (swiper2.slides[0].classList.contains('swiper-slide-active')) {
    partnersButtonPrev.style.opacity = '0.2';
    partnersButtonPrev.style.pointerEvents = 'none';
  }

  if (!swiper2.slides[swiper2.slides.length - 1].classList.contains('swiper-slide-active')) {
    partnersButtonNext.style.opacity = '1';
    partnersButtonNext.style.pointerEvents = 'all';
  }
})

partnersButtonNext.addEventListener('click', function () {
  if (!swiper2.slides[0].classList.contains('swiper-slide-active')) {
    partnersButtonPrev.style.opacity = '1';
    partnersButtonPrev.style.pointerEvents = 'all';
  }

  if (swiper2.slides[swiper2.slides.length - 1].classList.contains('swiper-slide-active')) {
    partnersButtonNext.style.opacity = '0.2';
    partnersButtonNext.style.pointerEvents = 'none';
  }
})

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
const iconMenu = document.querySelector('.header__icon');
const menuBody = document.querySelector('.header__inner-body');
if (iconMenu) {
  iconMenu.addEventListener('click', function () {
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
  })
}

//Navigation --- menu
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener('click', onMenuLinksClick);
  });

  function onMenuLinksClick(e) {
    const menuLink = e.target;
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - 80;

      if (iconMenu.classList.contains('_active')) {
        document.body.classList.remove('_lock');
        iconMenu.classList.remove('_active');
        menuBody.classList.remove('_active');
      }

      window.scrollTo({
        top: gotoBlockValue,
        behavior: 'smooth'
      });
      e.preventDefault();
    }
  }
}

//Navagation --- footer
const footerLinks = document.querySelectorAll('.footer__list-item[data-goto]');
if (footerLinks.length > 0) {
  footerLinks.forEach(footerlink => {
    footerlink.addEventListener('click', onFooterLinksClick);
  });

  function onFooterLinksClick(e) {
    const footerLink = e.target;
    if (footerLink.dataset.goto && document.querySelector(footerLink.dataset.goto)) {
      const gotoBlock = document.querySelector(footerLink.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;

      window.scrollTo({
        top: gotoBlockValue,
        behavior: 'smooth'
      })
      e.preventDefault();
    }
  }
}

//Accordion
document.querySelectorAll('.footer__list-title').forEach((item) => {
  item.addEventListener('click', () => {
    let content = item.nextElementSibling;

    if(content.style.maxHeight){
      document.querySelectorAll('.footer__list-body').forEach((element) => {
        element.style.maxHeight = null;
      })

      document.querySelectorAll('.footer__list').forEach(el => {
        el.classList.remove('active');
      })
    } else{
      document.querySelectorAll('.footer__list-body').forEach((element) => {
        element.style.maxHeight = null;
      })

      document.querySelectorAll('.footer__list').forEach(el => {
        el.classList.remove('active');
      })

      item.closest('.footer__list').classList.add('active');

      content.style.maxHeight = content.scrollHeight + 'px';
    }
  })
})