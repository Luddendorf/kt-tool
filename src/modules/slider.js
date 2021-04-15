import { ships } from './data';

const slider = ()=>{
  ships.forEach((ship)=>{
    console.log(ship.url);
  })
}

export default slider;