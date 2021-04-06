const newYears = "1 Jan 2022";
const daysEl = document.querySelector("#days");
const hoursEl = document.querySelector("#hours");
const minutesEl = document.querySelector("#minutes");
const secsEl = document.querySelector("#seconds");

export const newYearsCounter = () => {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();
  const totalSecs = (newYearsDate - currentDate) / 1000;
  const days = Math.floor(totalSecs / 3600 / 24);
  const hours = Math.floor((totalSecs / 3600) % 24);
  const mins = Math.floor(totalSecs / 60) % 60;
  const secs = Math.floor(totalSecs) % 60;

  daysEl.innerHTML = days;
  hoursEl.innerHTML = hours;
  minutesEl.innerHTML = correctTimeFormat(mins);
  secsEl.innerHTML = correctTimeFormat(secs);
};

function correctTimeFormat(time) {
  return time < 10 ? `0${time}` : time;
}

newYearsCounter();

setInterval(newYearsCounter);
