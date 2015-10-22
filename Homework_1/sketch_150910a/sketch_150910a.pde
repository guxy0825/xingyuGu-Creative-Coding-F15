float vertexY1;
float vertexY2;
float vertexY3;
float vertexY4;
float vertexX1;
float vertexX2;
float vertexX3;
float vertexX4;
float r;
void setup(){
  size(600,400);
  //random generate curves' coordinate
  vertexY1 = random(0,200);
  vertexY2 = random(200,400);
  vertexY3 = random(100,300);
  vertexY4 = random(300,400);
  vertexX1 = random(0,300);
  vertexX2 = random(300,600);
  vertexX3 = random(200,400);
  vertexX4 = random(400,600);
  //random generate width, height of ellipse
  r = random(400);
  background(250,250,250);
}

void draw(){
  noFill();
  //make the stoke thinner
  strokeWeight(0.5);
  //draw red lines
  stroke(255, 0, 0);
  curve(5, 100, 0, vertexY1, 600, vertexY2, 500, 0);
  curve(5, 100, 0, vertexY3, 600, vertexY4, 500, 0);
  curve(5, 100, vertexX1, 0, vertexX2, 400, 500, 0);
  curve(500, 100, vertexX3, 0, vertexX4, 400, 500, 0);
  ellipse(vertexX1,vertexY1,r,r);
  ellipse(vertexX2,vertexY2,r+300,r-10);
  ellipse(vertexX3,vertexY3,r-10,r+200);
  ellipse(vertexX4,vertexY4,r+200,r+200);
  //draw yellow lines
  stroke(255, 222, 0);
  curve(5, 100, 0, vertexY1-50, 600, vertexY2+100, 500, 0);
  curve(5, 100, 0, vertexY3+50, 600, vertexY4-100, 500, 0);
  curve(5, 200, vertexX1+100, 0, vertexX2-150, 400, 500, 100);
  curve(500, 100, vertexX3+100, 0, vertexX4-100, 400, 500, 0);
  ellipse(vertexX1,vertexY1,r,r);
  ellipse(vertexX2,vertexY2,r+150,r);
  ellipse(vertexX3-100,vertexY3,r,r+300);
  ellipse(vertexX4-100,vertexY4,r+300,r+300);
  //draw blue lines
  stroke(0, 0, 255);
  curve(5, 200, 0, vertexY1+100, 600, vertexY2, 500, 400);
  curve(5, 200, 0, vertexY3+100, 600, vertexY4, 500, 400);
  curve(5, 200, vertexX1+200, 0, vertexX2-200, 400, 500, 100);
  curve(300, 100, vertexX3+200, 0, vertexX4-200, 400, 500, 0);
  ellipse(vertexX1,vertexY1,r,r);
  ellipse(vertexX2,vertexY2-20,r+200,r);
  ellipse(vertexX3-150,vertexY3+100,r-50,r+300);
  ellipse(vertexX4-150,vertexY4,r+100,r+400);
  //draw black lines
  stroke(0, 0, 0);
  curve(5, 200, 0, vertexY1+300, 600, vertexY2-100, 500, 400);
  curve(5, 200, 0, vertexY3-300, 600, vertexY4-100, 500, 400);
  curve(100, 400, vertexX1-50, 0, vertexX2-250, 400, 500, 100);
  curve(10, 300, vertexX3-50, 0, vertexX4-250, 400, 500, 300);
  ellipse(vertexX1+50,vertexY1,r,r);
  ellipse(vertexX2+100,vertexY2,r+300,r);
  ellipse(vertexX3-150,vertexY3,r+100,r+300);
  ellipse(vertexX4-150,vertexY4,r-100,r+100);
}