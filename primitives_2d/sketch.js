function setup() {
	createCanvas(400, 400);
}

function draw() {
	background(255, 0, 255);
	
	rectMode(RADIUS);
	rect(200, 200, 125, 125);
	
	line(10, 10, 389, 10);
	line(389, 10, 389, 389);
	line(389, 389, 10, 389);
	line(10, 389, 10, 10);

	ellipse(50, 50, 15, 40);
	ellipse(350, 50, 15, 40);
	ellipse(50, 350, 15, 40);
	ellipse(350, 350, 15, 40);

	triangle(150, 30, 200, 60, 250, 30);

	quad(50, 150, 60, 200, 50, 250, 40, 200);
	quad(50, 150, 60, 200, 50, 250, 40, 200);
}