import React from 'react'

const CustomButton = ({ name, onClick, color, type }) => {
    return (
        <div className="btnContainer">
            <button className={`btn ${color}`} type={type} onClick={onClick}>{name}</button>
        </div>
    )
}

export default CustomButton