function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220, 32, 146);

    shape(0,0,1.5)
  
}
function shape(x,y,size){
  fill(0);
  translate(x,y)
  scale(size)
  beginShape();
  vertex(25, 0);
  vertex(0, 25);
  vertex(25, 50);
  vertex(75, 50);
  vertex(125,125)
  vertex(75, 0);
  endShape(CLOSE);
}
