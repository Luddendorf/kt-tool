const API__URL = 'https://api.tomorrow.io/v4/timelines?location=-73.98529171943665,40.75872069597532&fields=temperature&timesteps=1h&units=metric&apikey=iXVzDfS3thGknvJPuvCUlgWaODQmaFzQ';

 const weatherAPI = async (url) => {
  const response = await fetch(url);
  return await response.json();
}

const addBlockWeather = (data = []) => {
  const row1 = document.querySelector('.row-1');
  const row2 = document.querySelector('.row-2');

  const reg = /(\d\d-\d\d).(12:\d\d)/i;
  data.forEach(time => {
    if(reg.test(time.startTime)){
      const matches = time.startTime.match(reg);
      const td1 = document.createElement('td');
      const td2 = document.createElement('td');
      const convertDegrees = (time.values.temperature-32) / 1.8; // convert to degrees celsius

      td1.append(matches[1]);
      td2.append(convertDegrees.toFixed(2));
      row1.append(td1);
      row2.append(td2);
    }
  });
}

export const weather = async () => {
  // const url = 'http://localhost:3006/data';  // для JSON сервера
  const data = await weatherAPI(API__URL);
  addBlockWeather(data.data.timelines[0].intervals);
}
