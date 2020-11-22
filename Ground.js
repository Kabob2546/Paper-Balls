class Ground{
    constructor(){
        var options = {
            'isStatic' : true
        }
        this.body = Bodies.rectangle(400,700,800,20,options);
        World.add(world,this.body);
    }
    display(){
        rectMode(CENTER);
        fill("yellow");
        rect(400,700,800,20);
    }
}