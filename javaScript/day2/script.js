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
/////
const highName = students.find(
  (student) => student.degree >= 90 && student.degree <= 100
);
console.log("High degree:", highName.studentName);
/////
const degreeless60 = students.filter((student) => student.degree < 60);

console.log(
  "student less than 60",
  degreeless60.map((student) => student.degree)
);
////

students.push({ studentName: "reem", degree: 98 });

for
