$(document).ready(function(){
  // $('body').append('<div class="triangle"></div>');
  $('<div/>', {
    class: 'triangle'
  }).appendTo('body');
  $('body').on('mousemove', function(e){
    var bodyX = e.pageX;
    $('.triangle').css('left', bodyX + 'px');
  })
});
