export const requestToWeatherApi = async function send(url) {
  await fetch(url)
    .then((res) => res.json())
    .then((resJson) => {
      const dates = document.getElementsByClassName("dates");
      const temperatures = document.getElementsByClassName("temperatures");
      const numberDays = 4;
      let indexUpd = 0;
      const timeFormat = /\d\d\d\d-\d\d-\d\dT12:\d\d:\d\dZ/;
      resJson.data.timelines[0].intervals.forEach((hour, idx) => {
        if (timeFormat.test(hour.startTime) && indexUpd < numberDays) {
          const date =
            hour.startTime.split("").splice(8, 2).join("") +
            "." +
            hour.startTime.split("").splice(5, 2).join("");
          dates[indexUpd].textContent = `${date}`;
          temperatures[indexUpd].textContent = `${hour.values.temperature}`;
          indexUpd++;
        }
      });
    });
};
