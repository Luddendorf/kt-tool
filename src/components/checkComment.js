const checkCommentBtn = document.querySelector(".check-comment__btn");

export const checkComment = function (str, k) {
  if (str.length > k) {
    const res = [...str];
    if (str[k - 1] !== " " && str[k] !== "") {
      for (let i = 0; i < res.length; i++) {
        res[i] === " " && res.slice(0, k).join("").trim();
      }
    }
    return res.slice(0, k).join("").trim();
  }
  return str;
};

document.querySelector(".check-comment__result").innerHTML =
  "My name is Ervin, hello world!";

checkCommentBtn.addEventListener("click", () => {
  document.querySelector(".check-comment__result").innerHTML = checkComment(
    "My name is Ervin, hello world!",
    10
  );
  console.log('comment is too large, check the limit value!');
  setTimeout(function () {
    document.querySelector(".check-comment__result").innerHTML =
      "My name is Ervin, hello world!";
  }, 3000);
});
