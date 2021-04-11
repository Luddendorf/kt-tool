const form = document.querySelector('form');
const input = document.querySelectorAll("input[type=text]")
const formName = form.elements.name;
const formQuantity = form.elements.quantity;
const formClass = form.elements.class;
const formPrice = form.elements.price;

const sendBtn = document.querySelector("#button-form");

function sendForm() {
    let obj = {
        name: formName.value,
        quantity: formQuantity.value,
        class: formClass.value,
        price: formPrice.value,
      };
        console.log(obj);
        form.reset();
}
sendBtn.addEventListener("click", sendForm);
