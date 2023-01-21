function setup() {
	createCanvas(400, 400);
}

let radius = 0;
let blue = 0;

function draw() {
	background(0);
	fill(100, 0, blue);
	circle(200, 200, radius);
	radius++;
	blue++;
}

function mousePressed() {
	radius = 0;
	blue = 100;
}