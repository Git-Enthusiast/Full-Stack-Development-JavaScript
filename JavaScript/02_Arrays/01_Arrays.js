// Arrays in JavaScript
// are Resizable
// can contains  mix of different data types
// if we change any element in the array it permaenetly changes the array


const myHeros = ["IronMan","SuperMan","Thor","Loki"]
const myArr = [0,1,2,3,4,5,6,7,8,9]
const myArr2 = new Array(1,2,3,4,5)

// Arrays Method
// myArr.push(780)
// console.log(myArr);
// myArr.pop()
// console.log(myArr); // Pop Out the last element.

myArr.unshift(1091) 
// it will add 1091 to the first position and shift all the existing elelments
// towards right so it is large time taking operations and computer overload 
// if there is large no of elements present in the arary.

console.log(myArr);
// [
//     1091, 0, 1, 2, 3,
//        4, 5, 6, 7, 8,
//        9
//   ]

myArr.shift()
// will delete first elelment of the array 
console.log(myArr);
// [
//     0, 1, 2, 3, 4,
//     5, 6, 7, 8, 9
//   ]
console.log(myArr.includes(7));// false  so it gives boolean value
console.log(myArr);
console.log(myArr.indexOf(0));// return the position of element in the array 
// if exists and if not gives -1 else.

const newArr = myArr.join()
console.log(myArr);
console.log(newArr);
console.log(typeof newArr);// join bind it and convert the array into the String
//                             -> String
// 0,1,2,3,4,5,6,7,8,9
// string

// *************** Slice, Splice ***************
console.log("*************** Slice, Splice ***************");

console.log("Origianl Array");
console.log("A",myArr); // Origianl Array
const slisedArray = myArr.slice(1,5) // it will include element from  1 to 4 and 
// exclude 5 
console.log("Use of Slice");
console.log(slisedArray);// [ 1, 2, 3, 4 ]  Use of Slice
console.log("B", myArr);

const splicedArray = myArr.splice(1,5)
console.log("Use of Splice");
console.log(splicedArray);
console.log("C",myArr);

// Slice does not actuall change the array but only manipulate temproray.
// Splice changes array permanently

// *************** Slice, Splice ***************
// Origianl Array
// A [
//   0, 1, 2, 3, 4,
//   5, 6, 7, 8, 9
// ]
// Use of Slice
// [ 1, 2, 3, 4 ]
// B [
//   0, 1, 2, 3, 4,
//   5, 6, 7, 8, 9
// ]
// Use of Splice
// [ 1, 2, 3, 4, 5 ]
// C [ 0, 6, 7, 8, 9 ]

