// Dates 

let myDate = new Date();
console.log(myDate.toString()); // e.g., "Fri Aug 02 2024 09:53:38 GMT+0530 (India Standard Time)"
console.log(myDate.toISOString()); // e.g., "2024-08-02T04:23:38.745Z"
console.log(myDate.toJSON()); // e.g., "2024-08-02T04:23:38.745Z"
console.log(myDate.toLocaleDateString()); // e.g., "8/2/2024" or format based on locale
console.log(myDate.toLocaleTimeString()); // e.g., "10:30:00 AM" or format based on locale
console.log(myDate.getTime()); // e.g., 1711807821660 (milliseconds since Jan 1, 1970)
console.log(myDate.toLocaleString()); // e.g., "8/2/2024, 10:30:00 AM" or format based on locale
console.log(typeof myDate); // "object"

let myCreatedDate = new Date(2024, 2, 30); // In JavaScript, months start from 0: 0 - Jan, 1 - Feb, 2 - Mar
console.log(myCreatedDate.toDateString()); // "Sat Mar 30 2024"
console.log(myCreatedDate.toLocaleTimeString()); // "12:00:00 AM" or format based on locale
console.log(myCreatedDate.toLocaleString()); // "30/3/2024, 12:00:00 am" or format baseed on locale

let anotherDateAndTime = new Date(2024, 2, 30, 7, 19);
console.log(anotherDateAndTime.toLocaleDateString()); // "3/30/2024" or format based on locale
console.log(anotherDateAndTime.toLocaleString()); // "3/30/2024, 7:19:00 AM" or format based on locale
console.log(anotherDateAndTime.toLocaleTimeString()); // "7:19:00 AM" or format based on locale

let getTime = new Date("2024-03-04");
console.log(getTime.toLocaleDateString()); // "4/3/2024"
console.log(getTime.toLocaleString()); // "4/3/2024, 5:30:00 am" or format based on locale
console.log(getTime.getTime()); // 1709510400000 (milliseconds since Jan 1, 1970)

let myTimeStamp = Date.now(); //Returns the number of milliseconds elapsed since midnight, January 1, 1970 
                              //Universal Coordinated Time (UTC).
console.log(myTimeStamp); // e.g., 1722573671438 (current milliseconds since Jan 1, 1970)

console.log(Math.floor(Date.now() / 1000)); // e.g., 1722573671 (current seconds since Jan 1, 1970)

let newDate = new Date();
console.log(newDate); // e.g., "2024-08-02T04:41:11.438Z"
console.log(newDate.getTime()); // e.g., 1722573671438 (milliseconds since Jan 1, 1970)
console.log(newDate.getDate()); // e.g., 2 (current date)
console.log(newDate.getMonth() + 1); // e.g., 8 (current month, zero-based index + 1)

console.log(newDate.toLocaleString('default', { weekday: "long" })); // e.g., "Friday"
