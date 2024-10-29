var swiper = new Swiper(".slide-intro", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  // autoplay: true,
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
});

var swiper2 = new Swiper(".slide-introduce", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});

var swiper = new Swiper(".scroll-oled", {
  // direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 30,
  mousewheel: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".slide-qd", {
  slidesPerView: "auto",
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".scroll-news", {
  // direction: "vertical",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});