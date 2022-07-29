import startApp, { formatNum, clearResult } from "./app.mjs";

document.addEventListener("DOMContentLoaded", startApp);

// get dom elements for manipulation
const searchBtn = document.querySelector("#search-button");
const tryNow = document.querySelector(".now");
const tryAgainBtn = document.querySelector(".again");
const container = document.querySelector(".container");
const inputField = document.getElementById("phone");
const clear = document.querySelector(".delete-forever-wrap");

// clear input field
clear.addEventListener("click", () => {
  inputField.value = "";
  clearResult();
  inputField.focus();
});

// set focus to input field on click
tryNow.addEventListener("click", () => {
  inputField.focus();
});

// format phone number in input field
inputField.addEventListener("input", formatNum);

// add event listeners
searchBtn.addEventListener("click", (x) => {
  x.preventDefault();
  container.classList.add("show-result-mode");
});

tryAgainBtn.addEventListener("click", (x) => {
  x.preventDefault();
  container.classList.remove("show-result-mode");
});
