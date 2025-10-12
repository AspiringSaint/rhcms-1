import '../../styles/components/schedules/ScheduleForm.css';

import FormPage from '../common/FormPage';
import FormSection from '../common/FormSection';
import SelectField from '../common/SelectField';
import SubmitButton from '../common/SubmitButton';
import TimeField from '../common/TimeField';

const ScheduleForm = () => {
    return (
        <FormPage>
            <FormSection>
                <SelectField
                    label={'Doctor'}
                    required
                    options={[
                        'Dr. Reyes',
                        'Dr. Santos'
                    ]}
                />
            </FormSection>

            <FormSection>
                <SelectField
                    label={'Day'}
                    required
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
                <TimeField label="Start Time" required />
                <TimeField label="End Time" required />
            </FormSection>

            <SubmitButton label={'Add Schedule'} />
        </FormPage>
    );
};

export default ScheduleForm;
