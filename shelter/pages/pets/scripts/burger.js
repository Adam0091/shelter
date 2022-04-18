const bodyDOM = document.querySelector("body");
const pageShadowDOM = document.querySelector(".page__shadow")
const HeaderDOM = document.querySelector(".header");
const HeaderLinkDOM = document.querySelector(".header__link");
const BurgerDOM = document.querySelector(".header__burger");
const NavListDom = document.querySelector(".nav__list");
const NavItemsDOM = document.querySelectorAll(".nav__item");

BurgerDOM.addEventListener("click", toggleBurger);
pageShadowDOM.addEventListener("click", toggleBurger);
NavItemsDOM.forEach((ItemsElement) => ItemsElement.addEventListener("click", toggleBurger));


function toggleBurger() {
    bodyDOM.classList.toggle("lock");
    pageShadowDOM.classList.toggle("page__shadow--active");
    HeaderDOM.classList.toggle("header--active");
    HeaderLinkDOM.classList.toggle("header__link--active");
    BurgerDOM.classList.toggle("header__burger--active");
    NavListDom.classList.toggle("nav__list--active");
}