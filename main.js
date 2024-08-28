import './assets/scss/all.scss';
console.log("Hello world!");


var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay:true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    540: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});


var swiper = new Swiper(".read-mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  grid:{
    rows:1,
  },
  breakpoints: {
    540: {
      grid:{
        rows: 3,
      },
    },
  },
});