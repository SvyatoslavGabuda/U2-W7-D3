const spanHour = document.getElementById("hour");
const spanMinutes = document.getElementById("min");

const spanSeconds = document.getElementById("sec");

let hours = parseInt(sessionStorage.getItem("ore")) || 0;
let minutes = parseInt(sessionStorage.getItem("minuti")) || 0;
let seconds = parseInt(sessionStorage.getItem("secondi")) || 0;

const progressSeconds = document.getElementById("progressSeconds");
const progressMinute = document.getElementById("progressMinute");
const progresshours = document.getElementById("progressHours");
const timer = function () {
  setInterval(function () {
    spanSeconds.innerText = seconds;
    spanMinutes.innerText = minutes;
    spanHour.innerText = hours;
    seconds++;
    minutes;
    progressSeconds.style.background = `conic-gradient( 
        #395e66 ${((seconds * 100) / 60) * 3.6}deg,
        #eca72c ${((seconds * 100) / 60) * 3.6}deg
        )`;
    progressMinute.style.background = `conic-gradient( 
        #32936f ${((minutes * 100) / 60) * 3.6}deg,
        #eca72c  ${((minutes * 100) / 60) * 3.6}deg
        )`;
    progresshours.style.background = `conic-gradient( 
        #2bc016 ${((hours * 100) / 60) * 3.6}deg,
        #eca72c  ${((hours * 100) / 60) * 3.6}deg
        )`;

    if (seconds > 59) {
      minutes++;

      seconds = 0;

      if (minutes > 59) {
        hours++;
        minutes = 0;
      }
    }
    sessionStorage.setItem("secondi", seconds);
    sessionStorage.setItem("minuti", minutes);
    sessionStorage.setItem("ore", hours);
  }, 1000);
};

window.onload = timer;
