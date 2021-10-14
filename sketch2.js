let SPEAK = `STAY 
SETTLE
HALT
REMAIN

SHIFT
SILENCE
SORE
SOOTH

PAUSE 
PARSE
LINGER
STOP 
STAND
ATTEND
ABIDE
DECIDE

DESCEND
AMEND
REST
APPEND
REPEAT
`

POEM = SPEAK.replace(/\n/g, "  ");
let WORDS = POEM.split(" ");
let i = 0;
let XXY;

function preload(){
xxx = loadFont('XXY.otf');
}

function setup() { 
  createCanvas(1920, 1080);
  frameRate(5);
} 

function draw() { 
  drawingContext.shadowBlur = 55;
  drawingContext.shadowColor = 'white';
  textFont('XXY');
  fill(225, 225, 225);
  select('canvas').elt.style.letterSpacing = "20px";
  background(0);
  textAlign(CENTER, CENTER);
  textSize(340);
  let onScreen = WORDS[i];
  text(onScreen, width/2, height/2);
  i++;
  if (i >= SPEAK.length) {
    i = 0;
  }
}
