import React from 'react'
import styles from './styles.module.css'

const VisionCard = ({ title, Icon, content }) => {
    return (
        <div className={styles.card}>
            <Icon />
            <h4>{title}</h4>
            <p>{content}</p>
        </div>
    )
}

export default VisionCard