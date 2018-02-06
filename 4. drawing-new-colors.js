function setup() { 
  createCanvas(400, 400);
} 

var diameter = 10;

function draw() { 
  if (mouseIsPressed) {
    ellipse(mouseX, mouseY, diameter);
  }
}

function keyPressed() {
  print(key);
  if (key == 'R') {
    fill(255, 0, 0);
  } else if (key == 'G') {
    fill(0, 255, 0);
  } else if (key == 'B') {
    fill(0, 0, 255); 
  } //adding Orange
	  else if (key == 'O') {
    fill(255, 165, 0); 
		//adding Yellow	
  } else if (key == 'Y') {
    fill(255, 255, 0); 
  } //adding Magenta
	  else if (key == 'M') {
    fill(255, 0, 255); 
  }
}
