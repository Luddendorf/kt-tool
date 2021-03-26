
let inputOne = document.getElementsByClassName('input_one')[0];
let textAreaone = document.getElementsByClassName('textarea_one')[0];


function putValue() {
  textAreaone.value = `От дочери: ${localStorage.getItem('area_two')}`;
}


inputOne.addEventListener("click", function(){  
  
  localStorage.setItem('area', textAreaone.value);
  localStorage.getItem('area');  
  window.location.href = './list2.html';
});

putValue();

let radioButtons = document.querySelectorAll('input[type=radio]');
let checkBox = document.querySelector('.select_two');



  radioButtons.forEach(function(item){
     if (checkBox.checked) {
     item.disabled = true;
    }
   });

   

   

 

   
 



