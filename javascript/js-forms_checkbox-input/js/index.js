console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');
const success = document.querySelector('[data-js="success"]')

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  if (!event.target.tos.checked){
    showTosError();
    return;
  } 
  hideTosError();
  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
  alert("Form submitted");
  success.removeAttribute("hidden");
});




form.addEventListener("submit", (event) => {

// Stop the reload
  event.preventDefault();
  // Extract the data
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log(data);

  const ageBadnessSum= Number(data.age) + Number(data.badness);

  console.log(`The age-badness-sum of "${data.firstName}" is "${ageBadnessSum}"`)

  // reset the form 
  event.target.reset();
  event.target.elements.firstName.focus();
});


tosCheckbox.addEventListener("input", ()=>{
  if (!tosCheckbox.checked){
    showTosError();
  } else {
    hideTosError();
  }
});


