import startApp from "./app.mjs";

document.addEventListener('DOMContentLoaded', startApp);

// get dom elements for manipulation
const searchBtn = document.querySelector("#search-button");
const tryNow = document.querySelector(".now");
const tryAgainBtn = document.querySelector(".again");
const container = document.querySelector(".container");

// add event listeners
searchBtn.addEventListener("click", (x) => {
  x.preventDefault();
  container.classList.add("show-result-mode");
});

tryAgainBtn.addEventListener("click", (x) => {
  x.preventDefault();
  container.classList.remove("show-result-mode");
});
