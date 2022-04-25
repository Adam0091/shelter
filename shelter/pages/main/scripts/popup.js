async function initializePopups() {
    const result = await fetch("./pets.json");
    const PETS = await result.json();

    const bodyDOM = document.querySelector("body");

    const eventPopup = new EventPopup(PETS);

    document.addEventListener("click", eventPopup);
    document.addEventListener("mouseover", eventPopup);
    document.addEventListener("mouseout", eventPopup);
}

function openPopup(index, PETS) {
    bodyDOM.classList.toggle("popup__lock");
    const PET = PETS[index];

    document.querySelector('.popup__container').innerHTML += `
    <div class="popup" id="popup">
        <div class="popup__body">
            <div class="popup__content">
                <img src="${PET.img}" alt="animal-photo" class="popup__img">
                <div class="popup__text">
                    <h3 class="popup__name"> ${PET.name}</h3>
                    <h4 class="popup__type-and-breed"> ${PET.type} - ${PET.breed}</h4>
                    <p class="popup__description"> ${PET.description}</p>
                    <ul class="popup__list">
                        <li class="popup__item"><b>Age:</b> ${PET.age}</li>
                        <li class="popup__item"><b>Inoculations:</b> ${PET.inoculations}</li>
                        <li class="popup__item"><b>Diseases:</b> ${PET.diseases}</li>
                        <li class="popup__item"><b>Parasites:</b> ${PET.parasites}</li>
                    </ul>
                </div>
                <button class="popup__close">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.42618 6.00003L11.7046 1.72158C12.0985 1.32775 12.0985 0.689213 11.7046 0.295433C11.3108 -0.0984027 10.6723 -0.0984027 10.2785 0.295433L5.99998 4.57394L1.72148 0.295377C1.32765 -0.098459 0.68917 -0.098459 0.295334 0.295377C-0.0984448 0.689213 -0.0984448 1.32775 0.295334 1.72153L4.57383 5.99997L0.295334 10.2785C-0.0984448 10.6723 -0.0984448 11.3108 0.295334 11.7046C0.68917 12.0985 1.32765 12.0985 1.72148 11.7046L5.99998 7.42612L10.2785 11.7046C10.6723 12.0985 11.3108 12.0985 11.7046 11.7046C12.0985 11.3108 12.0985 10.6723 11.7046 10.2785L7.42618 6.00003Z" fill="#292929"/>
                    </svg>
                </button>
            </div>
        </div>
    </div>
`;
}

function closePopup() {
    bodyDOM.classList.toggle("popup__lock");
    document.querySelector('#popup').remove();
}
class EventPopup {
    constructor(PETS) {
        this.PETS = PETS;
    }
    handleEvent(event) {
        const target = event.target;
        switch (event.type) {
            case 'click':
                if (target.closest(".slide__content")) {
                    const index = target.getAttribute("data-index");
                    openPopup(index, this.PETS);
                    return;
                }
                if (target.classList.contains('popup__body') ||
                    target.closest('.popup__close')
                ) {
                    closePopup();
                }
                break;
            case 'mouseover':
                if (target.classList.contains('popup__body')) {
                    document.querySelector(".popup__close").classList.toggle('active');
                }
                break;
            case 'mouseout':
                if (target.classList.contains('popup__body')) {
                    document.querySelector(".popup__close").classList.toggle('active');
                }
                break;
        }
    }
}

initializePopups();