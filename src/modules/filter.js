import ships from "./shipsData";
import shipCard from "./shipCard";

export default () => {
  let tab1 = document.getElementById('home');
  const inputMin = document.getElementById("min-price");
  const inputMax = document.getElementById("max-price");
  return shipCard(ships, tab1);
}   