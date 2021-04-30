
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin,paper

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

 
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	packageBody = Bodies.circle(50 , 200 , 20 , {restitution:0.6,density:1, isStatic:false});
	World.add(world, packageBody);
	ground = Bodies.rectangle(width/2, 660, width, 20 , {isStatic:true} );
	World.add(world, ground);
	
	Engine.run(engine);
  dustbin = new Dustbin()
  paper= new Paper()
}


function draw() {
	rectMode(CENTER);
	background(255);
	
	drawSprites();
	
	rect(ground.position.x,ground.position.y,width,20)

//imageMode(RADIUS)
//image(paper,packageBody.position.x,packageBody.position.y,20,20)
 dustbin.display()
 paper.display()
}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
	   // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
   Matter.Body.applyForce(paper.body,paper.body.position,{x:30,y:-30})
	   
	 }
   }

