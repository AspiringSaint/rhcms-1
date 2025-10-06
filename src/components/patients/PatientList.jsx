import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../../styles/components/patients/PatientList.css';

import Filters from "../common/Filters";
import DataTable from "../common/DataTable";
import TableContainer from "../common/TableContainer";
import Pagination from "../common/Pagination";

const dummyPatients = [
    { id: 1, name: "Juan Cruz", dob: "1990-05-06", gender: "Male", contact: "09123456789", doctor: "Dr. Reyes" },
    { id: 2, name: "Maria Santos", dob: "1985-08-02", gender: "Female", contact: "09987654321", doctor: "Dr. Lopez" },
    { id: 3, name: "Pedro Dela Cruz", dob: "2000-01-15", gender: "Male", contact: "0911222333", doctor: "Dr. Reyes" },
    { id: 4, name: "Ana Lim", dob: "1993-03-10", gender: "Female", contact: "0911222111", doctor: "Dr. Lopez" },
    { id: 5, name: "Jose Ramos", dob: "1999-07-22", gender: "Male", contact: "0922333444", doctor: "Dr. Reyes" },
    { id: 6, name: "Juan Cruz", dob: "1990-05-06", gender: "Male", contact: "09123456789", doctor: "Dr. Reyes" },
    { id: 7, name: "Maria Santos", dob: "1985-08-02", gender: "Female", contact: "09987654321", doctor: "Dr. Lopez" },
    { id: 8, name: "Pedro Dela Cruz", dob: "2000-01-15", gender: "Male", contact: "0911222333", doctor: "Dr. Reyes" },
    { id: 9, name: "Ana Lim", dob: "1993-03-10", gender: "Female", contact: "0911222111", doctor: "Dr. Lopez" },
    { id: 10, name: "Jose Ramos", dob: "1999-07-22", gender: "Male", contact: "0922333444", doctor: "Dr. Reyes" },
    { id: 11, name: "Juan Cruz", dob: "1990-05-06", gender: "Male", contact: "09123456789", doctor: "Dr. Reyes" },
    { id: 12, name: "Maria Santos", dob: "1985-08-02", gender: "Female", contact: "09987654321", doctor: "Dr. Lopez" },
    { id: 13, name: "Pedro Dela Cruz", dob: "2000-01-15", gender: "Male", contact: "0911222333", doctor: "Dr. Reyes" },
    { id: 14, name: "Ana Lim", dob: "1993-03-10", gender: "Female", contact: "0911222111", doctor: "Dr. Lopez" },
    { id: 15, name: "Jose Ramos", dob: "1999-07-22", gender: "Male", contact: "0922333444", doctor: "Dr. Reyes" },
    { id: 16, name: "Juan Cruz", dob: "1990-05-06", gender: "Male", contact: "09123456789", doctor: "Dr. Reyes" },
    { id: 17, name: "Maria Santos", dob: "1985-08-02", gender: "Female", contact: "09987654321", doctor: "Dr. Lopez" },
    { id: 18, name: "Pedro Dela Cruz", dob: "2000-01-15", gender: "Male", contact: "0911222333", doctor: "Dr. Reyes" },
    { id: 19, name: "Ana Lim", dob: "1993-03-10", gender: "Female", contact: "0911222111", doctor: "Dr. Lopez" },
    { id: 20, name: "Jose Ramos", dob: "1999-07-22", gender: "Male", contact: "0922333444", doctor: "Dr. Reyes" },
    { id: 21, name: "Juan Cruz", dob: "1990-05-06", gender: "Male", contact: "09123456789", doctor: "Dr. Reyes" },
    { id: 22, name: "Maria Santos", dob: "1985-08-02", gender: "Female", contact: "09987654321", doctor: "Dr. Lopez" },
    { id: 23, name: "Pedro Dela Cruz", dob: "2000-01-15", gender: "Male", contact: "0911222333", doctor: "Dr. Reyes" },
    { id: 24, name: "Ana Lim", dob: "1993-03-10", gender: "Female", contact: "0911222111", doctor: "Dr. Lopez" },
    { id: 25, name: "Jose Ramos", dob: "1999-07-22", gender: "Male", contact: "0922333444", doctor: "Dr. Reyes" },
    { id: 26, name: "Juan Cruz", dob: "1990-05-06", gender: "Male", contact: "09123456789", doctor: "Dr. Reyes" },
    { id: 27, name: "Maria Santos", dob: "1985-08-02", gender: "Female", contact: "09987654321", doctor: "Dr. Lopez" },
    { id: 28, name: "Pedro Dela Cruz", dob: "2000-01-15", gender: "Male", contact: "0911222333", doctor: "Dr. Reyes" },
    { id: 29, name: "Ana Lim", dob: "1993-03-10", gender: "Female", contact: "0911222111", doctor: "Dr. Lopez" },
    { id: 30, name: "Jose Ramos", dob: "1999-07-22", gender: "Male", contact: "0922333444", doctor: "Dr. Reyes" },
];

