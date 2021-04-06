const areaComment = document.querySelector('#comment');
const sliceButton = document.querySelector('#slice');
const kSimvol = document.querySelector('#k');
const areaOut = document.querySelector('#commentOut');
sliceButton.addEventListener('click', function() {

    const com = areaComment.value;
    const kol = kSimvol.value;
    com.trim()
    funcSlice(com, kol);
});



export function funcSlice(comment, k) {


    let result = '';
    if (comment.length > k) {
        const arrCom = comment.slice(0, k).split(' ');
        console.log('arrCom', arrCom)
        const commentSplit = comment.split(' ');
        console.log('commentSplit', commentSplit)
            //Проверяю последний эллемент исходной строки с последним элементом обрезанной
        let x = commentSplit.indexOf(arrCom[arrCom.length - 1])
        x > 0 ? null : arrCom.splice(-1, 1);
        console.log('x', x);
        console.log('arrCom', arrCom);
        const newStr = arrCom.join(' ')
        console.log('newStr', newStr);
        console.log('newStr', newStr.length);
        result = newStr
    } else {
        result = comment;
    }
    console.log(result);
    areaOut.value = result;
};