// console.log("H");
// console.log("I");
// console.log("T");
// console.log("E");
// console.log("S");
// console.log("H");
// if we have to print it 100 times it will be an overhead 
// so we use functions in js

function sayMyName(){
    
console.log("H");
console.log("I");
console.log("T");
console.log("E");
console.log("S");
console.log("H");

}
//sayMyName()


function addTwoNumbers(number1,number2){ // in line 23 number1
    // and number2 is a parameter 
    console.log(number1+number2);
    
}
// addTwoNumbers(3,5) //  output: 8  here when a value is passed it is called as an arguments.

// addTwoNumbers(3,undefined) // NaN
// addTwoNumbers(3,null) // 3
// addTwoNumbers(3,"Rajan")  // Concatination: 3Rajan

const result = addTwoNumbers(5,6)
console.log(result); // undefined " This is because the function addTwoNumbers don't have any return value so 
                    //  it will not return any thing to the result variable."

function additionWithReturnValue(a,b){
    return a + b 
}
const resultWithReturnValue = additionWithReturnValue(2,4)
console.log("Return Value: ",resultWithReturnValue);

function loginUserMessage(username = "Ram"){ // Ram is default value means if we did not pass 
                                            // any argument then ram will be printed
    if(!username){                          
        console.log("Please Enter a Username:");
        return
        
    }
    return `${username} Just logged in.`
}

console.log(loginUserMessage("Rajan")); // Rajan just logged in.
console.log(loginUserMessage()); // Ram just logged in.


function calculateCartPrice(val1, val2, ...num1){
    return num1
}
console.log(calculateCartPrice(100,200,300,400));
//  [ 300, 400 ]


const user = {
    username : "Rajan Raj",
    price : 234
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and Price is ${anyObject.price}`);
    
}
handleObject(user)

handleObject({
    username : "Sam",
    price : 1237
})


const myNewArray = [ 233, 423, 545, 155]
function returnThirdValue(myArray){
    return myArray[2]
}
console.log(returnThirdValue(myNewArray));
console.log(returnThirdValue([199,534,2323,53434,121]));








 







