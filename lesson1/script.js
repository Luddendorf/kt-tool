window.addEventListener('DOMContentLoaded', () => {
    const checkbox = document.querySelector('input[type=checkbox]');
    const radiobtns = document.querySelectorAll('input[type=radio]');


    function disableRadiobtns () {
        radiobtns.forEach(item => {
            if (checkbox.checked) {
                item.disabled = true;
            } else {
                item.disabled = false;
            }
        });
    };

    checkbox.addEventListener('click', disableRadiobtns);
        
});