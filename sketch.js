var flamingo, fImg;
var backP, backImg;
var rock, leopard, obstacleGroup;
var balloon, balloonGroup;
var rockImg, leopardImg;

function preload(){
  fImg = loadImage("download.png");
  backImg = loadImage("jungle Img.jpg");
  rockImg = loadImage("rock.png");
  bombImg = loadImage("bomb.png");
}

function setup(){
  createCanvas(600,300);

  backP = createSprite(0,250,10,10);
  backP.addImage("back", backImg);
  backP.scale = 4;
  backP.x = backP.width /2;
  backP.velocityX = -2;

  flamingo = createSprite(50,300,10,10);
  flamingo.addImage("fl", fImg);
  flamingo.scale = 0.8;

  obstacleGroup = new Group();
  balloonGroup = new Group();

  edges = createEdgeSprites();
}

function draw(){
  background(0);

  if (backP.x < 0) {
    backP.x = backP.width/2;
  }

  // && flamingo.y === 261.6

  //if(keyDown("space")){
    //flamingo.velocityY = -18;
  //}
  if(keyDown("space") && flamingo.y === 261.6){
    flamingo.velocityY = -18;
  }

  flamingo.velocityY = flamingo.velocityY + 0.8;

  flamingo.collide(edges[3]);

 // console.log(flamingo.y);
  obstacle();
  //balloons();
  drawSprites();
}

function obstacle(){
  if (frameCount % 100 === 0) {
    var rand = Math.round(random(1,2));
    obstacles = createSprite(490,290,10, 10);
        switch(rand){
            case 1: obstacles.addImage(rockImg);
            break;
            case 2: obstacles.addImage(bombImg);
            break;
            default: break;
        }
    obstacles.scale = 0.9;
    obstacles.velocityX = -3;
    
    obstacles.lifetime = 300;
    
    obstacleGroup.add(obstacles);
  }
}