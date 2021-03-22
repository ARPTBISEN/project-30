// Making constant for applying fysics.
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


//Making variables for the game and for this.........
var stand1,stand2,polygonImage,polygon;
var backgroundImage;
var slingshot;
var score=0;
var gameState = "onSling"

//Adding Images
function preload(){
   backgroundImage = loadImage("bg.png");
   polygonImage = loadImage("polygon.png")
}
function setup(){
    engine = Engine.create();
    world = engine.world;

    createCanvas(900,400);
    strokeWeight(2)
    stroke(15)

    
    //base for bocks we have to stay on that 
    //base1 
    stand1 = new Ground(380,300,270,10);
    //base2
    stand2 = new Ground(700,200,200,10);
    //base2
    stand3 = new Ground(451,393,900,15);

    //Here we are making block which stay on the base.
    // level one 
    block1 = new Block(280,275,30,40);
    block2 = new Block(310,275,30,40);
    block3 = new Block(340,275,30,40);
    block4 = new Block(370,275,30,40);
    block5 = new Block(400,275,30,40);
    block6 = new Block(430,275,30,40);
    block7 = new Block(460,275,30,40);
    block8 = new Block(490,275,30,40);
    
    //level two
    block9 = new Block(310,235,30,40);
    block10 = new Block(340,235,30,40);
    block11 = new Block(370,235,30,40);
    block12 = new Block(400,235,30,40);
    block13 = new Block(430,235,30,40);
    block14 = new Block(460,235,30,40);

    // level three 
    block15 = new Block(340,195,30,40);
    block16 = new Block(370,195,30,40);
    block17 = new Block(400,195,30,40);
    block18 = new Block(430,195,30,40);

    //level four
    block19 = new Block(370,155,30,40);
    block20 = new Block(400,155,30,40);

    //level five  
    block21 =new Block(385,115,30,40);

    //set two 
    //level one
    blocks1 = new Block(640,175,30,40);
    blocks2 = new Block(670,175,30,40);
    blocks3 = new Block(700,175,30,40);
    blocks4 = new Block(730,175,30,40);
    blocks5 = new Block(760,175,30,40);

    //level two
    blocks6 = new Block(670,135,30,40)
    blocks7 = new Block(700,135,30,40)
    blocks8 = new Block(730,135,30,40)
    
    //level three
    blocks9 = new Block(700,95,30,40);

    //Making new polygon
    polygon=Bodies.circle(50,200,20)
    World.add(world,polygon);

    //making slingShot which join the ball with string
    slingshot = new slingShot(this.polygon,{x:175,y:200});
}

function draw(){
    background(backgroundImage);

    // push();
    // textSize(18)
    // fill("red")
    // noStroke();
    // text("score-" + score,800,50)
    // pop();

    Engine.update(engine)

    //displaying the bases okay;
    stand1.display();
    stand2.display();
    stand3.display();
    strokeWeight(1.5)
    fill("green")
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();

    fill("white")
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();

    fill("orange")
    block15.display();
    block16.display();
    block17.display();
    block18.display();

    block19.display();
    block20.display();

    fill("red")
    block21.display();

    //set two 
    fill("skyblue")
    blocks1.display();
    blocks2.display();
    blocks3.display();
    blocks4.display();
    blocks5.display();

    fill("violet")
    blocks6.display();
    blocks7.display();
    blocks8.display();
    fill("grey")
    blocks9.display();

    
   
    
    fill("red")
    textSize(20)
    
    strokeWeight(3);    
    fill("white")
    text("Dragged the ball for hitting the blocks",250,30)
    
    imageMode(CENTER)
    image(polygonImage,polygon.position.x,polygon.position.y,50,50);
    slingshot.display();

}

function mouseDragged(){
    if (gameState!== "launched"){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
    }
}

function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}
function keyPressed(){
    if(keyCode === 32){
    slingshot.attach(polygon);
 }
}