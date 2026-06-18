const bodyElement = document.querySelector('[data-js="root"]');
const addElement = document.querySelector('[data-js="add-button"]');
console.log("rootElement :-)", bodyElement);
console.log("addButton :-)", addButton);

bodyElement.classList.add("dark");
bodyElement.classList.remove("dark");

function addDarkmode(){
bodyElement.classList.add("dark");
}

function removeDarkmode(){
 bodyElement.classList.remove("dark");
}

function toggleDarkmode(){
    bodyElement.classList.toggle("dark");
}

function anonymousFunction()("click", ()=>{
   bodyElement.classList.toggle("dark");
});


addButton.addEventListener("click", addDarkmode);
