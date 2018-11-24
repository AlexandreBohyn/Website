var dot = {
  x: 100,
  y: 50
}
var col = {
  r: 255,
  g: 0,
  b: 0
}

function setup() {
  createCanvas(500, 300);
  background(0);
}

function draw() {
  col.r = random(100, 255);
  col.b = random(0, 190);
  dot.x = random(0, width);
  dot.y = random(0, height);
  noStroke();
  fill(col.r, col.g, col.b, 75);
  ellipse(dot.x, dot.y, 25, 25);
  if (frameCount > 300) {
    background(0);
    frameCount = 0
  }
}

function mousePressed() {
  background(0);
  frameCount = 0
}