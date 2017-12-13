var headerImage = document.getElementById("header-image"),
  docHeight = document.documentElement.offsetHeight;
var headerFade = document.querySelectorAll(".header-fade");

// Darken header on scroll
if (window.innerWidth > 960) {
  window.addEventListener(
    "scroll",
    function() {
      var fix = window.pageYOffset + 50;
      var fixValue = fix + "px";
      var fade = window.pageYOffset / window.innerHeight * 1.5;
      headerImage.style.top = fixValue;
      for (var i = 0; i < headerFade.length; i++) {
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
  if (window.scrollY > scrollButtonPos) {
    scrollButton.classList.add("active");
  } else {
    scrollButton.classList.remove("active");
  }
});
