c = 0;
l = 0;
r = 0;
u = 0;
d = 0;
v = 0;

velocity = 0;

demo.state1 = function(){};
demo.state1.prototype = {
  preload: function(){
    // Load images called once
    game.load.image('xwing', 'images/xwing.png');
  },
  create: function(){
    // Set initial values of game state
    game.stage.backgroundColor = '#ccff33';
    console.log('state1');
    addChangeStateEventListeners();

    xwing = game.add.sprite(50, 50, 'xwing');
    xwing.scale.setTo(0.1, 0.1);
    xwing.anchor.setTo(0.5, 0.5);
  },
  update: function(){
    // Updates the frame 60fps
    
    var h = document.getElementById('fc')
    c++;
    h.innerHTML = "Frame Count: " + c;

    if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
      var e = document.getElementById('l')
      l++;
      e.innerHTML = "Left: " + l;

      //console.log(xwing.angle);
      //xwing.angle = (360 + xwing.angle - 5) % 360;
      //console.log(xwing.angle);

      xwing.angle -= 0.5;
    }
    if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
      var e = document.getElementById('r')
      r++;
      e.innerHTML = "Right: " + r;
      xwing.angle += 0.5;
      
    }
    if(game.input.keyboard.isDown(Phaser.Keyboard.UP)){
      var e = document.getElementById('u')
      u++;
      e.innerHTML = "Up: " + u;

      e = document.getElementById('v')
      v = v + 0.1;
      e.innerHTML = "Velocity: " + v;      
    }
    if(game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
      var e = document.getElementById('d')
      d++;
      e.innerHTML = "Down: " + d;

      e = document.getElementById('v')      
      if( v > 0)
      {
        v = v - 0.1;
      }      
      if( v < 0 ){
          v = 0;
      }
      e.innerHTML = "Velocity: " + v;      
    }



      var vy = -v * Math.cos( 2 * Math.PI * (xwing.angle/360) );  
      var vx = v * Math.sin(  2 * Math.PI * (xwing.angle/360) );  

      var p = {
        angle: xwing.angle,
        cos: Math.cos(  2 * Math.PI * (xwing.angle/360) ),        
        sin: Math.sin(  2 * Math.PI * (xwing.angle/360) ),        
        vx: vx,
        vy: vy
      }

      console.log(p);      


      xwing.y += vy;
      if(xwing.y < 0)
        xwing.y = 0;

      if(xwing.y > 400)
        xwing.y = 400;

      xwing.x += vx;
      if(xwing.x < 0)
        xwing.x = 0;

      if(xwing.x > 600)
        xwing.x = 600;


    var x = document.getElementById('x')      
    x.innerHTML = "X Pos: " + xwing.x;
    var y = document.getElementById('y')      
    y.innerHTML = "Y Pos: " + xwing.y;
  }
}