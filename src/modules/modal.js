const modal = ()=>{
  const cardsWrapper = document.querySelector('.main__cards-wrapper');
  const modal = document.querySelector('.modal');
  cardsWrapper.addEventListener('click', (event)=>{
    let target = event.target;
    target = target.closest('.main__card');
    const clonedNode = target.cloneNode(true);
    const list = clonedNode.querySelectorAll('.main__list-item');
    const close = clonedNode.querySelector('.close');
  
  
    modal.style.display = 'flex';
    clonedNode.style.transform = 'scale(1.2)';
    list[list.length - 1].style.display = 'block';
    close.style.display = 'block';
    modal.append(clonedNode);
  
    close.addEventListener('click', ()=>{
      modal.removeChild(clonedNode);
      modal.style.display = 'none';
    })
  });
}

export default modal;