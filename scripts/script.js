const pageBody = document.querySelector("body");
const theme = document.querySelectorAll("input");

function pageMode() {
  pageBody.classList.toggle("page__theme--light");
  pageBody.classList.toggle("page__theme--dark");
}

theme.addEventListener('click', pageMode);