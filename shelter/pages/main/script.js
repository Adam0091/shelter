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
            <button class="slide__btn">Learn more</button>
        </div>
    </div>
    </div>
    `
});



const swiper = new Swiper('.our-friends__slider', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 90,
    centeredSlides: true,
    navigation: {
        nextEl: '.our-friend__button-next',
        prevEl: '.our-friend__button-prev',
    },
});