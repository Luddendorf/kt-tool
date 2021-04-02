
// 1 task
function solution(myNumber) {
    const temp = [];
    if (myNumber.length>0) {
        for (let i=0; i<myNumber.length/2; i++) {
            temp.push(myNumber[i]);
            temp.push(myNumber[myNumber.length-1-i]);
        };
        temp.pop();
        console.log(temp);
    };
}; 

solution([1,2,3,4,5]);
solution([1,0,3]);
solution([1,2,3,4,5,6,7,8,9,10,11,12,13]);

// 2 task
const unsorted = [
	{
		id: 'c744e61d-18ab-4df1-9bf2-281bd7fcf02e',
		profile: 'ordinary',
		type: 'company',
		amount: 59237
	},
	{
		id: '8d7a1980-c9ec-4103-aac6-0a6a4d9890cb',
		profile: 'privileged',
		type: 'company',
		amount: 70832
	},
	{
		id: '5cf215d3-c931-4939-9c86-f906319c13ea',
		profile: 'foreign',
		type: 'subsidiary',
		amount: 17341
	},
	{
		id: '5b0d93c5-99f0-41ff-bdfb-9ec754745d68',
		profile: 'foreign',
		type: 'store',
		amount: 60391
	},
	{
		id: '4b5e78df-7872-4c10-b25c-97284dbb2177',
		profile: 'ordinary',
		type: 'store',
		amount: 45972
	}
];

// 2.1 Id, profile sort
function sort(arr) {
   const idSort = arr.sort((a, b) => {
      a.id > b.id ? 1 : -1
});
   const profileSort = idSort.sort((a, b) => {
       if (a.profile > b.profile) {
           return 1;
       };
       if (a.profile < b.profile) {
        return -1;
    } return 0;
    });
    console.log(profileSort);
};

sort(unsorted);

//2.2 Discount 
function discount(arr) {
    const newArr = arr.map(el => {
       return {
           id: el.id,
           type: el.type,
           amount: el.amount,
           discount: Math.floor(el.amount * 0.05)
       }; 
    }); console.log(newArr);
}; 

discount(unsorted);

//2.3 
function replaceElemWithObject(arr, index) {
    index.forEach(el => {
        return arr[el] = {removed: true};
    }); console.log(arr);
};

replaceElemWithObject(unsorted, [0,1,2,3,4]);

// 3 task
function sliceComment(comment, k) {
    let result = '';
    if (comment.length > k) {
       const arrWord = comment.slice(0, k).split(' ');
       const splitComment = comment.split(' ');
       if (splitComment.indexOf(arrWord[arrWord.length-1]) < 0) {
        arrWord.splice(-1, 1);
        result = arrWord.join(' ');
       }; 
    } else {
        result = comment;
    } console.log(result);
};

sliceComment("Привет мир", 9);
sliceComment("Andersen We Test Programmers", 14);
