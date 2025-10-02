import { NavLink, Outlet } from "react-router-dom";
import "../../styles/components/schedules/SchedulePage.css";

const SchedulePage = () => {
    return (
        <div className="schedule-page">
            <h1>Schedules Management</h1>
            <nav className="schedule-nav">
                <NavLink to="/admin/schedules" end className="nav-tab">
                    Schedule List
                </NavLink>
                <NavLink to="/admin/schedules/add" className="nav-tab">
                    Add Schedule
                </NavLink>
            </nav>
            <Outlet />
        </div>
    );
};

export default SchedulePage;
