var counter = 0;
var newcurrent;
var current;

var arr = ["red", "blue", "green", "orange"];
var random;

$("body").on("mouseenter", "div", function () {
  random = Math.round(Math.random() * 3);
  newcurrent = arr[random];
  current = $(this).attr("class");

  $(this).removeClass(current).addClass(`${newcurrent}`);
  $(this).data("prevClass", current);
  counter++; // Increment counter
  if (counter % 3 == 0) {
    $("body").append(`<div class=${arr[random]}></div>`); // Append a new red div to the body
  }
});

$("body").on("mouseleave", "div", function () {
  var prevClass = $(this).data("prevClass");
  $(this).removeClass(newcurrent).addClass(prevClass); // Revert back to red class
  console.log("newCurrent:", newcurrent);
  console.log("current", current);
});
