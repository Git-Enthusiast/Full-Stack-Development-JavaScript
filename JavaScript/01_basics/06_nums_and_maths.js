const score = 400
console.log(score);
const balance = new Number(100)
console.log(balance);
console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(2))

const anotherNumber = 23.8966
console.log(anotherNumber.toPrecision(5))

const hunderds =   100000
console.log(hunderds.toLocaleString('en-IN'));
const noMax = Number.MAX_VALUE
console.log(noMax);


// +++++++++++++++ Maths in JavaScript ++++++++++++++


console.log(Math);
console.log(Math.abs(-323)); // Change to postive no.
console.log(Math.round(2323.49));// give roundOff Value
console.log(Math.ceil(2.39)); // give upper value
console.log(Math.floor(323.999)); // give lower value
console.log(Math.max(23,46,48,97)); //97
console.log(Math.min(23,1,-23,0)); // -23
console.log(Math.pow(4,2)); // 4 to the power 2 => 16
console.log(Math.sqrt(45)); //6.708203932499369
console.log(Math.random()); // always value 0 to 1.
console.log(Math.floor(Math.random()*10)+1); // now it will give shift one 
// place so it will give value between 1 to 9.

const min = 10;
const max = 20;
console.log(Math.floor(Math.random()*(max-min+1))+min)


