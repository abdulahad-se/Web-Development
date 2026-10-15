const objj=new Object();// creates a new ordinary object

const obj={};// creates another ordinary object

obj.name="AbdulAhad";
obj.age=18;
obj.city="quetta";
// console.log(obj);

// nested objects

const regularUser={
    firstname:{
        last:{
            age:{
                name:"AbdulAhad",
                age : 18
            }
        }
    }
}
// console.log(regularUser.firstname.last.age.name);


const obj1={1:"a",2:"b",3:"c"};
const obj2={4:"a",5:"b",6:"c"};
//Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.
// there is one more syntax like this const obj3=Object.assign({},obj1,obj2) so adding {} is optional but adding it is good practice as it make sure the target that return is an object
// so {} act as target and all other are sources but we use this less instead more use is spread the one we use in array

// const obj3=Object.assign(obj1,obj2);
// console.log(obj3);//{ '1': 'a', '2': 'b', '3': 'c', '4': 'a', '5': 'b', '6': 'c' }

const obj3={...obj1,...obj2};
console.log(obj3);


// there is one more syntax that you used the most when the values comes from the database
// so values from database comes in array of objects liket his
const user=[
    {
        id:1234,
        email:"xyz@gmail"
        
    },
    {
        id:1234,
        email:"xyz@gmail"
        
    },
    {
        id:1234,
        email:"xyz@gmail"
        
    }
]
console.log(user[1].id);

//*********Methods here are some methods but not all*********** 

console.log(obj);

// Returns the names of the enumerable string properties and methods of an object.
console.log(Object.keys(obj));// [ 'name', 'age', 'city' ] so it return the array of key  and you can run the loop and get values it is very used in database 

// Returns an array of values of the enumerable own properties of an object
console.log(Object.values(obj));//[ 'AbdulAhad', 18, 'quetta' ]

//Returns an array of key/values of the enumerable own properties of an object
console.log(Object.entries(obj));//[ [ 'name', 'AbdulAhad' ], [ 'age', 18 ], [ 'city', 'quetta' ] ]
// so you can see that it return the each key value pair in array

/*
A property name.
Determines whether an object has a property with the specified name
*/
console.log(obj.hasOwnProperty("city"));//true
console.log(Object.propertyIsEnumerable("name"));







