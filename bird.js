class bird{
    constructor(x, y){
        var option={
        restitution:1    
        }
this.body=Bodies.rectangle(x, y, 50,50, option) 
World.add(world,this.body )
this.width=50
this.height=50
    }
display(){
var angle= this.body.angle
var pos=this.body.position
pos.x= mouseX
pos.y=mouseY
push ()
fill ("red")
translate (pos.x, pos.y)
rectMode(CENTER)
rotate(angle)
    rect(0, 0,this.width, this.height )
    pop ()

}
}
