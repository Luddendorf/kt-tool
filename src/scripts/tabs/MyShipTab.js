import ShipCard from '../components/ShipCard'
import CaptainCard from '../components/CaptainCard'
import PurchaseForm from '../components/PurchaseForm'
import WeatherWidget from '../components/WeatherWidget'

const MyShipTab = () => {

  const myShip = {
    "shipName": 'Panther',
    "className": 'longboat',
    "class": 7,
    "shipHull": 200,
    "speed": 13.5,
    "maneuverability": 72,
    "beidewind": 7.5,
    "hold": 200,
    "team": 17,
    "weapons": 8,
    "price": 2500,
    "desc": 'Большая лодка, на которую устанавливают малые пушки. Серьёзным кораблем никогда не станет, но для пиратских или контрабандных вылазок широко применяется по всему миру.'
  }

  const captain = {
    name: 'Domochka Artem',
    myClass: 'Super Pirate',
    age: '24',
    money: 0,
    damage: 200,
    story: 'Once ...'
  }

  const shipCard = ShipCard(myShip)
  shipCard.classList.add('my-ship-tab-my-ship')
  const captainPortrait = CaptainCard(captain)
  const purchaseForm = PurchaseForm()
  const weatherWidget = WeatherWidget()

  const rightPageBlock = document.createElement('div')
  rightPageBlock.classList.add('right-page-block')
  rightPageBlock.append(captainPortrait)
  rightPageBlock.append(purchaseForm)
  rightPageBlock.append(weatherWidget )

  const myShipTab = document.createElement('div')
  myShipTab.setAttribute('id', 'my-ship-tab')
  myShipTab.classList.add('my-ship-tab')
  myShipTab.classList.add('tab-closed')

  myShipTab.append(shipCard)
  myShipTab.append(rightPageBlock)

  return myShipTab

}

export default MyShipTab
