//Psuedo code
//On click:
  //Create transparent canvas overlay
  //Have Twoey pop up from the planter
  //He opens mouth as piece of food (a circle) travels to his mouth
  //Close mouth then retract back into planter thing

//Alright talk is cheap, time to code

//Globals
let ph = 450;
let topOpen =  Math.PI;
let botOpen =  Math.PI;
let open = false;

let run = false;
let ex = 0;



function setup(){
  createCanvas(800,600);
}
function draw(){
  background(236);
  noStroke();

  if(run == true){
    feedMe();
  }
  //Stem of the plant (need to control height)
  rectMode(CORNER);
  fill(45,124,23);
  rect(724,ph,24,300);

  //Mouth of plant (need to control height and Open/Close status)

  arc(625.5,ph - 0.125,200,100,0,botOpen, CHORD);
  arc(625.5,ph - 0.125,200,100,topOpen,0, CHORD);
  //Planter (no variables)
  noStroke();
  rectMode(CORNER);
  fill(37,15,14);
  rect(700,515,75,85);
  rect(680,510,115,10);
  doEat();

}

function keyPressed(){
  if (keyCode === ENTER) {
   run = true;
 }
}
function feedMe(){
  fill(39,41,45);
  if (ex <= 625.5){
    ex+= 10;
    topOpen = 5*PI/4;
    botOpen = 3*PI/4;
  }if (ex >= 625.5){
    ex = -50;
    run = false;
    topOpen = PI;
    botOpen = PI;
  }
  ellipse(ex,ph,50,50);
}

function doEat(){
  if(ph >= 275){
    ph-= 5;
  }else if(ph <= 275){
    fill(39,41,45);
    textSize(42);
    feed = text("Press Enter to Feed Twoey!", 50,450);
  }
}




//BUGS
  //Cannot feed more than once
  //Looks ugly as sh!t
  //More fluid UI/UX
