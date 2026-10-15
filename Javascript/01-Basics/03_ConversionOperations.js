// Keep one score example active at a time. The other examples below can be
// uncommented for comparison.
let score=33;
// let score="33"
// let score="33abc";
// let score=null;
// let score=undefined;
// let score=true;

// One way to get the type of a value.
// console.log(typeof score);

// typeof is an operator, not a method. Parentheses are optional here.
// console.log(typeof(score));

// Convert the score value to a number. Use String(value) when converting to text.
let valueInScore=Number(score)

// console.log(typeof valueInScore);
// console.log(valueInScore);

// Number(33)        => 33
// Number("33")      => 33
// Number("33abc")   => NaN
// Number(null)      => 0
// Number(undefined) => NaN
// Number(true)      => 1, Number(false) => 0


// Keep one isLoggedIn example active at a time.
let isLoggedIn= 1

// let isloggedIn= 0
 
// let isLoggedIn = ""

// let isloggedIn = "Ahad"

let booleanIsloggedIn= Boolean(isLoggedIn)
// console.log(booleanIsloggedIn);


// Boolean(1)      => true
// Boolean(0)      => false
// Boolean("")     => false
// Boolean("Ahad") => true



let someNumber= 33
let convertNumber=String(someNumber)
// console.log(convertNumber); //output is 33 , so your question maybe that why it still 33 after being
                        // converted so answer is it is converted already in string and you can check it aswell using typeof.
// console.log(typeof convertNumber);




// ********************************OPERATIONS****************************************

let value=1;
let value2=-value
// console.log(value2);// output is -1

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2%2);
// console.log(2/2);
// console.log(2**3);


let str1="Abdul"
let str2="Ahad"
let str3=str1+str2
console.log(str3);// the result is "AbdulAhad" because + joins strings.

console.log("1" + 2);// output is 12
console.log(1+"2");//output is 12
console.log("1"+2+2); // output is 122 => reason is as string comes first so the whole thing is treated as string for more and detailed and real answer visit ecmascript
console.log(1+2+"2");//output is 32 as the string comes after . so previous opertaions are done and then string apply.

console.log(2+3*9%2);// Multiplication and remainder happen before addition; the result is 3.

console.log(true);// as we know output is true.
console.log(+true);// Unary + converts true to 1; this shorthand is usually best avoided.
console.log(+"");// Unary + converts an empty string to 0; use Number() for clarity.


let num1 , num2 , num3
num1=num2=num3= 2+2 // Chained assignment evaluates from right to left; separate assignments are clearer.


// The increment (++) operator increments (adds one to) its operand and returns the value before or after the increment, depending on where the operator is placed.
let gameCounter=100
gameCounter++ // postfix: changes gameCounter from 100 to 101.
++gameCounter// prefix: changes gameCounter from 101 to 102.
console.log(gameCounter); // output is 102














