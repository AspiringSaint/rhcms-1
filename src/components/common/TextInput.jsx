// import '../../styles/components/common/Input.css'

const TextInput = ({
    label,                  // Optional label text
    type = "text",          // Input type
    placeholder = "",       // Placeholder text
    required = false,       // Whether field is required
    // value,               // Controlled value
    // onChange,            // Event handler
    name                    // Optional name attribute
}) => {
    return (
        <div className="text-input-wrapper">
            {/* Conditionally render the label if provided */}
            {label && (
                <label className="form-label" htmlFor={name}>
                    {label}
                    {required && <span className="required">*</span>}
                </label>
            )}

            <input
                id={name}
                name={name}
                type={type}
                placeholder={placeholder}
                required={required}
                // value={value}
                // onChange={onChange}
                className="form-input"
            />
        </div>
    );
};

export default TextInput;
