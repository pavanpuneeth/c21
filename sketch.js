var fixedRect,movingRect,fixedrect2;
var sp1,sp2,sp3,sp4;

function setup() {
  createCanvas(400, 400);
  fixedRect=createSprite(200,200,100,100);
  movingRect=createSprite(100,100,20,50);
  fixedrect2=createSprite(200,120,20,20);
  sp1=createSprite(30,200,30,30);
  sp1.velocityX=5;
  sp2=createSprite(370,200,30,30);
  sp2.velocityX=-4;

  sp3=createSprite(200,30,30,30);
  sp3.velocityY=5;
  sp4=createSprite(200,370,30,30);
  sp4.velocityY=-4;
}

function draw() {
  background(220);
  
  movingRect.x=mouseX;
  movingRect.y=mouseY;
  

  
  if(isTouching(movingRect,fixedRect)){
  movingRect.shapeColor="blue";
  fixedRect.shapeColor="blue";
  }
  else if(isTouching(movingRect,fixedrect2)){
    movingRect.shapeColor="blue";
    fixedrect2.shapeColor="blue";
  }
  else{
    movingRect.shapeColor="red";
  fixedRect.shapeColor="red";
  fixedrect2.shapeColor="red";
  }
  
  bounceOff(sp1,sp2);
  bounceOff(sp3,sp4);

  drawSprites();
  //rectMode(CENTER);
  //rect(200,200,100,100);
  fill("red");
  text(mouseX+","+mouseY,mouseX,mouseY);
}

