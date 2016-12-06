$(document).ready(function(){
  // $('body').append('<div class="triangle"></div>');
  // $('<div/>', {
  //   class: 'triangle'
  // }).appendTo('body');
  // $('body').on('mousemove', function(e){
  //   var bodyX = e.pageX;
  //   $('.triangle').css('left', bodyX + 'px');
  // })
});



var setup = function() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 100);
  background(50);
};

var draw = function(){

  var width = windowWidth;
  var height = windowHeight;
  var midX = width / 2;
  var midY = height / 2

  colorMode(HSB, 100);

background(50);
  noStroke();
  fill(1, 100, 100);
  // background(50);
  triangle(mouseX, midY - 40, width, midY, width, midY + 30);
  fill(10, 100, 100);
  triangle(mouseX, midY - 40, width, midY + 30, width, midY + 60);
  fill(17, 100, 100);
  triangle(mouseX, midY - 40, width, midY + 60, width, midY+90);
  fill(24, 100, 100);
  triangle(mouseX, midY - 40, width, midY + 90, width, midY+120);
  fill(48, 100, 100);
  triangle(mouseX, midY - 40, width, midY + 120, width, midY+150);
  fill(60, 100, 100);
  triangle(mouseX, midY - 40, width, midY + 150, width, midY + 180);
  fill(80, 100, 100);
  triangle(mouseX, midY - 40, width, midY + 180, width, midY + 210);

  fill (200, 0, 100);
  triangle(mouseX, midY - 40, width - width, midY, width - width, midY + 20);

  noStroke();
  fill(40, 10, 100);
  // background(50);
  triangle(mouseX, midY - 150, mouseX + 173, midY + 150, mouseX - 173, midY + 150);





}
