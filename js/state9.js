demo.state9 = function(){};
demo.state9.prototype = {
  preload: function(){
   
  },
  create: function(){
   game.stage.backgroundColor = '#6b00b3';
   console.log('state9');
   addChangeStateEventListeners();
  },
  update: function(){
   
  }
}