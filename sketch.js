var bg;
var bgimg;
var enemyimg;
var playerjet,playerjetimg;
var bulletimg;
var bulletGroup;
var enemyGroup;
var score=0;


function preload(){
bgimg=loadImage("image/space.png")
playerjetimg=loadAnimation("image/jet 1.png","image/jet 2.png","image/jet4.png","image/jet5.png","image/jet6.png");
enemyimg=loadAnimation("image/enemy1.png","image/enemy2.png","image/enemy3.png");
bulletimg=loadImage("image/bullet33.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
bg= createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight)
bg.addImage("bg",bgimg)
bg.velocityY=3;



playerjet = createSprite(windowWidth/2,windowHeight-100);
playerjet.addAnimation("playerjet",playerjetimg)

bulletGroup=new Group();
enemyGroup=new Group();
}

function draw() {

  background(0);  
  drawSprites();

  textSize(30);
  fill("yellow")
  text("score:"+score,1650,200 )


  if(bg.y>height){
    bg.y=0;
   }

   if(keyDown(LEFT_ARROW)){
    playerjet.x=playerjet.x-10
   }

   if(keyDown(RIGHT_ARROW)){
    playerjet.x=playerjet.x+10
   }

   if (keyWentDown("space")){
    createBullet(playerjet.x);
   }

   spawnEnemy();
   //for(var i=0;i<enemyGroup.lenght;i++){
    if(enemyGroup.isTouching(bulletGroup)){
      bulletGroup.destroyEach();
      enemyGroup.destroyEach();
      score=score+5;
     }
   //}
  edges=createEdgeSprites();
     playerjet.collide(edges[0]);
     playerjet.collide(edges[1]);

}

function spawnEnemy(){
  if(frameCount%100===0 ){
    var enemy=createSprite(random(50,width-50))
    enemy.addAnimation("enemy",enemyimg);
    enemy.velocityY=5;
    enemy.scale=0.5;
    enemyGroup.add(enemy);

  }
}

function createBullet(x){
  var bullet=createSprite(x,height-200,20,20)
  bullet.addImage("Bullet",bulletimg)
  bullet.velocityY=-5;
  bulletGroup.add(bullet);
  
}