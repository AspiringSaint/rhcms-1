import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import { Outlet } from "react-router-dom"

import '../styles/layouts/DashboardLayout.css'

const DashboardLayout = () => {
  return (
    <div className="dashboard-layout">
        <Sidebar />
        <div className="dashboard-main">
            <Navbar />
            <main className="main-content">
                <Outlet />
            </main>
        </div>
    </div>
  )
}

export default DashboardLayout