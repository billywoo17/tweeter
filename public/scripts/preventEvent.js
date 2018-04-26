
$(function() {
   $("#submitButton").on("click", function(event){
    event.preventDefault();

    if($(".counter").text() < 0){
      alert("You have to many characters");
    }
    else if(!$("#inputTweet").val()){
      alert("You have not inputted anything");
    } else{
      $.ajax({
        method: 'POST',
        url: '/tweets',
        data: $("#myTweet").serialize(),
        success:
          loadTweets
      });
      $("inputTweet").value = "";
    }
  });
});


