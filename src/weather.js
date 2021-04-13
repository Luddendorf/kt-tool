// curl --request GET --url \
// 'https://api.tomorrow.io/v4/timelines?location=-73.98529171943665,40.75872069597532&fields=temperature&timesteps=1h&units=metric&apikey=5W0q0fq8cqAPbF6naeQ5Ofj7cVXM76ib'

const requestURL = 'https://api.tomorrow.io/v4/timelines?location=-73.98529171943665,40.75872069597532&fields=temperature&timesteps=1h&units=metric&apikey=5W0q0fq8cqAPbF6naeQ5Ofj7cVXM76ib'
const tempArr = []
console.log('You got temperature array', tempArr)
function sendRequest(method, url){
  return fetch(url).then(response =>{
    return response.json()
  })
  .then(temperature =>{
    //console.log(temperature)
    let forecast = temperature.data.timelines[0].intervals;
    forecast.map((item, index) => {
      let regExp = /[T][1][2]/;
      if (item.startTime.match(regExp)) {
        let actualDate = (item.startTime.split('').splice(8,2).join('') + '.' + item.startTime.split('').splice(5,2).join(''));
        item.startTime = actualDate;
        let celsTemp = (Math.round((item.values.temperature - 32)/1.8));
        item.values.temperature = celsTemp;
        tempArr.push(item);
      }
      else return
    })
    renderTemp();
    tempArr.forEach(element => {
      const tabMyShip = document.querySelector('#tempCol');
      let temperatureDiv = document.createElement('div');
      temperatureDiv.classList.add('tempBlock');
      let contentTemperature = `<div class='date'> ${element.startTime}</div><div class='temp'>${element.values.temperature} &#8451 </div>`
      temperatureDiv.innerHTML = contentTemperature;
      tabMyShip.appendChild(temperatureDiv);
    })
  })
  .catch(err => {
    console.log('Ошибка', err);
    const tempDiv = document.querySelector('#tempHead');
    let temperatureH1 = document.createElement('p');
    let contentError = `Ошибка 429 ${err}<br>
    "The request limit for this resource has been reached for the current rate limit window. Wait and retry the operation, or examine your API request volume.`
    temperatureH1.innerHTML = contentError;
    tempDiv.appendChild(temperatureH1);
  }
)}
function renderTemp() {
  const tempDiv = document.querySelector('#tempHead');
  let temperatureH = document.createElement('h2');
  let forecastForCaptain = `<h2 class='tempHead'>Прогноз погоды для отважного капитана Алексея Хохлова</h2>`
  temperatureH.innerHTML = forecastForCaptain;
  tempDiv.appendChild(temperatureH);
}
sendRequest ('GET', requestURL)
