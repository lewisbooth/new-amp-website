var quoteArray = document.querySelectorAll(".quote");

if (quoteArray[0]) {
  var getPageLink = window.location.href;
  for (var i = 0; i < quoteArray.length; i++) {
    var getQuote = quoteArray[i].innerHTML;
    quoteArray[i].setAttribute(
      "href",
      "https://twitter.com/intent/tweet?url=" +
        getPageLink +
        "&text=" +
        getQuote +
        "&via=AMPstudioUK&",
      "twitterwindow",
      "height=450, width=550, toolbar=0, location=0, menubar=0, directories=0, scrollbars=0"
    );
  }
}
