
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var angle=60;

var ground;
var b1,b2,b3,b4;
var top_wall;
//var ball;

var btn1;
var btn2;
function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   
  var ground_options ={
    isStatic: true
  };
 
  ground= Bodies.rectangle(200,390,400,20,ground_options);

  World.add(world, ground);
 

  b1 = new Ball(200,200,10);
 b2 = new Ball(150,100,10);
  b3 = new Ball(250,100,10);
  b4 = new Ball(350,100,10);

  
  
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  

b1.show();
b2.show();
b3.show();
b4.show();
rect(ground.position.x,ground.position.y,400,20);
   
  Engine.update(engine);
}


  


