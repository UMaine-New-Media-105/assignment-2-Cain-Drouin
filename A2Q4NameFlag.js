/*
Flag made for initials C and D
Countries
Comoros
Dominica
*/
function setup() {
  createCanvas(600, 400);
  rectMode(CENTER);
}

function draw() {
  background(0,154,68);
  addDominicaFlag();
  addComorosFlag()
}

function addDominicaFlag() {
  push()
  noStroke()
  //verticle lines
  fill("black");
  rect(300, 200, 50, 400);
  fill(255, 205, 0);
  rect(250, 200, 50, 400);
  fill("white")
  rect(350, 200, 50, 400);
  //horizontal lines
  fill("black");
  rect(300, 200, 600, 50);
  fill(255, 205, 0);
  rect(300, 150, 600, 50);
  fill("white")
  rect(300, 250, 600, 50);
  //circle
  fill(228, 0, 43)
  ellipse(300,200,300)
  pop()
}
function addComorosFlag(){
  push()
  fill("white")
  noStroke()
  ellipse(300,200,200)
  fill(228, 0, 43)
  ellipse(340,200,200)
  beginShape()
  
  pop()
  
  
}
