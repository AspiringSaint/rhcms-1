import '../../styles/components/staffs/StaffForm.css'

import FormPage from '../common/FormPage';
import FormSection from '../common/FormSection';
import TextInput from '../common/TextInput';
import InputField from '../common/InputField';
import SelectInput from '../common/SelectField';
import SubmitButton from '../common/SubmitButton';

const StaffForm = () => {
    return (
        <FormPage>
            <FormSection title={"Personal Information"}>
                <InputField label={'Full Name'} required={true} />
                <InputField type='email' label={'Email Address'} required={true} />
                <InputField type='password' label={'Password'} required={true} />
            </FormSection>

            <FormSection title={"Role & Details"}>
                <SelectInput label={'Role'} options={["Doctor", "Nurse", "Pharmacist", "BHW", "Admin"]} />
                <InputField label={'Specialty'} />
            </FormSection>

            <SubmitButton label={"Register"} />
        </FormPage>
    );
};

export default StaffForm;
