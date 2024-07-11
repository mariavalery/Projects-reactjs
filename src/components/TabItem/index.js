import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTab, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClickTabItem = () => {
    updateActiveTab(tabId)
  }
  const activeTabclassName = isActive ? 'active-tab-btn' : ''
  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeTabclassName}`}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
