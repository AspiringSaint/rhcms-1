import { useState } from "react";
import "../../styles/components/queues/QueuePage.css";

const dummyQueue = {
    "Internal Medicine": [
        { id: 1, name: "Juan Cruz", priority: true, status: "Waiting" },
        { id: 2, name: "Pedro Dela Cruz", priority: false, status: "Waiting" },
    ],
    Pediatrics: [
        { id: 3, name: "Maria Santos", priority: false, status: "Waiting" },
    ],
    "OB-GYN": [],
};

const QueuePage = () => {
    const [activeTab, setActiveTab] = useState("All Queue");
    const [queueData, setQueueData] = useState(dummyQueue);

    // form state
    const [patientName, setPatientName] = useState("");
    const [specialty, setSpecialty] = useState("Internal Medicine");
    const [priority, setPriority] = useState(false);

    const tabNames = ["All Queue", ...Object.keys(queueData), "Add to Queue"];

    const handleAddToQueue = (e) => {
        e.preventDefault();
        if (!patientName.trim()) {
            alert("Patient name is required!");
            return;
        }

        const newPatient = {
            id: Date.now(),
            name: patientName,
            priority,
            status: "Waiting",
        };

        setQueueData((prev) => ({
            ...prev,
            [specialty]: [...prev[specialty], newPatient],
        }));

        setPatientName("");
        setPriority(false);
        setSpecialty("Internal Medicine");

        alert("Patient added to queue successfully!");
    };

    const renderTable = (patients, specialtyName) => (
        <div className="queue-section">
            {specialtyName && <h2>{specialtyName}</h2>}
            <table className="queue-table">
                <thead>
                    <tr>
                        <th>Queue #</th>
                        <th>Name</th>
                        <th>Priority</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {patients.length > 0 ? (
                        patients.map((p, index) => (
                            <tr key={p.id} className={p.priority ? "priority-row" : ""}>
                                <td>{index + 1}</td>
                                <td>{p.name}</td>
                                <td>{p.priority ? "Yes" : "No"}</td>
                                <td>{p.status}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" style={{ textAlign: "center" }}>
                                No patients in {specialtyName || "this"} queue
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );

    return (
        <div className="queue-page">
            <h1>Consultation Queues</h1>

            {/* Tabs */}
            <div className="queue-tabs">
                {tabNames.map((tab) => (
                    <button
                        key={tab}
                        className={`queue-tab ${activeTab === tab ? "active" : ""}`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* All Queues */}
            {activeTab === "All Queue" &&
                Object.entries(queueData).map(([spec, patients]) =>
                    renderTable(patients, spec)
                )}

            {/* Specialty Tabs */}
            {Object.keys(queueData).includes(activeTab) &&
                renderTable(queueData[activeTab])}

            {/* Add Form */}
            {activeTab === "Add to Queue" && (
                <form onSubmit={handleAddToQueue} className="queue-form">
                    <h2>Add Patient to Queue</h2>

                    <label>
                        Patient Name:
                        <input
                            type="text"
                            value={patientName}
                            onChange={(e) => setPatientName(e.target.value)}
                            required
                        />
                    </label>

                    <label>
                        Specialty:
                        <select
                            value={specialty}
                            onChange={(e) => setSpecialty(e.target.value)}
                        >
                            {Object.keys(queueData).map((spec) => (
                                <option key={spec} value={spec}>
                                    {spec}
                                </option>
                            ))}
                        </select>
                    </label>

                    <label className="checkbox">
                        <input
                            type="checkbox"
                            checked={priority}
                            onChange={(e) => setPriority(e.target.checked)}
                        />
                        Priority
                    </label>

                    <button type="submit" className="add-btn">
                        Add to Queue
                    </button>
                </form>
            )}
        </div>
    );
};

export default QueuePage;
