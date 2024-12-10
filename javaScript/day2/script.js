var arr = [
  "tip of day1",
  "tip of day2",
  "tip of day3",
  "tip of day4",
  "tip of day5",
  "tip of day6",
  "tip of day7",
  "tip of day8",
  "tip of day9",
  "tip of day10",
];

var tip = arr[Math.round(Math.random() * 9)];

document.getElementById("randomTip").innerHTML = tip;

////////////////////////////////////
//2
function handleDate() {
  const date = new Date();
  let text = date.toLocaleString();
  document.getElementById("demo").innerHTML = text;
}

////////////////////////////////////
//3
function Dont_use_RegExp() {
  var email = window.prompt("enter your email");
  let regex = /[a-zA-Z0-9]+(@)+[a-zA-Z0-9]+/;
  let value = regex.test(email);

  if (value) {
    console.log("true");
  } else {
    console.log("false");
  }
}

Dont_use_RegExp();

///////////////////////////////////////
//4
//let fullName = window.prompt("Enter your full name");
//let emailAdress = window.prompt("Enter your emailAdress");

let regFullName = /^(?! )[A-Za-z]{3,}(?: [A-Za-z]{3,})*(?<! )$/;

let regemail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|net|org|edu)\.eg$/;

let fullNameValid = false;
let emailValid = false;

while (!fullNameValid) {
  let fullName = window.prompt("Enter your full name");
  if (regFullName.test(fullName)) {
    alert("Full Name is valid.");
    fullNameValid = true;
  } else {
    alert("Invalid Full name");
  }
}

while (!emailValid) {
  let emailAdress = window.prompt("Enter your emailAdress");
  if (regemail.test(emailAdress)) {
    alert("email is valid");
    emailValid = true;
  } else {
    alert("Invalid Email Adresss");
  }
}
////////////////////////////////////
//5
/////////////////////////////////////////////////
//6

let grads = [60, 100, 10, 15, 85];

grads.sort(function (a, b) {
  return b - a;
});

console.log(grads);

function checkHeightsDegre(arr) {
  return arr <= 100;
}

console.log(grads.find(checkHeightsDegre));

function checkdegreeless60(grad) {
  return grad < 60;
}

console.log(grads.filter(checkdegreeless60));

//////////////////////////////////////////////////////
//7

const students = [
  { studentName: "farha", degree: 100 },
  { studentName: "mostafa", degree: 90 },
  { studentName: "fatma", degree: 80 },
  { studentName: "abdo", degree: 55 },
  { studentName: "abdla", degree: 50 },
];
/////a
//find function
const highName = students.find(
  (student) => student.degree >= 90 && student.degree <= 100
);
console.log("High degree:", highName.studentName);
/////b
//filter function to show less than 60
const degreeless60 = students.filter((student) => student.degree < 60);

console.log(
  "student less than 60",
  degreeless60.map((student) => student.degree)
);
////c
//push element to the array
students.push({ studentName: "reem", degree: 98 });
for (let x in students) {
  console.log(students[x]);
}
///d
//pop element from array
students.pop();
for (let x of Object.values(students)) {
  console.log("using for of", x);
}

///e
//using local compare function
students.sort((a, b) => a.studentName.localeCompare(b.studentName));
console.log(students);
///f
//using splice function
students.splice(
  1,
  0,
  { studentName: "ahmed", degree: 60 },
  { studentName: "ali", degree: 99 }
);
console.log("usin splice", students);
/////g
students.splice(3, 2);
console.log("usin splice to remove forth element", students);
///////////////////////////////////////////////////
//8

function BdayFormat() {
  const userInput = document.getElementById("birthDate").value;

  if (
    userInput.length === 10 &&
    userInput.charAt(2) === "-" &&
    userInput.charAt(5) === "-" &&
    !isNaN(userInput.substring(0, 2)) &&
    !isNaN(userInput.substring(3, 5)) &&
    !isNaN(userInput.substring(6))
  ) {
    let day = Number(userInput.substring(0, 2));
    let month = Number(userInput.substring(3, 5));
    let year = Number(userInput.substring(6, 10));
    let date = new Date(year, month, day);
    alert(date.toDateString());
  } else {
    window.alert("wrong date format");
  }
}

///////////////////////////////////////////////////////////////
