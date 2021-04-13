
const fetchTemperature = ()=>{
    const apiUrl = 'https://api.tomorrow.io/v4/timelines?location=21.607646,-78.922639&fields=temperature&timesteps=1h&units=metric&apikey=bCG4ZtFtqusc9DUeCuvgUsawbMk5H5P3';
    async function getData() {
      const response = await fetch(apiUrl);
      const data = await response.json();
      const result = Object.assign({}, data);

      console.log(result.data.timelines[0].intervals[0].startTime);

      let date = new Date(result.data.timelines[0].intervals[1].startTime);

      console.log(date.getUTCDate());
  }

  getData();

  const table = document.getElementById('weather-table-id');

  const dateCells = document.querySelectorAll('.date-cell');
  const tempCells = document.querySelectorAll('.temp-cell');

  

}
export default fetchTemperature;