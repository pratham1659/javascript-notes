// Functions in Javascript
// Q1 - What is Function Declarations?

function square(num) {
  return num * num;
}

// Q2 - What is Function Expression?

const findSq = function square(num) {
  return num * num;
};

// console.log(square(8));

// Q3 - What are First Class Functions?

function displaySquare(fn) {
  console.log("Sqaure is: " + fn);
}

// displaySquare(findSq(8));

// Q4 - What is IIFE?(immediately invoked function expression)

(function displaySquare(fn) {
  console.log("Sqaure is: " + fn);
})(findSq(5));

(function displaySquare(num) {
  console.log("Sqaure is: " + num * num);
})(5);

// Q5 - IIFE - O/P Based Question?
(function (x) {
  return (function (y) {
    console.log(x);
  })(2);
})(1);

// Q6 - Function Scope
var num1 = 20,
  num2 = 3,
  name = "Pratham";

function multiply() {
  return num1 * num2;
}

// console.log(multiply());

// A nested Function example
function getScore() {
  var num1 = 2,
    num2 = 3;

  function add() {
    return name + " Scored " + (num1 + num2);
  }

  return add();
}

console.log(getScore());

// Q7 - Function Scope - O/P Based Question

for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}

// Q8 - Function Hoisting

console.log(square(4)); //hoisting called before created

function square(num) {
  return num * num;
}

// Q9 - Funcion Hoisting- O/P Based Question

var x = 21;

var fun = function () {
  console.log(x);
  var x = 20;
};

fun(); // Arguments

// Q10 - Params vs Arguments

function square(num) {
  //Parameter
  return num * num;
}

console.log(square(4)); //Argument

function add(num1, num2) {
  return num1 + num2;
  console.log
}

var arr = [5, 6];
console.log(multiply(...arr));
