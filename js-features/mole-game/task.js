const dead = document.getElementById("dead");
const lost = document.getElementById("lost");

let deadCounter = 0;
let lostCounter = 0;

function counter() {
  dead.textContent = deadCounter;
  lost.textContent = lostCounter;
}

function getHole(index) {
  for (let i = 1; i <= index; i++) {
    let hole = document.getElementById(`hole${i}`);
    hole.onclick = function() {
      if (hole.classList.contains('hole_has-mole')) {
        deadCounter++;
        counter();
        setTimeout(() => check(), 50);
      } else {
          lostCounter++;
          counter();
          setTimeout(() => check(), 50);
        }
    }
  }
}

function check() {
  if (deadCounter === 10) {
    alert('Ура! Победа!');
    reset();
  }

  if (lostCounter === 5) { 
    alert('Проиграли! Попробуйте еще!');
    reset();
  }
}

function reset() {
    deadCounter = 0;
    lostCounter = 0;
    counter();
    return;
  }

getHole(10);
