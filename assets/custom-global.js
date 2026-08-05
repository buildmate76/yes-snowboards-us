// YES Custom global scripts

// Function to toggle `.display` class and to update button text and accessibility attributes
const toggleElementVisibility = ({
  btnSelector,
  toggleSelector,
  txtClosed = "Show More", // Default value for txtClosed if parameter ommited on function caller
  txtOpened = "Show Less", // Default value for txtOpened f parameter ommited on function caller
}) => {
  const btn = document.querySelector(btnSelector)
  const toggleEl = document.querySelector(toggleSelector)

  if (!btn || !toggleEl) {
    console.error("Button or toggle element not found")
    return
  }

  btn.addEventListener("click", _ => {
    const isExpanded = toggleEl.classList.toggle("display")
    btn.setAttribute("aria-expanded", isExpanded.toString())
    btn.textContent = isExpanded ? txtOpened : txtClosed
  })
}

const activeCollectionNavItem = collectionName => {
  const collectionNameSanitized = collectionName.trim().toLowerCase()
  const currentPathname = window.location.pathname
  const collectionsPathname = `/collections/${collectionNameSanitized}`
  const navItemName = `#HeaderMenu-${collectionNameSanitized} > span`

  if (currentPathname === collectionsPathname) {
    // if navItemName exists add class
    document.querySelector(navItemName)?.classList.add("header__active-menu-item") ??
      // if navItemName is null display a console warn
      console.warn(`Navigation item not found for selector: ${navItemName}`)
  }
}
activeCollectionNavItem("snowboards")
activeCollectionNavItem("bindings")

const createTabSystem = ({
  tabListSelector,
  tabButtonSelector,
  tabPanelSelector,
  activeTabClass = "active",
  onTabChange = () => {},
} = {}) => {
  const tabList = document.querySelector(tabListSelector)
  if (!tabList) return null

  const tabs = [...tabList.querySelectorAll(tabButtonSelector)]
  const panels = [...document.querySelectorAll(tabPanelSelector)]

  const setActiveTab = targetTab => {
    tabs.forEach(tab => {
      const isActive = tab === targetTab
      tab.setAttribute("aria-selected", isActive)
      tab.setAttribute("tabindex", isActive ? "0" : "-1")
      tab.classList.toggle(activeTabClass, isActive)
    })

    panels.forEach(panel => {
      const isActive = panel.id === targetTab.getAttribute("aria-controls")
      panel.hidden = !isActive
      panel.classList.toggle(activeTabClass, isActive)
    })

    onTabChange(
      targetTab,
      panels.find(panel => panel.id === targetTab.getAttribute("aria-controls"))
    )
  }

  const handleTabInteraction = event => {
    const { type, target, key } = event
    if (target.getAttribute("role") !== "tab") return

    if (type === "click") {
      setActiveTab(target)
      target.focus()
    } else if (type === "keydown") {
      if (key === "Home") {
        event.preventDefault()
        setActiveTab(tabs[0])
        tabs[0].focus()
      } else if (key === "End") {
        event.preventDefault()
        setActiveTab(tabs[tabs.length - 1])
        tabs[tabs.length - 1].focus()
      }
    }
  }

  tabList.addEventListener("click", handleTabInteraction)
  tabList.addEventListener("keydown", handleTabInteraction)

  // Initialize the first tab as active
  setActiveTab(tabs[0])

  // Return methods for external control
  return {
    activateTab: index => setActiveTab(tabs[index]),
    getTabs: () => tabs,
    getPanels: () => panels,
  }
}
