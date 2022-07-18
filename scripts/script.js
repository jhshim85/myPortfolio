const pageBody = document.querySelector('body');
const theme = document.querySelector('.theme__type--dark');

function pageMode() {
  pageBody.classList.toggle('page__theme--light');
  pageBody.classList.toggle('page__theme--dark');
}

theme.addEventListener('click', pageMode);