// console.log(2>=1);
// console.log(2>1);
// console.log(2==1);
// console.log(2<1);
// console.log(2!=1);
// above will give boolean value.

console.log("3">2);
console.log("03">2);
// will convenrt String to Number than compare and gives boolean value.


//*************   Below Type of Comparison should be avoided. **********


console.log(null>0); //false
console.log(null==0);//false  here equality check is done 
console.log(null>=0);//true   here comparison convert null to a number and treating it as 0.
// The reason is that an equality check == and comparisons > < >= <= work differently 
// Comparisons convert null to a number. treating it as 0.

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);
// will return all "false"

// *********** Strict Check ************
//   ===

// console.log(3===2);// check datatypes as well as value both should be equal.
// console.log(3==="3"); // false
// console.log(2===2); // true
// console.log(2==2); // true









