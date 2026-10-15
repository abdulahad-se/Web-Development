// Array :The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.
/*
In JavaScript, arrays aren't primitives but are instead Array objects with the following core characteristics:
JavaScript arrays are resizable and can contain a mix of different data types.
JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).
--Shallow Copy:A shallow copy of an object is a copy whose nested object and array properties share the same references (point to the same underlying values) as those of the source object from which the copy was made. Changing a shared nested object or array through either the source or the copy can affect the other object.

--Deep Copy :A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you can be assured you're not causing the other object to change too.
*/

const myArr=[1,2,4,[2,3],"Ahad",true];// so the first thing we notice is that in js it not necessary that all elements inside an Array must be of same data type unlike java
// console.log(myArr);
 
// creating an object of an Array.
const myArray=new Array(1,2,4,5);
// console.log(myArray[3]); // so if i give index 10 so it gives me undefined remember this.

// *************** METHODS ******************************

console.log(myArray.push(6));// push methods is used to add an element at last last of an array and return a new length of an array.
console.log(myArray.pop());// removes the last element and return it , if the array is empty then it returns undefined.

console.log(myArray.unshift(0));//nserts new elements at the start of an array, and returns the new length of the array , as array is moved forward as the elment is inserted which causes problem when we have big data and remeber one more thing that the index can by any like 2 or 3 etc and the number after the index shift forward

console.log(myArray.shift());//Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.

console.log(myArray.includes(5));// output : true as it only check that is particular value is present in an array or not and return the boolean value.

console.log(myArray.indexOf(4));// return the index of first occurence of an value and if value doesnt exist return -1

console.log(myArray.lastIndexOf(3));//Returns the index of the last occurrence of a specified value in an array, or -1 if it is not present

const newArr=myArray.join();// output: "1,2,4,5". join() returns a new string; it does not change the original array.
console.log(newArr);
//Adds all the elements of an array into a string, separated by the specified separator string

//  slice and splice 

// SLICE : slice() gets a range from an array. Its syntax is (start, end), where end is excluded. If start is undefined, it defaults to 0; if end is undefined, it defaults to the array length. Important: slice() returns a copy and does not affect the original array.

const newArray=new Array(1,2,3,4,5,6,7,8,9);
console.log("Splice",newArray);

console.log(newArray.slice(1,3)); // remember the end index goes to end-1

// SPLICE : So splice is also an function which is used to get the range of and particular array , but the things make it different from the slice is that it return the actual array omitting the range part . for example your array is (1,2,3,4,5,6) and you apply splice on particular range from(1,3)  and now you print the actual array so output is (1,5,6) omitting the part we insert in parameters but in slice nothing like this happen slice doesnt effect the original array.
const spli=newArray.splice(1,3);
console.log(`The array after applying splice function is ${newArray} and spliced part is ${spli}`);
















