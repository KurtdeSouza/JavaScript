// setup canvas

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// function to generate random number

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

// define Ball constructor

function Ball(x, y, velX, velY, color, size) {
  this.x = x;
  this.y = y;
  this.velX = velX;
  this.velY = velY;
  this.color = color;
  this.size = size;
}

// define ball draw method

Ball.prototype.draw = function () {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.fill();
};

Ball.prototype.update = function () {
  if (this.x + this.size >= width || this.x - this.size <= 0) {
    this.velX = -this.velX;
  }
  if (this.y + this.size >= height || this.y - this.size <= 0) {
    this.velY = -this.velY;
  }
  this.x += this.velX;
  this.y += this.velY;
};

let balls = [];

while (balls.length < 30) {
  const radius = random(10, 20);
  let ball = new Ball(
    random(0 + radius, width - radius),
    random(0 + radius, height - radius),
    random(-7, 7),
    random(-7, 7),
    "rgb(" + random(0, 255) + "," + random(0, 255) + "," + random(0, 255) + ")",
    radius
  );
  balls.push(ball);
}

function loop() {
  ctx.fillStyle = "rgb(0,0,0)";
  ctx.fillRect(0, 0, width, height);
  for (let i = 0; i < balls.length; i++) {
    balls[i].draw();
    balls[i].update();
  }
  requestAnimationFrame(loop);
}
loop();
