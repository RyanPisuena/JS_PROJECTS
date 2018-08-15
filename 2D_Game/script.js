let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let x = canvas.width / 2;
let y = canvas.height - 30;
let dx = 2;
let dy = -2;
let ballRadius = 10;
let paddleHeight = 10;
let paddleWidth = 75;
let paddleX = (canvas.width - paddleWidth) / 2;
let leftPressed = false; // Variable storing whether or not the left arrow key has been pressed
let rightPressed = false; // Variable storing whether or not the right arrow key has been pressed

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = "#71f442";
  ctx.fill();
  ctx.closePath();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall(); // Shorten code inside draw();
  drawPaddle(); // Draws the paddle controlled by the user
  x += dx;
  y += dy;

  if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
    dx = -dx;
  }
  if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
    dy = -dy;
  }

  if (rightPressed && paddleX < canvas.width - paddleWidth) {
    paddleX += 7;
  } else if (leftPressed && paddleX > 0) {
    paddleX -= 7;
  }
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) { // function for assigning boolean values based on whether or not a key arrow is down

  if (e.keyCode == 39) { // right arrow key is equal to 39
    rightPressed = true;
  } else if (e.keyCode == 37) { // left arrow key is equal to 37
    leftPressed = true;
  }
}

function keyUpHandler(e) { // function for assigning boolean values based on whether or not a key arrow is up
  if (e.keyCode == 39) { // right arrow key is equal to 39
    rightPressed = false;
  } else if (e.keyCode == 37) { // left arrow key is equal to 37
    leftPressed = false;
  }
}

setInterval(draw, 10);
window.onload = init;
