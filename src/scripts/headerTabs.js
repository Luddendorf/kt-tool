const configureHeaderTabs = () => {

  const tabsIds = ['bight', 'my-ship']
  let currentTabId = 'bight'

  const handleTabClick = e => {
    const tab = e.currentTarget

    if(!tab.classList.contains('header-tab-selected')){
      const previous = document.getElementById(currentTabId)
      previous.classList.remove('header-tab-selected')

      const previousPage = document.getElementById(`${previous.id}-tab`)
      previousPage.classList.remove('tab-opened')
      previousPage.classList.add('tab-closed')

      currentTabId = tab.id
      tab.classList.add('header-tab-selected')

      const newPage = document.getElementById(`${tab.id}-tab`)
      newPage.classList.remove('tab-closed')
      newPage.classList.add('tab-opened')
    }
  }

  tabsIds.forEach(tabId => {
    document.getElementById(tabId).addEventListener('click', handleTabClick)
  })

}

export default configureHeaderTabs
