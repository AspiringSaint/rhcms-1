import '../../styles/components/patients/PatientForm.css'

import FormPage from '../common/FormPage';
import FormSection from '../common/FormSection';
import InputField from '../common/InputField';
import SelectField from '../common/SelectField';
import SubmitButton from '../common/SubmitButton';

const PatientForm = () => {

    const personalInfoOptions = ["Male", "Female", "Others"];

    return (
        <FormPage>
            <FormSection title={'Personal Information'}>
                <InputField label={'First Name'} required={true} />
                <InputField label={'Last Name'}  required={true} />
                <InputField label={'Date of Birth'} type='date' placeholder={'Date of Birth'} required={true} />
                <SelectField label={'Gender'} options={personalInfoOptions} required={true} />
            </FormSection>

            <FormSection title={"Contact Information"}>
                <InputField label={'Address'} required={true} />
                <InputField label={'City'}  />
                <InputField label={'Province'}  />
                <InputField label={'Postal Code'}  />
                <InputField label={'Contact Number'}  required />
                <InputField label={'Email Address'} type='email' />
            </FormSection>

            <SubmitButton label={"Register Patient"} />
        </FormPage>
    );
};

export default PatientForm;
