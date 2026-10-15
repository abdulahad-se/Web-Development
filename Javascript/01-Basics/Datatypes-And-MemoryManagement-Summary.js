/* so our first question is is JavaScript is static or dynamic.
-So our answer is , JavaScript is dynamically type language , becuse in js we dont have to delcare the datatypes explicity mean its not compulsory , it determine the datatype at runtime we dont have to delcare it explicitly.
*/

/*
Types of Datatypes : There are main 2 types of dataytpes => Primitive and other is Reference(Non-Primitive).
*/ 


// 1-Primitive

/*
1-String:Strings are useful for holding data that can be represented in text form. Some of the most-used operations on strings are to check their length, to build and concatenate them using the + and += string operators, checking for the existence or location of substrings with the indexOf() method, or extracting substrings with the substring() method.
 Strings can be created as primitives, from string literals, or as objects, using the String() constructor.In any computer programming language, a string is a sequence of characters used to represent text.
In JavaScript, a String is one of the primitive values and the String object is a wrapper around a String primitive.
*/
const string1 = "A string primitive";
const string2 = 'Also a string primitive';
const string3 = `Yet another string primitive`;
// creating an object
const string4 = new String("A String object");


/*
2-Number:The Number constructor contains constants and methods for working with numbers. Values of other types can be converted to numbers using the Number() function.In JavaScript, Number is a numeric data type in the double-precision 64-bit floating point format (IEEE 754). In other programming languages different numeric types exist; for example, Integers, Floats, Doubles, or Bignums.
*/
255; // two-hundred and fifty-five
255.0; // same number
255 === 255.0; // true
255 === 0xff; // true (hexadecimal notation)
255 === 0b11111111; // true (binary notation)
255 === 0.255e3; // true (decimal exponential notation)

const num=12;


/*
3-BigInt:BigInt values represent integer values which are too high or too low to be represented by the number primitive.In JavaScript, BigInt is a numeric data type that can represent integers in the arbitrary precision format. In other programming languages different numeric types can exist, for examples: Integers, Floats, Doubles, or Bignums.
*/
typeof 1n === "bigint"; // true
typeof BigInt("1") === "bigint"; // true

typeof Object(1n) === "object"; // true

/*
4-Boolean:Boolean values can be one of two values: true or false, representing the truth value of a logical proposition.In computer science, a Boolean is a logical data type that can have only the values true or false.
For example, in JavaScript, Boolean conditionals are often used to decide which sections of code to execute (such as in if statements) or repeat (such as in for loops).
*/

const isLoggedIn=false;

/*
5-null:he null keyword refers to the null primitive value, which represents the intentional absence of any object value.In computer science, a null value represents a reference that points, generally intentionally, to a nonexistent or invalid object or address. The meaning of a null reference varies among language implementations.
In JavaScript, null is marked as one of the primitive values, because its behavior is seemingly primitive. However, when using the typeof operator, it returns "object".
*/
const outsideTemp=null;

/*
6-undefined:The undefined global property represents the primitive value undefined. It is one of JavaScript's primitive types.It is a primitive value automatically assigned to variables that have just been declared, or to formal arguments for which there are no actual arguments.
*/
let userEmail; 
// or
let userEmail2=undefined;

/*
7-symbol:A JavaScript Symbol is a built-in object that returns a guaranteed-unique primitive value. They are primarily used as object property keys to prevent naming collisions and to provide a weak form of encapsulation or information hiding by staying hidden from typical access mechanisms.
Core BehaviorSymbol(): Every call is guaranteed to return a brand new, entirely unique Symbol.Symbol.for("key"): Accesses a global Symbol registry.If a Symbol with that specific string key already exists, it returns it.If it doesn't exist, it creates a new one, saves it to the global registry under that key, and returns it.
*/

const id=Symbol('123');
const anotherId=Symbol('123');
// so as we know we use symbol when we want uniqueness so here if we compare it answer is false.


// ********************************************************************************

// 2-Reference(Non-Primitives)
/*
 JavaScript Non-Primitive (Reference) Data Types

### The Core Concept
Under the hood, JavaScript has only **one root non-primitive type: `Object`**. 
However, for practical programming and daily use, we classify them into **3 main structural categories**:

---

## 1. The 3 Main Practical Classifications

### 📦 Objects (Standard Objects)
* **What it is:** A collection of key-value pairs used to store grouped data.
* **Syntax:** `{ key: value }`
* **Example:**
  ```javascript
  const user = { name: "Hitesh", age: 25 };
  console.log(typeof user); // "object"
  ```

### 📋 Arrays
* **What it is:** An ordered list of values. Under the hood, it is just an object where the keys are numbers (`0`, `1`, `2`, etc.) and it has a special `.length` property.
* **Syntax:** `[item1, item2]`
* **Example:**
  ```javascript
  const colors = ["red", "green", "blue"];
  console.log(typeof colors); // "object" (Quirk: Use Array.isArray(colors) to check!)
  ```

### ⚙️ Functions
* **What it is:** A block of code designed to perform a particular task. Under the hood, it is a "callable object" (an object you can run using `()`).
* **Syntax:** `function name() {}`
* **Example:**
  ```javascript
  const greet = function() { return "Hello!"; };
  console.log(typeof greet); // "function" (An optimization rule, but still an object!)
  ```

---
*/


