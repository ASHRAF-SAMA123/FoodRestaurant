let bars=document.getElementById("bars")
let navbar =document.querySelector(".navbar")

bars.onclick = () =>{
    bars.classList.toggle("fa-times") //toggle=بتعمل عمل add &remove
    navbar.classList.toggle("active")
}

window.scroll =() =>{
    bars.classList.remove("fa-times") 
    navbar.classList.remove("active")
}
let searchIcon=document.getElementById("search-icon")
let searchFrom=document.getElementById("search-from")
let close=document.getElementById("close")
searchIcon.onclick = ()=>{
    searchFrom.classList.toggle("active")
}
close.onclick = ()=>{
    searchFrom.classList.remove("active")
}

var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    slidesPerView: 1,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
    loop:true,
  });
var swiper = new Swiper(".review-slider", {
  slidesPerView: 3,
  spaceBetween: 15,
  autoplay: {
          delay: 1500,
          disableOnInteraction: false,
        },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },   
  loop:true,
  breakpoints:{
    0:{
      slidesPerView: 1,
    },
    640:{
      slidesPerView: 2,
    },
    768:{
      slidesPerView: 2,
    },
    1024:{
      slidesPerView: 3,
    },
  }
});

// function loader(){
//   document.querySelector(".loader").classList.add("fade-out")
// }
// function fadeOut(){
//   SET(loader, 3000)
// }

// window.onload = fadeOut;