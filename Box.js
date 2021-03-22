class Block{
  constructor(x,y,width,height){
    var options = {
      isStatic:false,
      restitution:0.5,
      friction:0.1234,
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world,this.body);
    this.Visibility=255;
  }
  display(){
    if(this.body.speed<5){
     var angle=this.body.angle;
     var pos=this.body.position;
     push();
     rectMode(CENTER);
     rotate(angle);
     translate(pos.x,pos.y);
     rect(0,0,this.width,this.height);
     pop();
    }else{
      World.remove(world,this.body)
      push();
      this.Visibility = this.Visibility - 3;
      tint(255,this.Visibility);
      rect(999,999,this.width,this.height);
      pop()
    }
  }
}