// //1-	Create a new page that has a textbox,
// and alert the code of key pressed on a textbox,
// and which mouse button clicked on it.
//1

function char(e) {
  alert(`key pressed : ${e.key} ,key code ${e.code}`);
}

function mouseDown(e) {
  if (e.button == 0) {
    alert("Left Button");
  } else if (e.button == 2) {
    alert("Right Button");
  }
}

//////////////////////////////////////////////////
//2
//clocked started
function clockStarted() {
  const d = new Date();
  let time = d.toLocaleTimeString();
  alert("Clock Started " + time);
}
// function clearIntr(e) {
//   if (e.key == "Alt" && e.key == "w") clearInterval(interval);
// }

var interval;
document.getElementById("lessen").addEventListener("click", function () {
  let place = document.getElementById("timeUpdated");
  var time;
  interval = setInterval(function () {
    const d = new Date();
    time = d.toLocaleTimeString();
    place.innerHTML = `updated time ${time}`;
  }, 1000);
});

function altW(e) {
  if (e.key == "w" && e.altKey) {
    clearInterval(interval);
  }
}

///////////////////////////

//5
var adverWindow;
function advertic() {
  const myTime = setTimeout(adverticeWindow, 3000);

  function adverticeWindow() {
    adverWindow = window.open("", "Advertisement", "width:300,height=3oo");
    adverWindow.document.write(`
      <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>adverticeWindow</title>
  </head>
  <body>
    <p>This is Lorem ipsum dolor sit amet,
     consectetur adipiscing elit, sed do eiusmod tempor 
     incididunt ut labore et dolore magna aliqua.</p>
    <p>This is Lorem ipsum dolor sit amet, consectetur
     adipiscing elit, sed do eiusmod tempor incididunt ut 
     labore et dolore magna aliqua.</p>
    <p>This is Lorem ipsum dolor sit amet, consectetur
     adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua.</p>
    <p>This is Lorem ipsum dolor sit amet, consectetur
     adipiscing elit, sed do eiusmod tempor incididunt ut 
     labore et dolore magna aliqua.</p>
    <p>This is Lorem ipsum dolor sit amet, consectetur 
    adipiscing elit, sed do eiusmod tempor incididunt ut 
    labore et dolore magna aliqua.</p>
    <p>This is Lorem ipsum dolor sit amet, consectetur
     adipiscing elit, sed do eiusmod tempor incididunt 
     ut labore et dolore magna aliqua.</p>
    <p>This is Lorem ipsum dolor sit amet, consectetur 
    adipiscing elit, sed do eiusmod tempor incididunt ut 
    labore et dolore magna aliqua.</p>
  </body>
</html>
      
      `);
  }
}

function closer() {
  adverWindow.close();
}
/////////////////////////////////////////////////////////////////////////
//6
var termsWindow;
document.getElementById("terms").addEventListener("click", openTerms);
function openTerms() {
  termsWindow = window.open(
    "./terms.html",
    "terms and contion",
    "width=300,height=300"
  );
  setInterval(autoScroll, 1000);
}
function autoScroll() {
  termsWindow.scrollBy(0, 100);
}

////////////////////////////////////////////////////////////////////////////
//7

document.getElementById("firstName").addEventListener("keydown", prevent);

function prevent(e) {
  const regex = /[a-zA-Z]/;
  const check = regex.test(e.key);
  if (!check) {
    e.preventDefault();
  }
}
