const accountId = 144533
let accountEmail = "rajan.cse@outlook.com"
var accountPassword = "12345"
// accountId = 2    not Allowed you can not reassign a value in the constant.
console.log(accountId);
accountEmail = "messachuate@gmail.com"
accountPassword = "54321"
accountCity = "Bengaluru"
let accountState;
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
/*
Prefer not to use var 
because of issue in block scope and functional scope.
*/