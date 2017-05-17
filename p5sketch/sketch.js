
function setup() {
  createCanvas(2000, 1000, WEBGL);
  img = loadImage("doggo.jpg");
  img2 = loadImage("flowers.jpg");
  img3 = loadImage("nuggets.jpg");
}

function draw(){
  push();

  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  texture(img3);
  box(100, 100, 100);

  translate(100,100,-100);
  texture(img);
  sphere(50);


  translate(-100,100,100);
  texture(img);
  sphere(50);

  beginShape();
vertex(100,23,-100);
vertex(200,23,-50);
vertex(150, 45,-100);
vertex(300,50,-50)
endShape();

pop();



  push();
    if (keyIsPressed === true)
      translate(-700,-900,-1000);
   else
translate(0, 0, 0);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(70, 20);
  texture(img2);
  pop();

push();
if (mouseIsPressed)
translate(pmouseX + -1000, pmouseY + -500)
else
translate(240, 0, 0);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(70, 20);
  texture(img2);
  pop();

  push();
  translate(-240, 0, 0);
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    torus(70, 20);
  texture(img2);
    pop();

    push();
    translate(mouseX + -1000 , mouseY + -500, pmouseX + -1000, pmouseY + -500);
    sphere(50);
  texture(img2);
    pop();
  
  push();
  if (keyIsPressed === true)
        translate(800,-900,-1000);
     else
    translate(-540, 0, 0);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    box(300, 300, 300);
    texture(img);
    pop();
  
  
  push();
    if (keyIsPressed === true)
        translate(800,-900,-1000);
     else
    translate(700, 0, 0);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    box(300, 300, 300);
    texture(img3);
    pop();
  
}
