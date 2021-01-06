class dustbin
{
    constructor(x,y,width,height,angle)
    {
        var option={
            isStatic:true
        }
        this.dustbinObject=Bodies.rectangle(x,y,width,height,option);
        this.width=width;
        this.height=height;
        World.add(world,this.dustbinObject);
    }

    display()
    {
       
        rectMode(CENTER);
        fill(255);
        noStroke();
        rect(this.dustbinObject.position.x,this.dustbinObject.position.y,this.width,this.height);

        
    }
}
