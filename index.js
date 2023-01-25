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
if (document.querySelector(".popup")){
    let popup = document.querySelector(".popup")
    let openPopup = document.querySelector(".reserve__button")
    let sendButton = document.querySelector(".send")
    let closeButton = document.querySelector(".close")
    openPopup.addEventListener("click", function(){
        popup.classList.add("popup-active")
    })
    sendButton.addEventListener("click", function(event){
        event.preventDefault()
        popup.classList.remove("popup-active")
    })
    closeButton.addEventListener("click", function(event){
        event.preventDefault()
        popup.classList.remove("popup-active")
    })
}