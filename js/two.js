var colors = ['#FF8268', '#41C0FF', '#3EFF84', '#FFD687', '#FF8B84', '#4886FF', '#AAE2FF', '#B4FFB4', '#FFE8BD', '#FFB4D3', '#C7BAFF', '#BCD7FF', '#84FF85', '#FFC880', '#FF7D6C', '#9100FF', '#fff'];

$(document).ready(function(){
  var $body = $('body');
  var $letters = $('.letters');

  $('.p').on('click', function(){
    var randy = colors[Math.floor(Math.random() * colors.length)];
    $('.letters').css('background-color', randy);
  });

  // NEEDS TO BE FIXED, ONLY FIRING ONCE
  $letters.on('click', '.l', function(){
    console.log('yay');
    $letters.css('transform', 'rotate(180deg)');
  });

  $('.letters').mousemove(function(e){

    if (e.pageX > window.innerWidth / 2 &&  e.pageY > window.innerHeight / 2) {
      var $sparkles = $('<img src="img/two/ios_emoji_sparkles.png" class="sparkles">').css({
        left: e.pageX,
        top: e.pageY
      });

      $sparkles.appendTo($body);

      $sparkles.animate({top:-999}, 3000, function(){
      $sparkles.remove();
    });
    }
  })
})
