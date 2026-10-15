/*
syntax
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}
    */

// for(let i=0; i< 10 ; i++){
//     const element=i;
//     console.log(element);
// }



// ******* Using condition inside an for loop **********
// for (let index = 0; index < 20; index++) {
//     const element = index;
//     if(element === 5){
//         console.log("5 is the mid number in the range of 1-10");
//     }  
//     console.log(element);
// }



// ******** Nested For Loop *************
// for(let i=0; i<=10; i++){
//     console.log("The value of i is :", i);
//     for (let j = 0; j < 10; j++) {
//         const element =j;
//         console.log("The value of j is :",j);
//     }
// }



// ********** Printing the table of 1 - 10 **********
// for (let i = 1; i <= 10; i++) {
//     for (let j = 1; j <=i; j++) {
//         console.log(`${i} * ${j} = ${i*j}`);
//     }
// }



// ********** Traversing Through An Array **********
// const myArr=["batman","Superman","Hitman"];
// for (let index = 0; index < myArr.length; index++) {
//     const element = myArr[index];
//     console.log(element);
// }


// ************** break(whenver we want to break the control flow we use break) and Continue ( continue doesnt break the flow but it skip the condition as shown in below example) ************

// for (let index = 1; index <= 20; index++) {
//     // so lets say we want to stop the loop and break the flow when 5 comes so we do this
//     const element = index;
//     if(element === 5){
//         console.log("5 is detected");
//         break;
//     }
//     console.log(element);
// }


for (let index = 1; index <= 20; index++) {
    // so lets say we want to keep loop running but skip the condition like when index == 5 so skip 5 and move to 6 instead of breaking the loop it'll make the loop to complete its iterations.
    const element = index;
    if(element === 5){
        console.log("5 is detected");
        continue;
    }
    console.log(element);
}

