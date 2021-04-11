const updateWeatherWidget = (dates, temps) => {

  fetch('https://api.tomorrow.io/v4/timelines?location=-73.98529171943665,40.75872069597532&fields=temperature&timesteps=1h&units=metric&apikey=EleFOIfosYKEaVhu12UgclH7oGfZ7nFu')
  .then(res => res.json())
  .then(resJson => {

    const forecast = resJson.data.timelines[0].intervals

    const numberOfDays = 4
    let indexToUpdate = 0
    const timeRE = /\d\d\d\d-\d\d-\d\dT12:\d\d:\d\dZ/

    forecast.forEach(hour => {

      if(timeRE.test(hour.startTime) && indexToUpdate < numberOfDays){

        const date = hour.startTime.split('').splice(8,2).join('') + '.' + hour.startTime.split('').splice(5,2).join('')
        dates[indexToUpdate].innerHTML = date

        temps[indexToUpdate].innerHTML = hour.values.temperature + '*F'

        indexToUpdate++

      }

    })

  })

}

const WeatherWidget = () => {

  const weatherWidget = document.createElement('div')
  weatherWidget.classList.add('weather-widget')

  const title = document.createElement('h3')
  title.classList.add('weather-widget-title')
  title.innerHTML = 'Weather Forecast'

  const forecastContent = document.createElement('div')
  forecastContent.classList.add('forecast-content')

  const dateRow = document.createElement('div')
  dateRow.classList.add('weather-widget-row')

  const dateTitle = document.createElement('div')
  dateTitle.innerHTML = 'Date:'
  dateTitle.classList.add('weather-widget-col')
  dateTitle.classList.add('forecast-content-title')


  const tempRow = document.createElement('div')
  tempRow.classList.add('weather-widget-row')

  const tempTitle = document.createElement('div')
  tempTitle.innerHTML = 'Temperature:'
  tempTitle.classList.add('weather-widget-col')
  tempTitle.classList.add('forecast-content-title')


  dateRow.append(dateTitle)
  tempRow.append(tempTitle)

  const numberOfDays = 4
  const dates = []
  const temps = []
  for(let i = 0; i < numberOfDays; i++){

    const date = document.createElement('div')
    date.classList.add('weather-widget-col')
    date.innerHTML = '00.00'
    dates.push(date)

    const temp = document.createElement('div')
    temp.classList.add('weather-widget-col')
    temp.innerHTML = '+0*C'
    temps.push(temp)

  }

  for(let i = 0; i < numberOfDays; i++){

    dateRow.append(dates[i])
    tempRow.append(temps[i])

  }

  forecastContent.append(dateRow)
  forecastContent.append(tempRow)

  weatherWidget.append(title)
  weatherWidget.append(forecastContent)

  updateWeatherWidget(dates, temps)                             //

  return weatherWidget

}

export default WeatherWidget
