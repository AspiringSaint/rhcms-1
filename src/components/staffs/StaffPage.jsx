import { NavLink, Outlet } from 'react-router-dom';
import '../../styles/components/staffs/StaffPage.css';

const StaffPage = () => {
    return (
        <div className="staff-page">
            <h1>Staff Management</h1>

            {/* Tabs navigation */}
            <nav className="staff-tabs">
                <NavLink
                    to="/admin/staffs"
                    end
                    className={({ isActive }) => `staff-tab ${isActive ? "active" : ""}`}
                >
                    Staff List
                </NavLink>

                <NavLink
                    to="/admin/staffs/register"
                    className={({ isActive }) => `staff-tab ${isActive ? "active" : ""}`}
                >
                    Register Staff
                </NavLink>
            </nav>

            {/* Render nested route here */}
            <div className="staff-outlet">
                <Outlet />
            </div>
        </div>
    );
};

export default StaffPage;
