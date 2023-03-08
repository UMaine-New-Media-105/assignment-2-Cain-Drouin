function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(4, 255, 0);
  let x = 40;
  let y = 40;

  //Colored Ellipse
  fill(250, 100, 0);
  stroke(250);

  squareGrid(0, 0,"blue","red","red","red","blue");
  squareGrid(0, 80,"red","blue","blue","blue","blue");
  squareGrid(0, 160,"red","blue","blue","blue","blue");
  squareGrid(0, 240,"red","blue","blue","blue","blue");
  squareGrid(0, 320,"blue","red","red","red","blue");
}
function squareGrid(x, y,c1,c2,c3,c4,c5) {
  push();
  translate(x, y);
  fill(c1)
  rect(0, 0, 80);
  fill(c2)
  rect(80, 0, 80);
  fill(c3)
  rect(160, 0, 80);
  fill(c4)
  rect(240, 0, 80);
  fill(c5)
  rect(320, 0, 80);

  pop();
}
