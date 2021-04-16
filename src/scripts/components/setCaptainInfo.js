export const setCaptainInfo = function (captainData) {
  const name = document.getElementById("captainName");
  const clas = document.getElementById("captainClass");
  const melee = document.getElementById("captainMelee");
  const age = document.getElementById("captainAge");
  const dublons = document.getElementById("captainDublons");
  const range = document.getElementById("captainRange");
  const tableName = document.getElementById('tableName')

  name.innerHTML = `Имя: ${captainData.name}`;
  clas.innerHTML = `Класс: ${captainData.class}`;
  melee.innerHTML = `Урон саблей: ${captainData.damageMelee}`;
  age.innerHTML = `Возраст: ${captainData.age}`;
  dublons.innerHTML = `Дублоны: ${captainData.dublons}`;
  range.innerHTML = `Урон пистолетом: ${captainData.damageRange}`;

  tableName.innerHTML =`Отважный пират ${captainData.name}, используй погоду с умом !`
  
};
