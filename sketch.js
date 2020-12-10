const Engine = Matter.Engine
 const World= Matter.World
 const Bodies = Matter.Bodies

 // ground
 var ground

 //division
 var division,division2,division3,division4,division5,division6,division7
 
 //plinko
 var plinko

var particle

function setup() {
  createCanvas(600,700);
  engine = Engine.create()
    world = engine.world;
    var particle=[];
   //ground
  ground = new Ground(600,670,1300,20);

  //division
  division = new Division(5,537,10,250);
  division2 = new Division(100,537,10,250);
  division3 = new Division(200,537,10,250);
  division4 = new Division(300,537,10,250);
  division5 = new Division(400,537,10,250);
  division6 = new Division(500,537,10,250);
  division7 = new Division(595,537,10,250);

  //plinko
  plinko = new Plinko(300,100,10,10);
   particle = new Particle(200,50,10,10);
}

function draw() {
  background(155); 
  Engine.update(engine); 
 
  // ground
  fill("green")
  ground.display();
  //division
  fill("black")
  division.display()
  division2.display() 
  division3.display() 
  division4.display() 
  division5.display() 
  division6.display() 
  division7.display()
  //plinko
  plinko.display()
  particle.display()
}