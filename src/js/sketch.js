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

    sling1 = new Sling(bob1.body,{x:windowWidth/2-640, y: windowHeight/2-500});
    sling2 = new Sling(bob2.body,{x:windowWidth/2-730, y: windowHeight/2-500});
    sling3 = new Sling(bob3.body,{x:windowWidth/2-820, y: windowHeight/2-500});
    sling4 = new Sling(bob4.body,{x:windowWidth/2-910, y: windowHeight/2-500});
    sling5 = new Sling(bob5.body,{x:windowWidth/2-1000, y: windowHeight/2-500});

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
    sling2.display();
    sling3.display();
    sling4.display();
    sling5.display();

}

function mouseDragged() {

        Matter.Body.setPosition(bob5.body, {x: mouseX , y: mouseY});

}
