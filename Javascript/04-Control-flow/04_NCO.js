// Nullish coalescing operator (??) :null undefined
// The nullish coalescing operator (??) is a logical operator in programming (like JavaScript) that returns its right-hand operand when its left-hand operand is null or undefined; otherwise, it returns its left-hand operand. one thing to remember that nullish coalescing operator and ternary operators are different.
let val1;
// val1=5 ?? 10;// output is : 5 bcz here we have values on both side so it chooses the first one.

// val1=null ?? 10; // output is: 10 bcz now our first is null so it checks for right hands side that did it have any value so yes it have so it takes it.
// so this is only example in real we apply a complex function in place or 10 that the database call that function and give the values like this it works.

// val1=undefined ?? 15; //output:15

val1=null ?? 100 ?? 10; //output : first value it get is assinged to val1 so output is 100.

// ******* Ternary Operators *********
/*
syntax: (condition) ? true : false
*/
const num=100;
(num <= 90) ? console.log("The number is lesser than 100"):console.log("number is greater than 100");

// ****** multi line ternary code *********
const score = 85;

const grade = score >= 90
  ? "A"
  : score >= 80
  ? "B"
  : score >= 70
  ? "C"
  : "F";

console.log(grade); // Output: B




