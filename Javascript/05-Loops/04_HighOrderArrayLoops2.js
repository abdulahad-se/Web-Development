// so as we discuss before that we cannot iterate through an object using for of but instead we use for in to iterate.
// for in :The for...in statement iterates over all enumerable string properties of an object (ignoring properties keyed by symbols), including inherited enumerable properties.
/*
syntax :for (const key in object) {
    if (!Object.hasOwn(object, key)) continue;
    
    const element = object[key];
    
    
}
*/


const myObject = {
    game1: "Spiderman",
    game2: "GtaIV",
    game3: "RDR2"
};

// printing keys of an object
// for(const key in myObject){
//     console.log(key);
// }

// printing the key and values
// for (const key in myObject) {
//     console.log(`${key} : value is : ${myObject[key]}`);
// }

// using for in loop for the array
const arr=["spiderman","batman","Thor","X-Man"]
for(const key in arr){
    console.log(key);// output : 0,1,2,3 , so in for of its printing the actual values but in for in it is printing the key as array has also key which is by default numbers so thats all difference btw the for of and for in.
    console.log(arr[key]);// now it print the actual values
}

// iterating through the map
const map=new Map();
map.set("Us",'UnitedStates')
map.set("Pk",'Pakistan')
map.set("Fr","France")
map.set("Us","UnitedStates")

for(const [key, val] of map){
    console.log(key, val);// Map is iterable with for...of, not for...in.
}