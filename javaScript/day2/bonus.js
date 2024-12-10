/////////////////////////
//1
//func to get the day
function dayString(date) {
  const fDate = new Date(date);

  const days = [
    "Sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thrusday",
    "friday",
    "Saturday",
  ];
  const day = days[fDate.getDay()];
  return day;
}
console.log(dayString("2024-12-10"));

///////////////////////////////////////////
//2 phone number regex

function handleNubmer() {
  const phoneNum = document.getElementById("num").value;
  const regexNum = /^(002)?(01)[1250][0-9]{8}$/;

  let tesNum = regexNum.test(phoneNum);
  if (tesNum) {
    alert("valid number");
  } else {
    alert("invalid number");
  }
}

///////////////////////////////////
//3 function to get the age of user
function age() {
  const userInput = document.getElementById("birthDate").value;
  let day = Number(userInput.substring(0, 2));
  let month = Number(userInput.substring(3, 5));
  let year = Number(userInput.substring(6, 10));

  const d = new Date();
  let text = d.toLocaleDateString();

  let curDay = Number(text.substring(0, 2));
  let curMonth = Number(text.substring(3, 5));
  let curYear = Number(text.substring(6, 10));

  let ageDay = Math.abs(curDay - day);
  let ageMonth = Math.abs(curMonth - month);
  let ageYear = Math.abs(curYear - year);
  alert(
    "your age is " + ageDay + " day " + ageMonth + " month " + ageYear + " year"
  );
  console.log("your age is ", ageDay, " ", ageMonth, " ", ageYear);
}
///////////////////////////////////////////////////
//4

function getColor() {
  const userColor = document.getElementById("cColor").value;
  console.log(userColor);
  const choiseColor = {
    r: "red",
    b: "blue",
    g: "green",
  };

  let theColor = choiseColor[userColor];

  const currentDate = new Date().toLocaleDateString();
  document.getElementById("color_birth").style.color = theColor;
  document.getElementById("parag").innerHTML = `
<strong>Current Date:</strong>`;
  document.getElementById("color_birth").innerHTML = currentDate;
}

///////////////////////////////////////////////
