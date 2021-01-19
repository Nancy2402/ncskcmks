
var fixedRect, movingRect;
var fixedRect2;

function setup() {
  createCanvas(1200,800);
 
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "green";
  
  fixedRect2=createSprite(300,200,80,30);
  fixedRect2.shapeColor="green";
  
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,fixedRect2)){
    movingRect.shapeColor = "blue";
    fixedRect2.shapeColor = "blue";
  }

  else if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor="pink";
    fixedRect.shapeColor="pink"
  }
  
  

//bounceOff(movingRect,fixedRect)
  drawSprites();
}




