import '../../styles/pages/admin/AdminDashboardPage.css'

import DashboardPage from '../../components/common/DashboardPage';
import DashboardCardWrapper from '../../components/common/DashboardCardWrapper';
import DashboardCard from '../../components/common/DashboardCard';

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

const dummySchedules = [
  { doctor: "Dr. Reyes", specialty: "Internal Medicine", time: "08:00 - 12:00" },
  { doctor: "Dr. Santos", specialty: "OB-GYN", time: "09:00 - 13:00" },
];

const AdminDashboardPage = () => {
  return (
    <>
      <DashboardPage title={'Admin Dashboard'}>
        <DashboardCardWrapper>
          <DashboardCard title={'Total Patients Today'} value={dummyStats.totalPatientsToday} />
          <DashboardCard title={'Consultations Done Today'} value={dummyStats.consultationsDone} />
          <DashboardCard title={'Active Doctors'} value={dummyStats.activeDoctors} />
        </DashboardCardWrapper>

        <DashboardCardWrapper>
          <DashboardCard title={'Queues Overview'}>
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
          </DashboardCard>
          <DashboardCard title={'Today\'s Schedule'}>
            <ul className="dashboard-list">
              {dummySchedules.map((s, index) => (
                <li key={index}>{s.doctor} - {s.specialty} ({s.time})</li>
              ))}
            </ul>
          </DashboardCard>
        </DashboardCardWrapper>
      </DashboardPage>
    </>
  );
};

export default AdminDashboardPage;
