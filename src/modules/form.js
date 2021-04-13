export default () => {
  const validateName = () => {
    const name = document.querySelector('#form-name');
    const v = /^[А-ЯЁ][а-яё]+$/g.test(name.value);
    v ? name.classList.remove('error') : name.classList.add('error');
    return v;
  };

  const validateClass = () => {
    const className = document.querySelector('#form-class');
    const v = /^[1-9]$/g.test(className.value);
    v ? className.classList.remove('error') : className.classList.add('error');
    return v;
  };
  const validateCount = () => {
    const count = document.querySelector('#form-count');
    const v = /^\d+$/g.test(count.value);
    v ? count.classList.remove('error') : count.classList.add('error');
    return v;
  };
  const validatePrice = () => {
    const price = document.querySelector('#form-price');
    const v = /^[0-9]+$/g.test(price.value);
    v ? price.classList.remove('error') : price.classList.add('error');
    return v;
  };
  const form = document.querySelector('.send-form');

  const makeClearForm = () => {
    if (validateName() && validateClass()
     && validateCount() && validatePrice()) {
      const name = document.querySelector('#form-name');
      const className = document.querySelector('#form-class');
      const count = document.querySelector('#form-count');
      const price = document.querySelector('#form-price');

      const result = {
        name: name.value,
        className: className.value,
        count: count.value,
        price: price.value,
      };

      name.value = '';
      className.value = '';
      count.value = '';
      price.value = '';

      return result;
    }
    const caller = () => {
      validateName();
      validateClass();
      validateCount();
      validatePrice();
    };
    return caller;
  };
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    makeClearForm();
  });
};
