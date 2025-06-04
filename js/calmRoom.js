const music = document.getElementById('bgMusic');
let timerDisplay = document.getElementById('timer');
let timerInterval;

function toggleMusic() {
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}

function startTimer() {
  clearInterval(timerInterval);
  let duration = 60 * 5; 

  timerInterval = setInterval(() => {
    let minutes = Math.floor(duration / 60);
    let seconds = duration % 60;
    timerDisplay.textContent =
      (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;

    if (--duration < 0) {
      clearInterval(timerInterval);
      alert('Nap time is over!');
    }
  }, 1000);
}
