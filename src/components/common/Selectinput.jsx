import React from "react";

const SelectInput = ({ options = [], required = false }) => {
    return (
        <select required={required} className="form-select">
            <option value="">Select...</option>
            {options.map((opt, idx) => (
                <option key={idx} value={opt}>
                    {opt}
                </option>
            ))}
        </select>
    );
};

export default SelectInput;
