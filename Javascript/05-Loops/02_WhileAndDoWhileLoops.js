// while loop
/*
syntax : 
while(condition){
}
*/

// ***** Printing Number from 0-10 using while loop *************

let index=0;
while(index <= 10){
    console.log("The numbers are :",index);
    index+=2;// it doesnt matter how much you are incrementing it depend on you just as here i want index to be increment 2 everytime so i do this same as you like one increment each time so you can do ++ or +=1 or other anything
}



// ****** Traversing through an array using an while loop ***********
const myArr=[1,2,3,4,5,6,7];
let arr=0;
while(arr < myArr.length){
    console.log(myArr[arr]);
    arr+=1
}



// ********* Do while Loop(so in do while the program is executed first then condition is checked) *********
let score=1;
do {
    console.log(`The score is : ${score}`);
    score++;
} while (score <= 10);


// Note (JS Loops): Use a for loop when you know the fixed number of iterations in advance, or when looping through a collection using for...of / for...in. Use a while loop when the number of iterations is unknown and you need the loop to run continuously until a specific condition becomes false.