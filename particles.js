class Particles{


    constructor(x,y,v,a){
        this.position = new Vector(x,y);
        this.speed = v;
        this.direction = a;
    }

    update(){
        let v = new Vector(0,0);
        v.setLength(this.speed);
        v.setAngle(this.direction);
        this.position.addTo(v)
    }
}