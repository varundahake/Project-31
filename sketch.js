const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var divisions = [];
var divisionsHeight = 300;
var particles = [];
var plinkos = [];

function preload() {

}

function setup() {
  createCanvas(800,700);
  engine = Engine.create();
  createSprite(400, 200, 50, 50);


ground = new Ground(400,690,800,20);

for (var k = 0;  k <=innerWidth;  k = k + 80){
  divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
}
for (var j = 40; j <=innerWidth; j=j+50)
{
  plinkos.push(new Plinko(j, 75));
}

for(var j = 15; j <=width+10; j=j+50) 
{
  plinkos.push(new Plinko(j,175));
}

//for();

Engine.run(engine);
}

function draw() {
  background(255,255,255);  
  drawSprites();

for (var n = 0; n<divisions.length; n++){
  divisions[n].display();
  }

  if (frameCount %60 === 0){
    particles.push(new Particle(random(width/2-30, width/2+30), 10, 10));
  }

  for(var j = 0; j < particles.length; j++){
    particles[j].display();
  }
  for (var k = 0; k< divisions.length; k++) {
    divisions[k].display();
  }

ground.display();

}