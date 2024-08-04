//  Singleton
// Object formed by Literals don't form Singleton
// object formed by Constructor form Singelton
// eg : object.create

// Symbol

const mySym = Symbol("key1")
// to make Symbol a key of the object format should be: 
// [Symbol Name]:"Symbol Value" = > Here:   [mySym]:"Key1"
// To access the Symbol only way by using square Bracks.


// Ways to Form Objects in JavaScript
// ***********   Object Literal  **************

const JsUser = {
    name:"Rajan",
    age:23,
    location: "Bilaspur",
    email:"rajan.cse@outlook.com",
    isLoggedIn : false,
    lastLoginDays: ["Monday","Saturday"],
    "Full Name": "Rajan Raj",
    [mySym]:"Key1" // Is a Symbol

}

// Ways to access the Objects in Js
console.log(JsUser.email);
console.log(JsUser.age);
console.log(JsUser["email"]);
console.log(JsUser.name);
console.log(JsUser["name"]);
console.log(JsUser["age"]);
console.log(JsUser["isLoggedIn"]);
console.log(JsUser["lastLoginDays"]);
console.log(JsUser["Full Name"]);
console.log(JsUser[mySym]);

// rajan.cse@outlook.com
// 23
// rajan.cse@outlook.com
// Rajan
// Rajan
// 23
// false
// [ 'Monday', 'Saturday' ]
// Rajan Raj
// Key1
console.log("*********** Typeof ***********");
console.log(typeof JsUser.name);
console.log(typeof JsUser.age);
console.log(typeof JsUser.location);
console.log(typeof JsUser.email);
console.log(typeof JsUser["Full Name"]);
console.log(typeof JsUser[mySym]); // string
/*
When accessing the value associated with the Symbol key, 
JsUser[mySym] returns the value "Key1", which is a string. 
Therefore, typeof JsUser[mySym] returns "string".

So, the value assigned to the Symbol key ("Key1") is a string, 
which explains why typeof JsUser[mySym] returns "string". 
The typeof operator checks the type of the value stored in 
the property, not the key itself.
*/
console.log(typeof JsUser.isLoggedIn);
console.log(typeof JsUser.lastLoginDays);

// *********** Typeof ***********
// string
// number
// string
// string
// string
// string
// boolean
// object

// to change the value of the object 

JsUser.email = "Rajan.software.developer@gmail.com"
// If you want the Freeze the Object which means no one can change the 
// value of the objcet keys if try there will not be error but value will not change.

// Object.freeze(JsUser)
JsUser.email = "messachuate@gmail.com"
console.log(JsUser);

// {
//     name: 'Rajan',
//     age: 23,
//     location: 'Bilaspur',
//     email: 'Rajan.software.developer@gmail.com',
//     isLoggedIn: false,
//     lastLoginDays: [ 'Monday', 'Saturday' ],
//     'Full Name': 'Rajan Raj',
//     [Symbol(key1)]: 'Key1'
//   }

// Functions in Js

JsUser.greeting = function(){
    console.log("Hello,Hi I am Rajan Raj.");
}

console.log(JsUser.greeting); 
console.log(JsUser.greeting());

// [Function (anonymous)]
// Hello,Hi I am Rajan Raj.


 
JsUser.greetingTwo = function(){
    console.log(`Hello Js User This is ${this["Full Name"]}`);
}  
console.log(JsUser.greetingTwo());
// Hello Js User This is Rajan Raj
// undefined
console.log(JsUser);
