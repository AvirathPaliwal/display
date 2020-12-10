class Plinko{
    constructor(x,y,radius){
        var position ={
            isStatic:true
        }
      this.body = Bodies.circle(x,y,radius,position)
      this.r=radius
      World.add(world,this.body)  
    }
    display(){
        var pos=this.body.position
        ellipseMode(RADIUS)
        ellipse(pos.x,pos.y,this.r,this.r)       
    }
}