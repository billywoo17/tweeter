
function createTweetElement(data){



//footer
  let h4 = $("<h4>").text(data["created_at"]);
  let retweet = $("<i class='fas fa-retweet' id='retweet'></i>");
  let heart = $("<i class='fa fa-heart'></i>")
  let flag = $("<i class='fab fa-font-awesome-flag' id='flag'></i>");

  let footer = $("footer").append(h4);
  footer = $("footer").append(retweet);
  footer = $("footer").append(heart);
  footer = $("footer").append(flag);

  $teet = footer;
  return $teet;
}

// Test / driver code (temporary). Eventually will get this from the server.
const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": {
      "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
      "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
      "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
    },
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
}

$(function() {
  var $tweet = createTweetElement(tweetData);

  // Test / driver code (temporary)
  console.log($tweet); // to see what it looks like
  $('#tweetets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
});

