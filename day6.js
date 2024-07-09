//day 6
//arrays in javascript

// In JavaScript, we can create an array using
// Array Literal Notation '[]'

const numbers = [1, 2, 3, 4, 5];
const fruits = ['apple', 'banana', 'orange'];
// Creating an array of mixed data types using array literal notation
const mixed = [1, 'apple', true, { name: 'John' }];
//printing the arrays
console.log(numbers);
console.log(fruits);
console.log(mixed);

// Array constructor
const num= new Array(1, 2, 3, 4, 5);
const fr = new Array('apple', 'banana', 'orange');
const emptyArray= new Array();
console.log(num); // Output: [1, 2, 3, 4, 5]
console.log(fr); // Output: ['apple', 'banana', 'orange']
console.log(emptyArray); // Output: []

// accessing array elements 
console.log(fr[1]);
console.log(mixed[3]);
console.log(numbers[8]);    //undefined as output
// access is out of array size

//using variable
let ind = 2;
console.log(fruits[ind]);

//various operations in array
//push method
// it add the the element at the end and increment the length by 1
fruits.push("strawberry");
console.log(fruits); 

//unshift method 
//it add the element at the beginning and increment the length by 1 and return new array
fruits.unshift("mango");
fruits.unshift("kiwi");
console.log(fruits);

//splice method 
// array.splice(startIndex, deleteCount, item1, item2, ...);
//deletecount should  be 0 for insertion
fruits.splice(1,0,"pomegranate","guava");
console.log(fruits);

//filter method
//const newArray = array.filter(_callback function_);
const n = [-1, 0, -20, 45, 3, 74, -5, 6];

// Filtering positive numbers
const positiveNumbers = n.filter(function(number) {
  return number > 0;
});
console.log(positiveNumbers);

// another example
const products = [
    {
        id: 1,
        name: "Product A",
        price: 10 
    },
    {
        id: 2,
        name: "Product B",
        price: 20 
    },
    {
        id: 3,
        name: "Product C",
        price: 30
    },
];
const expensiveProducts = products.filter((product) => product.price > 15);
console.log(expensiveProducts);

// reduce method 
//it ois used to obtain a single value from the whole array
//syntax
// array.reduce(callback(accumulator, currentValue), initialValue)
const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log(sum);


//DIFFERENT LOOPS IN THE ARRAY
// FOR EACH LOOP
//syntax

//array.forEach(function() {
    // Code block to be executed on each iteration
//});
numbers.forEach(function(number, index){
    console.log(`Element at ${index} : ${number}`)
})

//another example
let s = 0;
numbers.forEach(function(number){
    s+= number;
})
console.log(s);

//for of loop
//syntax
//for (variable of iterable) {
  // Code block to be executed on each iteration

const colors = ['red', 'green', 'blue'];

for (let color of colors) {
  console.log(color);
}

//for in loop
//synatx
//for (variable in object) {
  // Code block to be executed on each iteration
  const person = {
    name: 'Mayank',
    age: 21,
    city: 'Delhi'
  };
  
  for (const key in person) {
    console.log(key + ": " + person[key])
  }

  //map method
  let myFruits = fruits.map((fruit) => {
    return fruit.toUpperCase();
})

console.log(myFruits);

  






