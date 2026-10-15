// comparison signs : < , > , <= , >= , == , != , === , !==

//******************* if ************
// const isUserLoggedIn=true;
// if(isUserLoggedIn){
//     console.log("executed");
// }


// const temperature=50;
// if(temperature < 50){
//     console.log("Temperature is lesser than 50");
// }
// console.log("Temperature is greater than 50");   // as we can see this line is outer of if block and not in any other block so , it'll print aswell well with the print statement in if block , so to overcome this we use else block which make js engine to run only one of the block either if or else and no other.


//************ else **********************
// if(temperature === 50){
//     console.log("Temperature is equal to 50");
// }else{
//     console.log("Temperature is not equal to 50");
// }


//*************** conditional scope ***********
// const score=200;
// if(score < 200){
//     let power="fly"
//     console.log(`User power: ${power}`);
// }
// console.log(power);  // undefined bcz we already understand the scope and here we know that power is local variable inside an if block and cannot be access outside it


// ******** Short hand notation **************
// const balance = 1000;
// if(balance > 500) console.log("test");// so question may arise where is scope here then , so it have an implicit scope.

// if(balance > 400) console.log("test"),
// console.log("haha");// also can do this but not recommended as it is confusing.


// ************ Multiple if Conditions ********
// const amount =1000;
// if (amount < 500){
//     console.log("Amount is lesser than 500");
// }else if(amount < 750){
//     console.log("Amount is lesser than 750");
// }else if(amount < 900){
//     console.log("Amount is lesser than 900");
// }else{
//     console.log("Amount is lesser than 1100");
// }


// ****** How we use it real life short example *********
const isUserLoggedIn=true;
const debitCard=true;
const loggedInFromGoogle=false;
const loggedInFromEmail=true;

if(isUserLoggedIn && debitCard ){// so here we use logical operators i.e ( or = || , and = && , not = ! so when we use or in if then if even one condition is true the condition execute , when we use or all conditon like below one must be true , and not is used to invert the property of other comparison operators to make false true and true false)
    console.log("Allow access to buy");
}
// here the or operator is used
if(loggedInFromGoogle || loggedInFromEmail){
     console.log("User logged In");
}








