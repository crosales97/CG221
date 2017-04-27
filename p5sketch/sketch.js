var party = 100;

function setup() {
  createCanvas(700,700);
  background(0);
}
function draw() {
  background(250);
  
  circle(100,100,party,party);
  
  translate(240, 0, 0);
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  box(70, 70, 70);
  pop();
}
