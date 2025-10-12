import '../../styles/components/common/SelectField.css'

const SelectField = ({
    label,
    name,
    // value,
    // onChange,
    options = [],
    required = false,
    disabled = false,
    // error,
}) => {
    return (
        <div className='select-input-wrapper'>
            {label && (
                <label htmlFor={name} className="select-label">
                    {label} {required && <span className="required">*</span>}
                </label>
            )}

            <select
                id={name}
                name={name}
                // value={value}
                // onChange={onChange}
                required={required}
                disabled={disabled}
                className="select-input"
            >
                <option value="">Select...</option>
                {options.map((opt, idx) => (
                    <option key={idx} value={opt.value || opt}>
                        {opt.label || opt}
                    </option>
                ))}
            </select>

            {/* {error && <p className="form-error">{error}</p>} */}
        </div>
    );
};

export default SelectField;
