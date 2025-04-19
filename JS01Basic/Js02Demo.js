// Strings -----------------------
let hero = "This is String";
let zero = "This is String";
// "This is joe`s "function" party"; // error in java script

let news = "This is String 'function' accepted";

let joes =
  "This is \
Joe`s Favourite \
String ever";

console.log(hero);
console.log(zero);
console.log(news);
console.log(joes);

var myString = "This is my String";
console.log(myString);
// myString.  press tab to get all fucntion in terminal

// Template Literals
var myStr = `This is template literals: ${myString}`;

console.log(myStr);

// Numbers Topics

let num = 12.276182777612721871278217821782;
console.log(num);

let a = Infinity;
let b = -Infinity;

console.log(a > b);

let c = Number.NaN;

console.log(typeof c);

var round = Math.round(12.63828284637284399483);
console.log(round);

console.log(Math.random(1, 1));

//Boolean Concepts -------

var myLoc1 = "Ranchi",
  myLoc2 = "Ramgarh";

console.log(myLoc1 === myLoc2);

// Objects in Java Scripts

var nonEmptyObj = {};

nonEmptyObj = {
  label: "value",
};

console.log(nonEmptyObj);

nonEmptyObj = {
    label: "value1",
  lable: "value2",
};

console.log(nonEmptyObj);
