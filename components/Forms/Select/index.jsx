import * as React from 'react';


const Select = ({ onChange, value, title, options, required = false, filter = false, filterOption = "", onBlur = null, size = "lban__child" }) => {
    return <div className={`lban__InputContainer ${size}`}>
        <label>{title}</label>
        <select
            onChange={onChange}
            value={value}
            // defaultValue={title}
            onBlur={onBlur}
            required={required}>
            <option value="" disabled>{title}</option>
            {options && options.map((item, i) => (
                !filter ? <option value={item.value} key={i}>{item.value}</option> :
                    <option value={item[filterOption]}>{item[filterOption]}</option>
            ))}

        </select>
    </div>;
};

export default Select;
