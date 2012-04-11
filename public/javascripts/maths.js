var rotate = function(point, origin) {
  x = point.x
  y = point.y 
  
  console.log(x);
  console.log(y);
  
  originX = origin.x;
  originY = origin.y;
  
  newX = originX + ((x - originX) * Math.cos(90)) - ((y - originY) * Math.sin(90));
  newY = originY + ((y - originY) * Math.cos(90)) - ((x - originX) * Math.sin(90));
  
  return {x: newX, y: newY};
}