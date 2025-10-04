import { NavLink, Outlet } from 'react-router-dom';

import Tabs from '../common/Tabs';
import '../../styles/components/staffs/StaffPage.css';

const StaffPage = () => {

    const tabItems = [
        { to: '/admin/staffs', label: 'Staff List', end: true },
        { to: '/admin/staffs/register', label: 'Register Staff' }
    ]

    return (
        <div className="staff-page">
            <h1>Staff Management</h1>

            <Tabs tabs={tabItems} />
            {/* Render nested route here */}
            <div className="staff-outlet">
                <Outlet />
            </div>
        </div>
    );
};

export default StaffPage;
