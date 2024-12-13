/////a make it in welcome page
////////
//b
///////
//c
let fullName = document.getElementById("name");
fullName.addEventListener("focus", foucusHere);
function foucusHere() {
  fullName.style.border = "solid 1px blue";
  fullName.style.outline = "none";
}
fullName.addEventListener("focusout", unFocusHere);
function unFocusHere() {
  fullName.style.border = "solid 1px black";
}
////////////
//d
//function validation
function vaildation(ele) {
  if (ele.value == "") {
    ele.nextElementSibling.textContent = " invalid name";
    ele.style.backgroundColor = "gray";
  } else if (ele.value.length < 3) {
    ele.nextElementSibling.textContent = " invalid name";
    ele.style.backgroundColor = "gray";
  } else {
    ele.nextElementSibling.textContent = "";
    ele.style.backgroundColor = "white";
  }
}

function checkValid(ele) {
  if (ele.value == "") {
    document.getElementById("name").focus();
  } else if (ele.value.length < 3) {
    document.getElementById("name").focus();
  } else {
    ele.nextElementSibling.textContent = "";
  }
}

/////
//e
function validatPass(ele) {
  var pass = document.getElementById("pass");
  if (ele.value == "" || pass.value == "") {
  }
}
