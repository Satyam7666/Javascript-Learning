const num=388;
// console.log(num);388

const balance =new Number(100);
//console.log(balance); [NUmber : 100]

// console.log(balance.toString().length); //3
// console.log(balance.toFixed(1)); //100.0

const otherNUmber=123.45;
// console.log(otherNUmber.toPrecision(4));123.5


const hundreds = 1000000
//  console.log(hundreds.toLocaleString('en-IN'));

//  *******************Math****************

// console.log(Math);
// console.log(Math.abs(-4)) ; //4
// console.log(Math.round(4.5));  //5
// console.log(Math.ceil(4.3));  //5
// console.log(Math.floor(4.3));  //4
// console.log(Math.min(4,7,89,3)); //3
// console.log(Math.max(4,7,89,3)); //89

// console.log(Math.random());
// console.log((Math.random()*10) + 1);
// console.log(Math.floor(Math.random()*10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
