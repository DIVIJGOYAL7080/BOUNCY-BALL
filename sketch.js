        var ball,img,paddle;
function preload() {
  ballimg = loadImage('ball.png');
  paddleimg=loadImage("paddle.png")
}
function setup() {
  createCanvas(400, 400);
  ball=createSprite(60,200,20,20);
  ball.addImage (ballimg); 
  ball.velocityX=5;  
  paddle=createSprite(350,200,20,100);
  paddle.addImage(paddleimg)
  

}

function draw() {
  background(205,153,0);
  
  edges=createEdgeSprites();
  //Bounce Off the Left Edge only
  ball.bounceOff(edges[0]); 
  
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  ball.bounceOff(paddle,explosion());  
  paddle.collide(edges);
  if(keyDown(UP_ARROW))
  {
    paddle.y=paddle.y-10;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    paddle.y=paddle.y+10;
  }
 
  drawSprites();
  
}

function explosion()
{
  if (ball.bounceOff(paddle)){
     ball.velocityY=random(8,5);
  ball.velocityX=random(-5,5);
  }
 
}

