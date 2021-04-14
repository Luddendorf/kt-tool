import weathersAPI from "../api/API";

const tempBlockDiv = document.querySelector(".temp-block-div");

export default function getWeatherData() {
  weathersAPI
    .getWeather()
    .then((data) => data.json())
    .then((res) => {
      const arr = res.data.timelines[0].intervals;
      console.log(arr);
      const regex = /[T][1][2]/;
      arr.forEach((el, id) => {
        if (el.startTime.match(regex)) {
          resultArr.push(el);
        }
      });

      const resultArr = [];

      fetch(path);
      resultArr.forEach((el) => {
        let temp = `<div>
        дата: <span>${el.startTime.slice(0, 11)} </span>
        температура: <span>${el.values.temperature}</span>
        </div>`;
        tempBlockDiv.innerHTML += temp;
      });
    })
    .catch((error) => {
      if (error) {
        let temp = `<div>
        date: <span> is unavailavble rigth now </span>
        temperatures: <span> Come sooner! </span>
        </div>`;
        tempBlockDiv.innerHTML += temp;
      }
    });
}
