
// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

// init Swiper:

import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';

console.log("Hello world!");

const bannerSwiper = new Swiper('.banner-swiper', {
    // Optional parameters
    direction: 'horizontal',
    speed: 2000,
    loop: true,

    autoplay: {
        delay: 5000,
    },
  
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    },

});

const coustomerSwiper = new Swiper('.customer-swiper', {
    // Optional parameters
    direction: 'horizontal',
    speed: 2000,
    loop: true,

    autoplay: {
        delay: 3000,
    },
  
    spaceBetween: 32,
  	slidesPerView: 2,

  	breakpoints: {
  	  	576: {
  	  	  //當螢幕寬度大於等於576
  	  	  slidesPerView: 2,
  	  	},
  	  	992: {
  	  	  //當螢幕寬度大於等於992
  	  	  slidesPerView: 4,
  	  	},
  	  	1200: {
  	  	  //當螢幕寬度大於等於1200
  	  	  slidesPerView: 6,
  	  	},
  	},

});
