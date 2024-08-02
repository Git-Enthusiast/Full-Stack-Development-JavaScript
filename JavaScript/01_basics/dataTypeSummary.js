// Data types is done on the basis of How it is stored in the memory and accessed it.
// it means stored in stack or heap and either call by value or reference.

// Primitive Data Types
// They all are "Call by Value" it means when accessed it given as a copy of the data its exact
// address is not provided.

// 7 types: String, Number, Boolean ,null--(means Empty not 0(zero)), undefined-->(it means 
// variables is decleared and its memory space is also decleared but exact value in not defined.),
// Symbol,BigInt,

const score = 100;
const scoreValue = 299.33
const isLoggedin = false
const outsideTemp = null
let userEmail ;
const id = Symbol('233')
const anotherId = Symbol('233')

console.log(id == anotherId); // false

const bigNumber = 23343454353455454353n
// if you put "n"in the last of the number it is considered as "BigInt"


// JavaScript is dynamically typed language


//  Non Primitive Data Types or Reference Data Types
// Array, Objects, Functions

const heros = ["IronMan","Hulk","Thor"]     //  Arrays
let myObj = {
    name: "Rajan",    //  Objects
    age:22
}

const myFunction = function(){
    console.log("Hello World!");  // Function
}

//  How to know about the DataTypes of a data.
console.log(typeof myFunction); // return function but called as Object Function
console.log(typeof myObj);  // object
console.log(typeof heros); // string
console.log(typeof bigNumber);
console.log(typeof outsideTemp); // object
console.log(typeof id);// symbol
console.log(typeof anotherId);//symbol

/*
       DataTypes of data

       Undefined = undefined
       Null = object
       Boolean = boolean
       String = string
       Number = number

*/


/*
++++++++++++++++++++++++++++++++ Memorory in JavaScript +++++++++++++++++


Stack(Primitive), Heap (Non-Primitive)
 example:
*/
let myName = "Rajan Raj"
let anotherName = myName
console.log(anotherName);
anotherName = "Rajan Kumar Rai"
console.log(anotherName);
console.log(myName);

let userOne= {
    email: "Rajan.cse@outlook.com",
    upi:"user@ybl"
}

let userTwo = userOne
userTwo.email = "Rajan.software.developer@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);




//                   Explanations:



// Your current JavaScript code covers a variety of fundamental concepts including Date handling, primitive and non-primitive data types, type checking, and memory management. Here's a comprehensive explanation of the code with additional examples to clarify each concept:

// ### Dates in JavaScript
// JavaScript provides the `Date` object for handling dates and times. 

// #### Date Object
// Creating a new date:
// ```javascript
// let myDate = new Date();
// console.log(myDate.toString()); // e.g., "Sat Aug 02 2024 10:30:00 GMT+0000 (Coordinated Universal Time)"
// console.log(myDate.toISOString()); // e.g., "2024-08-02T10:30:00.000Z"
// console.log(myDate.toJSON()); // e.g., "2024-08-02T10:30:00.000Z"
// console.log(myDate.toLocaleDateString()); // e.g., "8/2/2024"
// console.log(myDate.toLocaleTimeString()); // e.g., "10:30:00 AM"
// console.log(myDate.getTime()); // e.g., 1711807821660 (milliseconds since Jan 1, 1970)
// console.log(myDate.toLocaleString()); // e.g., "8/2/2024, 10:30:00 AM"
// console.log(typeof myDate); // "object"
// ```

// Creating a specific date:
// ```javascript
// let myCreatedDate = new Date(2024, 2, 30); // In JavaScript, months are 0-indexed, so 2 is March
// console.log(myCreatedDate.toDateString()); // "Sat Mar 30 2024"
// console.log(myCreatedDate.toLocaleTimeString()); // "12:00:00 AM"
// ```

// Creating a date with a specific time:
// ```javascript
// let anotherDateAndTime = new Date(2024, 2, 30, 7, 19);
// console.log(anotherDateAndTime.toLocaleDateString()); // "3/30/2024"
// console.log(anotherDateAndTime.toLocaleString()); // "3/30/2024, 7:19:00 AM"
// console.log(anotherDateAndTime.toLocaleTimeString()); // "7:19:00 AM"
// ```

// Using ISO date string:
// ```javascript
// let getTime = new Date("2024-03-30");
// console.log(getTime.toLocaleString()); // "3/30/2024, 12:00:00 AM"
// console.log(getTime.getTime()); // 1711766400000 (milliseconds since Jan 1, 1970)
// ```

// Current timestamp:
// ```javascript
// let myTimeStamp = Date.now();
// console.log(myTimeStamp); // e.g., 1711807821660
// console.log(Math.floor(Date.now() / 1000)); // e.g., 1711807821 (seconds since Jan 1, 1970)
// ```

// More Date properties and methods:
// ```javascript
// let newDate = new Date();
// console.log(newDate); // e.g., "2024-08-02T10:30:00.000Z"
// console.log(newDate.getTime()); // e.g., 1711807821660
// console.log(newDate.getDate()); // e.g., 2
// console.log(newDate.getMonth() + 1); // e.g., 8 (months are 0-indexed, so add 1)
// console.log(newDate.toLocaleString('default', { weekday: "long" })); // e.g., "Saturday"
// ```

// ### Data Types in JavaScript

// #### Primitive Data Types
// Primitive data types are immutable and are passed by value.

// - **String**
// - **Number**
// - **Boolean**
// - **Null**
// - **Undefined**
// - **Symbol**
// - **BigInt**

// Examples:
// ```javascript
// const score = 100;
// const scoreValue = 299.33;
// const isLoggedin = false;
// const outsideTemp = null;
// let userEmail;
// const id = Symbol('233');
// const anotherId = Symbol('233');
// const bigNumber = 23343454353455454353n;

// console.log(id == anotherId); // false
// console.log(typeof score); // "number"
// console.log(typeof outsideTemp); // "object" (historical JavaScript quirk)
// console.log(typeof bigNumber); // "bigint"
// ```

// #### Non-Primitive Data Types
// Non-primitive data types are mutable and are passed by reference.

// - **Array**
// - **Object**
// - **Function**

// Examples:
// ```javascript
// const heros = ["IronMan", "Hulk", "Thor"];
// let myObj = {
//     name: "Rajan",
//     age: 22
// };
// const myFunction = function() {
//     console.log("Hello World!");
// };

// console.log(typeof myFunction); // "function"
// console.log(typeof myObj); // "object"
// console.log(typeof heros); // "object"
// ```

// ### Memory Management
// In JavaScript, memory is managed using stack and heap.

// - **Stack**: Used for primitive data types, which are stored directly on the stack and passed by value.
// - **Heap**: Used for non-primitive data types, which are stored in the heap and passed by reference.

// Examples demonstrating immutability and mutability:
// ```javascript
// // Primitive (Immutable)
// let myName = "Rajan Raj";
// let anotherName = myName;
// console.log(anotherName); // "Rajan Raj"
// anotherName = "Rajan Kumar Rai";
// console.log(anotherName); // "Rajan Kumar Rai"
// console.log(myName); // "Rajan Raj"

// // Non-Primitive (Mutable)
// let userOne = {
//     email: "Rajan.cse@outlook.com",
//     upi: "user@ybl"
// };
// let userTwo = userOne;
// userTwo.email = "Rajan.software.developer@gmail.com";
// console.log(userOne.email); // "Rajan.software.developer@gmail.com"
// console.log(userTwo.email); // "Rajan.software.developer@gmail.com"
// ```

// Understanding immutability and mutability is crucial for managing state and side effects in JavaScript, particularly in functional programming and when working with frameworks like React.