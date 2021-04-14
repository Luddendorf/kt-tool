import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://api.tomorrow.io/v4/",
});

const weathersAPI = {
  getWeather() {
    return instance
      .get(
        "timelines?location=-73.98529171943665,40.75872069597532&fields=temperature&timesteps=1h&units=metric&apikey=SqBm2meinL475JcclCcefNYITDn4sKFE"
      )
  },
};

export default weathersAPI;
