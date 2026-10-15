// there are two ways of declaring an one is through object and other is through literals
// Object.create this is an constructor way of creating an object

// A singleton is a design pattern that restricts a type to one shared instance.
// Object literals and constructors do not automatically create singletons.

// object literals

// so question is declare symbol and use it in your object 
const sym1=Symbol();


const JsUser={
    // using symbol in an object , so this is way of using it in an object
    [sym1]:"Symbol",

    // by default system treats a key as string like this "name"
    name:"Abdul",
    age:18,
    location:"Quetta",
    email:"abdulahad@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Sunday"]

}

// There are two main values for accessing value
// when we access an values through . we should not use string for this like this "email", may be there is one more question in your mind that okay if we are able to access the values through . then why we need other way so as is let say we have key:value like "id":"ahad@" so here the key is explicitly declared as an string so to access it we cant use the . way as it doesnt allow string so we have now to use the other way like this JsUser["id"]
// console.log(JsUser.email);
// other way is so the question may arise in your mind that why we use string in second way so the answer is as we discuss before by default the key is treated as String
// console.log(JsUser["email"]);

// Accessing value of symbol
// console.log(JsUser[sym1]);
// console.log(typeof sym1);



// changing/overriding values of an object
JsUser.email="Ahad@gamil.com";
// console.log(JsUser);

// but if you want to prevent to change the value of an object then we use and freeze method but it must be applied on an object like this , but keep in your mind it prevent the changing the value after it not before like this
// Object.freeze(JsUser);
JsUser.email="AhadBaig@gamil.com";
// console.log(JsUser);

// now adding functions in an object so basically in js the function is treated as citizen1 typed mean it doesnt have any discrimination mean it can also be declared as variable
JsUser.greeting=function(){
    console.log("Hi this is function");
}
console.log(JsUser.greeting);// output : [Function (anonymous)] here only the reference is returned

// to call values we do this
console.log(JsUser.greeting());//Hi this is function


JsUser.greetingTwo=function(){
    // so when we refer to same object then we use the this keyword and we use this. then all properties in that object we can refer or access it like this:
    console.log(`Hi welcome ${this.name}`);
}
console.log(JsUser.greetingTwo());//Hi welcome Abdul





