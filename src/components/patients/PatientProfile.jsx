import { useParams } from 'react-router-dom';
import '../../styles/components/patients/PatientProfile.css'

const PatientProfile = () => {
    const { id } = useParams();

    // For now, just showing dummy info
    return (
        <div className="patient-profile">
            <h2>Patient Profile - ID: {id}</h2>

            <div className="patient-info">
                <p><strong>Name:</strong> Juan Cruz</p>
                <p><strong>DOB:</strong> 1990-05-06</p>
                <p><strong>Gender:</strong> Male</p>
                <p><strong>Doctor:</strong> Dr. Reyes</p>
            </div>

            <h3>Medical History</h3>
            <ul>
                <li>2023-10-01: Fever - Treated by Dr. Reyes</li>
                <li>2023-08-14: Routine Check-up - Normal</li>
            </ul>
        </div>
    );
};

export default PatientProfile;
