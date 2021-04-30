class Paper{
    constructor() {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(50, 50, 20,  options);
        this.width = width;
        this.height = height;
        this.image = loadImage("paper.png");
        World.add(world, this.body);
      }
      display(){
        
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, 20, 20);
        
      }
} 
