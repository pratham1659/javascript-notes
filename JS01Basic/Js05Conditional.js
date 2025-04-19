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

var answer = window.prompt("Type YES, NO, or MAYBE.  Then click OK.");

if (answer === "YES") {
  console.log("You said YES!");
} else if (answer === "MAYBE") {
  console.log("You said maybe. I don't know what to make of that.");
} else if (answer === "NO") {
  console.log("You said no. :(");
} else {
  console.log("You rebel, you!");
}

switch (answer) {
  case "YES":
    console.log("You said YES!");
    break;
  case "MAYBE":
    console.log("You said maybe. I don't know what to make of that.");
    break;
  case "NO":
    console.log("You said no. :(");
    break;
  default:
    console.log("You rebel, you!");
    break;
}

// More info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch

var cherub = "Cupid";
// cherub = 'Norman';

if (cherub === "Cupid") console.log("Ouch, an arrow!  Ooo, I'm in love!");

if (cherub === "Cupid") console.log("Ouch, an arrow!  Ooo, I'm in love!");
else console.log("I feel nothing!");

let errorMsg = "";

if (errorMsg) {
  console.error("There was an error", errorMsg);
}

if (!errorMsg) {
  console.log("Yay! No errors!");
}

let errors = [];

// if (errors) { // Nope - empty arrays are truthy

if (errors.length) {
  console.error("Please fix these errors", errors);
}

// More info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#if...else_statement
//
// Truthy and falsy values are discussed here:
// https://developer.mozilla.org/en-US/docs/Glossary/Truthy

var animal = "cat";
// animal = 'dog';

animal === "cat" ? console.log("You will be a cat herder.") : console.log("You will be a dog catcher.");

var job = animal === "cat" ? "cat herder" : "dog catcher";

// prettier-ignore
var job = (animal === "cat") ? "cat herder" : "dog catcher";

// More info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#if...else_statement
//
// Truthy and falsy values are discussed here:
// https://developer.mozilla.org/en-US/docs/Glossary/Truthy
//
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator

var thing = 12;
thing = "twelve";
typeof thing;

thing = 12;
typeof thing;

thing = false;
typeof thing;

thing = {};
typeof thing;

thing = [];
typeof thing;
typeof thing === "object" && thing.hasOwnProperty("length"); // true

thing = {};
typeof thing === "object" && thing.hasOwnProperty("length"); // false

NaN;
typeof NaN;
Number.isNaN();

typeof null;
thing === null;
thing = null;
thing === null;

let somethingLater;
typeof somethingLater;
typeof nothingSilly;

// More info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof

// https://lodash.com/docs/#isNumber
