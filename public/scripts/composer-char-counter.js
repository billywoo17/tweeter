$(function() {

  $("#inputTweet").on('input', function() {
    var letterCount = $(".counter");
    var inputCount = $(this).val().length;

    letterCount.text(140 - inputCount);
    if(letterCount.text() < 0){
      letterCount.css({color: "red"});
    }else{
      letterCount.css({color: "black"});
    }
  });
});