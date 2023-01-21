function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
}

let r, g, b;

function draw() {
	r = map(mouseX, 0, windowWidth, 0, 255) % 255;
	g = map(mouseY, 0, windowHeight, 0, 255) % 255;
	b = map(mouseX, 0, windowWidth, 255, 0) % 255;

	noStroke();
	fill(r, g, b, 50);
	circle(mouseX, mouseY, 100);
}
