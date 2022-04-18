const result = await fetch('./../pets.json');
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

        <div class="slide__popup">
            <div class="popup__container">
                <div class="popup__wrapper-img">
                    <img src="" alt="animal-photo" class="popup__img">
                </div>

                <div class="popup__text">
                    <h3 class="popup__name-pet"></h3>
                    <h4 class="popup__type-and-breed"></h4>
                    <p class="popup__discription"></p>

                    <ul class="popup__list">
                        <div class="popup__item">
                            <span class="popup__span">Age:</span>
                        </div>
                        <div class="popup__item">
                            <span class="popup__span">Inoculations:</span>
                        </div>
                        <div class="popup__item">
                            <span class="popup__span">Diseases:</span>
                        </div>
                        <div class="popup__item">
                            <span class="popup__span">Parasites:</span>
                        </div>
                    </ul>
                </div>


                <div class="popup__button">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.42618 6.00003L11.7046 1.72158C12.0985 1.32775 12.0985 0.689213 11.7046 0.295433C11.3108 -0.0984027 10.6723 -0.0984027 10.2785 0.295433L5.99998 4.57394L1.72148 0.295377C1.32765 -0.098459 0.68917 -0.098459 0.295334 0.295377C-0.0984448 0.689213 -0.0984448 1.32775 0.295334 1.72153L4.57383 5.99997L0.295334 10.2785C-0.0984448 10.6723 -0.0984448 11.3108 0.295334 11.7046C0.68917 12.0985 1.32765 12.0985 1.72148 11.7046L5.99998 7.42612L10.2785 11.7046C10.6723 12.0985 11.3108 12.0985 11.7046 11.7046C12.0985 11.3108 12.0985 10.6723 11.7046 10.2785L7.42618 6.00003Z" fill="#292929"/>
                    </svg>
                </div>
            </div>
        </div>
    </div>
    `;
});