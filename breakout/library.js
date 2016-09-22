var x = 150;
var y = 150;
var dx = 2;
var dy = 4;
var WIDTH;
var HEIGHT;
var ctx;
var intervalId = 0;

function init() {
  var gamescreen = document.getElementById('gamescreen');
  ctx = gamescreen.getContext('2d');
  WIDTH = gamescreen.width;
  HEIGHT = gamescreen.height;
  return setInterval(draw, 10);
}

function circle(x,y,r) {
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
}
