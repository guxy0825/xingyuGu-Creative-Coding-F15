//Changing the sprites' animations
//position and transformations: rotation, scale, mirror
//move the mouse and click
//press and hold the up and down keys

var character;

function setup() {
  createCanvas(800,300);
  
  //create a sprite and add the 3 animations
  character = createSprite(400, 150, 50, 100);
  
  var myAnimation = character.addAnimation("floating", "assets/front_1.png","assets/front_2.png","assets/front_3.png");
  myAnimation.offY = 18;
  
  character.addAnimation("moving", "assets/left_1.png","assets/left_2.png", "assets/left_3.png");

  
}

function draw() {
  background(255,255,255);  
  
  //if mouse is to the left
  if(mouseX < character.position.x - 10) {
    character.changeAnimation("moving");
    //flip horizontally
    character.mirrorX(1);
    //negative x velocity: move left
    character.velocity.x = - 2;
  }
  else if(mouseX > character.position.x + 10) {
    character.changeAnimation("moving");
    //unflip 
    character.mirrorX(-1);
    character.velocity.x = 2;
  }
  else {
    //if close to the mouse, don't move
    character.changeAnimation("floating");
    character.velocity.x = 0;
  }
  
  //draw the sprite
  drawSprites();
}
