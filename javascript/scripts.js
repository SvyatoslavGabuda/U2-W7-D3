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

const taskInput = document.getElementById("taskInput");
const saveBtn = document.getElementById("save");
const clearBtn = document.getElementById("clear");
const clearListBtn = document.getElementById("clearList");
const addBtn = document.getElementById("add");
const loadBtn = document.getElementById("load");

const taskContainer = document.getElementById("tasks");

const arrayTask = [];

const addTask = function () {
  const element = document.createElement("li");
  element.innerText = taskInput.value;
  taskContainer.appendChild(element);
  arrayTask.push(taskInput.value);
  console.log(arrayTask);
  taskInput.value = "";
};

const saveTasks = function () {
  localStorage.setItem("tasks", JSON.stringify(arrayTask));
  console.log("ho salvato");
};
const clearTasks = function () {
  localStorage.removeItem("tasks");
  const allTasks = document.querySelectorAll("li");
  allTasks.forEach((el) => {
    el.remove();
  });
};
const clearListTasks = function () {
  const allTasks = document.querySelectorAll("li");
  allTasks.forEach((el) => {
    el.remove();
  });
};

const loadTasks = function () {
  if (localStorage.getItem("tasks")) {
    const newArrayTasks = JSON.parse(localStorage.getItem("tasks"));
    newArrayTasks.forEach((el) => {
      const element = document.createElement("li");
      element.innerText = el;
      taskContainer.appendChild(element);
    });
    arrayTask.concat(newArrayTasks);
    console.log(arrayTask);
  } else {
    alert("non ci sono task da caricare");
  }
};

addBtn.onclick = addTask;
saveBtn.onclick = saveTasks;
clearBtn.onclick = clearTasks;
loadBtn.onclick = loadTasks;
clearListBtn.onclick = clearListTasks;
window.onload = () => {
  loadTasks();
  timer();
};
