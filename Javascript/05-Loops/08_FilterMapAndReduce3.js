/*
reduce()
--------
Definition: Array.prototype.reduce() runs a callback for every element and
combines the values into one accumulated result. The accumulator can be a
number, string, object, array, or another value.

Syntax:
const result = array.reduce((accumulator, currentValue, index, array) => {
    return updatedAccumulator;
}, initialValue);

Providing an initialValue makes the starting state explicit and also avoids
an error when reducing an empty array.
*/

const numbers = [1, 2, 3];
const sum = numbers.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);
console.log(sum);

// The same reduction using an arrow function.
const sumUsingArrowFunction = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
);
console.log(sumUsingArrowFunction);


// Using reduce for the object inside an array
const cartItems = [
  { courseName: "Tailwind CSS Bootcamp", price: 1800 },
  { courseName: "Next.js Masterclass", price: 3500 },
  { courseName: "TypeScript Essentials", price: 2400 },
  { courseName: "Node.js Backend Deep-Dive", price: 4800 }
];

// Calculating the total cart price using the .reduce() method
const totalCartPrice = cartItems.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.price;
}, 0);

console.log(`Total Bill: ${totalCartPrice}`);



