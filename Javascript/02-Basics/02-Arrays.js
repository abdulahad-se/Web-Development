const marvael_heroes=["Batman","Superman","Antman"];
const dc_heroes=["BlackAd","Superwomen","thor"];

// marvael_heroes.push(dc_heroes);
// console.log(marvael_heroes);// output :[ 'Batman', 'Superman', 'Antman', [ 'BlackAd', 'Superwomen', 'thor' ] ]

// console.log(marvael_heroes[3][1]);// output;Superwomen

// Combines two or more arrays. This method returns a new array without modifying any existing arrays.
// @param items — Additional arrays and/or items to add to the end of the array.

const all_heros=marvael_heroes.concat(dc_heroes,marvael_heroes);// so  can enter one or more as mention above

// console.log(all_heros);

// so this dot dot dot is know as spread what will it so it just simply spread the elements of the array into individual and we can enter more than two parameters
const all_new_heros=[...marvael_heroes,...dc_heroes];
console.log(all_new_heros);//[ 'Batman', 'Superman', 'Antman', 'BlackAd', 'Superwomen', 'thor' ]\

const another_Array=[1,2,3,4,[5,6,7],8,[9,10,11,[12,13,14]]];
//Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// so the good practice is to enter the depth in the parameter like i want the depth of 2 so access the array inside and array inside an array , but you can also use infinity in which it itself decide the depth.
const real_another_Array=another_Array.flat(2);
// console.log(real_another_Array);


console.log(Array.isArray("AbdulAhad"));//false so it check if the given parameter is an array or not

// it convert the string AbdulAhad into array ,Creates an array from an iterable object.
console.log(Array.from("AbdulAhad"));/*
[
  'A', 'b', 'd',
  'u', 'l', 'A',
  'h', 'a', 'd'
]
*/

console.log(Array.from({name:"Abdul"}));// interesting of interview output is [] bcz it doesnt know what to convert the key or value

let score1=100;
let score2=200;
let score3=300;


// Returns a new array from a set of elements.

// @param items — A set of elements to include in the new array object.
console.log(Array.of(score1,score2,score3));














