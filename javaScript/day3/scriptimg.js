///////////////////3counter images
var counter = 0;
function addone() {
  counter++;
  console.log(counter);
}

const handler = document
  .getElementById("count")
  .addEventListener("click", myFunction);

//set time out (b)
let mytime = setTimeout(removeLastEvent, 7000);

function removeLastEvent() {
  document.getElementById("count").removeEventListener("click", myFunction);
  document
    .getElementById("count")
    .addEventListener("click", () => alert("Game Over"));
}

function myFunction() {
  alert(`counter value is : ${counter}`);
}
////////////////////////////////////////////////////////////
