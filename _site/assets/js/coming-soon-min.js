"use strict";function triggerBars(){triggered=!0;for(var e=0;e<progressBars.length;e++){var t=progressBars[e].querySelector("span"),r=progressBars[e].querySelector("h3");t.classList.add("active"),countUp(r,1e3)}}function countUp(e,t){var r=e.dataset.range,s=r/(t/(1e3/60)),n=0;if(NaN!==r)var o=setInterval(function(){n>=r?clearInterval(o):(n+=s,e.innerHTML=Math.floor(n)+"%")},1e3/60);else console.log("Invalid input for count sequence")}var statsContainer=document.querySelector(".project-stats-bars").getBoundingClientRect(),statsContainerPosition=statsContainer.top-window.innerHeight/2,progressBars=document.querySelectorAll(".project-stats-bar"),triggered=!1;console.log(statsContainerPosition),window.addEventListener("scroll",function(e){triggered||0===progressBars.length||window.pageYOffset>=statsContainerPosition&&triggerBars()});