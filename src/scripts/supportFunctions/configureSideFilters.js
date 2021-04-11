import ships from '../data/shipsData'
import CardsContainer from '../components/CardsContainer'

const handleInputBlur = () => {

  const inputs = {
    minPrice: '',
    maxPrice: '',
    minTeam: '',
    maxTeam: ''
  }

  const numberRE = /^[0-9]+$/

  Array.from(Object.keys(inputs)).forEach(inputId => {

    const value = document.getElementById(inputId).value

    if(numberRE.test(value)){
      inputs[inputId] = value
    }else{
      if(inputs[inputId] !== ''){
        inputs[inputId] = ''
      }
    }

  })

  const filteredShips = ships.filter(ship => {

    if(inputs.minPrice !== '' && ship.price < Number(inputs.minPrice)){
      return false
    }

    if(inputs.maxPrice !== '' && ship.price > Number(inputs.maxPrice)){
      return false
    }

    if(inputs.minTeam !== '' && ship.team < Number(inputs.minTeam)){
      return false
    }

    if(inputs.maxTeam !== '' && ship.team > Number(inputs.maxTeam)){
      return false
    }

    return true

  })

  const prevCardsContainer = document.getElementById('cards-container')

  const newCardsContainer = CardsContainer(filteredShips)
  newCardsContainer.setAttribute('id', 'cards-container')

  prevCardsContainer.remove()
  const bightTab = document.getElementById('bight-tab')
  bightTab.append(newCardsContainer)

}

const configureSideFilters = () => {

  document.getElementById('minPrice').addEventListener('blur', handleInputBlur)
  document.getElementById('maxPrice').addEventListener('blur', handleInputBlur)
  document.getElementById('minTeam').addEventListener('blur', handleInputBlur)
  document.getElementById('maxTeam').addEventListener('blur', handleInputBlur)

}

export default configureSideFilters
