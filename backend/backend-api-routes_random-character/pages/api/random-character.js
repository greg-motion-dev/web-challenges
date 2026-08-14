import Chance from "chance";

const chance = new Chance();

export default function handler(req, res) {
  //creates a character everytime the page loads
  const character = {
    firstName: chance.first(),
    lastName: chance.last(),
    age: chance.age(),
    profession: chance.profession(),
  };

  res.status(200).json(character);
}
