
function createTweetElement(data){
//header
  let img = $("<img/>").attr("src", data["user"]["avatars"]["regular"]);
  let h1 = $("<h1/>").text(data["user"]["name"]);
  let h2 = $("<h2/>").text(data["user"]["handle"]);

  let header = $("<header/>").append(img, h1, h2);

//footer
  let h4 = $("<h4>").text(data["created_at"]);
  let retweet = $("<i class='fas fa-retweet' id='retweet'></i>");
  let heart = $("<i class='fas fa-heart'></i>");
  let flag = $("<i class='fas fa-flag' id='flag'></i>");

  let footer = $("<footer/>").append(h4, retweet, heart, flag);

//article
  let h3 = $("<h3/>").text(data["content"]["text"]);

  let article = $("<article/>").append(header, h3, footer);

  return article;
}
function renderTweets(tweets) {
  tweets.forEach(function(value) {
  let $tweet = createTweetElement(value);
  $('#tweets-container').append($tweet);
  });

}
// Test / driver code (temporary). Eventually will get this from the server.
const data = [
  {
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
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];


$(function() {
renderTweets(data);
});

