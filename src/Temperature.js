/* 
https://api.tomorrow.io/v4/timelines?location=-73.98529171943665,40.75872069597532&fields=temperature&timesteps=1h&units=metric&apikey=RBQQ7dtdeHK6wKrmoBvqNk94k9yoTFTB

https://api.openweathermap.org/data/2.5/weather?q=Belgorod&appid=df967ed62ed57f3099c416e72bc7526d

https://api.tomorrow.io/v4/timelines?location=-73.98529171943665,40.75872069597532&fields=temperature&timesteps=1h&units=metric&apikey=7mnu6Im4yRODlaYnkOl4mXO10OoRx7fK
/* Fetch */
let result = []

const tempPromise = fetch('https://api.tomorrow.io/v4/timelines?location=-50.631183,36.676264&fields=temperature&timesteps=1h&units=metric&apikey=7mnu6Im4yRODlaYnkOl4mXO10OoRx7fK');
tempPromise
    .then(data => data.json())
    .then(temperature => {
        // console.log(temperature);
        // console.log(temperature.data.timelines[0].intervals[0].startTime);
        // console.log(temperature);
        let currentArray = temperature.data.timelines[0].intervals;
        currentArray.map((item, index) => {
            let reg = /[T][1][2]/;
            // let regTwo = /[T][1][3]/;
            if (item.startTime.match(reg)) {
                result.push(item);
                // console.log('resStart', result);
            } else {
                return null;
            }
            // if (item.startTime.match(regTwo)) {
            //     result.push(item);
            //     // console.log('resEnd', result);
            // } 
        })


        // console.log('result', result);
        renderTemp();
        result.forEach(element => {
            const tabMyShip = document.querySelector('#tempCol');
            let temperatureDiv = document.createElement('div');
            temperatureDiv.classList.add('tempBlock');
            // console.log(element.values.temperature);
            // toCelsius(element.values.temperature);
            let contentTemperature = `
            <div class='date'>
            ${element.startTime.substr(0,10)}
            </div>
            <div class='temp'>
            ${toCelsius(element.values.temperature)}\xB0C
            </div>
            `
            temperatureDiv.innerHTML = contentTemperature;
            tabMyShip.appendChild(temperatureDiv);
        });
    })
    .catch(err => {
        console.log('Ошибка', err);
        const tempDiv = document.querySelector('#h1_temp');
        let temperatureH1 = document.createElement('p');
        let contentError = `
        Ошибка 429 ${err}
        <br>
        Совет: Много запросов на API, используй второй ключ в fetch (ключи расположены в начале файла temperature.js)
        `
        temperatureH1.innerHTML = contentError;
        tempDiv.appendChild(temperatureH1);
    })


function renderTemp() {
    const tempDiv = document.querySelector('#h1_temp');
    let temperatureH = document.createElement('h1');
    let header = `
    <h1 class='h1_temp'>
    Прогноз погоды для отважного капитана Владимира Ерошенко, покорителя native Javascript!
    </h1>
    `
    temperatureH.innerHTML = header;
    tempDiv.appendChild(temperatureH);
}

function toCelsius(graduses) {
    const temp = graduses;
    const cel = (temp - 32) * 5 / 9;
    const message = `${cel}`;
    // console.log(message);
    return message.substr(0, 5);
};