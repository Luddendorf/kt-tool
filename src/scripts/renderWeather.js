function renderWeather(arr) {
  const tableDays = document.querySelector(".table__days");
  const tableTemps = document.querySelector(".table__temps");

  arr.forEach((element) => {
    const date = new Date(element.startTime);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const dayHTML = `
  <div class="table__info">${day}.${addZero(month)}</div>
  `;

    const temperature = `
    <div class="table__info">${convertTemp(
      element.values.temperature
    )}&deg C</div>
  `;

    tableDays.insertAdjacentHTML("afterbegin", dayHTML);
    tableTemps.insertAdjacentHTML("afterbegin", temperature);
  });
}

function addZero(n) {
  return (n < 10 ? "0" : "") + n;
}

function convertTemp(n) {
  return Math.round((n - 32) / 1.8);
}

export default renderWeather;
