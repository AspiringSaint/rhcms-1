import { Outlet } from "react-router-dom"

import Tabs from "./Tabs"
import '../../styles/components/common/PageLayout.css';

const PageLayout = ({ title, tabs }) => {
    return (
        <div className="page-layout">
            {title && <h1 className="page-title">{title}</h1>}
            {tabs && <Tabs tabs={tabs} />}
            <Outlet />
        </div>
    )
}

export default PageLayout