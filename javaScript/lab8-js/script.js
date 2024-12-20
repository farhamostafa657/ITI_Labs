///////////////////////////
//1&2
var firstName = document.getElementById("fname");
var pass = document.getElementById("lname").value;

document.getElementById("login").addEventListener("click", function () {
  var check = document.getElementById("remember");
  var username = document.getElementById("fname").value;
  var password = document.getElementById("lname").value;
  console.log(username);
  if (check.checked) {
    // localStorage.setItem("username", username);
    // localStorage.setItem("password", password);
    document.cookie = `username=${username}; expires=Thu, 18 Dec 2025 12:00:00 UTC`;
    document.cookie = `password=${password}; expires=Thu, 18 Dec 2025 12:00:00 UTC`;

    console.log(username);
  } else {
    // localStorage.removeItem("username");
    // localStorage.removeItem("password");
    document.cookie = `username=${username}; expires=Thu, 18 Dec 2013 12:00:00 UTC`;
    document.cookie = `password=${password}; expires=Thu, 18 Dec 2013 12:00:00 UTC`;
  }
});

// if (
//   localStorage.getItem("username") != null ||
//   localStorage.getItem("username") != undefined
// )
//   document.getElementById("fname").value = localStorage.getItem("username");
// if (
//   localStorage.getItem("password") != null ||
//   localStorage.getItem("password") != undefined
// )
//   document.getElementById("lname").value = localStorage.getItem("password");
///////////////////////////////////////////////////////////////////
//4
var studentsArr = [
  {
    student: {
      id: 1,
      name: "farha",
      age: 24,
      address: "october",
      skills: ["one", "two", "three"],
      isLeader: true,
    },
  },
  {
    student: {
      id: 2,
      name: "mostaf",
      age: 54,
      address: null,
      skills: ["one", "two", "three"],
      isLeader: true,
    },
  },
  {
    student: {
      id: 3,
      name: "abdeltawab",
      age: 34,
      address: "october",
      skills: ["one", "two", "three"],
      isLeader: true,
    },
  },
];
for (let i = 0; i < studentsArr.length; i++) {
  console.log(
    studentsArr[i].student.name + " " + studentsArr[i].student.skills
  );
}
////
// var http = new XMLHttpRequest();
// var allStudents;
// http.open("Get", "./student.json");
// http.addEventListener("readystatechange", function () {
//   if (http.readyState == 4 && http.status == 200) {
//     allStudents = JSON.parse(http.response);
//     console.log(allStudents);
//   }
// });

////////////
//5
var http = new XMLHttpRequest();
var data;
http.open("GET", "https://reqres.in/api/users/1 ");
http.send();
http.addEventListener("readystatechange", function () {
  if (http.readyState == 4 && http.status == 200) {
    data = JSON.parse(http.response);
    displayData(data);
  }
});
var myDataPlace;
var myDiv;
function displayData(ele) {
  myDiv = "";

  myDiv += `<div>
        <h2>${ele.data.first_name} </h2>
        <img src="${ele.data.avatar}" alt="">
      </div>`;

  document.getElementById("data").innerHTML = myDiv;
}
/////////////////////
//a
document.getElementById("display").addEventListener("click", function () {
  var myId = document.getElementById("myId").value;
  document.getElementById("spann").innerHTML = `<h2>${myId}</h2>`;
});
//b
var httpTwo = new XMLHttpRequest();
var users;
httpTwo.open("GET", "https://reqres.in/api/users");
httpTwo.send();
httpTwo.addEventListener("readystatechange", function () {
  if (httpTwo.readyState == 4 && httpTwo.status == 200) {
    users = JSON.parse(httpTwo.response);
    console.log(users.data);
    displayAllUsers(users.data);
    displayStudentNames(users.data);
  }
});

function displayAllUsers(element) {
  var userDiv = document.getElementById("users");

  var u_data = "";
  for (let i = 0; i < element.length; i++) {
    u_data += `<div>
        <p>${element[i].id}</p>
         <p>${element[i].email}</p>
          <p>${element[i].first_name}</p>
           <p>${element[i].last_name}</p>
            <img src="${element[i].avatar}" alt="">
      </div>`;
  }
  console.log(u_data);
  userDiv.innerHTML = u_data;
  console.log("haay");
}

function displayStudentNames(student) {
  var mySelect = document.getElementById("student_select");
  var myOption = "";
  for (let i = 0; i < student.length; i++) {
    // const option = document.createElement("option");
    // option.value = student[i].first_name;
    // mySelect.appendChild(option);
    myOption += `<option value="${student[i].first_name}">${student[i].first_name}</option>`;
  }
  mySelect.innerHTML = myOption;
  console.log("my option list");
}

function displayTheUser(ele) {
  var mySpan = document.getElementById("user_data");
  var user_name = ele.value;
  var theData = "";
  for (let i = 0; i < users.data.length; i++) {
    if (user_name == users.data[i].first_name) {
      theData += `<div>
        <p>${users.data[i].id}</p>
         <p>${users.data[i].email}</p>
          <p>${users.data[i].first_name}</p>
           <p>${users.data[i].last_name}</p>
            <img src="${users.data[i].avatar}" alt="">
      </div>`;
      break;
    }
  }
  mySpan.innerHTML = theData;
}
