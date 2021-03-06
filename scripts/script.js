// theme type
const pageBody = document.querySelector('body');
const theme = document.querySelector('.theme__type');

function pageMode() {
  pageBody.classList.toggle('page__theme--light');
  pageBody.classList.toggle('page__theme--dark');
}

theme.addEventListener('click', pageMode);

// sliding menu
const menuLogo = document.querySelector('.menu__slide');
const menuBar = document.querySelector('.menu__slide--bar');

function menuClick() {
  menuBar.classList.toggle('menu__slide--clicked');
}

menuLogo.addEventListener('click', menuClick);