const PatientList = () => {
    const navigate = useNavigate();

    // Filter States
    const [search, setSearch] = useState("");
    const [genderFilter, setGenderFilter] = useState("");
    const [doctorFilter, setDoctorFilter] = useState("");

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const filterItems = [
        { type: "text", value: search, onChange: e => setSearch(e.target.value), placeholder: "Search by name or contact" },
        {
            type: "select", value: genderFilter, onChange: e => setGenderFilter(e.target.value), options: [
                { value: "", label: "All Genders" },
                { value: "Male", label: "Male" },
                { value: "Female", label: "Female" }
            ]
        },
        {
            type: "select", value: doctorFilter, onChange: e => setDoctorFilter(e.target.value), options: [
                { value: "", label: "All Doctors" },
                { value: "Dr. Reyes", label: "Dr. Reyes" },
                { value: "Dr. Lopez", label: "Dr. Lopez" }
            ]
        }
    ];

    const columns = [
        { key: "id", label: "ID" },
        { key: "name", label: "Name" },
        { key: "dob", label: "DOB" },
        { key: "gender", label: "Gender" },
        { key: "contact", label: "Contact" },
        { key: "doctor", label: "Doctor" }
    ];

    const filteredPatients = dummyPatients.filter((patient) => {
        const matchesSearch =
            patient.name.toLowerCase().includes(search.toLowerCase()) ||
            patient.contact.includes(search);

        const matchesGender = genderFilter ? patient.gender === genderFilter : true;
        const matchesDoctor = doctorFilter ? patient.doctor === doctorFilter : true;

        return matchesSearch && matchesGender && matchesDoctor;
    });

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentPatients = filteredPatients.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredPatients.length / itemsPerPage);

    const handleRowClick = (row) => {
        navigate(`/admin/patients/${row.id}`);
    };

    return (

        <>
            <TableContainer>
                <Filters filters={filterItems} />
                <DataTable
                    columns={columns}
                    data={currentPatients}
                    onRowClick={handleRowClick}
                />
            </TableContainer>

            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
            />

        </>
        // <div>

        //     {/* Search + Filters */}
        //     <div className="filters">
        //         <input
        //             type="text"
        //             placeholder="Search by name or contact..."
        //             value={search}
        //             onChange={(e) => setSearch(e.target.value)}
        //         />
        //         <select value={genderFilter} onChange={(e) => setGenderFilter(e.target.value)}>
        //             <option value="">All Genders</option>
        //             <option value="Male">Male</option>
        //             <option value="Female">Female</option>
        //         </select>
        //         <select value={doctorFilter} onChange={(e) => setDoctorFilter(e.target.value)}>
        //             <option value="">All Doctors</option>
        //             <option>Dr. Reyes</option>
        //             <option>Dr. Lopez</option>
        //         </select>
        //     </div>

        //     {/* Patient Table */}
        //     <table className="patient-table">
        //         <thead>
        //             <tr>
        //                 <th>ID</th><th>Name</th><th>Date of Birth</th><th>Gender</th><th>Contact</th><th>Doctor</th>
        //             </tr>
        //         </thead>
        //         <tbody>
        //             {filteredPatients.length > 0 ? (
        //                 filteredPatients.map((patient) => (
        //                     <tr
        //                         key={patient.id}
        //                         onClick={() => handleRowClick(patient.id)}
        //                         className="clickable-row"
        //                     >
        //                         <td>{patient.id}</td>
        //                         <td>{patient.name}</td>
        //                         <td>{patient.dob}</td>
        //                         <td>{patient.gender}</td>
        //                         <td>{patient.contact}</td>
        //                         <td>{patient.doctor}</td>
        //                     </tr>
        //                 ))
        //             ) : (
        //                 <tr>
        //                     <td colSpan="6" style={{ textAlign: "center" }}>No patients found</td>
        //                 </tr>
        //             )}
        //         </tbody>
        //     </table>
        // </div>
    );
};

export default PatientList;
