
const fetchTemperature = ()=>{
  //   const apiUrl = 'https://api.tomorrow.io/v4/timelines?location=21.607646,-78.922639&fields=temperature&timesteps=1h&units=metric&apikey=bCG4ZtFtqusc9DUeCuvgUsawbMk5H5P3';
  //   async function getData() {
  //     const response = await fetch(apiUrl);
  //     const data = await response.json();
  //     const result = data.data.timelines[0].intervals;

  //     console.log(result[3].startTime);

  //     let date = new Date(result[3].startTime);

  //     console.log(date);
  // }

  // getData();

  const table = document.getElementById('weather-table-id');

  const dateCells = document.querySelectorAll('.date-cell');
  const tempCells = document.querySelectorAll('.temp-cell');

  

}
export default fetchTemperature;