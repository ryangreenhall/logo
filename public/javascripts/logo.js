var logo = {}

logo.turtle = function(position) {
  var that = {};
  var position = position;
  
  that.moveForward = function(units) {
    console.log("Moving forward " + units + " units");
    // Heading North -> dec y by units
    position.y = position.y - units;
  };
  
  that.asString = function() {
    return position;
  };
  
  that.draw = function(context) {
    context.beginPath();  
    context.lineWidth = 1;
      
     
    context.moveTo(position.x,position.y);  
      
    var turtleHeight = 50;
    
    context.lineTo((300 - (turtleHeight/2)), (300 + (turtleHeight/2)));
    context.lineTo((300 + (turtleHeight/2)), (300 + (turtleHeight/2)));  
    context.lineTo(300,300);  
    context.fillStyle = "orange"; 

    context.fill();
    context.strokeStyle ="black";
    context.stroke();
  };
  return that;
}