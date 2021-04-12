
global.fetch = require("node-fetch");

const url = 'https://api.tomorrow.io/v4/timelines?location=-12.561429,43.450748&fields=temperature&timesteps=1h&units=metric&apikey=HAfCfUqmVM33AznA9lhooAK162dvK2ke'


fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {

    let today = new Date();

    let test;
    for(let i = 0; i < data.data.timelines[0].intervals.length; i++) {

      test = new Date(data.data.timelines[0].intervals[i].startTime)

      // console.log(data.data.timelines[0].intervals[i]);

      if (today.getDate() === test.getDate() && 12 === test.getHours()) {

        console.log(`${test.getMonth()}.${test.getDate()}`)
        console.log(data.data.timelines[0].intervals[i].values.temperature);
        today.setDate(today.getDate() + 1);
      }
    }

  });
