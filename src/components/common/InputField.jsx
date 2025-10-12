import '../../styles/components/common/InputField.css'

const InputField = ({
    label,
    type = 'text',
    name,
    // value,
    // onChange,
    placeholder = '',
    required = false,
    disabled = false,
    // error,
}) => {
    return (
        <div className='form-text-wrapper'>
            {label && (
                <label htmlFor={name} className='form-text-label'>
                    {label} {required && <span className='required'>*</span>}
                </label>
            )}

            <input
                id={name}
                name={name}
                type={type}
                // value={value}
                // onChange={onChange}
                placeholder={placeholder}
                required={required}
                disabled={disabled}
                className="form-text"
            />
        </div>
    )
}

export default InputField