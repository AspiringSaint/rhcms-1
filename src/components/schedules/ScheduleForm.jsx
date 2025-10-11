import '../../styles/components/schedules/ScheduleForm.css';

import FormSection from '../common/FormSection';
import TextInput from '../common/TextInput';
import SelectInput from '../common/Selectinput';
import SubmitButton from '../common/SubmitButton';

const ScheduleForm = () => {
    return (
        <div className="schedule-form-page">
            <form className="schedule-form">

                <FormSection>
                    <SelectInput options={['Dr. Reyes', 'Dr. Santos']} /> 
                </FormSection>
                <FormSection>
                    <SelectInput
                        options={[
                            'Monday',
                            'Tuesday',
                            'Wednesday',
                            'Thursday',
                            'Friday',
                            'Saturday',
                            'Sunday'
                        ]} 
                    />
                    <TextInput type='time' />
                    <TextInput type='time' />
                </FormSection>

                <SubmitButton label={'Add Schedule'} />

                {/* <div className="form-row">
                    <select required>
                        <option value="">Select Doctor</option>
                        <option value="1">Dr. Reyes</option>
                        <option value="2">Dr. Santos</option>
                    </select>
                    <input type="text" placeholder="Specialty" disabled value="Auto-filled after doctor selection" />
                </div>

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

                <button type="submit">Save Schedule</button> */}
            </form>
        </div>
    );
};

export default ScheduleForm;
