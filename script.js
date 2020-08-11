let menuBtn = document.querySelector('.header__menu');
let overlay = document.querySelector('.overlay');
let closeBtn = document.querySelector('.menu__close');

let header = document.querySelector('header');
let cssStyle = document.querySelector('#theme-style');

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

let toggle = document.querySelector('.toggle__checkbox');

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