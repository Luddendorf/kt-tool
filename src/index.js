let submit = document.querySelector('#form1');

submit.addEventListener('submit', () => {
  let name = document.querySelector('#fname-parent').value;
  let textArea = document.querySelector('#teaxtarea-parent').value;

  localStorage.setItem('parentName', name);
  localStorage.setItem('parentText',textArea);
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


