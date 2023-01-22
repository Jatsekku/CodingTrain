class Bubble {
	constructor(startX, startY) {
		this.x = startX;
		this.y = startY;
	}

	move() {
		this.x = this.x + random(-5,5);
		this.y = this.y + random(-5,5);
	}

	show() {
		stroke(255);
		strokeWeight(4);
		noFill();
		circle(this.x, this.y, 25);
	}
}
