
const sheepArray = [];

const result = countSheep(sheepArray);
console.log("result");

function countSheeps(sheep) {
  console.log("sheep: ", sheep)
;
//start counter
let count = 0;
//iterate over the array of sheep
for(let i = 0; 1 < sheep.length -1; i++){
  console.log(sheep[i]);
  //check if a sheep is present
  if(sheep[i] === true ){
    //if sheep is present add one to count
    count++;
  }
  // else nothing
 }
 return count;
}

countSheeps(sheepArray);


//primary used for objetcs

const user = {
  name: "Alex",
  age: 12,
  email: "alex@smail.com"
}


// for in loop
for (let property in user){
  console.log("property", property);
}

const name  = user["name"];
const nane = user.name;

console.log("address in user?", user.hasOwnProperty("address"));

// for of - loops over all the items in an array
// in the classic for loop you have acces to the index, in the for of loop, you dont' have much details insight

for(let fruit of fruits){
  console.log("fruit", fruit);
}
