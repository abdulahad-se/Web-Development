/*
filter()
-------
Definition: Array.prototype.filter() creates a new array containing only the
elements for which the callback returns a truthy value. It does not change the
original array.

Syntax:
const filteredArray = array.filter((element, index, array) => {
    return condition;
});

The index and array callback parameters are optional. Use an explicit return
when the callback uses curly braces.
*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const numbersGreaterThanThree = numbers.filter((number) => number > 3);
console.log(numbersGreaterThanThree);

const numbersGreaterThanTwo = numbers.filter((number) => {
    return number > 2;
});
console.log(numbersGreaterThanTwo);

// forEach() can also collect matching values, but filter() expresses this
// operation directly and returns the new array.
const numbersGreaterThanSeven = [];
numbers.forEach((number) => {
    if (number > 7) {
        numbersGreaterThanSeven.push(number);
    }
});
console.log(numbersGreaterThanSeven);

// Filtering objects is common when values come from an API or database.

const projectBooks = [
  { title: 'The Chronos Chronicles', genre: 'Sci-Fi', publish: 2001, edition: 2008 },
  { title: 'Echoes of the Past', genre: 'History', publish: 1995, edition: 2012 },
  { title: 'Atomic Realities', genre: 'Science', publish: 2010, edition: 2015 },
  { title: 'Shadows in the Mist', genre: 'Mystery', publish: 1988, edition: 2005 },
  { title: 'The Roman Way', genre: 'History', publish: 1984, edition: 1999 },
  { title: 'Cosmic Horizons', genre: 'Science', publish: 2015, edition: 2020 },
  { title: 'Silent Footsteps', genre: 'Mystery', publish: 1983, edition: 1992 },
];
const scienceBooks = projectBooks.filter((book) => book.genre === 'Science');
console.log(scienceBooks);

const recentBooks = projectBooks.filter((book) => {
    return book.publish >= 2000;
});
console.log(recentBooks);

const recentMysteryBooks = projectBooks.filter((book) => {
    return book.genre === 'Mystery' && book.publish > 1985;
});
console.log(recentMysteryBooks);



