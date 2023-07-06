'use strict';

import isMobile from './modules/isMobile';

const preloader = document.querySelector('.preloader');

document.body.onload = function(){
  setTimeout(function() {
    if(!preloader.classList.contains('done')){
      preloader.classList.add('done');
    }
  }, 500);
}

// Which device
if (isMobile.any()) {
  document.body.classList.add('_touch');
} else {
  document.body.classList.add('_pc');
}