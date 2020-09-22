const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeBtn = document.querySelector('.menu__close'),
    menuLink = menu.querySelectorAll('.menu__link');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});
   
closeBtn.addEventListener('click', () => {
    menu.classList.remove('active');
});

menuLink.forEach (link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
    });
});

const counters = document.querySelectorAll('.skills__percents-counter'),
        lines = document.querySelectorAll('.skills__percents-line span');

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});