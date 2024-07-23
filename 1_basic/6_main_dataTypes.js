//Primitive 

// 7 types - call by value
// we can not get original memory reference  we can  get the copy of data . change are also made in the copy
// 7 types
//String,Number,Boolean,Null,undefined,Symbol,BigInt


// reference type or non primitive data type
// reference of non primitive types are  allocatd directly
//Arrays, objects, Function


//Array 
const colors=["red","white","purpale","black"];
//console.log(colors);

//objects
let obj={
    name : "satyam",
    age: 45
}
//console.log(obj);


const myFunction= function() {
    console.log("Hello world");
}
//myFunction();


//Stack memory(primitive)  , Heap(Non-primitive)

let myYoutubeName="satyamThorat";// store in stack memory

let anotherName=myYoutubeName; // here we can get the copy of the myYoutubeName

 anotherName="chaiAurJavascript";
//  console.log(myYoutubeName);
//  console.log(anotherName);

 let userOne={
    email: "satyame@gmail.com",
    upi:"satyam@ptym.com"

 }

 let userTwo= userOne;

// here userOne=> is store is object name that store in stack memory and data such as { email: "satyame@gmail.com",
  //                                                                                    upi:"satyam@ptym.com"} 
//are store in the heap memory

//in let userTwo=userOne userTwo are store in stack memory and it getreference from the heap memory

console.log(userTwo.email);

userTwo.email="changeEmial@google.com";
console.log(userOne.email);
console.log(userTwo.email);

// we can get the same value because bhoth are taking reference from the same location in heap memory