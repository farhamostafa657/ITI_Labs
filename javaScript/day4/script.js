/////a make it in welcome page
////////
//b
///////
//c
var nameImg = document.getElementById("imgValid");
var registerButt = document.getElementById("register");
let fullName = document.getElementById("name");
fullName.addEventListener("focus", foucusHere);
function foucusHere() {
  fullName.style.border = "solid 2px blue";
  fullName.style.outline = "none";
}
fullName.addEventListener("focusout", unFocusHere);
function unFocusHere() {
  fullName.style.border = "solid 1px black";
}
////////////////////////////////////////////////////////

/////////////////////////////////////////
//d
//function validation using text
// function vaildation(ele) {
//   if (ele.value == "") {
//     ele.nextElementSibling.textContent = " invalid name";
//     ele.style.backgroundColor = "gray";
//     fullName.focus();
//     fullName.select();
//     notValidImg;
//     return false;
//   } else if (ele.value.length <= 3) {
//     console.log(ele.value);
//     ele.nextElementSibling.textContent = " invalid name";
//     ele.style.backgroundColor = "gray";
//     fullName.focus();
//     fullName.select();
//     notValidImg;
//     return false;
//   } else {
//     ele.nextElementSibling.textContent = "";
//     ele.style.backgroundColor = "white";
//     //validImg;
//     return true;
//   }
// }

//function validation using img
//4
function validation(ele) {
  if (ele.value == "" || ele.value.length <= 3) {
    document.getElementById(
      "imgValid"
    ).innerHTML = `<img src="./images/notvalid.png" alt="" height="20px" width="20px"> `;
  } else {
    document.getElementById(
      "imgValid"
    ).innerHTML = `<img src="./images/valid.png" alt="" height="20px" width="20px">`;
  }
}

////////////////////////////////////////////////////////
var pass = document.getElementById("pass");
var repeatPass = document.getElementById("reppass");
var spanPass = document.getElementById("validPass");
//e
//function for validation password to return text
// function validationpass(ele) {
//   if (ele.value == "" && pass.value !== "") {
//     ele.style.backgroundColor = "gray";
//     ele.nextElementSibling.textContent =
//       "Password and Repeat Password Required";
//     ele.focus();
//     ele.select();
//     console.log(ele.value + " " + pass.value);
//     return false;
//   } else if (pass.value == "" && ele.value !== "") {
//     pass.style.backgroundColor = "gray";
//     ele.nextElementSibling.textContent =
//       "Password and Repeat Password Required";
//     pass.focus();
//     pass.select();
//     console.log(ele.value + " " + pass.value);
//     return false;
//   } else if (pass.value == "" && ele.value == "") {
//     ele.style.backgroundColor = "gray";
//     pass.style.backgroundColor = "gray";
//     ele.nextElementSibling.textContent =
//       "Password and Repeat Password Required";
//     pass.focus();
//     pass.select();
//     console.log(ele.value + " " + pass.value);
//     return false;
//   } else if (pass.value != ele.value) {
//     ele.style.backgroundColor = "gray";
//     pass.style.backgroundColor = "gray";
//     ele.nextElementSibling.textContent =
//       "The Password and Repeat Password should be the same";
//     pass.focus();
//     pass.select();
//     console.log(ele.value + " " + pass.value);
//     return false;
//   } else {
//     ele.nextElementSibling.textContent = "";
//     ele.style.backgroundColor = "white";
//     pass.style.backgroundColor = "white";
//     return true;
//   }
// }
//validation password to return text
//4
function validationpass(ele) {
  if (ele.value == "" && pass.value !== "") {
    document.getElementById(
      "imgValidPass"
    ).innerHTML = `<img src="./images/notvalid.png" alt="" height="20px" width="20px"> `;
  } else if (pass.value == "" && ele.value !== "") {
    document.getElementById(
      "imgValidPass"
    ).innerHTML = `<img src="./images/notvalid.png" alt="" height="20px" width="20px"> `;
  } else if (pass.value == "" && ele.value == "") {
    document.getElementById(
      "imgValidPass"
    ).innerHTML = `<img src="./images/notvalid.png" alt="" height="20px" width="20px"> `;
  } else if (pass.value != ele.value) {
    document.getElementById(
      "imgValidPass"
    ).innerHTML = `<img src="./images/notvalid.png" alt="" height="20px" width="20px"> `;
  } else {
    document.getElementById(
      "imgValidPass"
    ).innerHTML = `<img src="./images/valid.png" alt="" height="20px" width="20px">`;
  }
}
//////////////////////////////////////
//2
//a

//document.getElementById("register").addEventListener("submit",function(e){})

function check(e) {
  var userName = document.getElementsByName("full_name")[0].value;
  var pass = document.getElementsByName("pass")[0].value;
  var secPass = document.getElementsByName("repeatPass")[0].value;
  if (
    userName == "" ||
    userName.length <= 3 ||
    pass != secPass ||
    pass == "" ||
    secPass == ""
  ) {
    e.preventDefault();
    document.getElementById("register").nextElementSibling.textContent =
      "please correct the validation error frist";
  } else {
    document.getElementById("register").nextElementSibling.textContent = "";
  }
}
///////////////////////////////////////////////////////////
//5
var imgs = [
  "./Images For Slide Show/1.jpg",
  "./Images For Slide Show/2.jpg",
  "./Images For Slide Show/3.jpg",
  "./Images For Slide Show/4.jpg",
  "./Images For Slide Show/5.jpg",
  "./Images For Slide Show/6.jpg",
  "./Images For Slide Show/7.jpg",
  "./Images For Slide Show/8.jpg",
];

var galleryImg = document.getElementById("galleryImg");
var counter = 0;
var interval;
function playImg() {
  interval = setInterval(nextImg, 500);
}
function nextImg() {
  counter++;
  if (counter == imgs.length) {
    counter = 0;
  }
  galleryImg.setAttribute("src", imgs[counter]);
}

function stopImg() {
  clearInterval(interval);
}

function prevImg() {
  counter--;
  if (counter < 0) {
    counter = imgs.length - 1;
  }
  galleryImg.setAttribute("src", imgs[counter]);
}

//////////////////////////////////////////////////
var obs = 1;
function nextOpacity(ele) {
  obs -= 0.3;
  if (obs < 0) {
    obs = 1;
  }
  ele.style.opacity = obs;
}
var intervalOpc;
function changOpacity(ele) {
  intervalOpc = setInterval(function () {
    nextOpacity(ele);
  }, 500);
}

function opacityOne(ele) {
  clearInterval(intervalOpc);
  ele.style.opacity = 1;
}
