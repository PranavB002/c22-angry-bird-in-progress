class log{
    constructor(x, y, height, angle){
        var option={
        restitution:1, 
        friction:1  
        }
this.body=Bodies.rectangle(x, y, 20, height, option) 
World.add(world,this.body )
this.width=20
this.height=height
Matter.Body.setAngle(this.body, angle)
    }
display(){
var angle= this.body.angle
var pos=this.body.position
push ()
fill ("yellow")

translate (pos.x, pos.y)
rectMode(CENTER)
rotate(angle)
    rect(0, 0,this.width, this.height )
    pop ()

}
}
