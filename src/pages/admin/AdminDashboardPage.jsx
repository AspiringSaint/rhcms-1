import '../../styles/pages/admin/AdminDashboardPage.css'

const dummyStats = {
  totalPatientsToday: 25,
  patientsInQueue: {
    "Internal Medicine": 5,
    Pediatrics: 3,
    "OB-GYN": 2,
  },
  consultationsDone: 18,
  lowStock: ["Paracetamol 500mg", "Iron 65mg"],
  activeDoctors: 3,
};

const dummyRecentPatients = [
  { id: 1, name: "Juan Cruz", specialty: "Internal Medicine" },
  { id: 2, name: "Maria Santos", specialty: "OB-GYN" },
  { id: 3, name: "Pedro Dela Cruz", specialty: "Pediatrics" },
];

const dummySchedules = [
  { doctor: "Dr. Reyes", specialty: "Internal Medicine", time: "08:00 - 12:00" },
  { doctor: "Dr. Santos", specialty: "OB-GYN", time: "09:00 - 13:00" },
];

const AdminDashboardPage = () => {
  return (
    <div className="admin-dashboard-page">
      <h1>Admin Dashboard</h1>

      {/* Summary Cards */}
      <div className="dashboard-cards">
        <div className="card">
          <h3>Total Patients Today</h3>
          <p>{dummyStats.totalPatientsToday}</p>
        </div>
        <div className="card">
          <h3>Patients in Queue</h3>
          {Object.entries(dummyStats.patientsInQueue).map(([key, value]) => (
            <p key={key}>{key}: {value}</p>
          ))}
        </div>
        <div className="card">
          <h3>Consultations Done Today</h3>
          <p>{dummyStats.consultationsDone}</p>
        </div>
        <div className="card">
          <h3>Low Stock Medicines</h3>
          {dummyStats.lowStock.map(m => <p key={m}>{m}</p>)}
        </div>
        <div className="card">
          <h3>Active Doctors</h3>
          <p>{dummyStats.activeDoctors}</p>
        </div>
      </div>

      {/* Queues Overview */}
      <div className="dashboard-section">
        <h2>Queues Overview</h2>
        <table className="dashboard-table">
          <thead>
            <tr><th>Specialty</th><th>Waiting Patients</th></tr>
          </thead>
          <tbody>
            {Object.entries(dummyStats.patientsInQueue).map(([specialty, count]) => (
              <tr key={specialty}>
                <td>{specialty}</td>
                <td>{count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Recent Patients */}
      <div className="dashboard-section">
        <h2>Recent Patients</h2>
        <ul className="dashboard-list">
          {dummyRecentPatients.map(p => (
            <li key={p.id}>{p.name} - {p.specialty}</li>
          ))}
        </ul>
      </div>

      {/* Upcoming Schedules */}
      <div className="dashboard-section">
        <h2>Today’s Schedules</h2>
        <ul className="dashboard-list">
          {dummySchedules.map((s, index) => (
            <li key={index}>{s.doctor} - {s.specialty} ({s.time})</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
