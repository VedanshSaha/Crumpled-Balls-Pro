class paper
{
    constructor(x,y,r)
    {
        var options=
        {
            'restitution':0.3,
            'isStatic':false,
            'friction':0,
            'density':1.2,
            'friction-air':0.2,
            
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(x,y,this.r,options);
        World.add(world,this.body);
        this.image = loadImage("lol.png");
        this.size = 50;
        
    }

    display()
    {
        var pos=this.body.position;
        push();
        fill("pink");
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.size+50, this.size+30);
        pop();
    }
}