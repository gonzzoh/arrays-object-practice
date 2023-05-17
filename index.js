// #1
let numbers = [1, 2, 3];
const [first, second, third] = numbers;
console.log(third)

// const getDestructed = ([first, second, third ]) => console.log(third);
// getDestructed(numbers)

// #2
const person = {
  name: 'John',
  age: 30,
  city: 'New York'
};

// const gettingPersonal = ({ name, city }) => console.log(`I'm watching you... ${name}, from ${city}.`);
// gettingPersonal(person)

const {name: personName, city: personCity} = person
console.log(`I'm watching you... ${personName}, from ${personCity}.`)


// #3
const car = {
  brand: 'Toyota',
  model: 'Corolla',
  year: 2022
};

let keysArray = Object.keys(car); console.log(keysArray);

// #4
let valuesArray = Object.values(car); console.log(valuesArray);

// #5
let entriesArray = Object.entries(car); console.log(entriesArray);
