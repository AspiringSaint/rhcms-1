import { useState } from "react";
import '../../styles/components/reports/ReportPage.css'

const dummyPatientReport = [
    { date: "2025-10-01", totalPatients: 25 },
    { date: "2025-10-02", totalPatients: 30 },
];

const dummyQueueReport = [
    { specialty: "Internal Medicine", avgWaitTime: "15 min", priorityPatients: 5, totalSeen: 20 },
    { specialty: "Pediatrics", avgWaitTime: "10 min", priorityPatients: 2, totalSeen: 12 },
];

const dummyPharmacyReport = [
    { medicine: "Paracetamol 500mg", dispensed: 50, stockRemaining: 20 },
    { medicine: "Iron 65mg", dispensed: 30, stockRemaining: 10 },
];

const ReportsPage = () => {
    const [activeTab, setActiveTab] = useState("Patient Reports");

    const tabNames = ["Patient Reports", "Queue Reports", "Pharmacy Reports"];

    return (
        <div className="reports-page">
            <h1>Reports</h1>

            {/* Tabs */}
            <div className="reports-tabs">
                {tabNames.map(tab => (
                    <button
                        key={tab}
                        className={activeTab === tab ? "active" : ""}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Tab Contents */}
            {activeTab === "Patient Reports" && (
                <table className="reports-table">
                    <thead>
                        <tr>
                            <th>Date</th><th>Total Patients</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dummyPatientReport.map((r, index) => (
                            <tr key={index}>
                                <td>{r.date}</td>
                                <td>{r.totalPatients}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

            {activeTab === "Queue Reports" && (
                <table className="reports-table">
                    <thead>
                        <tr>
                            <th>Specialty</th><th>Avg Wait Time</th><th>Priority Patients</th><th>Total Seen</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dummyQueueReport.map((r, index) => (
                            <tr key={index}>
                                <td>{r.specialty}</td>
                                <td>{r.avgWaitTime}</td>
                                <td>{r.priorityPatients}</td>
                                <td>{r.totalSeen}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

            {activeTab === "Pharmacy Reports" && (
                <table className="reports-table">
                    <thead>
                        <tr>
                            <th>Medicine</th><th>Dispensed</th><th>Stock Remaining</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dummyPharmacyReport.map((r, index) => (
                            <tr key={index}>
                                <td>{r.medicine}</td>
                                <td>{r.dispensed}</td>
                                <td>{r.stockRemaining}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default ReportsPage;
