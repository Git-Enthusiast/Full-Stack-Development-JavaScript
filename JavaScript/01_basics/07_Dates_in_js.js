// Dates 

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.getTime());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);// Object

let myCreatedDate = new Date(2024,2,30) // In javaScript dates starts from 0 - jan,1 - feb
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleTimeString()); //  12:00:00 am
// if no time is mentioned and we print the time then the time will be starts from 
// 12 Am.

let anotherDateAndTime = new Date (2024,2,30,7,19)
// console.log(anotherDateAndTime.toLocaleDateString()); //30/3/2024
// console.log(anotherDateAndTime.toLocaleString());// 30/3/2024, 7:19:00 am
// console.log(anotherDateAndTime.toLocaleTimeString()); // 7:19:00 am

let getTime = new Date("2024-03-30")
// console.log(getTime.toLocaleString());
// console.log(getTime.getTime());

let myTimeStamp =  Date.now()
// console.log(myTimeStamp);// 1711807821660    in milliseconds calculated from 1st Jan 1970

console.log(Math.floor(Date.now()/1000));

let newDate = new Date ()
console.log(newDate);
console.log(newDate.getTime());
console.log(newDate.getDate());
console.log(newDate.getMonth()+1);
// 2024-03-30T14:19:47.813Z
// 1711808387813
// 30
// 3


console.log(newDate.toLocaleString('default',{weekday: "long"})); // Saturday









