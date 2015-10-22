var vertex_X1 ;
var vertex_Y1 ;
var vertex_X2 ;
var vertex_Y2 ;
var vertex_X3 ;
var vertex_Y3 ;
var vertex_X4 = 520;
var vertex_Y4 = 250;
var y = 0;
var bool_1;
var vertex_Y = 10;
function setup() {
  createCanvas(800,380);
  frameRate(30);
}

function draw() {
  background(242,241,238);
  drawFrame();
  vertex_X1 = 28;
  vertex_Y1 = 66;
  vertex_X2 = 25;
  vertex_Y2 = 150;
  vertex_X3 = 200;
  vertex_Y3 = 240;
  
  for(var i=0; i<3; i++){
    drawRectangle(vertex_X1,vertex_Y1, 4, 65, 34, 47, 85);
    vertex_Y1 = vertex_Y1+vertex_Y;
  }
  drawLine(50,50,110,115);
  drawCircle(135,110,14,236,187,74);
  drawLine(22,130,210,130);
  
  for(var j=0;j<5;j++){
    stroke(0);
    strokeWeight(0.1);
    drawTriangle(vertex_X2,vertex_Y2,vertex_X3,vertex_Y3,vertex_X3+3+y,vertex_Y3+14+2*y,251,250,239);
    vertex_X3 = vertex_X3+3+y;
    vertex_Y3 = vertex_Y3+14+2*y;
    if(bool_1)
    y = random(4);
  }
  
  drawRectangle(60,280, 16, 6, 141, 44, 27);
  drawQuad_1();
  drawStraightShape_1();
  drawTriangle(280,180,240,285,270,290,255,255,255);
  drawQuad_2();
  drawTriangle(280,180,310,270,340,200,255,255,255);
  drawTriangle(295,295,310,270,320,300,255,255,255);
  drawTriangle(340,200,310,270,320,300,35,48,118);
  drawTriangle(340,205,400,190,400,230,171,176,189);
  drawStraightShape_2();
  drawStraightShape_3();
  drawRectangle(710,265,25,50,227,223,199);
  drawRectangle(710,285,2,50,0,0,0);
  drawCurveShape_1();
  drawCurveShape_2();
  drawRectangle(647,205,3,8,0,0,0);
  drawRectangle(655,205,3,20,255,255,255);
  drawRectangle(647,215,3,8,0,0,0);
  drawRectangle(655,215,3,20,255,255,255);
  drawCurveShape_3();
  drawCurveShape_4();
  drawCurveShape_5();
  drawTriangle(410,240,410,300,480,240,184,35,27);
  drawCurveShape_6();
  drawCurveShape_7();
  drawCurveShape_8();
  drawStraightShape_4();
  drawStraightShape_5();
  drawStraightShape_6();
  
  drawCircle(600,150,18,255,255,255);
  drawTriangle(vertex_X4,vertex_Y4,vertex_X4+60,vertex_Y4,vertex_X4+30,vertex_Y4+30,252,224,91);
  drawRectangle(580,280,6,3,147,19,19);
  drawRectangle(580,286,4,3,170,54,32);
  drawRectangle(580,290,20,3,255,255,255);
  drawTriangle(745,45,720,100,770,100,26,38,86);
  drawRectangle(727,97,3,4,255,255,255);
  drawRectangle(727,100,15,4,218,169,88);
  drawRectangle(645,330,4,4,129,44,29);
  drawRectangle(649,330,4,16,231,189,102);
  drawRectangle(665,330,4,32,255,255,255);
  drawRectangle(697,330,4,80,29,50,88);
}

function mousePressed(){
 var d1 = dist(mouseX, mouseY, vertex_X2,vertex_Y2);
 if(d1<180)
 bool_1 = boolean(1);
 
 var d2 = dist(mouseX,mouseY,46,70);
 if(d2<40)
 vertex_Y = random(10);
 
 var d3 = dist(mouseX,mouseY,540,250);
 if(d3<40)
 vertex_X4 = vertex_X4 + random(50);
}

