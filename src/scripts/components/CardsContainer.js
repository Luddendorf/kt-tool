import ShipCard from '../components/ShipCard'
import PopupWindow from '../components/PopupWindow'

const handleCardClick = e => {

  const popupWindow = PopupWindow(e.currentTarget.id)
  popupWindow.show()

}

const CardsContainer = ships => {

  const cardsContainer = document.createElement('div')
  cardsContainer.classList.add('cards-container')

  ships.forEach(ship => {
    const card = ShipCard(ship)
    card.addEventListener('click', handleCardClick)
    cardsContainer.append(card)
  })

  return cardsContainer

}

export default CardsContainer
