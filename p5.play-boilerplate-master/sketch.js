var mr
var fr


function setup() {
  createCanvas(800,400);
  fr = createSprite(200, 200, 50, 80);
  mr = createSprite(400,200,80,30);
fr.shapeColor = "purple"
mr.shapeColor = "purple"
fr.velocityX = 10
mr.velocityX = -10
}

function draw() {
  background(255,255,255);  
 // mr.y = World.mouseY
  //mr.x = World.mouseX
  
  mr.debug = true   
  fr.debug = true  

  if(mr.x - fr.x < mr.width/2 + fr.width/2 &&
    fr.x - mr.x < mr.width/2 + fr.width/2 && 
    mr.y - fr.y < mr.height/2 + fr.height/2 &&
    fr.y - mr.y < mr.height/2 + fr.height/2){
    fr.shapeColor = "pink"
    mr.shapeColor = "pink"
    
  }
else{
fr.shapeColor = "purple"
mr.shapeColor = "purple"
}
if(mr.x - fr.x < mr.width/2 + fr.width/2 &&
  fr.x - mr.x < mr.width/2 + fr.width/2 ){
    fr.velocityX = fr.velocityX*(-1)
   mr.velocityX = mr.velocityX*(-1)
  }


  
  drawSprites();
}
