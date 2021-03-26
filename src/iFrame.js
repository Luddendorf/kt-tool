function checkEnable() {
    const radioDiv = document.getElementById('radioButtons');
    const checkbox = document.getElementById('check');
    const radioButtonGroup = radioDiv.childNodes;
    if (checkbox.checked) {
        for (let i = 0; i < radioButtonGroup.length; i++) {
            radioButtonGroup[i].disabled = true;
        }
    } else {
        for (let i = 0; i < radioButtonGroup.length; i++) {
            radioButtonGroup[i].disabled = false;
        }
    }
}

const form = document.querySelector("#formP");
let name = document.querySelector('#name')
let details = document.querySelector('#details')
    // sbm.addEventListener('click',)

form.onsubmit = function(e) {
    e.preventDefault();
    // .then(result => /* обрабатываем результат */)
    // console.log('name', name.value);
    // console.log('details', details.value);
    // console.log('Нажал');

    localStorage.setItem('name', name.value)
    localStorage.setItem('details', details.value)
    document.location.href = "./lesson1-2.html"
};


document.addEventListener('DOMContentLoaded', function() {
    let nameLoc = localStorage.getItem('name', name)
    let detailsLoc = localStorage.getItem('details', details)

    if (nameLoc) {
        name.value = 'отД-' + nameLoc.slice(4, nameLoc.length)
    }
    if (detailsLoc) {
        details.value = 'отД-' + detailsLoc.slice(4, nameLoc.lengt)
    }

}, false);