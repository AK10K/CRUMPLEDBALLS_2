class Dustbin{
    constructor( ) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        
        
        //this.image = loadImage("sprites/base.png");
        //World.add(world, this.body);
        this.basket1 = Bodies.rectangle(width/2, 650, 150, 30 , {isStatic:true} );
	    World.add(world,this.basket1 );
	    this.basket2 = Bodies.rectangle(width/2-75, 640, 10, 70 , {isStatic:true} );
	    World.add(world,this.basket2 );
	    this.basket3 = Bodies.rectangle(width/2+75, 640, 10, 70 , {isStatic:true} );
	    World.add(world,this.basket3 );
      }
      display(){
       rectMode(CENTER)
        rect(this.basket1.position.x,this.basket1.position.y,150,30)
	    rect(this.basket2.position.x,this.basket2.position.y,10,70)
	    rect(this.basket3.position.x,this.basket3.position.y,10,70)
      }
} 
