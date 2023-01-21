function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
}

let x, y;
let r, g, b;
let margin = 50;

function draw() {
	x = random(0 + margin, width - margin);
	y = random(0 + margin, height - margin);
	log(x)
	
	r = random(0, 255);
	g = 0;
	b = random(0, 255);

	noStroke();
	fill(r, g, b, 100);
	circle(x, y, 20);
}
