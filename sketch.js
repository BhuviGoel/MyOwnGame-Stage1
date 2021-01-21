// reset gamestate and adaptivity to game
var gameState = "start"

function preload(){
  hedge1=loadImage("hedgeX.png");
  hedge2=loadImage("hedgeY.png");
  girl=loadImage("girl.png");
  boy=loadImage("boy.png");
  Cure=loadImage("Cure.png");
}

function setup(){
  createCanvas(600,600);

  xGroup = new Group();
  yGroup = new Group();

  start1=createSprite(220,300);
  start1.addImage(girl);
  start2=createSprite(380,300);
  start2.addImage(boy);

  end=createSprite(20,20);
  end.shapeColor="black"
  end.scale=0.1

  player = createSprite(580,580);
  player.shapeColor="black"
  player.scale = 0.1;
}

function draw(){
  background(0);
  if (gameState==="start"){
    if (mousePressedOver(start1)){
       player.addImage(girl);
       end.addImage(Cure)
       gameState="play";
       start1.visible=false;
       start2.visible=false;
    }
    if (mousePressedOver(start2)){
      player.addImage(boy);
      end.addImage(Cure)
      gameState="play";
      start1.visible=false;
      start2.visible=false;
   }
  }
  if (gameState === "play") {
    // camera.position.y=player.y;
    if(keyWentDown("left_arrow")){
      player.x = player.x - 5;
    }    
    if(keyWentDown("right_arrow")){
      player.x = player.x + 5;
    }
    if(keyWentDown("up_arrow")){
      player.y = player.y - 5;
    }
    
    if(keyWentDown("down_arrow")){
      player.y = player.y + 5;
    }
    if(player.isTouching(end)){
      gameState="win"
    }
    spawnX();
    spawnY();  
  }

  drawSprites(); 
  if (gameState === "win"){
    stroke("violet");
    fill("violet");
    textSize(30);
    text("You Have Cured COVID-19!", 125,300)
    xGroup.destroyEach();
    yGroup.destroyEach();
  }
  if (gameState === "end"){
    stroke("violet");
    fill("violet");
    textSize(30);
    text("Game Over!", 230,300)
    xGroup.destroyEach();
    yGroup.destroyEach();
  }

}

function spawnX() {
  if (frameCount % 80 === 0) {
    var x = createSprite(0, 40, Math.round(random(100,300)), 10);
    x.x = Math.round(random(0,600));
    x.velocityY=1;
    x.shapeColor=rgb(Math.round(random(0,255)),Math.round(random(0,255)),Math.round(random(0,255)));
    xGroup.add(x);
    // x.addImage(hedge1);
    // x.velocityX=-1;
  }
}
function spawnY() {
  if (frameCount % 80 === 0) {
    var y = createSprite(480, 40,10 , Math.round(random(100,300)));
    y.x = Math.round(random(0,600));
    y.velocityY=1;
    y.shapeColor=rgb(Math.round(random(0,255)),Math.round(random(0,255)),Math.round(random(0,255)));
    // y.addImage(hedge2);
    // y.velocityX=-1;
    yGroup.add(y);
  }
}


