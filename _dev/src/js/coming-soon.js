var statsContainer = document
  .querySelector(".project-stats-bars")
  .getBoundingClientRect();
var statsContainerPosition = statsContainer.top - window.innerHeight / 2;
var progressBars = document.querySelectorAll(".project-stats-bar");
var triggered = false;

console.log(statsContainerPosition);

window.addEventListener("scroll", function(e) {
  if (triggered || progressBars.length === 0) return;
  if (window.pageYOffset >= statsContainerPosition) {
    triggerBars();
  }
});

function triggerBars() {
  triggered = true;
  for (var i = 0; i < progressBars.length; i++) {
    var bar = progressBars[i].querySelector("span");
    var label = progressBars[i].querySelector("h3");

    // Trigger progress bar
    bar.classList.add("active");

    countUp(label, 1000);
  }
}

function countUp(e, duration) {
  var framerate = 1000 / 60;
  var range = e.dataset.range;
  var frames = duration / framerate;
  var step = range / frames;
  var count = 0;
  if (range === NaN) {
    console.log("Invalid input for count sequence");
    return;
  }
  var counter = setInterval(function() {
    if (count >= range) {
      clearInterval(counter);
      return;
    }
    count += step;
    e.innerHTML = Math.floor(count) + "%";
  }, framerate);
}
