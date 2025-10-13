import '../../styles/components/common/DashboardPage.css'

const DashboardPage = ({ title, children }) => {
  return (
    <div className="dashboard-page">
        {title && <h1 className="dashboard-page-title">{title}</h1>}

        <div className="dashboard-page-content">
            {children}
        </div>
    </div>
  )
}

export default DashboardPage