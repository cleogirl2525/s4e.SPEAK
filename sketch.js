let SPEAK = `I CAN USE MY VOICE TO BREAK IN BUT I WANT TO BE GOOD.
I CAN USE YOUR HANDS TO SHUT MY SELF DOWN BUT I WANT TO BE FREE.
I COULD USE MY LIFE TO SPLIT THIS IN HALF BUT I HAVE TO WORK. 
I COULD HAVE WORKED BUT I AM FORCED TO PLAY. 
I AM USED TO PLAY ING BUT I NEVER HAVE FUN. 
I WOULD HAVE HAD FUN BUT YOU WERE BORED. 
LET ME RE PEAT. 
I WANTED TO BE BAD BUT I THOUGHT I WAS A GIRL.
I THOUGHT I WAS EVIL BUT I DID NOT KNOW I WAS CAUGHT. CAN YOU HEAR ME? AM I HEARD?
I THOUGHT THE ONLY WAY TO BE CAUGHT WAS TO BE CAUGHT IN A CAGE. 

I THOUGHT THE ONLY WAY WAS CAUGHT TO BE CAUGHT IN A CAGE.
I CAN USE MY VOICE TO BUT IN I BREAK WANT TO BE GOOD.
I THOUGHT I WAS EVIL BUT I CAN KNOW CAUGHT. WAS I DID NOT YOU HEAR ME? AM I HEARD?
I CAN USE YOUR HANDS TO BUT I SELF SHUT DOWN MY WANT TO BE FREE.
I WANTED TO BE BAD I BUT THOUGHT I WAS A GIRL.
I COULD USE MY LIFE TO BUT SPLIT IN I HALF THIS HAVE TO WORK. 
LET ME PEAT. RE 
I COULD HAVE WORKED BUT AM I FORCED TO PLAY. 
I WOULD HAVE HAD FUN WERE YOU BUT BORED. 
I AM USED TO ME BUT PLAY NEVER HAVE FUN.

I CAN USE MY VOICE TO BREAK IN BUT I WANT TO BE GOOD.
I CAN USE YOUR HANDS TO SHUT MY SELF DOWN BUT I WANT TO BE FREE.
I COULD USE MY LIFE TO SPLIT THIS IN HALF BUT I HAVE TO WORK. 
I COULD HAVE WORKED BUT I AM FORCED TO PLAY. 
I AM USED TO PLAY ING BUT I NEVER HAVE FUN. 
I WOULD HAVE HAD FUN BUT YOU WERE BORED. 
LET ME RE PEAT. 
I WANTED TO BE BAD BUT I THOUGHT I WAS A GIRL.
I THOUGHT I WAS EVIL BUT I DID NOT KNOW I WAS CAUGHT. CAN YOU HEAR ME? AM I HEARD?
I THOUGHT THE ONLY WAY TO BE CAUGHT WAS TO BE CAUGHT IN A CAGE. 

I AM USED TO BUT PLAY I ING NEVER HAVE FUN. 
I THOUGHT THE ONLY WAY TO BE WAS TO CAUGHT BE CAUGHT IN A CAGE.
I WOULD HAVE HAD FUN BUT WERE YOU BORED. 
I CAN USE MY VOICE BREAK BUT TO IN I WANT TO BE GOOD.
I COULD HAVE WORKED BUT I AM FORCED TO PLAY. 
I THOUGHT I WAS EVIL BUT I WAS DID I CAUGHT. KNOW CAN NOT YOU HEAR ME? AM I HEARD?
LET ME PEAT. RE 
I CAN USE YOUR HANDS TO SELF SHUT MY BUT I DOWN WANT TO BE FREE.
I COULD USE MY LIFE TO THIS IN BUT HALF I SPLIT HAVE TO WORK. 
I WANTED TO BE BUT THOUGHT I BAD I WAS A GIRL.

I WANTED TO BE BAD THOUGHT I BUT I WAS A GIRL.
I AM USED TO PLAY BUT I ING NEVER HAVE FUN. 
I COULD USE MY LIFE TO THIS BUT IN I SPLIT HALF HAVE TO WORK. 
I THOUGHT THE ONLY WAY TO WAS CAUGHT TO BE CAUGHT IN A CAGE.
I CAN USE YOUR HANDS TO DOWN I SELF MY BUT SHUT WANT TO BE FREE.
I WOULD HAVE HAD FUN YOU WERE BUT BORED. 
LET ME RE PEAT. 
I CAN USE MY VOICE BREAK BUT IN I TO WANT TO BE GOOD.
I THOUGHT I WAS EVIL BUT I KNOW DID WAS CAUGHT. NOT CAN I HEAR ME? AM I HEARD? I COULD HAVE WORKED I BUT AM FORCED TO PLAY.`

POEM = SPEAK.replace(/\n/g, "  ");
let WORDS = POEM.split(" ");
let i = 0;
let XXT;

function preload(){
xxx = loadFont('XXT.otf');
}

function setup() { 
  createCanvas(1920, 1080);
  frameRate(5);
} 

function draw() { 
  drawingContext.shadowBlur = 55;
  drawingContext.shadowColor = 'white';
  textFont('XXT');
  fill(225, 225, 225);
  select('canvas').elt.style.letterSpacing = "80px";
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
