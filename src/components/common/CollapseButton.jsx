import '../../styles/components/common/CollapseButton.css';

const CollapseButton = ({ collapsed, onToggle }) => {
  return (
    <div className="collapse-button">
        <button onClick={onToggle}>
            <span className={`chevron ${collapsed ? 'rotate' : ''}`}>❮</span>
        </button>
    </div>
  )
}

export default CollapseButton