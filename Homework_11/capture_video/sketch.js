/*
 * @name Video Capture
 * @frame 710,240
 * @description <p><em><span class="small"> To run this example locally, you will need the
 * <a href="http://p5js.org/reference/#/libraries/p5.dom">p5.dom library</a>
 * at least one video file, and a running <a href="https://github.com/processing/p5.js/wiki/Local-server">local server</a>.</span></em></p><br><br>
 * Capture video from the webcam and display
 * on the canvas as well with invert filter. Note that by
 * default the capture feed shows up, too. You can hide the
 * feed by uncommenting the capture.hide() line.
 */
var capture;

function setup() {
  createCanvas(720, 360);
  capture = createCapture(VIDEO);
  capture.size(400,300);
}

function draw() {
  background(255);
  image(capture,0,0);
  capture.loadPixels();
  // for(var y=0; y<capture.height;y+=10){
  //   for(var x=0; x<capture.width;x+=10){
  //     var i = y * width + x;
  //     var darkness = 255 - capture.pixels[i*4];
  //     fill(darkness);
  //     ellipse(x, y, 10, 10);
  //   }
  // }
  var stepSize = round(constrain(8, 6, 32));
  for (var y=0; y<capture.height; y+=stepSize) {
    for (var x=0; x<capture.width; x+=stepSize) {
      var i = y * width + x;
      var darkness = (255 - capture.pixels[i*4]) / 255;
      var lightness = capture.pixels[i*4]/255;
      var radius1 = stepSize * darkness;
      var radius2 = stepSize * lightness;
      fill(darkness);
      ellipse(x, y, radius1, radius1);
      fill(255);
      ellipse(x, y, radius2, radius2);
    }
  }
}