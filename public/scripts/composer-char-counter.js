document.addEventListener("DOMContentLoaded", function() {

  $("#inputTweet").on('input', function() {
    let letterCount = $(".counter");
    let inputCount = $(this).val().length;

    letterCount.text(140 - inputCount);
    if(letterCount.text() < 0){
      letterCount.css({color: "red"});
    }
  });
});