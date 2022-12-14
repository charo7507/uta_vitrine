const header = document.getElementById('header')

window.addEventListener('scroll', () => {
    if (window.scrollY >= 50) {
        header.classList.add('scroll-header')
    } else {
        header.classList.remove('scroll-header')
    }
})


var swiper = new Swiper(".popular__container", {
    spaceBetween: 35,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


const accordionItems = document.querySelectorAll('.value__accordion-item')





//Super import

accordionItems.forEach((el) => {
    const accordionHeader = el.querySelector('.value__accordion-header')
    //  console.log(accordionHeader);
    //  console.log(el);

    accordionHeader.addEventListener('click', () => {
        const openItem = document.querySelectorAll('.open')
        toogleItem(el)


        openItem.forEach(it =>{
             if(it){
                it.classList.remove('open')
                }
        })
        // if(openItem && openItem !== el){
        // toogleItem(openItem)
        // }
    })

})

const toogleItem = (item) => {
    const content = item.querySelector('.value__accordion-content')
    if(item.classList.contains('open')){
        content.removeAttribute('style')
    }
    else{
        content.style.height = content.scrollHeight + "px"
        item.classList.add('open')
    }
  
}


const section = document.querySelectorAll('section[id]')

// console.log(section)

function scrollAct (){
    const scrollY = window.pageYOffset
    //  console.log(scrollY);

    section.forEach(current =>{
        const sectionHeight = current.offsetHeight,
               sectionTop = current.offsetTop - 38,
              sectionId = current.getAttribute('id')

              if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                document.querySelector('.nav__menu a[href*=' + sectionId +']').classList.add('act')
              }
              else{
                document.querySelector('.nav__menu a[href*=' + sectionId +']').classList.remove('act')
              }
    })
}

window.addEventListener('scroll', scrollAct)


function up(){
    const scrollUp = document.getElementById('scroll-up')
    if(window.scrollY >= 350){
        scrollUp.classList.add('sow')
    }
    else{
        scrollUp.classList.remove('sow')
    }
}
window.addEventListener('scroll', up)


const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})


sr.reveal(`.home__title, .popular__container, .subcribe__container, .footer__container`)
sr.reveal(`.home__description`, {delay: 500})
sr.reveal(`.home__search`, {delay: 600})
sr.reveal(`.home__value`, {delay: 750})
sr.reveal(`.home__images`, {delay: 800, origin:'bottom'})
sr.reveal(`.logos__img`, {interval: 200})
sr.reveal(`.value__images, .contact__content`, {origin:'left'})
sr.reveal(`.value__content, .contact__images`, {origin:'right'})
sr.reveal(`.cards__content`, {interval: 200})




