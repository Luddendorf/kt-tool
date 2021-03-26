window.addEventListener('DOMContentLoaded', () => {

    const checkbox = document.querySelector('.checkbox')
    const radio = document.querySelectorAll('.radio')

    checkbox.addEventListener('change', event => {
        const target = event.target
        radio.forEach(item => {
            if (target.checked) {
                item.disabled = true
            } else {
                item.disabled = false
            }
        })      
    })
})
