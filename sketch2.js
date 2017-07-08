var t1;
var t2;
var t3;
var t4;
var value;


function setup() {
  createCanvas(500,500);
  background('rgb(255,255,255)');
  t1 = loadImage("../pie/assets/p5test2.png");  // Load the image
  t2 = loadImage("../pie/assets/p5_test1.png");  // Load the image
  t3 = loadImage("../pie/assets/p5test3.png");  // Load the image
  t4 = loadImage("../pie/assets/p5test4.png");  // Load the image
  
  image(t2, 50, 30, t2.width/2, t2.height/2);
  image(t1, 240, 30, t1.width/2, t1.height/2);
}

function draw() {
}

function updateRadio( theOptions ) {
  // get the value of the radio buttons
  var menuValue = theOptions.value;
  
  // use the value in some computation
  if (menuValue == 'b') {
    background('rgb(255,255,255)');
    image(t3, 50, 30, t3.width/2, t3.height/2);
    image(t4, 240, 30, t4.width/2, t4.height/2);
  }
  
  if (menuValue == 'a') {
    background('rgb(255,255,255)');
    image(t2, 50, 30, t2.width/2, t2.height/2);
    image(t1, 240, 30, t1.width/2, t1.height/2);
  }
}

