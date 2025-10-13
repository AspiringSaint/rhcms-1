import "../../styles/components/common/DashboardCard.css";

/**
 * Reusable Dashboard Card
 *
 * Props:
 * - title (string): Card title
 * - value (string|number): Optional single key value (e.g., total patients)
 * - table (JSX): Optional table or list content
 * - children (JSX): Custom content fallback
 * - icon (JSX): Optional icon element (e.g., <UserIcon />)
 * - footer (JSX|string): Optional footer text or element
 */
const DashboardCard = ({ title, value, table, children, icon, footer }) => {
    return (
        <div className="dashboard-card">
            {/* Header Section */}
            <div className="dashboard-card-header">
                {icon && <div className="dashboard-card-icon">{icon}</div>}
                <h2 className="dashboard-card-title">{title}</h2>
            </div>

            {/* Main Content */}
            <div className="dashboard-card-content">
                {value ? (
                    <div className="dashboard-card-value">{value}</div>
                ) : table ? (
                    <div className="dashboard-card-table">{table}</div>
                ) : (
                    children
                )}
            </div>

            {/* Optional Footer */}
            {footer && <div className="dashboard-card-footer">{footer}</div>}
        </div>
    );
};

export default DashboardCard;
