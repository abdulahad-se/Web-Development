/*
map()
-----
Definition: Array.prototype.map() creates a new array by running a callback
once for every element and storing each returned value. It does not change the
original array, and the returned array has the same length.

Syntax:
const mappedArray = array.map((element, index, array) => {
    return transformedValue;
});

The index and array callback parameters are optional. Use filter() when you
need to remove elements instead of transforming every element.
*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbersWithFiveAdded = numbers.map((number) => number + 5);
const numbersWithFifteenAdded = numbers.map((number) => {
    return number + 15;
});

console.log(numbers);
console.log(numbersWithFiveAdded);
console.log(numbersWithFifteenAdded);

// Chaining uses the result of one array method as the input to the next.
const transformedNumbers = numbers
    .map((number) => number * 10)
    .map((number) => number + 1)
    .filter((number) => number >= 20);
console.log(transformedNumbers);
