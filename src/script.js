window.addEventListener('DOMContentLoaded', () => {
    const checkbox = document.querySelector('.checkbox')
    const radio = document.querySelectorAll('.radio')

    const disableRadio = () => {
        radio.forEach(item => {
            if (checkbox.checked) {
                item.disabled = true
            } else {
                item.disabled = false
            }
        })
    }

    checkbox.addEventListener('click', disableRadio)
        
})