var b1, b2, b3, wall, b1g, b2g, b3g, thickness, 
b1speed, b2speed, b3speed, 
b1weight, b2weight, b3weight, 
b1deformation, b2deformation, b3deformation, 
b1rating, b2rating, b3rating;

function setup() {
  createCanvas(1600,400);
  
  b1 = createSprite(200,100,15,15);  
  b2 = createSprite(200,300,15,15);
    
  }

function draw() {
  
  wall = createSprite(1500,200,10,300);

  background('black'); 
  
  b1speed = 60;
  b1weight = 32;
  b1.shapeColor = 'white';
  b1.velocityX = b1speed/4;
  b1deformation = 0.5 * b1weight * b1speed * b1speed / thickness*thickness*thickness;
  console.log(b1deformation);
   
  b2speed = 45;
  b2weight = 32;
  b2.shapeColor = 'white';
  b2.velocityX = b2speed/4;
  b2deformation = 0.5 * b2weight *b2speed * b2speed / thickness*thickness*thickness;
  console.log(b2deformation);

  wall.shapeColor = 'yellow';

  thickness = random(20,80);

  if(b1.x - wall.x <= wall.width/2 + b1.width/2 && (wall.x - b1.x <= wall.width/2 + b1.width/2 )){
    b1.velocityX = 0;
    b1test();
    }

  if(b2.x - wall.x <= wall.width/2 + b2.width/2 && (wall.x - b2.x <= wall.width/2 + b2.width/2 )){
     b2.velocityX = 0;
     b2test();
     }
  drawSprites();
 
  if(b1.x - wall.x <= wall.width/2 + b1.width/2 && (wall.x - b1.x <= wall.width/2 + b1.width/2 )){
    fill('white');
    text ('Bullet1 Rating: ' + b1rating, 25,25);
  }

  if(b2.x - wall.x <= wall.width/2 + b2.width/2 && (wall.x - b2.x <= wall.width/2 + b2.width/2 )){
    fill('white');
    text ('Bullet2 Rating: ' + b2rating, 25,50);
  }
   

}

function b1test(){
  if ((b1deformation > 180)){
    b1rating = 'Good'
    b1.shapeColor = 'green'
  }
  if(b1deformation < 180 && ( b1deformation > 100)){
    b1rating = 'Bad';
    b1.shapeColor = 'red';
  }   
}

function b2test(){
 if (b2deformation > 10){
    b2rating = 'Good'
    b2.shapeColor = 'green'
   }
   if(b2deformation < 10 && ( b2deformation > 20)){
    b2rating = 'Bad';
    b2.shapeColor = 'red';
  }
}

