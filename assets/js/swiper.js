const swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  //一個畫面顯示3個內容
  
  spaceBetween: 48,
  //每個內容之間的間隔為 48px 。
  //間隔的設置通過 JavaScript 傳遞到數據庫，然後返回並應用，而不是通過本地 CSS 設置。
   // 左右箭頭    
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});