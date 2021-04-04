// changeling function
const changeBtn = document.querySelector(".reverse__btn");

export const solution = (n) => {
  const res = [];
  const checkArr = n.toString().split("");
  const length = checkArr.length;

  if (length < 3) {
    return `number must contain minimum 3 nums;\n number: ${+checkArr.join(
      ""
    )}`;
  } else if (n > 1000000000) {
    return `${n} is too big...`;
  } else {
    for (let i = 0; i < length; i++) {
      res.push(checkArr[0]);
      checkArr.splice(0, 1);
      checkArr.reverse();
    }
    return `number: ${+res.join("")}`;
  }
};

document.querySelector(".reverse__result").innerHTML = "number: 123456789";

changeBtn.addEventListener("click", function () {
  document.querySelector(".reverse__result").innerHTML = solution(123456789);
  setTimeout(function () {
    document.querySelector(".reverse__result").innerHTML = "number: 123456789";
  }, 4000);
});
