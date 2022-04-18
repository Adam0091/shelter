
import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js';

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
