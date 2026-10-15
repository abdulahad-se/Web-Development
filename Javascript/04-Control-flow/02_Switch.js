// switch : so basically we use it when we have multiple conditions for single thing :
/*
syntax:
switch (key) {
    case value:
        
        break;

    default:
        break;
}
*/
const month=10;
// so in place of key we put month becuause we have to check multiple values of month.
// and we use break so as if one condition executed so other all are ignored , as if we dont use it then all condition runs aswell after the correct condition and default in switch act as else in if .and default can only be once in each switch statements.
switch(month){
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Febuary");
        break;
    case 3:
        console.log("March");
        break;
        
    case 4:
        console.log("April");
        break;
    default:
        console.log("we are checking values of month");
        break;   
}

// ****** using switch for string
const days="Tuesday";
switch(days){
    case "Monday":
        console.log("Monday");
        break;
    case "Tuesday":
        console.log("Tuesday");
        break;
    case "wednesday":
        console.log("Wednesday");
        break;
    case "Thursday":
        console.log("Thursday");
        break;
    default:
        console.log("we are checking values of month");
        break;   
}