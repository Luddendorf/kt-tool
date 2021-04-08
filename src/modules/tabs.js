const tabs = () =>{
  const headerWrapper = document.querySelector('.header__wrapper');
  const headerTabs = headerWrapper.querySelectorAll('.header-tab');
  const tabContent = document.querySelectorAll('.tab-content');

  const toggleTabContent = (index) =>{
    for(let i = 0; i < tabContent.length; i++){
      if(index === i){
        tabContent[i].style.display = 'flex';
        headerTabs[i].classList.add('active');
      } else{
        tabContent[i].style.display = 'none';
        headerTabs[i].classList.remove('active');
      }
    }
  }
  headerWrapper.addEventListener('click', (event)=>{
    let target = event.target;

    if(target.classList.contains('header-tab')){
      headerTabs.forEach((tab, index)=>{
        if(tab === target){
          toggleTabContent(index);
        }
      })
    }
  })
}

export default tabs;