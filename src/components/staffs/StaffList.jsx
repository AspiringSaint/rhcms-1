import { useNavigate } from 'react-router-dom';
import '../../styles/components/staffs/StaffList.css';

const dummyStaff = [
    { id: 1, name: "Dr. Reyes", role: "Doctor", specialty: "Internal Medicine", status: "Active" },
    { id: 2, name: "Nurse Maria", role: "Nurse", specialty: "", status: "Active" },
    { id: 3, name: "Pharma Juan", role: "Pharmacist", specialty: "", status: "Inactive" },
];

const StaffList = () => {
    const navigate = useNavigate();

    return (
        <div className="staff-list-page">
            <h2>Staff List</h2>

            <table className="staff-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Role</th>
                        <th>Specialty</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {dummyStaff.map((staff) => (
                        <tr
                            key={staff.id}
                            onClick={() => navigate(`/admin/staffs/${staff.id}`)}
                            className="staff-row"
                        >
                            <td>{staff.id}</td>
                            <td>{staff.name}</td>
                            <td>{staff.role}</td>
                            <td>{staff.specialty || "-"}</td>
                            <td>
                                <span className={`status ${staff.status.toLowerCase()}`}>
                                    {staff.status}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StaffList;
