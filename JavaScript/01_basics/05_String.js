const name = "rajan"
const repoCount = 15
//console.log(name+repoCount+" Value");    // Old style to concate two strings.
console.log(`${name} ${repoCount}`);
console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);// String Interpolation.

// Another way to declare the String

const gameName = new String("Rajan Raj")
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase);
console.log(gameName.charAt(3));
console.log(gameName.indexOf("a"));

const newString = gameName.substring(0,3) // can not use negative if use it will 
console.log(newString);   // Ignore and starts from 0.

const anotherVar = gameName.slice(1,3)
console.log(anotherVar);
// we can also give negative start value

console.log(gameName.slice(-2 , 3)); // Here  it will start from going back to end .
const newString1 = "    Rajan Raj    "
console.log(newString1);
console.log(newString1.trim());// trim removes starting and ending spaces.

const url = "https://rajan.com/rajan%20raj"
console.log(url.replace('%20','_'));
console.log(url.includes('rajan'));
console.log(gameName.split(' '));
// read String functions on the mdn Web for more !!!! important.W


