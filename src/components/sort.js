// 1st variant of sorted Array (obj). By id -> profile

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
const sortBtn = document.querySelector(".sort__btn");

export const sortFunc = () => {
  unsorted.sort((a, b) => {
    if (a.id == b.id) {
      return a.profile > b.profile ? 1 : a.profile < b.profile ? -1 : 0;
    }
    return a.id > b.id ? 1 : -1;
  });

  console.log("1st variant of sorted object");
  console.log(unsorted);
  return JSON.stringify(unsorted, null, 0);
};

sortBtn.addEventListener("click", () => {
  document.querySelector(".sort__output").innerHTML = sortFunc();
  setTimeout(function () {
    document.querySelector(".sort__output").innerHTML = "";
  }, 1000);
});

// 2nd variant of sorted Array (obj). By profile -> id

const unsorted1 = [
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

function sort2() {
  unsorted1.sort((a, b) => {
    if (a.profile == b.profile) {
      return a.id > b.id ? 1 : a.id < b.id ? -1 : 0;
    }
    return a.profile > b.profile ? 1 : -1;
  });
  console.log(unsorted);
}
