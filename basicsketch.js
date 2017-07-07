var t1;
var t2;
var t3;
var t4;


function setup() {
  createCanvas(500,500);
  background('rgb(230,20,0)');
  t1 = loadImage("../pie/assets/p5test2.png");  // Load the image
  t2 = loadImage("../pie/assets/p5_test1.png");  // Load the image
  t3 = loadImage("../pie/assets/p5test3.png");  // Load the image
  t4 = loadImage("../pie/assets/p5test4.png");  // Load the image
}

function draw() {
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    background('rgb(230,20,0)');
    image(t2, 30, 30, t2.width/2, t2.height/2);
    image(t1, 220, 30, t1.width/2, t1.height/2);
    
  } else if (keyCode === RIGHT_ARROW) {
    background('rgb(230,20,0)');
    image(t3, 30, 30, t3.width/2, t3.height/2);
    image(t4, 220, 30, t4.width/2, t4.height/2);
    
  }
}
