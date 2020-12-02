const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup() {
    
    createCanvas(windowWidth/2,windowHeight/2);
    engine = Engine.create();
    world = engine.world;

    bob1 = new Pendulum(windowWidth/2-190,windowHeight/2-800);
    bob2 = new Pendulum(windowWidth/2-270,windowHeight/2-800);
    bob3 = new Pendulum(windowWidth/2-360,windowHeight/2-800);
    bob4 = new Pendulum(windowWidth/2-450,windowHeight/2-800);
    bob5 = new Pendulum(windowWidth/2-540,windowHeight/2-800);

    sling1 = new Sling(bob1.body,{x:windowWidth/2-190, y: windowHeight/2-200});

}

function draw() {

    background("black");
    Engine.update(engine);

    bob1.display();
    bob2.display();
    bob3.display();
    bob4.display();
    bob5.display();

    sling1.display();

}