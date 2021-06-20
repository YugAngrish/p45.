var database , form , player,game,allPlayers;
var gameState=0;
var playerCount=0;
var girlImg1,girlImg2 , girl1,girl2 , girls , gardenImg ;
var  butterfly1, butterfly2, butterfly1Group, butterfly2Group , b1 , b2

function preload() {
 
 girlImg1 = loadImage("1.png")
 girlImg2 = loadImage("2.png")
 gardenImg = loadImage("3.png")

 b1 = loadAnimation("b1.png","b1.png","b2.png","b1.png","b1.png")
 b2 = loadAnimation("b3.png","b3.png","b4.png","b4.png","b5.png","b5.png")
}

function setup() {
  
  createCanvas(displayWidth,displayHeight)
  
  database = firebase.database()
 
  game = new Game()
  game.getGameState()
  game.start()
  
}

function draw() {
 background("white")
 if(playerCount===2&&gameState===0){
  gameState = 1
  game.updateGameState(gameState)
}
if(gameState===1){
  game.play()
}
if(gameState===2){
  game.end();
}

}