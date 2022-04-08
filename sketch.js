const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;
var backImg;
var tower,towerImg;
var canonBodie;
var angle = 20;
var cannonball

function preload() {
 backImg = loadImage("./assets/background.gif");
 towerImg = loadImage("./assets/tower.png");
}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
 options={
 isStatic:true
 }

 towerOptions={
isStatic:true
 }
 
 ground= Bodies.rectangle(0,height-1, width*2,1,options);
 World.add(world,ground);
 
 tower = Bodies.rectangle(150,350,150,300,towerOptions);
 World.add(world,tower);

 canonBodie = new Canon(180,110,130,100,angle)

 cannonball = new CannonBall(canonBodie.x,canonBodie.y) 

}

function draw() {
    image(backImg,0,0,1200,600);
  Engine.update(engine);
 
 rect(ground.position.x, ground.position.y,width*2,1);
 push ()
 imageMode (CENTER)
 image(towerImg,tower.position.x,tower.position.y,150,300);
   pop ()
   canonBodie.display()
   cannonball.draw()
   
}

 function keyReleased(){
  if(keyCode == 32){
    cannonball.shoot()

  }
 }
