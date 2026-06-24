console.clear();

const inputColor = document.querySelector('[data-js="input-color"]');
const inputRadius = document.querySelector('[data-js="input-radius"]');
const inputRotation = document.querySelector('[data-js="input-rotation"]');

const box = document.querySelector('[data-js="box"]');


inputColor.addEventListener("input", (e)=>{
    const backgroundColorChange = e.target.value;
    box.style.background = `hsl(${backgroundColorChange}, 70%, 60%)`  
 }
);


inputRadius.addEventListener("input", (e)=>{
    const borderRadius = e.target.value;
    box.style.borderRadius = `${borderRadius}%`;
});


inputRotation.addEventListener("input", (e)=>{
    const rotation = e.target.value;
    box.style.transform = `rotate(${rotation}deg)`;
})




// # JS Inputs and Strings: Change Box Appearance

// ## Tasks

// body {
//   display: grid;
//   justify-items: center;
//   align-content: start;
//   grid-gap: 20px;
//   margin-top: 50px;
//   height: 100vh;
// }

// p {
//   display: grid;
//   grid-gap: 5px;
// }

// .box {
//   width: 200px;
//   height: 200px;
//   background: hsl(0, 70%, 60%);
// }

// Change the appearance of the box according to the slider values (color, border radius, and rotation).

// - [ ] Add an event listener for each input element.
// - [ ] When the slider control of `inputColor` is moved, change the background color of the box. _Hint:_ Use the `hsl()` function to set the color dynamically.
// - [ ] When the slider control of `inputRadius` is moved, change the border radius of the box. If the slider is at its maximum, make the box circular.
// - [ ] When the slider control of `inputRotation` is moved, rotate the box. _Hint:_ Use the `transform` CSS property with a `rotate` value in `deg`.

// Hint: You can modify styles directly by accessing the `style` property of the box, similar to how you work with `classList`.

// For more details, refer to these MDN resources:

// - [Range inputs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range)
// - [hsl() color values](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl)
// - [Transform and rotate](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)
// - [Using the style property](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style)

// ## Notes

// - You only have to touch the `./js/index.js` file.

// ## Development

// To work locally, please install the dependencies using `npm i` first.

// Run `npm run start` to start a development server and open [localhost:3000](http://localhost:3000) in a browser.

// > Alternatively you can use the Live Preview Extension for Visual Studio Code to view this project.  
// > Select the HTML file you want to view, press <kbd>⇧</kbd><kbd>⌘</kbd><kbd>P</kbd>, search for `Live Preview: Show Preview` and confirm with <kbd>Enter</kbd>.

// ### Scripts

// You can use the following command:

// - `npm run start` to start a development server
