import { NavLink } from "react-router-dom"
import '../../styles/components/common/SidebarLink.css'

const SidebarLink = ({ to, icon, label, collapsed }) => {
  return (
    <NavLink
        to={to}
        className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
    >
        <span className="sidebar-icon">{icon}</span>
        {!collapsed && <span className="sidebar-label">{label}</span>}
    </NavLink>
  )
}

export default SidebarLink