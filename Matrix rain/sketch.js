var symbolsize = 26;
var streams = [];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(0);
  var x = 0;
  for (var i = 0; i <= width / symbolsize; i++) {
    var stream = new Stream();
    stream.generateSymbols(x, random(-500, 0));
    streams.push(stream);
    x += symbolsize;
  }
  textSize(symbolsize);

}

function draw() {
  background(0, 150);
  console.log(frameCount);
  streams.forEach(function(stream) {
    stream.render();
  })

}

function Symbol(x, y, speed, first) {
  this.x = x;
  this.y = y;
  this.value;
  this.first = first;
  this.speed = speed;
  this.switchInterval = round(random(2, 20));

  this.setToRandomSymbol = function() {
    if (frameCount % this.switchInterval == 0) {
      this.value = String.fromCharCode(
        0x30A0 + round(random(0, 96))
      );
    }
  }

  this.rain = function() {
    if (this.y >= height) {
      this.y = 0
    } else {
      this.y += this.speed;
    }
  }
}

function Stream() {
  this.symbols = [];
  this.totalSymbols = round(random(5, 25))
  this.speed = round(random(5, 15))

  this.generateSymbols = function(x, y) {
    var first = round(random(0, 1)) == 1;
    for (var i = 0; i <= this.totalSymbols; i++) {
      symbol = new Symbol(x, y, this.speed, first);
      symbol.setToRandomSymbol();
      this.symbols.push(symbol);
      y -= symbolsize;
      first = false;
    }
  }

  this.render = function() {
    this.symbols.forEach(function(symbol) {
      if (symbol.first) {
        fill(180, 255, 180);
      } else {
        fill(0, 255, 70);
      }
      text(symbol.value, symbol.x, symbol.y);
      symbol.rain();
      symbol.setToRandomSymbol();
    });
  }
}