import { getWeather } from "../api/API";

export default function getWeatherData() {
  const tempBlockDiv = document.querySelector(".temp-block-div");

  const resultArr = [];

  getWeather()
    .then((res) => {
      const arr = res.data.timelines[0].intervals;
      const regex = /[T][1][2]/;
      arr.forEach((el, id) => {
        if (el.startTime.match(regex)) {
          resultArr.push(el);
        }
      });

      const toCelsius = (n) => Number.parseFloat(((n - 32) * 5) / 9).toFixed(2);
      
      resultArr.forEach((el) => {
        let temp = `<div>
        дата: <span>${el.startTime.slice(0, 11)} </span>
        температура: <span>${toCelsius(el.values.temperature)}</span>
        </div>`;
        tempBlockDiv.innerHTML += temp;
      });
    })
    .catch((error) => {
      console.log(error);
      if (error) {
        let temp = `<div>
        date: <span> is unavailavble rigth now </span>
        temperatures: <span> Come sooner! </span>
        </div>`;
        tempBlockDiv.innerHTML += temp;
      }
    });
}
