import '../../styles/components/pharmacy/Pharmacy.css'
import { useState } from "react";

const dummyPrescriptions = [
    { id: 1, patient: "Juan Cruz", specialty: "Internal Medicine", medicines: ["Paracetamol 500mg"], status: "Waiting" },
    { id: 2, patient: "Maria Santos", specialty: "OB-GYN", medicines: ["Iron 65mg"], status: "Waiting" },
];

const dummyInventory = [
    { id: 1, name: "Paracetamol 500mg", type: "Tablet", stock: 50, expiry: "2025-12-31" },
    { id: 2, name: "Iron 65mg", type: "Tablet", stock: 30, expiry: "2026-06-30" },
];

const dummyHistory = [
    { id: 1, patient: "Juan Cruz", medicines: ["Paracetamol 500mg"], date: "2023-09-01", doctor: "Dr. Reyes", notes: "Fever" },
];

const PharmacyPage = () => {
    const [activeTab, setActiveTab] = useState("Prescription Queue");

    const tabNames = ["Prescription Queue", "Medicine Inventory", "Medication History"];

    const dispenseMedicine = (id) => {
        alert(`Medicine for prescription #${id} dispensed`);
    };

    return (
        <div className="pharmacy-page">
            <h1>Pharmacy Management</h1>

            {/* Tabs */}
            <div className="pharmacy-tabs">
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
            {activeTab === "Prescription Queue" && (
                <table className="pharmacy-table">
                    <thead>
                        <tr>
                            <th>Queue #</th><th>Patient</th><th>Specialty</th><th>Medicines</th><th>Status</th><th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dummyPrescriptions.map((p, index) => (
                            <tr key={p.id}>
                                <td>{index + 1}</td>
                                <td>{p.patient}</td>
                                <td>{p.specialty}</td>
                                <td>{p.medicines.join(", ")}</td>
                                <td>{p.status}</td>
                                <td>
                                    {p.status === "Waiting" &&
                                        <button className="action-btn" onClick={() => dispenseMedicine(p.id)}>Dispense</button>}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

            {activeTab === "Medicine Inventory" && (
                <table className="pharmacy-table">
                    <thead>
                        <tr>
                            <th>ID</th><th>Name</th><th>Type</th><th>Stock</th><th>Expiry</th><th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dummyInventory.map(m => (
                            <tr key={m.id} className={m.stock < 10 ? "low-stock" : ""}>
                                <td>{m.id}</td>
                                <td>{m.name}</td>
                                <td>{m.type}</td>
                                <td>{m.stock}</td>
                                <td>{m.expiry}</td>
                                <td>
                                    <button className="action-btn">Edit Stock</button>
                                    <button className="action-btn remove">Remove</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

            {activeTab === "Medication History" && (
                <table className="pharmacy-table">
                    <thead>
                        <tr>
                            <th>Patient</th><th>Medicines</th><th>Date</th><th>Doctor</th><th>Notes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dummyHistory.map(h => (
                            <tr key={h.id}>
                                <td>{h.patient}</td>
                                <td>{h.medicines.join(", ")}</td>
                                <td>{h.date}</td>
                                <td>{h.doctor}</td>
                                <td>{h.notes}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default PharmacyPage;
