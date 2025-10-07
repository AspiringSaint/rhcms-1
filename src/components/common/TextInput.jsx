import React from "react";

const TextInput = ({ type = "text", placeholder, required = false }) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            required={required}
            className="form-input"
        />
    );
};

export default TextInput;
