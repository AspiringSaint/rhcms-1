import { Outlet, NavLink } from "react-router-dom"

import Tabs from "../common/Tabs"
import '../../styles/components/patients/PatientsPage.css'

const PatientsPage = () => {

    const tabItems = [
        {
            to: '/admin/patients', 
            label: 'Patient List',
            end: true
        },
        {
            to: '/admin/patients/registration',
            label: 'Register Patient'
        }
    ]

    return (
        <div className="patients-page">
            <h1>Patient Management</h1>

            <Tabs tabs={tabItems} />
            <Outlet />
        </div>
    )
}

export default PatientsPage