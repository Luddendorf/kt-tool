const dropdown = ()=>{
  const anchorImg = document.querySelector('.main__anchor-img');
  const ul = document.querySelector('.main__ul');
  const ulButton = document.querySelector('.dropdown-button');
  const ulItem = document.querySelectorAll('.main__ul-item');
  let flag = true;

  anchorImg.addEventListener('click', ()=>{
    if(flag){
      ul.style.display = 'block';
      ulButton.style.display = 'block';
      flag = false;
    } else{
      flag = true;
      ul.style.display = 'none';
      ulButton.style.display = 'none';
    }
  });

  ulButton.addEventListener('click', ()=>{
    const content = ulButton.nextElementSibling;
    if(content.style.maxHeight){
      content.style.maxHeight = null;
    } else{
      content.style.maxHeight = content.scrollHeight + 'px';
    }

    ulItem.forEach((item)=>{
      item.addEventListener('click', ()=>{
        console.log(item.getAttribute('data-value'));
        ulButton.textContent = item.textContent;
        ulButton.setAttribute('data-value', `${item.getAttribute('data-value')}`);
      })
    })
  })
}

export default dropdown;