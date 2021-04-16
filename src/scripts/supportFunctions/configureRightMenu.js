const handleToggleBtnClick = () => {

  const treasuresDropdown = document.getElementById('right-menu__treasures')

  if(treasuresDropdown.classList.contains('right-menu__hidden-item')){
    treasuresDropdown.classList.remove('right-menu__hidden-item')
    openDropdownMenu()
  }else{
    treasuresDropdown.classList.add('right-menu__hidden-item')
    closeDropdownMenu()
  }

}

const openDropdownMenu = () => {

  const arrow = document.getElementById('right-menu__arrow')
  const dropdownMenu = document.getElementById('right-menu__opt-list')

  arrow.classList.remove('right-menu__arrow-closed')
  arrow.classList.add('right-menu__arrow-opened')
  dropdownMenu.classList.remove('right-menu__hidden-item')

}

const closeDropdownMenu = () => {

  const arrow = document.getElementById('right-menu__arrow')
  const dropdownMenu = document.getElementById('right-menu__opt-list')

  arrow.classList.remove('right-menu__arrow-opened')
  arrow.classList.add('right-menu__arrow-closed')
  dropdownMenu.classList.add('right-menu__hidden-item')

}

const handleDropdownClick = () => {

  const dropdownList = document.getElementById('right-menu__opt-list')

  if(dropdownList.classList.contains('right-menu__hidden-item')){
    openDropdownMenu()
  }else{
    closeDropdownMenu()
  }

}

const setCurrentOption  = option => {

  const currentOption = document.getElementById('current-option')
  currentOption.innerHTML = option

}

const createOptionListItems = options => {

  const handleItemClick = e => {

    const allItems = document.getElementById('right-menu__opt-list').children
    allItems.forEach(item => {
      if(item.classList.contains('right-menu__selected-option')){
        item.classList.remove('right-menu__selected-option')
      }
    })

    const selectedItem = e.target
    setCurrentOption(selectedItem.innerHTML)

    closeDropdownMenu()

    selectedItem.classList.add('right-menu__selected-option')

  }

  const optionListItems = options.map(option => {

    const item = document.createElement('li')
    item.classList.add('right-menu__opt-list-item')
    item.addEventListener('click', handleItemClick)
    item.innerHTML = option

    return item

  })

  return optionListItems

}

const handleOutsideClick = () => {

  const treasuresDropdown = document.getElementById('right-menu__treasures')

  if(!treasuresDropdown.classList.contains('right-menu__hidden-item')){
    treasuresDropdown.classList.add('right-menu__hidden-item')
    closeDropdownMenu()
  }

}

const configureRightMenu = () => {

  const options = ['Сундук','Хрустальный череп','Ожерелье']

  const optionListItems = createOptionListItems(options)
  const optionList = document.getElementById('right-menu__opt-list')
  optionListItems.forEach(item => {
    optionList.append(item)
  })

  const toggleBtn = document.getElementById('right-menu__toggle-btn')
  toggleBtn.addEventListener('click', handleToggleBtnClick)

  const dropdownTitle = document.getElementById('right-menu__title')
  dropdownTitle.addEventListener('click', handleDropdownClick)

  document.addEventListener('click', handleOutsideClick)
  const treasuresDropdown = document.getElementById('right-menu')
  treasuresDropdown.addEventListener('click', e=>e.stopPropagation())

  setCurrentOption(options[0])
  optionList.children[0].classList.add('right-menu__selected-option')

}

export default configureRightMenu



