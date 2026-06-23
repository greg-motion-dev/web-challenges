console.clear();

let userInput = document.querySelector("[data-js=first-input]");
const userButton = document.querySelector("[data-js=button-uppercase]"); 

userButton.addEventListener("click", ()=>{
    userInput.value = userInput.value.toUpperCase();    
}
 );