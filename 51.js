// AOS.init();

const main_menu=document.querySelectorAll(".main_menulist>li");
const sub_menu=document.querySelectorAll(".sub_pagelist");
console.log(main_menu , sub_menu)

for(let i=0;i<main_menu.length;i++){
    main_menu[i].addEventListener("mouseover",e=>{
        sub_menu[i].style.display="block";
        // main_menu[i].classList.remove('is_on');

    })
    main_menu[i].addEventListener("mouseout",e=>{
        sub_menu[i].style.display="none";
        // main_menu[i].classList.add('is_on');
    })
}


// 메인비주얼 슬라이드
var swiper = new Swiper(".mySwiper_main", {
    slidesPerView: "auto",
    loop: true,
    navigation: {
      nextEl: ".mySwiper_main .swiper-button-next",
      prevEl: ".mySwiper_main .swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
      },
  });