demo.state1 = function(){};
demo.state1.prototype = {
  preload: function(){
    // Load images called once

  },
  create: function(){
    // Set initial values of game state
    game.stage.backgroundColor = '#ccff33';
    console.log('state1');
    addChangeStateEventListeners();
  },
  update: function(){
    // Updates the frame 60fps
  }
}