document.addEventListener("DOMContentLoaded", function() {

// $("#inputTweet").on('keydown', function() {
//   console.log(this.value.length);
// });

$("#inputTweet").on('keyup', function() {
  console.log(this);
  let letterCount = document.querySelector("#counter")[0];
  letterCount = (140- this.value.length);
  if(letterCount < 0){
  document.getElementById("#counter")[0].style.backgroundColor = "red";

  }
});


});