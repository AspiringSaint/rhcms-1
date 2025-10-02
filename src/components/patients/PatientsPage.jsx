import { Outlet, NavLink } from "react-router-dom"
import '../../styles/components/patients/PatientsPage.css'

const PatientsPage = () => {
    return (
        <div className="patients-page">
            {/* Tabs as nav links */}
            <nav className="patients-tabs">
                <NavLink
                    to="/admin/patients"
                    end
                    className={({ isActive }) => isActive ? 'active' : ''}
                >
                    Patient List
                </NavLink>

                <NavLink
                    to="/admin/patients/register"
                    className={({ isActive }) => isActive ? 'active' : ''}
                >
                    Register Patient
                </NavLink>
            </nav>

            {/* Where child routes render */}
            <Outlet />
        </div>
    )
}

export default PatientsPage