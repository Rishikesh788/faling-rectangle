const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var myengine,myworld,ground,ball;
var box1,box2;






function setup() {
  createCanvas(800,400);
engine = Engine.create();
world = engine.world;
var ground_option = {isStatic : true}
ground = Bodies.rectangle(400,380,800,20,ground_option);
World.add(world,ground);
console.log(ground);
box1 = new Box(300,170,50,50);
box2 = new Box(280,100,30,100);

}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER)
rect(ground.position.x,ground.position.y,800,20);
box1.display();
box2.display();
 
}