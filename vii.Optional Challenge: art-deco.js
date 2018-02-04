 for (var i = 10; i < height; i = i + w +10) {
    s = width-60 //removing the spacing between the squares
    w = s/5 //diving the remainder for correct size of the squares
  
  var startX = i;
  var startY = height/2.5; //dividing the height into 5 parts to get the correct y point
  rect(startX, startY, w, w);// Main square
  
  for (var a= 8 ; a <= w/2 ; a = a +8)// internal squares 
  rect (startX +a, startY+a, w-a-a, w-a-a) //loop counter gets subtratced twice to get the correct length of the squares 
            
}
