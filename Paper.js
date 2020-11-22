class Paper{
    constructor(x,y,width){
        var options = {
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        };
        this.body = Bodies.circle(x,y,width,options);
        this.radius = width;
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        fill("white");
        ellipse(pos.x,pos.y,this.radius*2);
    }
}