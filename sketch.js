var player,playerimg
var coin,coinimg
var path,pathimg
var energy,energyimg
var bomb,bombimg



function preload(){
playerimg = loadAnimation("Runner-1.png","Runner-2.png");
pathimg = loadImage("path.png");
coinimg = loadImage("coin.png");
energyimg = loadImage("energyDrink.png");
bobmimg = loadImage("bomb.png");
energyimg = loadImage("energyDrink.png");
}

function setup(){
  createCanvas(400,400);

  path = createSprite(200,-350,400,400);
  path.addImage("path1", pathimg);
  path.scale = 1.4;
  
  path.velocityY = 7;
   
  player = createSprite(50,320,40,40);
  player.scale = 0.05;
  player.addAnimation("running", playerimg);

 
}

function draw() {

  if (path.y > 750){
    path.y = -400;
  }

  

  

  player.x = mouseX
  background(255);
 drawSprites();
 spawncoin();
 spawnenergy();
 spawnbomb();
}

function spawncoin(){
 
  if (frameCount%35===0) {
    coin=createSprite(600,100,40,10);
    coin.addImage(coinimg);
    coin.scale = 0.7;
    coin.velocityY=10;
   coin.x=Math.round(random(20,380));
   coin.lifetime = 20
  }

}

function spawnenergy() {
  
  if (frameCount%65===0) {
    energy=createSprite(600,100,40,10);
    energy.addImage(energyimg)
    energy.scale = 0.2;
    energy.velocityY=10;
   energy.x=Math.round(random(20,380));
  
  }

}

function  spawnbomb() {
  if (frameCount%70===0) {
    bomb=createSprite(600,100,40,10);
    bomb.addImage(bobmimg)
    bomb.scale = 0.1;
    bomb.velocityY=10;
   bomb.x=Math.round(random(20,380));
  }
}