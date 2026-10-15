// So hope so we all know these type of comparisons.

// console.log(2 > 2);
// console.log(2 < 2);
// console.log(2 == 2);
// console.log( 2 >= 2);
// console.log(2<=2);
// console.log(2 != 2);


// But there are some confusing comparisons aswell which is important for exam and interview pov.

console.log("2" > 2);// output is false: "2" is converted to 2, then 2 > 2 is false.
console.log("2" < 2); // output is false: 2 < 2 is false.
console.log("2 " == 2); // output is true: loose equality converts "2 " to 2.

// Note always try to use comaprison operator of same datatype , not like the below one as it causes confusion always give priority to clean code.
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);

// so as we notice that datatypes converted as we compare string with int so string is converted into int , so to overcome this problem and to prevent datatypeconversion we use 
// === triple equal sign which is used for strict comparison so when we use this sign then it not only compare the value but also there datatype.

console.log("2" === 2); //false.
