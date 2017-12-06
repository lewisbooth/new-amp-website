window.addEventListener(
  "load",
  function() {
    var headerImage = document.getElementById("header-image"),
      docHeight = document.documentElement.offsetHeight;
    var headerFade = document.querySelectorAll(".header-fade");

    window.addEventListener(
      "scroll",
      function() {
        var fix = window.pageYOffset / window.innerHeight * window.innerHeight;
        var fixValue = fix + "px";
        var fade = window.pageYOffset / window.innerHeight * 1.5;
        headerImage.style.top = fixValue;
        for (var i = 0; i < headerFade.length; i++) {
          headerFade[i].style.opacity = 1 - fade;
        }
      },
      false
    );
  },
  false
);
