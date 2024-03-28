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