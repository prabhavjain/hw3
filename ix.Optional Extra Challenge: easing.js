
var rate = 0.1;
 
	var x = 0;
	var y = 0;
	var targetx = 100;
	var targety = 100;


while(true) {
	
  background(220);
 
  targetx = mouseX;
  targety = mouseY;
  
  x = targetx*rate + x*(1-rate); // rate is 0.1, or 10% -- (1-rate) is 0.9, or 90%
  y = targety*rate + y*(1-rate);
  
  ellipse(x, y, 15, 15);
  
}
  
//For P5 enivornment 

var x = 0;
var y = 0;
var targetx = 100;
var targety = 100;

function setup() {
	createCanvas(400, 400);
}

function draw() {
	background(220);
	var rate = 0.1;


	x = targetx * rate + x * (1 - rate); // rate is 0.1, or 10% -- (1-rate) is 0.9, or 90%
	y = targety * rate + y * (1 - rate);

	ellipse(x, y, 15, 15);
}

function mouseMoved() {
	targetx = mouseX;
	targety = mouseY;
}
