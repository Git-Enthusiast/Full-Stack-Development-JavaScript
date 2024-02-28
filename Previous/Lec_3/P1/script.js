const first_no = 3;
const second_no = 4;
let result= first_no+second_no;
console.log(result);
result = first_no**second_no;
console.log('The value of 4 raised to 3 is :', result);
//first_no++;
// console.log(first_no);--> will through error as we assignment to constant.
let a= 83;
console.log(a);
console.log(a++);
console.log(++a);
let thirdnumber = 12;
thirdnumber += 4;
console.log(thirdnumber);
thirdnumber**=4;
console.log(thirdnumber);
let num1 = 5;
let num2 = 6;
let output = (num1==num2);
console.log('the value of output is :',output);
output = num1 != num2;
console.log('The value of output is:', output);
let d=3;
let e='3';
console.log('use of == is:',d==e);
// == checks only value not type , as here d is an 
// an integer and e is a string . 
console.log('The use of === is:',d===e);
// '===' checks  first type if different then return 
//fasle value if same type then checks value is same or not;
console.log('The use of !==',d!==e);
// !== also first check type if not then 
// return true value;
console.log(d>e);
console.log(d>=e);
console.log(d<e);
let g= true;
let h = false;
console.log(g&&h);
console.log(g||h);
console.log(!g);








