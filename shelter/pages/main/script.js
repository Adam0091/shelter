import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js';
const result = await fetch('./pets.json');
const PETS = await result.json();

let domPetsHTML = document.querySelector(".swiper-wrapper");
PETS.forEach(element => {
    domPetsHTML.innerHTML += `
    <div class="swiper-slide">
    <div class="slide__content">
        <div class="slide__wrapper-img">
            <img src="${element.img}" alt="${element.name}" class="slide__img">
        </div>
        <div class="slide__pet-name">${element.name}</div>
        <div class="slide__wrapper-btn">
            <div class="slide__btn">Learn more</div>
        </div>
    </div>
    </div>
    `;
});



const swiper = new Swiper('.our-friends__slider', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 90,
    simulateTouch: false,
    navigation: {
        nextEl: '.our-friend__button-next',
        prevEl: '.our-friend__button-prev',
        disabledClass: 'our-friend__button--disabled'
    },
    breakpoints: {
        1: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1280: {
            slidesPerView: 3,
            spaceBetween: 90,
        }
    }
});