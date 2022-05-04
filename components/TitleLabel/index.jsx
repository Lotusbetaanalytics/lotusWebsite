import React from 'react'
import styles from './styles.module.css'

const TitleLabel = ({ title, color = "white" }) => {
    return (
        <div className={styles.title}>
            <div className={`${styles.indicator}`} style={{ background: color }}></div>
            <div className={`${styles.label}`} style={{ color: color }}>{title}</div>
        </div>
    )
}

export default TitleLabel