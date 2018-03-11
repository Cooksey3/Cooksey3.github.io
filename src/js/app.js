const modal = document.querySelector(".about-me");
const trigger = document.querySelector(".trigger");
const closeButton = document.querySelector(".close-button");

  function toggleModal() {
      modal.classList.toggle("show-modal");
  }

  function windowOnClick(event) {
      if (event.target === modal) {
          toggleModal();
      }
  }

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("slider1-image");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1} 
    x[slideIndex-1].style.display = "block"; 
    setTimeout(carousel, 3000); // Change image every 2 seconds
}

var slide2Index = 0;
carousel2();

function carousel2() {
    var i;
    var x = document.getElementsByClassName("slider2-image");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    slide2Index++;
    if (slide2Index > x.length) {slide2Index = 1} 
    x[slide2Index-1].style.display = "block"; 
    setTimeout(carousel2, 3000); // Change image every 2 seconds
}

var slide3Index = 0;
carousel3();

function carousel3() {
    var i;
    var x = document.getElementsByClassName("slider3-image");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    slide3Index++;
    if (slide3Index > x.length) {slide3Index = 1} 
    x[slide3Index-1].style.display = "block"; 
    setTimeout(carousel3, 3000); // Change image every 2 seconds
}