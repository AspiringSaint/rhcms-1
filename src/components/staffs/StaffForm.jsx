import '../../styles/components/staffs/StaffForm.css'

const StaffForm = () => {
    return (
        <div className="staff-form-page">
            <h2>Register New Staff</h2>

            <form className="staff-form">
                {/* Basic Info */}
                <div className="form-section">
                    <h3>Basic Information</h3>
                    <input type="text" placeholder="Full Name" required />
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Password" required />
                </div>

                {/* Role & Specialty */}
                <div className="form-section">
                    <h3>Role & Details</h3>
                    <select required>
                        <option value="">Select Role</option>
                        <option>Doctor</option>
                        <option>Nurse</option>
                        <option>Pharmacist</option>
                        <option>BHW</option>
                        <option>Admin</option>
                    </select>
                    <input type="text" placeholder="Specialty (if Doctor)" />
                </div>

                {/* Status */}
                <div className="form-section">
                    <h3>Status</h3>
                    <select>
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                    </select>
                </div>

                {/* Submit */}
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default StaffForm;
