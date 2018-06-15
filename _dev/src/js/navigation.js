// nav appear when scrolled
var navItems = document.querySelectorAll(".sticky-nav-animation");
var animating = false;

if (window.innerWidth > 960 && !animating) {
  window.addEventListener(
    "scroll",
    throttle(function () {
      if (window.pageYOffset > 200) {
        for (var i = 0; i < navItems.length; i++) {
          navItems[i].classList.add("active");

          navItems[0].addEventListener("transitionend", function () {
            setTimeout(() => {
              animating = false;
            }, 300);
            animating = true;
          });
        }
      } else {
        for (var i = 0; i < navItems.length; i++) {
          navItems[i].classList.remove("active");
        }
      }
    }, 20)
  );
}

// Mobile button animation
var mobileButton = document.querySelector(".mobile-menu");
var mobileNavigation = document.querySelector(".main-nav-list");

mobileButton.addEventListener(
  "click",
  throttle(function () {
    mobileButton.classList.toggle("active");
    mobileNavigation.classList.toggle("active");
  }, 200)
);

// Throttle function
function throttle(callback, limit) {
  var wait = false;
  return function () {
    if (!wait) {
      callback.apply(null, arguments);
      wait = true;
      setTimeout(function () {
        wait = false;
      }, limit);
    }
  };
}
