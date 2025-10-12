import '../../styles/components/common/TimeField.css';

const TimeInput = ({
    label,
    name,
    value,
    onChange,
    required = false,
    disabled = false,
}) => {
    return (
        <div className="time-input-wrapper">
            {label && (
                <label htmlFor={name} className="time-label">
                    {label} {required && <span className="required">*</span>}
                </label>
            )}
            <input
                id={name}
                name={name}
                type="time"
                value={value}
                onChange={onChange}
                required={required}
                disabled={disabled}
                className="time-input"
            />
        </div>
    );
};

export default TimeInput;
