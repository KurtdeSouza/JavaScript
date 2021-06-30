let canvas = document.createElement("CANVAS");
let ctx = canvas.getContext("2d");
let width = (canvas.width = window.innerWidth);
let height = (canvas.height = window.innerHeight);

function RandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; // max & min both included
}

function RandomColor(min, max) {
  let randomColor =
    "rgb(" +
    RandomInt(min, max) +
    "," +
    RandomInt(min, max) +
    "," +
    RandomInt(min, max) +
    ")";
  return randomColor;
}
function RandomRadius(min, max) {
  let randomRadius = RandomInt(min, max);
  return randomRadius;
}

function RandomLocation(min, max) {
  let randomLocation = RandomInt(min, max);
  return randomLocation;
}
for (let i = 0; i < 10; i++) {
  // let canvas = document.createElement("CANVAS");
  // let ctx = canvas.getContext("2d");
  // let width = (canvas.width = window.innerWidth);
  // let height = (canvas.height = window.innerHeight);

  let randomColor = RandomColor(0, 255);
  let randomRadius = RandomRadius(10, 20);
  let randomX = RandomLocation(0 + randomRadius, width - randomRadius);
  let randomY = RandomLocation(0 + randomRadius, height - randomRadius);

  ctx.beginPath();
  ctx.arc(randomX, randomY, randomRadius, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fillStyle = randomColor;
  ctx.fill();
  document.body.appendChild(canvas);
  console.log(canvas.width);
}
