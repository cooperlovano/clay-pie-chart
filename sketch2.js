var t1;
var t2;
var t3;
var t4;
var input;
var button;
var greeting;
var input2;
var greeting2;
//Version 3 of a p5 library to create a physical pie chart


function setup() {
  createCanvas(500,500);
  background('rgb(255,255,255)');
  swatch1 = loadImage("../pie/assets/swatch.png");  // Load the image
  swatch2 = loadImage("../pie/assets/swatch2.png");  // Load the image
  
  t1 = loadImage("../pie/assets/p5_test1.png");  // Load the image
  t2 = loadImage("../pie/assets/p5test2.png");  // Load the image
  t3 = loadImage("../pie/assets/p5test3.png");  // Load the image
  t4 = loadImage("../pie/assets/p5test4.png");  // Load the image
  t5 = loadImage("../pie/assets/p5test5.png");  // Load the image
  t6 = loadImage("../pie/assets/p5test6.png");  // Load the image
  
  //input1
  input = createInput();
  input.position(40, 185);

  //input2
  input2 = createInput();
  input2.position(40, 205);
  button = createButton('submit inputs');
  button.position(input2.x, 230);

  
  //input3 (taken out for the prelim version (test_3))
  /*
  input3 = createInput();
  input3.position(40, 225);
  button3 = createButton('submit');
  button3.position(input3.x + input3.width, 225);
  */
  
  button.mousePressed(calculate);


  greeting = createElement('h4', 'provide two values to display on a pie chart (only 80 & 60 work for the first value, 20 & 40 for second)');
  greeting.position(60, 75);
  greeting2 = createElement('h4', '');
  greeting2.position(60, 105);
  textAlign(CENTER);
  textSize(50);
}

function calculate(){
  //future version: a FOR LOOP to iterate through user input to calculate larger groups
  //get values of user input
  background('rgb(255,255,255)');
  var numb1= float(input.value());
  var numb2= float(input2.value());
  var sum=(numb1 + numb2);
  //use the sum of user inputs to calculate percentage
  var percent1 = (numb1/sum);
  var percent2 = (numb2/sum);
  greeting.html('1. displaying '+ (100*percent1) + '%');
  //discplay corresponding section of pie chart
  image(swatch1, 10, 60, 13, 13);
  if (percent1 == ".8"){
    image(t1, 50, 30, t1.width/2, t1.height/2);
    }
    if (percent1 == ".6"){
    image(t3, 50, 30, t3.width/2, t3.height/2);
    }
  greeting2.html('2. displaying '+ (100*percent2  ) + '%');
  image(swatch2, 10, 90, 13, 13);
  if (percent2 == ".2"){
    image(t2, 240, 30, t2.width/2, t2.height/2);
    }
    if (percent2 == ".4"){
    image(t4, 240, 30, t4.width/2, t4.height/2);
    }
}

