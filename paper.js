class Paper{
	constructor(x,y,r)
	{
		var options={
			restitution:0.3,
			friction:5,
			density:1
		}
		this.x=x;
		this.y=y;
		this.r=r;

        var options = {
            isStatic : false,
            restitution : 0.3,
            friction : 0,
            density : 1.2
        }

        Paper.addImage("paper.png");
        
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);
        

	}
	display()
	{
			var paperpos=this.body.position;		
			push()
			translate(paperpos.x, paperpos.y);

			ellipse(0,0,this.r, this.r);
			pop()
	}

}