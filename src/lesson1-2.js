let submit = document.querySelector('#form2');

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

    let scale = document.getElementById("main2");
    scale.classList.add('up__text');

    let div = document.createElement('div');
    let fromP = document.getElementById("form2");
    div.classList.add('received__text');
    div.innerHTML = "<strong>отР</strong>";
    fromP.append(div);

    document.querySelector('#name-child').value = localStorage.getItem('parentName');
  }
  if(localStorage.getItem('parentText')){
    document.querySelector('#teaxtarea-child').value = localStorage.getItem('parentText');
  }
})

