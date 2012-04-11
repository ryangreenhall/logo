var logo = {}

logo.turtle = function(position) {
  var that = {};
  var position = position;
  
  // maintain a collection of points that the turtle has been.
  
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
    
    var turtleHeight = 50;
    
    context.moveTo(position.x,position.y);  
    context.lineTo((position.x - (turtleHeight/2)), (position.y + (turtleHeight/2)));
    context.lineTo((position.x + (turtleHeight/2)), (position.y + (turtleHeight/2)));  
    context.lineTo(position.x, position.y);  
    context.fillStyle = "orange"; 

    context.fill();
    context.strokeStyle ="black";
    context.stroke();
  };
  return that;
}