import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../../styles/components/patients/PatientList.css';

const dummyPatients = [
    { id: 1, name: "Juan Cruz", dob: "1990-05-06", gender: "Male", contact: "09123456789", doctor: "Dr. Reyes" },
    { id: 2, name: "Maria Santos", dob: "1985-08-02", gender: "Female", contact: "09987654321", doctor: "Dr. Lopez" },
    { id: 3, name: "Pedro Dela Cruz", dob: "2000-01-15", gender: "Male", contact: "0911222333", doctor: "Dr. Reyes" },
];

const PatientList = () => {
    const navigate = useNavigate();
    const [search, setSearch] = useState("");
    const [genderFilter, setGenderFilter] = useState("");
    const [doctorFilter, setDoctorFilter] = useState("");

    const filteredPatients = dummyPatients.filter((patient) => {
        const matchesSearch =
            patient.name.toLowerCase().includes(search.toLowerCase()) ||
            patient.contact.includes(search);

        const matchesGender = genderFilter ? patient.gender === genderFilter : true;
        const matchesDoctor = doctorFilter ? patient.doctor === doctorFilter : true;

        return matchesSearch && matchesGender && matchesDoctor;
    });

    const handleRowClick = (id) => {
        navigate(`/admin/patients/${id}`);
    };

    return (
        <div>

            {/* Search + Filters */}
            <div className="filters">
                <input
                    type="text"
                    placeholder="Search by name or contact..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <select value={genderFilter} onChange={(e) => setGenderFilter(e.target.value)}>
                    <option value="">All Genders</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
                <select value={doctorFilter} onChange={(e) => setDoctorFilter(e.target.value)}>
                    <option value="">All Doctors</option>
                    <option>Dr. Reyes</option>
                    <option>Dr. Lopez</option>
                </select>
            </div>

            {/* Patient Table */}
            <table className="patient-table">
                <thead>
                    <tr>
                        <th>ID</th><th>Name</th><th>Date of Birth</th><th>Gender</th><th>Contact</th><th>Doctor</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredPatients.length > 0 ? (
                        filteredPatients.map((patient) => (
                            <tr
                                key={patient.id}
                                onClick={() => handleRowClick(patient.id)}
                                className="clickable-row"
                            >
                                <td>{patient.id}</td>
                                <td>{patient.name}</td>
                                <td>{patient.dob}</td>
                                <td>{patient.gender}</td>
                                <td>{patient.contact}</td>
                                <td>{patient.doctor}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6" style={{ textAlign: "center" }}>No patients found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default PatientList;
