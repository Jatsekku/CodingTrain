
let bubble1, bubble2;

function setup() {
	createCanvas(windowWidth, windowHeight);
	bubble1 = new Bubble(windowWidth/2 - 100, windowHeight/2);
	bubble2 = new Bubble(windowWidth/2 + 100, windowHeight/2);
}

function draw() {
	background(0);
	bubble1.move();
	bubble1.show();
	bubble2.move();
	bubble2.show();
}
