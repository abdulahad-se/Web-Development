// so it is one way to declare number as it datatype is determined at runtime.
const num=400;
console.log(num);//output is 4.


// we have another way of creating a number is through making an object
const Numb=new Number(100);
console.log(Numb);// output is [Number : 100]


console.log(Numb.toString());//output is now 100 , but the question may arise why not "" are there so answer is it coverted in string already and when we use typeof so asnwer is string.

console.log(typeof Numb);// output is object , to get string we have to store it in and variable
   
const newOne=Numb.toString();
console.log(typeof newOne); // output : string

// so when you make an e-commerce website so there is addition mutiplication to calculate gst due to which precison value get too large , and client dont want that long precision value so in that case always use 2 or any suitable number which decreases the precision.
console.log(Numb.toFixed(2));

/*
Number of significant digits. Must be in the range 1 - 21, inclusive.
Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits
*/
const precision=122.895;
// always use precision carefully as it give you precise value
console.log(precision.toPrecision(2));//output : 1.2e+2 as we use precision 2 and vlaue is 122.895 so it give first two number priority and precisely convert other number into exponent.


const hundreds=1000000;
console.log(hundreds.toLocaleString());// output : 1,000,000 . so toLocalString() is used to convert you value according to your locality by by default it convert according to american but if you want to convert in your locality like pakistan and india and you can do like this :
console.log(hundreds.toLocaleString('en-PK'));



// ************************************ Maths *********************************************************

console.log(Math);// output : object
console.log(Math.abs(-4));// output : 4
console.log(Math.round(40.5));// output : 41
console.log(Math.ceil(45.2));// output : 46
console.log(Math.floor(45.7));// output : 45
console.log(Math.sqrt(81));// output : 9
console.log(Math.pow(5,3));// output : 125
console.log(Math.min(2,1,3,40,-1));// output : -1
console.log(Math.max(1,2,4,20,100));// output : 100

// There are many more , but lets discuss one more that is random . So  by word random we can figure out it is used to guess random values between 0 ,  0.1 , 0.2 .... like this.
console.log(Math.random());// output : 0.5106...04

// to prevent zeros we multiply it by 10 so it shift towards right. by one digit
console.log(Math.random()*10);// output : 2.08033...85

// but maybe it generate numbers that has more than one zero so in that case *10 doesnt work properly as it eliminates one zero so in that case we add +1 for ensurity that all zeros skipped
console.log((Math.random()*10)+1);// output :3.92615...38

// we can also wrap the random function in methods like floor, ceil, and abs.
console.log(Math.floor((Math.random()*10)+1)); // output: an integer from 1 through 10

// okay so as for now we notice that we have not any range so for apply range like we want that random function create values for us between that particular value so then we can do like this : here the all values are exactly like this but one thing we change is instead of multiplying with 10 we just give range and add min mean the minimum value want is min.

const min=10;
const max=20;


console.log(Math.floor(Math.random() * (max-min+1)) + min);// so here the minimum value it give is 10 and max is 20 .


















