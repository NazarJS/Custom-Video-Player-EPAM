const player = document.querySelector('.palyer');
const video = player.querySelector('.viewer');
const toggle = document.querySelector('.toggle');
const skipButtons = document.querySelectorAll('[data-skip]');
const videoSpeadCont = document.querySelector('#rang');
const videoVolumeCont = document.querySelector('#volume');
let progress = document.querySelector('#progress');

videoVolumeCont.oninput = videoVolume;
videoSpeadCont.oninput = videoSpead;
function showTime() {
  document.querySelector('.time').innerHTML = video.currentTime;
}
//function start and stop video
function togglePlay() {
  video.paused ? video.play() : video.pause();
}
//function update the toggle
function updateButton() {
  const icon = this.paused ? '►' : '❚ ❚';
  toggle.textContent = icon;
}
//spead controler
function videoSpead() {
  let range = this.value;
  video.playbackRate = range / 100;
  console.log(range);
}
//volume controler
function videoVolume() {
  let volume = this.value;
  console.log(volume);
  video.volume = volume / 100;
}
// function shows progress of video
video.ontimeupdate = progressUpdate;
function progressUpdate() {
  progress.value = (100 * video.currentTime) / video.duration;
}
//function add to current time a value from HTMLElement.dataset
function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
toggle.addEventListener('click', togglePlay);

skipButtons.forEach((button) => button.addEventListener('click', skip));
