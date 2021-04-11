"use strict";
// let dataPosts = fetch(
//   "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=c2f51b76ee9274f572e408880f610449"
// ).then((data) => data.json())
// .then(data => console.log(data));

window.onload = function () {
  class Weather {
    constructor() {
      this.weather = [];
      this.forecast = [];
    }
    async getPostsAndUsers() {
      let dataWeather = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=Haiti&units=metric&lang=en&appid=c2f51b76ee9274f572e408880f610449"
      ).then((data) => data.json());

      let dataForecast = await fetch(
        "https://api.openweathermap.org/data/2.5/forecast?q=Haiti&units=metric&lang=en&appid=c2f51b76ee9274f572e408880f610449"
      ).then((data) => data.json());

      this.weather = dataWeather;
      this.forecast = dataForecast;

      return {
        weather: dataWeather,
        forecast: dataForecast,
      };
    }
  }

  const weather = new Weather();
  weather.getPostsAndUsers().then((data) => {
    let weather = data.weather;
    let forecast = data.forecast;
    const reg = /[0-9]{4}-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])/;
    const wrapperForWeather = document.querySelector(".weather");

    let dataArray = [
      /* пришлось делать так, потому что API оказался платным на daily weather, 
      и пришлось просматривать респонс и выискывать вручную погоду на 12.00 через день */

      {
        name: weather.name,
        data: forecast.list[0].dt_txt.match(reg)[0],
        weather: Math.floor(forecast.list[0].main.temp),
        description: forecast.list[0].weather[0].description,
      },
      {
        name: weather.name,
        data: forecast.list[8].dt_txt.match(reg)[0],
        weather: Math.floor(forecast.list[8].main.temp),
        description: forecast.list[8].weather[0].description,
      },
      {
        name: weather.name,
        data: forecast.list[16].dt_txt.match(reg)[0],
        weather: Math.floor(forecast.list[16].main.temp),
        description: forecast.list[16].weather[0].description,
      },
    ];
    dataArray.forEach((item) => {
      let div = document.createElement("div");
      div.classList.add('dynamic-wrapper')
      wrapperForWeather.append(div);

      div.innerHTML = `
            <h3>${item.name}</h3>
            <div>
              <p>${item.data}</p>
            </div>
            <div>
              <p>${item.weather} °C</p>
            </div>
            <div>
              <p>${item.description}</p>
            </div>

      `;
    });
  });
};
