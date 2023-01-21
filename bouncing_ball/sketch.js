function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
}

let directionX = 1;
let directionY = 1;

let speed = 5;
const radius = 50;
const margin = radius/2;
let x = margin;
let y = margin;

function draw() {
	background(0);

	noStroke();
	fill(255, 0, 0);
	circle(x, y, radius);

	x = x + directionX*speed;
	y = y + directionY*speed;

	if( (x < margin) || (x > width - margin)){
		directionX *= -1;
	}

	if ((y < margin) || (y > height - margin)) {
	 	directionY *= -1;
	}
}

function mousePressed(){
	speed += 5;
	
	if (speed > 25) {
		speed = 0;
	}
}
