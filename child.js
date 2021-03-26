let check = document.querySelector('#check');
let radio = document.querySelectorAll('.radio');
check.addEventListener('click', (e) => {
  e.target.checked ?
  radio.forEach(el => el.setAttribute("disabled", "disabled")):
  radio.forEach(el => el.removeAttribute("disabled"))
})

let submit = document.querySelector('#child-form');
submit.addEventListener('submit', () => {
  let name = document.querySelector('#name-child').value;
  let newName = name.replace(/отР:/g, '');
  let textArea = document.querySelector('#teaxtarea-child').value;
  let newTextArea = textArea.replace(/отР:/g, '');

  localStorage.setItem('childName', newName);
  localStorage.setItem('childText', newTextArea);
})

window.addEventListener('load', () => {
  if(localStorage.getItem('parentName')){
    document.querySelector('#name-child').value = "отР: " + localStorage.getItem('parentName');
  }
  if(localStorage.getItem('parentText')){
    document.querySelector('#teaxtarea-child').value = "отР: " + localStorage.getItem('parentText');
  }
})

