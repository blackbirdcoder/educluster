var swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  spaceBetween: 40,
  navigation: {
    nextEl: ".icon-btn-slider-right",
    prevEl: ".icon-btn-slider-left"
  },
  loop: true,
  breakpoints: {
    960: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 10
    }
  }
});
