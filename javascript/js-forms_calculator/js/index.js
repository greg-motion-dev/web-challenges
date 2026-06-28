console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let result;

  // --v-- write your code here --v--

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  const numberA = Number(data.numberA);
  const numberB = Number(data.numberB);

  if (data.operator === "addition"){
    result = add(numberA, numberB);
  } else if (data.operator === "subtraction"){
    result = subtract(numberA, numberB);
  } else if (data.operator === "multiplication"){
    result = multiply(numberA, numberB);
  } else if (data.operator === "division"){
    result = divide(numberA, numberB);
  }
  // --^-- write your code here --^--

  resultOutput.textContent = result;
});


// # Calculator

// Build a calculator that can add, subtract, multiply and divide two numbers.

// Add the following functionality to the submit event handler:

// - Use the values of the `numberA` and `numberB` inputs to perform the operation selected by the `operator` input on them. You can use the provided helper functions `add()`, `subtract()`, `multiply()` and `divide()`.
// - Assign the result to the `result` variable.

// > 💡 Make sure to thoroughly test the addition operation, as it can have unexpected results.

// > 💡 You only have to touch the [`js/index.js`](./js/index.js) file.
