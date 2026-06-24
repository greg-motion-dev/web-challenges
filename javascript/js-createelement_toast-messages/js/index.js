console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", () => {
  // Exercise: Append a new entry to the toast messages container

  // create
  const toastMessage = document.createElement('li');
  // configure
  toastMessage.classList.add('toast-container__message');
  toastMessage.textContent = "I'm a toast message.";

  // append
  toastContainer.append(toastMessage);

});

clearButton.addEventListener("click", () => {
  // Exercise: Clear the stack of toast messages
  toastContainer.innerHTML = "";
});
