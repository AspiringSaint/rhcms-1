import '../../styles/components/patients/PatientForm.css'

const PatientForm = () => {
    return (
        <div className="patient-form-page">
            <form className="patient-form">

                {/* Personal Information */}
                <div className="form-section">
                    <h3>Personal Info</h3>
                    <input type="text" placeholder="First Name" required />
                    <input type="text" placeholder="Last Name" required />
                    <input type="date" placeholder="Date of Birth" required />
                    <select required>
                        <option value="">Select Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                    </select>
                </div>

                {/* Contact Information */}
                <div className="form-section">
                    <h3>Contact Info</h3>
                    <input type="text" placeholder="Address" required />
                    <input type="text" placeholder="City" />
                    <input type="text" placeholder="Province/State" />
                    <input type="text" placeholder="Postal Code / ZIP" />
                    <input type="text" placeholder="Contact Number" required />
                    <input type="email" placeholder="Email Address" />
                </div>

                {/* Medical Information */}
                <div className="form-section">
                    <h3>Medical Info</h3>
                    <select required>
                        <option value="">Select Primary Doctor</option>
                        <option>Dr. Reyes</option>
                        <option>Dr. Lopez</option>
                    </select>
                    <input type="text" placeholder="Medical History / Notes" />
                    <input type="text" placeholder="Allergies" />
                    <input type="text" placeholder="Current Medications" />
                </div>

                {/* Submit */}
                <button type="submit">Register Patient</button>
            </form>
        </div>
    );
};

export default PatientForm;
