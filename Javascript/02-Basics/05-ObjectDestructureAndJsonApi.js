
//Object Destructuring: Used heavily to pull values out of API responses cleanly without writing object.key repeatedly.
const constructorName={
    id:"abcd12",
    name:"AbdulAhad",
    age:"18"
}
// so one way to get values is like this constructorName.name so for example if we want others value as value then again we have to write the constrcutorName like this:
// constructorName.name;

// but there is one more way that is more efficient and prefferred and that is known as Object de-Structure it syntax is like this : variable {key}=initializer ( objectName)
// const {name}=constructorName;  // so here we destructured the array and get values
// console.log(name);

// you can also do like this 
const {name:instructor}=constructorName;
console.log(instructor);

// and you can call more than one aswell like this 

const {name,age,id}=constructorName;
console.log(`My name is ${name} my age is ${age} and my id is ${id}`);


/*
# 📌 JSON & API Basics

## 1. What is an API & JSON?
* **API (Application Programming Interface):** A bridge that allows two applications to communicate and share data.
* **JSON (JavaScript Object Notation):** The lightweight, universal text format used by modern APIs to transport data.

---

## 2. Evolution: XML vs. JSON

### ❌ Old Way: XML (Extensible Markup Language)
Data was sent wrapped in heavy markup tags similar to HTML. It was verbose, had larger payload sizes, and required complex parsing trees in JavaScript.

```xml
<user>
  <id>101</id>
  <name>Ahad</name>
  <role>Developer</role>
  <isStudent>true</isStudent>
</user>

Data is sent as clean key-value pairs that directly map to native programming structures. It is fast, lightweight, and easy to read.

JSON
{
  "id": 101,
  "name": "Ahad",
  "role": "Developer",
  "isStudent": true,
  "skills": ["HTML", "CSS", "JavaScript"]
}

3. Key Rules & Structure
Strict Syntax: Unlike standard JavaScript objects, keys in JSON must always be wrapped in double quotes "".

Supported Data Types: String, Number, Boolean, Array [], Object {}, and null.

Common Shapes: APIs return data either as a single JSON Object {} or as an Array of Objects:

JSON
[
  { "id": 1, "name": "Ahad" },
  { "id": 2, "name": "Hitesh" }
]
Useful Tools: Online formatters like jsonformatter.org help clean up and inspect raw API responses.

note : its not neccessary that every time the data come sin object it may come also in array
*/

