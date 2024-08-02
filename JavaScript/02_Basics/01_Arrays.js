// Arrays in JavaScript
// are Resizable
// can contains  mix of different data types
// if we change any element in the array it permaenetly changes the array
/*
Mutability of Arrays
In JavaScript, arrays are mutable. This means you can change their contents without creating a new array.
 The operations like arr[1] = 42 and arr.push(4) 
modify the existing array object in the heap rather than creating a new array.

Mutability: Arrays can be changed after they are created. Modifying elements or
 adding new ones affects the same array object.
Memory: When you modify the array (like changing values or adding elements),
 it does not create a new array in memory. Instead, it updates the existing array in the heap.
Summary
The stack contains a reference to the array object in the heap.
The heap contains the actual array object.
Modifications to the array (e.g., changing elements, adding items) affect 
the existing array in the heap rather than creating new arrays.



Changing `let` to `const` in the array declaration in JavaScript affects 
how the variable reference to the array can be used, but it does not affect 
the mutability of the array itself. Let’s clarify this with a detailed explanation.

### Using `let` vs. `const`

- **`let`:** Allows you to reassign the variable to a new value. For example, 
you can reassign the `arr` variable to a completely different array or another value.

- **`const`:** Prevents reassignment of the variable. Once a variable is 
declared with `const`, you cannot reassign it to a different value or object. 
However, you can still modify the contents of the object or array that 
the `const` variable refers to.

### Example with `let`

```javascript
let arr = [1, 2, 3];
arr[1] = 42;  // This changes the value inside the array
arr.push(4);  // This adds a new element to the array

arr = [5, 6, 7];  // This reassigns the variable to a new array
```

**Memory Diagram:**

- Initially, `arr` refers to `[1, 2, 3]` in the heap.
- After modifying the array, `arr` still refers to the same array in the heap.
- When reassigning `arr` to `[5, 6, 7]`, the stack now points to a new array in the heap.

**Stack and Heap after reassignment:**

```
Stack:
+--------+
| arr    | --> [5, 6, 7] (Reference to a new array in heap)
+--------+

Heap:
+------------------------+
| Array Object: [5, 6, 7] |
+------------------------+
```

### Example with `const`

```javascript
const arr = [1, 2, 3];
arr[1] = 42;  // This changes the value inside the array
arr.push(4);  // This adds a new element to the array

arr = [5, 6, 7];  // This will cause an error
```

**Memory Diagram:**

- Initially, `arr` refers to `[1, 2, 3]` in the heap.
- After modifying the array, `arr` still refers to the same array in the heap.
- Trying to reassign `arr` to a new array `[5, 6, 7]` will result in an error 
because `arr` was declared with `const`.

**Stack and Heap after modification:**

```
Stack:
+--------+
| arr    | --> [1, 42, 3, 4] (Reference to the same array in heap)
+--------+

Heap:
+------------------------+
| Array Object: [1, 42, 3, 4] |
+------------------------+
```

### Summary

- **With `let`:** You can reassign the variable to a new array or value. 
Modifications to the contents of the array do not affect the `let` behavior.
- **With `const`:** You cannot reassign the variable to a new array or value. 
However, you can still modify the contents of the array (i.e., push, pop, change elements).

In both cases, modifying the array contents affects the existing array in the heap. 
The difference is that `const` prevents reassignment, ensuring that the reference 
to the array remains unchanged, while `let` allows reassignment to different values or objects.
*/

const myHeros = ["IronMan", "SuperMan", "Thor", "Loki"]
const myArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const myArr2 = new Array(1, 2, 3, 4, 5)

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
console.log(myArr.includes(7));// true  so it gives boolean value
console.log(myArr);
console.log(myArr.indexOf(0));// return the position of element in the array 
// if exists and if not gives -1 else.

const newArr = myArr.join()
// .join() Method: The join() method converts an array into a string, 
// with each element separated by a comma by default.
console.log(myArr);
console.log(newArr);
console.log(typeof newArr);// join bind it and convert the array into the String
//                             -> String
// 0,1,2,3,4,5,6,7,8,9
// string

// *************** Slice, Splice ***************
console.log("*************** Slice, Splice ***************");

console.log("Origianl Array");
console.log("A", myArr); // Origianl Array
const slisedArray = myArr.slice(1, 5) // it will include element from  1 to 4 and 
// exclude 5 
console.log("Use of Slice");
console.log(slisedArray);// [ 1, 2, 3, 4 ]  Use of Slice
console.log("B", myArr);
/* B [
  0, 1, 2, 3, 4,
  5, 6, 7, 8, 9
]

Here we can see that the original array "myArr" remains unchanged.
  */

const splicedArray = myArr.splice(1, 5)
console.log("Use of Splice");
console.log(splicedArray);
console.log("C", myArr);

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

