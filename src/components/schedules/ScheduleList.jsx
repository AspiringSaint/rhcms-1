import "../../styles/components/schedules/ScheduleList.css";

const dummySchedules = [
    { id: 1, doctor: "Dr. Reyes", specialty: "Internal Medicine", day: "Monday", start: "08:00", end: "12:00" },
    { id: 2, doctor: "Dr. Santos", specialty: "OB-GYN", day: "Tuesday", start: "09:00", end: "13:00" },
    { id: 3, doctor: "Dr. Reyes", specialty: "Internal Medicine", day: "Wednesday", start: "08:00", end: "12:00" },
];

const ScheduleList = () => {
    return (
        <div className="schedule-list">
            <h2>All Schedules</h2>
            <div className="table-wrapper">
                <table className="styled-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Doctor</th>
                            <th>Specialty</th>
                            <th>Day</th>
                            <th>Start</th>
                            <th>End</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dummySchedules.map((s) => (
                            <tr key={s.id}>
                                <td>{s.id}</td>
                                <td>{s.doctor}</td>
                                <td>{s.specialty}</td>
                                <td>{s.day}</td>
                                <td>{s.start}</td>
                                <td>{s.end}</td>
                                <td>
                                    <button className="edit-btn">Edit</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ScheduleList;
