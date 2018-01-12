const videoControls = document.querySelectorAll(".video-controls");

for (var i = 0; i < videoControls.length; i++) {
  const video = videoControls[i].querySelector("video");
  const button = videoControls[i].querySelector("button");

  if (window.innerWidth < 600) {
    video.pause();
  }

  function togglePlay() {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  }

  function updateButton() {
    let state = this.paused ? "visible" : "hidden";
    button.style.visibility = state;
  }

  video.addEventListener("click", togglePlay);
  video.addEventListener("play", updateButton);
  video.addEventListener("pause", updateButton);
  button.addEventListener("click", togglePlay);
}
