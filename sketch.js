
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbinOBJ = new Dustbin(1200,650)
	paperOBJ = new paper(200,450,40)
    groundObject = new Ground(width/2,670,width,20)

	Engine.run(engine);
  
}


function draw() {
  background(0);
  rectMode(CENTER);
  dustbinOBJ.display()
  paperOBJ.display()
  groundObject.display()
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperOBJ.body,paperOBJ.body.position,{x:85,y:-85})
	}
}



