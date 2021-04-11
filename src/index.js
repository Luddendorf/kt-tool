import './main.css'
import "./sass/main-second.scss"
import MyShipTab from './scripts/tabs/MyShipTab'
import BightTab from './scripts/tabs/BightTab'
import configureSideMenu from './scripts/supportFunctions/configureSideMenu'
import configureTabsControls from './scripts/supportFunctions/configureTabsControls'
import configureSideFilters from './scripts/supportFunctions/configureSideFilters'

const setupApp = () => {

  const main = document.getElementById('main')
  const shipTab = MyShipTab()
  const bightTab = BightTab()

  main.append(shipTab)
  main.append(bightTab)

  configureTabsControls()
  configureSideMenu()
  configureSideFilters()

}

window.onload = setupApp

