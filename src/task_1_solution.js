const btnRevers = document.querySelector('#btnRevers');
const textInput = document.querySelector('#textInput');
const textOutput = document.querySelector('#textOutput');

btnRevers.addEventListener('click', function() {
    const textInp = textInput.value;
    // const textOutp = textOutput.value;
    // let arr2 = [1, 2, 3, 4, 5, 6]
    // let newArr = [];
    // let leng = textInp.length;
    solution(textInp, textOutput);
});

export function solution(textInp, textOutput) {
    if (textInp <= 100000000 && textInp > 0) {
        let textM = textInp.split("");
        console.log('Massiv', textM);
        let newArr = [];
        let leng = textM.length;
        while (newArr.length !== leng) {
            newArr.push(textM[0]);
            textM.shift();
            textM.reverse();
            console.log('1', textM);
        }
        console.log('textM', textM);
        console.log('newArr', newArr);
        // const newArrayOut = newArr.join()
        let newArrayOut = newArr.join("")
        console.log('newArrayOut', typeof newArrayOut);
        textOutput.value = newArrayOut;
    } else {
        console.log("This number doesn't fit")
        textOutput.value = "This number is not suitable, use from 0 to 100 000 000"
    }
}