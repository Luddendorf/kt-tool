const unsorted = [
  {
    id: "c744e61d-18ab-4df1-9bf2-281bd7fcf02e",
    profile: "ordinary",
    type: "company",
    amount: 59237,
  },
  {
    id: "8d7a1980-c9ec-4103-aac6-0a6a4d9890cb",
    profile: "privileged",
    type: "company",
    amount: 70832,
  },
  {
    id: "5cf215d3-c931-4939-9c86-f906319c13ea",
    profile: "foreign",
    type: "subsidiary",
    amount: 17341,
  },
  {
    id: "5b0d93c5-99f0-41ff-bdfb-9ec754745d68",
    profile: "foreign",
    type: "store",
    amount: 60391,
  },
  {
    id: "4b5e78df-7872-4c10-b25c-97284dbb2177",
    profile: "ordinary",
    type: "store",
    amount: 45972,
  },
];
const addDiscountBtn = document.querySelector(".add-discount__btn");

export const addDiscount = (obj) => {
  obj.map((item) => {
    delete item.profile;
    item["discount"] = Math.round(item.amount * 0.05);
  });
  return obj;
};

addDiscountBtn.addEventListener("click", () => {
  console.log("added discount prop to an object");
  console.log(addDiscount(unsorted));
  document.querySelector(".add-discount__result").innerHTML = JSON.stringify(
    addDiscount(unsorted),
    null,
    0
  );
  setTimeout(function () {
    document.querySelector(".add-discount__result").innerHTML = "";
  }, 6000);
});
