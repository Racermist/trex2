var edges;
var trex ,trex_running;
var ground,ground_image;
var ig;
function preload(){
    trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")
  ground_image=loadImage("ground2.png")
}

function setup(){
    createCanvas(600,200)
    edges=createEdgeSprites();
    //create a trex sprite
  trex=createSprite(40,185,20,20);
  trex.addAnimation("running",trex_running);
  trex.scale=0.5;
//create ground sprite
  ground=createSprite(200,185,400,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  ground.addImage(ground_image);
  //creating ig
  ig=createSprite(200,195,400,10);
  ig.visible=false;
}

function draw(){
  //add background
    background(220);
    //making trex jump.
    if(keyDown("space")&&trex.y>=100){
      trex.velocityY=-10;
    }
    //add gravity
    trex.velocityY=trex.velocityY+0.8;
    //making ground move.
    if(ground.x<40){
      ground.x=ground.width/2;
    }
    //making trex collide.
  trex.collide(ig);
  drawSprites();
}
