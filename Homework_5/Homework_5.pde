// Setting the center
int x1;
int y1;
 
void setup(){
  size(500, 500);
  smooth();
  textAlign(CENTER, CENTER);
  x1 = width/2;
  y1 = height/2; 
}
 
void draw(){
  background(30);
 
  // Setting the radius
  float sRadius = 100;    // seconds
  float minRadius = 170;  // minutes
  float hRadius = 140;   // hours
     
  // Setting the colors
  color sColor1 = color(255);    // seconds
  color sColor2 = color(0);
   
  // Getting the data and mapping it to DEGREES, not RADIANS!
  float sAngle = map(second(), 0, 60, -90, 270);    // seconds
  float minAngle = map(minute(), 0, 60, -90, 270);  // minutes
  float hAngle = map(hour(), 0, 12, -90, 270);      // hours
   
  // Drawing the arcs
  // See comments above function to understand the parameters
  drawArc(sAngle, sColor1, sColor2, sRadius);
 
  //Drawing the clock
  noFill();
  stroke(255);
  strokeWeight(3);
  ellipse(x1,y1,hRadius+280,hRadius+280);
  
  float hX = x1 + cos(radians(hAngle)) * hRadius;
  float hY = y1 + sin(radians(hAngle)) * hRadius;
  strokeWeight(10);
  line(x1, y1, hX, hY);
  
  float mX = x1 + cos(radians(minAngle)) * minRadius;
  float mY = y1 + sin(radians(minAngle)) * minRadius;
  strokeWeight(4);
  line(x1, y1, mX, mY);
  //Writing the hours
  for(int i = 1; i < 13; i ++){
    float inter = map(i, 1, 13, 0, 1);
    fill(255);
     
    // Calculating the angular positions
    float txtAngle = map(i, 1, 13, -PI/2, 3*PI/2);
    float x2 = x1 + cos(txtAngle) * (hRadius + 50);
    float y2 = y1 + sin(txtAngle) * (hRadius + 50); 
    textSize(32);
    int clock_number = i-1;
    if(clock_number == 0)
    clock_number =12;
    text(clock_number, x2, y2);
  } 
}
 
/*---------- DRAWING THE ARCS -----------*/
// Which variable (hour, minute or second)?
// Which colors?
// Which radius?
// Which resolution?
void drawArc(float variable, color c1, color c2, float radius){
 
/*  Setting the "resolution" for the circle,
  i.e., the angular increase to draw each gradient line
  Since each var have different radius, the resolution must
  also be different and it is inversely proportional to the radius */  
  float res = 1/radius * 50;
   
  /*---------- LINES -----------*/
  for(float angle = -90; angle < variable; angle += res){
     
    // Inter calculates the interpolation point to change the color
    float inter = map(angle, -90, 270, 0, 1);
     
    // c is the resulting color;
    // lerp is the interpolation function (processing native)
    // c1 and c2 are the 2 colors sent to this function
    color c = lerpColor(c1, c2, inter);
    stroke(c);
    strokeWeight(1);
 
    // Drawing the lines based on the current radius and angle
    float x2 = x1 + cos(radians(angle)) * radius;
    float y2 = y1 + sin(radians(angle)) * radius;
    line(x1, y1, x2, y2);
  }
}