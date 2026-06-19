console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "password1234";

if (receivedPassword === SUPER_SECRET_PASSWORD){
    console.log("Welcome! You are logged in as Brunhilde1984.");
} else {
    console.log("Access denied!")
}

// Part 2: Even / Odd
const number = 6;

if (number % 2 === 0){
    console.log("even number");
} else { 
    console.log("odd number");
}

// Part 3: Hotdogs
const numberOfHotdogs = 42;

let costOfHotdog;

if (numberOfHotdogs < 5){
    costOfHotdog = 2;
    console.log(numberOfHotdogs + " cost a total of :" + totalCost + " EUR");
} else if ( numberOfHotdogs >= 5 && numberOfHotdogs < 100){
    costOfHotdog = 1.50;
    console.log(numberOfHotdogs + " cost a total of :" + totalCost + " EUR");   
} else if ( numberOfHotdogs >= 100 && numberOfHotdogs < 1000000){
    costOfHotdog = 1; 
    console.log(numberOfHotdogs + " cost a total of :" + totalCost + " EUR");   
} else if (numberOfHotdogs >= 1000000){
    costOfHotdog = 0.10;
    console.log(numberOfHotdogs + " cost a total of :" + totalCost + " EUR");   
}

    const totalCost = costOfHotdog * numberOfHotdogs;
    console.log(numberOfHotdogs + " cost a total of :" + totalCost + " EUR");  


// Part 4: Daytime
// - use a ternary operator to define the `statement` variable as follows:
// - if the currentHour is smaller than 17, `statement` should read "Still need to learn..."
// - if the currentHour is greater or equal to 17 it should equal "Partytime!!!"

const currentHour = 12;

const statement = currentHour < 17 ? "Still need to learn..." : "Partytime!!";

console.log(statement);

// Part 5: Greeting
// - use a ternary operator inside the round brackets to complete the `greeting` as follows.
// - if the variable `name` is equal to the name of your coach, the `greeting` should read "Hello Coach!"
// - otherwise the string saved in `name` should be used instead, e.g.:
const userName = "Archibald";

const greeting = "Hello " + (name === "yourCoachName" ? "Coach": name) + "!";


console.log(greeting);
