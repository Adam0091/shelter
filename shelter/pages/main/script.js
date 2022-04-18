const result = await fetch('./pets.json');
const PETS = await result.json();

PETS.forEach((element, index) => {
    document.querySelector(".swiper-wrapper").innerHTML += `
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
    `;
});
