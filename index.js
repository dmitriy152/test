if (document.querySelector(".slider__conteiner")) {
    const swiper = new Swiper(".mySwiper", {

        slidesPerView: 1,
        spaceBetween: 30,
        //loop: true, включит бесконечное прокручивание
        mousewheel: true,
        keyboard: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
      setInterval(() => {
        swiper.slideNext();
      }, 6000);
}