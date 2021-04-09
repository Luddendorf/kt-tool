const validation = ()=>{
  const shipClass = document.getElementById('ship-form__class');
  const shipQuantity = document.getElementById('ship-form__quantity');
  const shipPrice = document.getElementById('ship-form__price');
  const shipName = document.getElementById('ship-form__name');
  const asideFilter = document.querySelector('.aside__filter');
  const filterInputs = asideFilter.querySelectorAll('input[type="text"]');

  console.log(filterInputs);

  shipClass.addEventListener('input', ()=>{
    if(!shipClass.value.match(/^([-+]?)?[0-9]+(,[0-9]+)?$/gi)){
      shipClass.style.outline = '1px solid red';
    } else{
      shipClass.style.outline = null;
    }
  });

  shipName.addEventListener('input', ()=>{
    if(shipName.value.match(/^([-+]?)?[0-9]+(,[0-9]+)?$/gi)){
      shipName.style.outline = '1px solid red';
    } else{
      shipName.style.outline = null;
    }
  });

  shipQuantity.addEventListener('input', ()=>{
    if(!shipQuantity.value.match(/^([-+]?)?[0-9]+(,[0-9]+)?$/gi)){
      shipQuantity.style.outline = '1px solid red';
    } else{
      shipClass.style.outline = null;
    }
  });

  shipPrice.addEventListener('input', ()=>{
    if(!shipPrice.value.match(/^([-+]?)?[0-9]+(,[0-9]+)?$/gi)){
      shipPrice.style.outline = '1px solid red';
    } else{
      shipPrice.style.outline = null;
    }
  });

  filterInputs.forEach((input)=>{
    input.addEventListener('input', ()=>{
      if(!input.value.match(/^([-+]?)?[0-9]+(,[0-9]+)?$/gi)){
        input.style.outline = '1px solid red';
      } else{
        input.style.outline = null;
      }
    });
  })
}

export default validation;