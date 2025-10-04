import { NavLink } from "react-router-dom"
import '../../styles/components/common/Tabs.css'

const Tabs = ({ tabs }) => {
    return (
        <nav className="tabs-nav">
            {tabs.map(({ to, label, end }) => (
                <NavLink
                    key={to}
                    to={to}
                    end={end}
                    className={({ isActive }) => (isActive ? 'active' : '')}
                >
                    {label}
                </NavLink>
            ))}
        </nav>
    )
}

export default Tabs