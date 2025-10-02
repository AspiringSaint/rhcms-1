import '../../styles/components/schedules/ScheduleForm.css';

const ScheduleForm = () => {
    return (
        <div className="schedule-form-page">
            <h2>Add New Schedule</h2>
            <form className="schedule-form">
                {/* Doctor & Specialty */}
                <div className="form-row">
                    <select required>
                        <option value="">Select Doctor</option>
                        <option value="1">Dr. Reyes</option>
                        <option value="2">Dr. Santos</option>
                    </select>
                    <input type="text" placeholder="Specialty" disabled value="Auto-filled after doctor selection" />
                </div>

                {/* Day */}
                <div className="form-row">
                    <select required>
                        <option value="">Select Day</option>
                        <option>Monday</option>
                        <option>Tuesday</option>
                        <option>Wednesday</option>
                        <option>Thursday</option>
                        <option>Friday</option>
                        <option>Saturday</option>
                        <option>Sunday</option>
                    </select>
                </div>

                {/* Time */}
                <div className="form-row">
                    <div className="time-input">
                        <label>Start Time</label>
                        <input type="time" required />
                    </div>
                    <div className="time-input">
                        <label>End Time</label>
                        <input type="time" required />
                    </div>
                </div>

                <button type="submit">Save Schedule</button>
            </form>
        </div>
    );
};

export default ScheduleForm;
