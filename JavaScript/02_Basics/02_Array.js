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

console.log(Array.isArray("Rajan"));// will return boolean.  => fasle

console.log(Array.from("Rajan")); // [ 'R', 'a', 'j', 'a', 'n' ]

console.log(Array.from({name:"Rajan"})); // !!!!!!!! Interview Important.
// will return an empty array : [] as it is unable to convert the without info
// about either it will make an  array of " Keys " or "String " Here.


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
