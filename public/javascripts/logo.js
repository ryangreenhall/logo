var logo = {}

logo.turtle = function(position) {
  var that = {};
  var path = [{x: position.x, y: position.y}];

  var position = position;
  
  var pen = "down"
  var penWidth = 3;
  
  that.moveForward = function(units) {
    console.log("Moving forward " + units + " units");
    // Heading North -> dec y by units
    position.y = position.y - units;
    path.push({x: position.x, y: position.y, pen: pen, penWidth: penWidth});
  };
  
  that.moveBack = function(units) {
    console.log("Moving back " + units + " units");
    position.y = position.y + units;
    path.push({x: position.x, y: position.y, pen: pen, penWidth: penWidth});
  };
  
  that.penUp = function () {
    pen = "up";
  };
  
  that.penDown = function() {
    pen = "down";
  };
  
  that.penWidth = function(width) {
    penWidth = width;
  };
  
  that.asString = function() {
    return "posititon: " + position + "Paths: " + path.length + " Pen: " + pen;
  };
  
  that.draw = function(context) {
    
    var drawTurtle = function() {
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
    }
    
    // Only attempt to draw the path if we have been to row
    if (path.length > 1) {
      var startPos = path[0];
      // set the starting point
      context.beginPath(); 
      context.moveTo(startPos.x, startPos.y);
      
      for (var i in path) {
        var nextPath = path[i];
        context.lineWidth = nextPath.penWidth;
        
        if (nextPath.pen === "down") {
          context.lineTo(nextPath.x, nextPath.y);
        }
        if (nextPath.pen === "up") {
          context.moveTo(nextPath.x, nextPath.y);
        }
        
      }
      //context.strokeStyle = "#ff0000"; // line color
      context.stroke();
    }
    
    drawTurtle();
  };
  return that;
}