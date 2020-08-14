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
let header = document.querySelector('header');
let cssStyle = document.querySelector('#theme-style');

toggle.addEventListener('change', switchMode);

function switchMode(event) {
  //console.log('switch-switch');
  if (event.target.checked) {
    //header.classList.add('header--light');
    cssStyle.href = "css/light.css";
  } else {
    //header.classList.remove('header--light');
    cssStyle.href = "";
  }
}