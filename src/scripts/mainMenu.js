export const mainMenu = () => {
  const toggleNames = document.querySelectorAll('.main__menu__lists--name');

  toggleNames.forEach(item => {
    item.addEventListener('click', () => {
      const allList = document.querySelectorAll('.main__menu__list');
      allList.forEach(ul =>
        !ul.classList.contains('hidden') &&
        item.nextElementSibling.classList.contains('hidden') ?
        ul.classList.add('hidden') : ul);
      item.nextElementSibling.classList.toggle('hidden')
    })
  })
}

