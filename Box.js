class Box
{
    constructor(x,y,width,height)
    {
        var options = {
            restitution : 0.6,
            friction :1.0,
            density :0.3
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height; 
        World.add(world,this.body);

    }

    display()
    {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("green");
        fill("white");
        rect(0,0,this.width,this.height);
        pop()

    }
}