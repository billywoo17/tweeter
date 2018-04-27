
// Test / driver code (temporary). Eventually will get this from the server.
function createTweetElement(data){
  //header
  var img = $("<img/>").attr("src", data["user"]["avatars"]["regular"]);
  var h1 = $("<h1/>").text(data["user"]["name"]);
  var h2 = $("<h2/>").text(data["user"]["handle"]);

  var header = $("<header/>").append(img, h1, h2);

  //footer
  var retweet = $("<i class='fas fa-retweet' id='retweet'></i>");
  var heart = $("<i class='fas fa-heart'></i>");
  var flag = $("<i class='fas fa-flag' id='flag'></i>");
  var convertTime = Math.round(Date.now()-data["created_at"]);


  var footer = $("<footer/>").append(calTime(convertTime), retweet, heart, flag);

  //article
  var h3 = $("<h3/>").text(data["content"]["text"]);

  var article = $("<article/>").append(header, h3, footer);

  return article;
}

function renderTweets(myObj) {
  $('#tweets-container').empty()
  myObj.reverse().forEach(function(objKey) {
  var $tweet = createTweetElement(objKey);
  $('#tweets-container').append($tweet);
  });
}

function loadTweets() {
  $.ajax({
    url: '/tweets',
    method: 'GET',
    success: renderTweets
  });
}

function calTime(time){
  time = Math.round(time / (60 * 1000));
  var h4;
  if(time  > 525600){
    //display Year and day
    var convertYear = Math.round(time / 525600);
    time = Math.round((time/1440) % 365);
    h4 = $("<h4>").text(convertYear +
      " years and "+ time + " days ago  ");

  } else if (time < 1440){
      if (time < 60){
        //Display mintues
        h4 = $("<h4>").text(time  + " mintues ago  ");
      } else{
        //display hour
        h4 = $("<h4>").text(Math.round(time / 60)  + " hours ago  ");
      }
  }
  else{
    //display date
    h4 = $("<h4>").text(convertTime * 1440 + " days ago  ");
  }
  return h4;
}

$(function() {
  loadTweets();
});

