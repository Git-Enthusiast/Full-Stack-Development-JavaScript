const marvel_heros = ["thor","IronMan","SpiderMan"]
const dc_heros = ["superman","Flash","Batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// // [ 'thor', 'IronMan', 'SpiderMan', [ 'superman', 'Flash', 'Batman' ] ]
// console.log(marvel_heros[3][2]);// Batman

// marvel_heros.concat(dc_heros)
// console.log(marvel_heros);
// // [ 'thor', 'IronMan', 'SpiderMan', [ 'superman', 'Flash', 'Batman' ] ]


// to solve this problem we have to make a new array and reassign to them.

 console.log(marvel_heros);
 // [ 'thor', 'IronMan', 'SpiderMan' ]
 console.log(dc_heros);
// [ 'superman', 'Flash', 'Batman' ]
 const allHeros = marvel_heros.concat(dc_heros)
 console.log(allHeros);
 // [ 'thor', 'IronMan', 'SpiderMan', 'superman', 'Flash', 'Batman' ]


 const allNewHeros = [...marvel_heros,...dc_heros]
 console.log("all New Heros");
 console.log(allNewHeros);
//  all New Heros
// [ 'thor', 'IronMan', 'SpiderMan', 'superman', 'Flash', 'Batman' ]

const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const Usable_another_array = anotherArray.flat(Infinity)
console.log(Usable_another_array);
const Usable_another_array_1 = anotherArray.flat(1)
console.log(Usable_another_array_1);


console.log(Array.isArray("Rajan"));// will return boolean.  => fasle

console.log(Array.from("Rajan")); // [ 'R', 'a', 'j', 'a', 'n' ]
console.log(Array.from(1091));

/*

Let's analyze the behavior of `Array.from` when passed the number `1091`.

### Converting a Number to an Array

```javascript
console.log(Array.from(1091)); // What will this output?
```

**Explanation:**
- `Array.from` is designed to create arrays from iterable or array-like objects. 
Numbers are neither iterable nor array-like.
- When a number is passed to `Array.from`, it will not be treated as an iterable 
object. Instead, it will try to convert it to an object that has a `length` property.


To convert a number to an array, you might first need to convert it to a string or 
some other iterable form. For instance:

### Converting a Number to an Array of Digits

If you want to convert the number `1091` to an array of its digits, you can do so by 
converting it to a string first:

```javascript
console.log(Array.from(String(1091))); // [ '1', '0', '9', '1' ]
```

Or, if you want the digits as numbers:

```javascript
console.log(Array.from(String(1091), Number)); // [ 1, 0, 9, 1 ]
```

In these cases, the number is first converted to a string, which is iterable, 
and then `Array.from` creates an array from each character of the string. 
Using a mapping function (`Number`) converts each character back to a number.


*/


console.log(Array.from({name:"Rajan"})); // !!!!!!!! Interview Important.
// will return an empty array : [] as it is unable to convert the without info
// about either it will make an  array of " Keys " or "String " Here.


/*

1. Checking if a Value is an Array
javascript
Copy code
console.log(Array.isArray("Rajan")); // will return boolean. => false
Explanation:

Array.isArray is a method that checks if the passed value is an array.
"Rajan" is a string, not an array.
Therefore, Array.isArray("Rajan") returns false.


2. Converting a String to an Array of Characters
javascript
Copy code
console.log(Array.from("Rajan")); // [ 'R', 'a', 'j', 'a', 'n' ]
Explanation:

Array.from is a method that creates a new array from an iterable or array-like object.
When a string is passed to Array.from, it treats the string as an iterable and converts 
each character of the string into an element of an array.
So, Array.from("Rajan") results in ['R', 'a', 'j', 'a', 'n'].



3. Converting an Object to an Array
javascript
Copy code
console.log(Array.from({name:"Rajan"})); // !!!!!!!! Interview Important.
Explanation:

Array.from can convert array-like or iterable objects to arrays. However, plain objects 
are not iterable.
The object {name: "Rajan"} is a plain object and does not have the necessary properties 
(like length or an iterator) to be converted directly into an array.
Without additional information or custom logic (such as mapping keys or values to an 
array), Array.from returns an empty array [].
To illustrate, let's go through each part:

javascript
Copy code
console.log(Array.isArray("Rajan")); // false
This checks if "Rajan" is an array. It is not, so it returns false.
javascript
Copy code
console.log(Array.from("Rajan")); // [ 'R', 'a', 'j', 'a', 'n' ]
This converts the string "Rajan" into an array of its characters.
javascript
Copy code
console.log(Array.from({name: "Rajan"})); // []
This attempts to convert the object {name: "Rajan"} into an array. Since it's not an 
iterable object, it results in an empty array [].



*/

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
