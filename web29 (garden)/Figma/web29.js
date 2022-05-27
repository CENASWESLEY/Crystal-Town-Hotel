const menu = document.getElementById('header-menu'),
        menuopen = document.getElementById('header-icon-menu'),
        menuclose = document.getElementById('header-icon-close')

if(menuopen){

            menuopen.addEventListener('click', () =>{
          
              menu.classList.add('menu-show')
             
            })
}
if(menuclose){
          
            menuclose.addEventListener('click', () =>{
            
                menu.classList.remove('menu-show')
               
              })
}


//change navbar
window.addEventListener('scroll', () => {

    document.querySelector('header').classList.toggle
    ('window-scroll' , window.scrollY > 0)


});


var swiper = new Swiper(".mySwiper", {
      grabCursor:true,
      centeredSlides:true,
      spaceBetween:0,
      
      loop:true,
      
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },

    grabCursor:true,
    pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
},
});