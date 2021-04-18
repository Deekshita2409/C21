var car, wall;
var speed, weight;


function setup() {
  createCanvas(1600,400);
  car=createSprite(50, 200, 50, 50);

  wall=createSprite(1500,200,60,height/2);

  speed=random(55,90);
  weight=random(400,1500);
}

function draw() {
  background(255,255,255);  
  car.velocityX = speed;


  if(car.x - wall.x <wall.width/2 + car.width/2
    && wall.x - car.x < wall.width/2 +car.width/2
    && car.y - wall.y < wall.width/2 + car.width/2
    && wall.y -car.y<wall.width/2 + car.width/2)
  {
    car.shapeColor="red";
    wall.shapeColor="red";
  }

  //else condition for no collision
  else{
    car.shapeColor= "green";
    wall.shapeColor="green";
  }
  drawSprites();
}