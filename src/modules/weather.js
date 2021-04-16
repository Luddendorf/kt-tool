import axios from 'axios'
// Если на экране нет цифр, то закончились число доступных вызовов API

export default () => {
    const dateItems = document.querySelectorAll('.date-item');
    const tempItems = document.querySelectorAll('.temp-item');
    const apiKey = 'yQkDrPPguEHZWGXsloAuCxkn872Pw674';
    const dates = [];
    const temperatures = [];
    const url = `https://api.tomorrow.io/v4/timelines?location=55.796391,49.108891&fields=temperature&timesteps=1h&units=metric&apikey=${apiKey}`;
    const fill = (e, data) => {
        e.forEach((item, index) => {
            item.textContent = data[index];
        })
    };
    const apiCall = async () => {
        const request = axios.get(url);
        const response = await request;
        const weatherData = response.data;
        const ourData = weatherData.data.timelines[0].intervals;
        const reg = /(\d\d-\d\d).(13:\d\d)/i;
        ourData.forEach((timeStamp) => {
            if (reg.test(timeStamp.startTime)) {
                const date = timeStamp.startTime.match(reg);
                const temp = timeStamp.values.temperature;
                // заполняем массивы через регулярку
                dates.push(date[1].split('-').reverse().join('.'));
                temperatures.push(`+${Math.ceil(temp)}°C`);
                console.log(temperatures)

            }
            // заполняем табличку
            fill(dateItems, dates);
            fill(tempItems, temperatures);
            return;
        })
    }
    return apiCall();
}