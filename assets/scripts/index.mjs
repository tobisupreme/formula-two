import startApp, { formatNum } from "./app.mjs";

document.addEventListener('DOMContentLoaded', startApp);

// get dom elements for manipulation
const searchBtn = document.querySelector("#search-button");
const tryNow = document.querySelector(".now");
const tryAgainBtn = document.querySelector(".again");
const container = document.querySelector(".container");
const inputField = document.getElementById('phone');

// set focus to input field on click
tryNow.addEventListener('click', () => {
  inputField.focus();
})

// format phone number in input field
inputField.addEventListener('keydown', formatNum)

// add event listeners
searchBtn.addEventListener("click", (x) => {
  x.preventDefault();
  container.classList.add("show-result-mode");
});

tryAgainBtn.addEventListener("click", (x) => {
  x.preventDefault();
  container.classList.remove("show-result-mode");
});