// **************************************************************************

// What Answer We Get When We Use typeof for Different Datatypes.
/*

typeof => string =>string
typeof => null =>object
typeof => symbol => symbol
typeof => number =>number
typeof => boolean =>boolean
typeof => undefined => undefined
typeof => bigint =>bigint

*/



// ***********************************************************************************





/*
# JavaScript Memory Management: Stack vs. Heap

### ⚡ Stack Memory (Stored by Value)
* **What it is:** A fast, organized, and fixed-size structure that operates on a **Last-In, First-Out (LIFO)** basis.
* **What it stores:** All **Primitive data types** (`number`, `string`, `boolean`, etc.) and actual **variable identifiers / reference pointers**.
* **Behavior:** When you assign a primitive variable to another, JavaScript creates a **separate copy of the value**. Changing one will **not** affect the other.
* **Example:**
  ```javascript
  let name1 = "Hitesh";
  let name2 = name1; // Creates a separate copy in the Stack
  name2 = "Chai";
  
  console.log(name1); // "Hitesh" (Unchanged)
  console.log(name2); // "Chai"
  ```

---

### 📦 Heap Memory (Stored by Reference)
* **What it is:** A large, flexible, and unstructured memory pool designed for **dynamic allocations** where data sizes can grow or shrink.
* **What it stores:** All **Non-Primitive types** (`Objects`, `Arrays`, `Functions`).
* **Behavior:** The actual data lives inside the **Heap**. The variable inside the **Stack** only stores a **pointer (memory address)** pointing to that location in the Heap. When you assign it to another variable, it copies the **address pointer**, not the data itself.
* **Example:**
  ```javascript
  let user1 = { email: "user@google.com" };
  let user2 = user1; // Both now point to the EXACT SAME address in the Heap
  
  user2.email = "hitesh@google.com"; // Modifies the shared Heap data
  
  console.log(user1.email); // "hitesh@google.com" (Changed!)
  console.log(user2.email); // "hitesh@google.com"
  ```

---

### 🧠 Quick Summary Cheat Sheet

| Feature | Stack Memory | Heap Memory |
| :--- | :--- | :--- |
| **Data Types** | Primitives (and pointers) | Non-Primitives (Objects/Arrays) |
| **Storage Type** | By **Value** (independent copies) | By **Reference** (shared address) |
| **Speed** | Extremely Fast | Slower (requires searching memory) |
| **Size Limit** | Fixed and limited size | Large and dynamic |

*/



// *************************************************************************************


/*
---

### 🎁 Primitive Wrapper Objects (Autoboxing)

#### The Paradox
Primitives (like Strings, Numbers, and Booleans) are simple values stored in the **Stack**. They are not objects, meaning they do not naturally have properties or methods. However, JavaScript allows you to run code like this:
```javascript
let name = "hitesh"; 
console.log(name.toUpperCase()); // "HITESH" (Wait, how did a primitive use a method?)
```

#### How it works under the hood (Memory Behavior)
1. **The Temporary Wrap:** The moment you try to access a property or method on a primitive (like `.toUpperCase()`), JavaScript instantly creates a temporary **Non-Primitive Object wrapper** (e.g., `new String("hitesh")`) in the **Heap**.
2. **Execution:** JavaScript executes the method from that temporary object wrapper.
3. **The Instant Drop:** As soon as the line of code finishes executing, the temporary object in the Heap is immediately discarded and marked for **Garbage Collection**.

#### Why JavaScript does this
This gives you the best of both worlds:
* **Performance:** Your data stays as a lightweight primitive in the ultra-fast **Stack** memory 99% of the time.
* **Convenience:** You still get access to powerful object-like methods whenever you need them, without wasting permanent memory in the Heap.







### 🔄 Summary: Primitive Wrappers (JS vs. Java)

* **The Core Definition:** A wrapper is a **non-primitive object representation of a primitive data type** in both languages.
* **JavaScript Behavior (Dynamic & Transient):** Because JS is dynamically typed, it handles wrapping entirely behind the scenes. When a primitive string calls `.toUpperCase()`, JS instantly creates an object wrapper in the Heap, executes the action, and **instantly discards it from the Heap** the millisecond that line finishes executing.
* **Java Behavior (Static & Persistent):** Because Java is a strictly, statically typed language built for safety, wrappers (`Integer`, `Character`, etc.) are explicitly or implicitly instantiated as permanent objects. They do **not** instantly vanish after one line; instead, they stay in the Heap and rely on the regular **Garbage Collector** to delete them later once it detects there are no active references left in the Stack.

*/
