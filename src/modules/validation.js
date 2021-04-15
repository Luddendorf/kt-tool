import {regs} from './regExp';

const validation = ()=>{
  const shipForm = document.querySelector('.main__ship-form');
  const formName = document.getElementById('ship-form__name');
  const formClass = document.getElementById('ship-form__class');
  const formQuantity = document.getElementById('ship-form__quantity');
  const formPrice = document.getElementById('ship-form__price');
  const formData = {};

  function removeElement(el) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(el.remove());
      }, 2000);
    });
  }

  const addErrorMsg = (_el, errorText = 'Неверная валидация')=>{
    const errorMsg = document.createElement('div');
    errorMsg.textContent = errorText;
    errorMsg.style.cssText = `text-align: center;
                              font-size: 18px;
                              color: red;`;
    _el.insertAdjacentElement('afterend', errorMsg);
    return errorMsg;
  }

  const errorHandler = (_el, msg)=>{
    _el.classList.add('error');
    removeElement(addErrorMsg(_el, msg))
    .then(()=>{
      _el.classList.remove('error');
    });
  }

  const errorOnChange = (_el, reg = '', text = '')=>{
    if(!_el.value.match(reg)){
      errorHandler(_el, text);
      return false;
    } else{
      return true;
    }
  };

  const isValidate = ()=>{
    if(errorOnChange(formName, regs.regName, null) &&
        errorOnChange(formClass, regs.regShipClass, null) &&
        errorOnChange(formQuantity, regs.regDigits, null) &&
        errorOnChange(formPrice, regs.regDigits, null))
        {
          return true;
        } else{
          return false;
        }
    }

  shipForm.addEventListener('submit', (event)=>{
    event.preventDefault();
    
    errorOnChange(formName, regs.regName, 'только буквы или цифры');
    errorOnChange(formClass, regs.regShipClass, 'цифра от 1 до 9');
    errorOnChange(formQuantity, regs.regDigits, 'только цифры');
    errorOnChange(formPrice, regs.regDigits, 'число формата 123 или 123.321');
    if(isValidate()){
      shipForm.querySelectorAll('input').forEach((input)=>{
        formData[input.name] = input.value;
      });
      console.log(formData);
      shipForm.reset();
      const successMsg = document.createElement('div');
      successMsg.textContent = 'Форма успешно отправлена';
      successMsg.style.cssText = `text-align: center;
                                font-size: 24px;
                                color: green;`;
      shipForm.insertAdjacentElement('beforeend', successMsg);
      removeElement(successMsg);
    }
  })
}

export default validation;