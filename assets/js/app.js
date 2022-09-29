




const header = document.getElementById('header')

window.addEventListener('scroll', () =>{
    if (window.scrollY >= 50) {
        header.classList.add('scroll-header')
    } else {
        header.classList.remove('scroll-header')
    }
})















var swiper = new Swiper(".popular__container", {
    spaceBetween: 32, 
    // grabCursor: true,
    // centeredSlides: true,
    // slidesPerView: 'auto',
    // loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

