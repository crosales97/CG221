
function setup() {
  createCanvas(640, 480, WEBGL);
}

function draw(){
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  box(100, 100, 100);
}
