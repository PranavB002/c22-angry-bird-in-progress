const Engine= Matter.Engine
const World= Matter.World
const Bodies= Matter.Bodies
const Body = Matter.Body
var box1
var engine, world
var ground1, ball
var box2, box3, box4, Box5
var Pig1, Pig2
var Log1, Log2
var Log3, Log4
var Bird1


function setup() {
  createCanvas(1200,600);
 // createSprite(400, 200, 50, 50);
 engine=Engine.create()
 world=engine.world


 ground1= new ground(600, 580, 1200, 10)

box1=new box(800, 570, 50, 50)
box2=new box (1000,570,50, 50  )

Pig1= new pig(900, 570)
Log1= new log(900,565, 300, PI/2 )

box3= new box(800, 500, 50, 50)
box4= new box(1000, 500, 50, 50)

Pig2= new pig(900, 500)

Log2= new log(900, 450, 300, PI/2)

Box5= new box(900, 400, 50, 50)

Log3= new log (800, 400, 150, PI/7)
Log4= new log(1000, 400, 150, -PI/7)

Bird1= new bird(100, 300)
}

function draw() {
  background(0); 
  Engine.update(engine )
  ground1.display()
  box1.display()
  box2.display()
  Pig1.display()
  Log1.display()
  box3.display()
  box4.display()
  Pig2.display()
  Log2.display()
  Box5.display()
  Log3.display()
  Log4.display()
  Bird1.display()
  
}