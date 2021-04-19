export default () => {
  const header = document.querySelector('.dropdown-header');
  const content = document.querySelector('.dropdown-content')
  const items = document.querySelectorAll('.dropdown-content-item')
    const treasures = ["Сундук", "Хрустальный череп","Ожерелье" ];
  const fill = (e, data) => {
    e.forEach((item, index) => {
        item.textContent = data[index];
    })}
    fill(items, treasures);

  header.addEventListener('click', (e) => {
      if (header.classList.contains('isOpen')) {
          header.classList.remove('isOpen');
          return content.classList.add('isClosed');
      } else {
          header.classList.add('isOpen');
          return content.classList.remove('isClosed');
      }
  })
  window.addEventListener('click', (e) => {
      if (e.target.closest('.dropdown') === null) {
          header.classList.remove('isOpen');
          return content.classList.add('isClosed');
      }
  })
  items.forEach((e) =>
      e.addEventListener('click', (el) => {
          const targetItem = el.target;

          if (targetItem.classList.contains('chosen')) {
              return;
          }
          const chosenItem = document.querySelector('.chosen');
          console.log(chosenItem)
          chosenItem.classList.remove('chosen');
          targetItem.classList.add('chosen');
      })
  )
}
