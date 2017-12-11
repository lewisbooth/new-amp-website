window.addEventListener("load", function() {
  // nav appear when scrolled
  var navItems = document.querySelectorAll(".sticky-nav-animation");
  if (window.innerWidth > 960) {
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
  }

  // Mobile button animation
  var mobileButton = document.querySelector(".mobile-menu");
  var mobileNavigation = document.querySelector(".main-nav-list");

  mobileButton.addEventListener("click", () => {
    mobileButton.classList.toggle("active");
    mobileNavigation.classList.toggle("active");
  });
});
