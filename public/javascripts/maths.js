var maths = {};

maths.rotate = function(point, origin, degrees) {
  x = point.x
  y = point.y 
    
  originX = origin.x;
  originY = origin.y;
  
  newX = originX + ((x - originX) * Math.cos(degrees)) + ((y - originY) * Math.sin(degrees));
  newY = originY + ((y - originY) * Math.cos(degrees)) - ((x - originX) * Math.sin(degrees));
  
  return {x: newX, y: newY};
}

