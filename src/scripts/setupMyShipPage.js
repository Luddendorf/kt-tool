import createCard from './createCard'
import createCaptainCard from './createCaptainCard'
import createPurchaseForm from './createPurchaseForm'

const setupMyShipPage = () => {

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



  const shipCard = createCard(myShip)
  const captainPortrait = createCaptainCard(captain)
  const purchaseForm = createPurchaseForm()

  const rightPagePart = document.createElement('div')
  rightPagePart.append(captainPortrait)
  rightPagePart.append(purchaseForm)

  const myShipPage = document.getElementById('my-ship-tab')
  myShipPage.append(shipCard)
  myShipPage.append(rightPagePart)

}

export default setupMyShipPage
