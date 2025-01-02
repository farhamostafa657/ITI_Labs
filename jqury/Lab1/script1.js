$(".container1").append("<div class=black></div>");
$(".red").before("<div class=white></div>");
$(".pink").before("<p class=yellow>Hello Farha</p>");
//$(".container2>p").replaceWith("<p class=yellow>Hello Farha</p>");
$(".container2>p").each(function () {
  $(this).replaceWith(
    `<a href=http://"+${$(this).text()}>${$(this).text()}</a>`
  );
});

$(".container3>img").wrap("<figure></figure>");

$(".container4 .col-age").text("");

//$(".row1>.col-name").attr("class", "col-nam man");
$(".row1>.col-name").addClass("man");

$(".container4 td").each(function () {
  $(this).toggleClass("your-email");
});

$(".container5 li").each(function (index) {
  if (index % 3 != 0) {
    $(this).remove();
  }
});

$(".container6 #username").val("Farha");
$(".container6 #remember").attr("checked", "true");
