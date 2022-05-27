let $hamburger = document.querySelector('.header-hamburger')
let $menu = document.querySelector('.header-content > ul')
let $closeBurger = document.querySelector('.close-menu')

$hamburger.addEventListener('click', function(){
    $menu.classList.add('active')
    $closeBurger.classList.add('active')
})

$closeBurger.addEventListener('click', function(){
    $menu.classList.remove('active')
    $closeBurger.classList.remove('active')
})

const swiper = new Swiper(".custom-slider", {
  loop:true,
  slidesPerView: 3,
  autoplay: {
    delay: 1,
    disableOnInteraction: false
  },
  breakpoints: {
    320: {
      slidesPerView: 2
    },
    480: {
      slidesPerView: 3
    }
  },
  speed: 2500,
  lazy: true
});

