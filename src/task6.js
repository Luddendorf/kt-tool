const muDate = new Date();

const dateBirthday = new Date("2000-06-24");

function getAge(birthday) {
  let thisYear = 0;

  if (muDate.getMonth() < birthday.getMonth()) {
    thisYear = 1;
  } else if ((muDate.getMonth() === birthday.getMonth()) && muDate.getDate() < birthday.getDate()) {
    thisYear = 1;
  }
  const age = muDate.getFullYear() - birthday.getFullYear() - thisYear;

  console.log(age);
}

getAge(dateBirthday)

////////////////////////

function getWeekDay(date) {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  return days[date.getDay()];
}

const date = new Date(2000, 5, 24);
console.log(getWeekDay(date));
