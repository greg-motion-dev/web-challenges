console.clear();

const form = document.querySelector('[data-js="form"]');

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




// Log all form data (in object form) into the console in the submit event handler.

// Make sure the form is reset and the First Name input is focused after submission.




// ## Bonus: Calculate and log the age-badness-sum 🤷‍♀️

// The formula is: `age + badness`

// Log to the console _(replace the values between the quotes)_:

// > The age-badness-sum of "firstName" is "age-badness-sum"
