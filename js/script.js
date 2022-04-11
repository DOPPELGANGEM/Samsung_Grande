'use strict'

//swiper section_02 (삼성닷컴 단독 예약 판매 혜택)
var swiper_02_pc = new Swiper(".section_02 .sec_samsung_dotcom_box .slide_right_area_wrap", {
  loop : true,
  pagination: { 
    el: ".section_02 .swiper-pagination", 
    clickable: true, 
  },
});

//swiper section_02_mo버젼 혜택(1,2,3)
var swiper= Swiper;
var init = false;
function swiperMode_02() {
  let mobile = window.matchMedia('(min-width: 0px) and (max-width: 768px)');
  let tablet = window.matchMedia('(min-width: 769px) and (max-width: 1440px)');
  let desktop = window.matchMedia('(min-width: 1441px)');

  // Enable (for mobile)
  if(mobile.matches) {
    if (!init) {
      init = true;
      swiper = new Swiper('.section_02 .sec_benefit_box_slide_mo_wrap', {
        initialSlide: 2,
        slidesPerView: 2,
        loop: true,
      });
    }
  }

  // Disable (for tablet)
  else if(tablet.matches) {
    swiper.destroy();
    init = false;
  }

  // Disable (for desktop)
  else if(desktop.matches) {
    swiper.destroy();
    init = false;
  }
}

window.addEventListener('load', function() {
  swiperMode_02();
});

window.addEventListener('resize', function() {
  swiperMode_02();
});


//swiper section_04 (삼성그랑데와 함께하는 슬기로운 집콕 생활)
var menu = ['01. 플렉서블 올인원 컨트롤', '02. AI 의류 케어', '03. 안심위생 솔루션']
var swiper = new Swiper(".section_04 .sec_04_slide_wrap", {
  pagination: {
      el: '.section_04 .swiper-pagination',
      clickable: true,
        renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (menu[index]) + '</span>';
      },
    },
  navigation: {   
    nextEl: ".section_04 .swiper-button-next",
    prevEl: ".section_04 .swiper-button-prev",
  },
});

//swiper section_05 (30만 포인트로 살 수 있는 제품)
var swiper = new Swiper(".section_05 .sec_05_slide_wrap", {
  initialSlide: 2,
  slidesPerView: 1,
  loop : true,
  breakpoints: {
    768 : {
      loop : false,
      spaceBetween : 40,
      slidesPerView: 4,
      initialSlide: 1,
      navigation: {   
        nextEl: ".section_05 .swiper-button-next",
        prevEl: ".section_05 .swiper-button-prev",
      },
    },
  },
});

//swiper section_06 (BESPOKE로 만나보세요)
var swiper = Swiper;
var init = false;
function swiperMode_06() {
  let mobile = window.matchMedia('(min-width: 0px) and (max-width: 768px)');
  let tablet = window.matchMedia('(min-width: 769px) and (max-width: 1440px)');
  let desktop = window.matchMedia('(min-width: 1440px)');

  // Enable (for mobile)
  if(mobile.matches) {
    if (!init) {
      init = true;
      swiper = new Swiper('.section_06 .sec_06_slide_wrap', { 
        slidesPerView: 1,
        loop: true,
        pagination : {
          el : '.section_06 .swiper-pagination',
          clickable: true,
        },
      });
    }
  }

  // Enable (for tablet)
  else if(tablet.matches) {
    init = true;
    swiper= new Swiper('.section_06 .sec_06_slide_wrap', { 
      slidesPerView: 1,
      loop: true,
      pagination : {
        el : '.section_06 .swiper-pagination',
        clickable: true,
      },
      navigation: {   
        nextEl: ".section_06 .swiper-button-next",
        prevEl: ".section_06 .swiper-button-prev",
      }, 
    });
  }

  // Enable (for desktop)
  else if(desktop.matches) {
  init = true;
  swiper = new Swiper('.section_06 .sec_06_slide_wrap', { 
      slidesPerView: 1,
      loop: true,
      pagination : {
        el : '.section_06 .swiper-pagination',
        clickable: true,
      },
      navigation: {   
        nextEl: ".section_06 .swiper-button-next",
        prevEl: ".section_06 .swiper-button-prev",
      }, 
    });
  }
}

window.addEventListener('load', function() {
  swiperMode_06();
});

window.addEventListener('resize', function() {
  swiperMode_06();
});










