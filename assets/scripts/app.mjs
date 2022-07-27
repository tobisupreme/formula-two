import { getNetworkOperators, getGreetings } from "./data.mjs";

// show network operator logo of user's phone number
export function showLogo() {
    // Get object of network operators
    const networkOperators = getNetworkOperators();
  
    // Get phone number
    let inputField = document.querySelector("#phone");
    // add event listener to input field
    inputField.addEventListener("input", displayMatchingServiceProvider);
  
    // Function to display matching operator as the user types in the input field
    function displayMatchingServiceProvider() {
      // get value from input field as string
      let phoneNum = inputField.value.toString();
  
      // check if the value matches any prefixes in the network operator object
      let networkName = getMatchingNetworkOperator(phoneNum);
  
      // get the img element to display network operator logo with
      let logo = document.querySelector(".logo");
  
      if (networkName) {
        // if network name is a match, display the corresponding logo
        logo.src = `./assets/img/logo/${networkName.toLowerCase()}.png`;
        logo.classList.remove("hidden");
      } else {
        // if network name is not found, display nothing
        logo.classList.add("hidden");
      }
    }
  
    // Function to search network operator prefixes for a match with the value from input field
    function getMatchingNetworkOperator(phoneNum) {
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
  }
    