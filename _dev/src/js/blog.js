var blockquotes = document.querySelectorAll("blockquote p");

if (blockquotes[0]) {
  var pageLink = window.location.href;
  for (var i = 0; i < blockquotes.length; i++) {
    var blockInner = blockquotes[i].innerHTML;
    var quote = blockquotes[i].querySelector("a").innerHTML;

    blockquotes[i].innerHTML =
      '<a class="quote-wrapper" target="_blank" href="https://twitter.com/intent/tweet?url=' +
      pageLink +
      "&text=" +
      quote +
      "&via=AMPstudioUK&" +
      "twitterwindow" +
      "height=450, width=550, toolbar=0, location=0, menubar=0, directories=0, scrollbars=0" +
      '"></a>' +
      blockInner;
  }
}

var postContainer = document.querySelector(".blog-feed-container");

if (postContainer.innerHTML == "") {
  postContainer.innerHTML =
    "<p>Oops, there's no other related posts :(. We've got plenty more <a href='/blog'>here</a>.</p>";
}
