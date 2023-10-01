

const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

function getHole(index) {
  return document.getElementById(`hole${index}`);
  }

  for (let i = 1; i <= 9; i++) {
    const hole = getHole(i);
    hole.addEventListener('click', function() {
    if (hole.classList.contains('hole_has-mole')) {
    dead.textContent++;
    } else {
    lost.textContent++;
    }

    if (dead.textContent == 10) {
      alert('Победа!');
      resetCounters();
    } else if (lost.textContent == 5) {
      alert('Вы проиграли!');
      resetCounters();
    }
    });
  }


function resetCounters() {
  dead.textContent = 0;
  lost.textContent = 0;
  }