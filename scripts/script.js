// myAudio.currentTime = 60;
// (function(){})()
const audio = document.querySelector('.audio');
const toggle = document.querySelector('.toggle-button');
const needle = document.querySelector('.needle');
const range = document.querySelector('.player-slider');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress-filled');
const tracks = [];
audio.volume = 0.5;

// console.log(toggle)

// 撥放和暫停
function togglePlay(){
  const method = audio.paused ? 'play' : 'pause';
  audio[method]();
}

function updateButton(){
  const play = `background-image: url(images/btn_play.svg);`;
  const pause = `background-image: url(images/btn_pause.svg);`;
  const needle_play = `background-image: url(images/needle_play.svg);
  background-size: 384px 450px; top: 17.3rem; left: 2rem;`;
  const needle_pause = `background-image: url(images/needle_pause.svg);
  background-size: 297.2px 444.58px; top: 15.3rem;
  left: 7rem;`;

  toggle.style.cssText = this.paused ? play : pause;
  needle.style.cssText = this.paused ? needle_play : needle_pause;  
}

// 控制音量
function handleRangeUpdate() {
  audio[this.name] = this.value;
}

// 時間條
function scrub(e){
  console.log(e);
  const scrubTime = (e.offsetX / progress.offsetWidth) * audio.duration;
  audio.currentTime = scrubTime;
}

function handleProgress(){
  const percent = (audio.currentTime / audio.duration) * 100;
  const current = document.querySelector('.currentTime');
  const currentMin = parseInt(Math.floor(audio.currentTime / 60));
  const currentSec = (audio.currentTime % 60) >= 10 
                      ? parseInt(audio.currentTime % 60)
                      : '0' + parseInt(audio.currentTime % 60);

  progressBar.style.cssText = `flex-basis: ${percent}%;`;
  current.innerHTML = `${currentMin}:${currentSec}`;
}


toggle.addEventListener('click', togglePlay);
audio.addEventListener('play', updateButton);
audio.addEventListener('pause', updateButton);

range.addEventListener('change',handleRangeUpdate);

progress.addEventListener('click', scrub);
audio.addEventListener('timeupdate', handleProgress);
