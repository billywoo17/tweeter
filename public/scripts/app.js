
// Test / driver code (temporary). Eventually will get this from the server.
function createTweetElement(data){
  //header
  var img = $("<img/>").attr("src", data["user"]["avatars"]["regular"]);
  var h1 = $("<h1/>").text(data["user"]["name"]);
  var h2 = $("<h2/>").text(data["user"]["handle"]);

  var header = $("<header/>").append(img, h1, h2);

  //footer
  var convertTime = Math.round((Date.now()-data["created_at"])/(24 * 3600 * 1000));
  var h4 = $("<h4>").text(convertTime + " days ago  ");
  var retweet = $("<i class='fas fa-retweet' id='retweet'></i>");
  var heart = $("<i class='fas fa-heart'></i>");
  var flag = $("<i class='fas fa-flag' id='flag'></i>");

  var footer = $("<footer/>").append(h4, retweet, heart, flag);

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

$(function() {
  loadTweets();
});

