// Immediately invoked functions expressions
// we use to bcz An IIFE is a function expression that runs immediately upon definition. We primarily use it to create a private scope and prevent global namespace pollution. While modern ES6 modules and block-scoped let/const have reduced their everyday use, they are still useful for one-time initialization code and legacy module simulation. it make the localvariables and secure the data mean encapsulate it so it cannot be modifiedfrom outside and in todays era although its usecase is reduced but it still needed for one time initialization , like we cannot database to be initialized automatically immediately than we use the iife.

// normally we write function like this
function code(){
    console.log(`DB connected`);
}

// but to write the iife is very simple and clear below it is:
// named IIFE
(function(){
    // code runs right away
   let message="hi";
   console.log(`${message}`);
})();
// so here one thing to remember that here that this IIFE is invoked but it doesnt know where to stop its context so in this situation in js you have to end it by using the semi colon , one more thing about it that if you try to make another IIFE without ending the previous one so in this case itll through an error , and one more thing you think is that in js the semicolon has been placed bycode editor if not placed by user but in this special case code editor will not placed the semicolon automatically you have to placed it explicitly. 

// unnamed IIFE
((id) => {
    console.log(`My id is ${id}`);
})("1111")

// so if youare still confuse in the syntax like why we are using two round brackets and what was it is doing so the: First () (Grouping Operator): Turns the function declaration into a function expression so JavaScript doesn’t throw a syntax error. Second () (Execution Operator): Invokes the function immediately.