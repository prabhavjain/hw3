function setup() { 
  createCanvas(400, 400);
} 

var diameter = 10;

function draw() { 
  if (mouseIsPressed)
	print(key); {
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
  }
	else if (key == 'E') {
		noStroke();
		diameter = 30;
    fill(255, 255, 255); 
  }
}
