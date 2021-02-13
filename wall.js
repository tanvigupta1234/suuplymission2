class Wall {
 
constructor(x,y,width,height){
  
  this.body=Bodies.rectangle(x,y,width,height);
  this.width=width;
  this.height=height;
  this.x=x;
  this.y=y;
  
  World.add(world,this.body);
  
}
  display(){
    
     fill("red");
    var pos = this.body.position
    rectMode(CENTER);
    rect(260,350,20,80);
    rect(140,350,20,80);
    rect(200,370,100,20);
       
    
  }
   
}