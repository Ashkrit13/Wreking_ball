class Ball{
    constructor(x, y, width, height) {
    var options = {
    frictionAir : 0.005,
    density :1.0
    //isStatic:true
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    }
    display(){
    
      var angle = this.body.angle;
    var pos= this.body.position;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    strokeWeight(4);
    fill ("brown");
    ellipse(0,0, this.width, this.height);
    pop();
      }
  }