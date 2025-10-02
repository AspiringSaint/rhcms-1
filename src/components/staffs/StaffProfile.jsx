import '../../styles/components/staffs/StaffProfile.css'
import { useParams, Link } from "react-router-dom";

const StaffProfile = () => {
    const { id } = useParams();

    // Dummy staff data
    const staff = {
        id,
        name: "Dr. Reyes",
        role: "Doctor",
        specialty: "Internal Medicine",
        email: "dreyes@healthcenter.com",
        status: "Active",
        schedule: [
            { day: "Monday", start: "08:00", end: "12:00" },
            { day: "Wednesday", start: "08:00", end: "12:00" }
        ]
    };

    return (
        <div className="staff-profile-page">
            <Link to="/admin/staffs" className="back-link">
                ← Back to Staff List
            </Link>

            <div className="staff-card">
                <h2>{staff.name}</h2>
                <p className="staff-id">ID: {staff.id}</p>

                <div className="staff-info">
                    <p><strong>Email:</strong> {staff.email}</p>
                    <p><strong>Role:</strong> {staff.role}</p>
                    <p><strong>Specialty:</strong> {staff.specialty || "-"}</p>
                    <p>
                        <strong>Status:</strong>{" "}
                        <span className={`status ${staff.status.toLowerCase()}`}>
                            {staff.status}
                        </span>
                    </p>
                </div>

                {staff.role === "Doctor" && (
                    <div className="staff-schedule">
                        <h3>Schedule</h3>
                        <ul>
                            {staff.schedule.map((slot, i) => (
                                <li key={i}>
                                    <span>{slot.day}</span>
                                    <span>{slot.start} - {slot.end}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                <div className="staff-actions">
                    <button className="edit-btn">Edit Staff</button>
                    <button className="deactivate-btn">Deactivate</button>
                </div>
            </div>
        </div>
    );
};

export default StaffProfile;
