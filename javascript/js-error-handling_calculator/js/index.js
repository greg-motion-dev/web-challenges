console.clear();

const form = document.querySelector("form");
const output = form.querySelector("output");

const operations = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => {

    // check if inserted number is a zero
      if (b === 0) {

        // throw error immediately
        throw new Error("Cannot divide by zero!");
        // otherwise return calculation
        } return a/b;
  },
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const firstNumber = Number(event.target.firstNumber.value);
  const secondNumber = Number(event.target.secondNumber.value);
  const operation = event.target.operation.value;

    // grab error <p>
    const errorMessage = document.querySelector(".error");

  try {
    //execute operation, clear error message
    output.innerText = operations[operation](firstNumber, secondNumber);
    errorMessage.innerText = "";
    // if error, display error message
  } catch (error){
    output.innerText = "";
    errorMessage.innerText = error.message;
  }    
});


if(!contentType || !contentType.includes("application/json")){
  throw new Error(`Expected JSON, but received ${contentType} instead`)
}