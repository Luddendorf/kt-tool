const accordeon = () => {
  const accordButtons = document.querySelectorAll('.aside__button');
  const asideLists = document.querySelectorAll('.aside__list');

  accordButtons.forEach((button)=>{
    button.addEventListener('click', (event)=>{
      event.preventDefault();
      const content = button.nextElementSibling;
      
      if(content.style.maxHeight){
        content.style.maxHeight = null;
        button.classList.remove('is_open');
      } else{
        content.style.maxHeight = content.scrollHeight + 'px';
        button.classList.add('is_open');
      }
      
      asideLists.forEach((listItem)=>{
        if(listItem !== content){
          listItem.style.maxHeight = null;
        }
      })

      accordButtons.forEach((item)=>{
        if(item !== button){
          item.classList.remove('is_open');
        }
      })
    })
  })
}

export default accordeon;