class Canon{
    constructor(x,y,width,height,angle){
        this.x = x;
        this.y = y;
        this.width =width;
        this.height = height;
        this.angle = angle;

        this.baseImg = loadImage("./assets/cannonBase.png")
        this.canonImg = loadImage("./assets/canon.png")
    } 

display (){
    if(keyIsDown(RIGHT_ARROW)){
        this.angle = this.angle+1
    }

    if(keyIsDown(LEFT_ARROW)){
        this.angle = this.angle-1
    }
    push ()
    translate (this.x,this.y)
    rotate (this.angle)
    imageMode (CENTER)
    image(this.canonImg,0,0,this.width,this.height)

    pop ()
    image(this.baseImg,70,20,200,200);

}

}