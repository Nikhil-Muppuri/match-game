import './index.css'

const TabsList = props => {
  const {tabDetails, onChangeTab, isActive} = props
  const {tabId, displayText} = tabDetails

  const tabClick = () => {
    onChangeTab(tabId)
  }

  const tabStyle = isActive ? 'active' : 'tab-style-col'

  return (
    <li>
      <button type="button" className="tab-btn" onClick={tabClick}>
        <p className={`tab-style ${tabStyle}`}>{displayText}</p>
      </button>
    </li>
  )
}

export default TabsList
