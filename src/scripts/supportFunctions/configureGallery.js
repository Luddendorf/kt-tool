import ships from '../data/shipsData.js'

const createShipContent = ship => {

  const shipImgPath = 'https://res.cloudinary.com/dvbkndvl0/image/upload/v1618397182/pirates/bigShip_i7npel.jpg'

  const shipContent = document.createElement('div')
  shipContent.classList.add('gallery__ship-content')

  const shipImg = document.createElement('img')
  shipImg.src = shipImgPath
  shipImg.alt = "ship"
  shipImg.classList.add('gallery__ship-image')

  const shipDesc = document.createElement('p')
  shipDesc.classList.add('gallery__ship-description')
  shipDesc.innerHTML = ship.desc

  shipContent.append(shipImg)
  shipContent.append(shipDesc)

  return shipContent

}

const fillAllShipsBlock = () => {


  const allShips = document.getElementById('gallery__all-ships')

  // const lastShip = createShipContent(ships[ships.length -1])
  // allShips.append(lastShip)

  ships.forEach(ship => {

    const shipContent = createShipContent(ship)

    allShips.append(shipContent)

  })



}

const fillNavBlock = () => {

  const navBlock = document.getElementById('gallery__navigation')

  ships.forEach((_, index) => {

    const navItem = document.createElement('div')
    navItem.setAttribute('id', `nav-item-${index}`)
    navItem.setAttribute('data-number', index)
    navItem.classList.add('gallery__nav-item')

    navBlock.append(navItem)

  })

  document.getElementById('nav-item-0').classList.add('gallery__nav-item-active')

}

const changeActiveNavItem = (prevPosition, nextPositon) => {

  const prevNavItem = document.getElementById(`nav-item-${prevPosition}`)
  prevNavItem.classList.remove('gallery__nav-item-active')

  const nextNavItem = document.getElementById(`nav-item-${nextPositon}`)
  nextNavItem.classList.add('gallery__nav-item-active')

}

const startAutoplay = state => {
  state.autoPlayInterval = setInterval(()=>{

    state.disableControls = true
    setTimeout(()=>{state.disableControls = false}, 800)

    const allShips = document.getElementById('gallery__all-ships')

    if(state.currentSlideNumber + 1 === 16){
      changeActiveNavItem(state.currentSlideNumber, 0)
      state.currentSlideNumber = 0
      allShips.style.left = `0%`
      return
    }

    state.currentSlideNumber++

    for(let i = 1; i <= 100; i++){
      setTimeout(()=>{
        allShips.style.left = `-${(state.currentSlideNumber - 1)*100 + i}%`
      },i*8)
    }

    changeActiveNavItem(state.currentSlideNumber - 1, state.currentSlideNumber)

  },3000)
}

const stopAutoplay = state => {

  if(state.autoPlayInterval){
    clearInterval(state.autoPlayInterval)
  }

}



const handleRightArrowClick = state => {

  if(state.disableControls){                                                      // // //
    return
  }

  if(state.currentSlideNumber + 1 === 16){
    return
  }

  state.currentSlideNumber++                                                      // // //

  const allShips = document.getElementById('gallery__all-ships')

  for(let i = 1; i <= 100; i++){
    setTimeout(()=>{
      allShips.style.left = `-${(state.currentSlideNumber - 1)*100 + i}%`
    },i*3)
  }

  changeActiveNavItem(state.currentSlideNumber - 1, state.currentSlideNumber)

  if(!state.isAutoPlayStoped){                                                     // // //
    stopAutoplay(state)
    startAutoplay(state)
  }

}

const handleLeftArrowClick = state => {

  if(state.disableControls){
    return
  }

  if(state.currentSlideNumber - 1 === -1){
    return
  }

  state.currentSlideNumber--

  const allShips = document.getElementById('gallery__all-ships')

  allShips.style.left = `-${100*state.currentSlideNumber}%`

  for(let i = 1; i <= 100; i++){
    setTimeout(()=>{
      allShips.style.left = `-${(state.currentSlideNumber + 1)*100 - i}%`
    },i*3)
  }

  changeActiveNavItem(state.currentSlideNumber+1, state.currentSlideNumber)

  if(!state.isAutoPlayStoped){
    stopAutoplay(state)
    startAutoplay(state)
  }

}

const handleNavItemClick = (e, state) => {

  if(state.disableControls){
    return
  }

  changeActiveNavItem(state.currentSlideNumber, e.target.dataset.number)

  state.currentSlideNumber = e.target.dataset.number

  const  allShips = document.getElementById('gallery__all-ships')
  allShips.style.left = `-${100*state.currentSlideNumber}%`

  if(!state.isAutoPlayStoped){
    stopAutoplay(state)
    startAutoplay(state)
  }

}

const handleAutoplayStart = state => {

  startAutoplay(state)
  state.isAutoPlayStoped = false

}

const handleAutoplayStop = state => {

  stopAutoplay(state)
  state.isAutoPlayStoped = true

}

const handleFullscreenClick = () => {

  //const gallery = document.getElementById('gallery-widget')
  const gallery = document.getElementById('fs')

  if(!document.fullscreenElement){
    gallery.requestFullscreen().catch(err => console.log(err))
  }else{
    document.exitFullscreen()
  }

}

const configureGallery = () => {

  fillAllShipsBlock()
  fillNavBlock()

  const state = {
    currentSlideNumber: 0,
    autoPlayInterval: null,
    isAutoPlayStoped: false,
    disableControls: false
  }

  const rightArrow = document.getElementById('gallery__right-arrow')
  rightArrow.addEventListener('click', ()=>handleRightArrowClick(state))

  const leftArrow = document.getElementById('gallery__left-arrow')
  leftArrow.addEventListener('click', ()=>handleLeftArrowClick(state))

  const navItems = document.getElementById('gallery__navigation').children
  navItems.forEach(navItem => {
    navItem.addEventListener('click', e=>handleNavItemClick(e, state))
  })

  const autoPlayStartBtn = document.getElementById('gallery__autoplay-start')
  autoPlayStartBtn.addEventListener('click', ()=>handleAutoplayStart(state))

  const autoPlayStopBtn = document.getElementById('gallery__autoplay-stop')
  autoPlayStopBtn.addEventListener('click', ()=>handleAutoplayStop(state))

  const fullscreenBtn = document.getElementById('gallery__fullscreen')
  fullscreenBtn.addEventListener('click', handleFullscreenClick)

  startAutoplay(state)

}

export default configureGallery
