import { useState } from "react";
import '../../styles/components/queues/QueuePage.css';

const dummyQueues = {
    "Internal Medicine": [
        { id: 1, name: "Juan Cruz", dob: "1990-05-06", gender: "Male", priority: false, status: "Waiting" },
        { id: 2, name: "Ana Reyes", dob: "1988-02-14", gender: "Female", priority: true, status: "Waiting" },
    ],
    Pediatrics: [
        { id: 3, name: "Pedro Dela Cruz", dob: "2015-08-22", gender: "Male", priority: false, status: "Waiting" },
    ],
    "OB-GYN": [
        { id: 4, name: "Maria Santos", dob: "1985-08-02", gender: "Female", priority: false, status: "Waiting" },
    ]
};

const QueuePage = () => {
    const [activeTab, setActiveTab] = useState("Internal Medicine");
    const [queues, setQueues] = useState(dummyQueues);

    const startConsultation = (specialty, id) => {
        setQueues({
            ...queues,
            [specialty]: queues[specialty].map(p => p.id === id ? { ...p, status: "In Consultation" } : p)
        });
    };

    const completeConsultation = (specialty, id) => {
        setQueues({
            ...queues,
            [specialty]: queues[specialty].map(p => p.id === id ? { ...p, status: "Done" } : p)
        });
    };

    // Prepare current queue
    let currentQueue = [];
    if (activeTab === "All Queues") {
        Object.keys(queues).forEach(s => {
            queues[s].forEach(p => currentQueue.push({ ...p, specialty: s }));
        });
    } else {
        currentQueue = queues[activeTab].map(p => ({ ...p, specialty: activeTab }));
    }

    // Sort by priority first
    currentQueue.sort((a, b) => b.priority - a.priority);

    const tabNames = ["All Queues", ...Object.keys(queues)];

    return (
        <div className="queue-page">
            <h1>Patient Queues</h1>

            {/* Tabs */}
            <div className="queue-tabs">
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

            {/* Queue Table */}
            <table className="queue-table">
                <thead>
                    <tr>
                        <th>Queue #</th>
                        <th>Name</th>
                        <th>DOB</th>
                        <th>Gender</th>
                        <th>Specialty</th>
                        <th>Priority</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {currentQueue.length > 0 ? currentQueue.map((p, index) => (
                        <tr key={p.id} className={p.priority ? "priority" : ""}>
                            <td>{index + 1}</td>
                            <td>{p.name}</td>
                            <td>{p.dob}</td>
                            <td>{p.gender}</td>
                            <td>{p.specialty}</td>
                            <td>{p.priority ? "Yes" : "No"}</td>
                            <td>{p.status}</td>
                            <td>
                                {p.status === "Waiting" && (
                                    <button className="action-btn start" onClick={() => startConsultation(p.specialty, p.id)}>Start</button>
                                )}
                                {p.status === "In Consultation" && (
                                    <button className="action-btn done" onClick={() => completeConsultation(p.specialty, p.id)}>Done</button>
                                )}
                            </td>
                        </tr>
                    )) : (
                        <tr>
                            <td colSpan="8" style={{ textAlign: "center" }}>No patients in this queue</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default QueuePage;
