import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/components/staffs/StaffList.css';

import TableContainer from '../common/TableContainer';
import Filters from '../common/Filters';
import DataTable from '../common/DataTable';
import Pagination from '../common/Pagination';

const dummyStaff = [
    { id: 1, name: "Dr. Reyes", role: "Doctor", specialty: "Internal Medicine", status: "Active" },
    { id: 2, name: "Nurse Maria", role: "Nurse", specialty: "", status: "Active" },
    { id: 3, name: "Pharma Juan", role: "Pharmacist", specialty: "", status: "Inactive" },
    { id: 4, name: "Dr. Reyes", role: "Doctor", specialty: "Internal Medicine", status: "Active" },
    { id: 5, name: "Nurse Maria", role: "Nurse", specialty: "", status: "Active" },
    { id: 6, name: "Pharma Juan", role: "Pharmacist", specialty: "", status: "Inactive" },
    { id: 7, name: "Dr. Reyes", role: "Doctor", specialty: "Internal Medicine", status: "Active" },
    { id: 8, name: "Nurse Maria", role: "Nurse", specialty: "", status: "Active" },
    { id: 9, name: "Pharma Juan", role: "Pharmacist", specialty: "", status: "Inactive" },
];

const StaffList = () => {
    const navigate = useNavigate();

    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const filterItems = [
        { type: "text", value: search, onChange: e => setSearch(e.target.value), placeholder: "Search by name or contact" },
    ];

    const columns = [
        { key: "id", label: "ID" },
        { key: "role", label: "Role" },
        { key: "name", label: "Name" },
        { key: "specialty", label: "Specialty" },
        { key: 'status', label: 'Status' }
    ];

    const filteredStaffs = dummyStaff.filter((patient) => {
        const matchesSearch =
            patient.name.toLowerCase().includes(search.toLowerCase()) ||
            patient.contact.includes(search);

        // const matchesGender = genderFilter ? patient.gender === genderFilter : true;
        // const matchesDoctor = doctorFilter ? patient.doctor === doctorFilter : true;

        // return matchesSearch && matchesGender && matchesDoctor;

        return matchesSearch;
    });

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentStaffs = filteredStaffs.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredStaffs.length / itemsPerPage);

    const handleRowClick = (row) => {
        navigate(`/admin/staffs/${row.id}`);
    };

    return (
        <>
            <TableContainer>
                <Filters filters={filterItems} />
                <DataTable columns={columns} data={currentStaffs} onRowClick={handleRowClick} />
            </TableContainer>

            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
        </>


        // <div className="staff-list-page">
        //     <h2>Staff List</h2>

        //     <table className="staff-table">
        //         <thead>
        //             <tr>
        //                 <th>ID</th>
        //                 <th>Name</th>
        //                 <th>Role</th>
        //                 <th>Specialty</th>
        //                 <th>Status</th>
        //             </tr>
        //         </thead>
        //         <tbody>
        //             {dummyStaff.map((staff) => (
        //                 <tr
        //                     key={staff.id}
        //                     onClick={() => navigate(`/admin/staffs/${staff.id}`)}
        //                     className="staff-row"
        //                 >
        //                     <td>{staff.id}</td>
        //                     <td>{staff.name}</td>
        //                     <td>{staff.role}</td>
        //                     <td>{staff.specialty || "-"}</td>
        //                     <td>
        //                         <span className={`status ${staff.status.toLowerCase()}`}>
        //                             {staff.status}
        //                         </span>
        //                     </td>
        //                 </tr>
        //             ))}
        //         </tbody>
        //     </table>
        // </div>
    );
};

export default StaffList;
