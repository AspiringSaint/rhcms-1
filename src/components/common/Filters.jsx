import '../../styles/components/common/Filters.css'

const Filters = ({ filters }) => {
    return (
        <div className="filters">
            {filters.map(({ type, value, onChange, placeholder, options, label }, index) => {
                if (type === "text") {
                    // Simple text input
                    return <input key={index} value={value} onChange={onChange} placeholder={placeholder} />;
                } else if (type === "select") {
                    // Dropdown select
                    return (
                        <select key={index} value={value} onChange={onChange}>
                            {options.map(opt => (
                                <option key={opt.value} value={opt.value}>{opt.label}</option>
                            ))}
                        </select>
                    );
                } else if (type === "checkbox") {
                    // Checkbox with label
                    return (
                        <label key={index}>
                            <input type="checkbox" checked={value} onChange={onChange} /> {label}
                        </label>
                    );
                }
                return null; // ignore unknown type
            })}
        </div>
    );
};

export default Filters