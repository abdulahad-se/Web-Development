// for each :The forEach() method of Array instances executes a provided function once for each array element.
/*
syntax :

*/


const coding=["python","ruby","javascript","java","rust","assembly"]
// so question may arise that why we dont have the name of the function so answer is it callback function which has no name and the code we pass is just the variable like we do i or val etc before .
// coding.forEach( function (code) {
//     console.log(code);
// }) 

// using arrow function 
// coding.array.forEach((element) => {
//     console.log(element);
// });

// passing function into the the foreach
// function printitems(items){
//     console.log(items);
// }
// coding.forEach(printitems);// remember we dont need to execute the function as its already executing above we need to just pass the reference.

// so its not necessary that we have to pass the value we can also pas the index , array etc  has foreach has access to more than one parameter
// coding.forEach((item,index,arr) => {
//     console.log(item,index,arr);
// })


// using for each loop for the objects inside the array
const myCode=[
    {
        languageName:"Java",
        languageFileName:"js"
    },
    {
        languageName:"Python",
        languageFileName:"py"
    },
    {
        languageName:"C++",
        languageFileName:"c++"
    }
]
myCode.forEach( (item) => {
    console.log(item.languageName);
})