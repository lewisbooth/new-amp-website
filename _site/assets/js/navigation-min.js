"use strict";function throttle(t,n){var e=!1;return function(){e||(t.apply(null,arguments),e=!0,setTimeout(function(){e=!1},n))}}var navItems=document.querySelectorAll(".sticky-nav-animation"),animating=!1;window.innerWidth>960&&!animating&&window.addEventListener("scroll",throttle(function(){if(window.pageYOffset>window.innerHeight/2)for(t=0;t<navItems.length;t++)navItems[t].classList.add("active"),navItems[0].addEventListener("transitionend",function(){setTimeout(function(){animating=!1},300),animating=!0});else for(var t=0;t<navItems.length;t++)navItems[t].classList.remove("active")},50));var mobileButton=document.querySelector(".mobile-menu"),mobileNavigation=document.querySelector(".main-nav-list");mobileButton.addEventListener("click",throttle(function(){mobileButton.classList.toggle("active"),mobileNavigation.classList.toggle("active")},200));