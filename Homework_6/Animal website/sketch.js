var centerImage;
var img_1;
var img_2;
var img_3;
var img_4;
var canvas;
var count;

function setup() {
  canvas = createCanvas(800, 400);
  canvas.position(0, 0);
  image_1 = createImg("http://xingyu-gu.com/wp-content/uploads/2015/10/pig.png");
  image_2 = createImg("http://xingyu-gu.com/wp-content/uploads/2015/10/bull.png");
  image_3 = createImg("http://xingyu-gu.com/wp-content/uploads/2015/10/cock.png");
  image_4 = createImg("http://xingyu-gu.com/wp-content/uploads/2015/10/cow.png");
  image_2.hide();
  image_3.hide();
  image_4.hide();
  image_1.position(200, 80);
  image_1.size(400, 300);
  image_2.position(200, 80);
  image_2.size(400, 300);
  image_3.position(200, 80);
  image_3.size(400, 300);
  image_4.position(200, 80);
  image_4.size(400, 300);
  count = 1;
  // Attach listeners for mouse events related to img.
  image_1.mousePressed(imgSwitch);
  text = createP("POLYGON FARM ANIMALS!");
  text.position(250, 30);
  text.style("font-family", "Myriad Pro");
  text.style("color", "#000000");
  text.style("font-size", "18pt");
  text.style("padding", "10px");

}

function draw() {
  noStroke();
  background(253, 243, 196);
  strokeWeight(6);
  stroke(254, 237, 155);
  for (var i = 0; i < width; i += 15) {
    line(i, 0, i, height);
  }
}

// Create functions for hiding and showing uni image. 
// These will be hooked into mouse events related to canvas above.
function imgSwitch() {
  count = count + 1;
  if (count%4 == 1)
  {

  image_4.hide();
  image_1.show();
  image_1.mousePressed(imgSwitch);
  }
  if (count%4 == 2)
  {
  image_1.hide();
  image_2.show();
  image_2.mousePressed(imgSwitch);
  }
  if (count%4 == 3)
  {
  image_2.hide();
  image_3.show();
  image_3.mousePressed(imgSwitch);
  }
  if (count%4 == 0)
  {
  image_3.hide();
  image_4.show();
  image_4.mousePressed(imgSwitch);
  }
}