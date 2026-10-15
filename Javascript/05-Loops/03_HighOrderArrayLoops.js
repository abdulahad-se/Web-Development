// for of loop:The for...of statement executes a loop that operates on a sequence of values sourced from an iterable object. Iterable objects include instances of built-ins such as Array, String, TypedArray, Map, Set, NodeList (and other DOM collections), as well as the arguments object, generators produced by generator functions, and user-defined iterables.
/*
syntax :
for (const element of object) {// so here object doesnt mean that this loop is only limited to object , this loop can be used for the other like array , string etc.
}
*/

const arr=[1,2,3,4,5]
for(const val of arr){
    console.log(val);
}
const greeting="Hi World"
for(const greet of greeting){
    console.log(`The char is ${greet}`);
}



// *** Map :The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

const map=new Map();
map.set("Us",'UnitedStates')
map.set("Pk",'Pakistan')
map.set("Fr","France")
map.set("Us","UnitedStates")// it doesnt print this because map is use for keeping the unique values and remember the order
// console.log(map);
for(const m of map){
    console.log(m);/*
    [ 'Us', 'UnitedStates' ]
[ 'Pk', 'Pakistan' ]
[ 'Fr', 'France' ] but we did not need an array but the key values normally so there is shortcut and we can also say it object de structure below it is shown
    */
}
for(const [key,value] of map){// instead of writing key , value you can take other variables aswell
    console.log(key , ':-' , value);/*
    Us :- UnitedStates
Pk :- Pakistan
Fr :- France
    */
}

// **** using for of loop for objects *******
const myObject={
    "game1":"Spiderman",
    "game2":"GtaIV",
    "game3":"RDR2"
}
for (const val of myObject) {
    console.log(val);// error
}

for (const [key,val] of myObject) {
    console.log(key, ":-" ,val );// error : object is not iterable : so it doesnt mean that we cannot iterate through the object but there are other ways to iterate through obejcts. let discuss this in next file 04_HighOrderArrayLoops2.js
}