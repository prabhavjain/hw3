Drawing Refernce: http://massmoca.org/event/walldrawing17/

//Background lines
strokeWeight(1)
background("white")

for (var i = 3 ; i < width; i = i + 5) {
var half = width/2;
  
line(i,0,0,i);
line(i,width,width,i);
  
}

//Background canvas for other types lines
strokeWeight(0)
a = width/7 
rect(0, 0, a, height)
rect(a * 6, 0, a, height)

//Right side lines part-1
strokeWeight(1)
for (var z = 3 ; z < width; z = z + 5) {
var half = width/2;  
line(0,z,width/7,z);
  
}

//Right side lines part-2
for (var m = 3 ; m < width; m = m + 5+3) { 
a = width/7 //subtarcting element
line(width-a, m, width,m+a+10);
line(width-a + m,0, width, a+10-m);
  
}

//Overlapping rectangles 
strokeWeight(0)
rect(a , 0, a, height)
rect(a * 5, 0, a, height)
