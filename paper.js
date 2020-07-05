class Paper {
    constructor(x,y) {

        var options1 = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body = Bodies.circle(x,y,20, options1);
        this.width=20;
        this.height= 20;

        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y)
        rotate(angle);
ellipseMode(RADIUS);
       fill(255);
        ellipse(0,0,this.width,this.height);
        pop();
    }
};