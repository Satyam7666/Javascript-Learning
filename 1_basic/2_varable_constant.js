const accountId=234534;
let accountEmail="account@gmail.com";
var accountPassword="root";
let accountState;  // this will give the value as undefine
accountCity="mumbai";

//accountId=34;  //not allowed in js

accountEmail="satyam8@gmail.com";
accountPassword="rooot54";
accountCity="pune";


/*
prefer to not use var because of the block scope or the functional scope

accountCity="mumbai"; this also the not thegood practice in javascript but this can also allocate the memory

*/
console.log(accountId);
console.table([accountId,accountPassword,accountEmail,accountCity,accountState]);