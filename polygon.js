class Polygon {
  constructor(x,y,r) {
    this.r = r;
    this.x=x;
    this.y=y;
    this.image = loadImage("polygon.png")
    this.body = Bodies.circle(this.x,this.y,this.r);
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle=this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    imageMode(CENTER);
    ellipseMode(CENTER)
    image(this.image, 0, 0,this.r*2,this.r*2);
    pop();
  }
};

