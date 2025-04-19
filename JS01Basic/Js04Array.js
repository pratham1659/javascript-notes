var myArray = [];

var myDaysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"];
myDaysOfWeek[1];

var myList = ["Pratham", 12, 23, "Kumar", true, false, "Hello"];

var myArray = [];
myArray;

var daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday"];
daysOfTheWeek;

var myList = [0, 1, 2, "string1", "string2", "string3", true, false];
myList;

var counts = ["Belknap", "Strafford", "Carroll", "Rockingham"];
counts;

var listOfStuff = [{ name: "value" }, [1, 2, 3], true, "nifty"];
listOfStuff;
listOfStuff.length; // 4 answer

counts.push("Coos");
counts;

counts.pop();

delete counts[2];
counts;

counts.splice(2, 1); // index and element
counts;
counts.length;

let brr = new Array("Pratham", 1, true);
let arr = [0, 1, "TRUE", 3, true, 89, "Arr"];

console.log(typeof arr);

// console.log(arr[3]);

arr.push("won", "hello");
// console.log(arr);
arr.pop("hello");
// console.log(arr);

arr.push("Pratham");
// console.log(arr);

arr.shift();
// console.log(arr);

arr.unshift("Shift Added", 4);
// console.log(arr);

arr.push("end");
// console.log(arr);

arr.unshift("Start");
// console.log(arr);

// console.log(arr.slice(2, 6)); //show the element till defined slice

arr.splice(2, 3, "medium"); //remove and add the element using index
// console.log(arr);

let num = [10, 23, 34, 12, 23, 34, 99, 84];

let evenArray = num.filter((num) => {
  //   if (num % 2 === 0) {
  //     return true;
  //   } else {
  //     return false;
  //   }

  return num % 2 == 0;
});

// console.log(evenArray);

// num.map((num, index) => {
//   //   console.log(num + 1);
//   console.log(index + " " + num * num);
// });

let typeArr = [1, 2, 3, "True", null, "False"];

let typeCheck = typeArr.filter((typeArr) => {
  if (typeof typeArr === "string") {
    return true;
  } else {
    return false;
  }
});

// console.log(typeCheck);

let redArr = [10, 20, 30, 40];

let ansRed = redArr.reduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log(ansRed);

var string1 = "This is the longest string ever.";
var string2 = "This is the shortest string ever.";
var string3 = "Is this the thing called Mount Everest?";
var string4 = "This is the Sherman on the Mount.";

var regex = /this/;

regex.test(string1);
regex.test(string2);
regex.test(string3);
regex.test(string4);

regex = /this/i;

regex = /^this/i;

regex = /this$/i;

regex = /ever.$/i;

regex = /ever\.$/i;
