class Particle{
    constructor(x, y, z){
        var options = {
            restitution:0.4
        }
        this.r = r;

        this.body = Bodies.circle(x, y, this.r, options);
        this.color = color(randon(0,255), random(0,255), random(0,255));
        World.add(world, this.body);
    }
    display(){
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        //imageMode(CENTER);
        noStroke();
        fill(this.color);
        ellipseMode(RADIANS);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}