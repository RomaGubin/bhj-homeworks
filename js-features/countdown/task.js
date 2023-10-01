const timer = document.getElementById('timer');

const countdown = function() {
  timer.textContent--;
  if (timer.textContent == 0) {
    clearInterval(interval);
    alert('Вы победили в конкурсе!');
  }
}
const interval = setInterval(countdown, 1000);


