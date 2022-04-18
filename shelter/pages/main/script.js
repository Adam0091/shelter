const result = await fetch('./pets.json');
const PETS = await result.json();

PETS.forEach((element, index) => {
    document.querySelector(".swiper-wrapper").innerHTML += `
    <div class="swiper-slide">
        <div class="slide__content">
            <div class="slide__wrapper-img">
                <img src="${element.img}" alt="${element.name}" class="slide__img">
            </div>

            <div class="slide__pet-name">${element.name}</div>

            <div class="slide__wrapper-btn" data-index="${index}">
                <div class="slide__btn">Learn more</div>
            </div>
        </div>
    </div>
    `;
});
