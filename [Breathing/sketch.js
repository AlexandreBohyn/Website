function setup() {
	createCanvas(500, 500);
	angleMode(DEGREES);
}

function draw() {
	background(0);
	stroke(255);
	noFill();

	beginShape();
	
	let spacing = map(mouseX, 0, width, 5, 100);
	for (let a = 0; a < 360; a += spacing) {
		let x = 100 * sin(a) + 200;	
		let y = 100 * cos(a) + 200;
		vertex(x,y);
	}	
	endShape(CLOSE);	

	// strokeWeight(5);
	// point(mouseX,mouseY);
	// point(100,200);
	// point(200, 50);
	// point(300, 200);
	// strokeWeight(1);

	// beginShape();
	// curveVertex(mouseX,mouseY);
	// curveVertex(100,200);
	// curveVertex(200, 50);
	// curveVertex(300, 200);


	// endShape(CLOSE);
}