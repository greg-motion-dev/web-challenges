import { countries } from "./utils/countries.js";
import { Country } from "./components/Country/Country.js";

const container = document.querySelector('[data-js="card-container"]');
const queryInput = document.querySelector('[data-js="query-input"]');

queryInput.addEventListener("input", (event) => {
  container.innerHTML = "";

  const searchString = event.target.value.toLocaleLowerCase();
   
  // //in "countries" find a string(country) - the string (country) is looking for the "name" that starts with searchString
  // const foundCountry =  countries.find((country) => country.name.toLocaleLowerCase().startsWith(searchString));

  // if (foundCountry) {
  //   const countryElement = Country(foundCountry);
  //   container.append(countryElement);
  // }

  const foundCountries = countries.filter((country)=> {
    return country.name.toLocaleLowerCase().startsWith(searchString);
  })
  

  foundCountries.forEach((country)=>{
      const countryElement = Country(country);
      container.append(countryElement);
    
  })
});


// const colors = ["hotpink", "aquamarine", "granite", "grey"];

// colors.find((color) => color.startsWith("g")); // 'granite'
// colors.find((color) => color.startsWith("b")); // undefined

// const petsWithF = pets.filter((pet) => {
//   return pet.startsWith("f");
// });
// console.log(petsWithF); // ['ferret', 'fish']