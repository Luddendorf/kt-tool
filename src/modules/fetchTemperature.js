
const fetchTemperature = ()=>{

  const fillCells = (_elements, arr)=>{
    _elements.forEach((cell, index)=>{
      cell.textContent = arr[index];
    })
  };

  const dateArr = [];
  const tempArr = [];
  
  const dateCells = document.querySelectorAll('.date-cell');
  const tempCells = document.querySelectorAll('.temp-cell');

    const apiUrl = 'https://api.tomorrow.io/v4/timelines?location=21.607646,-78.922639&fields=temperature&timesteps=1h&units=metric&apikey=bCG4ZtFtqusc9DUeCuvgUsawbMk5H5P3';
    async function getData() {
      const response = await fetch(apiUrl);
      const data = await response.json();
      const result = Object.assign({}, data.data.timelines[0].intervals);

    //   console.log(result);

    //   let date = new Date(result[0].startTime);

    //   console.log(date.getUTCDate());
  }

  //getData();

  fillCells(dateCells, dateArr);
  fillCells(tempCells, tempArr);

}
export default fetchTemperature;