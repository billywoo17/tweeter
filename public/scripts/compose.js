$(function() {
  $("#compose").on("click", function(){
    $(".new-tweet").slideToggle( "normal", function() {
      var status = $(this).is(":hidden");
      if(!status){
        $("#inputTweet").focus();
      }
  });
  });
});