import { NavLink, Outlet } from "react-router-dom";

import Tabs from "../common/Tabs";
import "../../styles/components/schedules/SchedulePage.css";

const SchedulePage = () => {

    const tabItems = [
        { to: '/admin/schedules', label: 'Schedule list', end: true },
        { to: '/admin/schedules/add', label: 'Add Schedule' }
    ];

    return (
        <div className="schedule-page">
            <h1>Schedules Management</h1>

            <Tabs tabs={tabItems} />
            <Outlet />
        </div>
    );
};

export default SchedulePage;
