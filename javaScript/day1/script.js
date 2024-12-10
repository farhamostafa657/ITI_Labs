window.alert("welcom to my site");
var name = window.prompt("enter your name");

document.getElementById("para").innerHTML = "welcome " + name;

function sum(x, y) {
  var add = x + y;
  return add;
}

function handle() {
  var x = prompt("enter first Number");
  var y = prompt("enter seconed Number");
  var res = sum(Number(x), Number(y));
  console.log(res);
}

// function temperature(temp) {
//   if (temp >= 30) {
//     console.log("Hot");
//   } else if (temp < 30) {
//     console.log("cold");
//   }
// }

function temperature(temp, actual) {
  if (temp >= 25 && temp <= 30 && actual >= 25 && actual <= 30) {
    console.log("normal");
  } else if (temp < 25 && actual < 25) {
    console.log("cold");
  } else if (temp > 30 && actual > 30) {
    console.log("hot");
  } else {
    console.log("Ambiguous, can’t detect");
  }
}
temperature(31, 31);

var fci = "FCI";

function faculty(fac) {
  if (fac == "FCI") {
    console.log("You’re eligible to Programing tracks");
  } else if (fac == "Engineering") {
    console.log("You’re eligible to Network and Embedded tracks");
  } else if ((fac = "Commerce")) {
    console.log("You’re eligible to ERP and Social media tracks");
  } else {
    console.log("You’re eligible to SW fundamentals track");
  }
}

function faculty1(fac) {
  switch (fac) {
    case "FCI":
      return "You’re eligible to Programing tracks";
    case "Engineering":
      return "You’re eligible to Network and Embedded tracks";
    case "Commerce":
      return "You’re eligible to ERP and Social media tracks";
    default:
      return "You’re eligible to SW fundamentals track";
  }
}

faculty("FCI");
console.log(faculty1("Engineering"));

function odd(start, end) {
  for (let i = start; i <= end; i++) {
    if (i % 2 != 0) {
      console.log(i);
    }
  }
}

odd(1, 10);

function evaluate(expr) {
  let input = eval(expr);
  return input;
}

function mathEx() {
  let userExprInput = prompt("Enter Math Expr");
  let result = evaluate(userExprInput);
  window.alert(`you entered ${userExprInput} and the result is ${result}`);
}
/////////////////////////////////////////////////////////////////////////////////////

let fname, birthYear, age;

while (true) {
  console.log("Prompting for name.");
  fname = prompt("enter you first name");
  if (fname && isNaN(fname)) {
    break;
  } else {
    alert("invalid input,enter you first name");
    console.warn("Invalid name entered. Retrying...");
  }
}

while (true) {
  console.log("Prompting for birth year.");
  birthYear = prompt("enter your birth year");
  if (birthYear && Number(birthYear) < 2010 && !isNaN(birthYear)) {
    birthYear = Number(birthYear);
    debugger;
    break;
  } else {
    alert("invalid input, enter a valid year");
  }
}

const currentYear = new Date().getFullYear();
age = currentYear - birthYear;
var output = document.getElementById("data");
output.innerHTML = `
<p>Name: ${fname}</p>
<p>Birth year: ${birthYear}</p>
<p>Age: ${age}</p>
`;

/////////////////////////////////////

("use strict");
function foo() {
  var x;
  x = 5;
  y = 6;
  return x + y;
}
Console.log(foo());

//2-	Will this code work with strict mode? Explain why?
("use strict");
var y;
y = 10;
x = 5;
console.log(x);
console.log(y);
var x;
