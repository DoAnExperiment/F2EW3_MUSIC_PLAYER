// myAudio.currentTime = 60;
// myAudio.volume = 0.4;

const audio = document.querySelector('.audio');
const toggle = document.querySelector('.toggle-button');
const needle = document.querySelector('.needle');
// console.log(toggle)

const tracks = [];

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

toggle.addEventListener('click', togglePlay);
audio.addEventListener('play', updateButton);
audio.addEventListener('pause', updateButton);