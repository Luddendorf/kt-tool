let resultArr = []

fetch('https://api.tomorrow.io/v4/timelines?location=49.12332929999999,55.7878944&fields=temperature&timesteps=1h&units=metric&apikey=QqpGAqLPn48wraSRSuRNtIegQTHVtFBn')
  .then(data => data.json())
  .then(temperature => {
    const currentArray = temperature.data.timelines[0].intervals;
    currentArray.map((item) => {
      const reg = /[T][1][2]/;

      if (item.startTime.match(reg)) {
        resultArr.push(item);
      } else {
        return null;
      }
    });

    renderTemp();

    resultArr.forEach(element => {
      const table = document.querySelector('#tempTable');
      const tempTr = document.createElement('tr');

      const tempContent = `
            <td class='date'>
            ${element.startTime.substr(0, 10)}
            </td>
            <td class='temp'>
            ${toCelsius(element.values.temperature)}\xB0C
            </td>
            `
      tempTr.innerHTML = tempContent;
      table.appendChild(tempTr);
    });
  })
  .catch(err => {
    const divTemp = document.querySelector('#temperatura');
    const h1Temp = document.createElement('p');
    const errContent = `
        Error ${err}
        `
    h1Temp.innerHTML = errContent;
    divTemp.prepend(h1Temp);
  });

function renderTemp() {
  const divTemp = document.querySelector('#temperatura');
  const h1Temp = document.createElement('h1');
  const h1Content = `
    <p class='h1_temp'>
    Weather for captain!
    </p>
    `
  h1Temp.innerHTML = h1Content;
  divTemp.prepend(h1Temp);
}

function toCelsius(graduses) {
  const temp = graduses;
  const message = `${temp}`;
  const mes = message.substr(0, 2);
  return Math.floor(mes);
};