
let inputTwo = document.getElementsByClassName('input_two')[0];
let textAreatwo = document.getElementsByClassName('textarea_two')[0];

function putValue() {
  textAreatwo.value = `От родителя: ${localStorage.getItem('area')}`;
}




inputTwo.addEventListener("click", function(){  
  
  localStorage.setItem('area_two', textAreatwo.value);
  localStorage.getItem('area_two');  
  window.location.href = './list1.html';
});
putValue();