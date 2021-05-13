var movingrect, fixedrect;
var bgi,bg;
var knight1,knight2;
var game,playerCount=0;
var gameState =0;
var player,form,database;
function preload(){
  bgi=loadImage("desktop.jpeg");

}
function setup() {
  createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  
  bg = createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight)
 game =new Game();
 game.getState()
 game.start()

}

function draw() {
  background("pink"); 
  if(playerCount===2){
    game.update(1)
  }
if(gameState===1){
  game.play()
}
if(gameState===2){
  game.end()
}
 
  
}