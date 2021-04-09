const configureSideMenu = () => {

  let nowOpened = null

  const handleSailsClick = () => {
    const sailsMenu = document.getElementById('sails-menu')
    if(sailsMenu.classList.contains('closed')){
      sailsMenu.classList.remove('closed')
      if(nowOpened && nowOpened !== sailsMenu) nowOpened.classList.add('closed')
      nowOpened = sailsMenu
    }else{
      sailsMenu.classList.add('closed')
    }
  }

  const handleRepairClick = () => {
    const repairMenu = document.getElementById('repair-menu')
    if(repairMenu.classList.contains('closed')){
      repairMenu.classList.remove('closed')
      if(nowOpened && nowOpened !== repairMenu) nowOpened.classList.add('closed')
      nowOpened = repairMenu
    }else{
      repairMenu.classList.add('closed')
    }
  }

  const handleGunsClick = () => {
    const gunsMenu = document.getElementById('guns-menu')
    if(gunsMenu.classList.contains('closed')){
      gunsMenu.classList.remove('closed')
      if(nowOpened && nowOpened !== gunsMenu) nowOpened.classList.add('closed')
      nowOpened = gunsMenu
    }else{
      gunsMenu.classList.add('closed')
    }
  }

  const handleTeamClick = () => {
    const teamMenu = document.getElementById('team-menu')
    console.log(teamMenu);
    if(teamMenu.classList.contains('closed')){
      teamMenu.classList.remove('closed')
      if(nowOpened && nowOpened !== teamMenu) nowOpened.classList.add('closed')
      nowOpened = teamMenu
    }else{
      teamMenu.classList.add('closed')
    }
  }

  const sails = document.getElementById('sails')
  sails.addEventListener('click', handleSailsClick)

  const repair = document.getElementById('repair')
  repair.addEventListener('click', handleRepairClick)

  const guns = document.getElementById('guns')
  guns.addEventListener('click', handleGunsClick)

  const team = document.getElementById('team')
  team.addEventListener('click', handleTeamClick)

}

export default configureSideMenu
