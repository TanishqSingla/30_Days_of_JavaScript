//Getting elements
const player = document.querySelector(" .player");
const video = player.querySelector(".viewer");
const progress = player.querySelector("progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");

//Building functions
function togglePlay() {
  method = video.paused ? "play" : "pause";
  video[method]();
  console.log(method);
}

function updateButton() {
  const icon = this.paused ? "▶" : "❚❚";
  toggle.textContent = icon;
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

//Hooking function
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);

toggle.addEventListener("click", togglePlay);

skipButtons.forEach((btn) => btn.addEventListener("click", skip));
