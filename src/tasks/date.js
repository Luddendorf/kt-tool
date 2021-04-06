const dateBlock = document.querySelector(".current-time");

function showTime() {
  let today = new Date();
  let hour = today.getHours();
  let min = today.getMinutes();
  let sec = today.getSeconds();

  dateBlock.innerHTML = `${hour}:${addZero(min)}:${addZero(sec)}`;
  setTimeout(showTime, 1000);
}

function addZero(n) {
  return (n < 10 ? "0" : "") + n;
}

export default showTime;
