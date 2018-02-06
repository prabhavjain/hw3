//link to drawing :http://massmoca.org/event/walldrawing11/

for (var i = 0; i <= height; i = i + 10) {
  var startX = i;
  var startY = 0;
  var endX = i;
  var endY = height;
  line(startX, startY, endX, endY);
}

for (var i = 0; i <= height; i = i + 10) {
  var startX = 0;
  var startY = i;
  var endX = height;
  var endY = i;
  line(startX, startY, endX, endY);
}

noFill();
for (var i = 0; i <= height/2; i = i + 10) {
  x1 = height/2 
  y1 = 0 + i
  x2 = 0 + i
  y2 = height/2
  x3 = height/2
  y3 = height - i
  x4 = height - i
  y4 = height/2
  quad(x1,y1,x2,y2,x3,y3,x4,y4)
}

for (var i = 0; i <= height/2; i = i + 10) {
  x1 = height/2 
  y1 = 0 - i
  x2 = 0 - i
  y2 = height/2
  x3 = height/2
  y3 = height + i
  x4 = height + i
  y4 = height/2
  quad(x1,y1,x2,y2,x3,y3,x4,y4)
}
