var one = 1,
  two = 2;

one === one; // true
one !== one; // false
one !== two; // true
one === two; // false

one == one; // true
one == "1"; // true (?!)
one != "1"; // false (?!)
one === "1"; // false

one < two; // true

one > two; // false

one <= two; // true

one <= one; // true

one >= two; // false

10 >= two; // true

// More info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#equality_operators
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#relational_operators

2 + 5;
4 - 3;
5 - 9;
3 * 5;
36 / 6;
36 / 5;

20 % 2;
19 % 2;

// twenty an even number?
20 % 2 === 0; // true

const perPage = 20;
const totalResults = 254;
totalResults % perPage;

var counter = 0;
counter = counter + 1;

counter += 1;
counter++;

counter += 5;
counter += -4;

counter -= 1;
counter--;
counter;

counter *= 2;

"cat" + "dog";
"cat " + "dog";
"cat" + " and " + "dog";

"1" + "2";

// More info:
// https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Expressions_and_Operators#Arithmetic_operators
// https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Expressions_and_Operators#String_operators

// &&
// ||

let animal1 = "monkey",
  animal2 = "bear",
  animal3 = "tiger";

// Pretend there's code that might change the values of the animal variables here, then…

animal1 === "monkey" && animal2 === "bear"; // true
animal1 === "ape" && animal2 === "bear"; // false
animal1 === "ape" && animal2 === "bear" && animal3 === "tiger"; // false
animal1 === "monkey" && animal2 === "bear" && animal3 === "tiger"; // true

animal1 === "monkey" || animal2 === "bear"; // true
animal1 === "ape" || animal2 === "bear"; // true
animal1 === "ape" || animal2 === "ostrich"; // false

animal1 === "monkey" || (animal2 === "monkey" && animal3 === "tiger");
(animal1 === "monkey" || animal2 === "monkey") && animal3 === "tiger";

!true; // false
!false; // true

animal1 === "monkey" && animal2 === "zebra"; // false
!(animal1 === "monkey" && animal2 === "zebra"); // true
animal1 !== "monkey" && animal2 !== "zebra"; // false
animal1 !== "monkey" || animal2 !== "zebra"; // true

// More info:
// https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Expressions_and_Operators#Logical_operators

// Execute these in a browser
var answer = window.confirm("Click OK, get true.  Click cancel, get false.");

if (answer === true) {
  console.log("You said true!");
}

if (answer === true) {
  console.log("You said true!");
} else {
  console.log("You said something else");
}

var answer = window.prompt("Type YES, NO, or MAYBE.  Then click OK.");
if (answer === "YES") {
  console.log("You said YES!");
} else if (answer === "MAYBE") {
  console.log("You said maybe. I don't know what to make of that."); // note the double primes
} else if (answer === "NO") {
  console.log("You said no. :(");
} else {
  console.log("You rebel, you!");
}

var answer = window.prompt("Type YES, NO, or MAYBE.  Then click OK.");
if (answer === "YES" || answer === "NO") {
  // Do some common actions for YES and NO

  if (answer === "YES") {
    console.log("You said YES!");
    // do some other things
  } else {
    console.log("You said no. :(");
    // do some things only for NO
  }
} else if (answer === "MAYBE") {
  console.log("You said maybe.  I don't know what to make of that.");
} else {
  console.log("You rebel, you!");
}

// More info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
