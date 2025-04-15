//Concept of Map
const num = [1, 2, 3, 4, 12, 9, 8];

// var multiplyThree = num.map((num, i, arr) => {
//   return num * 3 + i;
// });

// console.log(multiplyThree);

//Concept of Reduce
const moreThanTwo = num.filter((num) => {
  return num > 2;
});

// console.log(moreThanTwo);

//Concept of Reduce
//If there is no initial value, it takes first element of array as value for accumulator
// const sumNum = num.reduce((acc, curr, i, arr) => {
//   return acc + curr;
// }, 0);

// // console.log(sumNum);

//concepts for polyfill for map

Array.prototype.myMap = function (cb) {
  let temp = [];

  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }

  return temp;
};

let multiplyThree = num.myMap((num, i, arr) => {
  return num * 3;
});

// console.log(multiplyThree);

//Array prototype in filter

Array.prototype.myFilter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) temp.push(this[i]);
  }

  return temp;
};

let numFilter = [1, 2, 3, 4, 5];

let filterNum = numFilter.myFilter((numFilter) => {
  return numFilter > 2;
});

// console.log(filterNum);

Array.prototype.myReduce = function (cb, intialValue) {
  var accumulator = intialValue;

  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
  }

  return accumulator;
};

const sumNum = num.myReduce((acc, curr, i, arr) => {
  return acc + curr;
}, 0);

// console.log(sumNum);

//Question What is difference between map vs foreach

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

const arrMapResult = arr.map((arr) => {
  return arr * 2;
});

const arrForEachResult = arr.forEach((arr, i) => {
  arr[i] = arr * 2;
});

// console.log(arrMapResult, arrForEachResult), arr;

// 2  map, filter and reduce - O/P Based Questions
// Question 1 - Return only name of students in Capi

let students = [
  { name: "Piyush", rollNumber: 31, marks: 80 },
  { name: "Jenny", rollNumber: 18, marks: 69 },
  { name: "Kaushal", rollNumber: 16, marks: 35 },
  { name: "Dilpreet", rollNumber: 7, marks: 55 },
];

//normal solve
// let onlyName = [];
// for (let i = 0; i < students.length; i++) {
//   onlyName.push(students[i].name.toUpperCase());
// }

//solve using map
const onlyName = students.map((stu) => stu.name.toUpperCase());

console.log(onlyName);

//Question 2 - Return only details of those who scored more than 60 marks
const only60 = students.filter((stu) => {
  if (stu.marks > 60) {
    return true;
  } else {
    false;
  }
});

// console.log(only60);

//Question 3 - More than 60 marks and rollNumber grater than 15

const checkRoll = students.filter((stu) => stu.marks > 60 && stu.rollNumber > 15);

// console.log(checkRoll);

//Question 4 - Sum of marks of all students

const sumOfMarks = students.reduce((acc, curr) => acc + curr.marks, 0);

// console.log(sumOfMarks);

//Question 5 - Return only names of students who scored more than 60

const specialName = students.filter((stu) => stu.marks > 60).map((stu) => stu.name);

// console.log(specialName);

// Question 6 - Return total marks for students with marks grater than 60 after 20 marks have been added to those who scored less than 60

const totalStudent = students
  .map((stu) => {
    if (stu.marks < 60) {
      stu.marks += 20;
    }
    return stu;
  })
  .filter((stu) => {
    stu.marks > 60;
  });

// console.log(totalStudent);
