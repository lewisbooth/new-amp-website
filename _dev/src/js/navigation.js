window.addEventListener("load", function() {
  var navItems = document.querySelectorAll(".sticky-nav-animation");
  window.addEventListener("scroll", function() {
    if (window.pageYOffset > window.innerHeight) {
      for (var i = 0; i < navItems.length; i++) {
        navItems[i].classList.add("active");
      }
    } else {
      for (var i = 0; i < navItems.length; i++) {
        navItems[i].classList.remove("active");
      }
    }
  });
});
