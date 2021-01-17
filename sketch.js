
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 createCanvas(400, 400);

  var message = "This is a message";
 console.log(message)
  
  monkey = createSprite(50,160,20,50);
  monkey.addAnimation("running", monkey_running);
 
  

  monkey.scale = 0.1;
  
  ground = createSprite(200,380,400,20);

obstaclesGroup=new Group()
bananaGroup=new Group()  
}


function draw() {

  background(180);
  //displaying score
  text("Score: "+ score, 500,50);
   if (ground.x < 0){
      ground.x = ground.width/2;
    }
    
    //jump when the space key is pressed
    if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
       
       
  
    }
   monkey.collide(ground)
    //add gravity
  monkey.velocityY = monkey.velocityY + 0.8
  spawnbanana()
  spawnObstacles()
  drawSprites()
  
}

function spawnbanana() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    banana= createSprite(400,120,40,10);
    banana.y = Math.round(random(80,120));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
   
    
    //add each cloud to the group
    bananaGroup.add(banana);
  }
}
function spawnObstacles(){
 if (frameCount % 300 === 0){
   var obstacle = createSprite(400,360,10,40);
   obstacle.velocityX = -(6 + score/100);
   
    //generate random obstacles
   obstacle.addImage(obstacleImage)
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.1
    obstacle.lifetime = 300;
   
   //add each obstacle to the group
    obstaclesGroup.add(obstacle);
 }
}






