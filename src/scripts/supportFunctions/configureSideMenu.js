const configureSideMenu = () => {

  const options = new Map()
  options.set('sails','sails-menu')
  options.set('repair','repair-menu')
  options.set('guns','guns-menu')
  options.set('team','team-menu')

  let nowOpened = null
  let nowSelectedOption = ''

  const handleOptionClick = e => {
    const option = e.currentTarget.id
    const optionMenu = document.getElementById(options.get(option))

    if(optionMenu.classList.contains('closed')){
      optionMenu.classList.remove('closed')
      setStylesForSelected(option)
      rotateArrows(option, 'up')

      if(nowOpened && nowOpened !== optionMenu){
        nowOpened.classList.add('closed')
        removeStylesFromSelected(nowSelectedOption)
        rotateArrows(nowSelectedOption, 'down')
      }
      nowOpened = optionMenu
      nowSelectedOption = option
    }else{
      optionMenu.classList.add('closed')
      removeStylesFromSelected(option)
      rotateArrows(option, 'down')
    }

  }

  Array.from(options.keys()).forEach(key => {
    document.getElementById(key).addEventListener('click', handleOptionClick)
  })

}

const rotateArrows = (option, direction) => {

  const leftArrow = document.getElementById(`${option}-arrow-left`)
  const rightArrow = document.getElementById(`${option}-arrow-right`)

  if(direction === 'down'){
    leftArrow.classList.remove('arrow-opened')
    rightArrow.classList.remove('arrow-opened')
  }else if(direction === 'up'){
    leftArrow.classList.add('arrow-opened')
    rightArrow.classList.add('arrow-opened')
  }else{
    console.log('arrow rotation error');
  }

}

const setStylesForSelected = selectedID => {

  const selectedItem = document.getElementById(selectedID)
  selectedItem.classList.add('menu-selected-title')

}

const removeStylesFromSelected = selectedID => {

  const selectedItem = document.getElementById(selectedID)
  selectedItem.classList.remove('menu-selected-title')

}

export default configureSideMenu

