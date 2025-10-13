import '../../styles/components/common/DashboardCardWrapper.css'

const DashboardCardWrapper = ({ children }) => {
  return (
    <div className='dashboard-card-wrapper'>
        {children}
    </div>
  )
}

export default DashboardCardWrapper