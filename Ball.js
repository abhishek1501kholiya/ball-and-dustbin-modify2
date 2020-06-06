class Ball{
    constructor(x,y,r){
        var options = {
            'isStatic' :false,
           'restitution':0.3,
           ' friction':0.5,
            'density':1.2
        }
       
        this.body = Bodies.circle(x,y,r,options);
        this.r = r;
        this.image = loadImage("paper.png");
        World.add(world,this.body);
        //this.x = x;
        //this.y = y;
     

    }
    show(){
        const pos = this.body.position;
        const angle = this.body.angle;
        // image(img,this.x,this.y);
        push()
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.r, this.r);
        fill(255);
        ellipseMode(CENTER);
        ellipse(0,0,this.r,this.r);
        pop();
    }
    
}
  //  class Ball{
    //constructor(x,y,radius){
        //this.body = Bodies.rectangle(x,y,radius,options);
        //this.x = x;
        //this.y = y;
        //this.radius = radius;
       //this.width = width;
      // this.height = height;
    //    World.add(world,this.body);
     
     
        
        
    
    //}
       // show(){
         //   var pos = this.body.position;
           // var angle = this.body.angle;
           // push()
            //translate(pos.x, pos.y);
            //rotate(angle);
        //  rectMode(CENTER);
        //ellipseMode(CENTER);
          //fill("white");
         //ellipse(pos.x,pos.y,this.radius,this.radius);
          // rect(pos.x,pos.y,this.width,this.height); 
           //pop()
        //}
    //}
    

