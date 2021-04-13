import renderWeather from "./renderWeather";

async function getWeather() {
  const response = await fetch(
    "https://api.tomorrow.io/v4/timelines?location=6075895f2d5172000768e6be&fields=temperature&timesteps=1h&units=metric&apikey=brLMQPZB4pnOBoEKYeO0kK6W0aO7JynU"
  )
    .then((res) => res.json())
    .then((res) => res.data.timelines[0].intervals)
    .catch((error) => alert(`Ошибка, ${error}`));

  const dataWeather = await findDays(response);

  await renderWeather(dataWeather.reverse());
}

function findDays(arr) {
  const regExp = /[T][1][2]/;
  const currentArray = arr.filter((item) => item.startTime.match(regExp));
  return currentArray;
}

export default getWeather;
