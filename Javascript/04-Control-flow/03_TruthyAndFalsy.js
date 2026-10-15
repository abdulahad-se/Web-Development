// so truthy and falsy are the you can that when we assume the conditon is true or condition is false :
// so here you can see the output is "Got an user email" this is because we assume that the value inside the string is true , same thing we can do with array[]etc . so this is all truthy and falsy value .
const userEmail="Abdulahad@";
if(userEmail){
    console.log("Got an user email");
}else{
    console.log("didn't get any user email");
}
// ******** Truthy and Falsy values ************
// Truthy
// true, "0"," " ( here the string is not empty it have space which considered as a value),'false',[],{},function(){}

// Falsy
// 0,false,-0,"",0n (this 0n is bigInt represention),null,undefined,NaN.

// ******* How to check the array is empty or not *******
const users=[];
if(users.length===0){
    console.log("Array is empty");
}else{
    console.log("Array have some values");
}

// ***** checking the objects that either its empty or not ********
const user2={};
if(Object.keys(user2).length===0){// so here we use keys function of object you can use others like entries etc and we know that it return the array of keys , so as now we have arrays then we apply just length like we do before in array.
    console.log("Object is empty");
}else{
    console.log("Object has some values");
}

// ****** something to know about *******
/*
false == 0 => true
false == '' or "" => true
0 == '' or "" => true
explanation: so at first we know that the values of false is 0 , empty string is 0 and we are using the double equal not triple which means only values are check not there datatypes so thats why there is true if we use triple equal === then answer is false.

true == 1 => true
true == " " or ' ' => false
1 == ' ' or " " => false
explanation: a whitespace-only string converts to 0, not 1. Loose equality allows type conversion, so both comparisons are false.
*/