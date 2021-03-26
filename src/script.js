
const checkbox = document.querySelector('.checkbox')
const radio = document.querySelectorAll('.radio')

checkbox.addEventListener('change', event => {
    const isChecked = event.target.checked;
    if (isChecked) {
        radio.forEach(item => item.disabled = true);
    } else {
        radio.forEach(item => item.disabled = false);
    }
})

const submitButton = document.querySelector('.submit-button');

submitButton.addEventListener('click', event => {
  const name = document.querySelector('.name').value;
  localStorage.setItem('name', name);
  const details = document.querySelector('.details').value;
  localStorage.setItem('details', details);
});

window.addEventListener('load', (event) => {
  const name = document.querySelector('.name');
  name.value = localStorage.getItem('name');
  const details = document.querySelector('.details');
  details.value = localStorage.getItem('details');
});