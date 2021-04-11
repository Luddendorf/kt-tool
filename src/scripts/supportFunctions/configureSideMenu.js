const configureSideMenu = () => {

  const options = new Map()
  options.set('sails','sails-menu')
  options.set('repair','repair-menu')
  options.set('guns','guns-menu')
  options.set('team','team-menu')

  let nowOpened = null

  const handleOptionClick = e => {
    const option = e.currentTarget.id
    const optionMenu = document.getElementById(options.get(option))

    if(optionMenu.classList.contains('closed')){
      optionMenu.classList.remove('closed')
      if(nowOpened && nowOpened !== optionMenu) nowOpened.classList.add('closed')
      nowOpened = optionMenu
    }else{
      optionMenu.classList.add('closed')
    }

  }

  Array.from(options.keys()).forEach(key => {
    document.getElementById(key).addEventListener('click', handleOptionClick)
  })

}

export default configureSideMenu

