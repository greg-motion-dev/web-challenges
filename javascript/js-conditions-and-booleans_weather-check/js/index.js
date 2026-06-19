// Change this value to test different "weather" conditions.
const weather = "rainy"
const temperature = 22; 

switch(weather){
    case "rainy":
        console.log("It's raining, don't forget your umbrella!");
        break;
    case "sunny":
    
    if(temperature > 20){
        console.log("It's sunny and warm !");
    } else {
        console.log("It's sunny, but a bit chilly!");
    }
        break;
    case "snowy":
        if (temperature < 0){
            console.log("It's snowing, stay warm!");
        } else {
            console.log("Freezing snow!")
        }
        break;
    default:
        console.log("I'm not sure what the weather is like.");
}

// Adjust the "temperature" value to trigger different messages (for Part 2 only).


// ## Tasks

// ### Part 1: Simple switch Statement

// - Open the file `index.js`.
// - There is a variable `weather` that contains the current weather condition as a string (e.g., "sunny", "rainy", "snowy").
// - Write a `switch` statement that checks the value of `weather` and logs a message for each weather condition.
//   - Example:
//   - If the weather is "sunny" → "It's sunny!"
//   - If the weather is "rainy" → "It's raining, don't forget your umbrella!"
//   - If the weather is "snowy" → "It's snowing, stay warm!"
//   - For any other input → "I'm not sure what the weather is like."
// > 💡 Tip: Use the `break` statement to avoid the "fall-through" effect.

// ### Part 2: Adding Conditions

// - Now we’ll extend the `switch` statement by adding a second variable `temperature`, which contains a `number` (the current temperature in degrees Celsius).
// - Modify the `switch` statement so that it also takes into account the `temperature`, and logs different messages based on the `weather` and the `temperature`.
//   - New Conditions:
//   - If the weather is "sunny" and the temperature is above 20°C → "It's sunny and warm!"
//   - If the weather is "sunny" and the temperature is 20°C or below → "It's sunny, but a bit chilly!"
//   - If the weather is "rainy" → "It's raining, don't forget your umbrella!"
//   - If the weather is "snowy" and the temperature is below 0°C → "Freezing snow!"
//   - For any other input → "I'm not sure what the weather is like."

// > 💡 Tip: Use the `break` statement to avoid the "fall-through" effect.