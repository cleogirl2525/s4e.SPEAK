let SPEAK = `SPEAK
SCREAM 
EMIT
REPENT
DELIVER
EXPRESS
SPILL

CONVERSE
REVERSE
ASSERT
REVERT
REWORD
ALLEGE
MUMBLE
MASTICATE 

HOLLAR 
MOAN
CONVERT
CONDONE
ROUSE
RECTIFY
DRIP
SALIVATE
SUCK
RECEDE
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
  createCanvas(1620, 680);
  frameRate(2);
} 

function draw() { 
  drawingContext.shadowBlur = 55;
  drawingContext.shadowColor = 'white';
  textFont('XXY');
  fill(225, 225, 225);
  select('canvas').elt.style.letterSpacing = "20px";
  background(0);
  textAlign(CENTER, CENTER);
  textSize(250);
  let onScreen = WORDS[i];
  text(onScreen, width/2, height/2);
  i++;
  if (i >= SPEAK.length) {
    i = 0;
  }
}
