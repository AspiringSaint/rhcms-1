import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import TableContainer from '../common/TableContainer'
import DataTable from '../common/DataTable'
import Pagination from '../common/Pagination'
import Filters from '../common/Filters'

const dummyQueues = [
    { specialty: 'Internal Medicine', doctor: 'Dr. Reyes', queueNumber: '1', patientName: 'Juan Dela Cruz', status: 'Waiting' },
    { specialty: 'Internal Medicine', doctor: 'Dr. Santos', queueNumber: '2', patientName: 'Peter Ramos', status: 'Waiting' },
    { specialty: 'Internal Medicine', doctor: 'Dra. Mendoza', queueNumber: '3', patientName: 'Nick Abalos', status: 'Waiting' },
    { specialty: 'Pediatrics', doctor: 'Dr. Gomez', queueNumber: '4', patientName: 'Jean Garcia', status: 'Waiting' },
    { specialty: 'OB-Gyne', doctor: 'Dra. Aguilar', queueNumber: '5', patientName: 'Fatima Hidalgo', status: 'Waiting' },
]

const QueuesList = () => {
    const navigate = useNavigate();

    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const filterItems = [
        { type: "text", value: search, onChange: e => setSearch(e.target.value), placeholder: "Search by name or contact" },
    ];

    const columns = [
        { key: "specialty", label: "Specialty" },
        { key: "doctor", label: "Doctor" },
        { key: "queueNumber", label: "Queue #" },
        { key: "patientName", label: "Patient Name" },
        { key: 'status', label: 'Status' }
    ];

    const filteredQueues = dummyQueues.filter((queue) => {
        const matchesSearch =
            queue.doctor.toLowerCase().includes(search.toLowerCase())

        // const matchesGender = genderFilter ? patient.gender === genderFilter : true;
        // const matchesDoctor = doctorFilter ? patient.doctor === doctorFilter : true;

        // return matchesSearch && matchesGender && matchesDoctor;

        return matchesSearch;
    });

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentQueue = filteredQueues.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredQueues.length / itemsPerPage);

    const handleRowClick = (row) => {
        navigate(`/admin/staffs/${row.id}`);
    };

    return (
        <>
            <TableContainer>
                <Filters filters={filterItems} />
                <DataTable columns={columns} data={currentQueue} onRowClick={handleRowClick} />
            </TableContainer>

            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
        </>
    )
}

export default QueuesList