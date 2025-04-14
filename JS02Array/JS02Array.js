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
