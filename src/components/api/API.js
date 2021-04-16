export const getWeather = () =>
  fetch(
      "https://api.tomorrow.io/v4/timelines?location=-73.98529171943665,40.75872069597532&fields=temperature&timesteps=1h&units=metric&apikey=SqBm2meinL475JcclCcefNYITDn4sKFE"
    )
    .then((data) => data.json());
