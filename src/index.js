let submit = document.querySelector('#form1');

submit.addEventListener('submit', () => {
  let name = document.querySelector('#fname-parent').value;
  let newName = name.replace(/отД:/g, '');
  let textArea = document.querySelector('#teaxtarea-parent').value;
  let newTextArea = textArea.replace(/отД:/g, '');

  localStorage.setItem('parentName', newName);
  localStorage.setItem('parentText',newTextArea);
})

window.addEventListener('load', () => {


  if(localStorage.getItem('childName')){

    let div = document.createElement('div');
    let fromD = document.getElementById("form1");
    div.classList.add('received__text');
    div.innerHTML = "<strong>отД</strong>";
    fromD.append(div);

    document.querySelector('#fname-parent').value = localStorage.getItem('childName');
  }
  if( localStorage.getItem('childText')){
    document.querySelector('#teaxtarea-parent').value = localStorage.getItem('childText');
  }
})


