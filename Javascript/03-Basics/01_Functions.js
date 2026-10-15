

function myName (){
    console.log("A");
    console.log("b");
    console.log("d");
    console.log("u");
    console.log("l"); 
}
// function : if we call this we didnt get anything as it is reference of a function
// myName();

function addTwoNumber(number1,number2){
    console.log(number1+number2);
}
// addTwoNumber(2,3);// 5
// addTwoNumber(2,"4");//24
// addTwoNumber(2,"a");//2a
// addTwoNumber(2,null);//2


function sum(number1,number2){
    console.log(number1+number2);
}
// const result=sum(2,3);
// console.log(result);// output is undefined because function is not returning anything

// returning
function sum2(a,b){
    let result=a+b;
    return result;// or return a+b
    console.log("Ahad");// this line never executes as it convention that return must be last statement of function bcz as function return value its stopped being called anymore. if you want this line to execute to prinnt it above the return statement
    
}
// const ans=sum2(20,22);
// console.log(ans);

function loginUser(username){
    if(username === undefined){ // or (!username)
        console.log("Must pass an parameter");
        return;
    }
    return `${username} welcome`;
}
const ans=loginUser("Ahad"); // or consolelog(loginUser("Ahad"));
// console.log(ans);
// console.log(loginUser());//output : undefined bcz no argument has pass.


// setting an default parameter in case if user doesnt passes any argument then this default parameter executes
function defaultArgument(name = "Mr"){
    return `${name} welcome`;
}
console.log(defaultArgument());// output : Mr welcome
console.log(defaultArgument("Ahad"));//output : Ahad welcome


// note : convention that the value passes in functions like this function argument(a,b) so this a , b is called parameter and the value passes by user like this argument(1,2) so this 1,2 is argument this is only convention.



// **********************************************

// so there are conditions in real world programming in which we dont know how much parameters can come from user side than we use rest operator ... , the fact is that these ... is know as spread and rest but it depend on it usecase that where weare using it .
function add(...num1){
    return num1;
}
// console.log(add(200,300,400));//output : [200,300,400] 

function add2(val1,val2,...num1){
    return num1;
}
console.log(add2(200,300,400,500,600));//output :[400,500,600] the val1 and val2 is not include because they are not part of rest operator as initial values goes inside val1 and val2 and remaining inside an rest operator and we return the num1

// ******* Passing object inside an functions *********

const obj={
    name:"AbdulAhad",
    age:18
}
function passsingObject(passingOb){
    console.log(`The name is ${passingOb.name} and age is ${passingOb.age}`); 
}
// passingOb(obj);
// so question may arise why we dont put actual obj inside the parameter so answer is it doesnt matter what you are passing in js but the thing matters is what are you passing in argument as here i just declared variable inside an paramter but in argument i passing the reference of an obj so passingOb and obj point to the same object , if you know java that you can understand more clearly that how referncing work . one more thing is that if the variable doesnt exist in the object the answer is undefined like passingOb.id answer is undefined,you can also passing object itself unlike passing an reference like this:
passsingObject({
    name:"Mirza",
    age : "20"
})

// *************** Passing an Array ***************
const newArray=[200,300,400];
function callArr(arr){
   return arr[2];  
}
console.log(callArr(newArray));

console.log(callArr([
    200,
    100,
    500
]));





























