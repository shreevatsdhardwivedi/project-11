var ship;
var sea;


function preload(){
  shipA=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  
  

}

function setup(){
  
  createCanvas(400,400);
  ship=createSprite(150,150,50,50);
ship.addAnimation("A",shipA);
ship.scale=0.25;
}

function draw() {
  background("blue");
 drawSprites();
}