console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

pizzaInput1.addEventListener("input", () => {
  // Write your code here
  const pizzaSize1 = Number(pizzaInput1.value);
  const pizzaSize2 = Number(pizzaInput2.value);
  calculatePizzaGain(pizzaSize1, pizzaSize2);
  updatePizzaDisplay(pizza1, pizzaSize1);
  updateOutputColor(pizzaSize1, pizzaSize2);
});

pizzaInput2.addEventListener("input", () => {
  // Write your code here
  const pizzaSize1 = Number(pizzaInput1.value);
  const pizzaSize2 = Number(pizzaInput2.value);
  calculatePizzaGain(pizzaSize1, pizzaSize2);
  updatePizzaDisplay(pizza2, pizzaSize2);
  updateOutputColor(pizzaSize1, pizzaSize2);
});

// Task 1: Define the function `calculatePizzaGain` here

function calculatePizzaGain(diameter1, diameter2){
  const radius1 = diameter1/2;
  const radius2 = diameter2/2;
  const area1 = Math.PI * (radius1**2);
  const area2 = Math.PI * (radius2**2);
  const pizzaArea = Math.round((area2 - area1) / area1 * 100);
  output.textContent = pizzaArea;
}

// Task 2: Define the function `updatePizzaDisplay` here

function updatePizzaDisplay(pizzaElement, newSize){
  const updateSize = newSize / 24 * 100;
  pizzaElement.style.width = updateSize + "px";
}

// Task 3: Define the function `updateOutputColor` here

function updateOutputColor(size1, size2){
    if (size1 > size2) {
    outputSection.style.backgroundColor = "var(--red)";
  } else {
    outputSection.style.backgroundColor = "var(--green)";
  }
}

// # JS Functions: Pizza Analyzer

// Pizza is amazing. Let’s build a tool that compares two pizza sizes and calculates how much more pizza we get for our money.

// ## Tasks

// ### Calculate the Pizza Gain

// We want to calculate the difference in area between two pizzas of different diameters.

// 1. Write a function `calculatePizzaGain` that expects the diameters of the two pizzas: `diameter1` and `diameter2`. (Not the radii of the pizzas!)
// 2. Inside this function, calculate the areas of both pizzas.
//    > 💡 You can find the formula for the area of a circle online. The value of pi can be accessed via `Math.PI`.
// 3. Calculate the pizza gain in percent relative to the first pizza. The formula is: `(area2 - area1) / area1 * 100`.
// 4. Set the `textContent` of the output element to that value. Use `Math.round(calculatedValue)` to round the pizza gain to the nearest whole number.
// 5. Inside both event listeners, save the current values of the pizza input fields in two variables: `pizzaSize1` and `pizzaSize2`.
//    > 💡 You can use the queried elements and get their values like this: `pizzaInput.value`.
// 6. Call the function and pass in the two pizza sizes as arguments.

// ### Change Pizza Display Sizes

// Great! Now we know how much pizza we gain if we choose the second pizza. But we don't have any visual representation of this difference. Let's adapt the pizza displays.

// 1. Write a function `updatePizzaDisplay` with two parameters:
//    - `pizzaElement`: The queried DOM element of the respective pizza.
//    - `newSize`: The new size of that pizza.
// 2. Calculate the new display size of the pizza element. The formula is: `newSize / 24 * 100`.
// 3. Set the width of the `pizzaElement` to this new value.
//    > 💡 Use `pizzaElement.style.width` for that. Remember that the width value requires a unit. Add "px" to your calculated value.
// 4. Call this function in both event listeners, passing in the correct pizza element and pizza size.

// ### Bonus: Change the Output Background

// Let's update the background of the output display to indicate whether we gain or loose pizza by choosing pizza 2.

// 1. Write a function `updateOutputColor` with two parameters: `size1` and `size2`.
// 2. Set the background color of the `outputSection`:
//    - Use `"var(--red)"` if we loose pizza.
//    - Use `"var(--green)"` if we gain pizza.
// 3. Call this function in both event listeners with the correct sizes as arguments.

// > 💡 `var(--<variable-name>)` allows you to use predefined CSS variables. In this case, the color codes are stored in the `--red` and `--green` variables in the `:root` element of the HTML document. Check the CSS file for details.