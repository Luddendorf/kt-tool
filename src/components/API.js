export default function getData() {
  const path =
    "https://api.tomorrow.io/v4/timelines?location=-73.98529171943665,40.75872069597532&fields=temperature&timesteps=1h&units=metric&apikey=SqBm2meinL475JcclCcefNYITDn4sKFE";
  const tempBlockDiv = document.querySelector(".temp-block-div");
  console.log(tempBlockDiv);

  const resultArr = [];

  fetch(path)
    .then((data) => data.json())
    .then((res) => {
      const arr = res.data.timelines[0].intervals;
      const regex = /[T][1][2]/;
      arr.forEach((el, id) => {
        if (el.startTime.match(regex)) {
          resultArr.push(el);
        }
      });

      resultArr.forEach((el) => {
        const div = document.createElement("div");
        div.setAttribute("class", "temp-block");
        let temBlock = `<div class='date'>
        ${el.startTime.slice(0, 11)} 
        </div>
        <div class='temp'>${el.values.temperature}</div>`;
        div.innerHTML = temBlock;
        tempBlockDiv.append(div);
      });
    })
    .catch((error) => console.log(error));
}
