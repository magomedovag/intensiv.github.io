const burger = document.querySelector('.burger')
const menu = document.querySelector('.menu__list')
const item = document.querySelector('.menu__list li')

function active() {
    burger.addEventListener('click', () => {
        menu.classList.toggle('menu-active');
        burger.classList.toggle('toggle');


    })
}
active();