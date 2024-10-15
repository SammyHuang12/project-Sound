
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
    speed: 800,
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

const statistics 	= document.querySelector(".statistics");
const yearSum 		= document.querySelector(".yearSum");			//25
const caseSum 		= document.querySelector(".caseSum");			//2000
const supervisorSum = document.querySelector(".supervisorSum");		//100
const customerSum 	= document.querySelector(".customerSum");		//50

const obj  = { value: 0 };
const obj2 = { value: 0 };
const obj3 = { value: 0 };
const obj4 = { value: 0 };


gsap.registerPlugin(ScrollTrigger);

gsap.to(obj, 2.5, {
    value: 25, ease: Power0.easeIn,
    roundProps: {
        value: 1
    },
    scrollTrigger: {
        trigger: statistics,
		markers:false,
        start: "top 50%",
        end: "bottom 50%",
        toggleActions: "restart none none none"
    },
    onUpdate: function () {
        yearSum.innerHTML = obj.value;
    }
})

gsap.to(obj2, 2.5, {
    value: 2000, ease: Power0.easeIn,
    roundProps: {
        value: 1
    },
    scrollTrigger: {
        trigger: statistics,
		markers:false,
        start: "top 50%",
        end: "bottom 50%",
        toggleActions: "restart none none none"
    },
    onUpdate: function () {
        caseSum.innerHTML = obj2.value;
    }
})
gsap.to(obj3, 2.5, {
    value: 100, ease: Power0.easeIn,
    roundProps: {
        value: 1
    },
    scrollTrigger: {
        trigger: statistics,
		markers:false,
        start: "top 50%",
        end: "bottom 50%",
        toggleActions: "restart none none none"
    },
    onUpdate: function () {
        supervisorSum.innerHTML = obj3.value;
    }
})
gsap.to(obj4, 2.5, {
    value: 50, ease: Power0.easeIn,
    roundProps: {
        value: 1
    },
    scrollTrigger: {
        trigger: statistics,
		markers:false,
        start: "top 50%",
        end: "bottom 50%",
        toggleActions: "restart none none none"
    },
    onUpdate: function () {
        customerSum.innerHTML = obj4.value;
    }
})