function mouseReleased(){
 bool_1 = boolean(0);
 vertex_Y = 10;
 vertex_X4 = 520;
}

function drawRectangle(vertex_X1, vertex_Y1, rec_height, rec_width, r, g, b ){
  beginShape();
  noStroke();
  fill(r,g,b);
  vertex(vertex_X1,vertex_Y1);
  vertex(vertex_X1+rec_width,vertex_Y1);
  vertex(vertex_X1+rec_width,vertex_Y1+rec_height);
  vertex(vertex_X1,vertex_Y1+rec_height);
  endShape();
}

function drawLine(vertex_X1,vertex_Y1,vertex_X2,vertex_Y2){
  stroke(0);
  strokeWeight(0.3);
  line(vertex_X1,vertex_Y1,vertex_X2,vertex_Y2);
}

function drawCircle(vertex_X,vertex_Y,radius, r, g, b){
  fill(r,g,b);
  noStroke();
  ellipse(vertex_X,vertex_Y,radius,radius);
}

function drawTriangle(vertex_X1,vertex_Y1,vertex_X2,vertex_Y2,vertex_X3,vertex_Y3, r, g, b){
  fill(r,g,b);
  triangle(vertex_X1,vertex_Y1,vertex_X2,vertex_Y2,vertex_X3,vertex_Y3);
}

function drawFrame(){
  beginShape();
  noStroke();
  fill(163,138,115);
  vertex(0,0);
  vertex(0,380);
  vertex(800,380);
  vertex(800,368);
  vertex(788,368);
  vertex(12,368);
  vertex(12,12);
  vertex(800,12);
  vertex(800,0);
  endShape();
  
  beginShape();
  noStroke();
  fill(127,101,76);
  vertex(800,380);
  vertex(800,368);
  vertex(790,368);
  vertex(790,12);
  vertex(800,0);
  endShape();
}

function drawQuad_1(){
  beginShape();
  noStroke();
  fill(150,52,39);
  vertex(230,50);
  vertex(263,63);
  vertex(270,130);
  vertex(220,140);
  endShape();
}

function drawQuad_2(){
  beginShape();
  noStroke();
  fill(179,180,187);
  vertex(270,290);
  vertex(280,180);
  vertex(310,270);
  vertex(295,295);
  endShape();
}

function drawStraightShape_1(){
  beginShape();
  noStroke();
  fill(36,36,39);
  vertex(200,240);
  vertex(225,330);
  vertex(270,290);
  vertex(240,285);
  vertex(280,180);
  endShape();
}

function drawStraightShape_2(){
  beginShape();
  noStroke();
  fill(238,208,152);
  vertex(400,230);
  vertex(400,190);
  vertex(480,170);
  vertex(480,200);
  vertex(530,200);
  vertex(470,250);
  vertex(400,300);
  endShape();
}

function drawStraightShape_3(){
  beginShape();
  noStroke();
  fill(97,100,109);
  vertex(530,200);
  vertex(530,210);
  vertex(610,210);
  vertex(620,200);
  vertex(680,200);
  vertex(680,230);
  vertex(760,230);
  vertex(760,265);
  vertex(710,265);
  vertex(710,290);
  vertex(560,290);
  vertex(560,340);
  vertex(482,340);
  vertex(482,300);
  vertex(430,250);
  endShape();
}

function drawStraightShape_4(){
  beginShape();
  noStroke();
  fill(255);
  vertex(400,190);
  vertex(400,45);
  vertex(480,45);
  vertex(480,170);
  endShape();
}

function drawCurveShape_1(){
  beginShape();
  noStroke();
  fill(148,23,22);
  vertex(637,70);
  vertex(637,200);
  vertex(655,200);
  vertex(655,100);
  endShape()
  beginShape()
  curveVertex(655,200);
  curveVertex(655,110);
  curveVertex(660,100);
  curveVertex(665,95);
  curveVertex(668,80);
  curveVertex(655,67);
  curveVertex(637,70);
  curveVertex(637,70);
  endShape();
}

