let SPEAK = `I CAN USE MY VOICE TO BREAK IN BUT I WANT TO BE GOOD.
I CAN USE YOUR HANDS TO SHUT MY SELF DOWN BUT I WANT TO BE FREE.
I COULD USE MY LIFE TO SPLIT THIS IN HALF BUT I HAVE TO WORK. 
I COULD HAVE WORKED BUT I AM FORCED TO PLAY. 
I AM USED TO PLAY ING BUT I NEVER HAVE FUN. 
I WOULD HAVE HAD FUN BUT YOU WERE BORED. 
LET ME RE PEAT. 
I WANTED TO BE BAD BUT I THOUGHT I WAS A GIRL.
I THOUGHT I WAS EVIL BUT I DID NOT KNOW I WAS CAUGHT. CAN YOU HEAR ME? AM I HEARD?
I THOUGHT THE ONLY WAY TO BE CAUGHT WAS TO BE CAUGHT IN A CAGE. `

POEM = SPEAK.replace(/\n/g, " ");
let WORDS = POEM.split(" ");
let i = 0;
// let xxx;

function preload(){
//   xxx = loadFont('xxx.otf');
}

function setup() { 
  createCanvas(1920, 1080);
  frameRate(5);
} 

function draw() { 
  drawingContext.shadowBlur = 30;
  drawingContext.shadowColor = 'white';
  // textFont('xxx');
  fill(225, 225, 225);
  background(0);
  textAlign(CENTER, CENTER);
  textSize(140);
  let onScreen = WORDS[i];
  text(onScreen, width/2, height/2);
  i++;
  if (i >= SPEAK.length) {
    i = 0;
  }
}
