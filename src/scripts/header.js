export const header = () => {
  const nav = document.querySelector('.header__nav');
  const allShips = document.querySelector('.all__ships');
  const profile = document.querySelector('.profile');
  allShips.classList.add('none');

  nav.addEventListener('click', (e) => {
    const navEl = document.querySelectorAll('.header__nav--item');
    if(e.target.textContent === 'All ships'){
      allShips.classList.remove('none');
      profile.classList.add('none');
    } else {
      allShips.classList.add('none');
      profile.classList.remove('none');
    }
    if(e.target.className === 'header__nav--item'){
      navEl.forEach(item => item.classList.remove('active'));
      e.target.classList.add('active');
    }
  })
}

