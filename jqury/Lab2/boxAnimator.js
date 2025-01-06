$(".box").animate(
  {
    left: "300px",
    width: "200px",
    height: "200px",
  },
  2000,
  function () {
    $(this).css("background-color", "blue");
  }
);

$(".box").animate(
  {
    top: "300px",
    width: "100px",
    height: "100px",
  },
  2000,
  function () {
    $(this).css("background-color", "orange");
  }
);

$(".box").animate(
  {
    left: 0,
    width: "200px",
    height: "200px",
  },
  2000,
  function () {
    $(this).css("background-color", "green");
  }
);

$(".box").animate(
    {
      top: 0,
      width: "100px",
      height: "100px",
    },
    2000,
    function () {
      $(this).css("background-color", "red");
    }
  );
