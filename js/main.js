let elMenuBtn = document.querySelector(".site-header__menu-btn");
let elMenuMobileList = document.querySelector(".site-hidden__nav-list");
let elMenuMobileShow = document.querySelector(".site-hidden__nav-list-translate");
let elMenuImg = document.querySelector(".site-header__menu-img");
let elMenuCloseImg = document.querySelector(".site-hidden__nav-list-img")
let elHeroTranslate = document.querySelector(".site-hidden__hero");
let elHeroSection = document.querySelector(".hero")

elMenuBtn.addEventListener("click" , function(){
    elMenuMobileList.classList.toggle("site-hidden__nav-list-translate")
    // elHeroSection.classList.toggle("site-hidden__hero")
    // if (elMenuMobileList.classList.contains("site-hidden__nav-list-translate")){
    //     elMenuCloseImg.classList.add("site-hidden__nav-list-img")
    // } else { 
    //     elMenuImg.src = "./images.menu-icon.svg"
    // }
})