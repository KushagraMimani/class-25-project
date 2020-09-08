class Paper { 
    constructor(x, y, r) {
      var options = {
          'restitution':0,
          'friction':0.3,
          'density':1.2
      }
      this.body = Bodies.circle(x, y, r/2, options);
      this.radius = r;
      this.image = loadImage("sprites/paper.png");
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      imageMode(CENTER);
      
      image(this.image,0, 0, 50, 50);
      pop();
    }
  };