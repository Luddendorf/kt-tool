document.querySelectorAll('.order').forEach((element) => {
    element.onclick = orderFunction;
});

function orderFunction() {
    let one = document.querySelector('.order[value="Text1"]');
    let two = document.querySelector('.order[value="Text2"]');
    let three = document.querySelector('.order[value="Text3"]');
    let four = document.querySelector('.order[value="Text4"]');
    if (this.value == 'Text1') {
        // console.log(two.checked)
        two.checked = false;
        three.checked = false;
        four.checked = false;
        // console.log(two.checked)
        // console.log(this.value)
        return true
    }
    if (this.value == 'Text2') {
        one.checked = false;
        three.checked = false;
        four.checked = false;
        return true
    }
    if (this.value == 'Text3') {
        one.checked = false;
        two.checked = false;
        four.checked = false;
        return true
    }
    if (this.value == 'Text4') {
        one.checked = false;
        three.checked = false;
        two.checked = false;
        return true
    }
}