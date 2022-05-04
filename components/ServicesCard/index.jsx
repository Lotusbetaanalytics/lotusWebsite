import React from 'react'
import styles from './styles.module.css'

const ServicesCard = ({ Icon, text }) => {
    return (
        <div className={styles.card}>
            <div className={styles.circle}>
                <Icon />
            </div>
            <p>{text}</p>
        </div>
    )
}

export default ServicesCard