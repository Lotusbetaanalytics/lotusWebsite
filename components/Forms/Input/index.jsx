import * as React from 'react';


const Input = ({ onChange, value, type, title, readOnly = false, required = false, onBlur = null, size = "lban__child" }) => {
    return <div className={`lban__InputContainer ${size}`}>
        <label>{title}</label>
        <input
            type={type}
            onChange={onChange}
            value={value}
            placeholder={title}
            readOnly={readOnly}
            required={required}
            onBlur={onBlur}
        />
    </div>;
};

export default Input;
