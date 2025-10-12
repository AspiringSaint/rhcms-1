import '../../styles/components/common/SubmitButton.css'

const SubmitButton = ({ label }) => {
    return (
        <button type="submit" className="submit-btn">
            {label}
        </button>
    );
};

export default SubmitButton;
