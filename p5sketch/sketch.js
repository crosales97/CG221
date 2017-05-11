
function setup() {
  createCanvas(1500, 1000, WEBGL);
}

function draw(){
  push();

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

pop();



  push();
translate(0, 0, 0);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(70, 20);
  pop();

push();
if (mouseIsPressed)
translate(pmouseX, pmouseY)
else
translate(240, 0, 0);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(70, 20);
  pop();

  push();
  translate(-240, 0, 0);
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    torus(70, 20);
    pop();

    push();
    translate(mouseX, mouseY, pmouseX, pmouseY);
    sphere(50);
    pop();
}