function drawCurveShape_2(){
  beginShape();
  noStroke();
  fill(255);
  vertex(637,200);
  vertex(655,200);
  vertex(655,220);
  vertex(626,220);
  endShape();
  beginShape();
  curveVertex(626,220);
  curveVertex(635,210);
  curveVertex(637,200);
  endShape();
}

function drawCurveShape_3(){
  beginShape();
  noStroke();
  fill(40,37,38);
  vertex(482,320);
  vertex(482,300);
  vertex(410,300);
  vertex(360,302);
  curveVertex(360,302);
  curveVertex(360,302);
  curveVertex(350,310);
  curveVertex(335,310);
  curveVertex(320,318);
  curveVertex(318,327);
  curveVertex(330,330);
  curveVertex(340,330);
  curveVertex(350,328);
  curveVertex(370,335);
  curveVertex(383,333);
  curveVertex(420,320);
  curveVertex(430,340);
  curveVertex(445,335);
  curveVertex(455,320);
  curveVertex(460,315);
  curveVertex(468,313);
  curveVertex(475,317);
  curveVertex(482,320);
  curveVertex(482,320);
  endShape();
}

function drawCurveShape_4(){
  beginShape();
  noStroke();
  fill(184,35,27);
  vertex(410,300);
  vertex(480,240);
  beginShape();
  curveVertex(480,240);
  curveVertex(480,240);
  
  curveVertex(460,242);  
  curveVertex(440,230); 
  curveVertex(450,210);
  curveVertex(452,195); 
  curveVertex(440,186);  
  curveVertex(430,190);
  curveVertex(421,210);  
  
  curveVertex(380,240);
  curveVertex(380,240);
  endShape();
}

function drawStraightShape_5(){
  beginShape();
  noStroke();
  fill(123,132,149);
  vertex(400,80);
  vertex(400,70);
  vertex(415,70);
  vertex(410,78);
  endShape();
}

function drawStraightShape_6(){
  beginShape();
  noStroke();
  fill(49,51,50);
  vertex(400,80);
  vertex(400,70);
  vertex(375,70);
  vertex(375,85);
  endShape();
}

function drawCurveShape_5(){
  beginShape();
  noStroke();
  fill(255);
  vertex(482,320);
  vertex(482,300);
  vertex(410,300);
  vertex(480,240);
  curveVertex(480,240);
  curveVertex(480,240);
  curveVertex(507,238);  
  curveVertex(500,255);  
  curveVertex(470,265); 
  curveVertex(475,275);
  curveVertex(520,280);  
  curveVertex(482,320);
  curveVertex(482,320);
  endShape();
}

function drawCurveShape_6(){
  beginShape();
  fill(35,48,118);
  curveVertex(339,200);
  curveVertex(339,200);
  curveVertex(430,240);
  curveVertex(410,300);
  curveVertex(319,300);
  curveVertex(319,300);
  endShape();
}

function drawCurveShape_7(){
  beginShape();
  fill(255);
  curveVertex(345,245);
  curveVertex(345,245);
  curveVertex(365,230);
  curveVertex(375,235);
  curveVertex(367,245);
  curveVertex(375,248);
  curveVertex(380,245);
  curveVertex(385,250);
  curveVertex(383,255);
  curveVertex(386,258);
  curveVertex(405,253);
  curveVertex(407,270);
  curveVertex(395,280);
  curveVertex(380,285);
  curveVertex(370,280);
  curveVertex(365,270);
  curveVertex(354,275);
  curveVertex(348,265);
  curveVertex(350,255);
  curveVertex(347,240);
  endShape();
}

function drawCurveShape_8(){
  beginShape();
  fill(151,151,165);
  curveVertex(368,265);
  curveVertex(368,265);
  curveVertex(375,268);
  curveVertex(378,255);
  curveVertex(372,255);
  curveVertex(375,255);
  endShape();
}