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
let leftPressed = false; // variable storing whether or not the left arrow key has been pressed
let rightPressed = false; // variable storing whether or not the right arrow key has been pressed
/******************************************/
let brickRowCount = 3; // variable containing the number of rows for the bricks
let brickColumnCount = 5; //  variable containing the number of columns for the bricks
let brickWidth = 75; // variable containing the width of the brick
let brickHeight = 20; // variable containing the height of the brick
let brickPadding = 10; // variable containing the padding between each brick
let brickOffsetTop = 30; // variable containing the top offset of the bricks
let brickOffsetLeft = 30; // variable containing the left offset of the bricks
/*****************************************/
let score = 0 // Keeps track of the user's score
/******************************************/
let lives = 3; // Sets the number of lives the user has
/********************************************/
// 2D array creating the bricks
let bricks = [];
for (let c = 0; c < brickColumnCount; c++) {
  bricks[c] = [];
  for (let r = 0; r < brickRowCount; r++) {
    bricks[c][r] = {
      x: 0,
      y: 0,
      status: 1
    }; // Status one is for whether or not the brick was hit
  }
}
/****************************************/
// function that draws the ball
function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}
/***************************************/
// function that draws the paddle
function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = "#71f442";
  ctx.fill();
  ctx.closePath();
}
/**************************************/
// drawBricks function that creates the wall of bricks for the ball to hit
function drawBricks() {
  for (let c = 0; c < brickColumnCount; c++) {
    for (let r = 0; r < brickRowCount; r++) {
      if (bricks[c][r].status == 1) {
        let brickX = (c * (brickWidth + brickPadding)) + brickOffsetLeft;
        let brickY = (r * (brickHeight + brickPadding)) + brickOffsetTop;
        bricks[c][r].x = brickX;
        bricks[c][r].y = brickY;
        ctx.beginPath();
        ctx.rect(brickX, brickY, brickWidth, brickHeight);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
      }
    }
  }
}
/**************************************/
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBricks(); // Draws the brick wall that the ball hits
  drawBall(); // Shorten code inside draw();
  drawPaddle(); // Draws the paddle controlled by the user
  drawScore(); // Prints the score on the gamedev canvas
  drawLives(); // Prints the number of lives the user has left in the game
  collisionDetection(); // Creates detection by brick for the ball touching it
  x += dx;
  y += dy;

  if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
    dx = -dx;
  }
  if (y + dy < ballRadius) {
    dy = -dy;
  } else if (y + dy > canvas.height - ballRadius) { // if ball touches the bottom, then restart the game
    if (x > paddleX && x < paddleX + paddleWidth) { // checks if the ball hits the bottom, if it happens to hit the paddle
      dy = -dy;
    } else { // if not, the user is given a "game over" alert and the page is reloaded
    lives--;
    if(!lives) {
        alert("GAME OVER");
        document.location.reload();
    }
    else { // This else statement's code is executed when lives does not equal zero and simply reloads the page
        x = canvas.width/2;
        y = canvas.height-30;
        dx = 2;
        dy = -2;
        paddleX = (canvas.width-paddleWidth)/2;
    }
    }
  }

  if (rightPressed && paddleX < canvas.width - paddleWidth) {
    paddleX += 7;
  } else if (leftPressed && paddleX > 0) {
    paddleX -= 7;
  }
}

document.addEventListener("keydown", keyDownHandler, false); // listener for key down
document.addEventListener("keyup", keyUpHandler, false); // listener for key up
document.addEventListener("mousemove", mouseMoveHandler, false); // listener for mouse

/*************************************************************/
//  Paddle will follow the mouse cursor
function mouseMoveHandler(e) {
    let relativeX = e.clientX - canvas.offsetLeft;
    if(relativeX > 0 && relativeX < canvas.width) {
        paddleX = relativeX - paddleWidth/2;
    }
}
/*************************************************************/
function keyDownHandler(e) { // function for assigning boolean values based on whether or not a key arrow is down

  if (e.keyCode == 39) { // right arrow key is equal to 39
    rightPressed = true;
  } else if (e.keyCode == 37) { // left arrow key is equal to 37
    leftPressed = true;
  }
}

/*************************************************************/

function keyUpHandler(e) { // function for assigning boolean values based on whether or not a key arrow is up
  if (e.keyCode == 39) { // right arrow key is equal to 39
    rightPressed = false;
  } else if (e.keyCode == 37) { // left arrow key is equal to 37
    leftPressed = false;
  }
}
/*************************************************************/

//function determines if the ball has hit a brick
function collisionDetection() {
  for (let c = 0; c < brickColumnCount; c++) {
    for (let r = 0; r < brickRowCount; r++) {
      let b = bricks[c][r];
      if (b.status == 1) {
        if (x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight) {
          dy = -dy;
          b.status = 0;
          score++; // increments the score

          // Winning message
          if (score == brickRowCount * brickColumnCount) {
            alert("YOU WIN, CONGRATULATIONS!");
            document.location.reload();
          }
        }
      }
    }
  }
}
/**************************************************************/
// Function that, when called, draws out the score for the user
function drawScore() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText("Score: " + score, 8, 20); // first parameter is the text, last two parameters are coordinates
}

/***************************************************************/
// function that prints the number of lives the player has
function drawLives() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Lives: "+lives, canvas.width-65, 20);
}

/***************************************************************/
draw();
requestAnimationFrame(draw); // browser determines the framerate
window.onload = init;
