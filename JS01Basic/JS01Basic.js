//JAVASCRIPT Started from here

//Topic Cover : var vs let vs const

//Scope level
// 1.     Global Scope

var name = "Anlie"; // Global scope
function greet() {
  console.log(name); // Accessible here
}

// 2.    Function Scope
function sayHello() {
  let message = "Hello!";
  console.log(message);
}
// console.log(message); // ❌ Error: message is not defined

sayHello();

// 3.   block scope defined in ES6

if (true) {
  let x = 10;
  const y = 20;
}
// console.log(x); // ❌ Error: x is not defined

// Shadowing
{
  let;
}

//Stricly Equal or Loose Equal

let str = "Pratham Kumar";
// console.log(str.toUpperCase());
// It's important to note that substring) extracts the characters between startindex and endindex but does not include the character at the endindex position

// console.log(str.substring(2, 9));

//String split to seperate the string with some specific string

let str2 = "Hello jee kaise ho saare";
let str3 = "Hello how are you guys";

let str4 = 'macbook is the "best" laptop';

let words = str2.split(" ");

// console.log(words);
// console.log(words.join(","));

//functions in javascript

function myVar(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

// let ans = myVar(23, 34);
// // console.log(ans);

function myNames(fname, lname) {
  return fname + lname;
}

let fullName = myNames("Pratham", " Kumar");
// console.log(fullName);

let myGame = (x, y) => {
  return x ** y;
};

// console.log(myGame(2, 3));

//Shallow copy and Deep COpy

let obj = {
  name: "pratham",
  age: 23,
  weight: 65,
  height: 178,
};

let obj2 = obj;

// console.log(obj2);

//creation of Array
