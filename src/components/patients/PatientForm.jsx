import '../../styles/components/patients/PatientForm.css'


import FormSection from '../common/FormSection';
import TextInput from '../common/TextInput';
import SelectInput from '../common/Selectinput';
import SubmitButton from '../common/SubmitButton';

const PatientForm = () => {

    const personalInfoOptions = ["Male", "Female", "Others"];

    return (
        <div className="patient-form-page">
            <form className="patient-form">

                <FormSection title={'Personal Information'}>
                    <TextInput placeholder={'First Name'} required={true} />
                    <TextInput placeholder={'Last Name'} required={true} />
                    <TextInput type='date' placeholder={'Date of Birth'} required={true} />
                    <SelectInput options={personalInfoOptions} required={true} />
                </FormSection>

                <FormSection title={"Contact Information"}>
                    <TextInput placeholder={"Address"} required={true} />
                    <TextInput placeholder={"City"} />
                    <TextInput placeholder={"Province"} />
                    <TextInput placeholder={"Postal Code"} />
                    <TextInput placeholder={"Contact Number"} required />
                    <TextInput type='email' placeholder={"Email Address"} />
                </FormSection>

                <SubmitButton label={"Register Patient"} />

            </form>
        </div>
    );
};

export default PatientForm;
