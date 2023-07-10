'use strict';

import addDeviceClass from './modules/isMobile';
import addMenuClass from './modules/menu';

const preloader = document.querySelector('.preloader');

document.body.onload = function(){
  setTimeout(function() {
    if(!preloader.classList.contains('done')){
      preloader.classList.add('done');
    }
  }, 500);
}

// Which device
addDeviceClass();

//Menu
addMenuClass();