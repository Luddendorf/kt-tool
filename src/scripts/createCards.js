import createCard from './createCard'
import createPopupWindow from './createPopupWindow'

const createCards = ships => {

  const cards = ships.map(ship => {
    const handleCardClick = () => {                                 //
      createPopupWindow(ship)
    }

    const card = createCard(ship)
    card.addEventListener('click', handleCardClick)
    return card
  })

  return cards

}

export default createCards
