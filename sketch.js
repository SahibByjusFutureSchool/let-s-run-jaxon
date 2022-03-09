var runner, runnerImg, path, pathImg, coin, coinImg, bomb, bombImg, energyDrink, energyDrinkImg, coinscore
var background 

function preload(){
  //pre-load images
  runnerImg=loadAnimation("Runner-1.png", "Runner-2.png");
  pathImg=loadImage("path.png");
  coinImg=loadImage("coin.png");
  energyDrinkImg=loadImage("energyDrink.png");
  bombImg=loadImage("bomb.png");
  
}

function setup(){
  createCanvas(400,400);
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY= 4;
  path.scale=1.2;
  runner=createSprite(180,340,50,170);
  runner.addAnimation("running", runnerImg);
  coin=createSprite(100,200,80,90);
  coin.addImage(coinImg);
  coin.scale=0.3;
  left_boundary=createSprite(0,300,100,600);
  right_boundary=createSprite(390,300,80,600);
  left_boundary.visible=false;
  right_boundary.visible=false;
}

function draw() {
  background(180);
if(path.y < 400){
  path.y-height/2;
}
  runner.x=World.mouseX;
    if(runner.isTouching(coin)) {
      coinscore = coinscore+1
    }
    edges=createEdgeSprites();
  runner.collide(left_boundary);
  runner.collide(right_boundary);
  runner.collide(edges);
  drawSprites();
}
