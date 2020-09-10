var bird;
var pillars = [];
var flag=0;
var count=0;
var score=100;
function preload(){
  birdImg=loadImage("imagessssss/bird.png");
  uppillar=loadImage("imagessssss/up pillar.png");
  downpillar=loadImage("imagessssss/downpillar.png");
  gameover=loadImage("imagessssss/gameover.png");
  beep=loadSound("imagessssss/beep sound.mp3");
  backg=loadImage("imagessssss/bg.png");
}
function setup(){
  createCanvas(600,600);
  bird=new Bird();
  pillars.push(new Pillar());

}

function draw(){
  background(backg);
  text("score :"+score,200,100);
  textSize(24);

  for(var i = 0; i < pillars.length; i++){
    pillars[i].show();
    pillars[i].update();

    if(pillars[i].hit(bird)){
      beep.play();
      console.log("HIT");
     flag=1;
      score--;
      count++;
    }
    if(flag == 1 && score == 0){
      pillars[i].speed=0;
      bird.y=250;
      bird.velocity=0;
      beep.pause();




    }
  }

  bird.show();
  bird.update();
  if(score <= 0){
    score=0;
    fill("red");
    
    image(gameover,200,200,200,200);
 

  }
 
  
  

 
  

    
  
 if(frameCount % 60 == 0 ){
  pillars.push(new Pillar());
  
 
 }


}
function keyPressed(){
  if(key == ' '){
    //console.log("SPACE");
    bird.up();
  }
}