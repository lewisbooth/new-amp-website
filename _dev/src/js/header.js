// Fix IE jumpy fixed background

if (
  navigator.userAgent.match(/Trident\/7\./) ||
  navigator.userAgent.match(/Edge\/\d./)
) {
  var body = document.querySelector("body");
  body.addEventListener("mousewheel", function(event) {
    // remove default behavior
    event.preventDefault();

    //scroll without smoothing
    var wheelDelta = event.wheelDelta;
    var currentScrollPosition = window.pageYOffset;
    window.scrollTo(0, currentScrollPosition - wheelDelta);
  });
}

var headerFade = document.querySelectorAll(".header-fade");

// Darken header on scroll
if (window.innerWidth > 600) {
  window.addEventListener(
    "scroll",
    function() {
      var fade = window.pageYOffset / window.innerHeight * 1.8;
      for (var i = 0; i < headerFade.length; i++) {
        headerFade[i].style.opacity = 1 - fade;
      }
    },
    false
  );
} else {
  window.addEventListener(
    "scroll",
    function() {
      var fade = window.pageYOffset / window.innerHeight * 2.5;
      for (var i = 0; i < headerFade.length; i++) {
        if (headerFade[i].classList.contains("page-header")) {
          return;
        }
        headerFade[i].style.opacity = 1 - fade;
      }
    },
    false
  );
}

// Scroll button animation
var scrollButton = document.querySelector(".scroll-down-button");
var scrollButtonContainer = scrollButton.getBoundingClientRect();
var scrollButtonPos = scrollButtonContainer.top - window.innerHeight / 3;

window.addEventListener("scroll", function() {
  if (window.pageYOffset > scrollButtonPos) {
    scrollButton.classList.add("active");
  } else {
    scrollButton.classList.remove("active");
  }
});
