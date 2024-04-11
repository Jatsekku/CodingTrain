function setup() {
	createCanvas(200, 200);
	pixelDensity(1);
}

function draw() {
	let yoff = 0;

	loadPixels();
	for (let y = 0; y < height; y++) {
		let xoff = 0;
		for (let x = 0; x < width; x++) {
			var idx = (x + y * width) * 4
			let r = noise(xoff, yoff) * 255;
			pixels[idx+0] = r;
			pixels[idx+1] = r;
			pixels[idx+2] = r;
			pixels[idx+3] = 255;

			xoff += 0.1;
		}
		yoff += 0.1
	}
	updatePixels();
}
