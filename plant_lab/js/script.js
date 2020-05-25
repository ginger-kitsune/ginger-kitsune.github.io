
//Mask
$('input[name=phone]').mask("+1 (999) 999-9999");

window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__nav'),
    menuItem = document.querySelectorAll('.header__item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('header__nav_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('header__nav_active');
        });
    });
});