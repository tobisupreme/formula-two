import startApp from "./app.mjs";

document.addEventListener('DOMContentLoaded', startApp);

// get dom elements for manipulation
const searchBtn = document.querySelector("#search-button");
const tryNow = document.querySelector(".now");
const tryAgainBtn = document.querySelector(".again");
const container = document.querySelector(".container");

// set focus to input field on click
tryNow.addEventListener('click', () => {
  document.getElementById('phone').focus();
})

// add event listeners
searchBtn.addEventListener("click", (x) => {
  x.preventDefault();
  container.classList.add("show-result-mode");
});

tryAgainBtn.addEventListener("click", (x) => {
  x.preventDefault();
  container.classList.remove("show-result-mode");
});
