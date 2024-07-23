const name = "satyam";
const repocount=98;

//console.log(name + repocount + "value"); //not good practice

//use following
//console.log(` Helllo my name is ${name} and my repocount is ${repocount}`);

//another way to create string

const gameName= new String("my new name");

// console.log(gameName);
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName);

//console.log(gameName.toUpperCase());
// console.log(gameName.charAt(5));
// console.log(gameName.indexOf('w'));


const newString = gameName.substring(0, 4)
// console.log(newString);

const anotherString = gameName.slice(-8, 4)
// console.log(anotherString);


const newStringOne = "   SAtyam    "
// console.log(newStringOne);
// console.log(newStringOne.trim());


const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'));

console.log(url.includes('sundar'));

console.log(gameName.split('-'));


