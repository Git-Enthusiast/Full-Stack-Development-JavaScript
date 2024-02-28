const a =12;
const b=4;
const aPlusB = a+b;
console.log("result",aPlusB);

// do something else

const c =1;
const d=4;
const cPlusD = c+d;
console.log("result",cPlusD);
const result  = sum(a,b);
console.log("The returned result is :",result);

// do something else

const e =2;
const f=4;
const ePlusF = e+f;

console.log("result",ePlusF);

//  instead of this we use function

function sum(x,y){
    const sum = x+y;
    console.log("The result is",sum);
    return sum;


}

//  so sum of above with help of function

sum(a,b);
sum(c,d);
sum(e,f);

// function square(num){
//     return num*num;
// }

const square = function(num){
    return num*num;
}
console.log(square);
console.log(square(4));

// Nested function  
// Here we can only call square function inside addSquare
// function we can not directly access the square function
// from outside addSquare function.
function addSquare(a,b){
    const sa= square(a);
    const sb= square(b);
    function square(num){
        return num*num;
    }
    return sa+sb;
}
console.log(addSquare(3,4));
