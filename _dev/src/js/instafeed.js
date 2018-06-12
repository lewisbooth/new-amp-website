
function instagramResize() {
  var e = document.querySelectorAll(".social-feed-instagram-post");
  function t() {
    for (var t = 0; t < e.length; t++) {
      var o = e[0].offsetWidth;
      e[t].style.height = o + "px";
    }
  }
  t();
}

var loadInsta = document
  .querySelector(".social-feed-instagram")
  .getBoundingClientRect();
var placeholders = document.querySelectorAll(".social-feed-instagram-post")
var triggered = false;

window.addEventListener("scroll", function() {
  if (triggered) {
    return;
  }
  if (window.pageYOffset > loadInsta.top - window.innerHeight - 500 && !triggered) {
    triggered = true;
    var feed = new Instafeed({
      get: "user",
      after: function() {
        for (i = 0; i < placeholders.length; i++) {
          console.log("Deleting " + placeholders[i])
          placeholders[i].remove()
        }
        instagramResize();
      },
      userId: "5657939093",
      clientId: "c1caeb14786a4227bc4ab5a2c4fb657b",
      accessToken: "5657939093.c1caeb1.f93d91f84d594f8ab865462a35deb7c2",
      resolution: "low_resolution",
      sortBy: "most-recent",
      limit: "6",
      template: 
        "<a class='social-feed-instagram-post' href={{link}} target=_blank style=\"background-image: url({{image}}); background-size: cover; background-position: center;\"/>"
    });
    feed.run()
    window.addEventListener("resize", instagramResize);
  }
});
