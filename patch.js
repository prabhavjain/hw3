function prabhav(x, y) {
  fill('red');
  stroke(51);
  rect(x, y, 100, 100);
  
  // Prabhav's Code
  noStroke()
  fill(255, 204, 0);
  ellipse(x+50,y+50,50,50);
  
  noFill();
  stroke(0);
  var circle = 0;
  while (circle < 50) {
    ellipse(x+50,y+50,circle,circle)
    circle = circle + 5;
  } 
  
  stroke(0);
  var lines = 0;
  while (lines < 50) {
    line(x+lines, y, x, y+lines);
    lines = lines + 5;
  } 
  
  stroke(0);
  while (lines < 100) {
    line(x+lines, y, x+100, y+100-lines);
    lines = lines + 5;
    
  }
  
  stroke(0);
  var lines1 = 50
  while (lines1 < 100) {
    line(x, y+lines1, x+100-lines1, y+100);
    lines1 = lines1 + 5;
  }
    
  stroke(0);
  while (lines1 > 50) {
    line(x+100, y+lines1, x+lines1, y+100);
    lines1 = lines1 - 5;
    
  }
}

background(255);
prabhav(0, 0); // draw patch at upper-left

prabhav(width-100, height-100); // draw patch at lower-right
