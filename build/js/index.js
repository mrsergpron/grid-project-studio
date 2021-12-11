const btnMenu = document.querySelector('.menu__button');
const menuHumburger = document.querySelector('.menu__humburger');
const menuList = document.querySelector('.menu__list');
console.log(menuHumburger);

btnMenu.addEventListener('click', menuClickHandler);

function menuClickHandler(event) {
  menuList.classList.toggle('menu__list--active');
  menuHumburger.classList.toggle('menu__humburger--active');
}
