// const tinderUser =  new Object() //Singelton Objects 

const tinderUser = {} //Literal Objects
tinderUser.id = "123abc"
tinderUser.name = "Rajan"
tinderUser.isLoggedIn = false
// console.log(tinderUser);
// { id: '123abc', name: 'Rajan', isLoggedIn: false }

const regularUser = {
    email: "rajan.cse@outlook.com",
    fullname:{
        userFullName:{
            firstName:"Rajan",
            lastName:"Raj"
        }
    }
}
// console.log(regularUser.fullname);
// // { userFullName: { firstName: 'Rajan', lastName: 'Raj' } }
// console.log(regularUser.fullname.userFullName);
// // { firstName: 'Rajan', lastName: 'Raj' }

const obj1 = {
    1:"a",
    2:"b"
}
const obj2 = {
    3:"a",
    4:"b"
}

// const obj3 = {
//     obj1,
//     obj2
// }
// { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
const obj4 = {
    5:"a",
    6:"b"
}
// const obj3 = Object.assign(obj1,obj2,obj4)
// console.log(obj3);
// //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }
// console.log(obj1);
// { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }
// there are some problem with this is that if the format we are using in line 43 to 
// concate the objects. here, we are concate the three objects obj1, obj2, obj4
// and after concating it is assigned to obj3 . here is the catch is that 
// in this format obj 2 and obj4 .... if any will be copied to the first object here
// is obj1 so it will modify the obj1. hence better way is to put and empty array as 
// first object of the concate below is the format.
// in this format first all the concate object is copied to the empty array and array is 
// assigned to the obj3.
// Here {} => is Target , obj1,obj2,obj4 => is source.
// const obj3 = Object.assign({},obj1,obj2,obj4)
// console.log(obj3);
// // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }
// console.log(obj1);
// // { '1': 'a', '2': 'b' }

// better way to concate by using "spread Operator"
const obj3 = {...obj1,...obj2,...obj4}
console.log(obj3);
// { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

// Array of Objects:

const users = [
    {
        id:"1",
        email:"rajan.cse@outlook.com"
    },
    {
        id:"2",
        email:"Messachuate@gmail.com"
    }
]
console.log(users[1].email);
// Messachuate@gmail.com

console.log(tinderUser);
console.log(Object.keys(tinderUser)); // will return array of keys
console.log(Object.values(tinderUser)); // wiil return array of values
console.log(Object.entries(tinderUser)); // return array of properties
// { id: '123abc', name: 'Rajan', isLoggedIn: false }
// [ 'id', 'name', 'isLoggedIn' ]
// [ '123abc', 'Rajan', false ]
// [ [ 'id', '123abc' ], [ 'name', 'Rajan' ], [ 'isLoggedIn', false ] ]

// to check that any properties exists in the object or not
console.log(tinderUser.hasOwnProperty("isLoggedIn"));//will return boolean value true here


