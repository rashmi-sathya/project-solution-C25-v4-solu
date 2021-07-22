class Ball
{
  constructor(x, y, r) 
  {
    let options = {
        restitution: 0.95,
    };
  //ball = Bodies.circle(200,200,20,ball_options);
    
    this.body = Bodies.circle(x, y, r, options);
    this.r = r;
    World.add(world, this.body);
  }

  show() {
    var pos = this.body.position;
   

   ellipse(pos.x,pos.y,this.r);


  }}