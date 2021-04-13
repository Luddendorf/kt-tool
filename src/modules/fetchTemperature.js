
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

    const apiUrl = 'https://api.tomorrow.io/v4/timelines?location=21.607646,-78.922639&fields=temperature&timesteps=1h&units=metric&apikey=C6U2pWsF7y2ih57cDvKUwdjHC2wM8hWf';
    async function getData() {
      const response = await fetch(apiUrl);
      const data = await response.json();

      const result = data.data.timelines[0].intervals;

      const regDate = /(\d\d-\d\d).(12:\d\d)/i;

      result.forEach((timeStamp)=>{
        if(regDate.test(timeStamp.startTime)){
          const date = timeStamp.startTime.match(regDate);
          const temp = timeStamp.values.temperature;
          dateArr.push(date[1].split('-').reverse().join('/'));
          tempArr.push(`+${Math.ceil(temp)}°C`);
        }
      })

    fillCells(dateCells, dateArr);
    fillCells(tempCells, tempArr);
  }

  getData();

}
export default fetchTemperature;