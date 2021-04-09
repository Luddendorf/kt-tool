export const validateCaptainForm = () => {
  const captainForm = document.querySelector('.app__form');

  captainForm.addEventListener('submit', (e) => {
    e.preventDefault();
    clearForm();
  })
}

const clearForm = () => {
  if(validateName() &&  validateClass() &&
     validateCount() && validatePrice()){
      const name = document.querySelector('#app__form--name');
      const className = document.querySelector('#app__form--class');
      const count = document.querySelector('#app__form--count');
      const price = document.querySelector('#app__form--price');

      const buyShip = {
        name: name.value,
        className: className.value,
        count: count.value,
        price: price.value,
      }

      name.value = '';
      className.value = '';
      count.value = '';
      price.value = '';

      return console.log(buyShip);;
     }else{
      validateName();
      validateClass();
      validateCount();
      validatePrice();
     }
}

const validateName = () => {
  const name = document.querySelector('#app__form--name');
  const validate = /^[а-яё]+\s[а-яё]+$/ig.test(name.value);
  validate ? name.classList.remove('err') : name.classList.add('err');
  return validate;
}

const validateClass = () => {
  const className = document.querySelector('#app__form--class');
  const validate = /^[1-9]$/g.test(className.value);
  validate ? className.classList.remove('err') : className.classList.add('err');
  return validate;
}
const validateCount = () => {
  const count = document.querySelector('#app__form--count');
  const validate = /^\d+$/g.test(count.value);
  validate ? count.classList.remove('err') : count.classList.add('err');
  return validate;
}
const validatePrice = () => {
  const price = document.querySelector('#app__form--price');
  const validate = /^\d+$/g.test(price.value);
  validate ? price.classList.remove('err') : price.classList.add('err');
  return validate;
}
