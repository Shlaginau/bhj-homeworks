let time = 59;
const timeSet = document.getElementById('timer');

function countdown() {

  let hour = Math.floor(time / 3600);
  let minute = Math.floor(time / 60);
  let second = time % 60;
  second = second < 10 ? "0" + second : second;
  minute = minute < 10 ? "0" + minute : minute;
  hour = hour < 10 ? "0" + hour : hour;
  timeSet.innerHTML = `${hour}:${minute}:${second}`;
  
  if (second <= 0 && minute <= 0 && hour <= 0) {
    clearTimeout(countdown);
    alert("Вы победили в конкурсе!");
  } else {
      time--;
      setTimeout(countdown, 1000);
    }
}

countdown();