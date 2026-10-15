
// global variable becuase it is declared outside any block and global variable can be accessed anywhere inside a class either block or nested block
const a=10;
let b=20;
var c=30;

// console.log(a);//output :10
// console.log(b);// output :20
// console.log(c);//output :30

if(true){
    // this is local variable because it is defined locally within an block and its not accessible outside the class except var and c=300 because these variables doesnt respect the scope.
    let a=100;
    const b=200;
    // var c=300;
    c=300;
    // console.log(a);// 100 bcz it locally called and this explanation is same for the const as well.
    
}
// console.log(a);//10
// console.log(b);//20
// console.log(c);//300 , so here the problem we didnt use var because it doesnt respect the scope of block as we can see the global value of var c is 30 but we locally var c =300 inside an block of if but the 300 override the actual global value and print it so this reason of not using var but instead let and const that respects the scope. and the c=300 is same as var it also doesnt respect the scope


function one (){
    let name ="AbdulAhad"
    function two(){
        let lastname="Baig"
        console.log(name);
    }
    console.log(lastname);// output is error : bcz as we can see here the ref variable is called outside of its block so thats why it causes an error and when error appears the remaining thing like two() and one() doesnt execute.to make two() execute write it above the print statement so functions call and after it errors
    two();
}
// one();


if(true){
    const username="AbdulAhad";
    if(username === "AbdulAhad"){
        const website="github";
        console.log( `${username} ${website}`);
    }
    console.log(website);//so after understanding previous example we easily understand that this line causes an error because it has been called outside the block.
}
console.log(username);// output : error bcz it is called outside of its block.


//************* Interesting **************************** 

// there a way to declare a function like this we are doing

addone(); // so if we call the function here it also doesnt affect but we can call it here aswell
function addone(num){
     return num+1
}
// addone();// output : nothing bcz we are not printing but understanding concept

//  storing function inside an variable , 

addTwo();// output error , bcz the question may arise that the function is called upwards aswell but here it causing an error so answer it here the function is stored inside an variable and we know that we cant access variable until it is defined/initialized.
const addTwo=function (num){
    return num+2
}
addTwo();

// later on in js a concept come called hoisting which tell how functions are declared where we kept it what is there execution context and how js treats variables so the function stored in variable can be  an example of hoisting because there is an execution context like we cannot access it before declaration.
