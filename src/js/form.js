const form = document.querySelector('form');
const inputText = document.querySelectorAll("input[type=text]");
const sendBtn = document.querySelector("#button-form");

function sendForm() {
  let arr = [];
  inputText.forEach(item => {
    if (item.value !== '') {
      item.style.border = "2px solid black";
       arr.push(item.value);
    } else {
      item.style.border = "2px solid red";
    }
  });
  const obj = Object.assign({}, arr);
  console.log(obj);
  form.reset(); 
}
sendBtn.addEventListener("click", sendForm);