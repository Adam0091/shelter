import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js';

const result = await fetch("./pets.json");
const PETS = await result.json();
const DomSlideButtonBegin = document.querySelector(".our-friend__button-begin");
const DomSlideButtonEnd = document.querySelector(".our-friend__button-end");

const swiper = new Swiper(".our-friends__slider", {
    navigation: {
        nextEl: ".our-friend__button-next",
        prevEl: ".our-friend__button-prev",
        disabledClass: "our-friend__button--disabled",
        lockClass: "our-friend__button-lock",
    },
    pagination: {
        el: '.pagination',
        type: 'custom',
        renderCustom: function (swiper, current, total) {
            return `<span>${current}</span>`;
        }

    },
    breakpoints: {
        1: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 30,
            grid: {
                fill: "row",
                rows: 3,
            }
        },
        600: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 30,
            grid: {
                fill: "row",
                rows: 3,
            }
        },
        1280: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 30,
            grid: {
                fill: "row",
                rows: 2,
            }
        }
    },
    on: {
        slideChange: eventSlideChange,
        beforeResize: updateButtonBeginAndEnd,
        breakpoint: function (swiper, breakpointParams) {
            let slides = [];
            const firstPartSlides = sliceArray(swiper.slides, 8);
            for (let i = 0; i < 6; i++) {
                slides = slides.concat(...firstPartSlides);
            }
            let sliceSlides;

            if (breakpointParams.slidesPerView === 4) {
                sliceSlides = sliceArray(slides, 8);
            }
            if (breakpointParams.slidesPerView === 2) {
                sliceSlides = sliceArray(slides, 6);
            }
            if (breakpointParams.slidesPerView === 1) {
                sliceSlides = sliceArray(slides, 3);
            }
            if (sliceSlides) {
                swiper.wrapperEl.innerHTML = '';
                sliceSlides = sliceSlides.map(slides => shuffle(slides));
                slides = [].concat(...sliceSlides);

                swiper.appendSlide(slides)
                swiper.update();
            }
        }
    }
});
main();

function main() {
    addSlides();
    updateButtonBeginAndEnd();
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
    slides = reapiteSlides(slides);
    let sheffleMatrixSlides = sliceArray(slides, 8).map(slides => shuffle(slides));
    slides = [].concat(...sheffleMatrixSlides);
    swiper.appendSlide(slides);
}

function eventSlideChange() {
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

function sliceArray(arr, lengthNewArr) {
    let res = []
    const count = parseInt(arr.length / lengthNewArr)
    for (let i = 0; i < count; i++) {
        res.push(arr.slice(i * lengthNewArr, i * lengthNewArr + lengthNewArr))
    }
    return res;
}

function shuffle(arr) {
    return arr.map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)
}

function reapiteSlides(pets) {
    return [...pets, ...pets, ...pets, ...pets, ...pets, ...pets];
}
