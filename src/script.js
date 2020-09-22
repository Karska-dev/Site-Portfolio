// open/close menu button
let menuBtn = document.querySelector('.header__menu');
let overlay = document.querySelector('.overlay');
let closeBtn = document.querySelector('.menu__close');

menuBtn.addEventListener('click', openMenu);

function openMenu() {
  //console.log('click-click');
  overlay.classList.add('overlay--visible');
  document.body.classList.add('noscroll');
}

closeBtn.addEventListener('click', closeMenu);

function closeMenu() {
  //console.log('click-click');
  overlay.classList.remove('overlay--visible');
  document.body.classList.remove('noscroll');
}

// menu links - fix for exit from menu
let menuLinks = document.querySelectorAll('.menu__link');

Object.values(menuLinks).map((link) => {link.addEventListener('click', closeMenu)});

// light/dark mode switch or toggle
let toggle = document.querySelector('.toggle__checkbox');

toggle.addEventListener('change', switchMode);

function switchMode(event) {
  if (event.target.checked) {
    document.body.setAttribute('data-theme', 'light');
  } else {
    document.body.removeAttribute('data-theme');
  }
}