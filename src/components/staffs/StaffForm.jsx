import '../../styles/components/staffs/StaffForm.css'

import FormSection from '../common/FormSection';
import TextInput from '../common/TextInput';
import SelectInput from '../common/Selectinput';
import SubmitButton from '../common/SubmitButton';

const StaffForm = () => {
    return (
        <div className="staff-form-page">
            <form className="staff-form">
                
                <FormSection title={"Personal Information"}>
                    <TextInput placeholder={"Full Name"} required={true}  />
                    <TextInput type='email' placeholder={"Email Address"} required={true} />
                    <TextInput type='password' placeholder={"Password"} required={true} />
                </FormSection>

                <FormSection title={"Role & Details"}>
                    <SelectInput options={["Doctor", "Nurse", "Pharmacist", "BHW", "Admin"]} />
                    <TextInput placeholder={"Specialty"} />
                </FormSection>

                <SubmitButton label={"Register"} />
            </form>
        </div>
    );
};

export default StaffForm;
