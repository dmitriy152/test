if(document.querySelector(".header__gamburger")) {
 let gamburgerButton = document.querySelector(".header__gamburger")
 let gamburger = document.querySelector(".navigation__conteiner")
 gamburgerButton.addEventListener("click", function(){
    gamburgerButton.classList.toggle("header__gamburger-active")
    gamburger.classList.toggle("navigation__conteiner-active")
 })
}
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
        let inputName = document.querySelector(".input__name")
        let inputPhone = document.querySelector(".input__phone")
        let inputMail = document.querySelector(".input__mail")
        let nameValue = inputName.value
        let phoneValue = inputPhone.value
        let mailValue = inputMail.value
        let xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function(){
            if(this.readyState == 4 &&  this.status == 200){
                myFunction(this.responseText)
            }
            xhttp.open("GET", "",true)
            xhttp.send()

            function myFunction(data) {
                console.log(data)
            }
        }

        inputMail.value = ""
        inputPhone.value = ""
        inputName.value = ""
        popup.classList.remove("popup-active")
    })
    closeButton.addEventListener("click", function(event){
        event.preventDefault()
        popup.classList.remove("popup-active")
    })
}