import ships from '../data/shipsData'
import ShipCard from './ShipCard'

const handleExitClick = (_, popupWindow) => {
  document.body.classList.remove('disable-scrolling')
  popupWindow.remove()
}

const PopupWindow = shipId => {

  const ship = ships.find(ship => ship.id = shipId)

  const popupWindow = document.createElement('div')
  popupWindow.classList.add('popup-window')
  popupWindow.addEventListener('click', e=>handleExitClick(null, popupWindow))

  const popupCard = ShipCard(ship)
  popupCard.classList.add('popup-card')
  popupCard.addEventListener('click', e=>e.stopPropagation())
  const description = document.createElement('p')
  description.classList.add('popup-card-description')
  description.innerHTML = ship.desc
  description.addEventListener('click', e=>e.stopPropagation())

  const exitButton = document.createElement('button')
  exitButton.setAttribute('id', 'popup-exit-btn')
  exitButton.setAttribute('type', 'button')
  exitButton.innerHTML = 'X'
  exitButton.addEventListener('click', e=>handleExitClick(e, popupWindow))      //

  popupCard.append(exitButton)

  popupWindow.append(popupCard)
  popupWindow.append(description)

  popupWindow.show = () => {
    document.body.classList.add('disable-scrolling')
    document.body.append(popupWindow)
  }

  popupWindow.hide = () => {
    document.body.classList.remove('disable-scrolling')
    popupWindow.remove()
  }

  return popupWindow

}

export default PopupWindow
