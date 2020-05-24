var database;4
var backgroundImage;
var gameState = 0;
var playerCount = 1;
var form,game,player;

function setup(){
  database = firebase.database();

  createCanvas(400,400);
  game = new Game();
  game.getState();
  game.start();
}

function draw(){
}
