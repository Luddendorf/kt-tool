let check = document.querySelector('#check');
let radio = document.querySelectorAll('.radio');
check.addEventListener('click', (e) => {
  e.target.checked ?
  radio.forEach(el => el.setAttribute("disabled", "disabled")):
  radio.forEach(el => el.removeAttribute("disabled"))
})

let submit = document.querySelector('#parent-form');

submit.addEventListener('submit', () => {
  let name = document.querySelector('#fname-parent').value;
  name = name.replace(/отД:/g, '');
  let textArea = document.querySelector('#teaxtarea-parent').value;
  textArea = textArea.replace(/отД:/g, '');
  localStorage.setItem('parentName', name);
  localStorage.setItem('parentText', textArea);
})

window.addEventListener('load', () => {
  let iframe = document.getElementById("frame").contentWindow.document.body;
  iframe.style.transform = 'scale(1)';
  iframe.style.padding = 0;
  if(localStorage.getItem('childName')){
    document.querySelector('#fname-parent').value = "отД: " + localStorage.getItem('childName');
  }
  if( localStorage.getItem('childText')){
    document.querySelector('#teaxtarea-parent').value = "отД: " + localStorage.getItem('childText');
  }
})

