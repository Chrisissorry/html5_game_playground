var x = 25;
var y = 150;
var dx = 1.5;
var dy = -4;
var WIDTH;
var HEIGHT;
var gamescreen;
var ctx;
var intervalId = 0;
var paddlex;
var paddleh = 10;
var paddlew = 75;
var rightDown = false;
var leftDown = false;
var canvasMinX = 0;
var canvasMaxX = 0;
var NCOLS = 5;
var NROWS = 5;
var BRICKWIDTH;
var BRICKHEIGHT = 15;
var PADDING = 1;



function init() {
  gamescreen = document.getElementById('gamescreen');
  ctx = gamescreen.getContext('2d');
  WIDTH = gamescreen.width;
  HEIGHT = gamescreen.height;
  paddlex = WIDTH/2;
  BRICKWIDTH = (WIDTH/NCOLS) - 1;
  canvasMinX = gamescreen.getBoundingClientRect().left;
  canvasMaxX = canvasMinX + WIDTH;
  intervalId = setInterval(draw, 10);
}

function circle(x,y,r,fillColor) {
  ctx.beginPath();
  ctx.arc(x,y,r,0, Math.PI*2,true);
  ctx.closePath();
  ctx.fill();
}

function rect(x,y,width,height) {
  ctx.beginPath();
  ctx.rect(x,y,width,height);
  ctx.closePath();
  ctx.fill();
}

function clear() {
  ctx.clearRect(0,0,WIDTH,HEIGHT);
  rect(0,0,WIDTH,HEIGHT);
}

function onKeyDown(evt) {
  if(evt.keyCode == 39) {
    rightDown = true;
  } else if (evt.keyCode == 37) {
    leftDown = true;
  }
}

function onKeyUp(evt) {
  if(evt.keyCode == 39) {
    rightDown = false;
  } else if (evt.keyCode == 37) {
    leftDown = false;
  }
}

function onMouseMove(evt) {
  if (evt.pageX > canvasMinX && evt.pageX < canvasMaxX) {
    paddlex = evt.pageX - canvasMinX;
  }
}

function initbricks() {
  bricks = new Array(NROWS);
  for (i=0; i < NROWS; i++) {
    bricks[i] = new Array(NCOLS);
    for (j=0; j < NCOLS; j++) {
      bricks[i][j] = 1;
    }
  }
}

function drawbricks() {
  for(i=0; i < NROWS; i++) {
    ctx.fillStyle = rowcolors[i];
    for(j=0; j < NCOLS; j++) {
      if(bricks[i][j] == 1) {
        rect((j * (BRICKWIDTH + PADDING)) + PADDING,
           (i * (BRICKHEIGHT + PADDING)) + PADDING,
           BRICKWIDTH, BRICKHEIGHT);
      }
    }
  }
}

document.addEventListener('keydown', onKeyDown);
document.addEventListener('keyup', onKeyUp);
document.addEventListener('mousemove', onMouseMove);
