var loadTwitter = document
  .querySelector(".social-feed-twitter-title")
  .getBoundingClientRect();
var trigger = false;

window.addEventListener("scroll", () => {
  if (trigger) {
    return;
  }
  if (window.pageYOffset > loadTwitter.top - window.innerHeight && !trigger) {
    trigger = true;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.amp.studio/twitter", true);
    xhr.onload = function(e) {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          var postFeed = JSON.parse(xhr.responseText);
          renderPosts(postFeed);
        } else {
          console.error(xhr.statusText);
        }
      }
    };

    xhr.onerror = function(e) {
      console.error(xhr.statusText);
    };

    xhr.send(null);

    // Twitter post templating

    var tweetContainer = document.getElementById("twitter-feed");

    function renderPosts(data) {
      var markup = "";
      for (var post in data) {
        var postMarkup = postFormat(data[post]);
        markup += postMarkup;
      }
      tweetContainer.innerHTML = markup;
    }

    function postFormat(data) {
      var permalink = data.permalink;
      var date = data.created_at;
      var post = data.text;
      var retweet = data.retweeted_status ? "Retweeted" : "Posted";
      var retweetUser = data.retweeted_status
        ? "@" + data.retweeted_status.user.screen_name + " "
        : "";

      return `<div class="social-feed-twitter-post">
            <a href="${permalink}" target="_blank"></a>
            <h3>@AMPstudioUK ${retweet}&nbsp;<br class="show-450">${retweetUser}• ${date}</h3>
            <p>${post}</p>
          </div>`;
    }
  }
});
