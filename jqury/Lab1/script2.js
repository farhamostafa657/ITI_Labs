// 1. in section with class container1 =>
//     - Make the Background of every DIV
// like its class name and the text color of
//  paragraph like its class name. (Dynamically).
//  [Hint: Use each()][Bonus].

$(".container1 div").each(function () {
  $(this).css("background-color", $(this).attr("class"));
});

// 2-in section with class container2 =>

//    a - Replace the text content of the anchors
//  (HREF which contains word "google") with "Google".

//$(".container2 a[href*='google']").text("Google");

$(".container2 a").each(function () {
  if ($(this).attr("href").includes("google")) {
    $(this).text("Google");
  }
});

//    b- Replace the text content of the anchors (HREF which ends with word "org") with "IEEE".

$(".container2 a[href*='org']").text("IEEE");

//    c- Replace the text content of the anchors (HREF which starts with "https") with "Secure".

$(".container2 a[href*='https']").text("Secure");

//    d-   - Append the word "Official Website" text content
//           of the anchors (HREF which starts with word "http").

$(".container2 a[href^='http']").append(" Official Website");

// 3in section with class container3 =>
// 	- Find the image in the third figure and change it's src to 'img/orange.png' and the text content of its figcaption into "fig.3 - Orange Juice".
// 	[Solve it in two Step][Bonus: 1 step]

$(".container3 figure img").each(function (index) {
  if (index == 2) {
    $(this).attr("src", "img/orange.png");
    $(this).next().text("fig.3 - Orange Juice");
  }
});

// in section with class container4 =>
// 	a- Find the td which has class "my-name" and change it's color to "blue".
// 	[Use: attribute method not class method].

$(".container4 .row1 .my-name").attr("style", "color:blue");
// $(".container4 .row1 .my-name").css("color", "blue");

//b- Change the background of odd cells (td) in the table into pink color.

$(".container4 td:nth-child(odd)").attr("style", "background-color:pink");

// c-Find the second (td) of the last (tr) of the first table and change it's font weight to "Bold".
$(".container4 .row3 td:nth-child(3)").attr(
  "style",
  "font-weight:bold;background-color:pink"
);

// in section with class container5 =>


// 	a- Find the second list item of the unordered list and change it's font style to "italic".

$(".container5 li:nth-child(2)").attr("style", "font-style:italic");


// - Find the next direct sibling to second list
//  item of the ordered list and change it's color to "red".

$(".container5 ul li:nth-child(2)").next().attr("style", "color:red");

