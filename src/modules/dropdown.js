const dropdown = ()=>{
  const anchorImg = document.querySelector('.main__anchor-img');
  const ul = document.querySelector('.main__ul');
  const ulButton = document.querySelector('.dropdown-button');
  const ulItem = document.querySelectorAll('.main__ul-item');
  let flag = true;

  const buttonInitialState = (button)=>{
    button.classList.remove('list-open');
    button.style.display = 'none';
    button.textContent = 'Сокровища';
    button.setAttribute('data-value', '');
  }

  anchorImg.addEventListener('click', ()=>{
    if(flag){
      ul.style.display = 'block';
      ulButton.style.display = 'flex';
      flag = false;
    } else{
      flag = true;
      ul.style.display = 'none';
      ul.style.maxHeight = null;
      buttonInitialState(ulButton);
    }
  });

  ulButton.addEventListener('click', ()=>{
    const content = ulButton.nextElementSibling;
    if(content.style.maxHeight){
      content.style.maxHeight = null;
      ulButton.classList.remove('list-open');
    } else{
      content.style.maxHeight = content.scrollHeight + 'px';
      ulButton.classList.add('list-open');
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