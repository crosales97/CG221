

function setup() {
  createCanvas(2000, 1000, WEBGL);
  img = loadImage("sunmap.jpg");
  img1 = loadImage("mercurymap.jpg");
  img2 = loadImage("venusmap.jpg");
  img3 = loadImage("earthmap1k.jpg");
  img4 = loadImage("marsmap1k.jpg");
  img5 = loadImage("jupitermap.jpg");
  img6 = loadImage("saturnmap.jpg");
  img7 = loadImage("saturnringcolor.jpg");
  img8 = loadImage("uranusmap.jpg");
  img9 = loadImage("uranusringcolour.jpg");
  img11 = loadImage("neptunemap.jpg");
  img12 = loadImage("moonmap1k.jpg");
  img13 = loadImage("belt.png");
}

function draw(){

  /* center rotation */

  /*sun*/

  push();

  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  texture(img);
  sphere(150);

/*mercury*/
  translate(100,100,100);
  texture(img1);
  sphere(10);

/*venus*/
  translate(50,50,-50);
  texture(img2);
  sphere(20);

/*earth*/
translate(50,50,50);
texture(img3);
sphere(25);
  
/*moon*/
translate(25,25,25);
texture(img12);
sphere(5);

/*mars*/
translate(-50,50,50);
texture(img4);
sphere(15);

/*jupiter*/
translate(-200,200,200);
texture(img5);
sphere(70);

/*saturn*/
translate(200,-200,200);
texture(img6);
sphere(50);

if (keyIsPressed === true)
    translate(-100,-100,-100);
 else
translate(0, 0, 0);
texture(img7);
torus(80, 5);

/*uranus*/
translate(200,200,200);
texture(img8);
sphere(35);

if (keyIsPressed === true)
    translate(-100,-100,-100);
 else
translate(0, 0, 0);
texture(img9);
torus(60, 1);

/*neptune*/
translate(100,100,-100);
texture(img11);
sphere(30);

pop();

/*asteroid belt*/
  push();

  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  rotateZ(frameCount * 0.01);
  texture(img13);
  torus(500, 50);



  pop();
  
/* mouse trailing object */
    push();
    translate(mouseX + -1000 , mouseY + -500, pmouseX + -1000, pmouseY + -500);
    sphere(50);
    pop();

}
