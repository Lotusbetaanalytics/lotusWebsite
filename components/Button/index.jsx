import React from 'react';
import styles from './styles.module.css'

const Button = ({ onClick, type, title, color = "green" }) => {
    return <div className={`nmfb__InputContainer nmfb__child`}>
        <label style={{ visibility: "hidden" }}>{title}</label>
        <button
            type={type}
            onClick={onClick}
            className={color}
        >{title}</button>
    </div>;
};

export default Button;
