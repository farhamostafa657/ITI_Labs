$("#decrease").click(function () {
  var fontSize = parseInt($("p").css("font-size"));
  console.log(parseInt($("p").css("font-size")));
  if (fontSize >= 10) {
    $("#theError").empty();
    fontSize = fontSize - 1 + "px";
    $("p").css("font-size", fontSize);
  } else if ($("#theError span").length === 0) {
    // Add the message only if it doesn't already exist
    $("#theError").html("<span>Minimum font size reached</span>");
  }
});

$("#increase").click(function () {
  var fontSize = parseInt($("p").css("font-size"));
  if (fontSize <= 35) {
    $("#theError").empty();
    fontSize = fontSize + 1 + "px";
    $("p").css("font-size", fontSize);
  } else if ($("#theError span").length === 0) {
    // Add the message only if it doesn't already exist
    $("#theError").html("<span>Maximum font size reached</span>");
  }
});
