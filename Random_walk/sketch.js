var x;
var y;
var newx;
var newy;

function setup() {
  createCanvas(500, 500);
  background(51);
  x = 250;
  y = 250;
  newx = 250;
  newy = 250;
}

function draw() {

  var r = floor(random(4));
  var inc = 10;

  switch (r) {
    case 0:
      newx = x + inc;
      break;
    case 1:
      newx = x - inc;
      break;
    case 2:
      newy = y + inc;
      break;
    case 3:
      newy = y - inc;
      break;
  }

  var col = color(random(255), random(255), random(255))

  stroke(col);
  strokeWeight(2);
  line(x, y, newx, newy);

  x = newx;
  y = newy;

}