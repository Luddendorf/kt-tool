import createCard from './createCard'

const handleExitClick = () => {
  document.body.classList.remove('disable')
  document.getElementById('popup-window').remove()
}

const createPopupWindow = ship => {

  const popupWindow = document.createElement('div')
  popupWindow.setAttribute('id', 'popup-window')
  popupWindow.classList.add('popup-window')
  popupWindow.addEventListener('click', handleExitClick)

  const popupCard = createCard(ship)
  popupCard.classList.add('popup-card')
  popupCard.addEventListener('click', e=>e.stopPropagation())           //
  const description = document.createElement('p')
  description.classList.add('popup-card-description')
  description.innerHTML = ship.desc
  description.addEventListener('click', e=>e.stopPropagation())         //

  const exitButton = document.createElement('button')
  exitButton.setAttribute('id', 'popup-exit-btn')
  exitButton.setAttribute('type', 'button')
  exitButton.innerHTML = 'X'
  exitButton.addEventListener('click', handleExitClick)

  popupCard.append(exitButton)

  popupWindow.append(popupCard)
  popupWindow.append(description)

  document.body.classList.add('disable')
  document.body.append(popupWindow)

}

export default createPopupWindow
