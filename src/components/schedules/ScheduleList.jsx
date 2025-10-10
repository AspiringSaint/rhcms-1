import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../../styles/components/schedules/ScheduleList.css";

import TableContainer from '../common/TableContainer';
import Filters from '../common/Filters';
import DataTable from '../common/DataTable';
import Pagination from '../common/Pagination';

const dummySchedules = [
    { id: 1, doctor: "Dr. Reyes", specialty: "Internal Medicine", day: "Monday", start: "08:00", end: "12:00" },
    { id: 2, doctor: "Dr. Santos", specialty: "OB-GYN", day: "Tuesday", start: "09:00", end: "13:00" },
    { id: 3, doctor: "Dr. Reyes", specialty: "Internal Medicine", day: "Wednesday", start: "08:00", end: "12:00" },
    { id: 4, doctor: "Dr. Reyes", specialty: "Internal Medicine", day: "Monday", start: "08:00", end: "12:00" },
    { id: 5, doctor: "Dr. Santos", specialty: "OB-GYN", day: "Tuesday", start: "09:00", end: "13:00" },
    { id: 6, doctor: "Dr. Reyes", specialty: "Internal Medicine", day: "Wednesday", start: "08:00", end: "12:00" },
    { id: 7, doctor: "Dr. Reyes", specialty: "Internal Medicine", day: "Monday", start: "08:00", end: "12:00" },
    { id: 8, doctor: "Dr. Santos", specialty: "OB-GYN", day: "Tuesday", start: "09:00", end: "13:00" },
    { id: 9, doctor: "Dr. Reyes", specialty: "Internal Medicine", day: "Wednesday", start: "08:00", end: "12:00" },
    { id: 10, doctor: "Dr. Reyes", specialty: "Internal Medicine", day: "Monday", start: "08:00", end: "12:00" },
    { id: 11, doctor: "Dr. Santos", specialty: "OB-GYN", day: "Tuesday", start: "09:00", end: "13:00" },
    { id: 12, doctor: "Dr. Reyes", specialty: "Internal Medicine", day: "Wednesday", start: "08:00", end: "12:00" },
];

const ScheduleList = () => {

    const navigate = useNavigate();

    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const filterItems = [
        { type: "text", value: search, onChange: e => setSearch(e.target.value), placeholder: "Search by name or contact" },
    ];


    const columns = [
        { key: 'id', label: "ID" },
        { key: 'doctor', label: 'Doctor' },
        { key: 'specialty', label: 'Specialty' },
        { key: 'day', label: 'Day' },
        { key: 'start', label: 'Start' },
        { key: 'end', label: 'End' },
    ]

    const filteredSchedules = dummySchedules.filter((schedule) => {
        return schedule.doctor.toLowerCase().includes(search.toLowerCase());
    })

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentSchedules = filteredSchedules.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredSchedules.length / itemsPerPage);

    const handleRowClick = (row) => {
        navigate(`/admin/staffs/${row.id}`);
    };

    return (
        <>
            <TableContainer>
                <Filters filters={filterItems} />
                <DataTable columns={columns} data={currentSchedules} onRowClick={handleRowClick} />
            </TableContainer>

            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
        </>

        // <div className="schedule-list">
        //     <h2>All Schedules</h2>
        //     <div className="table-wrapper">
        //         <table className="styled-table">
        //             <thead>
        //                 <tr>
        //                     <th>ID</th>
        //                     <th>Doctor</th>
        //                     <th>Specialty</th>
        //                     <th>Day</th>
        //                     <th>Start</th>
        //                     <th>End</th>
        //                     <th>Actions</th>
        //                 </tr>
        //             </thead>
        //             <tbody>
        //                 {dummySchedules.map((s) => (
        //                     <tr key={s.id}>
        //                         <td>{s.id}</td>
        //                         <td>{s.doctor}</td>
        //                         <td>{s.specialty}</td>
        //                         <td>{s.day}</td>
        //                         <td>{s.start}</td>
        //                         <td>{s.end}</td>
        //                         <td>
        //                             <button className="edit-btn">Edit</button>
        //                         </td>
        //                     </tr>
        //                 ))}
        //             </tbody>
        //         </table>
        //     </div>
        // </div>
    );
};

export default ScheduleList;
