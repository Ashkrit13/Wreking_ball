const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball, box, ground;
var rope

function preload(){
    
}

function setup() {
    createCanvas(900,900);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(450,850,900,20);
    ball = new Ball(250,200,100,100);
    rope = new Rope(ball.body,{x:400,y:100});
    box = new Box(600,845,50,50);
    box2 = new Box(600,845,50,50);
    box3 = new Box(600,845,50,50);
    box4 = new Box(600,845,50,50);
    box5 = new Box(600,845,50,50);
    box6 = new Box(600,845,50,50);
    box7 = new Box(600,845,50,50);
    box8 = new Box(600,845,50,50);
    box9 = new Box(600,845,50,50);
    box10 = new Box(600,845,50,50);
}
function draw() {
    background(56,44,44);
    Engine.update(engine);
    ground.display();
    ball.display();
    rope.display();
    box.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x:mouseX, y:mouseY});
}