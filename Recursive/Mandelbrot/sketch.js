function setup() {
  colorMode(RGB);
  createCanvas(1366, 768);
  pixelDensity(1);
  loadPixels();

  for (var x = 0; x < width; x++) {
    for (var y = 0; y < height; y++) {

      var range = 2.5;
      var ratio = height / width;
      var maxit = 100;

      var a = map(x, 0, width, -range, range);
      var b = map(y, 0, height, -range * ratio, range * ratio);

      var ca = a;
      var cb = b;

      var n = 0;
      var z = 0;

      while (n < maxit) {
        var a2 = a * a - b * b;
        var b2 = 2 * a * b;
        a = a2 + ca;
        b = b2 + cb;
        if (abs(a + b) > 500) {
          break;
        }
        n++;
      }

      //var nsmooth = n + 1 - Math.log(Math.log(maxit)) / Math.log(2)

      var bright = map(n, 0, maxit, 0, 1);
      bright = map(sqrt(bright), 0, 1, 0, 255);

      //if (n === maxit) {
      //  bright = 0;
      //}


      var pix = (x + y * width) * 4;
      pixels[pix + 0] = bright;
      pixels[pix + 1] = bright;
      pixels[pix + 2] = bright;
      pixels[pix + 3] = 255;
    }
  }
  updatePixels();
}