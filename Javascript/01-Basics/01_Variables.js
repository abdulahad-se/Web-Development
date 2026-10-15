// const declares a variable whose binding cannot be reassigned after initialization.
// Assigning another value to accountId later would cause a TypeError.
const accountId=1122442;

// let declares a block-scoped variable. It can be reassigned, but it cannot be
// redeclared within the same scope.
let accountEmail="a@gamil.com";

// var declares a function-scoped variable. It can be reassigned and redeclared.
// Its declaration is hoisted and initialized with undefined, so using the variable
// before its declaration does not immediately cause a ReferenceError.
var accountPassword=121211;

// This assignment intentionally demonstrates what happens when a value is assigned
// without let, const, or var. In non-strict scripts, accountCity becomes an implicit
// global variable. In strict mode and ES modules, this causes a ReferenceError.
accountCity="Quetta";

// An implicit global is an undeclared variable assignment.
/*
What it is: Assigning a value to a variable name without using let, const, or var.

Why it's bad practice: JavaScript automatically attaches it to the global scope (globalThis / window), polluting global memory, risking name collisions, and throwing errors in strict mode ("use strict").

Strict mode can be enabled by placing this at the top of the file:
"use strict";
*/
let accountState;

accountEmail="abd@gmail.com";
accountPassword=11221;
accountCity="Islamabad";
 
console.log(accountId);

// Prefer let or const in modern JavaScript. var is function-scoped rather than
// block-scoped, so a var declared inside an if block can also be accessed outside it.
//
// Example:
// if (true) {
//   var message = "inside the block";
// }
// console.log(message); // "inside the block"
//
// With let, the variable remains inside the block:
// if (true) {
//   let blockMessage = "inside the block";
// }
// console.log(blockMessage); // ReferenceError
//
// Hoisting example:
// console.log(hoistedVar); // undefined
// var hoistedVar = "declared later";
//
// let and const are also hoisted, but they remain inaccessible in the
// temporal dead zone until their declaration is reached:
// console.log(notReady); // ReferenceError
// let notReady = "declared later";

// console.table displays these values in a table, which makes it easier to
// compare multiple related values in the console.
console.table([accountEmail,accountPassword,accountCity]);