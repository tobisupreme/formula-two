import { getNetworkOperators, getGreetings } from "./data.mjs";

function startApp() {
  console.log("..running");
}

// Functions to format phone number in input field as user types
export function formatNum() {
  const inputField = document.getElementById("phone");

  const formattedValue = formatNumValue(inputField.value);

  inputField.value = formattedValue;
}
function formatNumValue(num) {
  if (!num) return num;

  // remove non digits from inputted number
  const phoneNum = num.replace(/[^\d]/g, "");

  let phoneNumLength = phoneNum.length;

  if (phoneNumLength < 4) {
    return phoneNum;
  }
  if (phoneNum.startsWith("0") && phoneNumLength < 7) {
    return `${phoneNum.slice(1, 2)} ${phoneNum.slice(2, 5)} ${phoneNum.slice(5)}`;
  }
  if (phoneNumLength < 7) {
    return `${phoneNum.slice(0, 2)} ${phoneNum.slice(2, 5)} ${phoneNum.slice(5)}`;
  }
  if (phoneNum.startsWith("0") && phoneNumLength < 10) {
    return `${phoneNum.slice(1, 2)} ${phoneNum.slice(2, 5)} ${phoneNum.slice(5)}`;
  }
  if (phoneNumLength < 10) {
    return `${phoneNum.slice(0, 2)} ${phoneNum.slice(2, 5)} ${phoneNum.slice(5)}`;
  }
  if (phoneNum.startsWith("0") && phoneNumLength >= 10) {
    return `${phoneNum.slice(1, 4)} ${phoneNum.slice(4, 7)} ${phoneNum.slice(7)}`;
  }
  if (phoneNumLength >= 10) {
    return `${phoneNum.slice(0, 3)} ${phoneNum.slice(3, 6)} ${phoneNum.slice(6)}`;
  }
}

// Function to show matching operator to user
export function showMatchingServiceProvider() {
  let inputField = document.querySelector("#phone");

  // get value from input field as string
  let phoneNum = inputField.value.toString();

  // check if the value matches any prefixes in the network operator object
  const networkName = getMatchingNetworkOperator(phoneNum);

  // get the img element to display network operator logo with
  let logo = document.querySelector(".logo");

  // update headline
  updateHeadline(networkName, phoneNum);

  if (networkName) {
    // if network name is a match, display the corresponding logo
    logo.src = `./assets/img/logo/${networkName.toLowerCase()}.png`;
    logo.classList.remove("hidden");
  } else {
    // if network name is not found, display error image
    logo.classList.remove("hidden");
    logo.src = `./assets/img/not-found.svg`;
  }
}

// Function to search network operator prefixes for a match with the value from input field
function getMatchingNetworkOperator(phoneNum) {
  phoneNum = phoneNum.replace(/[^\d]/g, "");
  phoneNum = "0" + phoneNum;

  const networkOperators = getNetworkOperators();

  // variable to hold matching network operator if found
  let matchingNetworkOperator = "";

  // get a list of names network operators
  let listOfOperators = [];
  for (let operatorName in networkOperators) {
    // populate empty array with names of network operators
    listOfOperators.push(operatorName);
  }

  for (let network of listOfOperators) {
    // Loop through all network operator names in the list

    for (let operatorPrefix of networkOperators[network]) {
      // for every network operator, loop through the array of prefixes

      if (phoneNum.startsWith(operatorPrefix) && phoneNum.length === 11) {
        // if a prefix matches the value of the input field, store the corresponding network name in the variable matchingNetworkOperator
        matchingNetworkOperator = network;
      }
    }
  }

  // return the variable (containing the matching network name)
  return matchingNetworkOperator;
}

// Function to update headline texts when showing results
function updateHeadline(network, num) {
  if (!num.startsWith("0")) {
    num = num.replace(/[^\d]/g, "");
    num = `0${num.slice(0, 3)} ${num.slice(3, 6)} ${num.slice(6)}`;
  } else {
    num = num.replace(/[^\d]/g, "");
    num = `${num.slice(0, 4)} ${num.slice(4, 7)} ${num.slice(7)}`;
  }

  const greetings = getGreetings();
  // get random greeting
  const greeting = () => {
    const random = Math.floor(Math.random() * greetings.length);
    return greetings[random];
  };
  // get the headline text elements
  const title = document.querySelector(".result-title");
  const headline = document.querySelector(".result-headline");
  const two = document.querySelector(".two");
  let nameBox = document.getElementById("name");

  if (network && nameBox.value) {
    let name = document.getElementById("name").value;
    name = properCase(name);
    title.textContent = greeting();
    headline.textContent = `${name}, we scanned through the database and are pleased to inform you that we found it!`;
    two.textContent = `${num} is subscribed to ${network}'s network.`;
  } else if (network) {
    title.textContent = greeting();
    headline.textContent = `We scanned through the database and are pleased to inform you that we found it!`;
    two.textContent = `${num} is subscribed to ${network}'s network.`;
  } else {
    title.textContent = `OOPS!`;
    headline.textContent = `Sorry, we couldn't find your service provider.`;
    two.textContent = "";
  }
}

// Function to clear results
export function clearResult() {
  const title = document.querySelector(".result-title");
  const headline = document.querySelector(".result-headline");
  const two = document.querySelector(".two");
  const logo = document.querySelector(".logo");

  title.textContent = `OOPS!`;
  headline.textContent = `Sorry, we couldn't find your service provider.`;
  two.textContent = "";
  logo.classList.remove("hidden");
  logo.src = `./assets/img/not-found.svg`;
}

// Function to return user name in proper case
function properCase(name) {
  let names = name.split(" ");
  let finalName = names
    .map((name) => {
      return name[0].toUpperCase() + name.slice(1);
    })
    .join(" ");
  return finalName;
}

// ======= DO NOT EDIT ============== //
export default startApp;
// ======= EEND DO NOT EDIT ========= //
