function setup() {
  createCanvas(windowWidth, windowHeight);
  background(51);
}

function draw() {
  stroke(255);
  noFill();
  DrawCircle(width / 2, height / 2, 600)
}

function DrawCircle(x, y, d) {
  ellipse(x, y, d);
  let newD = d * 0.5;
  if (d > 1) {
    DrawCircle(x + newD, y, newD);
    DrawCircle(x - newD, y, newD);
    //DrawCircle(x, y + d / 2, d / 2);
  }
}