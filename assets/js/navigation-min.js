"use strict";function throttle(t,n){var i=!1;return function(){i||(t.apply(null,arguments),i=!0,setTimeout(function(){i=!1},n))}}var navItems=document.querySelectorAll(".sticky-nav-animation"),animating=!1;window.innerWidth>960&&window.addEventListener("scroll",function(){if(window.pageYOffset>window.innerHeight/2&&!animating)for(t=0;t<navItems.length;t++)navItems[t].classList.add("active"),animating=!0,navItems[t].addEventListener("transitionend",function(){setTimeout(function(){animating=!1},300)});else if(!animating)for(var t=0;t<navItems.length;t++)navItems[t].classList.remove("active"),animating=!0,navItems[t].addEventListener("transitionend",function(){setTimeout(function(){animating=!1},300)})});var mobileButton=document.querySelector(".mobile-menu"),mobileNavigation=document.querySelector(".main-nav-list");mobileButton.addEventListener("click",throttle(function(){mobileButton.classList.toggle("active"),mobileNavigation.classList.toggle("active")},200));