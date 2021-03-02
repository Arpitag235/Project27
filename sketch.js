const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var world, engine;
var pendulum1, pendulum2, pendulum3, pendulum4, pendulum5;
var sling1, sling2, sling3, sling4, sling5;
var roof;

function setup() {
createCanvas(1140,600 );
engine = Engine.create();
world = engine.world;

pendulum1 = new Pendulum(460, 450, "#00b0ff");
pendulum2 = new Pendulum(520, 450, "#00b0ff");
pendulum3 = new Pendulum(580, 450, "#00b0ff");
pendulum4 = new Pendulum(640, 450, "#00b0ff");
pendulum5 = new Pendulum(700, 450, "#00b0ff");

sling1 = new Sling(pendulum1.body, { x: 460, y: 200 });
sling2 = new Sling(pendulum2.body, { x: 520, y: 200 });
sling3 = new Sling(pendulum3.body, { x: 580, y: 200 });
sling4 = new Sling(pendulum4.body, { x: 640, y: 200 });
sling5 = new Sling(pendulum5.body, { x: 700, y: 200 });

roof = new Ground(575,200,400,20);

}

function draw() {
background(0);
Engine.update(engine);
pendulum1.display();
pendulum2.display();
pendulum3.display();
pendulum4.display();
pendulum5.display();
sling1.display();
sling2.display();
sling3.display();
sling4.display();
sling5.display();
roof.display();
}

function mouseDragged() {
Matter.Body.setPosition(pendulum1.body, { x: mouseX, y: mouseY });
}
