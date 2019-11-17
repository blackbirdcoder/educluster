//slider project
var swiper = new Swiper("#swiperContainerOne", {
  slidesPerView: 1,
  spaceBetween: 40,
  navigation: {
    nextEl: ".button-slider-right-play",
    prevEl: ".button-slider-left-play"
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

//slider people
var swiperTwo = new Swiper("#swipeContainerTwo", {
  slidesPerView: 1,
  spaceBetween: 40,
  navigation: {
    nextEl: ".button-slider-people-left-play",
    prevEl: ".button-slider-people-right-play"
  },
  loop: true,
  breakpoints: {
    480: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 5
    },
    960: {
      slidesPerView: 4,
      spaceBetween: 20
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 119
    }
  }
});
