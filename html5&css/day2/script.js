//1
const theCircle = document.getElementById("myCircle");
theCircle.addEventListener("mouseover", function () {
  theCircle.setAttribute("fill", "red");
  theCircle.setAttribute("stroke", "orange");
  theCircle.setAttribute("stroke-width", "2");
});

theCircle.addEventListener("mouseout", function () {
  theCircle.setAttribute("fill", "yellow");
  theCircle.setAttribute("stroke", "green");
  theCircle.setAttribute("stroke-width", "4");
});

theCircle.addEventListener("mousedown", function () {
  theCircle.setAttribute("fill", "blue");
  theCircle.setAttribute("stroke", "black");
  theCircle.setAttribute("stroke-width", "2");
});

theCircle.addEventListener("mouseup", function () {
  alert("mouseUp");
});
//////////////////////////////////////////////////
//2
var canvas = document.getElementById("imgCanvas");
var cxt = canvas.getContext("2d");
var img = new Image();
var scaleFactor = 1;
img.setAttribute("id", "sadImg");
img.src = "./images/sad.png";

function drawImg() {
  cxt.clearRect(0, 0, canvas.width, canvas.height);
  const scaledWidth = 50 * scaleFactor;
  const scaledHeight = 50 * scaleFactor;
  cxt.drawImage(img, 50, 50, scaledWidth, scaledHeight);
}
img.onload = function () {
  drawImg();
};
canvas.addEventListener("mousedown", function () {
  scaleFactor = 2;
  img.setAttribute("src", "./images/smiley.png");

  console.log("happy");
});
canvas.addEventListener("mouseup", function () {
  scaleFactor = 1;
  img.setAttribute("src", "./images/sad.png");

  console.log("sad");
});

///////////////////////////////////////////////////////////////////
//3
var circleCanvase = document.getElementById("circleCanvase");
var cxt2 = circleCanvase.getContext("2d");
var centerX;
var centerY;
var radius;
function drawCircle() {
  cxt2.clearRect(0, 0, circleCanvase.width, circleCanvase.height);
  cxt2.beginPath();
  centerX = circleCanvase.width / 2;
  centerY = circleCanvase.height / 2;
  radius = 100;
  cxt2.arc(centerX, centerY, radius, 0, 2 * Math.PI);
  cxt2.fillStyle = "rgba(142, 101, 12, 0.3)";
  cxt2.fill();
  cxt2.lineWidth = 4;
  cxt2.strokeStyle = "blue";
  cxt2.stroke();
  cxt2.closePath();
}
drawCircle();

cxt2.font = "30px Arial";
cxt2.textAlign = "center";
cxt2.textBaseline = "middle";
const x = centerX - radius;
const y = centerY - radius;
const x2 = centerX + radius;
const y2 = centerY + radius;
const grd = cxt2.createLinearGradient(x, y, x2, y2);
grd.addColorStop(0, "red");
grd.addColorStop(0.5, "yellow");
grd.addColorStop(1, "green");
cxt2.fillStyle = grd;
cxt2.fillText("Farha Mostafa", centerX, centerY);

//////////////////////////////////////////////////////////////////////////
//4

var canvasDraw = document.getElementById("drawCanva");
var cxtDraw = canvasDraw.getContext("2d");

let isDrawing = false;

canvasDraw.addEventListener("mousedown", (e) => {
  isDrawing = true;
  cxtDraw.beginPath();
  cxtDraw.moveTo(e.offsetX, e.offsetY);
  cxtDraw.strokeStyle = e.button === 2 ? " rgb(196, 228, 255)" : "black";
  cxtDraw.lineWidth = 5;
});

canvasDraw.addEventListener("mousemove", (e) => {
  if (!isDrawing) return;
  cxtDraw.lineTo(e.offsetX, e.offsetY);
  cxtDraw.stroke();
});

canvasDraw.addEventListener("mouseup", () => (isDrawing = false));
canvasDraw.addEventListener("mouseout", () => (isDrawing = false));

canvasDraw.addEventListener("contextmenu", (e) => e.preventDefault());
