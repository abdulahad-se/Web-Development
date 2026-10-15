
// this is not arrow function example it is an only object below we study arrow
const user={
    username:"AbdulAhad",
    price:999,
    welcomeMessage:function (){
        // so we use this keyword when we want to refer to current context of the object
        console.log(`${this.username} , welcome to website`);
        console.log(this);// output : so it prints the object user for both AbdulAhad and Mirza
    }
}
user.welcomeMessage();
user.username="Mirza";// so here as the object is not harcoded so the context of username is changed from "AbdulAhad" to "Mirza"
user.welcomeMessage();

console.log(this);// top-level this depends on the environment: CommonJS Node modules usually expose module.exports, browser scripts expose window, and ES modules use undefined.

// ************ is this keyword applicable in functions lets check ***********
function code (){
    let username="Ahad"
    console.log(this) ;//ouput : global values like this,
    /*
    queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Function: structuredClone],
  atob: [Function: atob],
  btoa: [Function: btoa],
    */
    console.log(this.username);//output : undefined , so by this we come to know this is not useful in functions.
}
// code();

// let check also this in function stored in variable
const code2=function(){
    let username="Abdul";
    console.log(this);// output : some global values , like this 
    /*
    queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Function: structuredClone],
  atob: [Function: atob],
  btoa: [Function: btoa],
    */
    console.log(this.code2);// output : undefined
}
// code2();

// *********Arrow Functions *************
const code3= () => {
    let username="Mirza";
    console.log(this.username);//undefined
    console.log(this);//{}
}

// *** lets discuss about arrow functions ****

(num1,num2) => {
    return num1+num2;
}
console.log((2,50));// the comma operator evaluates both values and returns the last one: 50

const arrow= (num1,num2) =>{
    return num1+num2;
}
const ans=arrow(2,10);
console.log(ans);

// implicit way of declaring an arrow functions
const arrowFunc= (num1,num2) =>  num1+num2;// if it looks confusing then write like this
const arrowFunc2= (num1,num2) =>  (num1+num2);// note : in implicit you can use the round brackets to wrap if want but dont use curly braces as if you use that then you must have to return by using return keyword and once you write the return then it is no more implicit and this technique is very useful in react always remember this that use round brackets in implicit arrow function
console.log(arrowFunc(20,100));

// *** returning an object in implicit arrow function
const func=() => {username:"Baig"};// output is undefined , as we know that in implicit we avoid to use the curly braces instead we do this to use object in arrow function and for array so below one is correct
const func2=() => ({username:"Baig"});
console.log(func2());
console.log(func2);// output  : it only give the reference like this[Function: func2]





