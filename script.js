let menuBtn = document.querySelector('.header__menu');
let overlay = document.querySelector('.overlay');
let closeBtn = document.querySelector('.menu__close');

let header = document.querySelector('header');

menuBtn.addEventListener('click', openMenu);

function openMenu() {
  //console.log('click-click');
  overlay.classList.add('overlay--visible');
}

closeBtn.addEventListener('click', closeMenu);

function closeMenu() {
  //console.log('click-click');
  overlay.classList.remove('overlay--visible');
}

let toggle = document.querySelector('.toggle__checkbox');

toggle.addEventListener('change', switchMode);

function switchMode(event) {
  //console.log('switch-switch');
  if (event.target.checked) {
    header.classList.add('header--light');
  } else {
    header.classList.remove('header--light');
  }
}