import './main.css'
import "./sass/main-second.scss"
import MyShipTab from './scripts/tabs/MyShipTab'
import BightTab from './scripts/tabs/BightTab'
import configureGalleryTab from './scripts/supportFunctions/configureGalleryTab'
import configureSideMenu from './scripts/supportFunctions/configureSideMenu'
import configureTabsControls from './scripts/supportFunctions/configureTabsControls'
import configureSideFilters from './scripts/supportFunctions/configureSideFilters'

const setupApp = () => {

  const main = document.getElementById('main')
  const bightTab = BightTab()
  const shipTab = MyShipTab()

  main.append(bightTab)
  main.append(shipTab)
  configureGalleryTab()

  configureTabsControls()
  configureSideMenu()
  configureSideFilters()

}

window.onload = setupApp

