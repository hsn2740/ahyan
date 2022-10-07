let navbara = document.querySelector(".navbara");



window.addEventListener("scroll",function(e) {

    if(this.window.scrollY > 50){
        navbara.style.background = "#262431";
        document.querySelector(".navbara").style.paddingTop = "0";
        document.querySelector(".navbara").style.paddingBottom = "0";
        document.querySelector(".navbara").style.transition = "0.2s";
    }else{
        navbara.style.background = "transparent";
        document.querySelector(".navbara").style.paddingTop = "1rem";
    }
    
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 40,
    loopFillGroupWithBlank: true,
    loop: true,
    freeMode: true,
    autoplay: {
        delay: 2000,
      },
      breakpoints: {
        "@0.00": {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        "@0.75": {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        "@1.00": {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        "@1.50": {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      },
  });

  let videoPlayer = document.querySelector(".videoPlayer");
  function openVideoPrev(){

    videoPlayer.style.display = "block";
  }

  function videoprevClose(){
    videoPlayer.style.display = "none";
    document.querySelector("video").pause();
  }



  var swiper = new Swiper(".thisSwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });

  let valueDisplays = document.querySelectorAll("#countme");
  let interval = 4000;
  
  valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
      startValue += 1;
      valueDisplay.textContent = startValue;
      if (startValue == endValue) {
        clearInterval(counter);
      }
    }, duration);
  });


  AOS.init({
    duration: 1000,
  });



function menuOpen(){
  if(document.querySelector(".mdnav").style.left === "100%"){
    document.querySelector(".mdnav").style.left = "50%";
  }else{
    document.querySelector(".mdnav").style.left = "100%";
  }

  console.log("hi baby")
  
}


