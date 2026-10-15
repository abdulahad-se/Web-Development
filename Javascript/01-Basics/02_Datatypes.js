"use strict";//enables stricter JavaScript rules for this file.

// alert(3+3) // alert() is a browser API; this file is being run with Node.js.

console.log(3+3); console.log("Ahad")// Keep separate statements on separate lines for readability.

let name="AbdulAhad"// Text written inside quotes has the string datatype.
let age=3// A numeric value without quotes has the number datatype.
let isLoggedIn=false// true and false are boolean values.

// Primitive Datatypes.
/*
number => IEEE 754 double-precision numbers. Integers are safely accurate from
-(2 ** 53 - 1) to (2 ** 53 - 1); decimal calculations can have rounding errors.
bigInt => integers larger than the safe number range. BigInt literals use the n suffix.
String => text written inside quotes, for example: "Hello".
boolean => true or false.
null => an intentional absence of a value.
undefined => a value that has not been assigned, for example: let state;
symbol => a primitive whose value is always unique, even when descriptions match.
*/

// Objects store related data as key-value pairs.
// Example:
// const user = { name: "AbdulAhad", age: 3 };

// typeof returns a string describing the type of a value.
console.log(typeof age)//output is number
console.log(typeof null) // output is "object"; this is a historical JavaScript quirk.
console.log(typeof undefined) // output is "undefined"; undefined is its own type.

// BigInt example:
// const largeNumber = 12345678901234567890n;

// Symbol values are unique:
// const firstSymbol = Symbol("id");
// const secondSymbol = Symbol("id");
// console.log(firstSymbol === secondSymbol); // false