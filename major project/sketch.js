//Declare global variables
let yPositions=[];
let xPositions=[];
let randomRectList=[]
let colouredHorizontalRoad1=[];
let colouredHorizontalRoad2=[];
let colouredVerticalRoad1=[];
let colouredVerticalRoad2=[];
let colouredVerticalRoad3=[];
let rotatingRectsList=[]
let angle=0;
let number=1;
function setup() {
  createCanvas(windowWidth, windowHeight);
  yPositions=[];
  xPositions=[];
  randomRectList=[]
  colouredHorizontalRoad1=[];
  colouredHorizontalRoad2=[];
  colouredVerticalRoad1=[];
  colouredVerticalRoad2=[];
  colouredVerticalRoad3=[];
  rotatingRectsList=[]
  angle=0;
  number=1;
  draw();
}

//Add mouse monitoring, if clicked, reload 
function mousePressed(){
  setup();
}
// set interval to change number and draw again;
let timer= setInterval(()=>{
  number++;
  draw();
},1000);

function draw() {
  background(255);
  noLoop()
  drawRandomLines()
  drawfixedRects();
  randomRect();
  drawColouredHorizontalRoad(min(width, height) / 40 * 21);
  drawColouredVerticalRoad(min(width, height) / 40 * 1);
  drawColouredVerticalRoad(min(width, height) / 40 * 23);
  drawColouredHorizontalRoad(min(width, height) / 40 * 15);
  drawColouredVerticalRoad(min(width, height) / 40 * 13);
}

function drawRandomLines(){
  // Set the stroke color and weight for the yellow lines
  stroke(252, 224, 46);
  strokeWeight(15);
  let size = min(windowWidth, windowHeight);
  let yPositions = [0, size];
  for (let i = 0; i < 5; i++){
    yPositions.push(random(50, size - 50));
  }
  yPositions.sort((a,b) => a-b);

  for (let y of yPositions ){
    line(0, y, size, y);
  }

  let xPositions = [0, size];
  for (let j = 0; j < 5; j++){
    xPositions.push(random(50, size - 30));
  }
  xPositions.sort((a,b) => a-b);

  for (let x of xPositions ){
      line(x, 0, x, size);
  }

}


//Generate red, blue and gray squares that appear in different positions each time they refresh
//Some fixed squares, representing objects（such as some buildings) that don't change

function drawfixedRects(){
  let size = min(windowWidth, windowHeight)
  fill(239,17,17); //red
  rect(0.075 * size, 0.15 * size, 0.125 * size, 0.2 * size);

  fill(43,115,247); //blue
  rect(0.625 * size, 0.15 * size, 0.125 * size, 0.2 * size);

  fill (211,211,211); //gray
  rect (0.1125 * size, 0.725 * size, 0.2 * size, 0.125 * size);

  fill(239,17,17); //red
  rect(0.7 * size, 0.7 * size, 0.175 * size, 0.225 * size);
}

//Random rects, representing objects that change over time

function randomRect(){
  let size = min(windowWidth, windowHeight);
  let colors = [
    [239,17,17], //red
    [43,115,247], //blue
    [211,211,211] //gray
  ];

  //Fixed the size and location of rects.
  let fixedRects = [ 
    { x: 0.075 * size, y: 0.15 * size, w: 0.125 * size, h: 0.2 * size},
    { x: 0.625 * size, y: 0.15 * size, w: 0.125 * size, h: 0.2 * size},
    { x: 0.1125 * size, y: 0.725 * size, w: 0.2 * size, h: 0.125 * size},
    { x: 0.7 * size, y: 0.7 * size, w: 0.175 * size, h: 0.225 * size},
  ];

  for (let i=0; i< 5; i++) {
    let rectSize = random(20,80);
    let x, y;
    let overlapping = true;
    
    //while loops are helpful for repeating statements while a condition is true. They're like if statements that repeat.
    //Loop through the locations until find one that doesn't overlap
    while (overlapping){
      x = random(0, size - 70);
      y = random(0, size - 70);
      overlapping = false;

      //Check to see if random rects overlaps the fixed rects
      for (let rect of fixedRects){
        let horizontalOverlap = false;
        let verticalOverlap = false;
      
        //Determine whether there is horizontal overlap
        if (x < rect.x + rect.w) {
          if (x + rectSize > rect.x){
            horizontalOverlap = true;
          }
        }
        //Determine whether there is vertical overlap
        if (y < rect.y + rect.h){
          if (y + rectSize > rect.y){
            verticalOverlap = true;
          }
        }

        //If both directions have overlapping, set overlapping to true
        if (horizontalOverlap){
          if (verticalOverlap){
            overlapping = true;
            break;
          }
        }
      }
    }

    let color = random(colors);
    fill(color);
    noStroke();
    rect(x,y,rectSize, rectSize);
  }
}

// The function of drawing fixed yellow lines with three-color squares on it
function drawColouredHorizontalRoad(y){
  let boxSize = min(width, height) / 40;
  let boxNumbers = min(width, height) / boxSize;
  let colourChoice;
  for (let i = 0; i < boxNumbers; i ++){
    let x = i * boxSize;
    if(i % 2 === 0){
      colourChoice = color(252, 224, 46); // yellow
    } else if (i % 6 == 1 || i % 6 == 5){
      if(random(1) < 0.7){
        colourChoice = color(252, 224, 46); // yellow
      } else {
        colourChoice = color(211, 211, 211); // gray
      }
    } else {
      colourChoice = random([color(239, 17, 17), color(43, 115, 247)]);
    }

    fill(colourChoice);
    noStroke();
    rect(x, y, boxSize, boxSize);
  }
}

function drawColouredVerticalRoad(x){
  let boxSize = min(width, height) / 40;
  let boxNumbers = min(width, height) / boxSize;
  let colourChoice;
  for (let i = 0; i < boxNumbers; i ++){
    let y = i * boxSize;
    if(i % 2 === 0){
      colourChoice = color(252, 224, 46); // yellow
    } else if (i % 6 == 1 || i % 6 == 5){
      if(random(1) < 0.7){
        colourChoice = color(252, 224, 46); // yellow
      } else {
        colourChoice = color(211, 211, 211); // gray
      }
    } else {
      colourChoice = random([color(239, 17, 17), color(43, 115, 247)]);
    }

    fill(colourChoice);
    noStroke();
    rect(x, y, boxSize, boxSize);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}