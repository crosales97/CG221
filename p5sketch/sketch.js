
function setup() {
  createCanvas(1000, 1000, WEBGL);
}

function draw(){
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  box(100, 100, 100);
  translate(100,100,-100);
  sphere(50);
  translate(-100,100,100);
  sphere(50);

  beginShape();
vertex(100,23,-100);
vertex(200,23,-50);
vertex(150, 45,-100);
vertex(300,50,-50)
endShape();
}
