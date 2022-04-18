import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js';

const result = await fetch("./pets.json");
const PETS = await result.json();
const DomSlideButtonBegin = document.querySelector(".our-friend__button-begin");
const DomSlideButtonEnd = document.querySelector(".our-friend__button-end");
const OurPetsCurrentSlider = document.querySelector(
    ".our-friend__current-slide"
);


const swiper = new Swiper(".our-friends__slider", {

    navigation: {
        nextEl: ".our-friend__button-next",
        prevEl: ".our-friend__button-prev",
        disabledClass: "our-friend__button--disabled",
        lockClass: "our-friend__button-lock",
    },
    breakpoints: {
        1: {
            slidesPerView: 1,
            // centeredSlides: true,
            spaceBetween: 30,
            grid: {
                fill: "row",
                rows: 3,
            }
        },
        600: {
            slidesPerView: 2,
            spaceBetween: 30,
            grid: {
                fill: "row",
                rows: 3,
            }
        },
        1280: {
            slidesPerView: 4,
            spaceBetween: 30,
            grid: {
                fill: "row",
                rows: 2,
            }
        }
    }
});

main();

function main() {
    addSlides();
    updateButtonBeginAndEnd();

    swiper.on("slideChange", eventSlideChange);
    swiper.on("beforeResize", updateButtonBeginAndEnd);
    document.addEventListener("click", checkEventTargets);
}

function addSlides() {
    let slides = new Array();
    PETS.forEach((element, index) => {
        slides.push(`
        <div class="swiper-slide" data-index="${index}">
            <div class="slide__content" data-index="${index}">
                <div class="slide__wrapper-img" data-index="${index}">
                    <img src="${element.img}" alt="${element.name}" class="slide__img" data-index="${index}">
                </div>

                <div class="slide__pet-name" data-index="${index}">${element.name}</div>

                <div class="slide__wrapper-btn" data-index="${index}">
                    <div class="slide__btn" data-index="${index}">Learn more</div>
                </div>
            </div>
        </div>
        `);

    });

    swiper.appendSlide(slides);
}

function eventSlideChange() {
    let currentSlider = ++swiper.realIndex;
    OurPetsCurrentSlider.innerHTML = `${currentSlider}`;
    updateButtonBeginAndEnd();
}

function checkEventTargets(event) {
    const target = event.target;
    const isButtonBegin =
        target.classList.contains("our-friend__button-begin") ||
        target.parentNode.classList.contains("our-friend__button-begin");

    const isButtonEnd =
        target.classList.contains("our-friend__button-end") ||
        target.parentNode.classList.contains("our-friend__button-end");

    if (isButtonBegin) {
        swiper.slideTo(0, 1000);
        updateButtonBeginAndEnd();
        return;
    }

    if (isButtonEnd) {
        swiper.slideTo(swiper.slides.length, 1000);
        updateButtonBeginAndEnd();
        return;
    }
}

function updateButtonBeginAndEnd() {

    if (swiper.isBeginning) {
        DomSlideButtonBegin.classList.add("our-friend__button--disabled");
    } else {
        DomSlideButtonBegin.classList.remove("our-friend__button--disabled");
    }

    if (swiper.isEnd) {
        DomSlideButtonEnd.classList.add("our-friend__button--disabled");
    } else {
        DomSlideButtonEnd.classList.remove("our-friend__button--disabled");
    }
}
