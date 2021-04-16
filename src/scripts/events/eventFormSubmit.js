 export const formSubmit = function(form){
   form.onsubmit = function (e) {
    e.preventDefault();
    
    let result = {
      name: form.name.value,
      class: form.class.value,
      quantity: form.quantity.value,
      price: form.price.value,
    };
    alert(JSON.stringify(result));
    form.name.value = "";
    form.class.value = "";
    form.quantity.value = "";
    form.price.value = "";
  };
 } 
  