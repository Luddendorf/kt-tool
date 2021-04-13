import validateInput from "./validateInput";

const form = document.querySelector(".form__request");
const formMessage = document.querySelector(".form__message");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const dataSend = {};

  formMessage.classList.remove("form__message-error");

  form.forEach((element) => {
    switch (element.id) {
      case "name":
        validateInput(element, /^[а-яА-Я]{4,10}$/)
          ? (dataSend.name = element.value)
          : delete dataSend.name;
        break;
      case "amount":
        validateInput(element, /^[0-9]{1,10}$/)
          ? (dataSend.amount = element.value)
          : delete dataSend.amount;
        break;
      case "class":
        validateInput(element, /^[0-9]{1,10}$/)
          ? (dataSend.class = element.value)
          : delete dataSend.class;
        break;
      case "price":
        validateInput(element, /^[0-9]{3,7}$/)
          ? (dataSend.price = element.value)
          : delete dataSend.price;
        break;
      default:
        break;
    }
  });
  console.log(dataSend);

  Object.values(dataSend).length === 4
    ? form.reset()
    : formMessage.classList.add("form__message-error");
});

export default form;
