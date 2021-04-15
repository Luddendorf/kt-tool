export const header = () => {
  const nav = document.querySelector('.header__nav');
  const mainMenu = document.querySelector('.main__menu');
  const gallery = document.querySelector('.gallery');
  const allShips = document.querySelector('.all__ships');
  const profile = document.querySelector('.profile');
  allShips.classList.add('none');
  gallery.classList.add('none');

  nav.addEventListener('click', (e) => {
    const navEl = document.querySelectorAll('.header__nav--item');
    if(e.target.textContent === 'All ships'){
      allShips.classList.remove('none');
      profile.classList.add('none');
      gallery.classList.add('none');
      mainMenu.classList.remove('none');
    }
    else if(e.target.textContent === 'Gallery'){
      allShips.classList.add('none');
      mainMenu.classList.add('none');
      profile.classList.add('none');
      gallery.classList.remove('none');
    } else {
      allShips.classList.add('none');
      profile.classList.remove('none');
      mainMenu.classList.remove('none');
      gallery.classList.add('none');
    }
    if(e.target.className === 'header__nav--item'){
      navEl.forEach(item => item.classList.remove('active'));
      e.target.classList.add('active');
    }
  })
}

