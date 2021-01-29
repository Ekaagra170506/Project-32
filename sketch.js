const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var polygonimg,polygon,score=0,bg;

function preload(){
    polygonimg = loadImage("polygon.png")
    getBackgroundImg();
}

function setup() {
	createCanvas(900, 400);

	engine = Engine.create();
    world = engine.world;
    
    ground=new Ground(450,height,900,40)

    //1st pyramid
    baseBlock=new Ground(390,300,250,10);
    //layer1
    block1=new Box(300,275,30,40);
    block2=new Box(330,275,30,40);
    block3=new Box(360,275,30,40);
    block4=new Box(390,275,30,40);
    block5=new Box(420,275,30,40);
    block6=new Box(450,275,30,40);
    block7=new Box(480,275,30,40);
    //layer2
    block8=new Box(330,235,30,40);
    block9=new Box(360,235,30,40);
    block10=new Box(390,235,30,40);
    block11=new Box(420,235,30,40);
    block12=new Box(450,235,30,40);
    //layer3
    block13=new Box(360,195,30,40);
    block14=new Box(390,195,30,40);
    block15=new Box(420,195,30,40);
    //top
    block16=new Box(390,155,30,40);

    //2nd pyramid
    baseBlock2=new Ground(700,195,200,10);
    //layer1
    block17=new Box(640,170,30,40);
    block18=new Box(670,170,30,40);
    block19=new Box(700,170,30,40);
    block20=new Box(730,170,30,40);
    block21=new Box(760,170,30,40);
    //layer2
    block22=new Box(670,120,30,40);
    block23=new Box(700,120,30,40);
    block24=new Box(730,120,30,40);
    //top
    block25=new Box(700,80,30,40);
  
    //pyramid end
    polygon = new Polygon(50,200,20);
    World.add(world,polygon);

    slingshot =new Slingshot(polygon.body,{x:100,y:200});
    text("SCORE: "+score,740,40)


    Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
 // background(40,40,40);
  if(bg==1){
    background(193,225,236)
  }
  else
  {
    background(40,40,40)
  }

  ground.display();

  baseBlock.display();
  baseBlock2.display();
  
  fill(135,206,235)
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink")
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill(0,191,255)
  block13.display();
  block14.display();
  block15.display();
  fill("grey")
  block16.display();
  fill(135,206,235)
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  fill(0,191,255)
  block22.display();
  block23.display();
  block24.display();
  fill("pink")
  block25.display();

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();
  block17.score();
  block18.score();
  block19.score();
  block20.score();
  block21.score();
  block22.score();
  block23.score();
  block24.score();
  block25.score();

  
  polygon.display();
  slingshot.display();
  if(bg==2){
  fill("white")
  }else{
    fill("black")
  }
  textSize(22)
  text("Drag the Polygon to destroy the blocks",240,30);
  textSize(12)
  text("Press Space to get a second Chance to Play!!",620,330);
  text("SCORE: "+score,740,40)

  drawSprites();
 
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
	if(keyCode=== 32){
    Matter.Body.setPosition(polygon.body,{x:100,y:200});
    slingshot.attach(polygon.body);
	}
}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  if(hour>=06 && hour<=18){
      bg= 1
  }
  else{
      bg= 2
  }
}