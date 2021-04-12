import ships from '../data/shipsData'
import CardsContainer from '../components/CardsContainer'

const BightTab = () => {

  const bightTab = document.createElement('div')
  bightTab.setAttribute('id', 'bight-tab')
  //bightTab.classList.add('bight-tab')
  bightTab.classList.add('tab-opened')

  const cardsContainer = CardsContainer(ships)
  cardsContainer.setAttribute('id', 'cards-container')

  bightTab.append(cardsContainer)

  return bightTab

}

export default BightTab
